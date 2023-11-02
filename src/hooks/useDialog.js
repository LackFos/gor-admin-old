import { useState } from 'react'

const useDialog = () => {
  const [showDialog, setShowDialog] = useState(false)

  const hideDialogHandler = () => {
    setShowDialog(false)
  }

  const showDialogHandler = () => {
    setShowDialog(true)
  }

  return {
    onDialog: showDialog,
    showDialog: showDialogHandler,
    hideDialog: hideDialogHandler,
  }
}

export default useDialog
