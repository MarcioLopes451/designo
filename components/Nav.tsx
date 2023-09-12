import React from 'react'
import Logo from '../assets/shared/desktop/logo-dark.png';
import mobileNav from '../assets/shared/mobile/icon-hamburger.svg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='w-full'>
        <div className='flex justify-between items-center px-6 mt-10'>
           <Image src={Logo} alt='/' className='w-48'/>
           <Image src={mobileNav} alt='/' />
        </div>
    </div>
  )
}