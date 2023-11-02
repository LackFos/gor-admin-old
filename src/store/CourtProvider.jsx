import { identifyBookableSessions } from '../helpers/sessionHelper'
import courtContext from './court-context'

const propsProvider = (props) => {
  const [updatedSessions, totalAvailableSession, closestSchedule] = identifyBookableSessions(
    props.date,
    props.court.sessions,
  )

  const updatedCourts = {
    ...props.court,
    totalAvailableSession,
    closestSchedule,
    sessions: updatedSessions,
  }

  return (
    <courtContext.Provider value={{ court: updatedCourts, setCourts: props.setCourts, date: props.date }}>
      {props.children}
    </courtContext.Provider>
  )
}

export default propsProvider
