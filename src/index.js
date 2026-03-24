import { createAppShell } from "./app/shell.js";
import { createCfeStore } from "./state/store.js";

export { createCfeStore };
export { createAppShell };
export * from "./core/index.js";
export * from "./app/routes.js";

/**
 * Convenience bootstrap for local integration tests.
 */
export function bootstrapCfe(seed) {
  const store = createCfeStore(seed);
  const shell = createAppShell(store);
  return { store, shell };
}
