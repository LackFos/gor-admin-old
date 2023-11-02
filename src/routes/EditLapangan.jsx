import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

import Card from '../components/Card/Card'
import SessionForm from '../components/Session/SessionForm'

import cardClass from '../styles/Card.module.css'
import 'react-calendar/dist/Calendar.css'

const EditLapangan = () => {
  const sessions = [
    {
      id: 1,
      start: '08:00',
      end: '10:00',
    },
    {
      id: 2,
      start: '10:00',
      end: '12:00',
    },
    {
      id: 3,
      start: '12:00',
      end: '14:00',
    },
  ]

  const [image, setImage] = useState('')
  const [addForm, setAddForm] = useState([])

  const addSessionHandler = () => {
    console.log('Added')
  }

  const editSessionHandler = () => {
    console.log('Edited')
  }

  const addFormHandler = () => {
    setAddForm((prev) => [
      ...prev,
      {
        start: '',
        end: '',
      },
    ])
  }

  const imageInputHandler = (e) => {
    if (event.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <>
      <Card>
        <div className={cardClass.label}>
          <div className={cardClass.labelLeft}>
            <h2>Detail Lapangan</h2>
          </div>
          <div className='action-wrapper'>
            <div className='action'></div>
          </div>
        </div>

        <div className={cardClass.form}>
          <div className={cardClass.row}>
            <div className={cardClass.rowItem}>Nama Lapangan</div>
            <input className={cardClass.rowItem} type='text' placeholder='Contoh: "1"' />
          </div>

          <div className={cardClass.row}>
            <div className={cardClass.rowItem}>Harga Per Sesi</div>
            <CurrencyInput className={cardClass.rowItem} prefix='Rp ' placeholder='Contoh: "5000"' />
          </div>

          <div className={cardClass.row}>
            <div className={cardClass.rowItem}>Foto Lapangan</div>
          </div>

          <div className={`${cardClass.row} items-start`}>
            <div className={cardClass.rowItem}>
              <label className={cardClass.imageInput}>
                <input onChange={imageInputHandler} type='file' accept='image/png, image/jpeg, image/jpg' />
                {image ? <img src={image} /> : <h4>Upload Gambar</h4>}
              </label>
            </div>
          </div>

          <div className={cardClass.formButton}>
            <button className='button bold'>Simpan Perubahan</button>
          </div>
        </div>
      </Card>

      <Card>
        <div className={cardClass.label}>
          <div className={cardClass.labelLeft}>
            <h2>Sesi Lapangan</h2>
          </div>
          <div className='action-wrapper'>
            <div className='action'></div>
          </div>
        </div>

        <div>
          {sessions.map((session) => {
            return <SessionForm key={session.id} session={session} onSubmit={editSessionHandler} />
          })}

          {addForm.map((session, index) => {
            return <SessionForm key={index} session={session} onSubmit={addSessionHandler} />
          })}

          <div className={`${cardClass.content} ${cardClass.bottom}`}>
            <div className={`${cardClass.row} bold`}>
              <div className={cardClass.rowLeft}>
                <div className={cardClass.rowItem} onClick={addFormHandler}>
                  + Tambah Sesi
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default EditLapangan
