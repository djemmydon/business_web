import millify from 'millify'
import React from 'react'
import { useGetCryptosQuery } from '../../api/coinsApi'

import '../main_scss/coins.scss'


const GetCoins = ({simplified}) => {
    const count = simplified ? 10 : 100

    const {data, isFetching} = useGetCryptosQuery(count)

    


    if(isFetching) {
        return (
            <div className='coins container'>
                Loading
            </div>
        )
    }
    
  return (
    <section>
            
        <div className='price_change_rank container'>
       
            <div className='coin_flex'>
               
                <span >{millify(data?.data?.stats.total)}</span>
                <p>Total Coins</p>
            </div>
            <div className='coin_flex'>
                
                <span >{millify(data?.data?.stats?.totalExchanges)}</span>
                <p>Total Exchanges</p>
            </div>
            <div className='coin_flex'>
                
                <span>{millify(data?.data?.stats?.totalMarketCap)}</span>
                <p>Total Markets Caps</p>
            </div>
            <div className='coin_flex'>
             
                <span>{millify(data?.data?.stats?.total24hVolume)}</span>
                <p>Total 24th Volumes</p>
            </div>
            
        </div>

        

    </section>
  )
}

export default GetCoins