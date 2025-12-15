import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { build } from "vite";

export const fetchProducts = createApi({
    reducerPath:'fetchProducts',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: [fetchProducts],


  endpoints: (build) => ({
    fetchAllProducts: build.query({
      query: () => "/products",
      providesTags: [fetchProducts],
    }),
  }),
});
