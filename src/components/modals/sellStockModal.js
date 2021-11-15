import React, { useState } from 'react'
import "../../styles/modals/modals.css"
import SellStockButton from '../cta/sellStockButton'
import { useSelector, useDispatch } from "react-redux"
import { resetSellStock } from "../../redux/actions/sellStock"
import AddDeletefavoriteStock from '../containers/addDeletefavoriteStock'

function SellStockModal() {
    
    const dispatch = useDispatch()

    const sellStock = useSelector(state => state.sellStockReducer)

    const [amount, setAmount] = useState(1)

    const [error, setError] = useState("")

    const handleCloseModal = () =>{
        dispatch(resetSellStock())
        setAmount(1)
    }

    return (
        sellStock.symbol ?
        (
            <div className="buy-sell-stock-modal">
                <div className="content">
                    <AddDeletefavoriteStock symbol={sellStock.symbol}/>
                    <i 
                        className="fas fa-times close-modal"
                        onClick={handleCloseModal}
                    />
                    <h1>{sellStock.companyName} - {sellStock.symbol}</h1>
                    <h2>Price : {sellStock.latestPrice}</h2>
                    <h2 className="amount">
                        Amount : 
                        <i 
                            className="fas fa-plus"
                            onClick={()=>setAmount(amount + 1)}
                        />
                        {amount}
                        <i 
                            className="fas fa-minus"
                            onClick={()=>setAmount(amount !== 1 ? amount - 1 : 1)}
                        />
                    </h2>
                    {error && <div className="error">{error}</div>}
                    <SellStockButton values={{setError,amount}}/>
                </div>
            </div> 
        ) : null
    )
}

export default SellStockModal;