import { configureStore } from "@reduxjs/toolkit";
import { fetchProducts } from "./createApi";
import { ecom } from "./createSlice";

export const store = configureStore({
  reducer: {
    [fetchProducts.reducerPath]: fetchProducts.reducer,
    ecom : ecom.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchProducts.middleware),
});

