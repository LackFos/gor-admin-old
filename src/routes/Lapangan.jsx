import React from 'react'
import { NavLink } from 'react-router-dom'

import Card from '../components/Card/Card'

import { formatRupiah } from '../helpers/currencyHelper'
import cardClass from '../styles/Card.module.css'
import 'react-calendar/dist/Calendar.css'
const Lapangan = () => {
  const slots = [
    {
      id: 1,
      name: '1',
      price_per_session: 150000,
    },
    {
      id: 2,
      name: '2',
      price_per_session: 150000,
    },
  ]

  return (
    <Card>
      <div className={cardClass.label}>
        <div className={cardClass.labelLeft}>
          <h2>Lapangan</h2>
        </div>
        <div className='action-wrapper'>
          <div className='action'></div>
        </div>
      </div>

      <div>
        {slots.map((slot) => {
          return (
            <div key={slot.id} className={cardClass.content}>
              <div className={cardClass.row}>
                <div className={cardClass.rowLeft}>
                  <div className={cardClass.rowItem}>Lapangan {slot.name}</div>
                  <div className={cardClass.rowItem}>{formatRupiah(slot.price_per_session)}</div>
                </div>

                <NavLink className='action-link transition-all' to='/lapangan/edit'>
                  <div className={`${cardClass.editButton} button`}>Edit</div>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>

      <div className={`${cardClass.content} ${cardClass.bottom}`}>
        <div className={`${cardClass.row} bold`}>
          <div className={cardClass.rowLeft}>
            <div className={cardClass.rowItem}>+ Tambah Slot</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Lapangan
