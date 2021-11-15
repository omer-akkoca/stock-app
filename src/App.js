import React from "react"
import UserRoute from "./components/routes/userRoute"
import GuestRoute from "./components/routes/guestRoute"
import { Home, Login, Signup, Dashboard } from "./components/pages"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/layouts/navbar"
import FavoriteStocks from "./components/pages/favoriteStocks"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route 
          path="/" 
          element={
            <GuestRoute>
              <Home/>
            </GuestRoute>
          }
        />
        <Route 
          path="/login" 
          element={
            <GuestRoute>
              <Login/>
            </GuestRoute>
          }
        />
        <Route 
          path="/signup" 
          element={
            <GuestRoute>
              <Signup/>
            </GuestRoute>
          }
        />
        <Route 
          path="/dashboard" 
          element={
            <UserRoute>
              <Dashboard/>
            </UserRoute>
          }
        />
        <Route 
          path="/my-favorite" 
          element={
            <UserRoute>
              <FavoriteStocks/>
            </UserRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App;