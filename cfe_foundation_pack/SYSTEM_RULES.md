# Campaign Finance Engine (CFE) — System Rules

## Governing philosophy
CFE should inherit the strongest lessons from FPE:
- canonical core logic
- deterministic outputs
- hard separation between engine math and presentation
- explicit bridge contracts
- strict traceability
- disciplined tests and contracts

## Safe-boundary rules
1. No calculation logic in render layers.
2. Budget math, funding math, benchmark math, and risk math live only in canonical engine modules.
3. Reports may interpret canonical outputs but may not recompute them.
4. Bridge sync between FPE and CFE must use validated snapshots only.

## Data integrity rules
1. Never destroy raw imported values.
2. Every normalized field must remain traceable to the raw source.
3. Unknown is allowed.
4. Manual override always wins.
5. No silent reclassification.
6. Every classified value must preserve status and confidence.

## Modeling rules
1. No benchmark output without explicit comparable logic.
2. No single magic-number funding target without range context.
3. Reported, standardized, and modeled values must remain distinct everywhere.
4. Outlier handling must be explicit and testable.
5. Scenario outputs must be tied to scenario IDs and snapshots.

## Product discipline rules
1. Every feature must strengthen budget-path planning or finance execution.
2. No CRM sprawl for its own sake.
3. No vanity dashboards without operational consequence.
4. Risks must recommend an action.
5. FPE and CFE remain separate apps.

## Reporting rules
1. Every report must be backed by a canonical snapshot.
2. Candidate-facing and internal reports may differ in tone, but not in numeric truth.
3. Unknown and unclassified values must be shown rather than hidden.
4. Every exported report must stay scoped to campaign, race, and scenario context.

## Testing rules
1. Canonical engine outputs should have self-tests and contract tests.
2. Classification logic should have fixtures and regression tests.
3. Bridge payloads should have schema validation and contract tests.
4. Report composers should verify required fields exist and match canonical snapshots.
5. Freeze candidates should require reproducible outputs and no contract drift.
