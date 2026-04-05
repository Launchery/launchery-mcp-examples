# Example 2 — Custom MCP server from starter

> Use `mcp-starter-typescript` as the base for a tiny custom MCP server.

## Goal
Show the shortest path from starter template to a useful custom tool.

## Source repo
- [`mcp-starter-typescript`](https://github.com/Launchery/mcp-starter-typescript)

## What this example demonstrates
- how to start from the Launchery starter;
- how to add one focused custom tool;
- how to build and smoke-test the result locally.

## Sample custom tool
This example includes [`sample-tool.ts`](sample-tool.ts), a small `slugify-text` tool.

Why this tool:
- easy to understand;
- trivial to demo;
- shows the exact extension pattern without drowning in app logic.

## Prerequisites
- Node.js 18+
- npm 8+
- local checkout of `mcp-starter-typescript` in `../mcp-starter-typescript` or your own clone path

## Local flow

```bash
cd ../mcp-starter-typescript
npm install
npm install zod
```

Copy `sample-tool.ts` into the starter repo:

```bash
cp ../launchery-mcp-examples/examples/custom-mcp-server/sample-tool.ts ./src/tools/slugify-text.ts
```

Register it in `src/tools/index.ts`:

```ts
import { slugifyTextTool } from "./slugify-text.js";

export function registerTools(server: McpServer): void {
  echoTool(server);
  addTool(server);
  searchTool(server);
  slugifyTextTool(server);
}
```

Optionally rename the server in `src/index.ts` from `my-mcp-server` to something more specific.

## Build

```bash
npm run build
```

## MCP client config

See [`mcp-config.example.json`](mcp-config.example.json).

## Minimal smoke test

Start the built server:

```bash
node dist/index.js
```

Or perform a simple initialize handshake:

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0.0"}}}' | node dist/index.js
```

## Demo path (30–60 sec)

1. copy the sample tool into the starter
2. register it in `src/tools/index.ts`
3. build the server
4. connect it to a client via MCP config
5. ask the client to slugify a release title or page heading

## Why this example matters
A lot of MCP tutorials stop at boilerplate. This example shows the moment where the starter becomes a real tool.

## Troubleshooting

### Tool does not appear
- confirm the import path is `./slugify-text.js`
- verify `slugifyTextTool(server)` is called in `registerTools`
- rebuild after changes: `npm run build`

### Build fails after adding the tool
- ensure `zod` is installed: `npm install zod`
- re-run `npm install`
- check for TypeScript import path mistakes

## Related examples
- [Example 3 — MCP health-check](../mcp-health-check/README.md)
- [Example 4 — Multi-MCP setup](../multi-mcp-setup/README.md)
