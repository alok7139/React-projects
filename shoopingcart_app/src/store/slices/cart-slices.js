// createslice
// initialize initial state
// slice -> name , mention initial state ,actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
         addcart(state,action){
            console.log(action)
            state.push(action.payload)
         },
         removecart(state,action){
            return state.filter(item => item.id !== action.payload)
         }
    }
})


export const {addcart , removecart} = cartSlice.actions;

export default cartSlice.reducer;