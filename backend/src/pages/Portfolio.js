import { Button } from '@mui/material'
import React, { useState } from 'react'
import NewPortfolio from '../components/NewPortfolio/NewPortfolio';

const Portfolio = () => {

  const [addPortfolio, setAddPortfolio] = useState(false);

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
    </div>
  )
}

export default Portfolio