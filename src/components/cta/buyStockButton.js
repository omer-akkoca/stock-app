import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { handleBuyStockButton } from '../../redux/actions/buyStock'

function BuyStockButton({values}) {

    const { amount, setError } = values

    const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer)

    const buyStock = useSelector(state => state.buyStockReducer)

    const handleClick = () =>{
        if (amount * buyStock.latestPrice > user.cash_balance) {
            setError("You don't have enough money to buy these stocks.")
            resetError()
        }else if(!(buyStock.latestPrice % 1 === 0)) {
            setError("You can only buy stocks whose price is an integer.")
            resetError()
        }else{
            dispatch(handleBuyStockButton(user,buyStock,amount))
        }
    }

    const resetError = () =>{
        try {
            setTimeout(() => {
                setError("")
            }, 2500)
        } catch (error){}
    }

    return (
        <button
            disabled={!(buyStock.latestPrice)}
            onClick={handleClick}
        >
            Buy
        </button>
    )
}

export default BuyStockButton;