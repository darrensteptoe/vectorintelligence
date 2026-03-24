import { activityPage } from "./activityPage.js";
import { benchmarksPage } from "./benchmarksPage.js";
import { bridgePage } from "./bridgePage.js";
import { budgetPage } from "./budgetPage.js";
import { channelsPage } from "./channelsPage.js";
import { donorsPage } from "./donorsPage.js";
import { fundingPathPage } from "./fundingPathPage.js";
import { overviewPage } from "./overviewPage.js";
import { pledgesPage } from "./pledgesPage.js";
import { reportsPage } from "./reportsPage.js";
import { risksPage } from "./risksPage.js";
import { setupPage } from "./setupPage.js";
import { spendingPage } from "./spendingPage.js";
import { timelinePage } from "./timelinePage.js";

export const PAGES_BY_ROUTE = {
  "/overview": overviewPage,
  "/setup": setupPage,
  "/budget": budgetPage,
  "/timeline": timelinePage,
  "/benchmarks": benchmarksPage,
  "/funding-path": fundingPathPage,
  "/channels": channelsPage,
  "/activity": activityPage,
  "/pledges": pledgesPage,
  "/donors": donorsPage,
  "/spending": spendingPage,
  "/risks": risksPage,
  "/reports": reportsPage,
  "/bridge": bridgePage
};
