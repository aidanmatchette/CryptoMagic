import { Container, Typography } from '@mui/material'
import React from 'react'
import './carousell.css'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { CryptoState } from '../../Context'

const mediaLimit = {
    0: {
        items: 2,
    },
    1024: {
        items: 4,
    }
}

const Carousell = ({trendingCoins}) => {
    const {symbol} = CryptoState();
    const styles = {
        imageContainer: {
            height:500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }
    }
    const trendingItems = trendingCoins.map(coin => {
        let percentChange = coin.market_cap_change_percentage_24h.toFixed(2)
        console.log(percentChange)
        return(
            <Link className='link' to={`/coin/${coin.id}`}>
                <img src={coin.image} height='70px' />
                <span className='alice-symbol'>{coin.symbol}
                    &nbsp;
                   {percentChange > 0 ? <span className='percent positive'>{percentChange}</span> : <span className='percent negative'>{percentChange}</span>} 
                </span> 
                <span className='price'>{symbol}{coin.current_price}</span>
            </Link>
        )
    })
  return (
    <div className='top'>
        <Container style={styles.imageContainer}>
            <div className='carousell-text'>
                <div className='text-heading'>
                    <h1 className='carousell-header'>CryptoMagic</h1>
                    <h4 className='subheader'>Check out these trending coins!</h4>
                </div>
                <div></div>
            </div>
            <div className='alice'>
                <AliceCarousel mouseTracking infinite 
                    autoPlayInterval={1000}
                    animationDuration={1100} 
                    disableDotsControls 
                    disableButtonsControls
                    responsive={mediaLimit} 
                    items={trendingItems}
                    autoPlay/>

            </div>
        </Container>
    </div>
  )
}

export default Carousell

