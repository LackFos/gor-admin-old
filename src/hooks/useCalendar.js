import { useState } from 'react'
import { convertUTC } from '../helpers/dateHelper'

const currentDate = convertUTC(new Date())

export const setMinDate = (day) => {
  const date = new Date(currentDate)
  date.setDate(date.getDate() - day)
  return convertUTC(date)
}

export const setMaxDate = (day) => {
  const date = new Date(currentDate)
  date.setDate(date.getDate() + day - 1)
  return convertUTC(date)
}

const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(currentDate)
  return [selectedDate, setSelectedDate]
}

export default useCalendar
