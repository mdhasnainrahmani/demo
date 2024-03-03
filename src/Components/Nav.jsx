import React from 'react'

function Nav() {
  return (
    <div className='bg-slate-300 flex justify-between h-[4rem]'>
      <div className='mr-2'>logo</div>
        <ul className='flex justify-between w-[60%] ml-2 mr-2 '>
            <li><a href="">Who we are </a></li>
            <li><a href="">What we do</a></li>
            <li className='hover:bg-red-300'><a href="">IMS</a></li>
            <li><a href="">Our Project</a></li>
        </ul>
        <div className=' mr-2'>logo</div>
    </div>
  )
}

export default Nav;