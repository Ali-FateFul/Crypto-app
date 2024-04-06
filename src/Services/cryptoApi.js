const BASE_URL = "https://api.coingecko.com/api/v3" 
const API_KEY = "CG-B2DQj94TVaxEv3hLDXbdGt12"
const getCoinData = (page , currency) => {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&locale=en&x_cg_demo_api_key=${API_KEY}`
}

const searchCoin = query => {
    return `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`
}

const marketChart = coin => {
    return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`
}

export {getCoinData , searchCoin , marketChart}