import { createPortal } from 'react-dom'
import dialogClass from '../../styles/Dialog.module.css'
import { motion } from 'framer-motion'

const Backdrop = (props) => {
  return <div className={dialogClass.backdrop} onClick={props.onCancel}></div>
}

const Overlay = (props) => {
  const stateClass = props.state === 'danger' ? dialogClass.danger : ''

  return (
    <motion.div
      initial={{ x: '-50%', y: '-55%', opacity: 0 }}
      animate={{ x: '-50%', y: '-50%', opacity: 1 }}
      exit={{ x: '-50%', y: '-55%', opacity: 0 }}
      transition={{ duration: 0.2, type: 'spring' }}
      className={`${dialogClass.overlay} ${stateClass}`}
    >
      <div>{props.children}</div>
    </motion.div>
  )
}

const Dialog = (props) => {
  const backdropElement = document.querySelector('#backdrop-root')
  const overlayElement = document.querySelector('#overlay-root')

  return (
    <>
      {createPortal(<Backdrop onCancel={props.onCancel} />, backdropElement)}
      {createPortal(
        <Overlay state={props.state} onCancel={props.onCancel} className={props.className}>
          {props.children}
        </Overlay>,
        overlayElement,
      )}
    </>
  )
}

export default Dialog
