export const bridgePage = {
  id: "bridge",
  title: "Bridge",
  render(state) {
    return {
      imported_fpe_snapshot: state.bridge.fpeSnapshot ?? null,
      exported_cfe_snapshot: state.bridge.cfeSnapshot ?? null,
      note: "Bridge payloads are versioned, snapshot-based, and validated."
    };
  }
};
