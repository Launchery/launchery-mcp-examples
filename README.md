# launchery-mcp-examples

> Runnable MCP examples that connect the Launchery portfolio into one practical learning path.

**Problem:** MCP tooling is getting better, but developers still hit the same wall: they can install a server, yet they do not see a clean end-to-end example of how multiple MCP pieces fit together in a real workflow.

**Who this is for:** developers, AI tool builders, and small teams exploring MCP who want working recipes instead of abstract protocol explanations.

## What this repo contains

This repository is intentionally narrow: not "all MCP examples", but a small set of **high-signal runnable examples** built on top of existing Launchery assets.

### v1.0.0 examples

| Example | Focus | Source asset | What you get |
|---|---|---|---|
| [Example 1 — MAX docs integration](examples/max-docs-integration/README.md) | docs server in a real client flow | `max_docs_mcp` | setup guide, sample MCP config, prompts |
| [Example 2 — Custom MCP server](examples/custom-mcp-server/README.md) | starter → useful custom tool | `mcp-starter-typescript` | customization guide, sample tool, test flow |
| [Example 3 — MCP health-check](examples/mcp-health-check/README.md) | validate a server before wiring it in | `mcp-health-check` | commands, sample outputs, troubleshooting |

### v1.1.0 blueprints

- [Example 4 — Multi-MCP setup](examples/multi-mcp-setup/README.md)
- [Example 5 — MCP + LLM integration](examples/mcp-llm-integration/README.md)

## Quick start

These examples assume the Launchery portfolio repos live next to this directory inside `github-growth-launchery/work/`:

- `../max_docs_mcp`
- `../mcp-starter-typescript`
- `../mcp-health-check`

If you are using GitHub clones instead, replace the local sibling paths with your own checkout paths.

### Fastest path

1. Build the source repo you want to demo.
2. Open the matching example directory in this repo.
3. Copy the example config / follow the commands.
4. Run the 30–60 second demo path.

## Repository structure

```text
examples/
  max-docs-integration/
    README.md
    mcp-config.example.json
    prompts.md
  custom-mcp-server/
    README.md
    mcp-config.example.json
    sample-tool.ts
  mcp-health-check/
    README.md
    commands.md
  multi-mcp-setup/
    README.md
  mcp-llm-integration/
    README.md
README.md
ROADMAP.md
EXAMPLES-PLAN.md
CHANGELOG.md
LICENSE
TOPICS.txt
RELEASE-NOTES-v1.0.0.md
```

## Why this repo matters in the portfolio

- **For the flagship:** gives `max_docs_mcp` a practical usage surface.
- **For the starter:** turns `mcp-starter-typescript` into a teaching asset.
- **For the utility:** gives `mcp-health-check` a natural place to demonstrate value.
- **For the profile:** makes the Launchery portfolio feel like a connected system, not a pile of unrelated repos.

## Source repositories

- [`max_docs_mcp`](https://github.com/Launchery/max_docs_mcp)
- [`mcp-starter-typescript`](https://github.com/Launchery/mcp-starter-typescript)
- [`mcp-health-check`](https://github.com/Launchery/mcp-health-check)

## Initial success criteria

- 3 examples are runnable with clear quickstart steps
- each example solves one concrete developer problem
- each example links back to the relevant Launchery repo
- repo README explains when to use each example
- examples stay small enough to demo in under 60 seconds each

## Status

Local scaffold prepared on 2026-04-05.

What is ready now:
- repo structure for the first 3 examples;
- support files for setup/config/commands;
- draft changelog, topics, and release notes.

What still requires external GitHub action later:
- publish/push the repository;
- apply GitHub topics from `TOPICS.txt`;
- create the actual GitHub release from `RELEASE-NOTES-v1.0.0.md`.

## Roadmap

See [ROADMAP.md](ROADMAP.md).
