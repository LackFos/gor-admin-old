const formatTime = (createdAt) => {
  const date = new Date(createdAt)

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']

  const month = months[date.getMonth()]
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const formattedTime = `${day} ${month}, ${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')} WIB`

  return formattedTime
}

// Contoh penggunaan
const createdAt = '2023-10-30T16:48:10.629Z'
const formattedTime = formatTime(createdAt)

export default formatTime
