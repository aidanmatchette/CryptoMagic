import React from 'react'
import './coin.css'
import Button from '@mui/material/Button';
import { CryptoState } from '../../Context';
import { Link } from 'react-router-dom';




const Coin = ({name, price, id, coinAbbr, image, market_cap, percentChange }) => {

    const {symbol} = CryptoState();
  return (

    <div className='coin'>
        <Link className='coin-link' to={`/coin/${id}`} >
            <div className='coin-banner'>
                <div className='coin-info'>
                    <img className='coin-image' src={image} alt={`${id}-image`} />
                    <h3 className='coin-name'>{name}</h3>
                    <h3 className='coin-symbol'>{coinAbbr}</h3>
                </div>
                <div className='coin-data'>
                    <h3 className='coin-price'>{symbol}{price.toLocaleString()}</h3>
                    {percentChange > 0
                    ? <h3 className='percent-change positive'>{percentChange.toFixed(2)}%</h3>
                    : <h3 className='percent-change negative'>{percentChange.toFixed(2)}%</h3>
                        }
                    <h3 className='market-cap'>{symbol}{market_cap.toLocaleString()}</h3>
                    {/* {user.is_activ && <Button size='large' 
                        variant="contained" href="#/signup" 
                        sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'} }} 
                        disableElevation>Add to portfolio</Button>} */}

                </div>
            </div>
        </Link>
    </div>
  )
}

export default Coin

