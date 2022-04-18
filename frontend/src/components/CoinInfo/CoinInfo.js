import React from 'react'

const CoinInfo = ({coin}) => {
  return (
    <div>
        <h1 className='coin-info-name'>{coin.name}</h1>
        <img src={coin?.image.large} />

    </div>
  )
}

export default CoinInfo