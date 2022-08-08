import { createSlice } from '@reduxjs/toolkit'
import { handleNewDate } from '../utils/dates'

const initialState = {
  value: handleNewDate(new Date()),
}

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
      console.log(action)
    },
  },
})

// Action creators are generated for each case reducer function
export const { set } = dateSlice.actions

export const dateValue = (state) => state.date.value;

export default dateSlice.reducer