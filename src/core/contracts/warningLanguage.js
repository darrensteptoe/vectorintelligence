export const WARNING_TONE_RULES = [
  "Warnings are specific and non-hysterical.",
  "Warnings are tied to canonical triggers.",
  "Warnings state consequence, not just color.",
  "Warnings include immediate recommended action.",
  "Warnings preserve uncertainty instead of smoothing it away."
];

export const PATH_STATUS_DESCRIPTIONS = {
  "On Path":
    "Current pace, execution, and reserve condition are broadly consistent with the active path under present assumptions.",
  Watch:
    "The path remains recoverable, but margin has narrowed and upcoming checkpoints depend on cleaner execution.",
  "Off Path":
    "Current production timing is insufficient for the active plan and reserve protection is increasingly exposed."
};

export const RESERVE_STATUS_DESCRIPTIONS = {
  Healthy: "Reserve condition is currently buffering normal variance.",
  Tight:
    "Reserve flexibility is thinning; one soft period could create immediate operating pressure.",
  "At Risk":
    "Reserve floor protection is below safe operating range for the next commitment window."
};

export const FIELD_FUNDING_STATUS_DESCRIPTIONS = {
  Greenlight: "Selected field posture is currently supportable under active finance conditions.",
  Caution:
    "Selected field posture is only partially buffered and more sensitive to near-term finance underperformance.",
  Redline: "Selected field posture is not safely funded under current path conditions."
};

export const ACTIVITY_EXECUTION_STATUS_DESCRIPTIONS = {
  Strong: "Finance execution is materially carrying the path requirement.",
  Mixed: "Finance execution is partially carrying the path but with narrowing cushion.",
  Weak: "Finance execution is materially below what the path requires."
};

export const WARNING_LIBRARY_BY_TRIGGER_FAMILY = {
  paceRisk: {
    caution: {
      title: "Raise pace is narrowing the campaign's margin",
      body:
        "Current production is still within a recoverable range, but the campaign is no longer building the same amount of flexibility into the path. If the current pace continues, the next checkpoint becomes more dependent on clean execution and less protected by cushion.",
      recommended_action:
        "Tighten the next period's channel plan, prioritize the highest-likelihood asks, and treat follow-up completion as a production issue rather than an administrative task."
    },
    warning: {
      title: "Raise pace is below the active path requirement",
      body:
        "The campaign is not currently producing enough money, in time, to support the active funding path. This is not only a gross-total issue. It means upcoming commitments and reserve protection are becoming harder to support under current conditions.",
      recommended_action:
        "Increase near-term production in the most controllable channels, review whether the activity plan is actually being completed, and recheck whether any planned costs should be delayed or made conditional."
    },
    redline: {
      title: "Active finance path is not cash-safe at current pace",
      body:
        "Under present assumptions, the campaign's pace does not safely support the selected path. Unless production materially improves or the plan is rephased, leadership should expect growing tension between what the campaign intends to do and what it can responsibly fund.",
      recommended_action:
        "Move immediately on the next highest-value asks, halt non-core expansion decisions, and review whether the active budget scenario still matches cash reality."
    }
  },
  reserveRisk: {
    caution: {
      title: "Reserve flexibility is thinning",
      body:
        "The campaign still retains some cushion, but reserve protection is no longer comfortably ahead of expected variance. A delayed event, soft week, or slower conversion period would have more immediate consequences than earlier in the cycle.",
      recommended_action:
        "Treat the next raise period as a reserve rebuild window and avoid turning temporary strength into new fixed commitments."
    },
    warning: {
      title: "Reserve protection is below the campaign's safe range",
      body:
        "The campaign is operating with reduced financial flexibility relative to upcoming obligations. It may still execute the plan, but it is more vulnerable to common fundraising slippage, deposit lag, or front-loaded costs.",
      recommended_action:
        "Rebuild reserve before approving new discretionary costs and prioritize liquidity over symbolic growth."
    },
    redline: {
      title: "Reserve floor has been breached",
      body:
        "The campaign is now operating below its modeled reserve floor. That means ordinary variance is more likely to trigger reactive decisions about staffing, scheduling, contracts, or scope.",
      recommended_action:
        "Freeze non-core expansion, increase attention to received cash rather than soft commitments, and protect the next critical operating needs first."
    }
  },
  fieldFundingRisk: {
    caution: {
      title: "Field plan is only partially buffered by current funding",
      body:
        "The selected field scenario remains possible, but current finance strength is not creating the same level of safety around field growth or timing. Expansion is becoming more sensitive to missed finance production.",
      recommended_action:
        "Monitor the next funding checkpoint closely before treating the current field scale as fully secure."
    },
    warning: {
      title: "Current finance path is not comfortably supporting field scale",
      body:
        "The campaign may still continue the selected field scenario, but it is doing so with reduced safety. The path is relying more heavily on future production than is ideal for the current level of field commitment.",
      recommended_action:
        "Reassess timing of field expansion, confirm whether hiring and turf growth are aligned with cash reality, and protect field-critical commitments over lower-priority additions."
    },
    redline: {
      title: "Active field scenario is not safely funded",
      body:
        "Under current finance conditions, the campaign is trying to carry a field plan that is not adequately supported by cash safety and projected production.",
      recommended_action:
        "Delay further expansion, review whether the field scenario should be rephased, and prioritize funding the core field spine before optional additions."
    }
  },
  activityCompletionRisk: {
    caution: {
      title: "Activity completion is slipping below plan",
      body:
        "The scheduled finance program is still functioning, but the campaign is leaving meaningful production on the table through incomplete call time, deferred follow-up, or undercompleted event preparation.",
      recommended_action:
        "Tighten execution discipline and treat missed activity as a direct production problem."
    },
    warning: {
      title: "Planned finance work is not being completed at a sufficient rate",
      body:
        "The campaign's current schedule is stronger on paper than in reality. Because activity completion is lagging, the modeled channel plan is not receiving the execution support it requires.",
      recommended_action:
        "Reduce fake complexity, refocus on high-yield activity, and make completion accountability visible by owner."
    },
    redline: {
      title: "Finance execution is materially below what the path requires",
      body:
        "The campaign is not only behind in dollars. It is behind in the actual work required to produce those dollars. Under these conditions, the path will continue to drift unless execution discipline changes quickly.",
      recommended_action:
        "Clear low-value activity, prioritize call time and top follow-up, and reset the schedule around near-term production rather than optics."
    }
  },
  pledgeConversionRisk: {
    caution: {
      title: "Pledge conversion is softening",
      body:
        "The campaign is still generating commitments, but the rate at which those commitments are arriving as usable cash is weakening.",
      recommended_action:
        "Increase follow-up intensity on near-term expected money and separate soft confidence from actual liquidity."
    },
    warning: {
      title: "Too much of the path is resting on unconverted commitments",
      body:
        "The campaign is carrying a larger-than-safe share of expected money in the pledge pipeline rather than in received or deposited form. This increases timing risk and can make the path look healthier than it is.",
      recommended_action:
        "Rebuild discipline around expected receipt dates, owner accountability, and escalation on aging pledges."
    },
    redline: {
      title: "Pledge conversion is materially distorting cash reality",
      body:
        "Current path strength is being overstated by commitments that are not converting fast enough to protect the plan.",
      recommended_action:
        "Recenter reporting on received money, not verbal support, and avoid making new commitments based on money that has not yet become liquid."
    }
  },
  donorConcentrationRisk: {
    caution: {
      title: "Donor load is concentrating in a narrow base",
      body:
        "The campaign is still producing, but too much of the current result is coming from a small segment of the donor universe. This reduces resilience and can make later growth harder.",
      recommended_action:
        "Widen the host and ask universe before the current producing cluster becomes overused."
    },
    warning: {
      title: "Donor concentration is becoming a structural weakness",
      body:
        "The campaign is relying heavily on a limited set of donors, geographies, or networks. That can sustain a period of growth, but it also makes the path more vulnerable to fatigue, missed asks, or weak replenishment.",
      recommended_action:
        "Develop new host pockets, widen ask assignment, and use donor intelligence to identify underdeveloped sectors and geographies."
    },
    redline: {
      title: "The current finance path is too dependent on a narrow donor base",
      body:
        "The campaign's production is being carried by too few people or too few networks to safely support the active path over time.",
      recommended_action:
        "Expand the finance universe immediately, reduce dependence on one-off rescue behavior, and avoid treating a narrow spike as a sustainable model."
    }
  },
  historicalRealismRisk: {
    caution: {
      title: "Current plan is stretching above historical norms",
      body:
        "The campaign's selected budget path is meaningfully heavier than the historical pattern for comparable races. This does not make the plan invalid, but it does increase the burden of proof on fundraising and execution.",
      recommended_action:
        "Be explicit about why the plan differs and make sure the channel path genuinely supports that choice."
    },
    warning: {
      title: "Current plan is materially outside the historical comfort zone",
      body:
        "The campaign's funding requirement is sitting well above what comparable serious campaigns have typically sustained. The plan may still be strategically coherent, but it is carrying a realism burden that should be treated seriously.",
      recommended_action:
        "Recheck the scope of optional costs, phase assumptions, and whether the campaign is overbuilding before the money is truly there."
    },
    redline: {
      title: "Active budget path is historically very difficult to support",
      body:
        "Under current assumptions, the campaign is pursuing a finance path that sits materially outside the historically credible range for comparable campaigns.",
      recommended_action:
        "Treat this as a strategic choice, not an accidental outcome. Either build a very explicit justification and channel plan, or reduce scope before the plan forces reactive cuts later."
    }
  },
  expenditureMixRisk: {
    caution: {
      title: "Spend mix is drifting away from stated priorities",
      body:
        "Current or planned spending still supports the campaign overall, but the balance is beginning to shift away from the campaign's stated strategic center.",
      recommended_action:
        "Review whether current vendors, recurring costs, or one-off items are quietly crowding out more important work."
    },
    warning: {
      title: "Current spend mix is misaligned with strategy",
      body:
        "The campaign's expenditure pattern suggests that too much money is being absorbed by lower-priority categories relative to the strategy it claims to be running.",
      recommended_action:
        "Recheck non-core costs, protect the campaign's primary persuasion and turnout tools, and avoid letting overhead expand by inertia."
    },
    redline: {
      title: "Spend profile is undermining the campaign's operating plan",
      body:
        "The current or projected expenditure mix is materially crowding out core campaign needs. At this point, the issue is not just inefficiency; it is strategic distortion.",
      recommended_action:
        "Freeze or cut non-core categories immediately and restore protection to the operational spine of the campaign."
    }
  },
  channelDependenceRisk: {
    caution: {
      title: "Channel plan is leaning too heavily on one source",
      body:
        "The current funding path still works on paper, but too much of the near-term production depends on one channel carrying a disproportionate share of the load.",
      recommended_action:
        "Improve secondary channel readiness before the leading channel becomes a bottleneck."
    },
    warning: {
      title: "Current path is too exposed to one channel's performance",
      body:
        "If the leading channel weakens, the campaign does not have enough support from other channels to absorb the shortfall cleanly.",
      recommended_action:
        "Widen production responsibility and strengthen the next-best controllable channels immediately."
    },
    redline: {
      title: "Current funding path is dangerously dependent on one channel",
      body:
        "The path's stability is being overstated by a narrow production structure. A single underperforming channel now has the power to materially disrupt overall path safety.",
      recommended_action:
        "Rebuild channel balance and stop treating one source of production as if it can rescue the whole plan on its own."
    }
  }
};

export const WARNING_FAMILIES = {
  fundingPace: {
    titleOptions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.caution.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.warning.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.redline.title
    ],
    descriptionTemplate: WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.warning.body,
    recommendedActions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.caution.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.warning.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.redline.recommended_action
    ]
  },
  reservePressure: {
    titleOptions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.caution.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.warning.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.redline.title
    ],
    descriptionTemplate: WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.warning.body,
    recommendedActions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.caution.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.warning.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.redline.recommended_action
    ]
  },
  fieldAffordability: {
    titleOptions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.fieldFundingRisk.caution.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.fieldFundingRisk.warning.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.fieldFundingRisk.redline.title
    ],
    descriptionTemplate: WARNING_LIBRARY_BY_TRIGGER_FAMILY.fieldFundingRisk.warning.body,
    recommendedActions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.fieldFundingRisk.caution.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.fieldFundingRisk.warning.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.fieldFundingRisk.redline.recommended_action
    ]
  },
  eventUnderperformance: {
    titleOptions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.caution.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.warning.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.redline.title
    ],
    descriptionTemplate: WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.warning.body,
    recommendedActions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.caution.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.warning.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.redline.recommended_action
    ]
  },
  donorConcentration: {
    titleOptions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.caution.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.warning.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.redline.title
    ],
    descriptionTemplate: WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.warning.body,
    recommendedActions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.caution.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.warning.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.redline.recommended_action
    ]
  },
  overweightOverhead: {
    titleOptions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.caution.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.warning.title,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.redline.title
    ],
    descriptionTemplate: WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.warning.body,
    recommendedActions: [
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.caution.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.warning.recommended_action,
      WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.redline.recommended_action
    ]
  }
};

export const FUNDING_PATH_WARNINGS = {
  paceBehind: {
    title: WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.warning.title,
    body: WARNING_LIBRARY_BY_TRIGGER_FAMILY.paceRisk.warning.body
  },
  channelConcentration: {
    title: WARNING_LIBRARY_BY_TRIGGER_FAMILY.channelDependenceRisk.warning.title,
    body: WARNING_LIBRARY_BY_TRIGGER_FAMILY.channelDependenceRisk.warning.body
  },
  unrealisticCheckpoint: {
    title: WARNING_LIBRARY_BY_TRIGGER_FAMILY.historicalRealismRisk.warning.title,
    body: WARNING_LIBRARY_BY_TRIGGER_FAMILY.historicalRealismRisk.warning.body
  }
};

export const RESERVE_WARNING_BY_STATUS = {
  Tight: WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.caution.body,
  "At Risk": WARNING_LIBRARY_BY_TRIGGER_FAMILY.reserveRisk.redline.body
};

export const ACTIVITY_WARNINGS = {
  weakCompletion: WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.warning.body,
  followUpLag: WARNING_LIBRARY_BY_TRIGGER_FAMILY.pledgeConversionRisk.warning.body,
  eventDrag: WARNING_LIBRARY_BY_TRIGGER_FAMILY.activityCompletionRisk.redline.body
};

export const DATA_COMPLETENESS_WARNINGS = {
  limitedComparables:
    "Historical evidence is currently thin or mixed. Use benchmark output as context while improving comparable quality.",
  limitedClassificationCoverage:
    "Classification coverage is incomplete. Broad patterns may be useful, but fine-grained claims should stay cautious.",
  incompleteCurrentPeriodData:
    "Current-period totals may still move with deposit lag and unresolved follow-up. Treat near-term readings as provisional."
};

export const EMPTY_STATE_WARNINGS = {
  noActivitiesThisWeek:
    "No finance activity is scheduled. A path without activity becomes a wish. Add call time, donor meetings, events, and follow-up blocks to make the plan executable.",
  noPledgesRecorded:
    "No pledges are tracked yet. Distinguish commitments from received money to avoid overstating cash reality.",
  noExpenditureCategorization:
    "Spend data is present but classification is incomplete. Keep interpretation cautious until major vendors and purposes are classified.",
  noFieldBridgeSnapshot:
    "No field bridge snapshot is attached. Finance planning remains possible, but field-affordability interpretation is weaker."
};

export const DONOR_INTELLIGENCE_WARNINGS = {
  inDistrictWeakness: {
    title: "In-district donor depth appears thin",
    body:
      "Outside support can still matter, but local donor depth should be monitored if district-facing finance strength is not developing as expected."
  },
  concentrationRisk: {
    title: WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.warning.title,
    body: WARNING_LIBRARY_BY_TRIGGER_FAMILY.donorConcentrationRisk.warning.body
  },
  classificationLimits: {
    title: "Occupation classification remains incomplete",
    body:
      "Unknown is acceptable. Keep uncertainty visible until classification coverage is strong enough for finer interpretation."
  }
};

export const EXPENDITURE_WARNINGS = {
  overheadHeavy: {
    title: WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.warning.title,
    body: WARNING_LIBRARY_BY_TRIGGER_FAMILY.expenditureMixRisk.warning.body
  },
  fieldUnderweight: {
    title: "Field support appears lighter than strategy requires",
    body:
      "Current spend profile may be crowding out field-critical operating work relative to the declared campaign strategy."
  },
  timingMismatch: {
    title: "Spend timing is outrunning support timing",
    body:
      "Even when totals appear close, spend arriving earlier than receipts can force reactive decisions and reduce option quality."
  }
};

export const EMPTY_WARNING_STATE =
  "No active risks are currently triggered under the selected scenario. That means no immediate warning threshold is breached, not that discipline can relax.";

export const GENERIC_RECOMMENDATION_OPENERS = [
  "Recommended action:",
  "Best immediate correction:",
  "Near-term operator move:",
  "Before next checkpoint, leadership should:"
];
