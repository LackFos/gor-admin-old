import { NavLink } from 'react-router-dom'
import CalendarIcon from '../../assets/icons/CalendarIcon.jsx'
import CartIcon from '../../assets/icons/CartIcon.jsx'
import CourtIcon from '../../assets/icons/CourtIcon.jsx'

const Aside = () => {
  return (
    <aside className='aside'>
      <ul className='actions'>
        <li className='action-item'>
          <NavLink className='action-link' to='/'>
            <CalendarIcon />
            <span className='action-text'>Jadwal</span>
          </NavLink>
        </li>
        <li className='action-item'>
          <NavLink className='action-link' to='/orders'>
            <CartIcon />
            <span className='action-text'>Orders</span>
          </NavLink>
        </li>
        <li className='action-item'>
          <NavLink className='action-link' to='/lapangan'>
            <CourtIcon />
            <span className='action-text'>Lapangan</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Aside
