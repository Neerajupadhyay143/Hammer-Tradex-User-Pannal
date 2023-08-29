import React from 'react'

import LoginPage from './Components/LoginPage'
import RegestrationPage from './Components/RegestrationPage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (

    <>
    <BrowserRouter>
        <RegestrationPage />
        </BrowserRouter>
    
   

    </>
  )
}

export default App