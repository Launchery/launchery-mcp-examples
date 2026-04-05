# Example 3 — MCP health-check workflow

> Use `mcp-health-check` to verify an MCP server before wiring it into a client.

## Goal
Show how to validate an MCP server quickly, spot obvious failures, and know what to fix next.

## Source repo
- [`mcp-health-check`](https://github.com/Launchery/mcp-health-check)

## What this example demonstrates
- how to run a health check against an MCP server;
- how to interpret pass/fail output;
- how to turn vague “it doesn't work” into concrete next actions.

## Prerequisites
- built `mcp-health-check`
- a target MCP server to inspect
- Node.js 18+

## Setup

```bash
cd ../mcp-health-check
npm install
npm run build
```

## Commands

See [`commands.md`](commands.md) for ready-to-run examples against:
- `max_docs_mcp`
- `mcp-starter-typescript`
- a starter-derived custom server

## Sample pass/fail interpretation

### Healthy server
- `initialize` passes
- `tools/list` returns one or more tools
- `resources/list` either passes or reports none registered

### Suspicious server
- initialize fails → wrong build, wrong command, or broken server startup
- tools/list fails → registration problem or protocol bug
- test call fails → the tool exists, but runtime logic is broken

## 30–60 second demo path

1. build `mcp-health-check`
2. point it at a target server
3. show the result
4. map failure output to the next action

## Why this example matters
Validation is the missing middle between “the code compiles” and “the MCP client can trust this server”.

## Troubleshooting notes

### Command not found
Use the local built entrypoint instead of a global install:

```bash
node ../mcp-health-check/dist/index.js node ../max_docs_mcp/dist/index.js
```

### Target server hangs or exits
- rebuild the target repo
- run the target entrypoint directly
- verify the path to `dist/index.js`

### Tool test fails
- confirm the tool name exists via `tools/list`
- verify the server can handle empty or test arguments
- retry with the simplest registered tool first

## Related examples
- [Example 1 — MAX docs integration](../max-docs-integration/README.md)
- [Example 2 — Custom MCP server](../custom-mcp-server/README.md)
