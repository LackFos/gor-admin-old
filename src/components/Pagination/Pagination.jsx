import React from 'react'
import styles from './Pagination.module.css'
import ChevronIcon from '../../assets/icons/ChevronIcon'

const Pagination = (props) => {
  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.orderButton} ${
          props.currentPage === 1 ? styles.active : ''
        }`}
        onClick={() => props.handlePageChange(1)}
      >
        1
      </button>
      <button
        className={`${styles.orderButton} ${
          props.currentPage === 2 ? styles.active : ''
        }`}
        onClick={() => props.handlePageChange(2)}
      >
        2
      </button>
      {props.currentPage < props.pageNumbers && (
        <button
          className={styles.orderButton}
          onClick={() => props.handlePageChange(props.currentPage + 1)}
        >
          {<ChevronIcon direction='right' />}
        </button>
      )}
      {props.currentPage < props.pageNumbers && (
        <button
          className={styles.orderButton}
          onClick={() => props.handlePageChange(props.pageNumbers)}
        >
          {<ChevronIcon direction='right' />}
        </button>
      )}
    </div>
  )
}

export default Pagination
