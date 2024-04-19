import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        showToggle : false 
    },
    reducers : {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        toggle : (state) => {
            state.showToggle = !state.showToggle
        },
        increaseBy10 : (state, action) => {
            state.value -= action.payload
        },
    }
});

export const {increment, decrement, toggle, increaseBy10} = counterSlice.actions;
export default counterSlice.reducer;
