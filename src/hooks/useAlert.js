import { useEffect, useState } from 'react'

const useAlert = () => {
  const [alertText, setAlertText] = useState(null)
  const alertDuration = 4000

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlertText(null)
    }, alertDuration)
    return () => clearTimeout(timer)
  }, [alertText])

  const setAlertHandler = (text) => {
    setAlertText(text)
  }

  const dismissAlertHandler = () => {
    setAlertText(false)
  }

  return {
    onAlert: alertText,
    setAlert: setAlertHandler,
    dismissAlert: dismissAlertHandler,
  }
}

export default useAlert
