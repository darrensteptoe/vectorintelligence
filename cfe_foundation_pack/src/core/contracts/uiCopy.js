export const APP_TITLE = "Campaign Finance Engine";
export const APP_SUBTITLE =
  "Budget, timing, fundraising, and finance execution control for the full campaign.";
export const UNIVERSAL_SEARCH_PLACEHOLDER =
  "Search budget lines, donors, events, vendors, or report sections";
export const GLOBAL_INFO_BANNER =
  "Use this system to answer what the campaign needs to fund, when those costs hit, and whether the current finance program is strong enough to support the plan.";

export const NAVIGATION_LABELS = [
  "Overview",
  "Budget Plan",
  "Spend Timeline",
  "Funding Path",
  "Activity",
  "Donor Intelligence",
  "Expenditure Intelligence",
  "Reports",
  "Manual",
  "Settings"
];

export const GLOBAL_STATUS_LABELS = {
  path: ["On Path", "Watch", "Off Path"],
  reserve: ["Healthy", "Tight", "At Risk"],
  fieldFunding: ["Greenlight", "Caution", "Redline"],
  activityExecution: ["Strong", "Mixed", "Weak"]
};

export const STATUS_CHIP_HELPER_COPY = {
  "On Path": "The campaign is broadly aligned with the active finance path.",
  Watch: "The campaign is still recoverable, but flexibility is narrowing.",
  "Off Path":
    "The campaign is behind the active path in a way that will affect upcoming commitments if left unchanged.",
  Healthy: "Operating cushion is currently workable.",
  Tight: "The campaign still has room to operate, but less than preferred.",
  "At Risk": "The campaign is below a safe buffer for the next spending window."
};

export const OVERVIEW_SURFACE = {
  headerBlock: {
    eyebrow: "Campaign Finance Engine",
    title: "Campaign finance control for the whole campaign",
    body:
      "Use this page to see whether the active budget plan is realistic, whether cash is expected to arrive in time, and whether the campaign is on track to support its next major spending window."
  },
  heroCards: {
    totalCampaignBudget: {
      title: "Total Campaign Budget",
      helperText:
        "The full projected campaign budget across all major domains, including field, staff, consultants, communications, compliance, operations, and reserve."
    },
    totalRaiseRequired: {
      title: "Total Raise Required",
      helperText:
        "The amount the campaign must raise to support the active budget plan, current commitments, and reserve discipline.",
      interpretation:
        "This is not a vanity target. It is the amount needed to safely carry the selected plan."
    },
    currentFundingStatus: {
      title: "Current Funding Status",
      helperText:
        "A practical assessment of how much of the active campaign plan is supportable under current cash, projected receipts, and reserve conditions."
    },
    reserveStatus: {
      title: "Reserve Status",
      helperText:
        "Whether the campaign is preserving enough operating room to absorb normal slippage without destabilizing the plan."
    },
    fieldFundingSignal: {
      title: "Field Funding Signal",
      helperText:
        "A bridge read showing whether the selected field posture is safely supported by the active finance path."
    }
  },
  interpretationPanel: {
    title: "How to read this page",
    body:
      "Start with three questions. First, is the campaign trying to fund a credible plan? Second, is the current raise pace strong enough to support that plan? Third, are there upcoming cost windows where timing will matter more than totals? When one of those answers weakens, the remedy is usually a budget adjustment, a finance execution adjustment, or both."
  },
  emptyState: {
    title: "No active campaign budget yet",
    body:
      "Build the budget first. The rest of the system gets sharper once the campaign's actual cost structure is defined across field, staff, consultants, communications, compliance, and reserve.",
    primaryAction: "Build Budget Plan"
  }
};

export const BUDGET_PLAN_SURFACE = {
  header: "Budget Plan",
  body:
    "Build the campaign budget in the same way a serious operator thinks about it: by domain, by timing, by priority, and by whether each cost is essential or optional.",
  topHelperBanner:
    "A campaign budget is only useful if it is phased over time. Enter each line with timing in mind, not just totals.",
  budgetLineDrawerFields: {
    budgetDomain: "Choose the broad area of campaign spending this line belongs to.",
    budgetLineTitle: "Use a name a campaign team would recognize immediately.",
    plannedAmount:
      "Enter the amount this line is expected to require under the active plan.",
    startDate: "When this cost begins to matter.",
    endDate: "When this cost is expected to conclude or stop pressuring cash.",
    phase: "Use phases to keep timing readable at a glance.",
    priority: "Distinguish between mission-critical and more flexible lines.",
    requiredOptional:
      "Required lines support the minimum viable campaign. Optional lines strengthen the campaign but may need to wait.",
    notes: "Capture the operational logic behind the line, not just reminders."
  },
  lineStatusChips: [
    "Required",
    "Optional",
    "Fixed",
    "Variable",
    "Field Bridge",
    "Needs Review",
    "Historical Outlier",
    "Unfunded Window"
  ],
  interpretationBox: {
    title: "What makes a good budget plan",
    body:
      "A strong budget plan is not merely detailed. It is timed, prioritized, and honest about what is essential. If the budget is doing too much too early, the campaign will feel stable on paper and stressed in practice."
  },
  emptyState: {
    title: "No budget lines yet",
    body:
      "Add the campaign's major cost domains first. Start with field, payroll, consultants, compliance, communications, and reserve before filling in secondary lines."
  }
};

export const BUDGET_CATEGORY_HELPER_TEXT = {
  "Field Program":
    "Organizers, canvass operations, voter contact infrastructure, staff ramp, and direct field execution costs.",
  Payroll: "Salaries, stipends, payroll load, and support staffing not captured elsewhere.",
  "Consultants / Strategy":
    "Senior strategic support, communications, direct mail, digital, finance consulting, or advisory retainers.",
  "Polling / Research":
    "Polls, message testing, opposition research, and paid research support.",
  "Digital Program":
    "Digital content, digital ads, acquisition, fundraising creative, and digital support not included in broader paid media.",
  "Paid Media": "Television, radio, streaming, cable, or broader paid communications.",
  "Direct Mail": "Voter mail, fundraising mail, design, postage, and production.",
  "Compliance / Legal / Accounting":
    "Treasurer support, compliance review, legal, accounting, and filing support.",
  "Office / Operations / Software":
    "Office costs, software, subscriptions, hosting, utilities, and operations support.",
  "Creative / Photo / Video":
    "Brand photography, launch materials, paid creative, short-form video, long-form production, and media assets.",
  "Event Costs":
    "Venue, food, beverage, printed materials, event support, and event production costs.",
  "Travel / Meals": "Campaign travel, reimbursements, and operational meal costs.",
  "Printing / Signs / Literature":
    "Print materials, literature, yard signs, walk cards, palm cards, and related production.",
  "Data / Voter File / Tools":
    "Data access, universes, voter file costs, analytics, targeting, and operational tools.",
  "Reserve / Contingency":
    "Protection against timing slippage, operating surprises, or strategic shifts."
};

export const SPEND_TIMELINE_SURFACE = {
  header: "Spend Timeline",
  body:
    "See when campaign costs begin, ramp, peak, and taper. This page is about timing pressure, not just total budget size.",
  timelineCards: [
    "Next 30 Days Pressure",
    "Next 60 Days Pressure",
    "Peak Spend Window",
    "Reserve Floor Ahead"
  ],
  timelineCardHelper: {
    next30DaysPressure:
      "The amount of campaign cost expected to press on cash in the next month.",
    peakSpendWindow:
      "The period where the campaign's cost curve is at its highest and timing errors become more expensive."
  },
  interpretationPanel: {
    title: "Why timing matters",
    body:
      "Campaigns often fail financially not because they lacked a theoretical path, but because costs accelerated before receipts were safely in hand. This page helps you see those pressure points before they become last-minute problems."
  },
  warningCallout: {
    titleOptions: [
      "The budget is becoming more front-loaded",
      "Upcoming commitments are stacking too closely",
      "Peak spend window is approaching without enough cushion"
    ],
    body:
      "The campaign can still support the active plan if execution improves, but the margin for delay is narrowing. Review reserve protection, near-term raise targets, and any optional lines that can be deferred cleanly."
  },
  emptyState: {
    title: "No spend timeline is available yet",
    body:
      "Add budget lines and timing assumptions first so the engine can map cost pressure over time."
  }
};

export const FUNDING_PATH_SURFACE = {
  header: "Funding Path",
  body:
    "This is the campaign's working raise path: how much must be raised overall, how much must arrive by each checkpoint, and whether the active pace is strong enough to support the plan.",
  coreCards: [
    "Raise Required",
    "Raised to Date",
    "Gap to Safe Funding",
    "Gap to Competitive Funding",
    "Monthly Raise Target",
    "Weekly Raise Target"
  ],
  coreCardHelper: {
    gapToSafeFunding:
      "How far the campaign is from safely supporting the active budget plan at the next major cost window.",
    gapToCompetitiveFunding:
      "How far the campaign is from a more fully supported version of the plan that leaves less room for avoidable stress."
  },
  channelTargetPanel: {
    title: "Channel Targets",
    intro:
      "The total target is not enough by itself. The campaign also needs a realistic channel mix so the work is distributed across call time, meetings, events, online activity, and committee support.",
    subsectionLabels: [
      "Call Time Target",
      "Major Donor Target",
      "Event Target",
      "Online Target",
      "Committee Target",
      "Other Support Target"
    ]
  },
  interpretationBlock: {
    title: "How to use the path",
    body:
      "The path is the campaign's operating finance plan, not a motivational slogan. If the current pace is weak, the right response is to change activity volume, change the budget, or change both. Do not carry a path that the campaign is not operationally prepared to execute."
  },
  emptyState: {
    title: "No active path yet",
    body:
      "Generate a funding path after the budget, timeline, and current campaign condition have been entered."
  }
};

export const ACTIVITY_SURFACE = {
  header: "Finance Activity",
  body:
    "Track the work that actually produces the money. This page should feel like an operating desk, not a generic calendar.",
  thisWeek: {
    title: "This Week's Finance Work",
    intro:
      "Focus on the activity most likely to move receipts, resolve commitments, and keep the path from slipping.",
    cards: [
      "Upcoming Call Time",
      "Donor Meetings",
      "Fundraisers",
      "Follow-Up Queue",
      "Filing Pushes"
    ]
  },
  callTimeSessionCard: {
    fields: [
      "Planned hours",
      "Completed hours",
      "Ask count",
      "Pledge total",
      "Received total",
      "Follow-up needed"
    ],
    helperText:
      "A good call time record is specific enough to improve the next session, not merely to prove the session happened."
  },
  eventCard: {
    fields: [
      "RSVP target",
      "RSVP actual",
      "Ask target",
      "Pledge total",
      "Received total",
      "Event cost",
      "Net yield",
      "Follow-up required"
    ],
    interpretationNote:
      "Event gross can flatter weak programs. Net yield, follow-up quality, and conversion speed matter more."
  },
  emptyState: {
    title: "No finance activity scheduled",
    body:
      "Build the next week of finance work before the path slips. Start with call time, top donor meetings, and any event or filing push that will shape near-term receipts.",
    primaryAction: "Schedule Activity"
  },
  performanceCopy: {
    strong:
      "Planned finance activity is being completed at a level that gives the path a real chance to hold.",
    mixed:
      "Some planned finance work is happening, but not consistently enough to feel secure.",
    weak:
      "The campaign is not completing enough of the planned finance work to support the path reliably."
  }
};

export const FINANCE_ACTIVITY_SURFACE = ACTIVITY_SURFACE;

export const DONOR_INTELLIGENCE_SURFACE = {
  header: "Donor Intelligence",
  body:
    "Understand where support is coming from, how broad it is, and whether the campaign is drawing from a stable and politically useful donor base.",
  geographyPanel: {
    title: "Donor Geography",
    intro:
      "Geography helps show where the campaign's money is concentrated and whether that concentration is strategically healthy.",
    cards: [
      "Top ZIP by Dollars",
      "Top ZIP by Donor Count",
      "In-District Share",
      "Outside-Network Share"
    ],
    interpretation:
      "ZIP-level patterns are useful for concentration and direction, but they are not the same as exact turf or precinct-level support."
  },
  occupationPanel: {
    title: "Occupation and Industry",
    intro:
      "Use this section to understand the donor base by work and sector. Treat occupation strings carefully and keep uncertainty visible where classification is weak.",
    cards: [
      "Top Occupation by Dollars",
      "Top Occupation by Count",
      "Largest Industry Family",
      "Unclassified Share"
    ]
  },
  concentrationPanel: {
    title: "Concentration and Breadth",
    body:
      "A campaign can raise impressive totals from a narrow base and still have a fragile finance structure. Breadth matters. Repeat support matters. In-district support matters. This section helps you see whether the base is deep, broad, narrow, or overdependent on a small cluster."
  },
  emptyState: {
    title: "Not enough donor data yet",
    body:
      "Donor intelligence sharpens as contribution records are imported and classified. Start by ingesting contribution history or connecting the current campaign's records."
  }
};

export const EXPENDITURE_INTELLIGENCE_SURFACE = {
  header: "Expenditure Intelligence",
  body:
    "See where the money is going, whether actual spending matches the plan, and how the campaign's mix compares with what this kind of race usually requires.",
  spendMixCards: [
    "Field Share",
    "Paid Communications Share",
    "Payroll Share",
    "Consultant Share",
    "Compliance / Ops Share",
    "Reserve Drawdown"
  ],
  interpretationBlock: {
    title: "How to read spending mix",
    body:
      "A spending mix is not good or bad in the abstract. It becomes useful when compared to the campaign's strategy, its timing, and the historical profile of similar races. This page should help leadership see whether spending is disciplined, top-heavy, or misaligned with the stated plan."
  },
  vendorPanel: {
    title: "Vendor Concentration",
    body:
      "Vendor concentration can be acceptable when it reflects a deliberate plan, but it becomes a risk when too much of the campaign's flexibility depends on a narrow stack of providers or high-overhead relationships."
  },
  emptyState: {
    title: "No expenditure data available yet",
    body:
      "Import historical expenditure records or current-cycle spending to begin evaluating mix, vendor concentration, and category pressure."
  }
};

export const REPORTS_SURFACE = {
  header: "Reports",
  body:
    "Generate clean reports for candidates, managers, finance committees, and internal leadership without rewriting the same analysis every week.",
  reportPickerDescriptions: {
    weeklyMemo:
      "A concise operating summary of pace, activity, receipts, and next steps.",
    candidateBrief: "The candidate's immediate finance priorities and asks.",
    committeeMemo:
      "Accountability and opportunity view for committee members.",
    budgetHealth: "Full budget, reserve, and timing status.",
    donorMemo:
      "Geography, occupations, concentration, and support structure.",
    leadershipRisk: "What is most likely to destabilize the finance plan next."
  },
  emptyState: {
    title: "No report selected",
    body:
      "Choose a report type to preview the sections, tone, and expected outputs before generating the final version."
  }
};

export const MANUAL_SURFACE = {
  header: "Manual",
  body:
    "This manual is designed to help campaigns use the system intelligently, not merely navigate the interface. It explains what the measures mean, what strong and weak conditions look like, and what to do next.",
  sectionIntros: {
    budgetBasics:
      "Learn how to build a budget that reflects campaign reality rather than wishlist thinking.",
    fundingPath:
      "Understand how raise targets, checkpoints, and reserve logic work together.",
    financeActivity:
      "Learn how the path translates into call time, events, meetings, and follow-up.",
    donorIntelligence:
      "See what donor geography and occupation signals can and cannot tell you.",
    riskAndWarnings:
      "Learn how to respond when the system moves from healthy to watch to stress conditions."
  }
};

export const SHARED_MODALS = {
  importFieldSnapshot:
    "Import the selected field-demand snapshot into the active campaign scenario? This will not change FPE logic. It will only update the finance-side demand inputs.",
  recomputeFundingPath:
    "Recompute the funding path with the latest budget, benchmark, and current-condition inputs?",
  applyManualOverride:
    "Apply this manual override? Manual values take precedence over automatic classification until changed."
};

export const UI_STRINGS = {
  buttons: [
    "Build Budget Plan",
    "Add Budget Line",
    "Rebuild Path",
    "Import Field Snapshot",
    "Generate Report",
    "Schedule Activity",
    "Log Call Time",
    "Add Event",
    "Add Donor Meeting",
    "Resolve Pledge",
    "Apply Override",
    "Save Classification",
    "Review Unknowns",
    "Export Memo",
    "View Risk Detail",
    "Compare Scenario",
    "Return to Overview"
  ],
  filters: [
    "Active Scenario",
    "Current Cycle",
    "Historical Comparables",
    "Required Costs",
    "Optional Costs",
    "In-District Only",
    "Itemized Only",
    "Needs Review",
    "High Risk First",
    "Upcoming 30 Days",
    "Upcoming 60 Days",
    "Past Due Follow-Up"
  ],
  tableEmpty: [
    "No records match the current filters.",
    "No classified records yet.",
    "No unresolved pledges.",
    "No comparable races selected.",
    "No imported expenditures for this view."
  ],
  sort: [
    "Highest Amount",
    "Largest Variance",
    "Most Recent",
    "Highest Risk",
    "Greatest Concentration",
    "Lowest Confidence"
  ],
  genericHelpers: [
    "Reported",
    "Standardized",
    "Modeled",
    "Bridge-Derived",
    "Manual Override",
    "Needs Review",
    "Historical Context",
    "Low Confidence",
    "Current Scenario",
    "Current Snapshot"
  ],
  toasts: [
    "Budget line saved.",
    "Funding path rebuilt successfully.",
    "Field snapshot imported.",
    "Manual override applied.",
    "Report generated.",
    "Activity logged.",
    "Pledge updated.",
    "Classification saved.",
    "Scenario comparison refreshed."
  ],
  warningToasts: [
    "Path rebuilt, but one or more sections still need review.",
    "Snapshot imported with low-confidence timing fields.",
    "Report generated with partial donor intelligence coverage.",
    "Several records remain unclassified and may affect section totals."
  ]
};

export const STATE_MATRIX = {
  overview: {
    healthy: {
      header: "The campaign is broadly aligned with the active path",
      body:
        "Current receipts, projected near-term money, and reserve posture are generally consistent with the next spending window. This is a workable position, not a reason to relax discipline."
    },
    watch: {
      header: "The path is still workable, but flexibility is narrowing",
      body:
        "The campaign can still support the active plan, but recent performance leaves less margin for slippage. The next operating period should be treated as corrective, not routine."
    },
    offPath: {
      header: "The campaign is behind the active path",
      body:
        "The problem is not merely that the campaign is behind target. It is that the gap now affects timing relative to upcoming commitments. Review activity volume, unresolved commitments, and optional costs immediately."
    }
  },
  budgetPlan: {
    disciplined: {
      header: "The current budget is disciplined",
      body:
        "Required and optional lines are reasonably separated, and the plan is not carrying obvious self-inflicted pressure."
    },
    optionalPressure: {
      header: "Optional budget pressure is growing",
      body:
        "The campaign is carrying more flexible cost than the current finance posture cleanly supports. That does not mean the budget is wrong, but it does mean sequencing matters more."
    },
    frontLoaded: {
      header: "The budget is becoming too front-loaded",
      body:
        "Too much cost is arriving before enough money is safely expected. Review timing, reserve logic, and any lines that can be deferred without harming the campaign's core posture."
    }
  },
  fundingPath: {
    strongPace: {
      header: "Current pace supports the near-term path",
      body:
        "The campaign is not risk-free, but the current pace is strong enough to keep the next spending window within reach."
    },
    slightlyBehind: {
      header: "Current pace is below target but recoverable",
      body:
        "The campaign still has time to stabilize, but it should treat the next two weeks as meaningful finance weeks rather than ordinary maintenance."
    },
    materiallyBehind: {
      header: "Current pace is not keeping up with the plan",
      body:
        "The campaign is carrying more budget pressure than the current rate of receipts can safely absorb. That should trigger changes in activity, budget sequencing, or both."
    }
  },
  activity: {
    strongExecution: {
      header: "Finance activity is supporting the path",
      body:
        "Planned work is being completed at a level that gives the campaign a real chance to hold the path."
    },
    mixedExecution: {
      header: "Finance activity is uneven",
      body:
        "Some important work is getting done, but not consistently enough to feel secure. The campaign is relying on partial execution where the path calls for steadier output."
    },
    weakExecution: {
      header: "Finance activity is not strong enough",
      body:
        "The campaign is not completing enough of the work required to support the active path reliably. Weak execution is now part of the finance problem, not separate from it."
    }
  },
  donorIntelligence: {
    broadBase: {
      header: "Support is relatively broad",
      body:
        "The donor base shows workable diversity across geography or donor clusters. That gives the campaign more room to absorb underperformance from any one pocket of support."
    },
    narrowBase: {
      header: "Support is concentrated in a narrower base",
      body:
        "The campaign may still be able to function well with this profile, but the finance structure becomes more fragile when too much depends on a small cluster."
    },
    weakInDistrictBase: {
      header: "In-district donor depth appears thin",
      body:
        "Outside support can still be strategically valuable, but this profile suggests the campaign should watch whether local financial support is developing as expected."
    }
  },
  expenditure: {
    balancedMix: {
      header: "Current spending mix is broadly aligned",
      body:
        "The campaign's actual spending appears reasonably consistent with its stated strategy and timing."
    },
    topHeavyMix: {
      header: "The spending mix is becoming top-heavy",
      body:
        "One or more categories are taking a larger share of the budget than the campaign can comfortably carry under current conditions."
    },
    timingMismatch: {
      header: "Spending is getting ahead of support",
      body:
        "The issue is not necessarily the category itself. The issue is that the timing of the spend is outrunning the timing of receipts."
    }
  },
  bridge: {
    greenlight: {
      header: "Selected field posture is presently supportable",
      body:
        "Under the active finance path, the selected field plan can be carried without obvious immediate strain."
    },
    caution: {
      header: "Selected field posture is supportable only with discipline",
      body:
        "The field plan is still within reach, but the finance side has less room for delay or underperformance than preferred."
    },
    redline: {
      header: "Selected field posture is not safely funded",
      body:
        "The campaign should not assume the active field posture is sustainable until receipts, reserve, or the selected plan improve."
    }
  },
  reportGeneration: {
    ready: {
      header: "Report is ready to generate",
      body:
        "The required snapshot data is present and current enough to support a stable report draft."
    },
    partial: {
      header: "Report will generate with partial sections",
      body:
        "One or more sections may be thinner than preferred because the underlying snapshot or classification layer is incomplete."
    },
    blocked: {
      header: "Report cannot be generated yet",
      body:
        "A required campaign, path, or intelligence snapshot is missing. Update the underlying records, then try again."
    }
  }
};

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

export const GLOBAL_EMPTY_STATES = {
  noHistoricalData: {
    header: "No benchmark context is attached yet",
    body:
      "Historical evidence is optional for planning, but it strengthens realism and report context once comparables are loaded."
  },
  noDonorIntelligence: {
    header: "No donor intelligence summary is available yet",
    body:
      "Import or sync contribution data, then review geography and occupation outputs."
  },
  noReportContext: {
    header: "Report cannot be generated yet",
    body:
      "A required campaign, path, or intelligence snapshot is missing. Refresh the underlying snapshot first."
  }
};

export const TOOLTIP_LIBRARY = {
  onPath: "Tracking broadly in line with the current funding requirement.",
  watch: "Still recoverable, but the margin for error has narrowed.",
  offPath: "Behind the active funding path relative to upcoming cost pressure.",
  healthyReserve: "Reserve is currently in a workable range for the next spending window.",
  tightReserve: "Reserve is thinner than preferred and should be watched closely.",
  atRiskReserve: "Reserve is below a safe range for the next spending window.",
  comparableRaces:
    "Historical campaigns used to benchmark realism, thresholds, and timing norms.",
  reserveFloor:
    "The minimum cushion the campaign should maintain to avoid obvious timing stress and prevent routine cash disruption.",
  checkpointTarget:
    "What the campaign should have raised or effectively secured by a specific upcoming date.",
  modeledValue: "An estimate generated from CFE logic rather than directly imported source data.",
  standardizedValue: "A source value that has been normalized for comparison and analysis.",
  manualOverride:
    "A reviewed value that intentionally supersedes the app's default classification or grouping."
};

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

export const BUTTON_LABELS = UI_STRINGS.buttons;
export const FILTER_LABELS = UI_STRINGS.filters;
export const TABLE_EMPTY_LABELS = UI_STRINGS.tableEmpty;
export const SORT_LABELS = UI_STRINGS.sort;
export const SHORT_LABELS = ["Reported", "Standardized", "Modeled", "Needs Review", "Unknown", "Manual", "Auto"];

export const TOOLTIPS = {
  onPath: TOOLTIP_LIBRARY.onPath,
  watch: TOOLTIP_LIBRARY.watch,
  offPath: TOOLTIP_LIBRARY.offPath,
  healthyReserve: TOOLTIP_LIBRARY.healthyReserve,
  tightReserve: TOOLTIP_LIBRARY.tightReserve,
  atRiskReserve: TOOLTIP_LIBRARY.atRiskReserve
};

export const CONFIRMATIONS = SHARED_MODALS;
