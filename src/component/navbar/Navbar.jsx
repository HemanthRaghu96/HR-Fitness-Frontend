import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed top-0 w-full  z-10 backdrop-blur-3xl'>
      <div>
        <img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png' alt='cult.fit' className='mx-10 w-[100px] h-[70px] object-contain cursor-pointer'/>
      </div>
      <div className=''>
        <ul className='flex'>
          <li className=' px-3 cursor-pointer text-gray-300 font-bold hover:text-white'>FITNESS</li>
          <li className='px-3 cursor-pointer text-gray-300 font-bold hover:text-white'>CARE</li>
          <li className='px-3 cursor-pointer text-gray-300 font-bold hover:text-white' >MIND</li>
        </ul>
      </div>
      <div className='flex '>
        <div className='flex justify-between items-center hover:cursor-pointer hover:bg-gray-600 px-2 py-3 rounded-md'>
          <h1 className='font-semibold text-gray-300'>CHENNAI</h1>
          <FiMapPin className='text-white mx-2'/>
        </div>
        <div className='flex justify-between items-center'>
        <IoPerson className='text-white mx-4 hover:cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar