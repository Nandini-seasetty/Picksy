import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin } from "lucide-react";
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { CgClose } from 'react-icons/cg';
import { useCart } from '../context/CartContext';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = ({location, getLocation,openDropDown,setOpenDropDown}) => {
  const toggleDropDown=()=>{
    setOpenDropDown(!openDropDown)
  }
  const {cartItem}=useCart()
  const [openNav,setOpenNav]=useState(false)
  return (
  <div className="bg-purple-900 text-white py-3 shadow-xl px-4 md:px-0">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div>
      <Link to="/">
        <h1 className="font-bold text-3xl hover:text-red-600 transition-colors duration-300">
          <span className="text-red-500 text-4xl font-serif">P</span>icksy
        </h1>
      </Link>
    </div>
   

    <div className="hidden md:flex items-center gap-6 relative">      
       <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropDown}>
        <MapPin className="text-red-500" />
        <div className="flex flex-col text-white font-semibold text-sm">
          {location ? (
            <>
              <span>{location.city},</span>
              <span>{location.principalSubdivision}</span>
            </>
          ) : (
            <span>Add address</span>
          )}
        </div>
        <FaCaretDown />
      </div>

      {openDropDown && (
        <div className="absolute top-full left-0 w-64 mt-2 shadow-2xl text-black bg-white border border-gray-200 rounded-md p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-semibold text-lg">Change Location</h1>
            <CgClose className="cursor-pointer" onClick={toggleDropDown} />
          </div>
          <button
            onClick={getLocation}
            className="bg-red-600 text-white w-full p-2 rounded-md"
          >
            Detect my location
          </button>
        </div>
      )}
      <ul className="flex gap-7 text-lg text-white font-semibold cursor-pointer">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "border-b-4 border-red-500" : "text-black"}`
          }
        >
          <li className='text-white'>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "border-b-4 border-red-500" : "text-black"}`
          }
        >
          <li className='text-white'>About</li>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${isActive ? "border-b-4 border-red-500" : "text-black"}`
          }
        >
          <li className='text-white'>Products</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "border-b-4 border-red-500" : "text-black"}`
          }
        >
          <li className='text-white'>Contact</li>
        </NavLink>
      </ul>

      <Link to="/cart" className="relative">
        <IoCartOutline className="h-7 w-7 text-white" />
        {cartItem?.length > 0 && (
          <span className="bg-red-500 text-white text-xs px-2 rounded-full absolute -top-2 -right-2">
            {cartItem.length}
          </span>
        )}
      </Link>

      <div className="flex items-center gap-2">
        <SignedOut>
          <SignInButton className="bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>

    <div className="md:hidden">
      {openNav ? (
        <HiMenuAlt3 onClick={() => setOpenNav(false)} className="h-7 w-7" />
      ) : (
        <HiMenuAlt1 onClick={() => setOpenNav(true)} className="h-7 w-7" />
      )}
    </div>
  </div>

  <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
</div>

  )
}

export default Navbar
