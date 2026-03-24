import { PAGES_BY_ROUTE } from "./pages/index.js";
import { isKnownRoute } from "./routes.js";

/**
 * @param {import('../state/store.js').CfeStore} store
 */
export function createAppShell(store) {
  return {
    navigate(path) {
      if (!isKnownRoute(path)) {
        throw new Error(`Unknown route: ${path}`);
      }
      store.setRoute(path);
    },
    render() {
      const state = store.getState();
      const page = PAGES_BY_ROUTE[state.route];
      if (!page) {
        throw new Error(`No page for route: ${state.route}`);
      }

      return {
        route: state.route,
        title: page.title,
        payload: page.render(state)
      };
    }
  };
}
