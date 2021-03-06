import React, { useState } from 'react'
import { CryptoState } from '../../Context'
import './coininfo.css'
import parse from 'html-react-parser'
import RedditIcon from '@mui/icons-material/Reddit';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddCoin from '../AddCoin/AddCoin';
import { Tooltip } from '@mui/material';

const CoinInfo = ({coin}) => {
    const {symbol, currency, isAuthenticated} = CryptoState();

    const [isAdded, setIsAdded] = useState(false)

    const homepage_link = coin.links?.homepage[0]
    const forum_link = coin.links?.official_forum_url[0] 
    const reddit_link = coin.links?.subreddit_url 

    const hrChange = coin.market_data?.market_cap_change_percentage_24h.toFixed(2)

    const addToPortfolio = async () =>{
        console.log('first test')
    }



  return (
    <div className='coin-info-container'>
        <div className='coin-info-start'>
            <h1 className='coin-info-name'>{coin.name}</h1>
            <img className='coin-info-image' src={coin.image?.large} />
        </div>
        <div className='coin-info-data'>
            <div className='coin-info-data-market'>
                <h1 className='coin-info-headers coin-info-market'>Market Cap</h1>
                <h3 className='coin-info-market-cap'>{symbol} {coin.market_data?.market_cap[currency].toLocaleString()}</h3>
            </div>
            <div className='coin-info-data-curr-price'>
                <h1 className='coin-info-headers coin-info-curr'>Current Price</h1>
                <h3 className='coin-info-curr-price'>{symbol} {coin.market_data?.current_price[currency].toLocaleString()}</h3>
            </div>
            <div className='coin-info-data-percent-change'>
                <h1 className='coin-info-headers coin-info-percent-change'>24 Hr Change</h1>
                {hrChange > 0 
                    ? <h3 className='coin-info-percent-change positve'>{hrChange}%</h3>
                    : <h3 className='coin-info-percent-change negative'>{hrChange}%</h3>}
            </div>
        </div>
        <div className='coin-info-links'>
            {homepage_link && <a target='_blank' href={homepage_link}><HomeRoundedIcon sx={{color: 'white', fontSize: 60}}></HomeRoundedIcon></a>}
            {forum_link && <a target='_blank' href={forum_link}><ForumRoundedIcon sx={{color: 'white', fontSize: 60}}></ForumRoundedIcon></a>}
            {reddit_link && <a target='_blank' href={reddit_link}><RedditIcon sx={{color: 'white', fontSize: 60}}></RedditIcon></a>}
            {isAuthenticated && <Tooltip disableFocusListener 
                disableTouchListener title="Add to a portfolio">
                <AddRoundedIcon size='large'
                variant="contained" onClick={() => setIsAdded(true)}
                sx={{color: 'purple', ":hover": {color: '#b93dfc', cursor: 'pointer'}, fontSize: 60 }} 
                disableElevation></AddRoundedIcon>
                </Tooltip>}

        </div>
        <div className='coin-info-description'>
            {coin.description?.en && <p>{parse(coin.description?.en)}</p>}
        </div>
        {isAdded && 
            <AddCoin id={coin.id} coinName={coin.name} setIsAdded={setIsAdded}/>
        }
        {/* <AddCoin id={coin.id} setIsAdded={setIsAdded} /> */}

    </div>
  )
}

export default CoinInfo