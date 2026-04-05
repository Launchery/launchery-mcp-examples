# Example 1 — MAX docs integration

> Use `max_docs_mcp` as a local documentation server for coding agents.

## Goal
Show how a real MCP docs server helps an agent or developer answer MAX Platform questions faster and more reliably.

## Source repo
- [`max_docs_mcp`](https://github.com/Launchery/max_docs_mcp)

## What this example demonstrates
- how to build a real MCP docs server;
- how to connect it to an MCP client config;
- how documentation lookup improves coding workflows.

## Prerequisites
- Node.js 18+
- npm 8+
- local checkout of `max_docs_mcp` in `../max_docs_mcp` or your own clone path

## Local setup

```bash
cd ../max_docs_mcp
npm install
npm run build
```

Confirm the built entrypoint exists:

```bash
ls dist/index.js
```

## MCP client config

Copy `mcp-config.example.json` and replace `/absolute/path/to/...` with your real absolute path.

Example shape:

```json
{
  "mcpServers": {
    "max-docs": {
      "command": "node",
      "args": ["/absolute/path/to/max_docs_mcp/dist/index.js"]
    }
  }
}
```

You can use this shape with Claude Desktop, Cursor, Codex CLI, or any MCP client that accepts stdio servers.

## 30–60 second demo path

1. build `max_docs_mcp`
2. register it in your MCP client config
3. start a session with MCP enabled
4. ask one targeted MAX question from `prompts.md`
5. show the grounded answer

## Example prompts

See [`prompts.md`](prompts.md).

## Good demo questions
- Which MAX Bot API endpoint should I use to send a message?
- Show me the guide for bot creation in MAX.
- What events exist in MAX Bridge API?
- What props does the MAX UI `Button` component support?

## Why this is useful
Without MCP, the model guesses from stale or missing context.
With `max_docs_mcp`, the client can fetch local MAX docs on demand and answer with grounded references.

## Troubleshooting

### The client does not see the server
- use an absolute path to `dist/index.js`
- rebuild the repo with `npm run build`
- restart the MCP client after changing config

### The server starts but answers look empty
- verify the build completed successfully
- test the server manually:

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0.0"}}}' | node ../max_docs_mcp/dist/index.js
```

## Related examples
- [Example 4 — Multi-MCP setup](../multi-mcp-setup/README.md)
- [Example 5 — MCP + LLM integration](../mcp-llm-integration/README.md)
