import { NavLink } from 'react-router-dom'
import CalendarIcon from '../assets/icons/CalendarIcon.jsx'
import CartIcon from '../assets/icons/CartIcon.jsx'

const Aside = () => {
  return (
    <aside className='aside'>
      <ul className='actions'>
        <li className='actions-item'>
          <NavLink className='link' to='/'>
            <CalendarIcon />
            <span>Jadwal</span>
          </NavLink>
        </li>
        <li className='actions-item'>
          <NavLink className='link' to='/orders'>
            <CartIcon />
            <span>Orders</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Aside
