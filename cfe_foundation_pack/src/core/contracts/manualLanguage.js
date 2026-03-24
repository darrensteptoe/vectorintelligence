export const MANUAL_FRONT_PAGE = {
  title: "Campaign Finance Engine Manual",
  opening:
    "CFE is designed to help campaigns answer a practical question: what does the campaign need to spend, when will those costs hit, what must be raised before those moments, and is the campaign's current finance program strong enough to support the plan?",
  context:
    "A good finance system does not merely total receipts and expenditures. It helps the campaign organize reality. That means budget planning, timing discipline, execution tracking, and a willingness to show when a plan is attractive on paper but weak in practice."
};

export const MANUAL_USAGE_GUIDANCE =
  "CFE works best when the campaign treats it as a planning and control system, not just a reporting screen. The quality of the outputs depends on the honesty of the budget, the discipline of activity logging, and the willingness to distinguish what is confirmed from what is merely hoped for.";

export const MANUAL_SECTIONS = {
  overview: {
    title: "Overview",
    whatFor:
      "The Overview page is meant to give senior users a fast read on the campaign's finance condition. It is not the place to micromanage every budget line. It is the place to understand whether the current path is broadly safe, under strain, or unrealistic.",
    fullyFundable:
      "'Fully Fundable' does not mean the campaign can relax. It means the active plan appears supportable under current assumptions and current pace without obvious structural strain.",
    notYetFundable:
      "'Not Yet Fundable' means the campaign is carrying more plan than the current finance path can responsibly support. That can change, but until it does, leaders should be cautious about new commitments."
  },
  budgetPlan: {
    title: "Budget Plan",
    why:
      "Most campaign finance problems do not begin with poor reporting. They begin with an unclear campaign plan. This page forces the campaign to translate ambition into cost structure.",
    goodBudgeting:
      "A good budget is not automatically the smallest budget. It is the budget that reflects the real campaign strategy, includes actual timing, distinguishes required from optional costs, and leaves room for routine disruption.",
    commonMistake:
      "The most common mistake is underbudgeting required work while quietly assuming the campaign will 'figure it out later.' CFE is built to make those hidden assumptions visible."
  },
  spendTimeline: {
    title: "Spend Timeline",
    whyTimingMatters:
      "Campaigns often focus on totals and ignore timing. But timing is usually what creates real stress. A campaign can be theoretically fundable and still become operationally unstable if cash arrives after commitments need to be made.",
    pressureWindows:
      "A pressure window is a period where the campaign's expected commitments or cash needs start outpacing the current finance path. These windows deserve attention early because the easiest month to solve next month's pressure is this month."
  },
  fundingPath: {
    title: "Funding Path",
    whatFor:
      "The Funding Path page converts the campaign budget into a practical fundraising path. It should tell the campaign what needs to be raised, how quickly, and through which channels.",
    strongPath: [
      "The total target is credible.",
      "The monthly pacing is operationally realistic.",
      "The reserve layer remains intact even if normal slippage occurs."
    ],
    weakPath:
      "A weak path usually depends on unusually strong performance arriving exactly on time, often from too few channels, with too little protection if deposits slip."
  },
  financeActivity: {
    title: "Finance Activity",
    why:
      "Money rarely appears because the dashboard says it should. It appears because the campaign schedules the right work, completes that work, and follows through hard enough to convert asks into receipts.",
    whatToLog:
      "The campaign should log call time, donor meetings, events, follow-up blocks, online pushes, and major finance committee activity.",
    plannedVsActual:
      "Planned vs Actual is not there to punish a bad week. It is there to identify where the path is breaking."
  },
  donorIntelligence: {
    title: "Donor Intelligence",
    whatFor:
      "Donor Intelligence shows the shape of the donor base. The point is not to indulge curiosity. The point is to understand who is carrying the campaign, whether support is broad or narrow, and where future fundraising effort may be strongest.",
    geography:
      "Geography is most useful for identifying concentration, underdeveloped local support, and white-space opportunity.",
    occupationIndustry:
      "Occupation and industry are directional signals. They should not be treated as perfect social science."
  },
  expenditureIntelligence: {
    title: "Expenditure Intelligence",
    whatFor:
      "This page helps the campaign evaluate whether its spending mix matches its actual strategy. A campaign can raise enough money and still drift into a spend pattern that weakens execution.",
    watchFor: [
      "rising overhead without strategic gain",
      "consultant load crowding out core operations",
      "field underinvestment relative to stated plan",
      "spend arriving earlier than the budget assumed"
    ]
  },
  reports: {
    title: "Reports",
    goodReports:
      "A good report should help someone act. It should not merely restate data."
  },
  warningsStatuses: {
    title: "Warnings and statuses",
    whyWarningsExist:
      "Warnings exist to help the campaign act before weak conditions become visible through missed payroll, missed hiring, late production, or degraded program quality.",
    respond:
      "The right first response is usually to identify whether the warning reflects a planning problem, a pace problem, an execution problem, a timing problem, or a classification/data completeness problem."
  },
  bridge: {
    title: "Bridge with FPE",
    why:
      "The bridge exists so the finance engine can understand what the field plan is expected to cost and when those costs will matter.",
    whatNot:
      "The bridge is not a merger of the two apps. FPE and CFE should remain separate systems with explicit snapshots, not one tangled application."
  }
};
