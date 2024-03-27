import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slice.js'
import cartReducer from './sliceCart.js'
import cartCounterReducer from './sliceCartCounter.js'


export const store = configureStore({
  reducer: {
    searchValue: searchReducer,
    dataCart: cartReducer,
    cartCounter: cartCounterReducer
  },
})
