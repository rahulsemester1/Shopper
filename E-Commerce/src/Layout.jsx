import React from 'react'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer/Footer"

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout