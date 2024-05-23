import { createSlice } from "@reduxjs/toolkit";


export const CartSlices = createSlice({
  name: 'cart',
  initialState: {
    cartItem: localStorage.getItem("addtoCart") ? JSON.parse(localStorage.getItem("addtoCart")) : [],
  },

  reducers:{
    addtoCart: (state, action) =>{
      const finds = state.cartItem.findIndex((item)=> item._id === action.payload._id)
      if(finds === -1){
        state.cartItem.push(action.payload)
        localStorage.setItem("addtoCart", JSON.stringify(state.cartItem));
      }else{
        console.log("Item already exist add to cart");
      }
     
    },
    removeItem : (state,action) =>{
    state.cartItem.map((item,index)=>{
      if(item._id === action.payload._id){
       state.cartItem.splice(index,1);
       localStorage.setItem("addtoCart", JSON.stringify(state.cartItem));
      }
    })
    }
  }
  // reducers: {
  //   addtoCart: (state, action) => {
  //     if (state.cartItem.length > 0) {
  //       let arr = [];
  //       state.cartItem.map((item) => {
  //         if (item.title == action.payload.title) {
  //           item.quantity = item.quantity + 1
  //           arr.push(item.title)
  //         }
  //       })
  //       if (arr.indexOf(action.payload.title) == -1) {
  //         state.cartItem.push(action.payload)
  //       }
  //     }
  //     else {
  //       state.cartItem.push(action.payload)
  //     }
  //   },
  //   increment : (state,action)=>{
  //      state.cartItem.map((item)=>{
  //       if(item.title === action.payload.title){
  //         item.quantity = item.quantity + 1
  //       }
  //      })
  //   },
  //   decrement : (state,action)=>{
  //    state.cartItem.map((item)=>{
  //    if(item.title == action.payload.title){
  //    if(item.quantity > 1){
  //     item.quantity = item.quantity -1
  //    }
  //    }
  //    })
  //   },
  //   removeItem : (state,action)=>{
  //   state.cartItem.map((item,index)=>{
  //     if(item.title == action.payload.title){
  //       // console.log(index);
  //       state.cartItem.splice(index,1)
  //     }
  //   })
  //   }

  // }
})

// Action creators are generated for each case reducer function
export const { addtoCart,removeItem} = CartSlices.actions

export default CartSlices.reducer