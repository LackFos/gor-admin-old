import React from 'react'
import formatTime from '../../helpers/formatTime'
import formatDate from '../../helpers/formatDate'
import styles from './OrdersDetail.module.css'
import dialogClass from '../../styles/Dialog.module.css'
import { formatRupiah } from '../../helpers/currencyHelper'

const OrdersDetail = ({ props, selectedItem }) => {
  if (!selectedItem) return null
  return (
    <>
      <div className={styles.container}>
        <div className={styles.label}>
          <h1 className={styles.header}>GORKITA</h1>
          <div>
            <p className={styles.deskripsiJam}>{formatTime(selectedItem.createdAt)}</p>
            <p className={styles.faded}>{selectedItem.invoice}</p>
          </div>
        </div>
        <div>
          <ul className={styles.list}>
            <p className={styles.deskripsi}>Detail Transaksi</p>
            <li className={styles.item}>
              <span className={styles.title}>Nama Pelanggan</span>
              <span className={styles.results}>{selectedItem.guest_name}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.title}>Tanggal</span>
              <span className={styles.results}>{formatDate(selectedItem.date)}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.titlejadwal}>Jadwal</span>
              <span className={styles.resultsjadwal}>{selectedItem.order_details[0].session}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.title}>Lapangan</span>
              <span className={styles.results}>{selectedItem.lapangan}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.title}>{selectedItem.tipeLapangan}</span>
              <span className={styles.results}>{formatRupiah(selectedItem.total)}</span>
            </li>
            <li className={styles.itemTotal}>
              <span className={styles.total}>Total</span>
              <span className={styles.resultsTotal}>{formatRupiah(selectedItem.total)}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={dialogClass.actions}>
        <button className={`${dialogClass.close} button no-shadow`} onClick={props.onCancel}>
          Close
        </button>
        <button className={`${dialogClass.confirm} button`} onClick={props.onCancel}>
          Lanjutkan
        </button>
      </div>
    </>
  )
}

export default OrdersDetail
