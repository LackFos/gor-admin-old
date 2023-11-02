import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Calendar from 'react-calendar'

import { convertUTC } from '../../helpers/dateHelper'
import { setMinDate, setMaxDate } from '../../hooks/useCalendar'
import useAlert from '../../hooks/useAlert'
import useDialog from '../../hooks/useDialog'

import Dialog from '../Layout/Dialog'
import Alert from '../Layout/Alert'
import ChevronIcon from '../../assets/icons/ChevronIcon'
import CalenderIcon from '../../assets/icons/CalendarIcon'

const CalendarInput = (props) => {
  const { onAlert, setAlert, dismissAlert } = useAlert()
  const { onDialog, showDialog, hideDialog } = useDialog()

  const minDate = setMinDate(props.minDate ?? 30)
  const maxDate = setMaxDate(props.maxDate ?? 30)

  const inputChangeHandler = (value, event) => {
    props.onChange(convertUTC(value), event)
    hideDialog()
  }

  useEffect(() => {
    const isDateInvalid = props.value < minDate || props.value > maxDate
    if (isDateInvalid) {
      setAlert(props.errorText)
    } else {
      setAlert(null)
    }
  }, [props.value])

  return (
    <>
      <AnimatePresence>{onAlert && <Alert state='danger' onDismiss={dismissAlert} text={onAlert} />}</AnimatePresence>

      <AnimatePresence>
        {onDialog && (
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
            <Dialog onCancel={hideDialog}>
              <Calendar
                value={props.value}
                onChange={inputChangeHandler}
                locale='id-ID'
                minDetail='month'
                calendarType='iso8601'
                prevLabel={<ChevronIcon direction='left' />}
                nextLabel={<ChevronIcon direction='right' />}
                tileClassName={({ date }) => {
                  const currentDate = convertUTC(date)
                  return currentDate < minDate || currentDate > maxDate ? 'faded' : null
                }}
              />
            </Dialog>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='action-wrapper'>
        <div className='action border' onClick={showDialog}>
          <CalenderIcon />
        </div>
      </div>
    </>
  )
}
export default CalendarInput
