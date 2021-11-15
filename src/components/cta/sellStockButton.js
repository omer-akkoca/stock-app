import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { handleSellStockButton } from '../../redux/actions/sellStock'

function SellStockButton({values}) {

    const { setError, amount } = values

    const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer)

    const sellStock = useSelector(state => state.sellStockReducer)

    const handleClick = () =>{
        const currentSellStock = user.buyed_stocks.find(el => el.symbol === sellStock.symbol)
        if (currentSellStock === undefined) {
            handleError(`You don't have ${sellStock.symbol} token to sell.`)
        }
        else if (amount > currentSellStock.amount) {
            handleError("You dont have enough stocks to sell.")
        }else{
            dispatch(handleSellStockButton(user,sellStock,amount))
        }
    }

    const handleError = (text) =>{ 
        setError(text)
        try {
            setTimeout(() => {
                setError("")
            }, 2500)
        } catch (error){}
    }

    return (
        <button
            onClick={handleClick}
        >
            Sell
        </button>
    )
}

export default SellStockButton;