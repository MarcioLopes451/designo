'use client'
import React, {useState} from 'react'
import Logo from '../assets/shared/desktop/logo-dark.png';
import mobileNav from '../assets/shared/mobile/icon-hamburger.svg';
import Image from 'next/image';
import MobileNav from './MobileNav';
import Close from '../assets/shared/mobile/icon-close.svg';
import Backdrop from './Backdrop';


export default function Navbar() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state)
  }

  return (
    <div className='w-full'>
        <div className='flex justify-between items-center px-6 mt-10'>
           <Image src={Logo} alt='/' className='w-48'/>
           {state ?  
           <Image src={Close} onClick={handleClick} alt=""/> 
           : 
           <Image src={mobileNav} alt='/' onClick={handleClick}/> }
        </div>
        <MobileNav isOpen={state} onClose={handleClick}/>
        {state && <Backdrop isOpen={state} onClose={handleClick}/>}
    </div>
  )
}