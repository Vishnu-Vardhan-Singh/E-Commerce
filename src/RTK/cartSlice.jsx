import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    updateCart: (state, action) => {
      if (Object.hasOwn(state, action.payload.id)) {
        return state;
      } else {
        state[action.payload.id] = { ...action.payload, qty: 1 };
      }
    },
    increaseQty: (state, action) => {
      state[action.payload].qty = ++state[action.payload].qty;
    },
    decreaseQty: (state, action) => {
      if (state[action.payload].qty >1) {
        state[action.payload].qty = --state[action.payload].qty;
      }
    },
  },
});

export const { updateCart, increaseQty,decreaseQty } = cart.actions;
