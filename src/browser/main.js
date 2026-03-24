import { APP_ROUTES, createAppShell, createCfeStore, isKnownRoute } from "../index.js";

const DEFAULT_ROUTE = "/overview";

const store = createCfeStore();
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
 * @param {unknown} value
 * @returns {string}
 */
function safeJson(value) {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

/**
 * @param {string} activeRoute
 * @returns {HTMLElement}
 */
function buildNav(activeRoute) {
  const nav = document.createElement("nav");
  nav.className = "nav";

  const title = document.createElement("h2");
  title.className = "nav-title";
  title.textContent = "Routes";
  nav.appendChild(title);

  const list = document.createElement("div");
  list.className = "nav-links";

  for (const route of APP_ROUTES) {
    const link = document.createElement("a");
    link.className = "nav-link";
    if (route.path === activeRoute) {
      link.classList.add("active");
    }
    link.href = routeToHash(route.path);
    link.textContent = route.title;
    list.appendChild(link);
  }

  nav.appendChild(list);
  return nav;
}

/**
 * @param {{route: string, title: string, payload: unknown}} view
 * @returns {HTMLElement}
 */
function buildMain(view) {
  const main = document.createElement("main");
  main.className = "main";

  const header = document.createElement("header");
  header.className = "main-header";

  const heading = document.createElement("h1");
  heading.textContent = view.title;
  header.appendChild(heading);

  const routeTag = document.createElement("p");
  routeTag.className = "route-tag";
  routeTag.textContent = `Route: ${view.route}`;
  header.appendChild(routeTag);

  main.appendChild(header);

  const card = document.createElement("section");
  card.className = "card";

  const label = document.createElement("h2");
  label.textContent = "Rendered Payload";
  card.appendChild(label);

  const pre = document.createElement("pre");
  pre.textContent = safeJson(view.payload);
  card.appendChild(pre);

  main.appendChild(card);

  return main;
}

/**
 * @param {unknown} error
 */
function renderError(error) {
  const shellEl = document.createElement("div");
  shellEl.className = "app-shell";

  const errorCard = document.createElement("section");
  errorCard.className = "card error";

  const title = document.createElement("h1");
  title.textContent = "Render Error";
  errorCard.appendChild(title);

  const body = document.createElement("pre");
  body.textContent = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
  errorCard.appendChild(body);

  shellEl.appendChild(errorCard);
  appRoot.replaceChildren(shellEl);
}

/**
 * @param {string} route
 */
function renderRoute(route) {
  try {
    shell.navigate(route);
    const view = shell.render();

    const shellEl = document.createElement("div");
    shellEl.className = "app-shell";
    shellEl.appendChild(buildNav(view.route));
    shellEl.appendChild(buildMain(view));

    appRoot.replaceChildren(shellEl);
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
