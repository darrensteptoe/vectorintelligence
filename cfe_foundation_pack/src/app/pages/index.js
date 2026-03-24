import { activityPage } from "./activityPage.js";
import { budgetPage } from "./budgetPage.js";
import { donorsPage } from "./donorsPage.js";
import { fundingPathPage } from "./fundingPathPage.js";
import { manualPage } from "./manualPage.js";
import { overviewPage } from "./overviewPage.js";
import { reportsPage } from "./reportsPage.js";
import { settingsPage } from "./settingsPage.js";
import { spendingPage } from "./spendingPage.js";
import { timelinePage } from "./timelinePage.js";

export const PAGES_BY_ROUTE = {
  "/overview": overviewPage,
  "/budget-plan": budgetPage,
  "/spend-timeline": timelinePage,
  "/funding-path": fundingPathPage,
  "/finance-activity": activityPage,
  "/donor-intelligence": donorsPage,
  "/expenditure-intelligence": spendingPage,
  "/reports": reportsPage,
  "/manual": manualPage,
  "/settings": settingsPage
};
