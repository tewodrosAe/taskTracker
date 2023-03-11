import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <div className="pages">
          <Routes>
            <Route 
            path='/'
            element={<Home/>}
            />
            <Route
            path='/signup'
            element={<Signup/>}
            />
            <Route
            path='/login'
            element={<Login/>}
            />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
