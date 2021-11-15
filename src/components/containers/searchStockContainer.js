import React , { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import axios from "axios"
import * as LINKS from "../constants/constants"
import { getBuyStockValues } from '../../redux/actions/buyStock'

export default function SearchStockContainer() {

    const dispatch = useDispatch()

    const [query, setQuery] = useState("")

    const [stocks, setStocks] = useState([])

    const [error, setError] = useState("")

    useEffect(() => {
        if (query) {
            axios.get(`${LINKS.SEARCH_STOCKS}${query}`)
            .then((resp)=>{
                setError("")
                setStocks(resp.data.data)
            })
            .catch((err)=>{
                const errText = new Error(err)
                setError(errText.message)
            })
        }else{
            setStocks([])
        }
    }, [query])

    const listStocks = () =>{
        return(
            <div className="stocks-list">
                {    
                    stocks.map(stock => (
                        <p 
                            key={stock.symbol} 
                            onClick={()=> dispatch(getBuyStockValues(stock.symbol))}
                        >
                            {stock.name}
                        </p>
                    ))
                }
            </div>
        )
    }

    const corsError = () =>{
        return(
            <div className="error">
                <p>{error}</p>
                <p className="info">
                    Please add <a href={LINKS.CORS_APP} target="_blank" rel="noreferrer">Moesif Origin & CORS Changer</a> to your browser to use this site.
                </p>
            </div>
        )
    }

    return (
        <div className="search-stock">
            <div className="input-container">
                <i className="fas fa-search"/>
                <input
                    type="text"
                    placeholder="Search for stock"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                />
                {stocks.length > 0 ? listStocks() : null}
            </div>
            {error && corsError()}
        </div>
    )
}