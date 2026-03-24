export const OVERALL_PATH_STATUS_DESCRIPTIONS = {
  "On Path":
    "The campaign is generally tracking with the active funding path. This does not eliminate risk, but the current pace and projected receipts are broadly aligned with the next major spending window.",
  Watch:
    "The campaign is still within reach of the active path, but the margin for error has narrowed. One weak period or a delayed set of receipts could create avoidable pressure.",
  "Off Path":
    "The campaign is behind the active funding path. The problem is not only the current gap, but the timing of that gap relative to upcoming commitments."
};

export const RESERVE_STATUS_DESCRIPTIONS = {
  Healthy: "The reserve cushion is currently in a workable range for the next spending window.",
  Tight:
    "The reserve cushion is thinner than preferred. The campaign may still be able to proceed, but flexibility is narrowing.",
  "At Risk": "The reserve cushion is below a safe operating range for the next spending window."
};

export const FIELD_FUNDING_STATUS_DESCRIPTIONS = {
  Greenlight: "The selected field posture is presently supportable under the active finance path.",
  Caution:
    "The selected field posture may be supportable, but the campaign has less room for delay or underperformance than preferred.",
  Redline: "The selected field posture is not safely supported by the current finance path."
};

export const ACTIVITY_EXECUTION_STATUS_DESCRIPTIONS = {
  Strong:
    "Planned finance activity is being completed at a level that gives the path a real chance to hold.",
  Mixed: "Some planned finance work is happening, but not consistently enough to feel secure.",
  Weak:
    "The campaign is not completing enough of the planned finance work to support the path reliably."
};

export const RISK_FLAG_LANGUAGE = {
  fundingPace: {
    titles: [
      "Funding Pace Is Slipping",
      "Raise Pace Is Below Target",
      "Current Pace Is Not Keeping Up With Plan"
    ],
    description:
      "The campaign has raised less than the required amount for this period. At the current pace, upcoming budget pressure will be harder to cover cleanly.",
    recommendedActions: [
      "Increase candidate call time volume immediately.",
      "Focus follow-up on unresolved commitments already in the pipeline.",
      "Shift the next two weeks toward higher-yield finance activity."
    ]
  },
  reservePressure: {
    titles: [
      "Reserve Cushion Is Too Thin",
      "Reserve Floor Has Slipped",
      "Upcoming Costs Are Pressuring Cash Safety"
    ],
    description:
      "The current reserve position is below the preferred cushion for the next spending window. That does not automatically require cuts, but it does reduce flexibility and increase risk around new commitments.",
    recommendedActions: [
      "Pause optional spending until reserve improves.",
      "Pull forward higher-probability asks where possible.",
      "Avoid adding new recurring cost commitments until the next checkpoint stabilizes."
    ]
  },
  fieldAffordability: {
    titles: [
      "Selected Field Plan Is Not Yet Cash-Safe",
      "Field Expansion Is Running Ahead Of Funding",
      "Field Commitments Are Pressuring The Finance Path"
    ],
    description:
      "The campaign's selected field posture is creating timed cost pressure that the current finance path does not comfortably support.",
    recommendedActions: [
      "Delay expansion until reserve returns to a safer range.",
      "Reduce assumptions about near-term scale if receipts do not improve.",
      "Treat hiring and expansion as finance-dependent decisions, not fixed assumptions."
    ]
  },
  overweightOverhead: {
    titles: [
      "Overhead Share Is Running High",
      "Admin And Consultant Load Is Crowding The Plan",
      "Too Much Budget Is Moving Outside Core Program Needs"
    ],
    description:
      "A larger share of the budget is going to overhead, consulting, or non-program costs than the current plan comfortably supports.",
    recommendedActions: [
      "Review which costs are required versus merely preferred.",
      "Delay or resize optional consultant and production commitments.",
      "Protect reserve and core program needs before expanding overhead."
    ]
  },
  eventUnderperformance: {
    titles: [
      "Event Program Is Underperforming",
      "Events Are Not Carrying Their Assigned Share",
      "Event Yield Is Too Soft For The Current Plan"
    ],
    description:
      "The event program is producing less net revenue than the plan assumes. The problem may be attendance, ask strategy, follow-up, or cost discipline.",
    recommendedActions: [
      "Treat the next event as a targeted yield exercise.",
      "Tighten host expectations and follow-up discipline.",
      "Do not assume future events will close a broader path gap without evidence."
    ]
  },
  donorConcentration: {
    titles: [
      "Donor Base Is Too Narrow",
      "Too Much Of The Path Depends On A Small Group",
      "Current Raise Mix Is Overconcentrated"
    ],
    description:
      "A disproportionate share of current money is coming from a narrow set of donors, geographies, or channels. That can work temporarily, but it increases vulnerability to fatigue and delay.",
    recommendedActions: [
      "Broaden the near-term ask universe.",
      "Build secondary channels that reduce dependence on a single source.",
      "Use donor intelligence to identify adjacent geographies and sectors for expansion."
    ]
  }
};

export const EMPTY_WARNING_STATE =
  "No active warnings are currently above threshold. That does not mean the campaign is risk-free. It means no current metric is elevated enough to trigger a formal warning under the active scenario.";
