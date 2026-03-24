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
