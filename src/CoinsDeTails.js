import millify from 'millify'
import React from 'react'
import {  useParams } from 'react-router-dom'
import { useGetCryptosDetailsQuery } from './api/coinsApi'
import  './coin-details.scss'
import HTMLReactParser from 'html-react-parser'
 
const CoinsDeTails = () => {
    const {uuid} = useParams()
    const {data: fetchDetails, isFetching} =  useGetCryptosDetailsQuery(uuid)
   
    console.log(fetchDetails?.data?.coin)


    if(isFetching) return <div>
      Loading...
    </div>


  return (
    <div>

<div className="container-fluid my_header ">


 

<div className=" coin_header cointainer px-5 py-6">

<div className=" image_side py-2"
             data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay='200'>
            
            <img className='coin_image' src={fetchDetails?.data?.coin?.iconUrl} alt="" />
               
            </div>
    <div className=" text_side">
    <div className="text_head"
    data-aos="fade-up"
    data-aos-duration="1000"
    >
        <h5>{fetchDetails?.data?.coin?.symbol}</h5>
    </div>

    <div className="main_content"  >
        <h1  data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay='100'
    >{fetchDetails?.data?.coin?.name}</h1>
   

        <div className="button_side"
          data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay='250'
        >
        <p>Price: ${millify(fetchDetails?.data?.coin?.btcPrice)}</p>
          <p>Change: {millify(fetchDetails?.data?.coin?.change)}</p>      
       
          <p>Rank: {fetchDetails?.data?.coin?.rank}</p>      
             
            </div>
            </div>

        
            <div
        data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay='200'
    className=''
        >{HTMLReactParser(fetchDetails?.data?.coin?.description)} </div>
    </div>

 
</div>
</div>

        

    </div>
  )
}

export default CoinsDeTails