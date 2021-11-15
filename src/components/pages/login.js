import React, { useState } from 'react'
import "../../styles/pages/forms/forms.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { handleLogin } from '../../redux/actions/auth'

function Login() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [email,setEmail] = useState("")

  const [password,setPassword] = useState("")

  const [error, setError] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (validation()) {
      try {
        dispatch(handleLogin(email,password))
        navigate("/dashboard")
      } catch (error) {
        setError(error.message)
        setEmail("")
        setPassword("")
        setTimeout(() => {
          setError("")
        }, 2500)
      }
    }else{
      setError("Password or email can not be blank.")
      setTimeout(() => {
        setError("")
      }, 2500)
    }
  }

  const validation = () =>{
    if (password.length < 1) {
      return false;
    }
    return true;
  }

  return (
    <div className="login-register-container">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Login</h1>
        <input
          placeholder="E Mail"
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
        <button type="submit">Login</button>
        <Link to="/signup">I dont have an account.</Link>
      </form>
    </div>
  )
}

export default Login;