import React from 'react'
import "../../styles/pages/favoriteStocks/favoriteStocks.css"
import { useSelector, useDispatch } from "react-redux"
import { getBuyStockValues } from '../../redux/actions/buyStock'
import BuyStockModal from '../modals/buyStockModal'

export default function FavoriteStocks() {

    const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer)

    const handleBuy = (symbol) =>{
        dispatch(getBuyStockValues(symbol))
    }

    return (
        <div className="favorite-stocks-container">
            <div className="list-favorite-stocks">
                {
                    user.favorite_stocks.map(stock => (
                        <div className="stock" key={stock}>
                            <h1>{stock}</h1>
                            <button 
                                className="buy"
                                onClick={() => handleBuy(stock)}
                            >buy</button>
                        </div>
                    ))
                }
                {user.favorite_stocks.length === 0 ? <h1>Your favorite stock list is empty</h1> : null}
            </div>
            <BuyStockModal/>
        </div>
    )
}
