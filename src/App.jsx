import React from 'react'
import './App.css'
import './sass/index.scss'
import Frontpage from './pages/frontpage/index'
import Navigation from './components/Navigation'

function App () {
 return (
   <>
   <Navigation></Navigation>
   <main>
     <Frontpage></Frontpage> 
    </main>
    </>
 )
}

export default App
