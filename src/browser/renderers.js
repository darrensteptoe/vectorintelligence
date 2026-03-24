import { MANUAL_HELP, MANUAL_INTRO, MANUAL_WARNING_INTERPRETATION } from "../core/contracts/manualLanguage.js";
import { REPORTING_PHILOSOPHY, REPORT_STRUCTURE } from "../core/contracts/reportingLanguage.js";
import {
  FIELD_FUNDING_STATUS_DESCRIPTIONS,
  OVERALL_PATH_STATUS_DESCRIPTIONS,
  RESERVE_STATUS_DESCRIPTIONS
} from "../core/contracts/warningLanguage.js";

const PAGE_QUESTIONS = {
  overview:
    "Are campaign setup inputs and baseline assumptions strong enough to support a finance-safe operating plan?",
  "funding-path":
    "Is the campaign currently on a workable finance path for upcoming commitments and reserve coverage?",
  reports:
    "Do current reporting outputs describe conditions clearly enough for candidate, committee, and leadership decisions?",
  manual:
    "How should operators interpret engine outputs, warnings, and required actions in plain operating terms?",
  fallback: "What does this module show, and how does it connect to the active campaign finance path?"
};

const ROUTE_TO_MANUAL_HELP = {
  overview: MANUAL_HELP.budgetBuilder,
  "funding-path": MANUAL_HELP.fundingPath,
  reports: MANUAL_HELP.plannedVsActual,
  manual: MANUAL_WARNING_INTERPRETATION
};

/**
 * @param {string} tag
 * @param {{className?: string, text?: string}} [options]
 * @returns {HTMLElement}
 */
function node(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) {
    element.className = options.className;
  }
  if (options.text != null) {
    element.textContent = options.text;
  }
  return element;
}

/**
 * @param {unknown} value
 * @returns {value is Record<string, unknown>}
 */
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * @param {unknown} value
 * @returns {value is number}
 */
function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

/**
 * @param {unknown} value
 * @returns {value is string}
 */
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * @param {unknown} value
 * @param {string} [key]
 * @returns {string}
 */
function formatValue(value, key = "") {
  if (value == null) {
    return "Not available";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (typeof value === "number") {
    if (/percent|share|ratio/i.test(key)) {
      if (value >= 0 && value <= 1) {
        return `${Math.round(value * 100)}%`;
      }
      return `${Math.round(value)}%`;
    }

    if (/budget|amount|cost|cash|debt|raise|funding|reserve|target|gap|spend/i.test(key)) {
      return formatCurrency(value);
    }

    return value.toLocaleString("en-US");
  }

  if (typeof value === "string") {
    if (/^\d{4}-\d{2}-\d{2}T/.test(value)) {
      return value.slice(0, 10);
    }
    return value;
  }

  return String(value);
}

/**
 * @param {string} value
 * @returns {string}
 */
function toneForStatus(value) {
  const normalized = value.toLowerCase();

  if (
    normalized.includes("off path") ||
    normalized.includes("risk") ||
    normalized.includes("redline") ||
    normalized.includes("critical") ||
    normalized.includes("severe")
  ) {
    return "bad";
  }

  if (
    normalized.includes("behind") ||
    normalized.includes("watch") ||
    normalized.includes("caution") ||
    normalized.includes("moderate") ||
    normalized.includes("elevated")
  ) {
    return "warn";
  }

  if (normalized.includes("on path") || normalized.includes("greenlight") || normalized.includes("low")) {
    return "good";
  }

  return "neutral";
}

/**
 * @param {string} label
 * @returns {HTMLElement}
 */
function statusChip(label) {
  return node("span", {
    className: `status-chip status-chip--${toneForStatus(label)}`,
    text: label
  });
}

/**
 * @param {string} key
 * @returns {string}
 */
function labelize(key) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase());
}

/**
 * @param {string} title
 * @returns {HTMLElement}
 */
function sectionCard(title) {
  const card = node("section", { className: "section-card" });
  const heading = node("h2", { className: "section-title", text: title });
  card.appendChild(heading);
  return card;
}

/**
 * @param {string} title
 * @param {string} value
 * @param {string} [meta]
 * @returns {HTMLElement}
 */
function statTile(title, value, meta = "") {
  const tile = node("article", { className: "stat-tile" });
  const titleNode = node("h3", { text: title });
  const valueNode = node("p", { className: "stat-value", text: value });
  tile.appendChild(titleNode);
  tile.appendChild(valueNode);

  if (meta) {
    tile.appendChild(node("p", { className: "stat-meta", text: meta }));
  }

  return tile;
}

/**
 * @param {Record<string, unknown>} data
 * @returns {HTMLElement}
 */
function keyValueGrid(data) {
  const list = node("dl", { className: "kv-grid" });

  for (const [key, value] of Object.entries(data)) {
    const row = node("div", { className: "kv-row" });
    const dt = node("dt", { text: labelize(key) });
    const dd = node("dd", { text: formatValue(value, key) });

    row.appendChild(dt);
    row.appendChild(dd);
    list.appendChild(row);
  }

  return list;
}

/**
 * @param {Record<string, number>} record
 * @param {string} keyColumn
 * @param {string} valueColumn
 * @returns {HTMLElement}
 */
function mapTable(record, keyColumn, valueColumn) {
  const table = node("table", { className: "data-table" });
  const thead = node("thead");
  const headRow = node("tr");
  headRow.appendChild(node("th", { text: keyColumn }));
  headRow.appendChild(node("th", { text: valueColumn }));
  thead.appendChild(headRow);

  const tbody = node("tbody");
  for (const [key, amount] of Object.entries(record).sort(([a], [b]) => a.localeCompare(b))) {
    const row = node("tr");
    row.appendChild(node("td", { text: key }));
    row.appendChild(node("td", { text: formatValue(amount, valueColumn) }));
    tbody.appendChild(row);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

/**
 * @param {string} label
 * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} control
 * @param {string} [hint]
 * @returns {HTMLElement}
 */
function formField(label, control, hint = "") {
  const wrapper = node("label", { className: "form-field" });
  const labelNode = node("span", { className: "field-label", text: label });

  wrapper.appendChild(labelNode);
  wrapper.appendChild(control);

  if (hint) {
    wrapper.appendChild(node("span", { className: "field-hint", text: hint }));
  }

  return wrapper;
}

/**
 * @param {string} name
 * @param {string} value
 * @param {{type?: string, min?: string, step?: string}} [opts]
 * @returns {HTMLInputElement}
 */
function input(name, value, opts = {}) {
  const field = document.createElement("input");
  field.className = "input-control";
  field.name = name;
  field.type = opts.type ?? "text";
  field.value = value;
  if (opts.min != null) {
    field.min = opts.min;
  }
  if (opts.step != null) {
    field.step = opts.step;
  }
  return field;
}

/**
 * @param {string | undefined | null} isoDate
 * @returns {string}
 */
function toDateInput(isoDate) {
  if (!isNonEmptyString(isoDate)) {
    return "";
  }
  return isoDate.slice(0, 10);
}

/**
 * @param {unknown} value
 * @param {number} fallback
 * @returns {number}
 */
function toNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

/**
 * @param {Record<string, unknown> | null | undefined} payload
 * @returns {Record<string, unknown>}
 */
function safePayload(payload) {
  return isObject(payload) ? payload : {};
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @returns {HTMLElement}
 */
function renderStateBanner(state) {
  const path = state.snapshots.fundingRequirement?.path_status ?? "Not computed";
  const reserve = state.snapshots.reserveStatus ?? "Not computed";
  const tone = toneForStatus(`${path} ${reserve}`);

  const banner = node("section", { className: `banner banner--${tone}` });
  banner.appendChild(node("h3", { text: "Current Finance Condition" }));
  banner.appendChild(
    node("p", {
      text: `Path status is ${path}. Reserve status is ${reserve}. Use controls below to test and recompute assumptions.`
    })
  );
  return banner;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @returns {HTMLElement}
 */
function renderOverviewStats(state) {
  const summary = state.snapshots.budgetSummary;
  const funding = state.snapshots.fundingRequirement;

  const grid = node("div", { className: "stat-grid" });
  grid.appendChild(
    statTile(
      "Cash on Hand",
      formatValue(state.campaignProfile?.current_cash_on_hand ?? 0, "cash"),
      "Current available cash position"
    )
  );
  grid.appendChild(statTile("Debt", formatValue(state.campaignProfile?.current_debt ?? 0, "debt")));
  grid.appendChild(
    statTile(
      "Planned Budget",
      formatValue(summary?.total_planned_budget ?? 0, "budget"),
      `Required share ${formatValue(summary?.required_cost_share ?? 0, "share")}`
    )
  );
  grid.appendChild(
    statTile(
      "Total Raise Target",
      formatValue(funding?.total_raise_target ?? 0, "raise"),
      funding?.path_status ?? "No path status yet"
    )
  );
  return grid;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @param {{submitOverview: (data: {
 *   candidateName: string,
 *   committeeName: string,
 *   campaignPhase: string,
 *   cashOnHand: number,
 *   currentDebt: number,
 *   primaryDate: string,
 *   generalDate: string
 * }) => void}} handlers
 * @returns {HTMLElement}
 */
function renderOverviewControls(state, handlers) {
  const card = sectionCard("Campaign Inputs");
  card.appendChild(
    node("p", {
      className: "section-note",
      text: "These controls update setup state and then trigger canonical recompute with current funding assumptions."
    })
  );

  const form = node("form", { className: "control-form" });

  const candidate = input("candidateName", state.campaignProfile?.candidate_name ?? "");
  const committee = input("committeeName", state.campaignProfile?.committee_name ?? "");
  const phase = input("campaignPhase", state.campaignProfile?.campaign_phase ?? "");
  const cash = input("cashOnHand", String(state.campaignProfile?.current_cash_on_hand ?? 0), {
    type: "number",
    min: "0",
    step: "100"
  });
  const debt = input("currentDebt", String(state.campaignProfile?.current_debt ?? 0), {
    type: "number",
    min: "0",
    step: "100"
  });
  const primaryDate = input("primaryDate", toDateInput(state.electionCalendar?.primary_date), {
    type: "date"
  });
  const generalDate = input("generalDate", toDateInput(state.electionCalendar?.general_date), {
    type: "date"
  });

  form.appendChild(formField("Candidate Name", candidate));
  form.appendChild(formField("Committee Name", committee));
  form.appendChild(formField("Campaign Phase", phase));
  form.appendChild(formField("Current Cash On Hand", cash));
  form.appendChild(formField("Current Debt", debt));
  form.appendChild(formField("Primary Date", primaryDate));
  form.appendChild(formField("General Date", generalDate));

  const actions = node("div", { className: "form-actions" });
  const submit = node("button", { className: "button button--primary", text: "Apply Setup Updates" });
  submit.setAttribute("type", "submit");
  actions.appendChild(submit);
  form.appendChild(actions);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handlers.submitOverview({
      candidateName: candidate.value.trim(),
      committeeName: committee.value.trim(),
      campaignPhase: phase.value.trim(),
      cashOnHand: toNumber(cash.value, state.campaignProfile?.current_cash_on_hand ?? 0),
      currentDebt: toNumber(debt.value, state.campaignProfile?.current_debt ?? 0),
      primaryDate: primaryDate.value,
      generalDate: generalDate.value
    });
  });

  card.appendChild(form);
  return card;
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement}
 */
function renderOverviewProfiles(payload) {
  const card = sectionCard("Profile And Calendar Surfaces");
  const grid = node("div", { className: "split-grid" });

  const blocks = [
    ["Race Profile", payload.race_profile],
    ["Campaign Profile", payload.campaign_profile],
    ["Filing Calendar", payload.filing_calendar],
    ["Election Calendar", payload.election_calendar]
  ];

  for (const [title, value] of blocks) {
    const block = node("article", { className: "sub-block" });
    block.appendChild(node("h3", { className: "sub-block-title", text: title }));

    if (isObject(value)) {
      block.appendChild(keyValueGrid(value));
    } else {
      block.appendChild(node("p", { className: "muted", text: "No data loaded." }));
    }

    grid.appendChild(block);
  }

  card.appendChild(grid);
  return card;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @param {{raisedToDate: number, actualRaiseToDate: number, weekEndingDate: string, fieldPlanCost: number}} inputs
 * @param {{submitFunding: (data: {
 *   reserveTarget: number,
 *   competitiveThreshold: number,
 *   raisedToDate: number,
 *   actualRaiseToDate: number,
 *   weekEndingDate: string,
 *   fieldPlanCost: number
 * }) => void}} handlers
 * @returns {HTMLElement}
 */
function renderFundingControls(state, inputs, handlers) {
  const card = sectionCard("Funding Path Inputs");
  card.appendChild(
    node("p", {
      className: "section-note",
      text: "Controls here feed benchmark, reserve target, bridge plan cost, and recompute options without changing engine contracts."
    })
  );

  const form = node("form", { className: "control-form" });
  const reserveTarget = input("reserveTarget", String(state.budgetPlan?.reserve_target ?? 0), {
    type: "number",
    min: "0",
    step: "100"
  });
  const competitiveThreshold = input(
    "competitiveThreshold",
    String(
      typeof state.benchmarkSet?.competitive_threshold === "number"
        ? state.benchmarkSet.competitive_threshold
        : state.snapshots.budgetSummary?.total_planned_budget ?? 0
    ),
    {
      type: "number",
      min: "0",
      step: "100"
    }
  );
  const raised = input("raisedToDate", String(inputs.raisedToDate), {
    type: "number",
    min: "0",
    step: "100"
  });
  const actual = input("actualRaiseToDate", String(inputs.actualRaiseToDate), {
    type: "number",
    min: "0",
    step: "100"
  });
  const weekEnding = input("weekEndingDate", inputs.weekEndingDate, { type: "date" });
  const fieldPlanCost = input("fieldPlanCost", String(inputs.fieldPlanCost), {
    type: "number",
    min: "0",
    step: "100"
  });

  form.appendChild(formField("Reserve Target", reserveTarget));
  form.appendChild(formField("Competitive Threshold", competitiveThreshold));
  form.appendChild(formField("Raised To Date", raised));
  form.appendChild(formField("Actual Raised To Date", actual));
  form.appendChild(formField("Week Ending", weekEnding));
  form.appendChild(formField("Field Plan Cost (Bridge)", fieldPlanCost));

  const actions = node("div", { className: "form-actions" });
  const submit = node("button", { className: "button button--primary", text: "Recompute Funding Path" });
  submit.setAttribute("type", "submit");
  actions.appendChild(submit);
  form.appendChild(actions);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handlers.submitFunding({
      reserveTarget: toNumber(reserveTarget.value, state.budgetPlan?.reserve_target ?? 0),
      competitiveThreshold: toNumber(
        competitiveThreshold.value,
        typeof state.benchmarkSet?.competitive_threshold === "number"
          ? state.benchmarkSet.competitive_threshold
          : 0
      ),
      raisedToDate: toNumber(raised.value, inputs.raisedToDate),
      actualRaiseToDate: toNumber(actual.value, inputs.actualRaiseToDate),
      weekEndingDate: weekEnding.value || inputs.weekEndingDate,
      fieldPlanCost: toNumber(fieldPlanCost.value, inputs.fieldPlanCost)
    });
  });

  card.appendChild(form);
  return card;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement}
 */
function renderFundingStatus(state, payload) {
  const card = sectionCard("Funding Status");
  const grid = node("div", { className: "stat-grid" });

  const requirement = isObject(payload.funding_requirement_snapshot)
    ? payload.funding_requirement_snapshot
    : state.snapshots.fundingRequirement ?? null;

  grid.appendChild(
    statTile(
      "Path Status",
      isObject(requirement) ? formatValue(requirement.path_status) : "Not available",
      isObject(requirement) ? formatValue(requirement.funding_risk_level) : ""
    )
  );
  grid.appendChild(statTile("Reserve Status", formatValue(payload.reserve_status)));
  grid.appendChild(statTile("Field Funding Status", formatValue(payload.field_funding_status)));
  grid.appendChild(
    statTile(
      "Gap To Safe Funding",
      isObject(requirement) ? formatValue(requirement.gap_to_safe_funding, "gap") : "Not available"
    )
  );
  grid.appendChild(
    statTile(
      "Gap To Competitive Funding",
      isObject(requirement) ? formatValue(requirement.gap_to_competitive_funding, "gap") : "Not available"
    )
  );
  grid.appendChild(
    statTile(
      "Raise Target",
      isObject(requirement) ? formatValue(requirement.total_raise_target, "raise") : "Not available"
    )
  );

  card.appendChild(grid);
  return card;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement}
 */
function renderFundingWarnings(state, payload) {
  const card = sectionCard("Risk Flags And Warnings");
  const flags = Array.isArray(payload.risk_flags)
    ? payload.risk_flags
    : Array.isArray(state.snapshots.riskFlags)
      ? state.snapshots.riskFlags
      : [];

  if (flags.length === 0) {
    const good = node("div", { className: "banner banner--good" });
    good.appendChild(node("p", { text: "No active risk flags. Current path appears stable." }));
    card.appendChild(good);
    return card;
  }

  for (const flag of flags) {
    if (!isObject(flag)) {
      continue;
    }

    const warning = node("article", { className: `warning-block warning-block--${toneForStatus(String(flag.severity ?? ""))}` });
    const top = node("div", { className: "warning-head" });
    top.appendChild(node("h3", { text: formatValue(flag.title) }));
    if (isNonEmptyString(String(flag.severity ?? ""))) {
      top.appendChild(statusChip(String(flag.severity)));
    }

    warning.appendChild(top);
    warning.appendChild(node("p", { text: formatValue(flag.explanation) }));
    warning.appendChild(
      node("p", {
        className: "warning-action",
        text: `Recommended action: ${formatValue(flag.recommended_action)}`
      })
    );

    card.appendChild(warning);
  }

  return card;
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement}
 */
function renderFundingTables(payload) {
  const card = sectionCard("Raise Targets");
  const requirement = isObject(payload.funding_requirement_snapshot) ? payload.funding_requirement_snapshot : null;

  if (!requirement) {
    card.appendChild(node("p", { className: "muted", text: "Funding requirement snapshot has not been computed." }));
    return card;
  }

  const layout = node("div", { className: "split-grid" });

  const byMonth = node("article", { className: "sub-block" });
  byMonth.appendChild(node("h3", { className: "sub-block-title", text: "Raise Target By Month" }));
  if (isObject(requirement.raise_target_by_month)) {
    byMonth.appendChild(
      mapTable(
        /** @type {Record<string, number>} */ (requirement.raise_target_by_month),
        "Month",
        "Amount"
      )
    );
  }
  layout.appendChild(byMonth);

  const checkpoints = node("article", { className: "sub-block" });
  checkpoints.appendChild(node("h3", { className: "sub-block-title", text: "Checkpoint Targets" }));
  if (isObject(requirement.raise_target_by_checkpoint)) {
    checkpoints.appendChild(
      mapTable(
        /** @type {Record<string, number>} */ (requirement.raise_target_by_checkpoint),
        "Checkpoint",
        "Amount"
      )
    );
  }
  layout.appendChild(checkpoints);

  card.appendChild(layout);
  return card;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @returns {HTMLElement}
 */
function renderChannelPanel(state) {
  const card = sectionCard("Finance Channel Panel");

  /** @type {Record<string, number>} */
  const totals = {};
  for (const activity of state.financeActivities) {
    const channel = isNonEmptyString(activity.channel) ? activity.channel : "Unlabeled";
    totals[channel] = (totals[channel] ?? 0) + (isNumber(activity.goal_amount) ? activity.goal_amount : 0);
  }

  if (Object.keys(totals).length === 0) {
    card.appendChild(node("p", { className: "muted", text: "No finance activities loaded." }));
    return card;
  }

  card.appendChild(mapTable(totals, "Channel", "Goal Amount"));
  return card;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @param {{raisedToDate: number, actualRaiseToDate: number, weekEndingDate: string}} inputs
 * @param {{submitReports: (data: {weekEndingDate: string, raisedToDate: number, actualRaiseToDate: number}) => void}} handlers
 * @returns {HTMLElement}
 */
function renderReportControls(state, inputs, handlers) {
  const card = sectionCard("Report Refresh Inputs");
  card.appendChild(
    node("p", {
      className: "section-note",
      text: "Update reporting context values and recompute report surfaces through the existing store workflow."
    })
  );

  const form = node("form", { className: "control-form control-form--compact" });
  const weekEnding = input("weekEndingDate", inputs.weekEndingDate, { type: "date" });
  const raised = input("raisedToDate", String(inputs.raisedToDate), {
    type: "number",
    min: "0",
    step: "100"
  });
  const actual = input("actualRaiseToDate", String(inputs.actualRaiseToDate), {
    type: "number",
    min: "0",
    step: "100"
  });

  form.appendChild(formField("Week Ending", weekEnding));
  form.appendChild(formField("Raised To Date", raised));
  form.appendChild(formField("Actual Raised To Date", actual));

  const actions = node("div", { className: "form-actions" });
  const submit = node("button", { className: "button button--primary", text: "Refresh Reports" });
  submit.setAttribute("type", "submit");
  actions.appendChild(submit);
  form.appendChild(actions);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handlers.submitReports({
      weekEndingDate: weekEnding.value || inputs.weekEndingDate,
      raisedToDate: toNumber(raised.value, inputs.raisedToDate),
      actualRaiseToDate: toNumber(actual.value, inputs.actualRaiseToDate)
    });
  });

  card.appendChild(form);
  return card;
}

/**
 * @param {string} title
 * @param {unknown} value
 * @returns {HTMLElement}
 */
function renderStructuredCard(title, value) {
  const card = sectionCard(title);

  if (value == null) {
    card.appendChild(node("p", { className: "muted", text: "Not available." }));
    return card;
  }

  if (isObject(value)) {
    const stack = node("div", { className: "stack" });

    for (const [key, child] of Object.entries(value)) {
      if (Array.isArray(child)) {
        const block = node("article", { className: "sub-block" });
        block.appendChild(node("h3", { className: "sub-block-title", text: labelize(key) }));
        if (child.length === 0) {
          block.appendChild(node("p", { className: "muted", text: "No items." }));
        } else {
          const list = node("ul", { className: "simple-list" });
          for (const item of child) {
            list.appendChild(node("li", { text: formatValue(item, key) }));
          }
          block.appendChild(list);
        }
        stack.appendChild(block);
        continue;
      }

      if (isObject(child)) {
        const block = node("article", { className: "sub-block" });
        block.appendChild(node("h3", { className: "sub-block-title", text: labelize(key) }));
        block.appendChild(keyValueGrid(child));
        stack.appendChild(block);
        continue;
      }

      const block = node("article", { className: "sub-block" });
      block.appendChild(node("h3", { className: "sub-block-title", text: labelize(key) }));
      block.appendChild(node("p", { text: formatValue(child, key) }));
      stack.appendChild(block);
    }

    card.appendChild(stack);
    return card;
  }

  card.appendChild(node("p", { text: formatValue(value) }));
  return card;
}

/**
 * @returns {HTMLElement}
 */
function renderReportingToneCard() {
  const card = sectionCard("Reporting Tone And Structure");
  card.appendChild(node("p", { text: REPORTING_PHILOSOPHY }));

  const listTitle = node("h3", { className: "sub-heading", text: "Expected Report Structure" });
  card.appendChild(listTitle);

  const list = node("ol", { className: "ordered-list" });
  for (const item of REPORT_STRUCTURE) {
    list.appendChild(node("li", { text: item }));
  }
  card.appendChild(list);

  return card;
}

/**
 * @returns {HTMLElement}
 */
function renderManualSurface() {
  const wrapper = node("div", { className: "stack" });

  const intro = sectionCard("Manual Front Page");
  intro.appendChild(node("p", { text: MANUAL_INTRO }));
  wrapper.appendChild(intro);

  const sections = sectionCard("Operational Guidance Modules");
  const detailsStack = node("div", { className: "stack" });
  for (const [key, value] of Object.entries(MANUAL_HELP)) {
    const details = node("details", { className: "details-block" });
    const summary = node("summary", { text: labelize(key) });
    const body = node("p", { text: value });
    details.appendChild(summary);
    details.appendChild(body);
    detailsStack.appendChild(details);
  }
  sections.appendChild(detailsStack);
  wrapper.appendChild(sections);

  const warning = node("section", { className: "banner banner--warn" });
  warning.appendChild(node("h3", { text: "Warning Interpretation" }));
  warning.appendChild(node("p", { text: MANUAL_WARNING_INTERPRETATION }));
  wrapper.appendChild(warning);

  wrapper.appendChild(renderReportingToneCard());

  return wrapper;
}

/**
 * @param {import('../state/store.js').CfeState} state
 * @param {string} presenterKey
 * @param {{raisedToDate: number, actualRaiseToDate: number, weekEndingDate: string, fieldPlanCost: number}} inputs
 * @returns {HTMLElement}
 */
function renderRightRail(state, presenterKey, inputs) {
  const rail = node("aside", { className: "right-rail" });

  const questionCard = sectionCard("Page Question");
  questionCard.appendChild(
    node("p", {
      text: PAGE_QUESTIONS[presenterKey] ?? PAGE_QUESTIONS.fallback
    })
  );
  rail.appendChild(questionCard);

  const statusCard = sectionCard("Current Status");
  const chipRow = node("div", { className: "chip-row" });

  const pathStatus = state.snapshots.fundingRequirement?.path_status;
  const reserveStatus = state.snapshots.reserveStatus;
  const fieldStatus = state.snapshots.fieldFundingStatus;

  if (isNonEmptyString(pathStatus)) {
    const wrapper = node("div", { className: "chip-wrap" });
    wrapper.appendChild(node("span", { className: "chip-label", text: "Path" }));
    wrapper.appendChild(statusChip(pathStatus));
    chipRow.appendChild(wrapper);
  }
  if (isNonEmptyString(reserveStatus)) {
    const wrapper = node("div", { className: "chip-wrap" });
    wrapper.appendChild(node("span", { className: "chip-label", text: "Reserve" }));
    wrapper.appendChild(statusChip(reserveStatus));
    chipRow.appendChild(wrapper);
  }
  if (isNonEmptyString(fieldStatus)) {
    const wrapper = node("div", { className: "chip-wrap" });
    wrapper.appendChild(node("span", { className: "chip-label", text: "Field" }));
    wrapper.appendChild(statusChip(fieldStatus));
    chipRow.appendChild(wrapper);
  }

  const riskWrap = node("div", { className: "chip-wrap" });
  riskWrap.appendChild(node("span", { className: "chip-label", text: "Active Risk Flags" }));
  riskWrap.appendChild(statusChip(String(state.snapshots.riskFlags.length)));
  chipRow.appendChild(riskWrap);

  statusCard.appendChild(chipRow);
  rail.appendChild(statusCard);

  const assumptions = sectionCard("Current Assumptions");
  assumptions.appendChild(
    keyValueGrid({
      week_ending_date: inputs.weekEndingDate,
      raised_to_date: inputs.raisedToDate,
      actual_raise_to_date: inputs.actualRaiseToDate,
      reserve_target: state.budgetPlan?.reserve_target ?? 0,
      competitive_threshold:
        typeof state.benchmarkSet?.competitive_threshold === "number"
          ? state.benchmarkSet.competitive_threshold
          : 0,
      field_plan_cost: inputs.fieldPlanCost
    })
  );
  rail.appendChild(assumptions);

  const guide = sectionCard("Manual Guidance");
  guide.appendChild(node("p", { text: ROUTE_TO_MANUAL_HELP[presenterKey] ?? MANUAL_HELP.budgetBuilder }));
  rail.appendChild(guide);

  const interpretation = sectionCard("Status Interpretation");
  const interpretationStack = node("div", { className: "stack" });

  if (isNonEmptyString(pathStatus) && OVERALL_PATH_STATUS_DESCRIPTIONS[pathStatus]) {
    const block = node("article", { className: "sub-block" });
    block.appendChild(node("h3", { className: "sub-block-title", text: `Path: ${pathStatus}` }));
    block.appendChild(node("p", { text: OVERALL_PATH_STATUS_DESCRIPTIONS[pathStatus] }));
    interpretationStack.appendChild(block);
  }

  if (isNonEmptyString(reserveStatus) && RESERVE_STATUS_DESCRIPTIONS[reserveStatus]) {
    const block = node("article", { className: "sub-block" });
    block.appendChild(node("h3", { className: "sub-block-title", text: `Reserve: ${reserveStatus}` }));
    block.appendChild(node("p", { text: RESERVE_STATUS_DESCRIPTIONS[reserveStatus] }));
    interpretationStack.appendChild(block);
  }

  if (isNonEmptyString(fieldStatus) && FIELD_FUNDING_STATUS_DESCRIPTIONS[fieldStatus]) {
    const block = node("article", { className: "sub-block" });
    block.appendChild(node("h3", { className: "sub-block-title", text: `Field: ${fieldStatus}` }));
    block.appendChild(node("p", { text: FIELD_FUNDING_STATUS_DESCRIPTIONS[fieldStatus] }));
    interpretationStack.appendChild(block);
  }

  if (interpretationStack.childElementCount === 0) {
    interpretation.appendChild(node("p", { className: "muted", text: "No interpreted status context available yet." }));
  } else {
    interpretation.appendChild(interpretationStack);
  }
  rail.appendChild(interpretation);

  if (state.snapshots.riskFlags.length > 0) {
    const warnings = sectionCard("Top Warnings");
    for (const flag of state.snapshots.riskFlags.slice(0, 3)) {
      const warning = node("article", { className: `warning-block warning-block--${toneForStatus(flag.severity)}` });
      warning.appendChild(node("h3", { text: flag.title }));
      warning.appendChild(node("p", { text: flag.recommended_action }));
      warnings.appendChild(warning);
    }
    rail.appendChild(warnings);
  }

  return rail;
}

/**
 * @param {Array<{label: string, href: string, active: boolean}>} items
 * @param {string} heading
 * @returns {HTMLElement}
 */
function navGroup(items, heading) {
  const wrapper = node("div", { className: "nav-group" });
  wrapper.appendChild(node("h3", { className: "nav-heading", text: heading }));

  const list = node("div", { className: "nav-links" });
  for (const item of items) {
    const link = document.createElement("a");
    link.className = `nav-link${item.active ? " active" : ""}`;
    link.href = item.href;
    link.textContent = item.label;
    list.appendChild(link);
  }

  wrapper.appendChild(list);
  return wrapper;
}

/**
 * @param {{view: {title: string, payload: Record<string, unknown>}, state: import('../state/store.js').CfeState, activeView: {id: string, label: string, kind: string}, nav: {primary: Array<{label: string, href: string, active: boolean}>, modules: Array<{label: string, href: string, active: boolean}>}, inputs: {raisedToDate: number, actualRaiseToDate: number, weekEndingDate: string, fieldPlanCost: number}, handlers: {submitOverview: Function, submitFunding: Function, submitReports: Function}}} context
 * @returns {HTMLElement}
 */
export function buildAppSurface(context) {
  const root = node("div", { className: "app-shell" });

  const top = node("header", { className: "app-topbar" });
  top.appendChild(node("h1", { className: "app-title", text: "Campaign Finance Engine" }));
  const subtitle = context.state.campaignProfile
    ? `${context.state.campaignProfile.committee_name} • ${context.state.raceProfile?.office ?? ""} ${
        context.state.raceProfile?.district ?? ""
      }`
    : "Operator runtime";
  top.appendChild(node("p", { className: "app-subtitle", text: subtitle.trim() }));
  root.appendChild(top);

  const layout = node("div", { className: "app-layout" });

  const nav = node("nav", { className: "route-nav" });
  nav.appendChild(navGroup(context.nav.primary, "Operator Views"));
  if (context.nav.modules.length > 0) {
    nav.appendChild(navGroup(context.nav.modules, "Module Routes"));
  }
  layout.appendChild(nav);

  const main = node("main", { className: "main-column" });
  const header = node("section", { className: "page-header" });

  const presenterKey =
    context.activeView.id === "manual"
      ? "manual"
      : context.view.route === "/setup"
        ? "overview"
        : context.view.route === "/funding"
          ? "funding-path"
          : context.view.route === "/reporting"
            ? "reports"
            : "fallback";

  header.appendChild(node("h2", { className: "page-title", text: context.activeView.label }));
  header.appendChild(node("p", { className: "page-question", text: PAGE_QUESTIONS[presenterKey] ?? PAGE_QUESTIONS.fallback }));
  main.appendChild(header);

  const payload = safePayload(context.view.payload);

  if (presenterKey === "overview") {
    main.appendChild(renderStateBanner(context.state));

    const statsCard = sectionCard("Core Indicators");
    statsCard.appendChild(renderOverviewStats(context.state));
    main.appendChild(statsCard);

    main.appendChild(renderOverviewControls(context.state, context.handlers));
    main.appendChild(renderOverviewProfiles(payload));
  } else if (presenterKey === "funding-path") {
    main.appendChild(renderStateBanner(context.state));
    main.appendChild(renderFundingControls(context.state, context.inputs, context.handlers));
    main.appendChild(renderFundingStatus(context.state, payload));
    main.appendChild(renderFundingWarnings(context.state, {
      ...payload,
      risk_flags: context.state.snapshots.riskFlags
    }));
    main.appendChild(renderFundingTables(payload));
    main.appendChild(renderChannelPanel(context.state));
  } else if (presenterKey === "reports") {
    main.appendChild(renderReportControls(context.state, context.inputs, context.handlers));
    main.appendChild(renderReportingToneCard());
    main.appendChild(renderStructuredCard("Weekly Finance Memo", payload.weekly_finance_memo));
    main.appendChild(renderStructuredCard("Candidate Brief", payload.candidate_brief));
    main.appendChild(renderStructuredCard("Finance Committee Memo", payload.committee_memo));
    main.appendChild(renderStructuredCard("Leadership Memo", payload.leadership_memo));
  } else if (presenterKey === "manual") {
    main.appendChild(renderManualSurface());
  } else {
    main.appendChild(renderStateBanner(context.state));
    main.appendChild(renderStructuredCard(context.view.title, payload));
  }

  layout.appendChild(main);
  layout.appendChild(renderRightRail(context.state, presenterKey, context.inputs));

  root.appendChild(layout);
  return root;
}
