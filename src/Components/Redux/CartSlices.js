import { createSlice } from "@reduxjs/toolkit";


export const CartSlices = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },

  reducers: {
    addtoCart: (state, action) => {
      if (state.cartItem.length > 0) {
        let arr = [];
        state.cartItem.map((item) => {
          if (item.title == action.payload.title) {
            item.quantity = item.quantity + 1
            arr.push(item.title)
          }
        })
        if (arr.indexOf(action.payload.title) == -1) {
          state.cartItem.push(action.payload)
        }
      }
      else {
        state.cartItem.push(action.payload)
      }
    },
    increment : (state,action)=>{
       state.cartItem.map((item)=>{
        if(item.title === action.payload.title){
          item.quantity = item.quantity + 1
        }
       })
    },
    decrement : (state,action)=>{
     state.cartItem.map((item)=>{
     if(item.title == action.payload.title){
     if(item.quantity > 1){
      item.quantity = item.quantity -1
     }
     }
     })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addtoCart,increment,decrement } = CartSlices.actions

export default CartSlices.reducer