# Campaign Finance Engine (CFE) — Module Map

## Module 1 — Race and Campaign Setup
Purpose: define the race, campaign, election structure, and filing environment.

Inputs:
- office
- district/jurisdiction
- state
- election year
- election type
- party
- incumbency status
- filing calendar
- election calendar
- campaign start condition

Outputs:
- RaceProfile
- CampaignProfile

## Module 2 — Campaign Budget Builder
Purpose: model the full campaign budget.

Capabilities:
- budget lines across all major domains
- fixed vs variable costs
- required vs optional costs
- phase assignment
- notes and strategic annotations

Outputs:
- BudgetPlan
- BudgetLine records

## Module 3 — Spend Timeline Engine
Purpose: convert static budget lines into a time-aware cost curve.

Capabilities:
- monthly spend schedule
- peak spend windows
- pre-commitment visibility
- phase-aware reserve pressure

Outputs:
- SpendTimelineSnapshot
- commitment windows
- reserve requirements by phase

## Module 4 — Historical Disclosure Intelligence
Purpose: ingest and preserve public campaign finance evidence.

Capabilities:
- raw committee ingest
- receipt ingest
- expenditure ingest
- cash/debt snapshots
- filing period handling
- raw storage and traceability

Outputs:
- ContributionRecord
- ExpenditureRecord
- CashSnapshot
- DebtSnapshot
- FilingPeriod

## Module 5 — Comparable Race Engine
Purpose: determine which races matter as historical analogs.

Capabilities:
- comparability scoring
- office matching
- incumbency matching
- geography/media-market similarity
- recency weighting
- explanation notes

Outputs:
- ComparableRace pool
- weights
- comparable rationale

## Module 6 — Benchmark Engine
Purpose: turn historical evidence into practical thresholds.

Outputs:
- credibility floor
- competitive threshold
- likely win band
- category norms
- reserve norms
- timing norms
- historical realism warnings

## Module 7 — Funding Path Engine
Purpose: determine what must be raised, by when, to safely fund the plan.

Inputs:
- budget plan
- spend timeline
- benchmarks
- current campaign condition
- time remaining
- channel assumptions

Outputs:
- FinancePath
- checkpoint targets
- monthly and weekly targets
- reserve floor
- gap metrics
- path status

## Module 8 — Channel Allocation Engine
Purpose: allocate funding requirement across finance channels.

Channels:
- call time
- major donor meetings
- events
- online
- finance committee
- host network
- direct response where relevant

Outputs:
- ChannelTargetPlan
- channel mix warnings
- concentration warnings

## Module 9 — Finance Operations Layer
Purpose: manage activity execution.

Submodules:
- finance calendar
- call time
- donor meetings
- events
- pledge tracking
- tasks and follow-up
- filing push planning

Outputs:
- FinanceActivity
- CallTimeSession
- DonorMeeting
- FundraiserEvent
- Pledge
- Task

## Module 10 — Planned vs Actual Engine
Purpose: measure execution against plan.

Outputs:
- activity completion
- ask completion
- dollars planned vs received
- pledge conversion
- deposit lag
- channel performance
- cause-of-behind diagnostics

## Module 11 — Donor Intelligence Layer
Purpose: explain who funds the campaign and from where.

Outputs:
- DonorGeoSummary
- occupation and industry summaries
- in-district vs outside analysis
- donor concentration analysis
- donor breadth vs depth

## Module 12 — Expenditure Intelligence Layer
Purpose: explain how money is being used.

Outputs:
- spend category mix
- vendor concentration
- overhead vs voter-contact mix
- budget-to-actual diagnostics
- historical comparison to similar campaigns

## Module 13 — Risk Console
Purpose: warn leadership before problems become obvious.

Outputs:
- pace risk
- reserve risk
- category pressure
- field-funding risk
- channel underperformance risk
- donor concentration risk
- recommended actions

## Module 14 — Reporting Engine
Purpose: generate consultant-grade outputs.

Outputs:
- weekly finance memo
- candidate brief
- finance committee brief
- filing snapshot
- budget health report
- donor intelligence memo
- channel performance memo
- leadership risk report

## Module 15 — Scenario Engine
Purpose: stress test alternate paths.

Outputs:
- revised budget path
- revised raise targets
- revised risk profile
- what-breaks-first diagnostics

## Module 16 — FPE ↔ CFE Bridge Layer
Purpose: exchange narrow planning snapshots.

Outputs:
- import FPEBudgetDemandSnapshot
- export CFEFundingStatusSnapshot
