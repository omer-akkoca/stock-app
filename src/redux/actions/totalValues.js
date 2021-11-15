import * as ACTIONS from "./actionTypes"

export const totalValues = (total) =>({
    type : ACTIONS.TOTAL_VALUES,
    payload : total
})

export const calculateTotalValues = (stocks) =>{
    return (dispatch)=>{
        const values = {
            total_worth : 0,
            total_amount : 0,
            total_price : 0
        }
        stocks.forEach(stock => {
            values.total_amount = values.total_amount + stock.amount
            values.total_price = values.total_price + stock.latestPrice
            values.total_worth = values.total_worth + ( stock.amount * stock.latestPrice )
        })
        dispatch(totalValues(values))
    }
}