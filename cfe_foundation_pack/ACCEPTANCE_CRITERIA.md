# ACCEPTANCE_CRITERIA.md

This document defines what must be true for each major module to count as complete.

## Global acceptance rules
A module is not complete unless:
1. It reads from canonical data sources only.
2. It does not recompute canonical values in the UI layer.
3. It preserves traceability for raw, standardized, and modeled values.
4. It supports empty, partial, and high-confidence states cleanly.
5. It has matching manual/help language.
6. It has warning/status language aligned to canonical state.
7. It passes contract checks for required fields.
8. It visually belongs to the same ecosystem as FPE.

## Race and Campaign Setup
Complete when:
- Race setup persists without drift.
- Campaign identity, election structure, and filing calendar roundtrip cleanly.
- Scenario context is visible everywhere that depends on it.
- Empty state explains why setup matters.
- Manual text explains each field in campaign terms, not software terms.

## Budget Builder
Complete when:
- Budget lines can be created, edited, deleted, grouped, and phased cleanly.
- Required vs optional costs remain visibly distinct.
- Fixed vs variable costs remain visibly distinct.
- Field-imported lines remain marked as bridge-derived.
- Budget totals are canonical and reused everywhere else.
- The module teaches the operator how to think about campaign budget structure.

## Spend Timeline Engine
Complete when:
- Budget lines resolve into a monthly schedule deterministically.
- Peak spend windows are visible.
- Reserve pressure windows are visible.
- The timeline can explain front-loaded vs late-loaded cost patterns.
- No page recomputes spend timing independently.

## Historical Disclosure Intelligence
Complete when:
- Raw records are preserved.
- Standardized records remain traceable to raw values.
- Contribution and expenditure imports can be reviewed without ambiguity.
- Unknowns and unresolved classifications remain visible.
- Manual text teaches the user what disclosure history can and cannot prove.

## Comparable Race Engine
Complete when:
- Comparable weights are reproducible.
- Comparable rationale is visible in human language.
- Weak analogs can be identified as weak analogs.
- The user can see that comparables are evidence inputs, not magic truth.

## Benchmark Engine
Complete when:
- Credibility floor, competitive threshold, and likely-win bands are canonical.
- Category norms and timing norms are tied to comparable evidence.
- Historical realism flags surface clearly.
- Range language is understandable to campaign operators.

## Funding Path Engine
Complete when:
- Total raise target, monthly target, weekly target, and checkpoint targets come from canonical inputs only.
- Reserve floor is explicit.
- Safe-funding gap and competitive-funding gap are clear.
- Path status is consistent across dashboard, reports, and exports.
- The module teaches why pace matters, not just what the number is.

## Channel Allocation Engine
Complete when:
- Channel targets add up to the canonical funding requirement.
- Overreliance warnings work.
- Underperforming channel warnings work.
- Channel guidance remains practical and readable.

## Finance Operations Layer
Complete when:
- Calendar/activity data persists cleanly.
- Call time, meetings, events, pledges, and tasks are linked where appropriate.
- Planned vs completed status is explicit.
- The operator can understand what happened, not just log activity.

## Planned vs Actual Engine
Complete when:
- Planned and actual values reconcile against canonical activity records.
- The app can explain why the campaign is behind or ahead.
- Deposit lag and pledge conversion are understandable.
- Reports pull from the same summary snapshot.

## Donor Intelligence Layer
Complete when:
- ZIP summaries, occupation families, and industry families are traceable.
- Unknowns remain visible.
- In-district vs outside support is clear.
- The module teaches coalition and donor-base interpretation without overclaiming.

## Expenditure Intelligence Layer
Complete when:
- Budget-to-actual comparison is visible.
- Vendor and category standardization is traceable.
- Overhead/admin vs program spend can be understood quickly.
- Historical comparison language is useful and restrained.

## Risk Console
Complete when:
- Every risk card is tied to a canonical trigger.
- Every risk has severity, cause, impact, and recommended action.
- Risk colors match ecosystem rules.
- No risk surface contradicts any report or dashboard summary.

## Reporting Engine
Complete when:
- Reports never recompute engine numbers.
- Internal and candidate-facing reports share the same truth, even if tone differs.
- Reports are useful enough to circulate without rewriting.
- Reports contain interpretation, not filler.
- Reports read like senior campaign work product.

## Manual / Help layer
Complete when:
- Every major page has an explanatory intro.
- Every core metric has human-readable interpretation guidance.
- Warnings are explained.
- Good-range / bad-range / caution-range framing is present where appropriate.
- Dense teaching content exists, but does not bury the operator.
