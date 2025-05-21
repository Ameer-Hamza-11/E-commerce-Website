import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Deal from './Layout/Pages/Deal'
// import WhatsNew from './Layout/Pages/WhatsNew'
import Delivery from './Layout/Pages/Delivery'
import Guest from './Layout/Pages/CartsSection'
import Layout from './Layout/Layout'
import ErrorPage from './Layout/ErrorPage'
import SignIn from './Layout/Pages/SignIn'
import SignUp from './Layout/Pages/SignUp'
import CartsSection from './Layout/Pages/CartsSection'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Deal/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/delivery',
        element: <Delivery/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/guest',
        element: <CartsSection/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/signin',
        element: <SignIn/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/signup',
        element: <SignUp/>,
        errorElement: <ErrorPage/>,
      },
    ]
  }
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App
