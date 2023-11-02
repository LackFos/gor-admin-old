import { convertUTC } from './dateHelper'

const statusType = {
  ONGOING: 'ongoing',
  UPCOMING: 'upcoming',
  PASSED: 'passed',
}

const formatter = new Intl.DateTimeFormat('en', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

const getCurrentTime = () => formatter.format(new Date())

const getSessionStatus = (currentTime, start, end) => {
  if (currentTime >= start && currentTime < end) {
    return statusType.ONGOING
  } else if (currentTime < start) {
    return statusType.UPCOMING
  } else {
    return statusType.PASSED
  }
}

export const identifyBookableSessions = (selectedDate, sessions) => {
  const currentDate = convertUTC(new Date())
  const currentTime = getCurrentTime()
  let totalAvailableSession = 0
  let closestSchedule = '-'

  const updatedSessions = sessions.map((session) => {
    const isSameDate = selectedDate === currentDate
    let isBookable = session.order_id === undefined

    if (isSameDate) {
      const sessionStatus = getSessionStatus(currentTime, session.start_time, session.end_time)
      isBookable = session.order_id === undefined && sessionStatus !== statusType.PASSED
    }

    if (isBookable) {
      totalAvailableSession++
      closestSchedule === '-' && (closestSchedule = `${session.start_time} - ${session.end_time}`)
    }

    return { ...session, isBookable }
  })

  return [updatedSessions, totalAvailableSession, closestSchedule]
}
