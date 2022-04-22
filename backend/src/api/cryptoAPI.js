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


const cryptoMagicAPI = {}

cryptoMagicAPI.createPortfolio = async (newPortfolioForm) => {
    return await tryCatchFetch(() => axios.post('/portfolio/', newPortfolioForm, {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}))
}
// {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}}

export default cryptoMagicAPI
