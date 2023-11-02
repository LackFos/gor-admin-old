export const filterSlotByDate = (courts, date) => {
  return courts.map((court) => {
    const selectedDateSession = court.session_available
      .filter((session) => {
        return session.date === date
      })
      .map((session) => session.available_session)
      .reduce((acc, sessions) => acc.concat(sessions), [])
    return {
      id: court.court_id,
      name: court.name,
      price_per_session: court.price_per_session,
      sessions: selectedDateSession,
    }
  })
}
