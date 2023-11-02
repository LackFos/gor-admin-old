import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <NavLink className='logo' to=''>
        GOR KITA
      </NavLink>
      <div className='right'></div>
    </header>
  )
}

export default Header
