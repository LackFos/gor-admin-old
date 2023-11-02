const ChevronIcon = (props) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      stroke='#343434'
      xmlns='http://www.w3.org/2000/svg'
      className={props.direction}
    >
      <path
        d='M27 16.5L20 23.5L13 16.5'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ChevronIcon
