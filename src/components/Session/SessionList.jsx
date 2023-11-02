import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import { formatRupiah } from '../../helpers/currencyHelper'
import { validateCart } from '../../helpers/cartHelper'
import useAlert from '../../hooks/useAlert'
import useDialog from '../../hooks/useDialog'

import Alert from '../Layout/Alert'
import SessionItem from './SessionItem'
import SessionDialogAdd from './SessionDialogAdd'

import cardClass from '../../styles/Card.module.css'

const SessionList = ({ sessions }) => {
  const { onDialog, showDialog, hideDialog } = useDialog()
  const { onAlert, setAlert, dismissAlert } = useAlert()

  const cart = useSelector((state) => state.cart)
  const isCartEmpty = cart.items.length === 0

  const submitHandler = () => {
    try {
      validateCart(cart)
      showDialog()
    } catch (error) {
      setAlert(error.message)
      console.error(error)
    }
  }

  return (
    <div className={cardClass.sessions}>
      {sessions.map((session) => (
        <SessionItem key={session.session_time_id} session={session} />
      ))}

      {!isCartEmpty && (
        <div className={cardClass.summary}>
          <div className=''>Total Biaya</div>
          <h2>{formatRupiah(cart.total_price)}</h2>
          <button className='button bold' onClick={submitHandler}>
            Sewa Lapangan
          </button>
        </div>
      )}

      <AnimatePresence>{onAlert && <Alert onDismiss={dismissAlert} state='danger' text={onAlert} />}</AnimatePresence>
      <AnimatePresence>{onDialog && <SessionDialogAdd setAlert={setAlert} onCancel={hideDialog} />}</AnimatePresence>
    </div>
  )
}

export default SessionList
