import React from 'react'
import { FaLinkedin } from "react-icons/fa6";

function Upper_nav() {
  return (
    <div className='bg-neutral-900 text-white h-16 flex justify-between  '>
        <ul className='flex justify-between w-[30%] ml-3 sm:w-[300px] max-sm:text-[8px] max-sm:flex-col max-sm:text-center '>
            <li className='hover:text-red-500'><a href=""> Careers |</a></li>
            <li className='hover:text-red-500'><a href=""> News |</a></li>
            <li className='hover:text-red-500'><a href=""> media |</a></li>
            <li className='hover:text-red-500'><a href=""> Global presence |</a></li>
            <li className='hover:text-red-500'><a href=""> Employee portal </a></li>    
        </ul>
        <div className='flex self-center mr-3'>
          <FaLinkedin className='size-10'></FaLinkedin>
        </div>
 
    </div>
  )
}

export default Upper_nav