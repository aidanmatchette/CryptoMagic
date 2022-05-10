import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../Context';
import dashboardAPI from '../api/dashboardAPI';
import CoinInfo from '../components/CoinInfo/CoinInfo';
import CoinChart from '../components/CoinChart/CoinChart';
import LoadingDashboard from '../components/LoadingDashboard';
import './css/coindetail.css'

const CoinDetail = () => {
  const [coin, setCoin] = useState([])
  
  const { coinId } = useParams();
  const { symbol, currency } = CryptoState();

  useEffect(() => {
    getCoinById()
  }, [])
  
  const getCoinById = async () => {
    const data = await dashboardAPI.getCoin(coinId)
    setCoin(data)
  }

  return (
    <div className='coin-detail-container'>
      <CoinInfo coin={coin} />
      {coin.id ? <CoinChart coin={coin} /> : <LoadingDashboard /> }
    </div>
  )
}

export default CoinDetail