# Campaign Finance Engine (CFE) — Final Hardening Build

This workspace contains the hardened CFE implementation aligned to the final hardening pack controls.

## Implemented hardening scope
- 12-page app map aligned to `APP_MAP_AND_INFORMATION_ARCHITECTURE.md`
- shell-level right-rail payload and page-question/manual guidance injection
- role-aware permission payloads for top-level surfaces
- state transition alignment for budget/scenario/bridge/activity/risk governance
- diagnostics engine (`PASS/FAIL`) for canonical contract drift checks
- snapshot governance extensions for budget and funding-path roundtrips
- expanded test pack for routes, diagnostics, and snapshot contracts

## Route map
- `/overview`
- `/budget`
- `/timeline`
- `/benchmarks`
- `/funding-path`
- `/finance-operations`
- `/donor-intelligence`
- `/expenditure-intelligence`
- `/risks`
- `/reports`
- `/manual`
- `/settings-data-imports`

## Verify
```bash
npm test
node -e "import('./src/index.js').then(({bootstrapCfe,APP_ROUTES})=>{const {shell}=bootstrapCfe();for(const r of APP_ROUTES){shell.navigate(r.path);shell.render();}console.log('render-ok',APP_ROUTES.length);})"
```
