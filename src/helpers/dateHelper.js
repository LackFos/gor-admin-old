export const formatDate = (inputDate) => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(inputDate))
}

export const convertUTC = (date) => {
  const timeZoneOffsetMinutes = new Date(date).getTimezoneOffset()
  const utcDate = new Date(date)
  utcDate.setMinutes(utcDate.getMinutes() - timeZoneOffsetMinutes) // Adjust for local time zone
  utcDate.setUTCHours(0, 0, 0, 0) // Set time to midnight in UTC
  return utcDate.toISOString()
}
