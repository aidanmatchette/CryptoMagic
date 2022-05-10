import axios from "axios";
import { CryptoState } from "../Context";

// const {setIsAuthenticated} = CryptoState();
const getCSRFToken = () => {
    let csrfToken
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
        const crumbs = cookie.split('=')
        if (crumbs[0].trim() === 'csrftoken') {
            csrfToken = crumbs[1]
        }
    }
    return csrfToken
}


const tryCatchFetch = async (axiosCall) => {
    try {
        const response = await axiosCall()
        return response.data || {message: 'success'}
    } catch (e) {
        console.error("---- Error ----", e.response ? e.response : e)
        return null
    }
}

const getDashboard = async (currency) => {
    if (!currency) {
        currency = 'usd';
    }
    return await tryCatchFetch(() => axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`))

}
const getTrendingDashboard = async (currency) => {
    if (!currency) {
        currency = 'usd';
    }
    return await tryCatchFetch(() => axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`))

}
const getCoin = async (coinId) => {
    return await tryCatchFetch(() => axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`))

}
const getGraphData = async (coinId, days, currency) => {
    const data = await tryCatchFetch(() => axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`))
    return data.prices
}
export default {
    getDashboard,
    getTrendingDashboard,
    getCoin,
    getGraphData,
    getCSRFToken,

}