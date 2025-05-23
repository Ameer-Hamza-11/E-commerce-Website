import React, { useEffect } from 'react'
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
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import { setUsers } from './Features/SignUpSlice'
import { signIn } from './Features/SignInSlice'
import { addToCart } from './Features/cartSlice'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Deal />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/delivery',
        element: <Delivery />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/guest',
        element: <CartsSection />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/signin',
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
    ]
  }
])
const App = () => {
  const [cookies] = useCookies(['users'])
  const dispatch = useDispatch()

  useEffect(() => {
    if (cookies.users) {
      try {
        const parsedUser = typeof cookies.users === 'string'
          ? JSON.parse(cookies.users) : cookies.users
        dispatch(setUsers(parsedUser))
      } catch (error) {
        console.error('Cookie parsing error:', error)
      }
    }
  }, [cookies, dispatch])

  useEffect(() => {
    dispatch(signIn(cookies.users))
  }, [])

  useEffect(() => {
    const raw = cookies.carts
    try {
      if (raw) {
        const parsed = typeof raw === 'string'
          ? JSON.parse(raw) : raw
        parsed.forEach(item => dispatch(addToCart(item)))
      }
    } catch (error) {
      console.error('Invalid cookie cart data', error);
      removeCookie('carts');
    }
  }, [])


  return <RouterProvider router={router} />
}

export default App
