import { useContext } from 'react'
import { motion } from 'framer-motion'

import courtContext from '../../store/court-context'
import { formatRupiah } from '../../helpers/currencyHelper'

import SessionList from '../Session/SessionList'
import ChevronIcon from '../../assets/icons/ChevronIcon'

import cardClass from '../../styles/Card.module.css'

const CourtItem = (props) => {
  const { court } = useContext(courtContext)
  const isAvailable = court.totalAvailableSession !== 0
  const statusColor = isAvailable ? 'green' : 'red'
  const statusText = isAvailable ? `${court.totalAvailableSession} Jadwal` : 'Tidak Tersedia'

  return (
    <>
      <div className={`${cardClass.content} light-text`}>
        <div onClick={props.toggleExtendCourt} className={`${cardClass.row} ${cardClass.firstRow}`}>
          <div className={cardClass.rowLeft}>
            <div className={cardClass.rowItem}>{court.name}</div>
            <div className={cardClass.rowItem}>{formatRupiah(court.price_per_session)}</div>
            <div className={cardClass.rowItem}>{court.closestSchedule}</div>
            <div className={cardClass.rowItem}>
              <div className={`state ${statusColor}`}>{statusText}</div>
            </div>
          </div>

          <motion.div animate={{ rotate: props.isExtended ? 180 : 0 }} className='action-wrapper'>
            <div className='action'>
              <ChevronIcon />
            </div>
          </motion.div>
        </div>
      </div>

      {props.isExtended && <SessionList sessions={court.sessions} />}
    </>
  )
}

export default CourtItem
