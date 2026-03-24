import { APP_ROUTES, createAppShell, createCfeStore, isKnownRoute } from "../index.js";
import { hydrateStoreWithDemoState } from "./hydration.js";
import { buildAppSurface } from "./renderers.js";

const PRIMARY_VIEWS = [
  { id: "overview", label: "Overview", kind: "core", coreRoute: "/setup", hash: "overview" },
  {
    id: "funding-path",
    label: "Funding Path",
    kind: "core",
    coreRoute: "/funding",
    hash: "funding-path"
  },
  { id: "reports", label: "Reports", kind: "core", coreRoute: "/reporting", hash: "reports" },
  { id: "manual", label: "Manual", kind: "manual", hash: "manual" }
];

const PRIMARY_BY_HASH = Object.fromEntries(PRIMARY_VIEWS.map((view) => [view.hash, view]));
const PRIMARY_BY_ROUTE = Object.fromEntries(
  PRIMARY_VIEWS.filter((view) => view.kind === "core").map((view) => [view.coreRoute, view])
);

const DEFAULT_VIEW = PRIMARY_VIEWS[0];

const store = createCfeStore();
const shell = createAppShell(store);
const demoInputs = hydrateStoreWithDemoState(store);

const runtimeInputs = {
  raisedToDate: demoInputs.raisedToDate,
  actualRaiseToDate: demoInputs.actualRaiseToDate,
  weekEndingDate: demoInputs.weekEndingDate,
  fieldPlanCost: demoInputs.fieldPlanCost
};

const appRoot = document.getElementById("app");
if (!appRoot) {
  throw new Error("Missing mount node: #app");
}

let isRendering = false;

/**
 * @returns {string}
 */
function readHashValue() {
  const raw = window.location.hash.startsWith("#") ? window.location.hash.slice(1) : window.location.hash;
  const normalized = raw.trim();

  if (normalized.length === 0) {
    return "";
  }

  return normalized.startsWith("/") ? normalized.slice(1) : normalized;
}

/**
 * @param {string} hashValue
 * @returns {{view: {id: string, label: string, kind: string, coreRoute?: string, hash: string}, canonicalHash: string}}
 */
function resolveView(hashValue) {
  if (!hashValue) {
    return { view: DEFAULT_VIEW, canonicalHash: `#/${DEFAULT_VIEW.hash}` };
  }

  const directPrimary = PRIMARY_BY_HASH[hashValue];
  if (directPrimary) {
    return { view: directPrimary, canonicalHash: `#/${directPrimary.hash}` };
  }

  const possibleRoute = `/${hashValue}`;
  if (isKnownRoute(possibleRoute)) {
    const routeTitle = APP_ROUTES.find((route) => route.path === possibleRoute)?.title ?? labelizeRoute(possibleRoute);
    const matchingPrimary = PRIMARY_BY_ROUTE[possibleRoute];

    if (matchingPrimary) {
      return {
        view: matchingPrimary,
        canonicalHash: `#/${hashValue}`
      };
    }

    return {
      view: {
        id: `module-${hashValue}`,
        label: routeTitle,
        kind: "core",
        coreRoute: possibleRoute,
        hash: hashValue
      },
      canonicalHash: `#/${hashValue}`
    };
  }

  return { view: DEFAULT_VIEW, canonicalHash: `#/${DEFAULT_VIEW.hash}` };
}

/**
 * @param {string} route
 * @returns {string}
 */
function labelizeRoute(route) {
  return route
    .replace(/^\//, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * @param {string} route
 */
function ensureCoreRoute(route) {
  if (!isKnownRoute(route)) {
    return;
  }

  const currentRoute = store.getState().route;
  if (currentRoute !== route) {
    shell.navigate(route);
  }
}

function recomputeFromRuntimeInputs() {
  store.recomputeCanonicalSnapshots({
    raisedToDate: runtimeInputs.raisedToDate,
    actualRaiseToDate: runtimeInputs.actualRaiseToDate,
    weekEndingDate: runtimeInputs.weekEndingDate
  });
}

/**
 * @param {{
 *   candidateName: string,
 *   committeeName: string,
 *   campaignPhase: string,
 *   cashOnHand: number,
 *   currentDebt: number,
 *   primaryDate: string,
 *   generalDate: string
 * }} next
 */
function handleOverviewSubmit(next) {
  const state = store.getState();

  if (!state.campaignProfile) {
    return;
  }

  const currentCampaign = state.campaignProfile;
  const currentElection = state.electionCalendar;
  const raceProfileId = state.raceProfile?.id ?? currentCampaign.race_profile_id;

  store.setCampaignSetup({
    campaignProfile: {
      ...currentCampaign,
      candidate_name: next.candidateName || currentCampaign.candidate_name,
      committee_name: next.committeeName || currentCampaign.committee_name,
      campaign_phase: next.campaignPhase || currentCampaign.campaign_phase,
      current_cash_on_hand: next.cashOnHand,
      current_debt: next.currentDebt
    },
    electionCalendar: {
      ...(currentElection ?? {
        id: "election_calendar",
        race_profile_id: raceProfileId
      }),
      race_profile_id: raceProfileId,
      primary_date: next.primaryDate || currentElection?.primary_date,
      general_date: next.generalDate || currentElection?.general_date
    }
  });

  recomputeFromRuntimeInputs();
}

/**
 * @param {{
 *   reserveTarget: number,
 *   competitiveThreshold: number,
 *   raisedToDate: number,
 *   actualRaiseToDate: number,
 *   weekEndingDate: string,
 *   fieldPlanCost: number
 * }} next
 */
function handleFundingSubmit(next) {
  const state = store.getState();

  runtimeInputs.raisedToDate = next.raisedToDate;
  runtimeInputs.actualRaiseToDate = next.actualRaiseToDate;
  runtimeInputs.weekEndingDate = next.weekEndingDate;
  runtimeInputs.fieldPlanCost = next.fieldPlanCost;

  if (state.budgetPlan) {
    store.setBudgetPlan({
      ...state.budgetPlan,
      reserve_target: next.reserveTarget
    });
  }

  const priorBenchmark = state.benchmarkSet ?? {};
  store.setBenchmarkSet({
    ...priorBenchmark,
    competitive_threshold: next.competitiveThreshold
  });

  if (state.bridge.fpeSnapshot) {
    store.importFpeSnapshot({
      ...state.bridge.fpeSnapshot,
      total_projected_field_cost: next.fieldPlanCost
    });
  }

  recomputeFromRuntimeInputs();
}

/**
 * @param {{weekEndingDate: string, raisedToDate: number, actualRaiseToDate: number}} next
 */
function handleReportsSubmit(next) {
  runtimeInputs.weekEndingDate = next.weekEndingDate;
  runtimeInputs.raisedToDate = next.raisedToDate;
  runtimeInputs.actualRaiseToDate = next.actualRaiseToDate;
  recomputeFromRuntimeInputs();
}

/**
 * @param {{id: string, label: string, kind: string, coreRoute?: string, hash: string}} active
 */
function buildNavModel(active) {
  const activeRoute = active.kind === "core" ? active.coreRoute : null;

  const primary = PRIMARY_VIEWS.map((view) => {
    const activeByHash = view.id === active.id;
    const activeByRoute = view.kind === "core" && activeRoute != null && view.coreRoute === activeRoute;

    return {
      label: view.label,
      href: `#/${view.hash}`,
      active: activeByHash || activeByRoute
    };
  });

  const modules = APP_ROUTES.filter((route) => !PRIMARY_BY_ROUTE[route.path]).map((route) => ({
    label: route.title,
    href: `#${route.path}`,
    active: activeRoute === route.path
  }));

  return { primary, modules };
}

function renderApp() {
  if (isRendering) {
    return;
  }

  isRendering = true;

  try {
    const hashValue = readHashValue();
    const resolved = resolveView(hashValue);

    if (window.location.hash !== resolved.canonicalHash) {
      window.location.hash = resolved.canonicalHash;
      return;
    }

    if (resolved.view.kind === "core" && resolved.view.coreRoute) {
      ensureCoreRoute(resolved.view.coreRoute);
    }

    const view = shell.render();
    const state = store.getState();

    const surface = buildAppSurface({
      view,
      state,
      activeView: resolved.view,
      nav: buildNavModel(resolved.view),
      inputs: runtimeInputs,
      handlers: {
        submitOverview: handleOverviewSubmit,
        submitFunding: handleFundingSubmit,
        submitReports: handleReportsSubmit
      }
    });

    appRoot.replaceChildren(surface);
  } catch (error) {
    const card = document.createElement("section");
    card.className = "section-card error-card";

    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = "Runtime Render Error";

    const body = document.createElement("pre");
    body.textContent = error instanceof Error ? `${error.name}: ${error.message}` : String(error);

    card.appendChild(title);
    card.appendChild(body);
    appRoot.replaceChildren(card);
  } finally {
    isRendering = false;
  }
}

store.subscribe(() => {
  if (!isRendering) {
    renderApp();
  }
});

window.addEventListener("hashchange", renderApp);
renderApp();
