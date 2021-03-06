import axios from "axios"
import dashboardAPI from "./dashboardAPI"


const tryCatchFetch = async (axiosCall) => {
    try {
        const response = await axiosCall()
        return response.data || {message: 'success'}
    } catch (e) {
        console.error("---- Error ----", e.response ? e.response : e)
        return null
    }
}

// {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}

const cryptoMagicAPI = {}

cryptoMagicAPI.createPortfolio = async (newPortfolioForm) => {
    return await tryCatchFetch(() => axios.post('/portfolio/', newPortfolioForm, {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}))
}

cryptoMagicAPI.listPortfoliosByUser = async () => {
    return await tryCatchFetch(() => axios.get(`/portfolio/`, null, {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}))
}

cryptoMagicAPI.addCoinToPortfolio = async (addCoinForm) => {
    return await tryCatchFetch(() => axios.post(`/crypto-holdings/`, addCoinForm, {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}))
}
cryptoMagicAPI.getPortfolioHoldings = async (portfolioId) => {
    return await tryCatchFetch(() => axios.get(`/portfolio/${portfolioId}`, null , {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}))
}
cryptoMagicAPI.deleteHoldingById= async (holdingId) => {
    return await tryCatchFetch(() => axios.delete(`/crypto-holdings/${holdingId}`, {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}))
}
cryptoMagicAPI.deletePortfolioById= async (portfolioId) => {
    return await tryCatchFetch(() => axios.delete(`/portfolio/${portfolioId}`, {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}))
}
export default cryptoMagicAPI
