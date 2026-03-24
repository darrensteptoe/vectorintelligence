# Campaign Finance Engine (CFE) — Schemas

## Schema philosophy
CFE schemas should be explicit, stable, traceable, and scenario-aware. Each major object should support:
- campaign scoping
- race scoping where relevant
- scenario scoping where relevant
- timestamps
- notes
- status where applicable
- raw vs normalized distinction where applicable

## 1. Core campaign and race objects

### RaceProfile
Purpose: define the race environment.

Core fields:
- id
- state
- office
- district
- election_year
- election_type
- party
- incumbency_status
- seat_status
- media_market_type
- district_type
- filing_calendar_id
- election_calendar_id
- notes

### CampaignProfile
Purpose: define the campaign being planned.

Core fields:
- id
- race_profile_id
- candidate_name
- committee_name
- campaign_start_date
- current_cash_on_hand
- current_debt
- campaign_phase
- finance_capacity_notes
- strategic_notes

### FilingCalendar
Purpose: define filing deadlines and reporting windows.

Core fields:
- id
- jurisdiction
- cycle_year
- filing_events[]
- notes

### ElectionCalendar
Purpose: define campaign timing anchors.

Core fields:
- id
- race_profile_id
- primary_date
- runoff_date
- general_date
- early_vote_window
- mail_deadlines
- notes

## 2. Budget and path objects

### BudgetPlan
Purpose: top-level budget object for a campaign/scenario.

Core fields:
- id
- campaign_id
- scenario_id
- total_budget_planned
- total_required_budget
- required_cost_share
- optional_cost_share
- reserve_target
- status
- notes

Suggested statuses:
- Draft
- Active
- Archived
- Frozen

### BudgetLine
Purpose: represent one budgeted cost element.

Core fields:
- id
- budget_plan_id
- domain
- category
- subcategory
- title
- planned_amount
- required_flag
- optionality_level
- priority_rank
- start_date
- end_date
- spend_pattern
- phase_label
- benchmark_reference
- source_type
- notes

Suggested domains:
- Field Program
- Staff Payroll
- Consultants / Strategy
- Polling / Research
- Digital Program
- Paid Media
- Direct Mail
- Compliance / Legal / Accounting
- Office / Software / Operations
- Creative / Photo / Video
- Fundraising Events Costs
- Travel / Meals
- Printing / Signs / Literature
- Data / Voter File / Tools
- Contingency / Reserve

Suggested spend_pattern values:
- Even
- Front-loaded
- Back-loaded
- One-time
- Milestone-based
- Custom

### SpendTimelineSnapshot
Purpose: canonical timed view of budget pressure.

Core fields:
- id
- budget_plan_id
- scenario_id
- generated_at
- monthly_spend_schedule
- phase_spend_schedule
- peak_month
- total_before_primary
- total_before_general
- reserve_floor_by_period
- cash_stress_periods
- notes

### FundingRequirementSnapshot
Purpose: canonical finance requirement object.

Core fields:
- id
- campaign_id
- scenario_id
- budget_plan_id
- spend_timeline_snapshot_id
- generated_at
- total_raise_target
- raise_target_by_month
- raise_target_by_week
- raise_target_by_checkpoint
- reserve_floor
- gap_to_safe_funding
- gap_to_competitive_funding
- path_status
- funding_risk_level
- notes

Suggested path_status values:
- On Path
- Slightly Behind
- Behind Pace
- At Risk
- Off Path

Suggested funding_risk_level values:
- Low
- Moderate
- Elevated
- High
- Severe

### ChannelTargetPlan
Purpose: channel allocation of raise targets.

Core fields:
- id
- funding_requirement_snapshot_id
- period_label
- calltime_target
- event_target
- major_donor_target
- online_target
- finance_committee_target
- other_target
- concentration_warning
- notes

## 3. Disclosure and evidence objects

### Committee
Purpose: preserve source committee identity.

Core fields:
- id
- source_system
- committee_name_raw
- committee_name_normalized
- committee_type
- jurisdiction
- candidate_link
- notes

### FilingPeriod
Purpose: preserve reporting context.

Core fields:
- id
- source_system
- committee_id
- start_date
- end_date
- due_date
- filing_label
- amendment_flag
- notes

### ContributionRecord
Purpose: preserve contribution-level evidence.

Core fields:
- id
- source_system
- committee_id
- filing_period_id
- contributor_name
- contributor_type
- raw_occupation
- raw_employer
- address_1
- city
- state
- zip5
- contribution_date
- amount
- election_designation
- is_itemized
- memo_raw
- raw_source_row_id

### ExpenditureRecord
Purpose: preserve expenditure-level evidence.

Core fields:
- id
- source_system
- committee_id
- filing_period_id
- vendor_name
- vendor_city
- vendor_state
- vendor_zip5
- expenditure_date
- amount
- purpose_raw
- memo_raw
- raw_source_row_id

### CashSnapshot
Purpose: preserve official cash-on-hand evidence.

Core fields:
- id
- committee_id
- filing_period_id
- report_date
- cash_on_hand
- notes

### DebtSnapshot
Purpose: preserve official debt evidence.

Core fields:
- id
- committee_id
- filing_period_id
- report_date
- debt_total
- notes

### ComparableRace
Purpose: represent one historical analog.

Core fields:
- id
- race_profile_id
- comparable_race_label
- committee_ids[]
- comparability_score
- comparability_weight
- rationale
- included_flag
- notes

### BenchmarkSet
Purpose: canonical threshold summary from historical evidence.

Core fields:
- id
- race_profile_id
- scenario_id
- generated_at
- comparable_pool_size
- credibility_floor
- competitive_threshold
- likely_win_low
- likely_win_high
- median_raised
- median_spent
- median_cash_on_hand
- median_reserve_behavior
- timing_norms
- category_norms
- realism_notes

## 4. Operations objects

### FinanceActivity
Purpose: top-level activity object.

Core fields:
- id
- campaign_id
- scenario_id
- activity_type
- channel
- owner
- title
- scheduled_start
- scheduled_end
- goal_amount
- goal_donor_count
- status
- notes

Suggested activity types:
- Call Time
- Donor Meeting
- Fundraiser
- Finance Committee Meeting
- Online Push
- Filing Push
- Thank-you / Follow-up Block
- Internal Finance Review
- Compliance Deadline

Suggested statuses:
- Scheduled
- In Progress
- Completed
- Canceled
- Deferred
- Needs Follow-up

### CallTimeSession
Purpose: structured call time record.

Core fields:
- id
- finance_activity_id
- candidate_or_caller
- planned_hours
- actual_hours
- ask_count
- contact_count
- pledge_total
- received_total
- followup_count
- notes

### DonorMeeting
Purpose: structured one-on-one finance meeting record.

Core fields:
- id
- finance_activity_id
- prospect_name
- ask_amount
- commitment_status
- pledged_amount
- expected_received_date
- actual_received_date
- next_action
- notes

Suggested commitment statuses:
- Not Asked Yet
- Asked
- Committed
- Soft Commit
- Declined
- Needs Follow-up
- Received

### FundraiserEvent
Purpose: event-specific finance record.

Core fields:
- id
- finance_activity_id
- event_type
- venue_name
- host_name
- rsvp_target
- rsvp_actual
- attendance_actual
- ask_target
- pledge_total
- received_total
- event_cost
- net_yield
- followup_count
- outcome_rating
- notes

Suggested outcome ratings:
- Strong
- Solid
- Mixed
- Weak
- Underperformed

### Pledge
Purpose: track money committed but not yet fully realized.

Core fields:
- id
- campaign_id
- donor_name
- pledge_date
- pledged_amount
- received_amount
- expected_received_date
- actual_received_date
- status
- source_activity_id
- notes

Suggested statuses:
- Expected
- Committed
- Partial Received
- Fully Received
- Delayed
- At Risk
- Canceled

### Task
Purpose: track next actions and accountability.

Core fields:
- id
- campaign_id
- owner
- title
- due_date
- related_entity_type
- related_entity_id
- priority
- status
- notes

Suggested priorities:
- Critical
- High
- Normal
- Low

Suggested statuses:
- Open
- In Progress
- Completed
- Deferred
- Canceled

## 5. Intelligence objects

### OccupationClassification
Core fields:
- id
- contribution_record_id
- raw_occupation
- normalized_occupation
- occupation_family
- industry_family
- classification_status
- classification_confidence
- manual_override_value
- review_notes

### VendorClassification
Core fields:
- id
- expenditure_record_id
- raw_vendor_name
- normalized_vendor_name
- vendor_category
- spend_category
- classification_status
- classification_confidence
- manual_override_value
- review_notes

### SpendCategoryClassification
Core fields:
- id
- expenditure_record_id
- purpose_raw
- normalized_purpose
- spend_category
- spend_family
- classification_status
- classification_confidence
- manual_override_value
- review_notes

### DonorGeoSummary
Core fields:
- id
- campaign_id
- zip5
- donor_count
- total_amount
- avg_gift
- repeat_donor_count
- itemized_donor_count
- in_district_flag
- adjacent_region_flag
- socioeconomic_band
- notes

### PlannedVsActualSummary
Core fields:
- id
- campaign_id
- scenario_id
- period_label
- planned_activity_count
- completed_activity_count
- planned_ask_total
- actual_ask_total
- planned_raise_total
- actual_raise_total
- planned_pledge_total
- actual_pledge_total
- deposit_lag_indicator
- completion_rate
- variance_notes

### RiskFlag
Core fields:
- id
- campaign_id
- scenario_id
- created_at
- flag_type
- severity
- title
- explanation
- trigger_metric
- trigger_value
- recommended_action
- status
- notes

Suggested severities:
- Info
- Watch
- Caution
- Warning
- Critical

Suggested statuses:
- Active
- Acknowledged
- Resolved
- Suppressed

## 6. Bridge objects

### FPEBudgetDemandSnapshot
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

### CFEFundingStatusSnapshot
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
