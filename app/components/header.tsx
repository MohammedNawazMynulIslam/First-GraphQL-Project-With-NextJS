import Link from 'next/link'
import React from 'react'
import Social from './social'


export const Header = () => {
  return (
      <header className='flex justify-between items-center py-4 px-8 bg-[#020617] text-white'>
          <h1>My Blog</h1>
          <nav className='flex space-x-6'>
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
          
          </nav>
          <div className='flex items-center space-x-4'>
              <Social />
              <button className='bg-[#18181b] text-white px-4 py-2 rounded-md'>Sign Up</button>
          </div>

    </header>
  )
}
