import React, { useState } from 'react'
import "../../styles/layouts/navbar/navbar.css"
import { Link, useNavigate } from "react-router-dom"
import * as CONSTANTS from "../constants/constants"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../redux/actions/auth.js"

function Navbar() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const user = useSelector(state => state.userReducer)

    const totalValues = useSelector(state => state.totalValuesReducer)

    const [visible, setVisible] = useState(false)

    const handleLogout = () =>{
        dispatch(logout())
        navigate("/")
    }

    const userNavbar = () =>{
        return(
            <>
                <ul className="user-balance">
                    <li>Cash Balance : {user.cash_balance}$</li>
                    <li>Total Worth : {totalValues.total_worth}$</li>
                </ul>
                <i 
                    className="fas fa-bars open-user-navbar"
                    onClick={()=>setVisible(!visible)}
                />
                <ul className="user-navbar">
                    <li>{user.name}</li>
                    <li><Link to="/my-favorite">Favorite Stocks</Link></li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
                {
                    visible ?
                    <ul className="user-navbar responsive-user-navbar">
                        <li>{user.name}</li>
                        <li><Link to="/my-favorite">Favorite Stocks</Link></li>
                        <li onClick={handleLogout}>Logout</li>
                    </ul> : null
                }
                
            </>
        )
    }

    return (
        <nav>
            <span className="logo">
                <Link to={ user.id ? CONSTANTS.DASHBOARD :CONSTANTS.HOME}>OA STOCK</Link>
            </span>
            {user.id ? userNavbar() : null}
        </nav>
    )
}

export default Navbar;