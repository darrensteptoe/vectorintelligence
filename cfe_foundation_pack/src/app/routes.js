export const APP_ROUTES = [
  { path: "/overview", title: "Overview" },
  { path: "/setup", title: "Race Setup" },
  { path: "/budget", title: "Budget" },
  { path: "/timeline", title: "Timeline" },
  { path: "/benchmarks", title: "Benchmarks" },
  { path: "/funding-path", title: "Funding Path" },
  { path: "/channels", title: "Channels" },
  { path: "/activity", title: "Activity" },
  { path: "/pledges", title: "Pledges" },
  { path: "/donors", title: "Donors" },
  { path: "/spending", title: "Spending" },
  { path: "/risks", title: "Risks" },
  { path: "/reports", title: "Reports" },
  { path: "/bridge", title: "Bridge" }
];

/**
 * @param {string} path
 * @returns {boolean}
 */
export function isKnownRoute(path) {
  return APP_ROUTES.some((route) => route.path === path);
}
