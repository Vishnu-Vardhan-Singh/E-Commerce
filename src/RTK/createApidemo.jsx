import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const store = createApi({
    reducerPath:'store',
    baseQuery:fetchBaseQuery({
        baseUrl:'www.example.com'
    }),
    tagTypes:'demotag',
    endpoints:(builder)=>({
        home:builder.query({
            query:()=>'/home',
            providesTags:'demotags'

        }),
        
    }),

})