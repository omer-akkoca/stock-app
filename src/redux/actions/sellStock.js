import * as ACTIONTYPES from "./actionTypes"
import axios from "axios"
import { SELECTED_STOCK } from "../../components/constants/constants"
import { login } from "./auth"

export const sellStock = (stock) => ({
    type : ACTIONTYPES.SELL_STOCK,
    payload : stock
})

export const resetSellStock = () => ({
    type : ACTIONTYPES.RESET_SELL_STOCK,
    payload : {}
})

export const getSellStockValues = (symbol) =>{
    return (dispatch) =>{
        axios.get(SELECTED_STOCK(symbol))
        .then(resp => {
            dispatch(sellStock(resp.data))
        })
    }
}

export const handleSellStockButton = (user,gotStock,amount) =>{
    return (dispatch) =>{
        const currentStock = user.buyed_stocks.find(stock=> stock.symbol === gotStock.symbol)
        let newUser = {
            ...user,
            cash_balance: user.cash_balance + (gotStock.latestPrice * amount)
        }
        if (currentStock.amount === amount) {
            newUser = {
                ...newUser,
                buyed_stocks: user.buyed_stocks.filter(stock => stock.symbol !== gotStock.symbol)
            }
        }else{
            newUser = {
                ...newUser,
                buyed_stocks: user.buyed_stocks.map(stock => stock.symbol === gotStock.symbol ? {...stock,amount:stock.amount-amount} : stock)
            }
        }
        const users = JSON.parse(localStorage.getItem("users"))
        dispatch(login(newUser))
        localStorage.setItem("users",JSON.stringify(users.map(user=>user.id === newUser.id ? newUser : user))) 
    }
}