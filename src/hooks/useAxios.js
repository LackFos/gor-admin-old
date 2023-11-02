import axios from 'axios'
import { useState, useCallback } from 'react'
import { useCookies } from 'react-cookie'

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cookies, setCookies] = useCookies()

  const bearerToken = cookies.auth_token

  const sendRequest = useCallback(async (config, applyData) => {
    setIsLoading(true)
    setError(null)
    axios({
      method: config.method ?? 'get',
      url: `${import.meta.env.VITE_API_URL}${config.url}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': config.contentType ?? 'application/json',
      },
      data: config.data ?? {},
    })
      .then((response) => {
        const payload = response.data.payload ?? []
        applyData(payload)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    isLoading,
    error,
    sendRequest,
  }
}

export default useAxios
