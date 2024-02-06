import { configureStore } from '@reduxjs/toolkit'
import BreakCum from './BreakCum'
import CartSlices from './CartSlices'
export const store = configureStore({
  reducer: {
    BreakCum:BreakCum,
    cart:CartSlices,
  },
})