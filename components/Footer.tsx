import Logo from '../assets/shared/desktop/logo-light.png';
import Facebook from '../assets/shared/desktop/icon-facebook.svg';
import Youtube from '../assets/shared/desktop/icon-youtube.svg';
import Twitter from '../assets/shared/desktop/icon-twitter.svg';
import Pinterest from '../assets/shared/desktop/icon-pinterest.svg';
import Instagram from '../assets/shared/desktop/icon-instagram.svg';
import Image from 'next/image';
import Link from 'next/link';

export function Footer(){
    return (
      <div className='bg-black mt-4 w-full'>
        <div className='flex justify-center items-center py-8 flex-col'>
          <Link href='/'>
          <Image src={Logo} alt='/' className='w-48'/>
          </Link>
          <div className='flex flex-col justify-center items-center mt-7 border-t-2 border-white gap-8 text-white'>
            <Link className='mt-10' href='/about'>OUR COMPANY</Link>
            <Link href='/locations'>LOCATIONS</Link>
            <Link href='/contact'>CONTACT</Link>
            <div className='flex flex-col justify-center items-center'>
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
            <Image src={Facebook} alt='/'/>
            <Image src={Youtube} alt='/'/>
            <Image src={Twitter} alt='/'/>
            <Image src={Pinterest} alt='/'/>
            <Image src={Instagram} alt='/'/>
            </div>
          </div>
        </div>
      </div>
    )
    }