import { getPagePermissions } from "../core/contracts/hardening.js";
import { getManualGuidance, getPageQuestion } from "./manualGuide.js";
import { PAGES_BY_ROUTE } from "./pages/index.js";
import { isKnownRoute } from "./routes.js";
import { buildRightRail } from "./rightRail.js";

/**
 * @param {import('../state/store.js').CfeStore} store
 */
export function createAppShell(store) {
  return {
    navigate(path) {
      if (isKnownRoute(path) === false) {
        throw new Error(`Unknown route: ${path}`);
      }
      store.setRoute(path);
    },
    render() {
      const state = store.getState();
      const page = PAGES_BY_ROUTE[state.route];
      if (page == null) {
        throw new Error(`No page for route: ${state.route}`);
      }

      const activeRole = state.activeRole ?? "Finance Director";
      const payload = page.render(state);

      return {
        route: state.route,
        title: page.title,
        payload: {
          ...payload,
          page_question: getPageQuestion(state.route),
          manual_guidance: getManualGuidance(state.route),
          right_rail: buildRightRail(state.route, state),
          permissions: getPagePermissions(state.route, activeRole)
        }
      };
    }
  };
}
