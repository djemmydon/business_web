import millify from 'millify'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../../api/coinsApi'
import '../main_scss/coins.scss'

function GetAllCoins ({simplified})  {
    const count = simplified ? 10 : 100
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
    const [crypto, setCrypto]  =  useState([])
    const [searchTerm, setSearchTerm] =useState('')

useEffect(() => {

   
        const filterData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
        setCrypto(filterData)
    }, [cryptosList, searchTerm])
    


    if(isFetching) {
        return (
            <div>
                Loading......
            </div>
        )
    }

    

  return (
   <>
   
 
{!simplified && (
      <div className='search container d-flex '>
                <input type="text" placeholder='Search for cryptos'  onChange={(e) => setSearchTerm(e.target.value)} />
           </div>
   
)}
       <div className='coin_list container'>
   {crypto?.map((item) =>(
<div  className='coin_base ' key={item.uuid}>

<Link to={`/coin/${item.uuid}`}>
    <div className='img_title '>
        <h4>{item.name}</h4>
<img src={item.iconUrl} alt="" />

    </div>

<p>Price: {millify(item.price)}</p>
<p>Market Cap: {millify(item.marketCap)}</p>
<p>Daily Change: {millify(item.change)}</p>
</Link>
</div>

))}

</div>

   </>         
  )
}

export default GetAllCoins