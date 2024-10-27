import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between text-2xl font-semibold bg-blue-900 h-[4vw] pt-4 text-yellow-500'>
        <h1 className='text-orange-400  text-3xl'>Logo</h1>
        <ul className=' flex gap-7 mr-4'>
            <li><a href="/about" className='hover:text-yellow-300' >About us</a></li>
            <li><a href="/donot" className='hover:text-yellow-300' >Donot Click on this</a></li>
            <li><a href="/srvc" className='hover:text-yellow-300' >Services us</a></li>
        </ul>
    </div>
  )
}

export default Navbar
