import { useState } from 'react'
import CourtProvider from '../../store/CourtProvider'
import CourtItem from './CourtItem'
import cardClass from '../../styles/Card.module.css'

const CourtList = (props) => {
  const [extendedCourt, setExtendedCourt] = useState(null)

  const toggleExtendHandler = (elementId) => {
    setExtendedCourt((prevElementId) => (prevElementId === elementId ? null : elementId))
  }

  return (
    <div>
      <div className={cardClass.content}>
        <div className={`${cardClass.row} bold`}>
          <div className={cardClass.rowLeft}>
            <div className={cardClass.rowItem}>Slot</div>
            <div className={cardClass.rowItem}>Harga</div>
            <div className={cardClass.rowItem}>Jadwal Terdekat</div>
            <div className={cardClass.rowItem}>Ketersediaan</div>
          </div>
          <div className='action-wrapper'></div>
        </div>
      </div>

      {props.courts.map((court) => (
        <CourtProvider key={court.id} court={court} date={props.date} setCourts={props.setCourts}>
          <CourtItem
            isExtended={extendedCourt === court.id}
            toggleExtendCourt={toggleExtendHandler.bind(null, court.id)}
          />
        </CourtProvider>
      ))}
    </div>
  )
}

export default CourtList
