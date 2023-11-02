import React, { memo, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import { isSessionOnCart } from '../../helpers/cartHelper'
import useDialog from '../../hooks/useDialog'
import courtContext from '../../store/court-context'
import { addToCart, removeFromCart } from '../../store/cartSlice'

import Checkbox from '../Forms/Checkbox'
import SessionDialogRemove from './SessionDialogRemove'
import TrashIcon from '../../assets/icons/TrashIcon'

import cardClass from '../../styles/Card.module.css'

const SessionItem = memo(({ session }) => {
  const { onDialog, showDialog, hideDialog } = useDialog()
  const dispatch = useDispatch()

  const { court } = useContext(courtContext)
  const cart = useSelector((state) => state.cart)

  const isAdmin = false
  const isBookable = session.isBookable
  const sessionLabel = `${session.start_time} - ${session.end_time}`

  const isChecked = isSessionOnCart(cart, court.id, session.session_time_id)

  const toggleCheckboxHandler = (e) => {
    if (e.target.checked) {
      dispatch(
        addToCart({
          court_id: court.id,
          court_name: court.name,
          price_per_session: court.price_per_session,
          session: session,
        }),
      )
    } else {
      dispatch(
        removeFromCart({
          court_id: court.id,
          session_id: session.session_time_id,
          price_per_session: court.price_per_session,
        }),
      )
    }
  }

  const removeScheduleHandler = () => {
    hideDialog()
    console.log('Removed')
  }

  return (
    <>
      <div className={`${cardClass.row} ${!isBookable ? 'faded-text' : 'light-text'}`}>
        <div className={cardClass.rowLeft}>
          <div className={cardClass.rowItem}>
            <Checkbox
              onChange={toggleCheckboxHandler}
              label={sessionLabel}
              checked={isChecked}
              isDisabled={!isBookable}
            />
          </div>
        </div>

        <div className='action-wrapper'>
          {isAdmin && (
            <div onClick={showDialog} className='action border'>
              <TrashIcon />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {onDialog && <SessionDialogRemove onCancel={hideDialog} onConfirm={removeScheduleHandler} />}
      </AnimatePresence>
    </>
  )
})

export default SessionItem
