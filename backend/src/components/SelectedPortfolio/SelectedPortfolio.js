import React, { useEffect, useState } from 'react'
import cryptoMagicAPI from '../../api/cryptoAPI'


const SelectedPortfolio = ({selectedPortfolio}) => {

    const [holdings, setHoldings] = useState([]);

    useEffect(() => {

        getPortfolioHoldings(selectedPortfolio)
    }, [selectedPortfolio])

    const getPortfolioHoldings = async (portfolioId) => {
        const data = await cryptoMagicAPI.getPortfolioHoldings(portfolioId)
        if (data) {
            console.log('dataaaaa', data)
            setHoldings(data.holdings)
        }
    }
    console.log('holdings',holdings)

    return (
        <div>
            SelectedPortfolio page
        </div>
    )
}

export default SelectedPortfolio