export const setupPage = {
  id: "setup",
  title: "Campaign Setup",
  render(state) {
    return {
      race_profile: state.raceProfile ?? null,
      campaign_profile: state.campaignProfile ?? null,
      filing_calendar: state.filingCalendar ?? null,
      election_calendar: state.electionCalendar ?? null,
      active_scenario_id: state.scenarioId
    };
  }
};
