import axios from "axios";

const getDashboard = async (currency) => {
    if (!currency) {
        currency = 'usd';
    }
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=35&page=1&sparkline=false`)

        return response.data
    } catch (error) {
        console.log(error)
        alert('There was an error during the request.')
    }
}
const getTrendingDashboard = async (currency) => {
    if (!currency) {
        currency = 'usd';
    }
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        alert('There was an error during the request.')
    }
}
const getCoin = async (coinId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        return response.data
    } catch (error) {
        console.log(error)
        alert('There was an error during the request')
    }
}
export default {
    getDashboard,
    getTrendingDashboard,
    getCoin
}