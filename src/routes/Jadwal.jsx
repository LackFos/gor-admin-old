import { useEffect, useState } from 'react'

import useAxios from '../hooks/useAxios'
import useCalendar from '../hooks/useCalendar'
import { formatDate } from '../helpers/dateHelper'
import { filterSlotByDate } from '../helpers/slotHelper'

import Card from '../components/Card/Card'
import CalendarInput from '../components/Forms/CalendarInput'
import CourtList from '../components/Court/CourtList'

import cardClass from '../styles/Card.module.css'
import 'react-calendar/dist/Calendar.css'

const Jadwal = () => {
  const [courts, setCourts] = useState([])
  const [selectedDate, setSelectedDate] = useCalendar()
  const { isLoading, error, sendRequest } = useAxios()

  const filteredCourts = filterSlotByDate(courts, selectedDate)

  useEffect(() => {
    sendRequest({ url: '/v1/place/65097321f5f42c2071e16da0/schedule' }, setCourts)
  }, [])

  return (
    <Card>
      <div className={cardClass.label}>
        <div className={cardClass.labelLeft}>
          <h2>Jadwal</h2>
          <div className={cardClass.subHeader}>{formatDate(selectedDate)}</div>
        </div>

        <CalendarInput
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={0}
          maxDate={7}
          errorText='Periode maksimal yang dapat dipilih 7 hari'
        />
      </div>

      <CourtList courts={filteredCourts} setCourts={setCourts} date={selectedDate} />
    </Card>
  )
}

export default Jadwal
