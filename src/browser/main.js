import { APP_ROUTES, createAppShell, createCfeStore, isKnownRoute } from "../index.js";
import { hydrateStoreWithDemoState } from "./hydration.js";
import { buildAppSurface } from "./renderers.js";

const DEFAULT_ROUTE = "/overview";

const store = createCfeStore();

try {
  hydrateStoreWithDemoState(store);
} catch (error) {
  console.error("Unable to hydrate demo state.", error);
}

const shell = createAppShell(store);

const appRoot = document.getElementById("app");
if (!appRoot) {
  throw new Error("Missing required root mount node: #app");
}

/**
 * @param {string} route
 * @returns {string}
 */
function routeToHash(route) {
  return `#${route}`;
}

/**
 * @returns {string}
 */
function readRouteFromHash() {
  const raw = window.location.hash.startsWith("#")
    ? window.location.hash.slice(1)
    : window.location.hash;

  if (!raw) {
    return DEFAULT_ROUTE;
  }

  const normalized = raw.startsWith("/") ? raw : `/${raw}`;
  return isKnownRoute(normalized) ? normalized : DEFAULT_ROUTE;
}

/**
 * @param {unknown} error
 */
function renderError(error) {
  const wrapper = document.createElement("div");
  wrapper.className = "app-shell";

  const card = document.createElement("section");
  card.className = "section-card error-card";

  const title = document.createElement("h2");
  title.className = "section-title";
  title.textContent = "Render Error";

  const body = document.createElement("pre");
  body.textContent = error instanceof Error ? `${error.name}: ${error.message}` : String(error);

  card.appendChild(title);
  card.appendChild(body);
  wrapper.appendChild(card);

  appRoot.replaceChildren(wrapper);
}

/**
 * @param {string} route
 */
function renderRoute(route) {
  try {
    shell.navigate(route);
    const view = shell.render();
    const appSurface = buildAppSurface(view, APP_ROUTES);
    appRoot.replaceChildren(appSurface);
  } catch (error) {
    renderError(error);
  }
}

function syncAndRender() {
  const route = readRouteFromHash();
  const expectedHash = routeToHash(route);

  if (window.location.hash !== expectedHash) {
    window.location.hash = expectedHash;
    return;
  }

  renderRoute(route);
}

window.addEventListener("hashchange", syncAndRender);
syncAndRender();
