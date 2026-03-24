# Campaign Finance Engine (CFE) — Full Handoff Pack

This pack is the build-ready product definition for the Campaign Finance Engine (CFE), the finance sibling to the Field Path Engine (FPE).

## Purpose
CFE is a standalone campaign budget, funding path, and finance execution system. It should help a campaign answer:

- What are we trying to fund?
- When do those costs hit?
- What does history say is realistic for this kind of race?
- What must we raise by each checkpoint?
- Which finance activities are producing the money?
- What part of the plan is safely fundable right now?
- What needs to change before the next cost window arrives?

## Pack contents
- core product and architecture docs
- schemas
- formulas
- workflows
- bridge contract with FPE
- reporting blueprint and report language
- full warning and status language
- manual/operator copy
- UI copy pack
- empty-state and helper text pack
- Codex build prompt

## Product stance
CFE is not generic bookkeeping software, generic donor CRM, or a compliance replacement. It is a budget-path planning and finance execution control system.

## Relationship to FPE
- FPE = operations demand engine
- CFE = budget and funding path engine

They remain separate applications and communicate only through narrow snapshot contracts.

## Implementation scaffold included
This folder now includes a runnable JavaScript scaffold under `src/` with:
- sacred-core boundary docs and canonical contracts
- canonical engines for budget, timeline, funding path, reserve logic, risk flags, classification precedence, and report composition
- validated FPE import and CFE export snapshot bridge surfaces
- store/state scaffolding that computes canonical snapshots and feeds route pages
- route/page shell for Overview, Setup, Budget, Timeline, Benchmarks, Funding Path, Channels, Activity, Pledges, Donors, Spending, Risks, Reports, and Bridge
- language modules aligned to this handoff pack (`warning`, `manual`, `reporting`, `ui copy`, `empty states`)
- baseline tests in `test/core.test.js`

## Local verification
- Run: `npm test`
