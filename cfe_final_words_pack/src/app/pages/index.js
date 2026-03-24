import { activityPage } from "./activityPage.js";
import { benchmarksPage } from "./benchmarksPage.js";
import { budgetPage } from "./budgetPage.js";
import { donorsPage } from "./donorsPage.js";
import { fundingPathPage } from "./fundingPathPage.js";
import { manualPage } from "./manualPage.js";
import { overviewPage } from "./overviewPage.js";
import { reportsPage } from "./reportsPage.js";
import { risksPage } from "./risksPage.js";
import { settingsPage } from "./settingsPage.js";
import { spendingPage } from "./spendingPage.js";
import { timelinePage } from "./timelinePage.js";

export const PAGES_BY_ROUTE = {
  "/overview": overviewPage,
  "/budget": budgetPage,
  "/timeline": timelinePage,
  "/benchmarks": benchmarksPage,
  "/funding-path": fundingPathPage,
  "/finance-operations": activityPage,
  "/donor-intelligence": donorsPage,
  "/expenditure-intelligence": spendingPage,
  "/risks": risksPage,
  "/reports": reportsPage,
  "/manual": manualPage,
  "/settings-data-imports": settingsPage
};
