# IMPORT_EXPORT_AND_SNAPSHOT_RULES.md

## Principle
Import/export behavior should be deterministic, inspectable, and compatible with snapshot governance.

## Imports
Must support:
- raw finance data imports
- classification table imports where applicable
- FPE bridge snapshot imports
- budget imports if standardized

Rules:
- imported files must be validated
- imported snapshots must preserve provenance
- imports should produce visible summaries of accepted, rejected, and flagged records

## Exports
Must support:
- canonical budget snapshot export
- finance path snapshot export
- report export
- donor intelligence summaries
- bridge status snapshot export back to FPE

Rules:
- exports should identify campaign, scenario, and snapshot date
- exports should never silently flatten reported vs standardized vs modeled distinctions
- exports should roundtrip where intended

## Snapshot behavior
Canonical snapshots should be used for:
- budget freeze points
- scenario comparisons
- report generation
- bridge exchange
- validation and regression testing
