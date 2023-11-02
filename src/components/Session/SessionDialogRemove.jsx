import Dialog from '../Layout/Dialog'
import dialogClass from '../../styles/Dialog.module.css'

const SessionDialogRemove = (props) => {
  return (
    <Dialog onConfirm={props.onConfirm} onCancel={props.onCancel} state='danger'>
      <h2 className={dialogClass.head}>Peringatan Pembatalan</h2>

      <div className={dialogClass.body}>
        Harap dicatat bahwa jika anda ingin menyewakan ulang slot ini bisa saja tidak tersedia karena telah dibooking
        oleh pengguna lain.
      </div>

      <div className={dialogClass.actions}>
        <button className={`${dialogClass.close} button no-shadow`} onClick={props.onCancel}>
          Close
        </button>
        <button className={`${dialogClass.confirm} button`} onClick={props.onConfirm}>
          Lanjutkan
        </button>
      </div>
    </Dialog>
  )
}

export default SessionDialogRemove
