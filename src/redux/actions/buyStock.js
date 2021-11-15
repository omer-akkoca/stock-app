import * as ACTIONTYPES from "./actionTypes"
import axios from "axios"
import { SELECTED_STOCK } from "../../components/constants/constants"
import { login } from "./auth"

export const buyStock = (stock) => ({
    type : ACTIONTYPES.BUY_STOCK,
    payload : stock
})

export const resetBuyStock = () => ({
    type : ACTIONTYPES.RESET_BUY_STOCK,
    payload : {}
})

export const getBuyStockValues = (symbol) =>{
    return (dispatch) =>{
        axios.get(SELECTED_STOCK(symbol))
        .then(resp => {
            dispatch(buyStock(resp.data))
        })
        .catch((err) =>{
            const errText = new Error(err)
            dispatch(buyStock({
                error : errText.message
            }))
        })
    }
}

export const handleBuyStockButton = (user,gotStock,amount) =>{
    return (dispatch) =>{
        const control = user.buyed_stocks.find(el => el.symbol === gotStock.symbol)
        let newUser = {
            ...user,
            cash_balance: user.cash_balance - (amount * gotStock.latestPrice)
        }
        if (control !== undefined) {
            newUser = {
                ...newUser,
                buyed_stocks: user.buyed_stocks.map(el => el.symbol === gotStock.symbol ? {...el, amount: el.amount+amount} : el)
            }
        }else{
            newUser = {
                ...newUser,
                buyed_stocks: [...user.buyed_stocks,{symbol: gotStock.symbol, amount}]
            }
        }
        dispatch(login(newUser))
    }
}