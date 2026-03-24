# FPE ↔ CFE Bridge Contract

## Bridge philosophy
The bridge between FPE and CFE should be intentionally narrow.

It exists to exchange high-value planning signals, not merge applications.

## Architectural rules
1. FPE and CFE remain separate apps.
2. No shared mutable state.
3. No deep dependency on each other’s internal module logic.
4. No silent sync.
5. Bridge payloads must be snapshot-based, versioned, and validated.

## Primary use case
FPE produces a field-demand snapshot showing what the field plan is expected to cost and when those costs hit.

CFE consumes that snapshot and uses it as one input into the campaign’s broader funding requirement.

CFE then produces a funding-status snapshot that can tell FPE whether the selected field scenario is safely funded, partially fundable, or risky.

## Snapshot: FPEBudgetDemandSnapshot
Produced by FPE, consumed by CFE.

Core fields:
- snapshot_id
- schema_version
- campaign_id
- office_id
- scenario_id
- created_at
- total_projected_field_cost
- monthly_field_cost_schedule
- staffing_cost_schedule
- field_spend_milestones
- peak_field_spend_month
- field_confidence_band
- notes

## Snapshot: CFEFundingStatusSnapshot
Produced by CFE, optionally consumed by FPE.

Core fields:
- snapshot_id
- schema_version
- campaign_id
- office_id
- scenario_id
- created_at
- selected_field_plan_cost
- funded_percent_of_field_plan
- reserve_status
- hiring_greenlight_status
- expansion_greenlight_status
- funding_risk_level
- notes

## Allowed bridge interpretations
FPE → CFE may influence:
- campaign budget plan
- timing pressure
- reserve requirements
- funding checkpoints
- field affordability diagnostics

CFE → FPE may influence:
- hiring greenlight/caution
- expansion greenlight/caution
- budget pressure messaging
- scenario realism

## Disallowed bridge behavior
The bridge must not:
- rewrite FPE internal math
- rewrite CFE internal finance math
- create live circular dependencies
- share UI state
- bypass snapshot validation

## Validation requirements
Bridge snapshots should validate:
- schema version
- required field presence
- campaign/scenario identifiers
- numeric shape of cost schedules
- snapshot timestamp and provenance

## Recommended bridge statuses
For finance status returned to FPE:
- Greenlight
- Caution
- Redline

## Recommended FPE confidence labels
For field demand imported to CFE:
- Stable
- Moderate uncertainty
- High uncertainty

## Human-readable bridge message examples
- “Selected field plan is currently 84% funded under the active finance path.”
- “Organizer expansion should not proceed until reserve status returns to Greenlight.”
- “Field scenario is historically plausible but not cash-safe under current monthly raise pace.”
