# Campaign Finance Engine - Surface Implementation Handoff

This package applies the surface implementation pack on top of the CFE foundation scaffold.

Implemented surface map:
- `/overview`
- `/budget-plan`
- `/spend-timeline`
- `/funding-path`
- `/finance-activity`
- `/donor-intelligence`
- `/expenditure-intelligence`
- `/reports`
- `/manual`
- `/settings`

What is wired:
- Page headers, intros, helper text, tooltips, and empty states from the handoff copy packs.
- Warning tone and severity language from warning contracts.
- Report shell language and narrative scaffolding from reporting contracts.
- Manual/front-page guidance from manual contracts.
- Canonical snapshot boundary preserved: pages consume store/core snapshot outputs and do not recompute engine math.

Compatibility:
- Legacy `uiCopy` exports (`EMPTY_STATES`, `CORE_HELPER_TEXT`, etc.) are retained so old scaffold modules remain import-safe.

## Verify

Run syntax checks:

```bash
cd /Users/anakinskywalker/Downloads/cfe_handoff_v2
while IFS= read -r f; do node --check "$f"; done < <(rg --files src test -g '*.js' | sort)
```

Run tests:

```bash
cd /Users/anakinskywalker/Downloads/cfe_handoff_v2
npm test
```
