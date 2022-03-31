import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaderKey = { 
     'X-BingApis-SDK': 'true',
     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '4ae043dd21mshe5825081cc693cbp1e9ab6jsnbf1165dce964'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com"



const  createRequest = (url) => ({url, headers:cryptoNewsHeaderKey})


export const  cryptoNewsApi = createApi({

    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptosNews: builder.query({
            query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptosNewsQuery }= cryptoNewsApi

// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
//       'X-RapidAPI-Key': '4ae043dd21mshe5825081cc693cbp1e9ab6jsnbf1165dce964'
//     }
//   };