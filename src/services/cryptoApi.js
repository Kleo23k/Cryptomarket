import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': import.meta.env.VITE_COINRANKING_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseURL = "https://coinranking1.p.rapidapi.com"


export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({
        baseUrl:baseURL,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', cryptoApiHeaders['X-RapidAPI-Key']);
            headers.set('X-RapidAPI-Host', cryptoApiHeaders['X-RapidAPI-Host']);
            return headers;
        },
    }),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>`/coins?limit=${count}`
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>`/coin/${coinId}`
        }),
        getCryptoHistory:builder.query({
            query:({coinId,timeperiod})=>`coin/${coinId}/history?timePeriod=${timeperiod}`
        }),
    })
})

export const {useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi