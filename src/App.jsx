import React from 'react'

import './App.css'
import './sass/index.scss'
import Frontpage from './pages/frontpage/index'
import Contact from './pages/Contact/index'
import Login from './pages/Login/index'
import Footer from './components/Footer/index'
import Navigation from './components/Navigation'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App () {
 return (
    <>
      <BrowserRouter>
      <Navigation/>
      <main>
        <Routes>
          <Route exact path='contact' element={<Contact/>} />
          <Route exact path='login' element={<Login/>} />
          <Route exact path='/' element={<Frontpage/>} />
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
      
    </>
 )
}

export default App
