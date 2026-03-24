export const CLASSIFICATION_RESOLUTION_ORDER = [
  "manual override",
  "exact rule",
  "fuzzy rule",
  "unknown"
];

export const CORE_PATH_STATUSES = ["On Path", "Watch", "Off Path"];
export const PACE_STATUSES = CORE_PATH_STATUSES;
export const FUNDING_STATUSES = CORE_PATH_STATUSES;

export const FUNDING_RISK_LEVELS = ["Low", "Moderate", "Elevated", "High", "Severe"];

export const RESERVE_STATUSES = ["Healthy", "Tight", "At Risk"];
export const FIELD_FUNDING_STATUSES = ["Greenlight", "Caution", "Redline"];
export const ACTIVITY_EXECUTION_STATUSES = ["Strong", "Mixed", "Weak"];

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
  "Payroll",
  "Consultants / Strategy",
  "Polling / Research",
  "Digital Program",
  "Paid Media",
  "Direct Mail",
  "Compliance / Legal / Accounting",
  "Office / Operations / Software",
  "Creative / Photo / Video",
  "Event Costs",
  "Travel / Meals",
  "Printing / Signs / Literature",
  "Data / Voter File / Tools",
  "Reserve / Contingency"
];

export const SPEND_PATTERNS = [
  "Even",
  "Front-loaded",
  "Back-loaded",
  "One-time",
  "Milestone-based",
  "Custom"
];

export const SOURCE_TRUST_LABELS = ["Reported", "Standardized", "Modeled", "Bridge-Derived"];

export const RISK_SEVERITY_LABELS = ["On Path", "Watch", "Off Path"];

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
