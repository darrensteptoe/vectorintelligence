# Campaign Finance Engine (CFE) — Component Pack Implementation

This workspace contains a standalone CFE implementation scaffolded from the handoff docs and component language pack.

## Implemented surfaces
- Overview
- Budget Plan
- Spend Timeline
- Funding Path
- Activity
- Donor Intelligence
- Expenditure Intelligence
- Reports
- Manual
- Settings

Route map is defined in `src/app/routes.js` and surface payload builders are in `src/app/pages/`.

## Canonical language + status integration
The implementation is wired to canonical copy/status contracts in `src/core/contracts/`:
- status taxonomy: `On Path / Watch / Off Path`, `Healthy / Tight / At Risk`, `Greenlight / Caution / Redline`, `Strong / Mixed / Weak`
- warning families, helper text, banners, tooltips, empty states, shared modals
- manual language blocks and report narrative templates

## Core architecture
- Canonical calculations live in `src/core/engine/`.
- Store orchestration and recomputation live in `src/state/store.js`.
- Bridge import/export is isolated in `src/core/bridge/`.
- FPE and CFE remain separate apps connected only by validated snapshot contracts.

## Verify locally
```bash
npm test
```

Optional route-render smoke check:
```bash
node -e "import('./src/index.js').then(({bootstrapCfe,APP_ROUTES})=>{const {shell}=bootstrapCfe();for(const r of APP_ROUTES){shell.navigate(r.path);shell.render();}console.log('render-ok',APP_ROUTES.length);})"
```

## Source handoff docs
- `PRODUCT_BRIEF.md`
- `SYSTEM_RULES.md`
- `WARNING_AND_STATUS_LANGUAGE.md`
- `MANUAL_AND_OPERATOR_LANGUAGE.md`
- `REPORTING_BLUEPRINT.md`
- `docs/`, `copy/`, `manual/`, `reports/`, `ui_copy/`
- `prompts/CODEX_BUILD_PROMPT.md`
- `prompts/CODEX_COMPONENT_IMPLEMENTATION_PROMPT.md`
