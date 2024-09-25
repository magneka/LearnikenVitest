import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: any) => {
            state.count += 1;
        },
        decrement: (state: any) => {
            state.count -= 1;
        },
        reset: (state: any) => {
            state.count = 0;
        },
        incrementByAmount: (state: any, action: any) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;