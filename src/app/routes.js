import { HARDENED_APP_MAP } from "../core/contracts/hardening.js";

export const APP_ROUTES = HARDENED_APP_MAP.map((entry) => ({
  path: entry.path,
  title: entry.title
}));

/**
 * @param {string} path
 * @returns {boolean}
 */
export function isKnownRoute(path) {
  return APP_ROUTES.some((route) => route.path === path);
}
