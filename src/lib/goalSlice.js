import { createSlice } from '@reduxjs/toolkit';

const goalSlice = createSlice({
  name: 'goal',
  initialState: [false,false,false,false,false]  ,
  reducers: {
    addGoal: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
    trackAll:(state)=>{
      state.fill(true)
    }
  }
});

export const { addGoal,trackAll } = goalSlice.actions;
export default goalSlice.reducer;