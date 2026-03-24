const SHARED_SHELL_KEYS = new Set(["page_question", "manual_guidance", "right_rail", "permissions"]);

/**
 * @param {string} key
 * @returns {string}
 */
function labelize(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase());
}

/**
 * @param {unknown} value
 * @returns {value is Record<string, unknown>}
 */
function isObject(value) {
  return typeof value === "object" && value !== null && Array.isArray(value) === false;
}

/**
 * @param {unknown} value
 * @returns {value is string | number | boolean}
 */
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

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
 * @param {string} key
 * @returns {boolean}
 */
function keyLooksLikeMoney(key) {
  return /amount|budget|raise|cost|target|gap|cash|debt|reserve|funding|spend|yield|total/i.test(key);
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

  if (typeof value === "number") {
    if (Number.isFinite(value) === false) {
      return String(value);
    }

    if (keyLooksLikeMoney(key)) {
      return formatCurrency(value);
    }

    if (/percent|share|ratio|rate/i.test(key)) {
      if (value >= 0 && value <= 1) {
        return `${Math.round(value * 100)}%`;
      }
      return `${Math.round(value)}%`;
    }

    return value.toLocaleString("en-US");
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return String(value);
}

/**
 * @param {string} text
 * @returns {string}
 */
function toneForStatus(text) {
  const value = text.toLowerCase();

  if (
    value.includes("off path") ||
    value.includes("at risk") ||
    value.includes("redline") ||
    value.includes("critical") ||
    value.includes("fail") ||
    value.includes("severe") ||
    value.includes("warning")
  ) {
    return "bad";
  }

  if (
    value.includes("watch") ||
    value.includes("tight") ||
    value.includes("caution") ||
    value.includes("mixed") ||
    value.includes("elevated") ||
    value.includes("moderate")
  ) {
    return "warn";
  }

  if (
    value.includes("on path") ||
    value.includes("healthy") ||
    value.includes("greenlight") ||
    value.includes("strong") ||
    value.includes("pass") ||
    value.includes("ready") ||
    value.includes("low")
  ) {
    return "good";
  }

  return "neutral";
}

/**
 * @param {string} label
 * @returns {HTMLElement}
 */
function statusChip(label) {
  const chip = node("span", { className: `status-chip status-chip--${toneForStatus(label)}`, text: label });
  return chip;
}

/**
 * @param {string} title
 * @returns {HTMLElement}
 */
function sectionCard(title) {
  const section = node("section", { className: "section-card" });
  const heading = node("h2", { className: "section-title", text: title });
  section.appendChild(heading);
  return section;
}

/**
 * @param {Record<string, unknown>} data
 * @returns {HTMLElement}
 */
function renderKeyValueGrid(data) {
  const grid = node("dl", { className: "kv-grid" });

  for (const [key, value] of Object.entries(data)) {
    const row = node("div", { className: "kv-row" });
    const dt = node("dt", { text: labelize(key) });
    const dd = node("dd");
    dd.textContent = formatValue(value, key);
    row.appendChild(dt);
    row.appendChild(dd);
    grid.appendChild(row);
  }

  return grid;
}

/**
 * @param {unknown[]} items
 * @returns {HTMLElement}
 */
function renderPrimitiveList(items) {
  const list = node("ul", { className: "simple-list" });
  for (const item of items) {
    const li = node("li", { text: formatValue(item) });
    list.appendChild(li);
  }
  return list;
}

/**
 * @param {Record<string, unknown>[]} rows
 * @returns {HTMLElement}
 */
function renderObjectTable(rows) {
  const table = node("table", { className: "data-table" });
  const allKeys = Array.from(new Set(rows.flatMap((row) => Object.keys(row))));

  const thead = node("thead");
  const headerRow = node("tr");
  for (const key of allKeys) {
    const th = node("th", { text: labelize(key) });
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);

  const tbody = node("tbody");
  for (const rowData of rows) {
    const tr = node("tr");
    for (const key of allKeys) {
      const td = node("td", { text: formatValue(rowData[key], key) });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

/**
 * @param {unknown} value
 * @returns {HTMLElement}
 */
function renderValue(value) {
  if (value == null) {
    return node("p", { className: "muted", text: "Not available." });
  }

  if (isPrimitive(value)) {
    return node("p", { text: formatValue(value) });
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return node("p", { className: "muted", text: "No items." });
    }

    if (value.every((item) => isPrimitive(item))) {
      return renderPrimitiveList(value);
    }

    if (value.every((item) => isObject(item))) {
      return renderObjectTable(/** @type {Record<string, unknown>[]} */ (value));
    }

    const list = node("div", { className: "stack" });
    value.forEach((item, index) => {
      const block = node("div", { className: "sub-block" });
      const title = node("h3", { className: "sub-block-title", text: `Item ${index + 1}` });
      block.appendChild(title);
      block.appendChild(renderValue(item));
      list.appendChild(block);
    });
    return list;
  }

  if (isObject(value)) {
    const entries = Object.entries(value);
    const primitivesOnly = entries.every(([, child]) => isPrimitive(child) || child == null);

    if (primitivesOnly) {
      return renderKeyValueGrid(/** @type {Record<string, unknown>} */ (value));
    }

    const stack = node("div", { className: "stack" });
    for (const [key, child] of entries) {
      const block = node("div", { className: "sub-block" });
      const title = node("h3", { className: "sub-block-title", text: labelize(key) });
      block.appendChild(title);
      block.appendChild(renderValue(child));
      stack.appendChild(block);
    }
    return stack;
  }

  return node("p", { text: String(value) });
}

/**
 * @param {Record<string, unknown>} source
 * @param {string[]} keys
 * @returns {Record<string, unknown>}
 */
function pick(source, keys) {
  const out = {};
  for (const key of keys) {
    if (source[key] != null) {
      out[key] = source[key];
    }
  }
  return out;
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement[]}
 */
function renderOverview(payload) {
  /** @type {HTMLElement[]} */
  const sections = [];

  if (isObject(payload.header_block)) {
    const hero = sectionCard("Overview Context");

    if (payload.header_block.eyebrow) {
      hero.appendChild(node("p", { className: "eyebrow", text: formatValue(payload.header_block.eyebrow) }));
    }

    if (payload.header_block.title) {
      hero.appendChild(node("h3", { className: "hero-title", text: formatValue(payload.header_block.title) }));
    }

    if (payload.header_block.body) {
      hero.appendChild(node("p", { text: formatValue(payload.header_block.body) }));
    }

    sections.push(hero);
  }

  if (payload.global_info_banner) {
    const banner = node("section", { className: "banner banner--info" });
    banner.appendChild(node("p", { text: formatValue(payload.global_info_banner) }));
    sections.push(banner);
  }

  if (isObject(payload.state_banner)) {
    const stateBanner = node("section", {
      className: `banner banner--${toneForStatus(String(payload.state_banner.header ?? ""))}`
    });
    if (payload.state_banner.header) {
      stateBanner.appendChild(node("h3", { text: formatValue(payload.state_banner.header) }));
    }
    if (payload.state_banner.body) {
      stateBanner.appendChild(node("p", { text: formatValue(payload.state_banner.body) }));
    }
    sections.push(stateBanner);
  }

  if (isObject(payload.hero_cards)) {
    const card = sectionCard("Core Indicators");
    const grid = node("div", { className: "stat-grid" });

    for (const [key, raw] of Object.entries(payload.hero_cards)) {
      const tile = node("article", { className: "stat-tile" });
      const entry = isObject(raw) ? raw : { value: raw };

      const title = formatValue(entry.title ?? labelize(key));
      tile.appendChild(node("h3", { text: title }));

      const primary =
        entry.value ??
        entry.path_status ??
        entry.reserve_status ??
        entry.field_funding_status ??
        entry.funding_risk_level ??
        null;

      const value = node("p", { className: "stat-value", text: formatValue(primary, key) });
      tile.appendChild(value);

      const detail = pick(entry, [
        "funding_risk_level",
        "path_status",
        "reserve_status",
        "field_funding_status",
        "funded_percent_of_field_plan",
        "reserve_floor"
      ]);

      if (Object.keys(detail).length > 0) {
        tile.appendChild(renderKeyValueGrid(detail));
      }

      if (entry.helperText) {
        tile.appendChild(node("p", { className: "muted", text: formatValue(entry.helperText) }));
      }

      if (entry.interpretation) {
        tile.appendChild(node("p", { className: "muted", text: formatValue(entry.interpretation) }));
      }

      grid.appendChild(tile);
    }

    card.appendChild(grid);
    sections.push(card);
  }

  if (isObject(payload.interpretation_panel)) {
    const card = sectionCard(formatValue(payload.interpretation_panel.title ?? "Interpretation"));
    card.appendChild(node("p", { text: formatValue(payload.interpretation_panel.body) }));
    sections.push(card);
  }

  if (isObject(payload.status_chip_helper_copy)) {
    const card = sectionCard("Status Guidance");
    card.appendChild(renderKeyValueGrid(payload.status_chip_helper_copy));
    sections.push(card);
  }

  if (isObject(payload.tooltips)) {
    const card = sectionCard("Tooltips");
    card.appendChild(renderKeyValueGrid(payload.tooltips));
    sections.push(card);
  }

  if (isObject(payload.empty_state)) {
    const card = node("section", { className: "banner banner--neutral" });
    if (payload.empty_state.title) {
      card.appendChild(node("h3", { text: formatValue(payload.empty_state.title) }));
    }
    if (payload.empty_state.body) {
      card.appendChild(node("p", { text: formatValue(payload.empty_state.body) }));
    }
    if (payload.empty_state.primaryAction) {
      card.appendChild(node("p", { className: "muted", text: `Suggested action: ${formatValue(payload.empty_state.primaryAction)}` }));
    }
    sections.push(card);
  }

  return sections;
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement[]}
 */
function renderFundingPath(payload) {
  /** @type {HTMLElement[]} */
  const sections = [];

  if (payload.body) {
    const intro = sectionCard("Funding Path");
    intro.appendChild(node("p", { text: formatValue(payload.body) }));
    sections.push(intro);
  }

  if (isObject(payload.status_block)) {
    const status = sectionCard("Current Condition");

    const chipRow = node("div", { className: "chip-row" });
    const statuses = pick(payload.status_block, [
      "path_status",
      "reserve_status",
      "field_funding_status",
      "funding_risk_level"
    ]);

    for (const [key, value] of Object.entries(statuses)) {
      const chipWrap = node("div", { className: "chip-wrap" });
      chipWrap.appendChild(node("span", { className: "chip-label", text: labelize(key) }));
      chipWrap.appendChild(statusChip(formatValue(value, key)));
      chipRow.appendChild(chipWrap);
    }

    status.appendChild(chipRow);

    if (isObject(payload.status_block.state_banner)) {
      const stateBanner = node("div", { className: "sub-banner" });
      if (payload.status_block.state_banner.header) {
        stateBanner.appendChild(node("h3", { text: formatValue(payload.status_block.state_banner.header) }));
      }
      if (payload.status_block.state_banner.body) {
        stateBanner.appendChild(node("p", { text: formatValue(payload.status_block.state_banner.body) }));
      }
      status.appendChild(stateBanner);
    }

    sections.push(status);
  }

  if (isObject(payload.funding_requirement_snapshot)) {
    const snapshot = sectionCard("Funding Requirement Snapshot");
    snapshot.appendChild(renderKeyValueGrid(payload.funding_requirement_snapshot));
    sections.push(snapshot);
  }

  if (Array.isArray(payload.warnings)) {
    const warningCard = sectionCard("Funding Path Warnings");

    if (payload.warnings.length === 0) {
      warningCard.appendChild(node("p", { className: "muted", text: "No active funding-path warnings." }));
    } else {
      const stack = node("div", { className: "stack" });
      for (const warning of payload.warnings) {
        const block = node("article", { className: "warning-block" });
        block.appendChild(node("h3", { text: formatValue(warning.title ?? "Warning") }));
        block.appendChild(node("p", { text: formatValue(warning.body) }));
        stack.appendChild(block);
      }
      warningCard.appendChild(stack);
    }

    sections.push(warningCard);
  }

  if (Array.isArray(payload.risk_flags)) {
    const riskCard = sectionCard("Active Risk Flags");

    if (payload.risk_flags.length === 0) {
      riskCard.appendChild(node("p", { className: "muted", text: "No active risk flags in the current snapshot." }));
    } else {
      const table = node("table", { className: "data-table" });
      table.innerHTML =
        "<thead><tr><th>Severity</th><th>Type</th><th>Title</th><th>Recommended Action</th></tr></thead><tbody></tbody>";
      const tbody = table.querySelector("tbody");

      for (const flag of payload.risk_flags) {
        const tr = node("tr");

        const tdSeverity = node("td");
        tdSeverity.appendChild(statusChip(formatValue(flag.severity ?? "Info")));
        tr.appendChild(tdSeverity);

        tr.appendChild(node("td", { text: formatValue(flag.flag_type) }));
        tr.appendChild(node("td", { text: formatValue(flag.title) }));
        tr.appendChild(node("td", { text: formatValue(flag.recommended_action) }));

        tbody?.appendChild(tr);
      }

      riskCard.appendChild(table);
    }

    sections.push(riskCard);
  }

  if (isObject(payload.channel_target_panel)) {
    const channel = sectionCard(formatValue(payload.channel_target_panel.title ?? "Channel Targets"));

    if (payload.channel_target_panel.intro) {
      channel.appendChild(node("p", { text: formatValue(payload.channel_target_panel.intro) }));
    }

    if (Array.isArray(payload.channel_target_panel.subsectionLabels)) {
      channel.appendChild(renderPrimitiveList(payload.channel_target_panel.subsectionLabels));
    }

    if (payload.channel_target_panel.channel_target_plan) {
      channel.appendChild(renderValue(payload.channel_target_panel.channel_target_plan));
    } else {
      channel.appendChild(node("p", { className: "muted", text: "No channel target plan has been attached yet." }));
    }

    sections.push(channel);
  }

  if (isObject(payload.interpretation_block)) {
    const interpretation = sectionCard(formatValue(payload.interpretation_block.title ?? "Interpretation"));
    interpretation.appendChild(node("p", { text: formatValue(payload.interpretation_block.body) }));
    sections.push(interpretation);
  }

  if (payload.empty_state) {
    const empty = node("section", { className: "banner banner--neutral" });
    empty.appendChild(node("p", { text: formatValue(payload.empty_state) }));
    sections.push(empty);
  }

  return sections;
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement[]}
 */
function renderReports(payload) {
  /** @type {HTMLElement[]} */
  const sections = [];

  const intro = sectionCard("Reports Workspace");
  if (payload.body) {
    intro.appendChild(node("p", { text: formatValue(payload.body) }));
  }
  if (payload.module_intro) {
    intro.appendChild(node("p", { className: "muted", text: formatValue(payload.module_intro) }));
  }
  sections.push(intro);

  if (isObject(payload.report_generation_state)) {
    const state = node("section", {
      className: `banner banner--${toneForStatus(String(payload.report_generation_state.header ?? ""))}`
    });
    state.appendChild(node("h3", { text: formatValue(payload.report_generation_state.header) }));
    state.appendChild(node("p", { text: formatValue(payload.report_generation_state.body) }));
    sections.push(state);
  }

  if (isObject(payload.report_picker_descriptions)) {
    const picker = sectionCard("Report Types");
    picker.appendChild(renderKeyValueGrid(payload.report_picker_descriptions));
    sections.push(picker);
  }

  const structureTone = sectionCard("Structure and Tone");

  if (Array.isArray(payload.section_structure)) {
    structureTone.appendChild(node("h3", { className: "sub-heading", text: "Section Structure" }));
    structureTone.appendChild(renderPrimitiveList(payload.section_structure));
  }

  if (Array.isArray(payload.tone_rules)) {
    structureTone.appendChild(node("h3", { className: "sub-heading", text: "Tone Rules" }));
    structureTone.appendChild(renderPrimitiveList(payload.tone_rules));
  }

  sections.push(structureTone);

  if (isObject(payload.preface_variants) || isObject(payload.preview_language)) {
    const preview = sectionCard("Preview Language");

    if (isObject(payload.preface_variants)) {
      preview.appendChild(node("h3", { className: "sub-heading", text: "Preface Variants" }));
      preview.appendChild(renderKeyValueGrid(payload.preface_variants));
    }

    if (isObject(payload.preview_language)) {
      preview.appendChild(node("h3", { className: "sub-heading", text: "Report Preview Blocks" }));
      preview.appendChild(renderValue(payload.preview_language));
    }

    sections.push(preview);
  }

  if (isObject(payload.reports)) {
    const reports = sectionCard("Generated Reports");

    for (const [key, report] of Object.entries(payload.reports)) {
      const details = node("details", { className: "details-block" });
      details.open = true;

      const summary = node("summary", { text: labelize(key) });
      details.appendChild(summary);

      if (report == null) {
        details.appendChild(node("p", { className: "muted", text: "Not generated yet." }));
      } else {
        details.appendChild(renderValue(report));
      }

      reports.appendChild(details);
    }

    sections.push(reports);
  }

  if (isObject(payload.export_preview)) {
    const exportPreview = sectionCard("Export Preview");
    exportPreview.appendChild(renderKeyValueGrid(payload.export_preview));
    sections.push(exportPreview);
  }

  if (payload.empty_state) {
    const empty = node("section", { className: "banner banner--neutral" });
    empty.appendChild(node("h3", { text: formatValue(payload.empty_state.header) }));
    empty.appendChild(node("p", { text: formatValue(payload.empty_state.body) }));
    sections.push(empty);
  }

  return sections;
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement[]}
 */
function renderManual(payload) {
  /** @type {HTMLElement[]} */
  const sections = [];

  if (isObject(payload.front_page)) {
    const front = sectionCard(formatValue(payload.front_page.title ?? "Manual"));
    if (payload.front_page.opening) {
      front.appendChild(node("p", { text: formatValue(payload.front_page.opening) }));
    }
    if (payload.front_page.context) {
      front.appendChild(node("p", { className: "muted", text: formatValue(payload.front_page.context) }));
    }
    sections.push(front);
  }

  if (payload.usage_guidance) {
    const usage = node("section", { className: "banner banner--info" });
    usage.appendChild(node("p", { text: formatValue(payload.usage_guidance) }));
    sections.push(usage);
  }

  const fundamentals = sectionCard("Manual Standards");

  if (Array.isArray(payload.tone_rules)) {
    fundamentals.appendChild(node("h3", { className: "sub-heading", text: "Tone Rules" }));
    fundamentals.appendChild(renderPrimitiveList(payload.tone_rules));
  }

  if (Array.isArray(payload.ecosystem_alignment_rules)) {
    fundamentals.appendChild(node("h3", { className: "sub-heading", text: "Ecosystem Alignment" }));
    fundamentals.appendChild(renderPrimitiveList(payload.ecosystem_alignment_rules));
  }

  sections.push(fundamentals);

  if (isObject(payload.section_intros)) {
    const intros = sectionCard("Section Intros");
    intros.appendChild(renderKeyValueGrid(payload.section_intros));
    sections.push(intros);
  }

  if (isObject(payload.sections)) {
    const manualSections = sectionCard("Manual Sections");
    const grid = node("div", { className: "manual-grid" });

    for (const [key, section] of Object.entries(payload.sections)) {
      const block = node("article", { className: "manual-block" });
      if (isObject(section)) {
        block.appendChild(node("h3", { text: formatValue(section.title ?? labelize(key)) }));
        if (section.body) {
          block.appendChild(node("p", { text: formatValue(section.body) }));
        }

        const extra = { ...section };
        delete extra.title;
        delete extra.body;

        if (Object.keys(extra).length > 0) {
          block.appendChild(renderValue(extra));
        }
      } else {
        block.appendChild(node("h3", { text: labelize(key) }));
        block.appendChild(renderValue(section));
      }

      grid.appendChild(block);
    }

    manualSections.appendChild(grid);
    sections.push(manualSections);
  }

  if (isObject(payload.page_manual_guidance)) {
    const pageGuidance = sectionCard("Page-by-Page Guidance");

    for (const [key, section] of Object.entries(payload.page_manual_guidance)) {
      const details = node("details", { className: "details-block" });
      const summary = node("summary", { text: labelize(key) });
      details.appendChild(summary);
      details.appendChild(renderValue(section));
      pageGuidance.appendChild(details);
    }

    sections.push(pageGuidance);
  }

  if (Array.isArray(payload.healthy_range_guidance)) {
    const healthy = sectionCard("Healthy Range Guidance");
    healthy.appendChild(renderPrimitiveList(payload.healthy_range_guidance));
    sections.push(healthy);
  }

  if (Array.isArray(payload.common_operator_mistakes)) {
    const mistakes = sectionCard("Common Operator Mistakes");
    mistakes.appendChild(renderPrimitiveList(payload.common_operator_mistakes));
    sections.push(mistakes);
  }

  return sections;
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement[]}
 */
function renderGeneric(payload) {
  const sections = [];

  const visibleEntries = Object.entries(payload).filter(([key]) => SHARED_SHELL_KEYS.has(key) === false);
  for (const [key, value] of visibleEntries) {
    const section = sectionCard(labelize(key));
    section.appendChild(renderValue(value));
    sections.push(section);
  }

  return sections;
}

/**
 * @param {string} route
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement[]}
 */
function renderRouteSections(route, payload) {
  switch (route) {
    case "/overview":
      return renderOverview(payload);
    case "/funding-path":
      return renderFundingPath(payload);
    case "/reports":
      return renderReports(payload);
    case "/manual":
      return renderManual(payload);
    default:
      return renderGeneric(payload);
  }
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {HTMLElement}
 */
function buildRightRail(payload) {
  const rail = node("aside", { className: "right-rail" });

  const question = sectionCard("Page Question");
  question.appendChild(node("p", { text: formatValue(payload.page_question) }));
  rail.appendChild(question);

  if (isObject(payload.manual_guidance)) {
    const manual = sectionCard("Manual Guidance");
    manual.appendChild(renderValue(payload.manual_guidance));
    rail.appendChild(manual);
  }

  if (isObject(payload.right_rail)) {
    const rr = payload.right_rail;

    if (isObject(rr.coach_block)) {
      const coach = sectionCard(formatValue(rr.coach_block.title ?? "Operator Coach"));
      coach.appendChild(node("p", { text: formatValue(rr.coach_block.body) }));
      coach.appendChild(node("p", { className: "muted", text: `Good discipline: ${formatValue(rr.coach_block.good_discipline)}` }));
      coach.appendChild(node("p", { className: "muted", text: `Bad habit: ${formatValue(rr.coach_block.bad_habit)}` }));
      rail.appendChild(coach);
    }

    if (isObject(rr.current_state)) {
      const currentState = sectionCard("Current State");
      currentState.appendChild(renderKeyValueGrid(rr.current_state));
      rail.appendChild(currentState);
    }

    if (Array.isArray(rr.warnings)) {
      const warningCard = sectionCard("Warnings");
      if (rr.warnings.length === 0) {
        warningCard.appendChild(node("p", { className: "muted", text: "No active right-rail warnings." }));
      } else {
        const stack = node("div", { className: "stack" });
        for (const warning of rr.warnings) {
          const block = node("article", { className: "warning-block" });
          const title = node("h3");
          title.appendChild(statusChip(formatValue(warning.severity ?? "Info")));
          title.appendChild(document.createTextNode(` ${formatValue(warning.title)}`));
          block.appendChild(title);
          block.appendChild(node("p", { text: formatValue(warning.action) }));
          stack.appendChild(block);
        }
        warningCard.appendChild(stack);
      }
      rail.appendChild(warningCard);
    }

    if (rr.next_action) {
      const nextAction = sectionCard("Next Action");
      nextAction.appendChild(node("p", { text: formatValue(rr.next_action) }));
      rail.appendChild(nextAction);
    }

    if (Array.isArray(rr.assumptions)) {
      const assumptions = sectionCard("Assumptions");
      assumptions.appendChild(renderPrimitiveList(rr.assumptions));
      rail.appendChild(assumptions);
    }

    if (Array.isArray(rr.interpretation)) {
      const interpretation = sectionCard("Interpretation");
      interpretation.appendChild(renderPrimitiveList(rr.interpretation));
      rail.appendChild(interpretation);
    }

    if (Array.isArray(rr.ecosystem_alignment)) {
      const ecosystem = sectionCard("Ecosystem Alignment");
      ecosystem.appendChild(renderPrimitiveList(rr.ecosystem_alignment));
      rail.appendChild(ecosystem);
    }

    if (isObject(rr.snapshot_context)) {
      const snapshot = sectionCard("Snapshot Context");
      snapshot.appendChild(renderKeyValueGrid(rr.snapshot_context));
      rail.appendChild(snapshot);
    }
  }

  if (isObject(payload.permissions)) {
    const permissions = sectionCard("Permissions");
    const chipRow = node("div", { className: "chip-row" });

    const canView = statusChip(payload.permissions.can_view ? "Can View" : "View Blocked");
    const canEdit = statusChip(payload.permissions.can_edit ? "Can Edit" : "Read Only");
    chipRow.appendChild(canView);
    chipRow.appendChild(canEdit);
    permissions.appendChild(chipRow);

    permissions.appendChild(renderValue({ role: payload.permissions.role, route: payload.permissions.route }));
    rail.appendChild(permissions);
  }

  return rail;
}

/**
 * @param {{route: string, title: string, payload: Record<string, unknown>}} view
 * @param {Array<{path: string, title: string}>} routes
 * @returns {HTMLElement}
 */
export function buildAppSurface(view, routes) {
  const shell = node("div", { className: "app-shell" });

  const topBar = node("header", { className: "app-topbar" });
  topBar.appendChild(node("h1", { className: "app-title", text: "Campaign Finance Engine" }));
  topBar.appendChild(node("p", { className: "app-subtitle", text: "Operational finance control surface" }));
  shell.appendChild(topBar);

  const layout = node("div", { className: "app-layout" });

  const nav = node("aside", { className: "route-nav" });
  nav.appendChild(node("h2", { className: "section-title", text: "Routes" }));

  const navLinks = node("div", { className: "nav-links" });
  for (const route of routes) {
    const link = node("a", { className: "nav-link", text: route.title });
    if (route.path === view.route) {
      link.classList.add("active");
    }
    link.href = `#${route.path}`;
    navLinks.appendChild(link);
  }
  nav.appendChild(navLinks);

  const main = node("main", { className: "main-column" });
  const header = node("section", { className: "page-header" });
  header.appendChild(node("h2", { className: "page-title", text: view.title }));
  if (view.payload.page_question) {
    header.appendChild(node("p", { className: "page-question", text: formatValue(view.payload.page_question) }));
  }
  main.appendChild(header);

  const routeSections = renderRouteSections(view.route, view.payload);
  for (const section of routeSections) {
    main.appendChild(section);
  }

  layout.appendChild(nav);
  layout.appendChild(main);
  layout.appendChild(buildRightRail(view.payload));

  shell.appendChild(layout);
  return shell;
}
