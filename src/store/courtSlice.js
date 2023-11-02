import { createSlice } from '@reduxjs/toolkit'

const initialCourtState = {
  date: '', // The selected date to filter
  items: [], // An array containing all court data
}

const courtSlice = createSlice({
  name: 'court',
  initialState: initialCourtState,
  reducers: {
    setCourt: (state, action) => {
      state.items = action.payload
    },

    setDate: (state, action) => {
      state.date = action.payload.date
    },
  },
})

export const { setCourt, setDate } = courtSlice.actions
export default courtSlice.reducer
