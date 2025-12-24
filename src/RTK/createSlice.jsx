import { createSlice } from "@reduxjs/toolkit";

const initialState = {wishList:{},cart:{}}
export const ecom = createSlice({
    name:'ecom',
    initialState: initialState,
    reducers:{
        setWishlist : (state,action)=>{
            state.wishList[action.payload.id] = action.payload
        },
        setCart : (state,action)=>{
            state.cart[action.payload.id] = action.payload
        }
    }
})

export const {setWishlist,setCart} = ecom.actions;


