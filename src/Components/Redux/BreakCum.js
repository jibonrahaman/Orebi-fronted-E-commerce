import { createSlice } from '@reduxjs/toolkit'


export const Breakcum = createSlice({
  name: 'Breakcum',
  initialState:{
    currentname:" ",
    previousname:" ",
  },

  reducers: {
    pageName: (state,action) => {
      state.previousname=state.currentname;
      state.currentname=action.payload;
      
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { pageName} = Breakcum.actions

export default Breakcum.reducer