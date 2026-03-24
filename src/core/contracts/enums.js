export const CLASSIFICATION_RESOLUTION_ORDER = [
  "manual override",
  "exact rule",
  "fuzzy rule",
  "unknown"
];

export const CORE_PATH_STATUSES = [
  "On Path",
  "Slightly Behind",
  "Behind Pace",
  "At Risk",
  "Off Path"
];

export const FUNDING_RISK_LEVELS = ["Low", "Moderate", "Elevated", "High", "Severe"];

export const RESERVE_STATUSES = ["Greenlight", "Watch", "Caution", "Redline"];

export const FIELD_FUNDING_STATUSES = ["Greenlight", "Caution", "Redline"];

export const CLASSIFICATION_STATUSES = [
  "Confirmed",
  "Auto-classified",
  "Needs review",
  "Unknown",
  "Excluded"
];

export const CLASSIFICATION_CONFIDENCE_LEVELS = ["High", "Medium", "Low"];

export const BUDGET_PLAN_STATUSES = ["Draft", "Active", "Archived", "Frozen"];

export const BUDGET_DOMAINS = [
  "Field Program",
  "Staff Payroll",
  "Consultants / Strategy",
  "Polling / Research",
  "Digital Program",
  "Paid Media",
  "Direct Mail",
  "Compliance / Legal / Accounting",
  "Office / Software / Operations",
  "Creative / Photo / Video",
  "Fundraising Event Costs",
  "Travel / Meals",
  "Printing / Signs / Literature",
  "Data / Voter File / Tools",
  "Contingency / Reserve"
];

export const SPEND_PATTERNS = [
  "Even",
  "Front-loaded",
  "Back-loaded",
  "One-time",
  "Milestone-based",
  "Custom"
];

export const SOURCE_TRUST_LABELS = [
  "Official reported source",
  "Campaign-entered source",
  "Bridge-derived source",
  "Standardized from source",
  "Estimated/model-derived",
  "Manually overridden"
];

export const RISK_FLAG_SEVERITIES = ["Info", "Watch", "Caution", "Warning", "Critical"];
export const RISK_FLAG_STATUSES = ["Active", "Acknowledged", "Resolved", "Suppressed"];

export const ACTIVITY_TYPES = [
  "Call Time",
  "Donor Meeting",
  "Fundraiser",
  "Finance Committee Meeting",
  "Online Push",
  "Filing Push",
  "Thank-you / Follow-up Block",
  "Internal Finance Review",
  "Compliance Deadline"
];

export const ACTIVITY_STATUSES = [
  "Scheduled",
  "In Progress",
  "Completed",
  "Canceled",
  "Deferred",
  "Needs Follow-up"
];

export const TASK_PRIORITIES = ["Critical", "High", "Normal", "Low"];
export const TASK_STATUSES = ["Open", "In Progress", "Completed", "Deferred", "Canceled"];

/**
 * @param {unknown} value
 * @param {readonly string[]} allowed
 * @returns {boolean}
 */
export function isOneOf(value, allowed) {
  return typeof value === "string" && allowed.includes(value);
}
