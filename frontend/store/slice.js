import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue: (state, action) => { // Записываем значение в хранилище. Значение берем из payload
      state.value = action.payload
    },
  },
})



// Action creators are generated for each case reducer function
export const { setValue } = searchSlice.actions
export default searchSlice.reducer
