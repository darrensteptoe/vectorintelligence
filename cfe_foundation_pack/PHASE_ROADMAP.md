# Campaign Finance Engine (CFE) — Phase Roadmap

## Phase 0 — Foundation
Deliver:
- product brief
- system rules
- module map
- bridge contract
- schemas
- formulas
- data sources
- classification rules
- warning language
- manual/operator language
- reporting blueprint
- workflows
- Codex handoff prompt

Goal:
Lock the full design before implementation.

## Phase 1 — Skeleton and Safe Core
Deliver:
- app shell
- canonical data types
- safe boundary docs in code
- store/state scaffolding
- page routing
- import/export contract surfaces

Goal:
Set architecture before feature buildout.

## Phase 2 — Campaign Setup + Budget Builder
Deliver:
- race/campaign setup
- filing/election calendar inputs
- budget plan object
- budget line UI
- required/optional line handling
- budget summaries

Goal:
Make the campaign’s intended plan concrete.

## Phase 3 — Spend Timeline + Reserve Layer
Deliver:
- spend pattern handling
- monthly cost curve
- peak spend windows
- reserve floor logic
- cash stress detection

Goal:
Turn budget totals into time-aware pressure.

## Phase 4 — Historical Evidence + Benchmark Layer
Deliver:
- source ingest scaffolding
- raw record storage
- comparable race engine
- benchmark outputs
- realism notes

Goal:
Add evidence without compromising core planning structure.

## Phase 5 — Funding Path + Channel Targets
Deliver:
- funding requirement snapshot
- monthly/weekly/checkpoint targets
- channel allocation
- path statuses
- early risk logic

Goal:
Generate the actual finance plan.

## Phase 6 — Finance Operations
Deliver:
- finance calendar
- activities
- call time
- donor meetings
- event tracking
- pledge tracking
- tasks and follow-up

Goal:
Track the work behind the numbers.

## Phase 7 — Donor + Spend Intelligence
Deliver:
- donor geography
- occupation classification
- vendor and spend classification
- concentration metrics
- spend mix summaries

Goal:
Explain who funds the campaign and where money is going.

## Phase 8 — Reporting + Polish
Deliver:
- report composers
- export surfaces
- manual/help content
- status and warning polish
- empty states
- QA on circulation-ready language

Goal:
Make the app feel complete and trustworthy.

## Phase 9 — Scenario Depth + Hardening
Deliver:
- scenario overlays
- bridge robustness
- regression fixtures
- freeze-candidate contracts
- release checklist

Goal:
Harden before expansion.
