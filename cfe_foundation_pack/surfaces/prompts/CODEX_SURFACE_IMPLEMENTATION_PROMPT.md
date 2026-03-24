# Codex Surface Implementation Prompt

Use the foundation pack and this extended content pack together.

Your task is to implement the Campaign Finance Engine surfaces so they are not just structurally correct, but linguistically complete and professionally usable.

## Non-negotiable requirements
1. Do not invent thinner or more generic copy when explicit copy is provided in this handoff.
2. Preserve the distinction between reported, standardized, and modeled values where the docs call for it.
3. Preserve the warning tone: practical, serious, not melodramatic.
4. Preserve the report tone: consultant-grade, concise, readable.
5. Preserve the manual tone: explanatory, honest, campaign-literate.
6. Keep the engine and render boundary clean. UI surfaces may consume canonical snapshots, not recompute them.
7. Implement empty states, tooltip text, helper text, and section intros using the supplied language or very close derivatives where context requires small adjustments.

## What to build from this pack
- Page headers and introductions for all major CFE pages
- Core card helper text
- Warnings and status blocks
- Empty states
- Tooltips
- Manual/help page sections
- Report shell language and narrative section bodies

## What not to do
- Do not reduce warnings to generic “Something may be wrong” language.
- Do not collapse nuanced status labels into only green/yellow/red badges without the accompanying text.
- Do not omit helper text for budget categories, timeline interpretation, funding-path explanation, donor intelligence, or expenditure intelligence.
- Do not create bloated paragraphs where crisp language is provided.

## Build standard
The product should feel like a disciplined, elite campaign tool used by serious finance directors and consultants. It should not feel like a demo dashboard or a generic SaaS admin panel.
