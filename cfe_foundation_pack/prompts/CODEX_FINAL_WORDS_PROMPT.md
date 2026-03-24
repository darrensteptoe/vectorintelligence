# CODEX_FINAL_WORDS_PROMPT

You are implementing the final operator-language layer for the Campaign Finance Engine (CFE), the finance sibling to the Field Path Engine (FPE).

Your job is not to invent a lighter or cleaner version of the language. Your job is to implement the provided product language faithfully so the app feels like a serious sibling in the same ecosystem.

## Implementation rules
1. Do not replace the provided copy with generic dashboard prose.
2. Do not flatten warning language into short software alerts unless a compact card absolutely requires it.
3. Do not strip the manual down to label definitions.
4. Do not remove interpretive language from reports.
5. Do not make the right rail decorative. It must teach.
6. Do not make CFE sound like generic fundraising software.
7. Preserve the distinction between reported, standardized, and modeled values where surfaces reference them.
8. Preserve uncertainty rather than smoothing it away.

## Styling and ecosystem rules
- CFE should visually and tonally feel like FPE’s sibling.
- It does not need to be identical to FPE, but it must belong in the same ecosystem.
- Use restrained, serious, information-dense UI.
- Prefer cards, rails, sections, and helper text that feel operational, not playful.
- Warnings should use strong status treatment but avoid alarmist wording.

## Manual requirements
Implement a dense in-product manual layer:
- page-aware
- expandable where needed
- built to teach
- not just a glossary
- not sparse

The manual must explain:
- what the page is for
- what the major terms mean
- what good looks like
- what weak looks like
- what not to overread
- what the operator should do next

## Reports
Reports must use the narrative blocks provided in REPORT_BODY_COPY_LIBRARY.md as the starting standard.
Reports should not sound generic, padded, or machine-generated.

## Warnings
Use WARNING_LIBRARY_BY_TRIGGER_FAMILY.md as the warning source of truth.
Warnings should map to trigger families and severity bands, with:
- title
- body
- recommended action

## Right rail
Use RIGHT_RAIL_HELPER_TEXT_BY_PAGE.md as the default source.
The rail should feel like an operator coach.

## Empty states and microcopy
Use EMPTY_STATES_AND_INTERPRETIVE_MICROCOPY.md as the baseline for:
- empty states
- helper text
- button prompts
- tooltips
- short interpretation lines

## Deliverable standard
The final app should feel like:
- a serious campaign system
- a sibling to FPE
- dense but readable
- precise but not sterile
- useful enough that a finance director would circulate its reports and trust its warnings
