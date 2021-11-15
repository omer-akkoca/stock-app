import * as ACTIONS from "./actionTypes"
import { SELECTED_STOCK } from "../../components/constants/constants"
import axios from "axios"
import { calculateTotalValues } from "./totalValues"

export const buyedStocksTotal = (total) =>({
    type : ACTIONS.BUYED_STOCKS_TOTAL,
    payload : total
})

export const handlebuyedStocksTotal = (user) =>{
    return (dispatch)=>{
        const buyed_stocks = user.buyed_stocks
        let totalValues = []
        if (buyed_stocks.length > 0) {
            buyed_stocks.forEach( async (el) => {
                await axios.get(SELECTED_STOCK(el.symbol))
                .then((resp)=>{
                    const stock = resp.data
                    const newElement = {
                        amount: el.amount,
                        symbol: stock.symbol,
                        name : stock.companyName,
                        latestPrice : stock.latestPrice
                    }
                    totalValues = [...totalValues,newElement]
                    dispatch(buyedStocksTotal(totalValues))
                    dispatch(calculateTotalValues(totalValues))
                })
            })
        }else{
            dispatch(buyedStocksTotal([]))
        }
    }
}