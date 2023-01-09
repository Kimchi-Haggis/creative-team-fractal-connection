import React, { useState } from 'react'
import Image from 'next/image'

import { Link, animateScroll as scroll, } from 'react-scroll'

import FractalConnectionLogo from '@public/fractal-connection-logo.svg'

type Props = {}

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
    console.log("Nav True");
  }
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 mx-auto">
      <div className="container grid grid-cols-4 items-center mx-auto">
        <div className='grid items-center col-span-3 md:col-span-2 xl:col-span-3 '>
          <a href='' className='w-fit'>
            <Image src={FractalConnectionLogo} className="h-8 w-fit ml-4 lg:ml-20" alt="Logo" />
          </a>
        </div>
      <div className="w-fit grid md:order-2 col-span-1 mx-auto">
        <button onClick={handleNav} data-collapse-toggle="navbar-sticky" type="button" className="mx-auto inline-flex items-center p-2 text-sm text-black rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
          {/* <span className="sr-only">Open main menu</span> */}
          {nav ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          :
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          }
        </button>
      </div>
      <div className={nav? "items-center justify-between w-full md:flex md:w-auto md:order-1 col-span-4": "hidden md:flex"} id="navbar-sticky">
        <ul className="text-xl flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 mx-auto text-black cursor-pointer">
          <li>
            <Link to="Hero" smooth={true} duration={500} className="block py-2 pl-3 pr-4 bg-white  md:bg-transparent md:p-0" aria-current="page">Home</Link>
          </li>
          <li>
            <Link to="About" smooth={true} duration={500} className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">About</Link>
          </li>
          <li>
            <Link to="Members" smooth={true} duration={500} className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Members</Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={500} className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar