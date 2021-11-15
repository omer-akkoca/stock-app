import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { handlebuyedStocksTotal } from '../../redux/actions/buyedStocksTotal'
import { getBuyStockValues } from '../../redux/actions/buyStock'
import { getSellStockValues } from '../../redux/actions/sellStock'
import { GET_NOW } from "../constants/constants"

function ListBuyedStocksContainer() {

    const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer)

    const buyedStocksTotal = useSelector(state => state.buyedStocksTotalReducer)

    const totalValues = useSelector(state => state.totalValuesReducer)

    const [selectedStock, setSelectedStock] = useState("")

    const [date, setDate] = useState(GET_NOW())

    useEffect(() => {
        dispatch(handlebuyedStocksTotal(user))
        setTimeout(() => {
            setDate(GET_NOW())
        }, 2000 * 60);
    }, [date,user,dispatch])

    const listMyStocks = () =>{
        return(
            buyedStocksTotal.map(stock =>(
                <tr className="content" key={stock.symbol} onClick={()=>setSelectedStock(stock.symbol)}>
                    <td>
                        <input type="checkbox"
                            checked={stock.symbol===selectedStock}
                            onChange={()=>setSelectedStock(stock.symbol)}
                        />
                        </td>
                    <td>{stock.symbol}</td>
                    <td>{stock.name}</td>
                    <td>{stock.amount}</td>
                    <td>{stock.latestPrice}$</td>
                    <td>
                        <button 
                            className="buy" 
                            disabled={!(stock.symbol===selectedStock)}
                            onClick={()=> dispatch(getBuyStockValues(stock.symbol))}
                        >buy</button>
                    </td>
                    <td>
                        <button 
                            className="sell" 
                            disabled={!(stock.symbol===selectedStock)}
                            onClick={()=> dispatch(getSellStockValues(stock.symbol))}
                        >sell</button>
                    </td>
                </tr>
                ))
        )
    }

    return (
        <div className="list-buyed-stocks">
            <table>
                <thead>
                    <tr className="title">
                        <th></th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Stocks</th>
                        <th>Current Value</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listMyStocks()}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="total">Total</td>
                        <td colSpan="2">Last Updated: {date}</td>
                        <td>{totalValues.total_amount}</td>
                        <td>{totalValues.total_price}$</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ListBuyedStocksContainer;