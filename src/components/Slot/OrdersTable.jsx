import React from 'react'
import cardClass from '../../styles/Card.module.css'
import SortIcon from '../../assets/icons/SortIcon'
import styles from '../../styles/OrdersList.module.css'
import OrdersList from './OrdersList'

const OrdesTable = (props) => {
  const renderOrders = props.orders.map((order) => (
    <OrdersList order={order} key={order._id} handleRowClick={props.handleRowClick}/> 
  ));

  return (
    <div>
      <div className={cardClass.content}>
        <div className={`${cardClass.row} bold`}>
          <div className={cardClass.rowLeft}>
            <div className={cardClass.rowItem}>Transaksi</div>
            <div className={cardClass.rowItem}>Tanggal</div>
            <div className={cardClass.rowItem}>Total</div>
            <div className={cardClass.rowItem}>Status</div>
          </div>

          <div className='action-wrapper'>
            <div className='action border'>
              <button className={styles.button} onClick={props.sortHandle}>
                <SortIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      {renderOrders}
    </div>
  )
}

export default OrdesTable
