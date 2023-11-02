import { useEffect, useState } from 'react'

import useCalendar from '../hooks/useCalendar'
import useDialog from '../hooks/useDialog'
import useAxios from '../hooks/useAxios'

import Card from '../components/Card/Card'
import Dialog from '../components/Layout/Dialog'
import CalendarInput from '../components/Forms/CalendarInput'
import OrdersTable from '../components/Slot/OrdersTable'
import Pagination from '../components/Pagination/Pagination'
import OrdersDetail from '../components/Orders-Details/OrdersDetail'

import cardClass from '../styles/Card.module.css'
import 'react-calendar/dist/Calendar.css'

const Orders = () => {
  // const orders = [
  //   {
  //     id: 1,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Elvis',
  //     session: '08:00 - 10:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A2',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A2 (08:00 - 10:00)',
  //     tanggal: '31 August 2023',
  //     total: 50000,
  //     status: 'Sukses',
  //   },
  //   {
  //     id: 2,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Crendy',
  //     session: '18:00 - 20:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A1',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A1 (18:00 - 20:00)',
  //     tanggal: '31 August 2023',
  //     total: 50000,
  //     status: 'Sukses',
  //   },
  //   {
  //     id: 3,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Elvis',
  //     session: '20:00 - 22:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A3',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A3 (20:00 - 22:00)',
  //     tanggal: '31 August 2023',
  //     total: 50000,
  //     status: 'Sukses',
  //   },
  //   {
  //     id: 4,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Elvis',
  //     session: '10:00 - 12:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A4',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A4 (10:00 - 12:00)',
  //     tanggal: '31 August 2023',
  //     total: 50000,
  //     status: 'Sukses',
  //   },
  //   {
  //     id: 5,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Elvis',
  //     session: '08:00 - 10:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A2',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A2 (08:00 - 10:00)',
  //     tanggal: '1 September 2023',
  //     total: 50000,
  //     status: 'Sukses',
  //   },
  //   {
  //     id: 6,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Elvis',
  //     session: '10:00 - 12:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A2',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A2 (10:00 - 12:00)',
  //     tanggal: '1 September 2023',
  //     total: 50000,
  //     status: 'Sukses',
  //   },
  //   {
  //     id: 7,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Elvis',
  //     session: '18:00 - 20:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A2',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A2 (18:00 - 20:00)',
  //     tanggal: '1 September 2023',
  //     total: 50000,
  //     status: 'Menunggu Pembayaran',
  //   },
  //   {
  //     id: 8,
  //     idTransaksi: 'TRX-U567975-D1694786',
  //     waktuTransaksi: '31 Agu, 08:31 WIB',
  //     namaUser: 'Elvis',
  //     session: '20:00 - 22:00',
  //     venue: 'Elite Badminton',
  //     lapangan: 'A2',
  //     tipeLapangan: 'Lapangan Reguler',
  //     transaksi: 'Pembayaran A2 (20:00 - 22:00)',
  //     tanggal: '1 September 2023',
  //     total: 50000,
  //     status: 'Menunggu Pembayaran',
  //   },
  // ]
  const { isLoading, error, sendRequest } = useAxios()
  const [orders, setOrders] = useState([])
  const [selectedDate, setSelectedDate] = useCalendar()
  const { onDialog, showDialog, hideDialog } = useDialog()
  // const [sortOrder, setSortOrder] = useState('asc')
  // const [currentPage, setCurrentPage] = useState(1)
  // const [selectedItem, setSelectedItem] = useState(null)
  // const itemPerPage = 2

  useEffect(() => {
    const requestBody = {
      startDate: selectedDate,
      endDate: selectedDate,
    }
    sendRequest({ method: 'post', url: '/v1/order/date', data: requestBody }, setOrders)
  }, [selectedDate])

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  const clickItemHandle = (item) => {
    setSelectedItem(item)
    showDialog()
  }

  const sortHandle = () => {
    if (sortOrder === 'asc') {
      // sortOrders('status');
      setSortOrder('desc')
    } else {
      // sortOrders('status');
      setSortOrder('asc')
    }
  }

  // const sortOrders = (sortBy) => {
  //   setCurrentSort(sortBy);
  // };

  // const filteredOrders = selectedDate
  //   ? orders.filter((order) => {
  //       const orderDate = new Date(order.date)
  //       return (
  //         orderDate.getDate() === selectedDate.getDate() &&
  //         orderDate.getMonth() === selectedDate.getMonth() &&
  //         orderDate.getFullYear() === selectedDate.getFullYear()
  //       )
  //     })
  //   : orders

  // const sortedOrders = [...filteredOrders].sort((a, b) => {
  //   return sortOrder === 'asc' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)
  //   // const jamA = a.transaksi.match(/(\d{2}:\d{2})/)[0];
  //   // const jamB = b.transaksi.match(/(\d{2}:\d{2})/)[0];

  //   // const [jamAHours, jamAMinutes] = jamA.split(":");
  //   // const [jamBHours, jamBMinutes] = jamB.split(":");

  //   // const jamAngkaA = parseFloat(jamAHours) + parseFloat(jamAMinutes) / 60;
  //   // const jamAngkaB = parseFloat(jamBHours) + parseFloat(jamBMinutes) / 60;

  //   // return sortOrder === 'asc' ? statusB - statusA : statusA - statusB;
  // })

  // const indexOfLastItem = currentPage * itemPerPage
  // const indexOfFirstItem = indexOfLastItem - itemPerPage
  // const currentItems = sortedOrders.slice(indexOfFirstItem, indexOfLastItem)
  // const pageNumbers = Math.ceil(sortedOrders.length / itemPerPage)

  return (
    <>
      <Card>
        <div className={cardClass.label}>
          <div className={cardClass.labelLeft}>
            <h2>Orders</h2>
          </div>

          <CalendarInput
            value={selectedDate}
            onChange={setSelectedDate}
            minDate={0}
            maxDate={7}
            errorText='Periode maksimal yang dapat dipilih 7 hari'
          />
        </div>

        <OrdersTable sortedOrders={orders} sortHandle={sortHandle} handleRowClick={clickItemHandle} orders={orders} />
      </Card>
      {/* <Pagination currentPage={currentPage} pageNumbers={pageNumbers} handlePageChange={handlePageChange} /> */}

      {onDialog && (
        <Dialog onCancel={hideDialog} onConfirm={hideDialog}>
          <OrdersDetail selectedItem={selectedItem} onCancel={hideDialog} />
        </Dialog>
      )}
    </>
  )
}

export default Orders
