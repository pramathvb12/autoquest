import React from 'react'
import Image from 'next/image'
import {
    UserButton,
  } from "@clerk/nextjs";
const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
      <Image src ='/logo.jpg'
      alt='logo'
        width={100}
        height={100}
        style={{ borderRadius: "30%" }}
       />
       <div className='hidden  md:flex gap-5'>
        <h3 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Home</h3>
        <h3 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>History</h3>
        <h3 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Contact Us</h3>
       </div>
       <UserButton />
    </div>
  )
}

export default NavBar
