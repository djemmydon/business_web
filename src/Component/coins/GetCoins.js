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
            
        <div className='coins container'>
       
            <div className='total_coins'>
                <h5>Total Coins</h5>
                <span >{millify(data?.data?.stats.total)}</span>
            </div>
            <div className='total_coins'>
                <h5>Total Exchanges</h5>
                <span >{millify(data?.data?.stats?.totalExchanges)}</span>
            </div>
            <div className='total_coins'>
                <h5>Total Markets Caps</h5>
                <span>{millify(data?.data?.stats?.totalMarketCap)}</span>
            </div>
            <div className='total_coins'>
                <h5>Total 24th Volumes</h5>
                <span>{millify(data?.data?.stats?.total24hVolume)}</span>
            </div>
            
        </div>

        

    </section>
  )
}

export default GetCoins