import { createSlice } from "@reduxjs/toolkit";

const initialState =[];
const DilerSlice = createSlice({
    name : 'dilar',
    initialState,
    reducers : {
        
    }
})

export const {add, remove} = cartSlice.actions;
export default DilerSlice.reducer;