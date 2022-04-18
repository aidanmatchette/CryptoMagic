import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './css/dashboard.css'
import Search from '../components/Search/Search'
import Coin from '../components/Coin/Coin'
import dashboardAPI from '../api/dashboardAPI.js'
import Carousell from '../components/Carousell/Carousell'
import { CryptoState } from '../Context'
import { Pagination } from '@mui/material'

// main dashboard url, eventualy change to be able to switch market.
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

const Dashboard = () => {
  const [allCoins, setAllCoins] = useState([])
  const [trendingCoins, setTrendingCoins] = useState([])
  const [search, setSearch] = useState('')
  const [pageNum, setPageNum] = useState(1)
  
  const {currency} = CryptoState();
  
  useEffect(() => {
    generateAllCoins()
    generateTrendingCoins()
      
  },[]);

  useEffect(() => {
    generateAllCoins()
  },[currency])

  const generateTrendingCoins = async () => {
    const data = await dashboardAPI.getTrendingDashboard(currency)
    setTrendingCoins(data ? data : [])
  }

  const generateAllCoins = async () => {
    const data = await dashboardAPI.getDashboard(currency)
    setAllCoins(data ? data : [])
  } 

  const searchCoins = allCoins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  const filteredCoins = searchCoins.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10).map((coin,index) => {
    return (
      <Coin key={`${coin.id}-${index}`} name={coin.name} coinAbbr={coin.symbol} image={coin.image} price={coin.current_price} id={coin.id} market_cap={coin.market_cap} percentChange={coin.price_change_percentage_24h}/>
    )
  })
  const handlePageChange = (event, value) => {
    setPageNum(value)
    window.scrollTo({
      top: 400,
      left: 400,
      behavior: 'smooth'
    })
  } 

  return (
    <div className='dashboard-main'>
      <div className='carousell'>
        <Carousell trendingCoins={trendingCoins} setTrendingCoins={setTrendingCoins} />

      </div>
      <div className='dashboard-search'>
        <Search setSearch={setSearch} />
      </div>
      <div className='coin-banners'>
        {filteredCoins}
      </div>
      <Pagination sx={{display: 'flex', justifyContent: 'center', width: "100%", height: 60}} 
        size='large' 
        count={(allCoins.length/10).toFixed(0)}
        onChange={handlePageChange}/>
    </div>
  )
}

export default Dashboard