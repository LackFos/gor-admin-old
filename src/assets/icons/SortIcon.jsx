import React from 'react'
import styles from '../../styles/OrdersList.module.css'

const SortIcon = () => {
  return (
    <svg
      className={`${styles.icon} icon`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.8398 20.1641V6.54639'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.9173 16.0684L16.8395 20.1651L12.7617 16.0684'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.91211 3.83301V17.4508'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.83398 7.92919L6.91175 3.83252L10.9896 7.92919'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default SortIcon
