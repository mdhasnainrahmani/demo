import React from 'react'
import { LiaIndustrySolid } from "react-icons/lia";
import { GrUserWorker } from "react-icons/gr";
import { MdFrontLoader } from "react-icons/md";
import CountUp from 'react-countup';
const Workforce = () => {
  return (
    <div className='flex justify-between mt-10 max-sm:flex-col  '>
        <div className='flex justify-between '>
            <span ><LiaIndustrySolid className='size-20' ></LiaIndustrySolid></span>
            <span className='font-bold'> <CountUp className='text-2xl' end={100} duration={5} /></span>
            
        </div>
        <div className='flex justify-between '>
            <p ><GrUserWorker className='size-20'></GrUserWorker></p>
            <span className='font-bold'> <CountUp className='text-2xl' end={100} duration={5} /></span>

            
        </div> <div className='flex justify-between '>
            <p><MdFrontLoader className='size-20'></MdFrontLoader></p>
            <span className='font-bold'> <CountUp className='text-2xl' end={100} duration={5} /></span>

            
        </div>
    </div>
  )
}

export default Workforce