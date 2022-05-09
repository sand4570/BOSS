import React from 'react'
import './App.css'
import './sass/index.scss'
import Frontpage from './pages/frontpage/index'
import Navigation from './components/Navigation'

import Login from './pages/login'

function App () {
 return (
   <>
   {/* <Navigation></Navigation>
   <main>
     <Frontpage></Frontpage> 
    </main> */}

  
      <Login></Login>

    </>
 )
}

export default App
