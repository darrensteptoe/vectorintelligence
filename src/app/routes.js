export const APP_ROUTES = [
  { path: "/setup", title: "Campaign Setup" },
  { path: "/budget", title: "Budget Builder" },
  { path: "/timeline", title: "Spend Timeline" },
  { path: "/funding", title: "Funding Path" },
  { path: "/operations", title: "Finance Operations" },
  { path: "/reporting", title: "Reporting" },
  { path: "/bridge", title: "FPE-CFE Bridge" }
];

/**
 * @param {string} path
 * @returns {boolean}
 */
export function isKnownRoute(path) {
  return APP_ROUTES.some((route) => route.path === path);
}
