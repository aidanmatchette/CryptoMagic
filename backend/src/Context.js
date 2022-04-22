import React, { createContext, useContext, useEffect, useState } from 'react'
import cryptoMagicAPI from './api/cryptoAPI'

const CryptoMagic = createContext()



const Context = ({children}) => {
    const [currency, setCurrency] = useState('usd')
    const [symbol, setSymbol] = useState('$')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userPortfolios, setUserPortfolios] = useState(null)

    useEffect(() => {
        if (currency === 'jpy') setSymbol('¥');
        else if (currency === 'gbp') setSymbol('£');
        else if (currency === 'eur') setSymbol('€');
        else if (currency === 'usd' || currency === 'cad') setSymbol('$')

    },[currency])

    useEffect(() => {
        if(localStorage.getItem('user_id')) {
            setIsAuthenticated(true)
        }
    }, [])

    useEffect(() => {
        getPortfoliosByUser()
      },[])
    
    const getPortfoliosByUser = async () => {
        const portfolios = await cryptoMagicAPI.listPortfoliosByUser()
        setUserPortfolios(portfolios)
    }

    
  return (
      <CryptoMagic.Provider value={{currency,symbol,setCurrency, isAuthenticated, setIsAuthenticated, userPortfolios, setUserPortfolios}}>
          {children}
      </CryptoMagic.Provider>
  )
}

export default Context;


export const CryptoState = () => {
    return useContext(CryptoMagic)
}