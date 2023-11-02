import { useState } from 'react'
import cardClass from '../../styles/Card.module.css'

const EditCourtItem = (props) => {
  const [formData, setFormData] = useState({
    startTime: props.session.start,
    endTime: props.session.end,
  })
  const [formTouched, setFormTouched] = useState(false)

  const inputChangeHandler = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setFormTouched(true)
  }

  const enableClass = !formTouched ? 'disable' : ''

  return (
    <div key={props.session.id} className={cardClass.content}>
      <div className={cardClass.row}>
        <div className={cardClass.rowLeft}>
          <div className={cardClass.rowItem}>
            <input
              onChange={(e) => inputChangeHandler(e.target.value, 'startTime')}
              type='time'
              value={formData.startTime}
            />
          </div>
          <div className={cardClass.rowItem}>
            <input
              onChange={(e) => inputChangeHandler(e.target.value, 'endTime')}
              type='time'
              value={formData.endTime}
            />
          </div>
        </div>
        <div className='action-link transition-all' onClick={props.onSubmit}>
          <div className={`${cardClass.editButton} button ${enableClass}`}>Simpan</div>
        </div>
      </div>
    </div>
  )
}
export default EditCourtItem
