#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

function numberFromEnv(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function createTokenBucketLimiter({
  capacity = 5,
  refillPerSecond = 1,
  key = "global",
} = {}) {
  const buckets = new Map();

  return () => {
    const now = Date.now();
    const bucket = buckets.get(key) ?? { tokens: capacity, updatedAt: now };
    const elapsedSeconds = (now - bucket.updatedAt) / 1000;
    bucket.tokens = Math.min(capacity, bucket.tokens + elapsedSeconds * refillPerSecond);
    bucket.updatedAt = now;

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      buckets.set(key, bucket);
      return { allowed: true, remaining: Math.floor(bucket.tokens) };
    }

    buckets.set(key, bucket);
    const retryAfterMs = Math.ceil(((1 - bucket.tokens) / refillPerSecond) * 1000);
    return {
      allowed: false,
      retryAfterMs,
      reason: `Rate limit exceeded. Retry after ${retryAfterMs}ms.`,
    };
  };
}

function createSlidingWindowLimiter({
  maxRequests = 10,
  windowMs = 60000,
  key = "global",
} = {}) {
  const windows = new Map();

  return () => {
    const now = Date.now();
    const startsAfter = now - windowMs;
    const requests = (windows.get(key) ?? []).filter((timestamp) => timestamp > startsAfter);

    if (requests.length < maxRequests) {
      requests.push(now);
      windows.set(key, requests);
      return { allowed: true, remaining: maxRequests - requests.length };
    }

    windows.set(key, requests);
    const retryAfterMs = Math.max(1, requests[0] + windowMs - now);
    return {
      allowed: false,
      retryAfterMs,
      reason: `Rate limit exceeded. Retry after ${retryAfterMs}ms.`,
    };
  };
}

function createLimiterFromEnv() {
  const strategy = process.env.RATE_LIMIT_STRATEGY ?? "token_bucket";
  const key = process.env.RATE_LIMIT_KEY ?? "global";

  if (strategy === "sliding_window") {
    return createSlidingWindowLimiter({
      key,
      maxRequests: numberFromEnv("RATE_LIMIT_MAX_REQUESTS", 10),
      windowMs: numberFromEnv("RATE_LIMIT_WINDOW_MS", 60000),
    });
  }

  return createTokenBucketLimiter({
    key,
    capacity: numberFromEnv("RATE_LIMIT_CAPACITY", 5),
    refillPerSecond: numberFromEnv("RATE_LIMIT_REFILL_PER_SECOND", 1),
  });
}

const server = new McpServer({
  name: "rate-limited-example",
  version: "1.0.0",
});

const checkLimit = createLimiterFromEnv();

server.tool(
  "rate_limited_echo",
  "Echo a message after passing the configured rate limiter.",
  {
    message: z.string().min(1).describe("Message to echo"),
  },
  async ({ message }) => {
    const limit = checkLimit();
    if (!limit.allowed) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: limit.reason,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: message,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
