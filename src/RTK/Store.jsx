import { configureStore } from "@reduxjs/toolkit";
import { fetchProducts } from "./createApi";

const store = configureStore({
  reducer: {
    [fetchProducts.reducerPath]: fetchProducts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchProducts.middleware),
});
