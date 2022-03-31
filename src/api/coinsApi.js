import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoHeaderKey = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '4ae043dd21mshe5825081cc693cbp1e9ab6jsnbf1165dce964'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"



const  createRequest = (url) => ({url, headers:cryptoHeaderKey})


export const  cryptoApi = createApi({

    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`)
        })
    })
})

export const { useGetCryptosQuery, useGetCryptosDetailsQuery }= cryptoApi

// headers: {
    // method: 'GET',
    // url: 'https://coinranking1.p.rapidapi.com/coins',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': '4ae043dd21mshe5825081cc693cbp1e9ab6jsnbf1165dce964'
//   }