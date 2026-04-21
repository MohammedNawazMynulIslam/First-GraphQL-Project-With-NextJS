import React from 'react'
import Social from './social'

export const Footer = () => {
  return (
            <footer className='flex justify-between items-center py-4 px-8 bg-[#020617] text-white'>
                <p>© 2026 My Blog. All rights reserved.</p>
                <Social />
    </footer>
  )
}
