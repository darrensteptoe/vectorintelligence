export const OVERALL_PATH_STATUS_DESCRIPTIONS = {
  "On Path":
    "The current finance path is supporting the selected campaign plan at a workable pace.",
  "Slightly Behind":
    "The campaign is modestly behind the active finance path but remains recoverable with disciplined execution.",
  "Behind Pace":
    "Current raising and activity levels are not keeping up with the active funding requirement.",
  "At Risk":
    "The campaign is entering a period where planned costs may outpace safe cash availability.",
  "Off Path":
    "The current finance program is not sufficient to support the selected campaign plan without material change."
};

export const RESERVE_STATUS_DESCRIPTIONS = {
  Greenlight: "Current reserve coverage is healthy relative to upcoming commitments.",
  Watch: "Reserve coverage remains workable but has less cushion than preferred.",
  Caution:
    "Reserve coverage is thin relative to upcoming costs and should be reinforced soon.",
  Redline: "Current reserve coverage is not sufficient for the next spending window."
};

export const FIELD_FUNDING_STATUS_DESCRIPTIONS = {
  Greenlight: "The selected field plan appears finance-safe under the current budget path.",
  Caution:
    "The selected field plan is only partially finance-safe and may require pacing discipline or delayed expansion.",
  Redline:
    "The selected field plan is not currently finance-safe under the active funding path."
};

export const RISK_FLAG_LANGUAGE = {
  behindPace: {
    titles: [
      "Raise Pace Below Target",
      "Monthly Raise Pace Is Off Track",
      "Funding Pace Not Keeping Up With Plan"
    ],
    description:
      "The campaign has raised less than the required amount for this period. At the current pace, upcoming budget pressure will be harder to cover cleanly.",
    recommendedActions: [
      "Increase candidate call time and tighten the near-term ask list.",
      "Add immediate follow-up on unresolved commitments from the current period.",
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
      "The current reserve position is below the preferred cushion for the next spending window. That does not automatically require cuts, but it does reduce flexibility and increases risk around new commitments.",
    recommendedActions: [
      "Delay nonessential spending until reserve status improves.",
      "Pull forward near-term asks tied to the next commitment window.",
      "Review optional budget lines before approving new additions."
    ]
  },
  fieldNotCashSafe: {
    titles: [
      "Field Expansion Is Not Yet Finance-Safe",
      "Selected Field Plan Is Only Partially Funded",
      "Field Ramp Timing Exceeds Current Funding Path"
    ],
    description:
      "The selected field scenario is not yet fully supported by the active finance path. Proceeding without adjustment would increase pressure on reserve and later budget windows.",
    recommendedActions: [
      "Hold expansion until the next funding checkpoint is met.",
      "Use the smaller field scenario until reserve coverage improves.",
      "Increase finance activity tied to the next staffing milestone."
    ]
  },
  consultantOverheadPressure: {
    titles: [
      "Overhead Share Is Running High",
      "Consultant Load Is Pressuring the Budget",
      "Administrative Spend Is Crowding Out Program Capacity"
    ],
    description:
      "A larger-than-preferred share of the budget is flowing to non-program costs. That may be reasonable in context, but it reduces flexibility for field, persuasion, or reserve protection.",
    recommendedActions: [
      "Review consultant and operations scope before adding new commitments.",
      "Protect core program lines first and delay lower-priority support costs.",
      "Compare current mix against historical norms for this race type."
    ]
  },
  eventUnderperformance: {
    titles: [
      "Event Yield Came In Below Goal",
      "Fundraiser Underperformed Relative to Plan",
      "Event Program Is Not Carrying Its Expected Share"
    ],
    description:
      "This event or event block produced less net money than planned. Repeating the same mix without adjustment will leave a larger burden on other channels.",
    recommendedActions: [
      "Tighten host standards and RSVP conversion before the next event.",
      "Increase post-event follow-up to improve pledge realization.",
      "Shift weight toward higher-performing finance channels if needed."
    ]
  },
  pledgeLag: {
    titles: [
      "Pledge Conversion Is Slower Than Planned",
      "Expected Money Has Not Landed on Time",
      "Deposit Timing Is Pressuring the Path"
    ],
    description:
      "A meaningful share of expected money is arriving later than planned. That can distort the campaign's real cash position even when topline commitment numbers look healthy.",
    recommendedActions: [
      "Work the delayed pledge list immediately.",
      "Separate soft commitments from reliable near-term receipts in planning.",
      "Do not treat unresolved pledges as fully available cash."
    ]
  },
  donorConcentrationRisk: {
    titles: [
      "Donor Base Is Too Concentrated",
      "A Narrow Donor Cluster Is Carrying Too Much Weight",
      "Geography of Support Is Too Tight"
    ],
    description:
      "A relatively narrow set of donors, ZIPs, or support clusters is carrying an outsized share of receipts. That may be manageable in the short term, but it creates fragility if one source slows.",
    recommendedActions: [
      "Broaden asks into underdeveloped donor geographies and sectors.",
      "Reduce dependence on one or two large donor channels.",
      "Use upcoming events and call time to widen the base rather than only deepen the same pool."
    ]
  }
};

export const NEUTRAL_INFORMATIONAL_LINES = [
  "This pattern is worth watching but does not currently require a change in plan.",
  "This category is within a workable range for the active scenario.",
  "This result is mixed: useful in context, but not strong enough to carry more of the path without support.",
  "Unknown or unclassified share remains visible here so the team can judge confidence appropriately."
];
