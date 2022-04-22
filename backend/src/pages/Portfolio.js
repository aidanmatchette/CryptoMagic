import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import cryptoMagicAPI from '../api/cryptoAPI';
import NewPortfolio from '../components/NewPortfolio/NewPortfolio';
import UserPortfolios from '../components/UserPortfolios/UserPortfolios';
import { CryptoState } from '../Context';


const Portfolio = () => {

  const [addPortfolio, setAddPortfolio] = useState(false);
  
  const {userPortfolios, setUserPortfolios} = CryptoState();
  

  const handleAddPortfolioClick = () => {
    setAddPortfolio(true)
  }



  return (
    <div>
      <h1></h1>
      { addPortfolio 
        ?<NewPortfolio setAddPortfolio={setAddPortfolio}/>
        : <Button size='large' variant="contained" 
        sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'} }} 
        disableElevation onClick={handleAddPortfolioClick}>
        Add a Portfolio</Button> 
      }
      <UserPortfolios  />
    </div>
  )
}

export default Portfolio