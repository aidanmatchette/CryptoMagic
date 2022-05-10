import { Sledding } from '@mui/icons-material';
import { Alert, Button, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import cryptoMagicAPI from '../api/cryptoAPI';
import NewPortfolio from '../components/NewPortfolio/NewPortfolio';
import UserPortfolios from '../components/UserPortfolios/UserPortfolios';
import { CryptoState } from '../Context';
import './css/portfolio.css'

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [addPortfolio, setAddPortfolio] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState('None') 
  const {userPortfolios, setUserPortfolios} = CryptoState();

  const getPortfolioHoldings = async () => {
    const data = await cryptoMagicAPI.getPortfolioHoldings(1)
    if(data) {
      console.log(data);
    }
  }
  console.log(userPortfolios)
  const handleAddPortfolioClick = () => {
    setAddPortfolio(true)
  }

  const handleDeletePortfolioClick = async (portfolio) => {
    console.log('delete this portfolio', portfolio)
    const data = await cryptoMagicAPI.deletePortfolioById(portfolio)
    if (data) {
      
      setOpen(true)
    }
  }
  const handleClose = () => {
    window.location.reload()
  }

  return (
    <div>
      <div className='option-section'>

          { addPortfolio 
            ?<NewPortfolio setAddPortfolio={setAddPortfolio}/>
            : <Button size='large' variant="contained" 
            sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'}, display: 'flex'}} 
            disableElevation onClick={handleAddPortfolioClick}>
            Add a Portfolio</Button> 
          }

          {selectedPortfolio != 'None' && <Button size='large' variant="contained" 
            sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'}, display: 'flex'}} 
            disableElevation onClick={() => handleDeletePortfolioClick(selectedPortfolio)}>
            Delete a Portfolio</Button> }


      </div>

        <UserPortfolios selectedPortfolio={selectedPortfolio} setSelectedPortfolio={setSelectedPortfolio} />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            You have successfully deleted a portfolio!
          </Alert>
        </Snackbar>

    </div>
  )
}

export default Portfolio