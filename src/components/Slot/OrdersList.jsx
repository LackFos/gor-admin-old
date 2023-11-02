import React from 'react'
import { formatRupiah } from '../../helpers/currencyHelper'
import formatDate from '../../helpers/formatDate'
import cardClass from '../../styles/Card.module.css'

const OrdersList = ({ order, handleRowClick }) => {
  return (
    <div className={cardClass.content} key={order._id} onClick={() => handleRowClick(order)}>
      <div className={`${cardClass.row}`}>
        <div className={cardClass.rowLeft}>
          <div className={`faded-text ${cardClass.rowItem}`}>{formatDate(order.createdAt)}</div>
          <div className={`faded-text ${cardClass.rowItem}`}>{formatDate(new Date(order.date))}</div>
          <div className={`faded-text ${cardClass.rowItem}`}>{formatRupiah(order.total)}</div>
          <div className={`faded-text ${cardClass.rowItem}`}>
            <div className={`state ${order.status === 'pending' ? 'orange' : 'green'}`}>{order.status}</div>
          </div>
        </div>
        <div className='action-wrapper'></div>
      </div>
    </div>
  )
}

export default OrdersList
