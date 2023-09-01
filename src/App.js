import React from 'react'

import LoginPage from './Components/Authentication/LoginPage'
import RegestrationPage from './Components/Authentication/RegestrationPage'
import Header from './Components/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (

    <>
      <BrowserRouter>
      {/* <RegestrationPage/> */}
   <Header/>
      </BrowserRouter>



    </>
  )
}

export default App