# CODEX_COMPONENT_IMPLEMENTATION_PROMPT.md

You are implementing the Campaign Finance Engine (CFE) surfaces from the attached handoff pack.

## Your job
Build the product surfaces faithfully using the language, statuses, explanations, manual text, warning copy, report templates, and UI strings supplied in this packet.

## Critical requirement
Do not replace supplied language with generic SaaS filler. The supplied copy is part of the product architecture and should be treated as canonical unless a surface requires a compressed variant due to layout constraints.

## Implementation rules
1. Preserve the distinction between reported, standardized, modeled, and bridge-derived values.
2. Do not invent new statuses where canonical statuses are already defined.
3. Use the warning hierarchy and state matrix language when building banners, cards, and notices.
4. Use the report templates as default narrative bodies for report sections.
5. Use manual copy for help panels, manual pages, and contextual explanation drawers.
6. Unknown and needs-review states must remain visible.
7. Do not rewrite the bridge contract logic or its messaging.
8. Where a screen needs shorter copy, shorten carefully without losing the underlying meaning.

## Surfaces to implement with the provided copy
- Overview page
- Budget Plan page
- Spend Timeline page
- Funding Path page
- Activity page
- Donor Intelligence page
- Expenditure Intelligence page
- Reports page
- Manual page
- Shared modals
- Empty states
- Banners
- Status chips
- Tooltips
- Report templates and preview language

## Do not do these things
- Do not collapse the app into a generic CRM.
- Do not use placeholder text such as “Lorem ipsum,” “Sample insight,” or “Your data goes here.”
- Do not paraphrase the warning logic into vague, upbeat filler.
- Do not hide uncertainty.
- Do not create decorative dashboards without operational meaning.

## Deliverable expectation
The final implementation should feel like a top-tier campaign product written by people who understand campaign operations and finance, not like a generic admin dashboard with campaign labels applied to it.
