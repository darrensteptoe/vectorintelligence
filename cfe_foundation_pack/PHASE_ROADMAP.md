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
- codex handoff prompt

Goal:
Lock the full design before implementation.

## Phase 1 — Skeleton and Safe Core
Deliver:
- app shell
- canonical data types
- safe boundary docs in code
- store/state scaffolding
- empty page routing
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
- call time tracker
- donor meetings
- events
- pledge pipeline
- follow-up tasks

Goal:
Track the work that produces money.

## Phase 7 — Intelligence Layers
Deliver:
- donor ZIP summaries
- occupation classification
- vendor/spend classification
- expenditure intelligence surfaces
- concentration analysis

Goal:
Make the app strategically smarter.

## Phase 8 — Reporting + Manual Surfaces
Deliver:
- weekly memo
- candidate brief
- committee brief
- filing snapshot
- budget health report
- integrated help/manual panels

Goal:
Ship consultant-grade outputs and explanations.

## Phase 9 — FPE Bridge
Deliver:
- FPE import validation
- field affordability logic
- CFE export back to FPE
- bridge status language

Goal:
Connect field and finance without coupling the apps too tightly.

## Phase 10 — Hardening and Freeze
Deliver:
- self-tests
- contract tests
- report tests
- bridge tests
- no-drift verification
- freeze closeout docs

Goal:
Reach stable candidate build discipline similar to late-stage FPE.
