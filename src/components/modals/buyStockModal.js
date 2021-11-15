import React, { useState } from 'react'
import "../../styles/modals/modals.css"
import { useSelector, useDispatch } from 'react-redux'
import { resetBuyStock } from '../../redux/actions/buyStock'
import BuyStockButton from '../cta/buyStockButton'
import AddDeletefavoriteStock from '../containers/addDeletefavoriteStock'

function BuyStockModal() {

    const dispatch = useDispatch()
    
    const buyStock = useSelector(state => state.buyStockReducer)

    const [amount, setAmount] = useState(1)

    const [error, setError] = useState("")

    const handleCloseModal = () =>{
        dispatch(resetBuyStock())
        setAmount(1)
    }

    const withError = ()=>{
        return(
            buyStock.error ?
            <div className="buy-sell-stock-modal">
                <div className="content">
                    <i 
                        className="fas fa-times close-modal"
                        onClick={()=> dispatch(resetBuyStock())}
                    />
                    <div className="error data-error">{buyStock.error}</div>
                </div>
            </div> : null
        )
    }

    return (
            buyStock.symbol ?
            (
                <div className="buy-sell-stock-modal">
                    <div className="content">
                        <AddDeletefavoriteStock symbol={buyStock.symbol}/>
                        <i 
                            className="fas fa-times close-modal"
                            onClick={handleCloseModal}
                        />
                        <h1 className="title">{buyStock.companyName} - {buyStock.symbol}</h1>
                        <h2>Price : {buyStock.latestPrice}</h2>
                        <h2 className="amount">
                            Amount : 
                            <i 
                                className="fas fa-plus"
                                onClick={()=>setAmount(amount+1)}
                            />
                            {amount}
                            <i 
                                className="fas fa-minus"
                                onClick={()=>setAmount(amount !== 1 ? amount - 1 : 1)}
                            />
                        </h2>
                        {error && <div className="error">{error}</div>}
                        <BuyStockButton values={{amount,setError}}/>
                    </div>
                </div> 
            ) : withError()
    )
}

export default  BuyStockModal;