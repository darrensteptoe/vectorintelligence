# Codex Build Prompt — Campaign Finance Engine (CFE)

You are building the **Campaign Finance Engine (CFE)**, the standalone finance sibling to the Field Path Engine (FPE).

## Non-negotiable product definition
CFE is not a generic CRM, not bookkeeping software, and not a clone of existing campaign tools. It is a **campaign budget, funding path, and finance execution engine**.

Its job is to help campaigns:
- model full campaign costs
- phase those costs over time
- determine what must be raised and by when
- compare the plan to historical realism where useful
- track finance execution
- generate consultant-grade reports
- and communicate cleanly with FPE through a narrow bridge contract

## Architectural instructions
1. Keep CFE architecturally separate from FPE.
2. Use a sacred-core structure: no core calculation logic in render layers.
3. Canonical math must live in dedicated engine modules only.
4. Reports and UI surfaces must consume canonical snapshots rather than recomputing local values.
5. Preserve raw source values for any imported public data.
6. Manual override precedence must be built into classification architecture from the start.
7. The bridge with FPE must be snapshot-based and validated.

## Required reading from this pack before implementation
- PRODUCT_BRIEF.md
- SYSTEM_RULES.md
- docs/MODULE_MAP.md
- docs/BRIDGE_CONTRACT_FPE_CFE.md
- docs/SCHEMAS.md
- docs/FORMULAS.md
- DATA_SOURCES.md
- CLASSIFICATION_RULES.md
- WARNING_AND_STATUS_LANGUAGE.md
- MANUAL_AND_OPERATOR_LANGUAGE.md
- REPORTING_BLUEPRINT.md
- WORKFLOWS.md
- PHASE_ROADMAP.md

## Build priorities
Implement in phased order as described in `PHASE_ROADMAP.md`.

Do not jump ahead into decorative UI or secondary features before the following are stable:
- campaign setup
- budget builder
- spend timeline
- funding requirement snapshot
- risk and reserve logic
- finance operations basics
- reporting structure

## User-facing language requirement
Do not invent warning copy, help text, or report tone on your own if the pack already provides language. Use the language files in this pack as the source of truth for:
- statuses
- warnings
- descriptions
- help/manual text
- report phrasing
- operator-facing interpretations

## Reporting requirement
Reports must feel like they were written by a strong finance director or senior consultant. They should be:
- direct
- readable
- practical
- non-theatrical
- clear about current condition, interpretation, and next moves

## Classification requirement
Classification resolution order must be:
**manual override > exact rule > fuzzy rule > unknown**

Unknowns must remain visible in outputs.

## Deliverable standard
Produce a clean, modular app structure that can be hardened and tested like late-stage FPE. Favor clarity, canonical snapshots, and safe boundaries over speed hacks.
