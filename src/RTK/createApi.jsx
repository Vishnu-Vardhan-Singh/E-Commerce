import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchProducts = createApi({
  reducerPath: "fetchProducts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    fetchAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
  }),
  
});

export const { useFetchAllProductsQuery } = fetchProducts;
