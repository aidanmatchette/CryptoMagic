import React from 'react'
import { CryptoState } from '../../Context'

const UserPortfolios = () => {
    const {userPortfolios} = CryptoState();

    
    console.log(userPortfolios)

    const eachPortfolio = userPortfolios?.map((portfolio, index) => {
        console.log(portfolio.portfolio_name)
        return(
          <h1 key={`${portfolio.portfolio_name}-${index}`}>{portfolio.portfolio_name}</h1>
        )
      })
    return (
        <div>
            {eachPortfolio}
        </div>
    )
}

export default UserPortfolios