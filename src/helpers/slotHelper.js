export const filterSlotByDate = (slots, date) => {
  return slots.map((slot) => {
    const selectedDateSession = slot.session_available
      .filter((session) => {
        return session.date === date
      })
      .map((session) => session.available_session)
      .reduce((acc, sessions) => acc.concat(sessions), [])
    return {
      id: slot.court_id,
      name: slot.name,
      price_per_session: slot.price_per_session,
      sessions: selectedDateSession,
    }
  })
}
