# Example 5 — MCP + LLM Integration

> How an MCP server becomes genuinely useful when paired with an LLM workflow.

## Goal
Show the shortest path from “I have an MCP server” to “an LLM can now use it in a meaningful task loop”.

## Why this example matters
A lot of MCP content explains protocol plumbing, but developers actually care about one thing: 
**what useful workflow becomes possible once an LLM can call the tool?**

This example answers that directly.

## Candidate implementation paths
### Path A — Documentation assistant flow
- LLM uses `max_docs_mcp`
- user asks product/API question
- LLM fetches targeted documentation
- LLM returns a grounded answer or code snippet

### Path B — Custom tool flow
- LLM uses a server created from `mcp-starter-typescript`
- tool performs a narrow action
- LLM plans → calls tool → interprets result → replies

## Recommended wedge
Start with **Path A** because it is easiest to understand and easiest to demo.

## Deliverables
- one minimal MCP client config
- one “before MCP / after MCP” explanation
- 3 practical prompts
- one short walkthrough of tool call value

## Demo path (30–60 sec)
1. connect one MCP server to a client
2. ask a question that the base model would answer weakly
3. let the model use MCP
4. show the grounded output

## Success criteria
- example shows a real delta in answer quality or usefulness
- prompts are specific and reproducible
- example is readable by a developer in under 3 minutes

## Notes for implementation
- avoid generic “AI assistant for everything” framing
- show one narrow, high-signal task
- keep the example runnable with local assets already in the portfolio
