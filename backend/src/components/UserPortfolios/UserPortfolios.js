import { Alert, AlertTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import dashboardAPI from '../../api/dashboardAPI';
import { CryptoState } from '../../Context'
import SelectedPortfolio from '../SelectedPortfolio/SelectedPortfolio';


const UserPortfolios = ({selectedPortfolio, setSelectedPortfolio}) => {
    const {userPortfolios} = CryptoState();
    // const [selectedPortfolio, setSelectedPortfolio] = useState('None')


    
    console.log('----user portfolios----',userPortfolios)

    const portfolioDropdown = userPortfolios?.map((portfolio, index) => {
      return <MenuItem key={`${portfolio.portfolio_name}-${index}`} value={portfolio.id} >{portfolio.portfolio_name}</MenuItem>
      // <MenuItem key={`${portfolio.portfolio_name}-${index}`} value={portfolio.id} >{portfolio.portfolio_name}</MenuItem>
    })

 
    return (
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200, width: 500 }}>
            <InputLabel id="select-standard-label">Select Portfolio</InputLabel>
            <Select
            // sx={{width: 100}}
            labelId="select-standard-label"
            id="select-standard"
            value={selectedPortfolio}
            onChange={(event) => setSelectedPortfolio(event.target.value)}
            label="Portfolios"
            >
              {portfolioDropdown}
            </Select>
          </FormControl>
          <SelectedPortfolio selectedPortfolio={selectedPortfolio} setSelectedPortfolio={setSelectedPortfolio} />
          {selectedPortfolio === 'None' &&       
            <Alert sx={{maxWidth: 1500, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin:'auto'}} severity="info">
              <AlertTitle>Welcome {localStorage.getItem('user')}</AlertTitle>
              Please select a portfolio you would like to view. <strong>check out your coins!</strong>
            </Alert>}
        </div>
    )
}

export default UserPortfolios