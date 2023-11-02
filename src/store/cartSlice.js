import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  total_price: 0, // The total price of items in the cart
  items: [], // An array containing individual items in the cart
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const { court_id, court_name, price_per_session, session } = action.payload
      const filteredSessionPayload = {
        session_time_id: session.session_time_id,
        start_time: session.start_time,
        end_time: session.end_time,
      }

      const cartItemIndex = state.items.findIndex((cartItem) => cartItem.court_id === court_id)

      if (cartItemIndex === -1) {
        // If cart item doesn't exist, create a new cart item
        state.items.push({
          court_id,
          court_name,
          price_per_session,
          sessions: [filteredSessionPayload],
        })
      } else {
        // If cart item exists, add the session to the existing cart item
        state.items[cartItemIndex].sessions.push(filteredSessionPayload)
        state.items[cartItemIndex].sessions.sort((a, b) => a.session_time_id - b.session_time_id)
      }
      state.total_price += price_per_session
    },

    removeFromCart: (state, action) => {
      const { court_id, session_id, price_per_session } = action.payload
      const cartItemIndex = state.items.findIndex((cartItem) => cartItem.court_id === court_id)

      if (cartItemIndex !== -1) {
        // If cart item exists
        const sessionIndexToRemove = state.items[cartItemIndex].sessions.findIndex(
          (session) => session.session_time_id === session_id,
        )

        if (sessionIndexToRemove !== -1) {
          // If session exists
          state.items[cartItemIndex].sessions.splice(sessionIndexToRemove, 1) // Delete session from selected item
          state.total_price -= price_per_session
        }

        if (state.items[cartItemIndex].sessions.length === 0) {
          // If the cart item is empty after removal, remove the cart item itself
          state.items.splice(cartItemIndex, 1)
        }
      }
    },

    removeFromCartRestricted: (state, action) => {
      const { court_id, session_id, price_per_session } = action.payload
      const cartItemIndex = state.items.findIndex((cartItem) => cartItem.court_id === court_id)

      if (cartItemIndex !== -1) {
        // If cart item exists
        const sessionIndexToRemove = state.items[cartItemIndex].sessions.findIndex(
          (session) => session.session_time_id === session_id,
        )

        if (sessionIndexToRemove !== -1) {
          // If session exists
          const selectedSession = state.items[cartItemIndex].sessions[sessionIndexToRemove]
          const lastSessionIndex = state.items[cartItemIndex].sessions.length - 1

          if (
            state.items[cartItemIndex].sessions[0].start_time !== selectedSession.start_time &&
            state.items[cartItemIndex].sessions[lastSessionIndex].end_time !== selectedSession.end_time
          ) {
            throw new Error('Silahkan hapus sesi dari <b>atas/bawah</b>')
          }

          state.items[cartItemIndex].sessions.splice(sessionIndexToRemove, 1) // Delete session from selected item
          state.total_price -= price_per_session
        }

        // If the cart item is empty after removal, remove the cart item itself
        if (state.items[cartItemIndex].sessions.length === 0) {
          state.items.splice(cartItemIndex, 1)
        }
      }
    },

    clearCart: (state, action) => {
      return initialCartState
    },
  },
})

export const { addToCart, removeFromCart, removeFromCartRestricted, clearCart } = cartSlice.actions
export default cartSlice.reducer
