import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Signup from './pages/Signup'
import Login from './pages/Login'
import useUserContext from './hooks/useUserContext'

function App() {
  const {user} = useUserContext()
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <div className="pages">
          <Routes>
            <Route 
            path='/'
            element={user ? <Home/> : <Navigate to='login'/>}
            />
            <Route
            path='/signup'
            element={!user ? <Signup/> : <Navigate to='/'/>}
            />
            <Route
            path='/login'
            element={!user ? <Login/> : <Navigate to='/'/>}
            />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
