export const CLASSIFICATION_RESOLUTION_ORDER = [
  "manual override",
  "exact rule",
  "fuzzy rule",
  "unknown"
];

export const FUNDING_STATUSES = [
  "Fully Fundable",
  "Mostly Fundable",
  "Partially Fundable",
  "Not Yet Fundable",
  "Redline"
];

export const PACE_STATUSES = [
  "On Pace",
  "Slightly Behind",
  "Materially Behind",
  "Ahead of Pace",
  "Pace Unclear"
];

// Compatibility alias for existing engine/store naming.
export const CORE_PATH_STATUSES = PACE_STATUSES;

export const FUNDING_RISK_LEVELS = ["Low", "Moderate", "Elevated", "High", "Severe"];

export const RESERVE_STATUSES = [
  "Reserve Protected",
  "Reserve Watch",
  "Reserve Pressure",
  "Reserve Breach"
];

export const FIELD_FUNDING_STATUSES = ["Greenlight", "Caution", "Redline"];

export const ACTIVITY_EXECUTION_STATUSES = ["Strong", "Mixed", "Weak"];

export const CLASSIFICATION_STATUSES = [
  "Confirmed",
  "Auto-Classified",
  "Needs Review",
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
  "Office / Operations / Software",
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

export const SOURCE_TRUST_LABELS = ["Reported", "Standardized", "Modeled"];

export const RISK_SEVERITY_LABELS = ["Watch", "Elevated", "Serious", "Redline"];

export const RISK_FLAG_SEVERITIES = ["Info", "Watch", "Caution", "Warning", "Critical"];
export const RISK_FLAG_STATUSES = ["Active", "Acknowledged", "Resolved", "Suppressed"];

export const ACTIVITY_TYPES = [
  "Call Time",
  "Donor Meeting",
  "Fundraiser",
  "Finance Committee Touch",
  "Online Push",
  "Follow-Up Block",
  "Internal Finance Review"
];

export const ACTIVITY_STATUSES = [
  "Planned",
  "Scheduled",
  "Completed",
  "Partially Completed",
  "Canceled",
  "Needs Follow-Up",
  "Closed"
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
