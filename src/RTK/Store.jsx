import { configureStore } from "@reduxjs/toolkit";
import { fetchProducts } from "./createApi";
import { ecom } from "./createSlice";
import { cart } from "./cartSlice";

export const store = configureStore({
  reducer: {
   [fetchProducts.reducerPath]: fetchProducts.reducer,
    ecom : ecom.reducer,
    cart: cart.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchProducts.middleware),
});

