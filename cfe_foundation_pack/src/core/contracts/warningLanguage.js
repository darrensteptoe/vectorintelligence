export const WARNING_TONE_RULES = [
  "This does not require panic, but it does require attention.",
  "The campaign can absorb this for a short period, but it should not normalize it.",
  "This is manageable if corrected early.",
  "This is now strong enough to affect planning decisions."
];

export const FUNDING_WARNING_BY_SEVERITY = {
  Watch:
    "The campaign is still broadly workable, but the current path is beginning to show strain. This is the moment to tighten discipline before the issue grows.",
  Elevated:
    "The campaign can still recover without major disruption, but it should not assume that current conditions will fix themselves. A near-term adjustment is advisable.",
  Serious:
    "The campaign is now carrying a meaningful mismatch between its commitments and its finance path. This should affect planning decisions immediately.",
  Redline:
    "The campaign is beyond a comfortable level of strain. New commitments should be treated as conditional until the underlying path improves."
};

export const RESERVE_WARNING_BY_SEVERITY = {
  "Reserve Watch":
    "Reserve coverage is thinner than ideal. The campaign still has room to operate, but ordinary timing slippage will be less forgiving.",
  "Reserve Pressure":
    "Reserve protection has weakened enough that normal disruption could begin affecting operating choices.",
  "Reserve Breach":
    "The campaign is no longer carrying the reserve protection that the active plan expects. This should be treated as a structural issue, not a cosmetic one."
};

export const ACTIVITY_WARNINGS = {
  weakCompletion:
    "Planned finance activity is not being completed consistently enough to treat the current path as secure.",
  followUpLag:
    "The campaign is doing a meaningful amount of ask activity, but follow-up discipline is not strong enough to convert enough of that work into receipts.",
  eventDrag:
    "The event program is consuming time and cost, but it is not yet producing results proportional to the load it places on the calendar."
};

export const DATA_COMPLETENESS_WARNINGS = {
  limitedComparables:
    "Historical benchmark coverage is thinner than ideal for this race. Use the benchmark layer as directional context, not as a hard rule.",
  limitedClassificationCoverage:
    "Some contribution, vendor, or occupation records remain insufficiently reviewed for fine-grained interpretation. Broad patterns may still be useful, but precision is lower.",
  incompleteCurrentPeriodData:
    "Current-period receipts, obligations, or outcomes may still be in motion. Treat near-term totals as provisional until deposits and follow-up settle."
};

export const EMPTY_STATE_WARNINGS = {
  noActivitiesThisWeek:
    "No finance activity is scheduled for this period. The path can still be modeled, but the campaign's execution layer will remain mostly theoretical until real work is added.",
  noPledgesRecorded:
    "No pledges have been recorded yet. If the campaign is actively asking for money, start logging commitments so the difference between potential money and real cash remains visible.",
  noExpenditureCategorization:
    "Expenditures have been imported, but category review is not complete enough to produce a reliable spend mix view yet.",
  noFieldBridgeSnapshot:
    "No field demand snapshot is attached to this campaign. The finance path can still be generated, but field-specific budget timing will remain less grounded."
};

export const FUNDING_PATH_WARNINGS = {
  paceBehind: {
    title: "Current raise pace is behind the active plan",
    body:
      "Under current conditions, the campaign is not raising money quickly enough to support the selected budget path. This does not mean the whole plan must be abandoned, but it does mean the campaign should either improve production immediately or reduce near-term commitments."
  },
  channelConcentration: {
    title: "The path is too dependent on one finance channel",
    body:
      "A healthy funding path does not rely on a single source doing all the work. If one channel underperforms, the campaign should still remain structurally viable. Consider broadening the mix before the next pressure window."
  },
  unrealisticCheckpoint: {
    title: "Next checkpoint appears stretch-dependent",
    body:
      "The next funding checkpoint is technically reachable, but it currently depends on unusually strong performance relative to recent pace. Treat this as a warning to tighten follow-up, pull forward asks, or revise commitments."
  }
};

export const BUDGET_WARNINGS = {
  overbuilt: {
    title: "Budget appears aggressive for this race type",
    body:
      "The current budget materially exceeds the typical spend band for comparable campaigns. That does not make it wrong, but it does mean the finance path should be treated as stretch-dependent until the campaign has proof that the raise pace can support it."
  },
  thinReserve: {
    title: "Reserve layer is too thin",
    body:
      "The budget leaves very little room for timing slippage, delayed deposits, or last-minute operating pressure. A campaign can survive a lean budget more easily than it can survive a budget with no protection."
  },
  optionalTooEarly: {
    title: "Optional costs are entering too early",
    body:
      "Several non-core costs are scheduled before the campaign has secured safe coverage for required operating needs. Reordering those commitments may improve stability without materially weakening the plan."
  }
};

export const DONOR_INTELLIGENCE_WARNINGS = {
  inDistrictWeakness: {
    title: "Local donor base appears thin",
    body:
      "A large share of current fundraising appears to be coming from outside the district or outside the campaign's immediate local base. That may be acceptable in some races, but it can also signal weak local depth."
  },
  concentrationRisk: {
    title: "Donor base is concentrated",
    body:
      "A relatively small number of donors or ZIP clusters are carrying a large share of the raise. This can work for a while, but it increases fragility if one segment cools off."
  },
  classificationLimits: {
    title: "Some donor records remain unclassified",
    body:
      "Occupation, industry, or geography enrichment is only partially complete for this view. Use the underlying signal, but do not over-interpret fine distinctions until review coverage improves."
  }
};

export const EXPENDITURE_WARNINGS = {
  overheadHeavy: {
    title: "Overhead share is elevated",
    body:
      "Administrative, consulting, or general operating costs appear to be taking a larger share of the budget than expected for a campaign of this type. Review whether those commitments are supporting core campaign goals proportionately."
  },
  fieldUnderweight: {
    title: "Field investment may be undersupported",
    body:
      "The campaign's actual or planned spend mix appears lighter on field than the selected strategy would suggest. This does not automatically require expansion, but it should prompt a check against the operating plan."
  },
  timingMismatch: {
    title: "Spend timing is drifting from the plan",
    body:
      "Actual spending is arriving earlier or in a different mix than the budget path anticipated. Even if totals remain close, timing drift can create pressure later in the cycle."
  }
};

export const GENERIC_RECOMMENDATION_OPENERS = [
  "Recommended action:",
  "Practical next step:",
  "Best near-term correction:",
  "Before the next checkpoint, the campaign should:"
];
