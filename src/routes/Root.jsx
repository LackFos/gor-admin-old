import { Outlet } from 'react-router-dom'

import Aside from '../components/Layout/Aside'
import Header from '../components/Layout/Header'

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
