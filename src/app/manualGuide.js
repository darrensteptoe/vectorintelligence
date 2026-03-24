import { PAGE_MANUAL_GUIDANCE } from "../core/contracts/manualLanguage.js";
import { HARDENED_APP_MAP, ROUTE_TO_MANUAL_KEY } from "../core/contracts/hardening.js";

const QUESTIONS_BY_ROUTE = Object.fromEntries(
  HARDENED_APP_MAP.map((entry) => [entry.path, entry.pageQuestion])
);

/**
 * @param {string} route
 */
export function getManualGuidance(route) {
  const key = ROUTE_TO_MANUAL_KEY[route];
  return key ? PAGE_MANUAL_GUIDANCE[key] ?? null : null;
}

/**
 * @param {string} route
 */
export function getPageQuestion(route) {
  return QUESTIONS_BY_ROUTE[route] ?? null;
}
