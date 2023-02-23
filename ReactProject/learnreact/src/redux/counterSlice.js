import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name :"counter",
    initialState:{
        value:4,
    },
});

export default counterSlice.reducer;