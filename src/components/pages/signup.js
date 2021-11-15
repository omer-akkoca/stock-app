import React, { useState } from 'react'
import "../../styles/pages/forms/forms.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { handleSignup } from '../../redux/actions/auth'
import { v4 as uuidv4 } from 'uuid'

function Signup() {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [error, setError] = useState("")

  const handleRegister = (e) =>{
    e.preventDefault()
    if (validation()) {
      const newUSer = {
        id : uuidv4(),
        name,
        password,
        email,
        cash_balance : 10000,
          buyed_stocks: [],
        favorite_stocks: []
      }
      try {
        dispatch(handleSignup(newUSer))
        navigate("/dashboard")
      } catch (error) {
        setError(error.message)
        setEmail("")
        setPassword("")
        setTimeout(() => {
          setError("")
        }, 2500);
      }
    } else {
      setError("Name and password can not be blank.")
      setTimeout(() => {
        setError("")
      }, 2500)
    }
  }

  const validation = () =>{
    if (name.length < 1 || password.length < 1) {
      return false;
    }
    return true;
  }

    return (
      <div className="login-register-container">
        <form onSubmit={(e)=>handleRegister(e)}>
          <h1>Register</h1>
          <input
            placeholder="Name and Surname"
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {
            error && <p className="error">{error}</p>
          }
          <button type="submit">Register</button>
          <Link to="/login">I already have an account.</Link>
        </form>
      </div>
    )
}

export default Signup;