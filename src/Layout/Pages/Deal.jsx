import React from 'react'
import girlImg from '../../assets/images/girl_with_headphones.png'
import { FaRocket } from 'react-icons/fa6'
import { IoShieldCheckmark } from 'react-icons/io5'
import { FaSmileWink } from 'react-icons/fa'
import Cards from '../../Components/Cards'
import {  Link as ScrollLink } from 'react-scroll'

const Deal = () => {
  return (
    <>
    <div className="font-[Montserrat] w-full ">
      {/* Deal Section */}
      <div className='bg-violet-500 flex justify-center items-center w-full py-10'>
        <div className="bg-[#F9EFE6] w-full max-w-[1280px] rounded-2xl flex flex-col md:flex-row items-stretch justify-between px-8 shadow-xl overflow-hidden">

          {/* Text Section */}
          <div className='flex flex-col gap-4 text-center md:text-left justify-center px-4 py-6 md:py-0 w-full md:w-1/2'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-800 leading-tight'>
              Grab up to <span className='text-violet-600'>50% off</span> on <br />
              selected T Shirts
            </h1>
            <ScrollLink
               to="cards"
               smooth={true}
               duration={500}
               offset={-80}
            className='mt-4 cursor-pointer bg-white text-violet-600 font-bold px-6 py-3 rounded-full hover:bg-violet-700 hover:text-white transition duration-300 w-max mx-auto md:mx-0'>
              Buy Now
            </ScrollLink>
          </div>

          {/* Image Section */}
          <div className='w-full md:w-1/2 flex justify-center items-end'>
            <img
              src={girlImg}
              alt="Girl with Headphones"
              className='object-contain h-full max-h-[360px]'
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='w-full flex justify-center px-4  md:px-0 mt-[-25px]'>
        <div className='bg-white w-full max-w-[1000px] shadow-lg rounded-xl py-8 px-6 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center text-center'>

          {/* Card 1 */}
          <div className='flex flex-col items-center gap-2 px-4'>
            <FaRocket className='text-violet-500 text-4xl' />
            <h2 className='text-lg font-semibold'>Fast Delivery</h2>
            <p className='text-sm text-gray-600'>Deliveries in less than 2 days</p>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col items-center gap-2 px-4'>
            <IoShieldCheckmark className='text-violet-500 text-4xl' />
            <h2 className='text-lg font-semibold'>Safe Payment</h2>
            <p className='text-sm text-gray-600'>All payments are 100% secure</p>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col items-center gap-2 px-4'>
            <FaSmileWink className='text-violet-500 text-4xl' />
            <h2 className='text-lg font-semibold'>Friendly Services</h2>
            <p className='text-sm text-gray-600'>Best customer care services</p>
          </div>

        </div>
      </div>
    </div>
    <div className='h-15 bg-white'></div>
    <div id='cards' className=' flex flex-col justify-center items-center w-full py-10'>  
      <h1 className='text-center font-bold text-3xl'>Products for Sale</h1>
       <Cards />
    </div>

    </>
  )
}

export default Deal
