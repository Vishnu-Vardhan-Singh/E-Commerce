import { createSlice } from "@reduxjs/toolkit";

const initialState = {wishList:{}}
export const ecom = createSlice({
    name:'ecom',
    initialState: initialState,
    reducers:{
        setWishlist : (state,action)=>{
            state.wishList[action.payload.id] = action.payload
        },
        removeWishItem:(state,action)=>{
          delete state.wishList[action.payload]
    }

    }
})

export const {setWishlist,removeWishItem} = ecom.actions;


