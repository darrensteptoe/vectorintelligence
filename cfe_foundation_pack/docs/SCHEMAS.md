# Campaign Finance Engine (CFE) — Schemas

## Schema philosophy
Schemas should be explicit, stable, traceable, and scenario-aware.

## Core campaign and race objects

### RaceProfile
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
- id
- jurisdiction
- cycle_year
- filing_events[]
- notes

### ElectionCalendar
- id
- race_profile_id
- primary_date
- runoff_date
- general_date
- early_vote_window
- mail_deadlines
- notes

## Budget and path objects

### BudgetPlan
- id
- campaign_id
- scenario_id
- title
- total_planned_budget
- required_budget
- optional_budget
- reserve_target
- status
- notes
- created_at
- updated_at

### BudgetLine
- id
- budget_plan_id
- domain
- subdomain
- title
- planned_amount
- required_flag
- fixed_vs_variable
- spend_pattern
- start_month
- end_month
- phase
- priority_rank
- source_type
- source_reference_id
- notes

### SpendTimelineSnapshot
- id
- budget_plan_id
- scenario_id
- monthly_spend_schedule_json
- peak_spend_month
- peak_spend_amount
- upcoming_commitment_windows_json
- reserve_requirements_json
- created_at

### BenchmarkSet
- id
- race_profile_id
- scenario_id
- comparable_pool_size
- credibility_floor
- competitive_threshold
- likely_win_low
- likely_win_high
- median_raised
- median_spent
- category_norms_json
- timing_norms_json
- notes
- created_at

### FinancePath
- id
- campaign_id
- budget_plan_id
- benchmark_set_id
- scenario_id
- target_total_raise
- target_monthly_raise
- target_weekly_raise
- target_raise_by_checkpoint_json
- reserve_floor
- safe_funding_gap
- competitive_gap
- path_status
- path_status_reason
- created_at
- updated_at

### ChannelTargetPlan
- id
- finance_path_id
- period_start
- period_end
- target_call_time_raise
- target_major_donor_raise
- target_event_raise
- target_online_raise
- target_committee_raise
- concentration_risk_status
- notes

## Disclosure and evidence objects

### Committee
- id
- source_system
- external_committee_id
- name_raw
- name_normalized
- committee_type
- jurisdiction
- notes

### FilingPeriod
- id
- committee_id
- source_system
- filing_name
- filing_start
- filing_end
- filing_due
- filing_status
- notes

### ContributionRecord
- id
- committee_id
- filing_period_id
- source_system
- contributor_name
- contributor_type
- amount
- contribution_date
- raw_occupation
- raw_employer
- address_1
- city
- state
- zip5
- is_itemized
- memo_raw
- raw_source_row_id

### ExpenditureRecord
- id
- committee_id
- filing_period_id
- source_system
- vendor_name
- amount
- expenditure_date
- purpose_raw
- memo_raw
- vendor_city
- vendor_state
- vendor_zip5
- raw_source_row_id

### CashSnapshot
- id
- committee_id
- filing_period_id
- cash_on_hand
- debt
- source_system
- as_of_date

## Operations objects

### FinanceActivity
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
- goal_ask_count
- goal_donor_count
- status
- notes

### CallTimeSession
- id
- finance_activity_id
- planned_hours
- actual_hours
- ask_count
- contact_count
- pledge_total
- received_total
- followup_count
- operator_notes

### DonorMeeting
- id
- finance_activity_id
- donor_name
- ask_amount
- outcome_status
- pledge_amount
- expected_receipt_date
- notes

### FundraiserEvent
- id
- finance_activity_id
- venue_name
- host_name
- rsvp_target
- rsvp_actual
- ask_target
- pledge_total
- received_total
- event_cost
- net_yield
- followup_count
- outcome_rating

### Pledge
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

### Task
- id
- campaign_id
- owner
- title
- due_date
- priority
- related_object_type
- related_object_id
- status
- notes

## Intelligence and reporting objects

### OccupationClassification
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
- id
- expenditure_record_id
- vendor_name_raw
- vendor_name_normalized
- vendor_category
- spend_category
- classification_status
- classification_confidence
- manual_override_value
- review_notes

### DonorGeoSummary
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
- income_context_band

### PlannedVsActualSummary
- id
- campaign_id
- scenario_id
- period_start
- period_end
- planned_raise
- actual_received
- planned_asks
- actual_asks
- planned_activities
- completed_activities
- pledge_conversion_rate
- deposit_lag_status
- cause_of_gap_summary

### RiskFlag
- id
- campaign_id
- scenario_id
- flag_type
- severity
- title
- description
- trigger_metric
- trigger_value
- recommended_action
- status
- created_at
- resolved_at
