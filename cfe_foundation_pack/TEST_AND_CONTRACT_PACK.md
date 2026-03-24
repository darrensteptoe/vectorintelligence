# TEST_AND_CONTRACT_PACK.md

## Purpose
CFE should inherit FPE-style hardening discipline early.

## Required test families
### Canonical engine tests
- budget total resolution
- spend timeline resolution
- funding path calculation
- reserve requirement logic
- channel allocation logic
- risk trigger logic

### Classification tests
- occupation normalization fixtures
- vendor category fixtures
- spend category fixtures
- manual override precedence
- unknown handling

### Bridge contract tests
- FPEBudgetDemandSnapshot schema validation
- CFEFundingStatusSnapshot schema validation
- scenario ID matching
- schedule shape validation

### Report contract tests
- required fields exist
- reports reference canonical snapshots
- status and warning copy matches canonical state

### Snapshot roundtrip tests
- budget snapshot export/import
- path snapshot export/import
- bridge snapshot export/import where supported

## Suggested visible diagnostics
- Self-Test PASS / FAIL surface
- Contract drift notice
- Snapshot mismatch notice
- Missing required field diagnostics
