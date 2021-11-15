import React from 'react'
import "../../styles/pages/home/home.css"
import { Link } from "react-router-dom"
import * as CONTANTS from "../constants/constants"

function Home() {
    return (
        <div className="home">
            <div className="img-cover">
                <img
                    src={CONTANTS.HOME_PAGE_URL} 
                    alt=''
                />
            </div>
            <div className="content">
                <h1>oa stock app</h1>
                <span className="line"/>
                <ul>
                    <li><i className="fas fa-circle"/>Buy and sell stocks</li>
                    <li><i className="fas fa-circle"/>Create your favorite stock list.</li>
                    <li><i className="fas fa-circle"/>See instant price changes</li>
                    <li><i className="fas fa-circle"/>And get access to all stocks</li>
                </ul>
                <div className="routes">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/signup">REGISTER</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;