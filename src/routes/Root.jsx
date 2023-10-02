import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside'
import Header from '../components/Header'
import '../styles/Aside.css'

const Root = () => {
  return (
    <>
      <Header />
      <Aside />
      <main className='main'>
        <Outlet />
      </main>
    </>
  )
}

export default Root
