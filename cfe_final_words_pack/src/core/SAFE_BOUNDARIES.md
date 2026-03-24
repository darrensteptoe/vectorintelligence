# CFE Safe Boundaries

1. Canonical calculations only live in `src/core/engine`.
2. Classification resolution only lives in `src/core/classification`.
3. Bridge validation only lives in `src/core/bridge`.
4. UI/page code in `src/app` must only consume snapshots already computed by core modules.
5. Reports must consume canonical snapshots and never recompute canonical math.
