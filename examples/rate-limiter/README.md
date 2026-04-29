# Example 6 — Rate-limited MCP server

> Add in-memory rate limiting around MCP tools before exposing them to real clients.

## Goal
Show a small MCP server that protects tool calls with either a token bucket or a sliding-window limiter.

## What this example demonstrates
- where to put rate limiting in an MCP tool handler;
- how token bucket and sliding-window limits differ;
- how to configure limits without changing tool code;
- what error payload a client receives when a call is throttled.

## Files
- [`rate-limited-server.mjs`](rate-limited-server.mjs) — runnable sample server
- [`config.example.json`](config.example.json) — limiter strategy examples
- [`mcp-config.example.json`](mcp-config.example.json) — MCP client config shape

## Prerequisites
- Node.js 18+
- npm 8+
- MCP SDK and Zod installed in the directory where you run the server:

```bash
npm install @modelcontextprotocol/sdk zod
```

## Run the token bucket example

```bash
RATE_LIMIT_STRATEGY=token_bucket \
RATE_LIMIT_CAPACITY=5 \
RATE_LIMIT_REFILL_PER_SECOND=1 \
node examples/rate-limiter/rate-limited-server.mjs
```

Token bucket is a good default for interactive tools because it allows short bursts and then refills over time.

## Run the sliding-window example

```bash
RATE_LIMIT_STRATEGY=sliding_window \
RATE_LIMIT_MAX_REQUESTS=10 \
RATE_LIMIT_WINDOW_MS=60000 \
node examples/rate-limiter/rate-limited-server.mjs
```

Sliding window is useful when you want a hard cap over a recent time range.

## Tool in the sample

The server exposes one tool:

| Tool | Purpose |
| --- | --- |
| `rate_limited_echo` | Returns the input message after passing the configured limiter. |

When the caller exceeds the limit, the tool returns an MCP error response with:
- `isError: true`
- a clear throttling message
- strategy-specific retry context

## MCP client config

Copy [`mcp-config.example.json`](mcp-config.example.json), replace the absolute path, and tune the environment values for your deployment.

## Demo path (30-60 sec)
1. install the two runtime dependencies
2. start the server with the token bucket environment variables
3. call `rate_limited_echo` repeatedly from an MCP client
4. lower `RATE_LIMIT_CAPACITY` to `1` and repeat
5. switch to `RATE_LIMIT_STRATEGY=sliding_window` and compare behavior

## Production notes
- This example stores counters in memory. Use Redis, Upstash, Dragonfly, or another shared store when you run more than one server process.
- Choose a key that matches your trust boundary. Per-user limits are usually safer than one global process-wide limit.
- Keep throttling messages explicit enough for debugging, but do not include tokens, headers, or private request data.

## Related examples
- [Example 2 — Custom MCP server](../custom-mcp-server/README.md)
- [Example 3 — MCP health-check](../mcp-health-check/README.md)
