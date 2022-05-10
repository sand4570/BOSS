import React from 'react'

import './App.css'
import './sass/index.scss'
import Frontpage from './pages/frontpage/index'
import About from './pages/About/index'
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
          <Route exact path='about' element={<About/>} />
          <Route exact path='login' element={<Login/>} />
          <Route exact path='/' element={<Frontpage/>} />
        </Routes>
        </main>
      </BrowserRouter>
      <Footer/>
    </>
 )
}

export default App
