import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useAxios from '../../hooks/useAxios'
import { removeFromCartRestricted, clearCart } from '../../store/cartSlice'
import courtContext from '../../store/court-context'
import { formatRupiah } from '../../helpers/currencyHelper'
import { formatCartForAPI } from '../../helpers/cartHelper'

import Dialog from '../Layout/Dialog'
import ClockIcon from '../../assets/icons/ClockIcon'

import dialogClass from '../../styles/Dialog.module.css'

const SessionDialogAdd = (props) => {
  const dispatch = useDispatch()
  const { isLoading, error, sendRequest } = useAxios()
  const cart = useSelector((state) => state.cart)
  const court = useContext(courtContext)

  const removeCartItemHandler = (court_id, session_id, price_per_session) => {
    try {
      dispatch(removeFromCartRestricted({ court_id, session_id, price_per_session }))
    } catch (error) {
      props.setAlert(error.message)
    }
  }

  const checkoutHandler = () => {
    const requestBody = formatCartForAPI(cart, court.date)
    try {
      sendRequest(
        {
          method: 'post',
          url: '/v1/order/manual-order-create/65097321f5f42c2071e16da0',
          data: requestBody,
        },
        () => {
          sendRequest({ url: '/v1/place/65097321f5f42c2071e16da0/schedule' }, court.setCourts)
        },
      )

      dispatch(clearCart())
    } catch (error) {}
  }

  useEffect(() => {
    if (cart.items.length === 0) {
      props.onCancel()
    }
  }, [cart.items, props])

  return (
    <Dialog onCancel={props.onCancel}>
      <h2 className={dialogClass.head}>Sewa Lapangan</h2>

      <div className={dialogClass.body}>
        {cart.items.map((cartItem) => (
          <div className={dialogClass.item} key={cartItem.court_id}>
            <h2>{cartItem.court_name}</h2>

            {cartItem.sessions.map((cartSession) => {
              const sessionTime = cartSession.start_time + ' - ' + cartSession.end_time
              return (
                <div
                  onClick={removeCartItemHandler.bind(
                    null,
                    cartItem.court_id,
                    cartSession.session_time_id,
                    cartItem.price_per_session,
                  )}
                  key={cartSession.session_time_id}
                  className={`${dialogClass.row} ${dialogClass.summary}`}
                >
                  <div className='flex items-center gap-2'>
                    <ClockIcon />
                    {sessionTime}
                  </div>

                  <div>{formatRupiah(cartItem.price_per_session)}</div>
                </div>
              )
            })}
          </div>
        ))}

        <div className={`${dialogClass.row} ${dialogClass.price}`}>
          <h2 className=''>Total</h2>
          <h2 className=''>{formatRupiah(cart.total_price)}</h2>
        </div>
      </div>

      <div className={dialogClass.actions}>
        <button className={`${dialogClass.close} button no-shadow`} onClick={props.onCancel}>
          Close
        </button>
        <button className={`${dialogClass.confirm} button`} onClick={checkoutHandler}>
          Lanjutkan
        </button>
      </div>
    </Dialog>
  )
}

export default SessionDialogAdd
