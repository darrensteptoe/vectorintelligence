# Campaign Finance Engine (CFE) — Formulas

## Formula philosophy
Formulas should be practical, explainable, and deterministic. They should favor transparency over theatrics.

## Budget formulas

### Total Planned Budget
total_planned_budget = sum(planned_amount for all budget lines)

### Required Budget
required_budget = sum(planned_amount where required_flag = true)

### Optional Budget
optional_budget = total_planned_budget - required_budget

### Domain Share
domain_share = domain_total / total_planned_budget

## Spend timeline formulas

### Monthly Spend Schedule
Allocate each budget line across months according to spend_pattern:
- Even
- Front-loaded
- Back-loaded
- One-time
- Milestone-based
- Custom

### Peak Spend Month
peak_spend_month = month with maximum projected spend

### Pre-Checkpoint Spend
pre_checkpoint_spend = sum(monthly_spend where month <= checkpoint)

## Benchmark formulas

### Weighted Comparable Metric
weighted_metric = sum(metric_i * weight_i) / sum(weight_i)

### Credibility Floor
Recommended method:
- identify serious comparable campaigns
- trim obvious unserious low outliers
- use lower-middle range rather than raw minimum

### Competitive Threshold
Recommended method:
- midpoint between median serious campaign and lower bound of likely-winning range

### Likely Win Band
Recommended method:
- use comparable winners only
- remove extreme outliers if clearly atypical
- return low/high band rather than a single target

## Funding path formulas

### Safe Funding Gap
safe_funding_gap = max(required_budget + reserve_floor - current_cash_on_hand - projected_receipts, 0)

### Competitive Gap
competitive_gap = max(competitive_threshold - current_cash_on_hand - projected_receipts, 0)

### Required Raise for Period
required_raise_for_period = projected_spend_for_period + reserve_adjustment - beginning_cash_available - expected_receipts_already_committed

### Monthly Raise Target
monthly_raise_target = remaining_required_raise / remaining_active_months

### Weekly Raise Target
weekly_raise_target = monthly_raise_target / active_weeks_in_month

### Checkpoint Raise Requirement
checkpoint_requirement = cumulative_spend_to_checkpoint + reserve_target_at_checkpoint - beginning_cash_before_checkpoint

## Channel allocation formulas

### Channel Target Share
channel_target = period_raise_target * planned_channel_share

### Concentration Warning
Trigger when one channel exceeds a defined share of period target or when two channels together carry an unhealthy majority without a backstop.

## Planned vs actual formulas

### Activity Completion Rate
activity_completion_rate = completed_activities / planned_activities

### Ask Completion Rate
ask_completion_rate = actual_asks / planned_asks

### Raise Pace Attainment
raise_pace_attainment = actual_received / planned_raise

### Pledge Conversion Rate
pledge_conversion_rate = received_from_pledges / total_pledged

### Event Net Yield
event_net_yield = event_received_total - event_cost

## Risk logic guidance

### Behind Pace
Trigger when actual_received is materially below period target.

### Reserve Pressure
Trigger when projected cash before next commitment window falls below reserve floor.

### Overweight Overhead
Trigger when overhead or admin share materially exceeds the planned or historical range.

### Field Funding Risk
Trigger when imported field demand and broader budget timing exceed safe funding path.

### Concentration Risk
Trigger when donor base, channel mix, or vendor mix is too narrow.

## Important formula rule
Every formula output that matters operationally should be persisted in a canonical snapshot object and never recomputed ad hoc in report components.
