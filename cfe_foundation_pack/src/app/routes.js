export const APP_ROUTES = [
  { path: "/overview", title: "Overview" },
  { path: "/budget-plan", title: "Budget Plan" },
  { path: "/spend-timeline", title: "Spend Timeline" },
  { path: "/funding-path", title: "Funding Path" },
  { path: "/finance-activity", title: "Finance Activity" },
  { path: "/donor-intelligence", title: "Donor Intelligence" },
  { path: "/expenditure-intelligence", title: "Expenditure Intelligence" },
  { path: "/reports", title: "Reports" },
  { path: "/manual", title: "Manual" },
  { path: "/settings", title: "Settings" }
];

/**
 * @param {string} path
 * @returns {boolean}
 */
export function isKnownRoute(path) {
  return APP_ROUTES.some((route) => route.path === path);
}
