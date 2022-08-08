import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: 'HOME',
}

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload
      console.log(action)
    },
  },
})

// Action creators are generated for each case reducer function
export const { change } = titleSlice.actions

export const titleValue = (state) => state.title.value;

export default titleSlice.reducer