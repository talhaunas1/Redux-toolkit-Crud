import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/RootReducers'


export const store = configureStore({
  reducer: {
    users:userReducer
  },
})