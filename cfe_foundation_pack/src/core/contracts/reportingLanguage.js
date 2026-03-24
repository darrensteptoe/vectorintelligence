export const REPORTING_PHILOSOPHY =
  "Reports should read like serious campaign documents, not software dumps. They should be clean, direct, and operationally useful.";

export const REPORT_QUESTIONS = [
  "what happened",
  "why it matters",
  "what is at risk",
  "what to do next"
];

export const REPORT_STRUCTURE = [
  "Executive Summary",
  "Current Condition",
  "Interpretation",
  "Risks",
  "Recommended Actions"
];

export const EXEC_SUMMARY_TEMPLATES = {
  strong:
    "The campaign remains on a workable funding path for the selected plan. Current activity and expected receipts are generally aligned with the next spending window, though the margin for error is not unlimited.",
  mixed:
    "The campaign is still within reach of the active funding path, but the margin for error has narrowed. Recent activity has not fully matched target, and upcoming costs will be harder to cover cleanly unless near-term finance work improves.",
  weak:
    "The campaign is currently behind the active funding path. The issue is not only the topline gap, but the timing of that gap relative to upcoming commitments. Without stronger near-term performance or plan adjustment, the current budget will become harder to support safely."
};

export const REPORT_STATUS_PHRASES = {
  strong: [
    "remains on a workable path",
    "broadly aligned with the active plan",
    "holding within a usable range",
    "operating with a manageable level of pressure"
  ],
  mixed: [
    "still recoverable, but narrower than preferred",
    "workable for now, though the margin for error is thinning",
    "not yet a crisis, but no longer comfortable"
  ],
  weak: [
    "materially behind the active path",
    "too soft relative to upcoming commitments",
    "not yet cash-safe"
  ]
};

export const WEEKLY_FINANCE_MEMO_SECTIONS = [
  "period summary",
  "path status",
  "target vs actual",
  "activity completion",
  "top wins",
  "top misses",
  "next-week priorities",
  "active risks"
];

export const CANDIDATE_BRIEF_SECTIONS = [
  "this week's raise target",
  "call time goal",
  "highest-priority asks",
  "event priorities",
  "concise risks",
  "what candidate needs to do next"
];

export const FINANCE_COMMITTEE_BRIEF_SECTIONS = [
  "committee target",
  "assigned prospects",
  "completed asks",
  "unresolved commitments",
  "event program status",
  "next push"
];

export const LEADERSHIP_BUDGET_HEALTH_SECTIONS = [
  "total budget status",
  "funded share of plan",
  "field affordability",
  "major upcoming cost windows",
  "reserve status",
  "what is safe vs not safe"
];
