# Commands — MCP health-check workflow

## Build the checker

```bash
cd ../mcp-health-check
npm install
npm run build
```

## Check max_docs_mcp

```bash
node ../mcp-health-check/dist/index.js node ../max_docs_mcp/dist/index.js
```

## Check starter template server

```bash
node ../mcp-health-check/dist/index.js node ../mcp-starter-typescript/dist/index.js
```

## Check starter-derived custom server

```bash
node ../mcp-health-check/dist/index.js node ../mcp-starter-typescript/dist/index.js --test slugify-text
```

## JSON output

```bash
node ../mcp-health-check/dist/index.js node ../max_docs_mcp/dist/index.js --json
```

## Example pass excerpt

```text
✅ initialize: Server initialized successfully
✅ tools/list: Found tools
⚠️ resources/list: No resources registered
```

## Example fail excerpt

```text
❌ initialize: Failed to initialize server
```

## Fast troubleshooting loop
1. rebuild the target server
2. rerun the checker
3. if initialize passes, try a tool test
4. only then wire the server into a client
