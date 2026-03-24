# CODEX BUILD PROMPT — Campaign Finance Engine (CFE)

Build the Campaign Finance Engine (CFE) as a standalone sibling to the Field Path Engine (FPE). Do not merge the applications. Preserve a narrow snapshot-based bridge only.

## Non-negotiable rules
- No calculation logic in render glue.
- Canonical engine logic only in dedicated core modules.
- Do not recompute canonical outputs inside reports or cards.
- Preserve raw imported values.
- Manual override always wins over automatic classification.
- Unknown is allowed and must remain visible.
- Reported, standardized, and modeled values must stay distinct.
- FPE and CFE must communicate only through validated snapshot contracts.

## What to build first
1. App skeleton and safe boundary structure
2. Race/campaign setup
3. Budget builder
4. Spend timeline engine
5. Funding path engine
6. Finance activity layer
7. Donor/spend intelligence basics
8. Risk console
9. Reporting surfaces
10. Bridge import/export surfaces

## Build-quality requirement
This app must not just be structurally correct. It must use the language in this handoff pack for:
- statuses
- warnings
- helper text
- empty states
- report sections
- manual copy
- interpretation notes

## Required docs to follow
Read and implement according to:
- PRODUCT_BRIEF.md
- SYSTEM_RULES.md
- DATA_SOURCES.md
- CLASSIFICATION_RULES.md
- WARNING_AND_STATUS_LANGUAGE.md
- MANUAL_AND_OPERATOR_LANGUAGE.md
- REPORTING_BLUEPRINT.md
- docs/MODULE_MAP.md
- docs/BRIDGE_CONTRACT_FPE_CFE.md
- docs/SCHEMAS.md
- docs/FORMULAS.md
- docs/WORKFLOWS.md
- PHASE_ROADMAP.md
- ui_copy/UI_COPY_PACK.md
- ui_copy/EMPTY_STATES_AND_TOOLTIPS.md
- manual/FULL_MANUAL_PACK.md
- reports/FULL_REPORT_LANGUAGE_PACK.md
- reports/REPORT_SECTION_LANGUAGE.md
- reports/REPORT_STATUS_PHRASES.md

## Output expectation
Produce a clean build-ready project that reflects this product definition, not a simplified clone of donor software. The app should feel like an elite campaign operating product, with disciplined architecture and consultant-grade outputs.
