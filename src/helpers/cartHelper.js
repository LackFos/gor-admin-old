export const validateCart = (cart) => {
  const isSequential = cart.items.every((cartItem) => {
    const sessions = cartItem.sessions
    return sessions.every((cartSession, index, sessions) => {
      return index === 0 || cartSession.start_time === sessions[index - 1].end_time
    })
  })

  if (!isSequential) {
    throw new Error('Mohon Pilih Sesi Secara Berurutan')
  }
}

export const isSessionOnCart = (cart, slotId, sessionTimeId) => {
  const cartItemIndex = cart.items.findIndex((cartItem) => cartItem.court_id === slotId)
  const isItemOnCart =
    cartItemIndex !== -1 &&
    cart.items[cartItemIndex].sessions.some((cartSession) => cartSession.session_time_id === sessionTimeId)
  return isItemOnCart
}

export const formatCartForAPI = (cart, date) => {
  const orderDetail = cart.items.map((cartItem) => {
    return {
      court_id: cartItem.court_id,
      date,
      session: cartItem.sessions.map((session) => session.session_time_id),
    }
  })

  const requestBody = {
    order_detail: orderDetail,
    name: 'admin',
  }

  return requestBody
}
