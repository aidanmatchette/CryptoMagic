import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../Context';
import dashboardAPI from '../api/dashboardAPI';
import CoinInfo from '../components/CoinInfo/CoinInfo';

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
  console.log(coin)
  return (
    <div>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinDetail