# Campaign Finance Engine (CFE) — Formulas

## Formula philosophy
CFE formulas should be practical, explainable, and deterministic. They should favor transparency over theatrics.

## 1. Budget formulas

### Total Planned Budget
Definition: sum of all budget line planned amounts.

Formula:
`total_planned_budget = Σ budget_line.planned_amount`

### Required Budget
Definition: sum of all required budget lines.

Formula:
`required_budget = Σ planned_amount where required_flag = true`

### Optional Budget
Definition: sum of optional lines.

Formula:
`optional_budget = total_planned_budget - required_budget`

### Domain Share
Definition: percentage of total budget represented by a domain.

Formula:
`domain_share = domain_total / total_planned_budget`

## 2. Spend timeline formulas

### Monthly Spend Schedule
Definition: allocate each budget line across months based on spend_pattern.

Supported spend patterns:
- Even
- Front-loaded
- Back-loaded
- One-time
- Milestone-based
- Custom

### Peak Spend Month
Definition: the month with highest projected total spend.

Formula:
`peak_spend_month = argmax(monthly_spend_schedule[month])`

### Pre-Checkpoint Spend
Definition: projected spend before a campaign checkpoint.

Formula:
`pre_checkpoint_spend = Σ monthly_spend where month <= checkpoint`

## 3. Historical benchmark formulas

### Weighted Comparable Metric
Definition: weighted average of comparable race metrics.

Formula:
`weighted_metric = Σ(metric_i * weight_i) / Σ(weight_i)`

### Credibility Floor
Definition: lower practical spend/raise level below which the campaign likely lacks basic seriousness.

Recommended method:
- use lower-middle range of serious comparable campaigns, not all campaigns indiscriminately
- trim extreme low outliers and unserious races where identifiable

### Competitive Threshold
Definition: level at which a campaign becomes meaningfully competitive in its race type.

Recommended method:
- weighted midpoint between median serious campaign and lower bound of likely winning range

### Likely Win Band
Definition: historical winning spend/raise range from comparable winners.

Recommended method:
- use weighted winner distribution and summarize as low-high band rather than single value

## 4. Funding path formulas

### Total Raise Target
Definition: amount that must be raised to safely fund the selected plan.

Formula:
`total_raise_target = max(0, total_planned_budget + reserve_target - current_cash_on_hand)`

If current debt is material:
`total_raise_target = max(0, total_planned_budget + reserve_target + current_debt - current_cash_on_hand)`

### Gap to Safe Funding
Definition: shortfall relative to required budget plus reserve.

Formula:
`gap_to_safe_funding = max(0, required_budget + reserve_target - current_cash_on_hand - committed_or_received_funds_expected)`

### Gap to Competitive Funding
Definition: shortfall relative to benchmark competitive threshold.

Formula:
`gap_to_competitive_funding = max(0, competitive_threshold - current_cash_on_hand - raised_to_date)`

### Monthly Raise Target
Definition: remaining total raise target divided across remaining months, with optional weighting for known pressure periods.

Base formula:
`monthly_raise_target = remaining_raise_target / months_remaining`

Weighted version:
`monthly_raise_target_month_i = remaining_raise_target * month_weight_i / Σ month_weights`

### Weekly Raise Target
Definition: monthly target translated into weekly operating target.

Formula:
`weekly_raise_target = monthly_raise_target / weeks_in_target_month`

### Checkpoint Raise Requirement
Definition: money that must be in by a given checkpoint to cover spend before and through that window.

Formula:
`required_by_checkpoint = projected_spend_through_checkpoint + reserve_floor_at_checkpoint - starting_cash - likely_receipts_before_checkpoint`

## 5. Reserve formulas

### Reserve Target
Definition: minimum liquidity cushion needed to avoid unsafe commitments.

Recommended structure:
- baseline reserve % of upcoming committed spend
- plus any phase-specific fixed cushion

Example formula:
`reserve_target = max(minimum_static_reserve, reserve_rate * next_period_required_spend)`

### Reserve Status
Suggested thresholds:
- Greenlight: reserve >= target
- Watch: reserve slightly below target but still workable
- Caution: reserve meaningfully below target
- Redline: reserve materially below target

## 6. Channel allocation formulas

### Channel Target Allocation
Definition: allocate raise target across channels according to plan assumptions.

Formula:
`channel_target = period_raise_target * channel_share`

Example channels:
- call time share
- event share
- major donor share
- online share
- finance committee share

### Channel Overreliance
Definition: warn when one channel carries too much of the plan.

Suggested trigger:
- any single channel > set concentration threshold for the period

## 7. Planned vs actual formulas

### Completion Rate
Formula:
`completion_rate = completed_activity_count / planned_activity_count`

### Raise Pace Ratio
Formula:
`raise_pace_ratio = actual_raise_total / planned_raise_total`

### Ask Pace Ratio
Formula:
`ask_pace_ratio = actual_ask_total / planned_ask_total`

### Pledge Conversion Rate
Formula:
`pledge_conversion_rate = received_amount / pledged_amount`

### Deposit Lag Indicator
Definition: measure whether expected money is landing later than planned.

Simple formula:
`deposit_lag_days = average(actual_received_date - expected_received_date)`

## 8. Donor intelligence formulas

### Average Gift by ZIP
Formula:
`avg_gift_zip = total_amount_zip / donor_count_zip`

### Repeat Donor Rate
Formula:
`repeat_donor_rate = repeat_donor_count / donor_count`

### In-District Share
Formula:
`in_district_share = in_district_total_amount / total_amount`

### Donor Concentration Ratio
Definition: share of total receipts accounted for by top donor groups, top ZIPs, or top occupation bands.

## 9. Expenditure intelligence formulas

### Spend Category Share
Formula:
`category_share = category_total / total_spent`

### Overhead Share
Suggested definition:
`overhead_share = (admin + office + compliance + non-program operations) / total_spent`

### Program Spend Share
Suggested definition:
`program_share = (field + paid communications + digital persuasion + direct voter-contact relevant spend) / total_spent`

### Budget Variance
Formula:
`budget_variance = actual_spend - planned_spend`

## 10. Risk formulas and thresholds

Risk triggers should be configurable, but initial rule ideas:

### Behind Pace
Trigger when:
`actual_raise_total / required_raise_total_to_date < threshold`

### Reserve Pressure
Trigger when:
`current_reserve < reserve_target`

### Field Not Cash-Safe
Trigger when:
`funded_percent_of_field_plan < greenlight_threshold`

### Event Underperformance
Trigger when:
`net_event_yield / event_goal < threshold`

### Pledge Risk
Trigger when:
- conversion rate low
- delay high
- large pledge concentration unresolved

### Donor Concentration Risk
Trigger when:
- top ZIP share too high
- top donor share too high
- outside-region share too dominant
