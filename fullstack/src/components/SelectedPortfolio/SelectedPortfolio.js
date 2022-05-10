import React, { useEffect, useState } from 'react'
import cryptoMagicAPI from '../../api/cryptoAPI'
import dashboardAPI from '../../api/dashboardAPI';
import { CryptoState } from '../../Context';
import Coin from '../Coin/Coin';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Pagination, Tooltip } from '@mui/material';
import './selectedportfolio.css'
import Search from '../Search/Search';

const SelectedPortfolio = ({selectedPortfolio, setSelectedPortfolio}) => {

    const {currency, search, setSearch} = CryptoState();

    const [holdings, setHoldings] = useState([]);
    const [portfolioCoins, setPortfolioCoins] = useState([])
    const [pageNum, setPageNum] = useState(1)


    useEffect(() => {
        setSearch('')
    },[])

    useEffect(() => {
        setPortfolioCoins([])
        if(selectedPortfolio != 'None') {
            getPortfolioHoldings(selectedPortfolio)  
        }
    }, [selectedPortfolio])

    useEffect(() => {
        if(holdings.length > 0) {
            getPortfolioCoins()
        }
    }, [holdings])

    const getPortfolioHoldings = async (portfolioId) => {
        const data = await cryptoMagicAPI.getPortfolioHoldings(portfolioId)
        if (data) {
            setHoldings(data.holdings)
        }
    }
    console.log('holdings',holdings)


    const handlePageChange = (event, value) => {
        setPageNum(value)
        window.scrollTo({
          top: 400,
          left: 400,
          behavior: 'smooth'
        })
      } 

    const getPortfolioCoins = async () => {
        for (let coin of holdings) {
            const data = await dashboardAPI.getCoin(coin.coin_id)
            if (data) {
                setPortfolioCoins((prev) => [...prev, data])
            }
        }
    }


    const handleDelete = async (holdingsIndex) => {
        const data = await cryptoMagicAPI.deleteHoldingById(holdings[holdingsIndex].id)
        if(data) {
            setPortfolioCoins([])

            getPortfolioHoldings(selectedPortfolio)            
        }
    }
    const searchCoins = portfolioCoins.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10).filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
      })

    const filteredCoins = searchCoins?.map((coin,index) => {
        return (
            <div className='selected-portfolio'>
                <div className='portfolio-banner'>
                    <Coin key={`${coin.id}-${index}`} name={coin.name} coinAbbr={coin.symbol} image={coin.image.small} 
                    price={coin.market_data?.current_price[currency]} id={coin.id} market_cap={coin.market_data?.market_cap[currency]} percentChange={coin.market_data?.price_change_percentage_24h_in_currency[currency]}/>
                </div> 
                <div className='delete-btn' >
                    <Tooltip disableFocusListener 
                    disableTouchListener title="Delete from portfolio">
                    <DeleteForeverRoundedIcon size='large'
                    variant="contained" onClick={() => handleDelete(index)}
                    sx={{color: 'purple', ":hover": {color: '#b93dfc', cursor: 'pointer'}, fontSize: 60, alignContent: 'center', display: 'flex', alignItems: 'center'}} 
                    disableElevation></DeleteForeverRoundedIcon>
                    </Tooltip>
                </div>   

            </div>

        )
      })
    return (
        <div>
            <div className='search-portfolio' >
                {selectedPortfolio != 'None' && <Search setSearch={setSearch} variant='primary' />}
            </div>
            <div className='portfolio-coins'>
                {filteredCoins}
                <Pagination sx={{display: 'flex', justifyContent: 'center', width: "100%", height: 60}} 
                size='large' 
                count={(portfolioCoins.length/10).toFixed(0)}
                onChange={handlePageChange}/>
            </div>
        </div>
    )
}

export default SelectedPortfolio