import { bridgePage } from "./bridgePage.js";
import { budgetPage } from "./budgetPage.js";
import { fundingPage } from "./fundingPage.js";
import { operationsPage } from "./operationsPage.js";
import { reportingPage } from "./reportingPage.js";
import { setupPage } from "./setupPage.js";
import { timelinePage } from "./timelinePage.js";

export const PAGES_BY_ROUTE = {
  "/setup": setupPage,
  "/budget": budgetPage,
  "/timeline": timelinePage,
  "/funding": fundingPage,
  "/operations": operationsPage,
  "/reporting": reportingPage,
  "/bridge": bridgePage
};
