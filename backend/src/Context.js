import React, { createContext, useContext, useEffect, useState } from 'react'

const CryptoMagic = createContext()

const Context = ({children}) => {
    const [currency, setCurrency] = useState('usd')
    const [symbol, setSymbol] = useState('$')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (currency === 'jpy') setSymbol('¥');
        else if (currency === 'gbp') setSymbol('£');
        else if (currency === 'eur') setSymbol('€');
        else if (currency === 'usd' || currency === 'cad') setSymbol('$')

    },[currency])
  return (
      <CryptoMagic.Provider value={{currency,symbol,setCurrency, isAuthenticated, setIsAuthenticated}}>
          {children}
      </CryptoMagic.Provider>
  )
}

export default Context;

export const CryptoState = () => {
    return useContext(CryptoMagic)
}