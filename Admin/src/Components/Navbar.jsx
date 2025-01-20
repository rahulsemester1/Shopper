import React from 'react'

import navlogo from "../assets/nav-logo.svg"
import navProfile from "../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 sm:py-2 md:py-3 border  '>
      <img src={navlogo} className='  w-40 sm:w-44 md:w-48 lg:w-52'/>
      <img src={navProfile} className=' w-18 h-12 sm:w-20 md:h-14 lg:w-24'/>
    </div>
  )
}

export default Navbar