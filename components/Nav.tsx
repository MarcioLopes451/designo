'use client'
import React, {useState} from 'react'
import Logo from '../assets/shared/desktop/logo-dark.png';
import mobileNav from '../assets/shared/mobile/icon-hamburger.svg';
import Image from 'next/image';
import MobileNav from './MobileNav';
import Close from '../assets/shared/mobile/icon-close.svg';
import Backdrop from './Backdrop';
import Link from 'next/link';


export default function Navbar() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state)
  }

  return (
    <div className='w-full'>
        <div className='flex justify-between items-center px-6 mt-10 md:px-10 xl:px-40'>
          <Link href='/'>
          <Image src={Logo} alt='/' className='w-48 md:w-36'/>
          </Link>
           <div className='hidden md:flex gap-6 text-black px-6 font-light tracking-widest text-sm'>
                <Link href='/about'>
                    OUR COMPANY
                </Link>
                <Link href='/locations'>
                   LOCATIONS
                </Link>
                <Link href='/contact'>
                    CONTACT
                </Link>
                </div>
           {state ?  
           <Image src={Close} onClick={handleClick} alt=""/> 
           : 
           <Image src={mobileNav} alt='/' onClick={handleClick} className='md:hidden'/> }
           
        </div>
        <MobileNav isOpen={state} onClose={handleClick}/>
        {state && <Backdrop isOpen={state} onClose={handleClick}/>}
    </div>
  )
}