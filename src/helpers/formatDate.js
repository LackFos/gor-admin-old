import React from 'react'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    localeMatcher: 'best fit',
  }
  return date.toLocaleDateString('id-ID', options)
}
export default formatDate
