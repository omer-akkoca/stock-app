//API KEY
export const API_KEY = "pk_c147794e7de14287aed1f9c594cdd121"

//URLS
export const HOME = "/"
export const LOGIN = "/login"
export const REGİSTER = "/signup"
export const DASHBOARD = "/dashboard"
export const SEARCH_STOCKS = "https://api.nasdaq.com/api/autocomplete/slookup/10?search="
export const SELECTED_STOCK = (symbol) =>{
    return `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${API_KEY}`
}
export const CORS_APP = "https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc"

//IMAGES
export const HOME_PAGE_URL = "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/09/how-to-make-money-in-stocks.jpg"
export const DOLDUR = "DOLDUR"

//DATE VARIABLES
export const MONTHS = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const GET_NOW = () =>{
    const date = new Date()

    const day = date.getUTCDate() > 10 ? date.getUTCDate() : "0" + date.getDay();
    
    const month = (date.getMonth() + 1) > 10 ? MONTHS[date.getMonth()+1] : MONTHS[date.getMonth()+1];;
    
    const year = date.getFullYear()
    
    const hour = date.getHours() > 10 ? date.getHours() : "0" + date.getHours();
    
    const minute = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();

    return `${day} ${month} ${year}, ${hour}:${minute}`;
}