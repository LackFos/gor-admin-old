import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import styles from '../../styles/Alert.module.css'

const Overlay = (props) => {
  const stateClass = props.state === 'danger' ? styles.danger : ''

  return (
    <motion.div
      initial={{ x: '-45%', opacity: 0 }}
      animate={{ x: '-50%', opacity: 1 }}
      exit={{ x: '-45%', opacity: 0 }}
      className={`${styles.overlay} ${stateClass}`}
    >
      <div dangerouslySetInnerHTML={{ __html: props.text }} />

      <div className='alert-actions'>
        <button
          className={`${styles.dismiss} button`}
          onClick={props.onDismiss}
        >
          Ok
        </button>
      </div>
    </motion.div>
  )
}

const Alert = (props) => {
  const overlayElement = document.querySelector('#overlay-root')

  return (
    <>
      {createPortal(
        <Overlay
          text={props.text}
          state={props.state ? props.state : ''}
          onDismiss={props.onDismiss}
        >
          {props.children}
        </Overlay>,
        overlayElement,
      )}
    </>
  )
}

export default Alert
