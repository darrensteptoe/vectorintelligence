# Campaign Finance Engine (CFE) — Foundation Pack

This folder is a build-ready planning pack for the Campaign Finance Engine, the finance sibling to the Field Path Engine.

## What this pack contains
- Product definition
- System rules
- Module map
- Bridge contract with FPE
- Core schemas
- Core formulas
- Data source strategy
- Classification rules
- Warning and status language
- Manual and operator copy
- Reporting blueprint
- Workflow map
- Phase roadmap
- Codex handoff prompt

## How to use this pack
1. Read `PRODUCT_BRIEF.md` first.
2. Lock `SYSTEM_RULES.md` before coding.
3. Use `docs/SCHEMAS.md` and `docs/FORMULAS.md` to define canonical core modules.
4. Use `WARNING_AND_STATUS_LANGUAGE.md`, `MANUAL_AND_OPERATOR_LANGUAGE.md`, and `REPORTING_BLUEPRINT.md` to populate user-facing text.
5. Use `PHASE_ROADMAP.md` to stage implementation.
6. Use `prompts/CODEX_BUILD_PROMPT.md` as the implementation handoff.

## Implementation scaffold (Phase 1 + core Phase 2/3/5 primitives)
This repository now includes a runnable JavaScript scaffold under `src/` with:

- app shell and route scaffolding (`src/app`)
- canonical contracts and language packs (`src/core/contracts`)
- canonical engines for budget, spend timeline, funding path, reserve status, risk flags, classification precedence, and report composition (`src/core/engine`)
- validated bridge surfaces for FPE import and CFE export snapshots (`src/core/bridge`)
- state/store scaffolding that computes canonical snapshots and feeds page/report surfaces (`src/state`)
- baseline tests in `test/core.test.js`

## Local verification
- Run tests: `npm test`
