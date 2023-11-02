import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import styles from '../styles/Login.module.css'
import HideIcon from '../assets/icons/HideIcon'
import ShowIcon from '../assets/icons/ShowIcon'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [login, setLogin] = useState('')
  const [cookies, setCookie] = useCookies(['auth_token'])

  const loginHandleChange = (e) => {
    setUser(e.target.value)
    console.log(user)
  }

  const passwordHandleChange = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const loginHandle = () => {
    setLogin(login)
    console.log(user)
    console.log(password)
  }

  const hidePassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    axios
      .post('http://localhost:3000/login', {
        email: 'example@gmail.com',
        password: 'userpass',
      })
      .then((response) => {
        const token = response.data.payload.token
        console.log(token)
        setCookie('auth_token', token, { path: '/', maxAge: 2 * 24 * 60 * 60 })
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.header}>GOR KITA</h1>
            <div>
              <input
                className={styles.input}
                value={user}
                onChange={loginHandleChange}
                type='text'
                placeholder='User ID'
              />
            </div>
            <div className={styles['input-password']}>
              <input
                className={styles['input-password']}
                value={password}
                onChange={passwordHandleChange}
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              <button onClick={hidePassword} className={styles.showButton}>
                {showPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
            <button className={styles.button} onClick={loginHandle}>
              Masuk
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login

// const setCookie = (name, value, days) => {
//   const date = new Date()
//   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
//   const expires = 'expires=' + date.toUTCString()
//   const cookieOptions = `; expires=${expires}; path=/; secure; samesite=strict`
//   document.cookie = name + '=' + value + '; ' + cookieOptions
//   }
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwOTczZTllM2M3YmQxOTNhNGQxYTFkIiwiZW1haWwiOiJleGFtcGxlQGdtYWlsLmNvbSIsImlhdCI6MTY5ODUwMDQzMCwiZXhwIjoxNjk4NTA3NjMwfQ.bFcQ6xb0t8YNDdbq8i5zvYVq1z0uuVDDzw_LnvH6NEU"
