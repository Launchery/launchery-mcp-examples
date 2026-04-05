# Example 4 — Multi-MCP Setup

> How to run multiple MCP servers together in one practical developer workflow.

## Goal
Show how several MCP servers can work as a small tool stack instead of isolated demos.

## Why this example matters
Most MCP tutorials stop at “here is one server”. Real usage starts when a developer combines:
- a domain-specific server,
- a custom server,
- a validation/diagnostic utility.

This example demonstrates exactly that.

## Stack in this example
- `max_docs_mcp` — documentation lookup
- `mcp-starter-typescript` derivative — custom tool server
- `mcp-health-check` — validation before wiring everything together

## Workflow story
1. Validate both servers with `mcp-health-check`
2. Register both servers in one MCP client config
3. Use the docs server for product/API context
4. Use the custom server for a task-specific tool
5. Show how the client benefits from both in one session

## Deliverables
- `mcp-config.example.json`
- README with setup flow
- example prompts / task flow
- troubleshooting section for multi-server conflicts

## Demo path (30–60 sec)
1. build docs server
2. build custom starter-derived server
3. run health-check against both
4. show one client config with two MCP servers
5. ask one task that uses both

## Success criteria
- setup fits on one screen
- one configuration file shows both servers clearly
- clear explanation of when multi-MCP is better than one big server
- no cloud dependency required

## Notes for implementation
- prefer Claude Code / generic MCP JSON examples over client-specific sprawl
- keep prompts concrete, not theoretical
- highlight failure modes: naming collisions, misconfigured paths, missing builds
