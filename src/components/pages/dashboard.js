import React from 'react'
import "../../styles/pages/dashboard/dashboard.css"
import ListBuyedStocksContainer from '../containers/listBuyedStocksContainer'
import SearchStockContainer from '../containers/searchStockContainer'
import BuyStockModal from '../modals/buyStockModal'
import SellStockModal from '../modals/sellStockModal'
import { useSelector } from "react-redux"

function Dashboard() {

    const user = useSelector(state => state.userReducer)

    return (
        <>
            <div className="dashboard">
                <SearchStockContainer/>
                {
                    user.buyed_stocks.length > 0 
                    ?   <ListBuyedStocksContainer/> 
                    :   <h1 style={{width:'80%',margin:"25px auto"}}>No stocks were found to be listed.</h1>
                }
                <BuyStockModal/>
                <SellStockModal/>
            </div>
        </>
    )
}

export default Dashboard;