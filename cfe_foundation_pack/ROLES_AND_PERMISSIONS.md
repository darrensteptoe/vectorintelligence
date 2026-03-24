# ROLES_AND_PERMISSIONS.md

## Principle
Even if role controls are lightweight at first, the product should be designed with role-aware behavior.

## Roles
### Finance Director
Full planning and operations access.
Can:
- edit budget
- edit path assumptions
- manage activities
- generate reports
- review classifications
- validate bridge snapshots

### Candidate
High-signal read access plus limited workflow interaction.
Can:
- view overview
- view candidate brief surfaces
- review call time and ask lists
- log some activity outcomes if enabled
Cannot:
- alter canonical budget structure by default

### Campaign Manager
Budget and readiness oversight.
Can:
- view full budget/path/risk
- review field-funding status
- run reports
- compare scenarios
May edit depending on campaign rules.

### Consultant
Read-heavy plus scenario/report access.
Can:
- view most strategic surfaces
- generate reports
- annotate if allowed
Should not automatically own operational edits.

### Treasurer / Compliance-Adjacent
Data review and filing readiness access.
Can:
- view contribution/expenditure records
- review categories
- export relevant summaries
Should not be forced into strategic workflow clutter.

## Permission philosophy
- Role restrictions should reduce accidental damage, not reduce clarity.
- Read-only users should still get excellent interpretation surfaces.
- Edit rights should never hide canonical truth.
