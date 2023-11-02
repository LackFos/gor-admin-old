import Root from './Root'
import Jadwal from './Jadwal'
import Orders from './Orders'
import Login from './Login'
import Lapangan from './Lapangan'
import EditLapangan from './EditLapangan'

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Jadwal />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/lapangan',
        element: <Lapangan />,
      },
      {
        path: '/lapangan/edit',
        element: <EditLapangan />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export default routes
