import React, { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { NavLink, useNavigate } from 'react-router-dom'
import ResponsiveNavbar from '../ResponsiveNavbar'
import { MdMenu } from 'react-icons/md'
import { Link as ScrollLink } from 'react-scroll'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../Features/SignInSlice'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentUser = useSelector(state => state.signIn.currentUser)

    const handleSignOut = () => {
      dispatch(signOut())  // Redux me user logout karo
      navigate('/signin')   // redirect to sign-in page (agar chaho) 
    }

  return (
    <>
      <nav className='bg-violet-500 text-white font-[Montserrat] p-4 flex justify-between items-center'>
        <div className='container max-w-[1280px] mx-auto flex justify-between items-center px-[clamp(16px,5vw,96px)] py-[clamp(8px,v1w,20px)]'>
          <div className="text-2xl flex items-center gap-2 font-bold">
            <h1 className='text-3xl font-bold'>HamzCart </h1>
          </div>
          <div className='hidden md:block '>
            <ul className='flex gap-6 font-bold items-center'>
              <li><NavLink to={'/'}>Deals</NavLink></li>
              <li>
                <ScrollLink
                  to="cards"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  What's New
                </ScrollLink>
              </li>
              <li><NavLink to={'/delivery'}>Delivery</NavLink></li>
            </ul>
          </div>
          <div>
            <ul className='font-bold flex gap-6 items-center'>
              {/* <NavLink to={'/guest'} className='hidden md:block'><li>Guest</li></NavLink> */}
              <NavLink to={'/guest'}><li><FaCartShopping /></li></NavLink>

              {!currentUser ? (
                <NavLink to={'/signin'}>
                  <li className='bg-white text-violet-500 py-2 px-4 rounded-3xl border-2 border-violet-600 hover:bg-violet-500 hover:text-white duration-300'>
                    Sign In
                  </li>
                </NavLink>
              )
            :
            (
              <NavLink to={'/signin'}>
              <li className='bg-white text-violet-500 py-2 px-4 rounded-3xl border-2 border-violet-600 hover:bg-violet-500 hover:text-white duration-300 '
              onClick={handleSignOut}
              >
                Sign Out
              </li>
            </NavLink>
            )
            }

            </ul>
          </div>
          <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className='text-4xl cursor-pointer' />
          </div>
        </div>
      </nav>
      <ResponsiveNavbar open={isOpen} />
    </>
  )
}

export default Header
