import React from 'react'
import Header from '../Components/UI/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/UI/Footer'

const Layout = () => {
  return (
    <>
     <Header />
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout
