export const MANUAL_FRONT_PAGE = {
  title: "Campaign Finance Engine Manual",
  opening:
    "Campaign Finance Engine is built for campaigns that need to fund real plans, not admire spreadsheets. The purpose of the system is to help leadership understand what the campaign is trying to fund, when those costs hit, whether history suggests the plan is realistic, and what the finance operation must do next to support it.",
  context:
    "The system is strongest when it is used honestly. A realistic budget is more valuable than a flattering one. A visible unknown is better than a false label. A warning that causes a course correction is more useful than a perfect-looking dashboard that hides pressure until it is too late."
};

export const MANUAL_USAGE_GUIDANCE =
  "Teach the campaign how to think, not just where to click. Explain what a measure means, what strong and weak conditions look like, and what to do next.";

export const MANUAL_SECTIONS = {
  budgetPlan: {
    title: "Budget Plan",
    whatItIs:
      "A campaign budget is not a wish list and not a post hoc record. In this system, the budget is the campaign's working statement of what it intends to fund, when those costs will hit, and which parts of the plan are essential versus discretionary.",
    strongBudget:
      "A strong budget is timed, prioritized, and honest. It reflects the campaign the team can plausibly execute, not merely the campaign it would like to run under perfect conditions.",
    requiredVsOptional:
      "Required lines support the minimum viable campaign. Optional lines may still be strategically smart, but they should remain visible as lines the campaign could delay, reduce, or sequence differently if pressure rises."
  },
  spendTimeline: {
    title: "Spend Timeline",
    whyTimingMatters:
      "Campaigns often get into trouble not because their total target was impossible, but because costs accelerated before enough money was safely in hand. A timeline view helps the campaign see those pressure points before it is negotiating from weakness.",
    peakSpendWindows:
      "A peak spend window is the period where the campaign's expected costs are at their highest or most compressed. When a campaign enters one of these periods thinly funded, ordinary delays become more dangerous."
  },
  fundingPath: {
    title: "Funding Path",
    whatPathMeans:
      "The funding path is the campaign's working answer to a simple question: how much money must arrive, and by when, to support the selected plan without creating avoidable cash stress.",
    pathStatuses: {
      onPath: "On Path means the campaign is broadly aligned with the active raise plan.",
      watch: "Watch means the path is still alive, but flexibility is narrowing.",
      offPath:
        "Off Path means the campaign is behind in a way that now affects upcoming commitments, not just abstract totals."
    },
    safeVsCompetitive:
      "Safe funding means the campaign can support the selected plan without violating its reserve logic. Competitive funding usually refers to a stronger posture with less reliance on narrow timing success or perfect execution."
  },
  activity: {
    title: "Finance Activity",
    whyTrackingMatters:
      "Finance plans fail most often in execution, not in spreadsheet design. This section exists so the campaign can compare what it said it would do with what it actually did and with what that work produced.",
    callTime:
      "Track call time in enough detail to improve it. The point is not to prove effort. The point is to understand whether the candidate or finance team is completing enough asks, converting enough commitments, and following up with enough discipline.",
    events:
      "Events are not judged only by gross receipts. Net yield, conversion speed, host quality, and follow-up strength matter more than a flattering top-line number.",
    pledges:
      "A pledge is not cash. It may still be politically and financially meaningful, but campaigns get in trouble when they plan against money that has not actually landed."
  },
  donorIntelligence: {
    title: "Donor Intelligence",
    geography:
      "Donor geography can show concentration, local strength, outside-network reliance, and donor breadth. It cannot tell you everything about voter support, neighborhood persuasion, or precise turf strength.",
    occupationIndustry:
      "Occupation strings are useful, but messy. A good system preserves uncertainty and lets campaigns learn over time. When classification is weak, the right move is to say so.",
    concentration:
      "A narrow donor base can still fund a campaign for a time, but it creates fragility. Breadth matters because it gives the campaign more room to absorb underperformance from any one cluster."
  },
  expenditureIntelligence: {
    title: "Expenditure Intelligence",
    spendMix:
      "Spending becomes most useful when compared against strategy and timing. The question is not whether a campaign spent on consultants, field, or digital. The question is whether the mix fits the campaign's actual path and race stage.",
    vendorConcentration:
      "Heavy vendor concentration can be normal in some races, but it becomes risky when too much campaign flexibility depends on a narrow stack of providers or high-overhead relationships."
  },
  risk: {
    title: "Risk and Warnings",
    howToReadWarnings:
      "Warnings are designed to sharpen judgment, not create panic. A warning is best read as an early signal that the campaign should act while options still exist.",
    reservePressure:
      "Reserve pressure matters because weak reserve turns ordinary delay into real risk. A campaign with no cushion is forced to make harder choices faster.",
    fundingPace:
      "Raise pace risk is not only about being behind target. It is about being behind target at the wrong time relative to upcoming commitments.",
    realismWarnings:
      "Historical realism warnings do not tell the campaign what it must do. They indicate when budget, mix, or pace is departing from what similar races have usually sustained."
  },
  bridge: {
    title: "Bridge with FPE",
    bridgePurpose:
      "The field bridge allows the finance system to incorporate the cost and timing of the selected field posture without absorbing the field app's internal logic. It keeps the apps coordinated without making them dependent on the same codebase.",
    returnSignal:
      "The finance return signal tells the field side whether the selected posture is safely fundable, cautiously fundable, or in redline territory under the current finance path."
  },
  confidenceAndUncertainty: {
    title: "Confidence and Uncertainty",
    classes: {
      reported: "Reported values come directly from source records or campaign entries.",
      standardized:
        "Standardized values have been cleaned or classified so they can be compared more reliably.",
      modeled:
        "Modeled values are engine outputs based on active assumptions, budget, timeline, and evidence."
    },
    whyVisible:
      "Campaign software becomes less trustworthy when it hides uncertainty behind polished interfaces. This system keeps uncertainty visible so leadership can make better decisions sooner."
  }
};

export const OPERATOR_MISTAKES = [
  "Entering vague budget lines that hide real commitments.",
  "Assuming pledges are the same as receipts.",
  "Treating benchmarks as destiny.",
  "Ignoring reserve pressure because topline feels acceptable.",
  "Assuming events will solve structural underperformance.",
  "Failing to revisit channel mix when one source softens.",
  "Delaying follow-up on live commitments."
];

export const HEALTHY_RANGE_GUIDANCE = [
  "healthier than planned",
  "in range",
  "tighter than preferred",
  "materially behind",
  "unusually concentrated",
  "heavier than the historical norm"
];

export const PAGE_MANUAL_GUIDANCE = {
  overview: {
    what_this_page_is_for:
      "Leadership view of budget posture, path posture, reserve posture, and immediate action priorities.",
    how_to_read:
      "Start with path status, then reserve status, then field funding signal. The ordering matters because timing risk often appears in reserve before it appears in topline summaries.",
    strong_condition:
      "Strong means the campaign is On Path with a Healthy reserve and no material timing contradiction in upcoming costs.",
    weak_condition:
      "Weak means the campaign is Off Path, reserve is Tight or At Risk, and next-window commitments assume receipts that are not yet secure.",
    what_to_do_next:
      "Strengthen near-term finance execution and delay optional obligations if reserve pressure is rising.",
    limits:
      "Overview is a command summary; it cannot replace line-level budget, activity, or classification review."
  },
  budget: {
    what_this_page_is_for:
      "Define campaign costs by domain, timing, and required/optional discipline.",
    how_to_read:
      "Review required and optional shares before adding new lines. Confirm timing assumptions for each major line instead of entering totals without windows.",
    strong_condition:
      "Strong budgets are timed, prioritized, and realistic about what is actually required.",
    weak_condition:
      "Weak budgets carry too much early pressure and hide optional spend as if it were mandatory.",
    what_to_do_next:
      "If the path tightens, adjust optional sequencing before cutting core operating lines.",
    limits:
      "Budget structure does not prove finance execution quality by itself."
  },
  timeline: {
    what_this_page_is_for:
      "Translate budget structure into time-aware pressure windows.",
    how_to_read:
      "Look at peak window first, then reserve floor ahead, then checkpoint demands.",
    strong_condition:
      "Strong timing means costs and likely receipts are aligned enough to preserve choice.",
    weak_condition:
      "Weak timing means commitments compress before likely money and reduce room for correction.",
    what_to_do_next:
      "Resequence optional spend and pull forward high-probability asks before entering peak pressure.",
    limits:
      "Timeline outputs are modeled projections and should be reviewed when assumptions change."
  },
  benchmarks: {
    what_this_page_is_for:
      "Provide historical realism context from comparable races.",
    how_to_read:
      "Treat benchmark signals as evidence context, not commands. Compare current assumptions against comparable distributions and timing norms.",
    strong_condition:
      "Strong benchmark posture means assumptions are within credible bands and deviations are intentional.",
    weak_condition:
      "Weak benchmark posture means key assumptions rely on outlier performance without operational support.",
    what_to_do_next:
      "If realism flags rise, tighten assumptions or increase near-term execution plans.",
    limits:
      "Comparables can inform judgment, but they cannot predict campaign-specific outcomes alone."
  },
  fundingPath: {
    what_this_page_is_for:
      "Show required raise totals, checkpoint targets, and channel implications under reserve discipline.",
    how_to_read:
      "Read total requirement, next checkpoint, and reserve floor together. A healthy topline can still hide near-term exposure.",
    strong_condition:
      "Strong path means current pace supports near-term windows without reserve degradation.",
    weak_condition:
      "Weak path means checkpoint pressure depends on assumptions the campaign has not earned yet.",
    what_to_do_next:
      "Raise execution volume in the next two weeks and defer optional commitments if margin is narrowing.",
    limits:
      "Path outputs do not replace activity quality review or pledge conversion review."
  },
  financeOperations: {
    what_this_page_is_for:
      "Track and improve the work that creates receipts: calls, meetings, events, follow-up, and tasks.",
    how_to_read:
      "Compare planned versus completed work and review conversion quality, not activity count alone.",
    strong_condition:
      "Strong operations means high completion on high-yield work with disciplined follow-up.",
    weak_condition:
      "Weak operations means inconsistent completion and unresolved commitments accumulating.",
    what_to_do_next:
      "Tighten owner-level accountability and prioritize asks closest to conversion.",
    limits:
      "Activity logs do not guarantee receipt timing unless conversion and deposits follow."
  },
  donorIntelligence: {
    what_this_page_is_for:
      "Interpret donor base breadth, geography, and occupation/industry composition.",
    how_to_read:
      "Start with concentration and in-district share before over-reading small segment changes.",
    strong_condition:
      "Strong donor posture is broad enough to absorb softness in any single donor cluster.",
    weak_condition:
      "Weak donor posture is overconcentrated or highly dependent on outside-network clusters.",
    what_to_do_next:
      "Broaden ask universes and keep unknown classifications visible until reviewed.",
    limits:
      "Donor profile does not directly prove voter persuasion strength or turnout behavior."
  },
  expenditureIntelligence: {
    what_this_page_is_for:
      "Explain spending mix and alignment with strategy and timing.",
    how_to_read:
      "Compare category shares with budget intent and timing sequence, not totals alone.",
    strong_condition:
      "Strong spend posture aligns category mix to current strategy and known timing constraints.",
    weak_condition:
      "Weak spend posture is top-heavy, mistimed, or too dependent on overhead growth.",
    what_to_do_next:
      "Control optional overhead and verify vendor concentration risk before new commitments.",
    limits:
      "Category signals can guide decisions but cannot capture every qualitative program tradeoff."
  },
  risks: {
    what_this_page_is_for:
      "Concentrated warning surface tied to canonical triggers and practical action.",
    how_to_read:
      "Read severity with cause and next action together. Severity without cause is not operationally useful.",
    strong_condition:
      "Strong risk posture means no elevated triggers or rapid mitigation on recent flags.",
    weak_condition:
      "Weak risk posture means multiple active warnings tied to pace, reserve, or execution degradation.",
    what_to_do_next:
      "Act on top risks in priority order and confirm trigger movement in the next reporting cycle.",
    limits:
      "Risk flags are decision aids, not guarantees of outcome."
  },
  reports: {
    what_this_page_is_for:
      "Generate circulation-ready outputs that reuse canonical snapshots and interpretation language.",
    how_to_read:
      "Verify snapshot freshness and section completeness before export.",
    strong_condition:
      "Strong report posture means outputs are complete, current, and actionable without rewrite.",
    weak_condition:
      "Weak report posture means missing snapshot context or unresolved classification coverage.",
    what_to_do_next:
      "Resolve blocking sections and regenerate using current canonical snapshots.",
    limits:
      "Report polish does not substitute for underlying data completeness."
  },
  manual: {
    what_this_page_is_for:
      "Teach campaign operators how to interpret and act on CFE outputs.",
    how_to_read:
      "Use module intros first, then metric explainers, then warning guidance.",
    strong_condition:
      "Strong manual usage means operators can explain why a metric matters and what action follows.",
    weak_condition:
      "Weak manual usage means users navigate screens but cannot interpret underlying implications.",
    what_to_do_next:
      "Use manual notes in workflow planning and report interpretation.",
    limits:
      "Manual guidance supports judgment; it does not replace campaign leadership decisions."
  },
  settingsDataImports: {
    what_this_page_is_for:
      "Control imports, exports, snapshot governance, and role-aware system behavior.",
    how_to_read:
      "Validate snapshot and contract diagnostics before accepting new data into active scenario workflows.",
    strong_condition:
      "Strong controls preserve provenance and keep Reported/Standardized/Modeled distinctions intact.",
    weak_condition:
      "Weak controls accept unvalidated data or flatten trust-label distinctions silently.",
    what_to_do_next:
      "Run diagnostics before export and inspect rejected/flagged import records.",
    limits:
      "Control surfaces enforce discipline but cannot repair poor source records automatically."
  }
};
