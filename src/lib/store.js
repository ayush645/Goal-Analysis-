import { configureStore } from '@reduxjs/toolkit'
import goalSlice from './goalSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {goalSlice},
  })
}