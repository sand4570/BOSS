import React from 'react'
import './App.css'
import './sass/index.scss'
import Frontpage from './pages/frontpage/index'
import Footer from './components/Footer/index'
import Navigation from './components/Navigation'

function App () {
 return (
    <>
      <Navigation/>
      <main>
        <Frontpage/>
      </main>
      <Footer/>
    </>
 )
}

export default App
