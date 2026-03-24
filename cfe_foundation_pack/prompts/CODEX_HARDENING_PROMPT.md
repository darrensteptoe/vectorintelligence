# CODEX_HARDENING_PROMPT.md

You are implementing the final hardening and build-control layer for the Campaign Finance Engine (CFE), the finance sibling to the Field Path Engine (FPE).

## Primary objective
Build CFE so it feels like part of the same ecosystem as FPE while remaining architecturally separate. Do not thin the language, simplify the product into a generic dashboard, or improvise a different product philosophy.

## Required behavior
- Use the handoff docs as the source of truth.
- Preserve canonical engine boundaries.
- Do not place finance math in UI render layers.
- Keep reported, standardized, and modeled values visibly distinct.
- Treat manual/help density as a product requirement, not optional polish.
- Implement the app map and right-rail philosophy in the same family as FPE.
- Make report previews and exports feel circulation-ready.
- Ensure warnings and statuses use the exact language families from the handoff.

## Manual/help expectations
The manual must be dense, interpretive, and campaign-literate.
Every major page should explain:
- what it is for
- how to read it
- what strong vs weak conditions usually look like
- what to do next
- what the page can and cannot prove

## Ecosystem expectations
CFE should look like FPE's sibling:
- serious
- high-signal
- restrained
- card-based
- right-rail useful
- no gimmicks

## Acceptance standard
Do not consider a module complete until it satisfies the acceptance criteria and includes matching warning, status, report, and manual language.
