# STATE_TRANSITIONS.md

## Purpose
Define the lifecycle states of major CFE objects so the app behaves consistently.

## Budget states
- Draft
- Reviewed
- Locked
- Superseded
- Archived

Rules:
- Draft budget can be edited freely.
- Reviewed budget can still be edited but should show caution on downstream report use.
- Locked budget is the canonical planning basis for path generation.
- Superseded budget remains viewable for history.
- Archived budget is read-only historical context.

## Scenario states
- Draft Scenario
- Active Scenario
- Comparison Scenario
- Archived Scenario

Rules:
- Only one Active Scenario per campaign context at a time.
- Comparison Scenario is read-only in performance summaries.
- Archived Scenario should remain exportable.

## Bridge snapshot states
- Imported
- Validated
- Rejected
- Superseded

Rules:
- Imported snapshot is not trusted until validated.
- Rejected snapshot must remain inspectable.
- Superseded snapshot must not silently power active decisions.

## Classification states
- Auto-classified
- Needs review
- Confirmed
- Unknown
- Excluded

Rules:
- Unknown is acceptable and should remain visible.
- Confirmed overrides auto-classified.
- Excluded must remain traceable.

## Activity states
- Planned
- In Progress
- Completed
- Canceled
- Deferred

Rules:
- Completed activities must record outcome fields appropriate to activity type.
- Deferred activities should preserve original scheduling context.

## Pledge states
- Identified
- Asked
- Committed
- Expected
- Received
- Deposited
- Reported
- Lost

Rules:
- A pledge may not skip directly from Identified to Deposited without traceability.
- Received and Deposited should remain distinct.

## Risk states
- Active
- Acknowledged
- Resolved
- Historical

Rules:
- Resolved risk should preserve original trigger context.
- Historical risk remains visible in history surfaces.
