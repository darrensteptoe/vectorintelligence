import {
  BUDGET_PLAN_STATUSES,
  CORE_PATH_STATUSES,
  FUNDING_RISK_LEVELS,
  RESERVE_STATUSES,
  SOURCE_TRUST_LABELS,
  SPEND_PATTERNS,
  isOneOf
} from "./enums.js";

/**
 * @typedef {{
 *   id: string,
 *   state: string,
 *   office: string,
 *   district: string,
 *   election_year: number,
 *   election_type: string,
 *   party: string,
 *   incumbency_status: string,
 *   seat_status?: string,
 *   media_market_type?: string,
 *   district_type?: string,
 *   filing_calendar_id: string,
 *   election_calendar_id: string,
 *   notes?: string
 * }} RaceProfile
 */

/**
 * @typedef {{
 *   id: string,
 *   race_profile_id: string,
 *   candidate_name: string,
 *   committee_name: string,
 *   campaign_start_date: string,
 *   current_cash_on_hand: number,
 *   current_debt: number,
 *   campaign_phase: string,
 *   finance_capacity_notes?: string,
 *   strategic_notes?: string
 * }} CampaignProfile
 */

/**
 * @typedef {{
 *   id: string,
 *   jurisdiction: string,
 *   cycle_year: number,
 *   filing_events: Array<{label: string, due_date: string, period_start?: string, period_end?: string}>,
 *   notes?: string
 * }} FilingCalendar
 */

/**
 * @typedef {{
 *   id: string,
 *   race_profile_id: string,
 *   primary_date?: string,
 *   runoff_date?: string,
 *   general_date?: string,
 *   early_vote_window?: {start?: string, end?: string},
 *   mail_deadlines?: Array<{label: string, date: string}>,
 *   notes?: string
 * }} ElectionCalendar
 */

/**
 * @typedef {{
 *   id: string,
 *   campaign_id: string,
 *   scenario_id: string,
 *   total_budget_planned: number,
 *   total_required_budget: number,
 *   required_cost_share: number,
 *   optional_cost_share: number,
 *   reserve_target: number,
 *   status: string,
 *   notes?: string
 * }} BudgetPlan
 */

/**
 * @typedef {{
 *   month: string,
 *   amount: number
 * }} MonthlyAmount
 */

/**
 * @typedef {{
 *   id: string,
 *   budget_plan_id: string,
 *   domain: string,
 *   category: string,
 *   subcategory?: string,
 *   title: string,
 *   planned_amount: number,
 *   required_flag: boolean,
 *   optionality_level?: string,
 *   priority_rank?: number,
 *   start_date: string,
 *   end_date: string,
 *   spend_pattern: string,
 *   custom_spend_weights?: Record<string, number>,
 *   phase_label?: string,
 *   benchmark_reference?: string,
 *   source_type: string,
 *   source_class?: string,
 *   notes?: string
 * }} BudgetLine
 */

/**
 * @typedef {{
 *   id: string,
 *   budget_plan_id: string,
 *   scenario_id: string,
 *   generated_at: string,
 *   monthly_spend_schedule: Record<string, number>,
 *   phase_spend_schedule: Record<string, number>,
 *   peak_month: string | null,
 *   total_before_primary: number,
 *   total_before_general: number,
 *   reserve_floor_by_period: Record<string, number>,
 *   cash_stress_periods: string[],
 *   notes?: string
 * }} SpendTimelineSnapshot
 */

/**
 * @typedef {{
 *   id: string,
 *   campaign_id: string,
 *   scenario_id: string,
 *   budget_plan_id: string,
 *   spend_timeline_snapshot_id: string,
 *   generated_at: string,
 *   total_raise_target: number,
 *   raise_target_by_month: Record<string, number>,
 *   raise_target_by_week: Record<string, number>,
 *   raise_target_by_checkpoint: Record<string, number>,
 *   reserve_floor: number,
 *   gap_to_safe_funding: number,
 *   gap_to_competitive_funding: number,
 *   path_status: string,
 *   funding_risk_level: string,
 *   notes?: string
 * }} FundingRequirementSnapshot
 */

/**
 * @typedef {{
 *   id: string,
 *   campaign_id: string,
 *   scenario_id: string,
 *   activity_type: string,
 *   channel: string,
 *   owner: string,
 *   title: string,
 *   scheduled_start: string,
 *   scheduled_end: string,
 *   goal_amount?: number,
 *   goal_donor_count?: number,
 *   status: string,
 *   notes?: string
 * }} FinanceActivity
 */

/**
 * @typedef {{
 *   id: string,
 *   campaign_id: string,
 *   scenario_id: string,
 *   created_at: string,
 *   flag_type: string,
 *   severity: string,
 *   title: string,
 *   explanation: string,
 *   trigger_metric: string,
 *   trigger_value: number,
 *   recommended_action: string,
 *   status: string,
 *   notes?: string
 * }} RiskFlag
 */

/**
 * @typedef {{
 *   id: string,
 *   source_system: string,
 *   committee_id: string,
 *   filing_period_id?: string,
 *   contributor_name?: string,
 *   contributor_type?: string,
 *   raw_occupation?: string,
 *   raw_employer?: string,
 *   vendor_name?: string,
 *   purpose_raw?: string,
 *   amount: number,
 *   raw_source_row_id: string,
 *   source_label: string,
 *   standardized_fields?: Record<string, string>,
 *   notes?: string
 * }} RawDisclosureRecord
 */

/**
 * @typedef {{
 *   snapshot_id: string,
 *   schema_version: string,
 *   campaign_id: string,
 *   office_id: string,
 *   scenario_id: string,
 *   created_at: string,
 *   total_projected_field_cost: number,
 *   monthly_field_cost_schedule: Record<string, number>,
 *   staffing_cost_schedule: Record<string, number>,
 *   field_spend_milestones: Array<{label: string, month: string, amount: number}>,
 *   peak_field_spend_month: string,
 *   field_confidence_band: string,
 *   notes?: string
 * }} FPEBudgetDemandSnapshot
 */

/**
 * @typedef {{
 *   snapshot_id: string,
 *   schema_version: string,
 *   campaign_id: string,
 *   office_id: string,
 *   scenario_id: string,
 *   created_at: string,
 *   selected_field_plan_cost: number,
 *   funded_percent_of_field_plan: number,
 *   reserve_status: string,
 *   hiring_greenlight_status: string,
 *   expansion_greenlight_status: string,
 *   funding_risk_level: string,
 *   notes?: string
 * }} CFEFundingStatusSnapshot
 */

/**
 * @typedef {{
 *   value: string,
 *   status: string,
 *   confidence: string,
 *   resolution_source: string,
 *   manual_override_used: boolean
 * }} ClassificationResult
 */

/**
 * @param {string} prefix
 * @returns {string}
 */
export function makeId(prefix) {
  const stamp = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}_${stamp}_${rand}`;
}

/**
 * @returns {string}
 */
export function nowIso() {
  return new Date().toISOString();
}

/**
 * @param {number} amount
 * @returns {number}
 */
export function roundMoney(amount) {
  if (!Number.isFinite(amount)) {
    return 0;
  }
  return Math.round(amount * 100) / 100;
}

/**
 * @param {unknown} value
 * @returns {string}
 */
export function coerceString(value) {
  return typeof value === "string" ? value : "";
}

/**
 * @param {unknown} value
 * @returns {number}
 */
export function coerceNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

/**
 * @param {unknown} value
 * @returns {value is string}
 */
export function isIsoDateLike(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value);
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export function isValidBudgetPlanStatus(value) {
  return isOneOf(value, BUDGET_PLAN_STATUSES);
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export function isValidPathStatus(value) {
  return isOneOf(value, CORE_PATH_STATUSES);
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export function isValidRiskLevel(value) {
  return isOneOf(value, FUNDING_RISK_LEVELS);
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export function isValidReserveStatus(value) {
  return isOneOf(value, RESERVE_STATUSES);
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export function isValidSpendPattern(value) {
  return isOneOf(value, SPEND_PATTERNS);
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export function isValidSourceTrustLabel(value) {
  return isOneOf(value, SOURCE_TRUST_LABELS);
}
