import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    isCounterShown: true,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    toggle: (state) => {
      state.isCounterShown = !state.isCounterShown;
    },
    increaseBy: (state, action) => {
      state.value += action.payload;
    },
    decreaseBy: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, toggle, increaseBy, decreaseBy } =
  counterSlice.actions;
export default counterSlice.reducer;