import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const ResponsiveNavbar = ({ open }) => {
    return (
        <>
            <AnimatePresence mode='wait'>
                {open ? (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className={`absolute top-20 left-0 w-full   z-20 `}
                    >
                        <div className='text-xl overflow-x-hidden w-full font-semibold uppercase font-[Montserrat] bg-violet-500 text-white py-10  '>
                            <ul className='flex flex-col gap-6 items-center'>
                                <li> <NavLink to='/'>deal </NavLink></li>
                               <li>
                                               <ScrollLink
                                                 to="cards"
                                                 smooth={true}
                                                 duration={500}
                                                 offset={-80}
                                                 className="cursor-pointer"  // Add this for pointer and visibility
                                               >
                                                 What's New
                                               </ScrollLink>
                                             </li>
                                <li> <NavLink to='/delivery'>Delivery </NavLink></li>
                                {/* <li> <NavLink to='/guest'>Guest </NavLink></li> */}
                            </ul>
                        </div>

                    </motion.div>
                ) : null}

                : null

            </AnimatePresence>
        </>
    )
}

export default ResponsiveNavbar
