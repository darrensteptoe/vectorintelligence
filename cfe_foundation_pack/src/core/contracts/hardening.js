export const HARDENED_APP_MAP = [
  {
    path: "/overview",
    id: "overview",
    title: "Overview",
    pageQuestion: "What is funded, what is at risk, and what needs action now?"
  },
  {
    path: "/budget",
    id: "budget",
    title: "Budget",
    pageQuestion: "What is the campaign trying to fund, and which costs are essential?"
  },
  {
    path: "/timeline",
    id: "timeline",
    title: "Timeline",
    pageQuestion: "When do costs hit, and where does timing pressure build?"
  },
  {
    path: "/benchmarks",
    id: "benchmarks",
    title: "Benchmarks",
    pageQuestion: "How realistic is this plan relative to comparable races?"
  },
  {
    path: "/funding-path",
    id: "fundingPath",
    title: "Funding Path",
    pageQuestion: "How much must arrive, by when, and with what reserve discipline?"
  },
  {
    path: "/finance-operations",
    id: "financeOperations",
    title: "Finance Operations",
    pageQuestion: "Is planned finance work being completed in a way that can carry the path?"
  },
  {
    path: "/donor-intelligence",
    id: "donorIntelligence",
    title: "Donor Intelligence",
    pageQuestion: "Who is funding the campaign and how concentrated is that support?"
  },
  {
    path: "/expenditure-intelligence",
    id: "expenditureIntelligence",
    title: "Expenditure Intelligence",
    pageQuestion: "Where is money going and does it align with strategy and timing?"
  },
  {
    path: "/risks",
    id: "risks",
    title: "Risks",
    pageQuestion: "Which risks are active now, what is driving them, and what should happen next?"
  },
  {
    path: "/reports",
    id: "reports",
    title: "Reports",
    pageQuestion: "What leadership-ready output should circulate this period?"
  },
  {
    path: "/manual",
    id: "manual",
    title: "Manual",
    pageQuestion: "How should operators interpret metrics, warnings, and workflow decisions?"
  },
  {
    path: "/settings-data-imports",
    id: "settingsDataImports",
    title: "Settings / Data / Imports",
    pageQuestion: "What controls imports, exports, snapshots, and role-aware behavior?"
  }
];

export const ROUTE_TO_MANUAL_KEY = Object.fromEntries(
  HARDENED_APP_MAP.map((entry) => [entry.path, entry.id])
);

export const ROLE_TYPES = [
  "Finance Director",
  "Candidate",
  "Campaign Manager",
  "Consultant",
  "Treasurer / Compliance-Adjacent"
];

export const PAGE_PERMISSION_MATRIX = {
  "/overview": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager"]
  },
  "/budget": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager"]
  },
  "/timeline": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager"]
  },
  "/benchmarks": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager", "Consultant"]
  },
  "/funding-path": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager"]
  },
  "/finance-operations": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager", "Candidate"]
  },
  "/donor-intelligence": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager", "Consultant"]
  },
  "/expenditure-intelligence": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager", "Treasurer / Compliance-Adjacent"]
  },
  "/risks": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager"]
  },
  "/reports": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager", "Consultant"]
  },
  "/manual": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager", "Consultant"]
  },
  "/settings-data-imports": {
    view: ROLE_TYPES,
    edit: ["Finance Director", "Campaign Manager", "Treasurer / Compliance-Adjacent"]
  }
};

/**
 * @param {string} route
 * @param {string} role
 */
export function getPagePermissions(route, role) {
  const config = PAGE_PERMISSION_MATRIX[route];
  if (!config) {
    return {
      can_view: false,
      can_edit: false,
      role,
      route
    };
  }

  return {
    can_view: config.view.includes(role),
    can_edit: config.edit.includes(role),
    role,
    route
  };
}

export const RIGHT_RAIL_SECTIONS = [
  "Current State",
  "Warnings",
  "Assumptions",
  "Interpretation",
  "Next Action",
  "Snapshot Context"
];

export const IMPORT_EXPORT_CONTROLS = {
  imports: [
    "Raw finance data imports",
    "Classification table imports",
    "FPE bridge snapshot imports",
    "Standardized budget imports"
  ],
  exports: [
    "Canonical budget snapshot export",
    "Finance path snapshot export",
    "Report export",
    "Donor intelligence summary export",
    "Bridge status snapshot export to FPE"
  ],
  deterministicRules: [
    "Imported files must be validated",
    "Imported snapshots must preserve provenance",
    "Import summary must show accepted/rejected/flagged counts",
    "Exports must include campaign, scenario, and snapshot date",
    "Exports must preserve Reported/Standardized/Modeled distinctions"
  ]
};

export const HARDENING_ACCEPTANCE_FOCUS = [
  "No page-level recomputation of canonical engine metrics.",
  "Unknown states stay visible and traceable.",
  "Warnings map to canonical triggers with explicit actions.",
  "Reports and dashboards share canonical snapshot truth.",
  "Manual/help layer remains dense and campaign-literate.",
  "CFE remains visually and structurally in-family with FPE."
];
