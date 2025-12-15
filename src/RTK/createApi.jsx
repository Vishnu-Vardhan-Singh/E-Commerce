import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { build } from "vite";

export const fetchProducts = createApi({
    reducerPath:'fetchProducts',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: [fetchProducts],


  endpoints: (builder) => ({
    fetchAllProducts: builder.query({
      query: () => "/products",
      providesTags: [fetchProducts],
    }),
  }),
});
