# Campaign Finance Engine (CFE) — System Rules

## Governing philosophy
CFE should inherit the strongest lessons from FPE:
- canonical core logic
- deterministic outputs
- hard separation between engine math and presentation
- explicit bridge contracts
- strict traceability
- disciplined tests and contracts

## Core safe-boundary rules
1. **No calculation logic in render layers.**
2. **Budget math, funding math, benchmark math, and risk math live only in canonical engine modules.**
3. **Reports and summaries may interpret engine outputs but may not recompute canonical values.**
4. **Bridge sync between FPE and CFE must use snapshot contracts only, never loose UI state.**
5. **All exported reports must resolve from canonical snapshots, not page-local state.**

## Data integrity rules
1. **Never destroy raw imported values.**
2. **Every normalized field must remain traceable to raw source data.**
3. **Unknown is allowed.**
4. **Manual override always wins.**
5. **No silent reclassification.**
6. **Every classified value must preserve status and confidence.**
7. **Every derived metric must identify its source class: reported, standardized, modeled, bridge-derived, or manually overridden.**

## Modeling rules
1. **No benchmark output without explicit comparable logic.**
2. **No single magic-number funding target without range context.**
3. **Reported, standardized, and modeled values must remain distinct everywhere.**
4. **Outlier handling must be explicit, documented, and testable.**
5. **Scenario outputs must be tied to scenario IDs and snapshots.**
6. **Budget path outputs must be time-aware, not just totals-aware.**

## Classification rules
Classification resolution order:
**manual override > exact rule > fuzzy rule > unknown**

Statuses:
- Confirmed
- Auto-classified
- Needs review
- Unknown
- Excluded

Applies to:
- donor occupation
- donor industry
- employer sector
- vendor category
- spend category
- donor type
- fundraising channel

## Budget rules
1. **Budget lines must be phase-aware.**
2. **Every budget line must support timing information.**
3. **Optional costs must remain distinguishable from required costs.**
4. **Reserve requirements must be explicit, not implied.**
5. **Field costs imported from FPE must remain labeled as bridge-derived.**
6. **No budget line may disappear from reporting merely because it is optional or unfunded.**

## Reporting rules
1. **Every report must be backed by a canonical snapshot.**
2. **Internal reports and candidate-facing reports may differ in tone, but not in core numeric truth.**
3. **Unknown or unclassified values must be visible, not silently hidden.**
4. **Every major warning should recommend a practical action.**
5. **Every exported report must remain scoped to campaign, race, and scenario context.**
6. **Reports should distinguish facts, interpretation, and recommendations.**

## Product discipline rules
1. **Every feature must strengthen budget-path planning or finance execution.**
2. **No CRM sprawl for its own sake.**
3. **No dashboard vanity surfaces without operational consequence.**
4. **No cross-app coupling that forces FPE and CFE to share internal logic.**
5. **Keep the bridge narrow and explicit.**

## Testing and governance rules
1. **Canonical engine outputs should have self-tests and contract tests.**
2. **Classification logic should have fixtures and regression tests.**
3. **Bridge payloads should have schema validation and contract tests.**
4. **Report composers should verify required fields exist and match canonical snapshots.**
5. **Freeze candidates should require reproducible outputs and no contract drift.**
6. **Manual override behavior should be explicitly tested so override precedence cannot silently regress.**
