# Examples Plan — launchery-mcp-examples

## Example 1 — MAX docs integration
**Goal:** Show how a real MCP docs server helps an agent or developer answer product/API questions faster.

**Input asset:** `max_docs_mcp`

**Deliverables:**
- README for setup
- sample MCP config
- 3 example prompts / use-cases

**Status:** scaffolded in `examples/max-docs-integration/`

**Demo path (30–60 sec):**
1. build `max_docs_mcp`
2. add it to MCP client config
3. ask for MAX endpoint / guide / UI component
4. show grounded response

## Example 2 — Custom MCP server
**Goal:** Show the shortest path from starter template to a custom tool.

**Input asset:** `mcp-starter-typescript`

**Deliverables:**
- README with clone/customize/build flow
- one sample custom tool
- minimal local test steps

**Status:** scaffolded in `examples/custom-mcp-server/`

**Demo path (30–60 sec):**
1. clone starter
2. add one custom tool
3. build
4. call tool through local MCP flow

## Example 3 — MCP health-check
**Goal:** Show how to validate an MCP server before integrating it.

**Input asset:** `mcp-health-check`

**Deliverables:**
- README with install/use commands
- sample pass/fail outputs
- troubleshooting notes

**Status:** scaffolded in `examples/mcp-health-check/`

**Demo path (30–60 sec):**
1. point tool at a server
2. run health check
3. show pass/fail output
4. explain next action

## Example 4 — Multi-MCP setup
**Goal:** Show how multiple MCP servers work better as a stack than as isolated demos.

**Input assets:** `max_docs_mcp`, `mcp-starter-typescript`, `mcp-health-check`

**Deliverables:**
- README with one client config containing multiple servers
- validation flow using `mcp-health-check`
- one task that benefits from both docs + custom tool server
- troubleshooting notes for path issues / naming collisions

**Status:** blueprint only

## Example 5 — MCP + LLM integration
**Goal:** Show the practical delta between a plain LLM flow and an MCP-enabled one.

**Input assets:** `max_docs_mcp` or a starter-derived custom server

**Deliverables:**
- minimal client config
- before/after workflow explanation
- 3 concrete prompts
- short walkthrough of tool-call value

**Status:** blueprint only

## Cross-repo linking rules
- every example must link back to its source repo;
- every source repo should later link back to this examples repo;
- avoid duplicate docs when a source repo already explains setup well;
- examples repo should focus on workflows and recipes, not protocol theory.

## Non-goals
- no generic “MCP for everything” examples;
- no bloated boilerplate;
- no examples that require cloud infra just to demonstrate value.
