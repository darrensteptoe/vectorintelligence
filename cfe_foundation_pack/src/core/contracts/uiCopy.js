export const NAVIGATION_LABELS = [
  "Overview",
  "Budget",
  "Timeline",
  "Benchmarks",
  "Funding Path",
  "Channels",
  "Activity",
  "Pledges",
  "Donors",
  "Spending",
  "Risks",
  "Reports",
  "Bridge"
];

export const CORE_CARD_TITLES = [
  "Total Planned Budget",
  "Required Budget",
  "Optional Budget",
  "Peak Spend Window",
  "Current Raise Pace",
  "Next Checkpoint Target",
  "Reserve Status",
  "Field Funding Status",
  "Channel Mix",
  "Planned vs Actual",
  "Donor Geography",
  "Occupation Mix",
  "Spend Mix",
  "Active Risks"
];

export const CORE_HELPER_TEXT = {
  totalPlannedBudget: "The full projected campaign budget under the active scenario.",
  requiredBudget:
    "The portion of the plan currently marked as necessary to execute the selected strategy.",
  optionalBudget: "Costs the campaign may still want, but can delay or remove if the path tightens.",
  peakSpendWindow: "The month or phase where projected cost pressure is highest.",
  currentRaisePace:
    "How the campaign's actual intake is tracking relative to the active period target.",
  nextCheckpointTarget:
    "What must be raised by the next practical checkpoint to keep the path workable.",
  reserveStatus:
    "How much cushion the campaign currently has before the next major spending window.",
  fieldFundingStatus:
    "Whether the selected field posture is safely supported under the current finance path."
};

export const BUTTON_LABELS = [
  "Create Budget Plan",
  "Add Budget Line",
  "Import Field Snapshot",
  "Generate Benchmarks",
  "Compute Funding Path",
  "Build Channel Plan",
  "Schedule Activity",
  "Log Outcome",
  "Review Unknowns",
  "Generate Report",
  "Export Snapshot"
];

export const EMPTY_STATES = {
  budget:
    "No budget lines have been added yet. Start with the campaign's known fixed costs and the field posture you already expect to fund.",
  timeline:
    "No spend timeline is available yet. Add budget lines and timing assumptions first so the engine can map cost pressure over time.",
  benchmarks:
    "No benchmark set is active. Benchmarks help the campaign understand whether the selected plan looks ordinary, aggressive, or unusually light for this race type.",
  fundingPath:
    "No funding path has been generated yet. Compute the path once a budget plan, current campaign condition, and timing assumptions are in place.",
  channels:
    "No channel target plan is active. Channel targets should come after the core funding requirement is computed.",
  activity:
    "No finance activities are scheduled for this period yet. Use the calendar to turn the path into actual work.",
  pledges:
    "No pledges are currently tracked. Record commitments separately from receipts so the campaign can see what is promised, what is late, and what is real.",
  donors:
    "No donor intelligence summary is ready yet. Import contribution data and review the geography and occupation outputs.",
  spending:
    "No spending intelligence summary is ready yet. Import expenditure data and review category and vendor classification.",
  risks:
    "No formal risks are active under the current thresholds. Stay alert anyway: absence of a formal warning is not the same thing as proof of safety."
};

export const TOOLTIPS = {
  onPath: "Tracking broadly in line with the current funding requirement.",
  watch: "Still recoverable, but the margin for error has narrowed.",
  offPath: "Behind the active funding path relative to upcoming cost pressure.",
  healthyReserve: "Reserve is currently in a workable range for the next spending window.",
  tightReserve: "Reserve is thinner than preferred and should be watched closely.",
  atRiskReserve: "Reserve is below a safe range for the next spending window."
};

export const CONFIRMATIONS = {
  importFieldSnapshot:
    "Import the selected field-demand snapshot into the active campaign scenario? This will not change FPE logic. It will only update the finance-side demand inputs.",
  recomputeFundingPath:
    "Recompute the funding path with the latest budget, benchmark, and current-condition inputs?",
  applyManualOverride:
    "Apply this manual override? Manual values take precedence over automatic classification until changed."
};

export const SHORT_LABELS = [
  "Reported",
  "Standardized",
  "Modeled",
  "Needs Review",
  "Unknown",
  "Manual",
  "Auto"
];
