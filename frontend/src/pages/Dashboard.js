import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Search from '../components/Search/Search'
import Coin from '../components/Coin/Coin'
import getDashboard from '../api/dashboardAPI.js'

// main dashboard url, eventualy change to be able to switch market.
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

const Dashboard = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  
  
  useEffect(() => {
    generateCoins()
      
  },[]);


  const generateCoins = async () => {
    const data = await getDashboard()
    setCoins(data ? data : [])
  } 
  console.log(coins)
  const searchCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })
  console.log(searchCoins)
  const filteredCoins = searchCoins.map((coin,index) => {
    return (
      <Coin key={`${coin.id}-${index}`} name={coin.name} coinAbbr={coin.symbol} image={coin.image} price={coin.current_price} id={coin.id} market_cap={coin.market_cap} percentChange={coin.price_change_percentage_24h}/>
    )
  })


  return (
    <div>
      <div className='dashboard-search'>
        <Search setSearch={setSearch} />
      </div>
      {filteredCoins}
    </div>
  )
}

export default Dashboard