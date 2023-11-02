import CheckIcon from '../../assets/icons/CheckIcon'
import CloseIcon from '../../assets/icons/CloseIcon'

const Checkbox = (props) => {
  return (
    <label className='checkbox-label'>
      {props.isDisabled && <CloseIcon />}
      {!props.isDisabled && (
        <>
          <input type='checkbox' onChange={props.onChange} className='checkbox' checked={props.checked} />
          <span className='checkmark'>
            {props.children}
            <CheckIcon />
          </span>
        </>
      )}
      {props.label}
    </label>
  )
}

export default Checkbox
