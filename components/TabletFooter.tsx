import Logo from '../assets/shared/desktop/logo-light.png';
import Facebook from '../assets/shared/desktop/icon-facebook.svg';
import Youtube from '../assets/shared/desktop/icon-youtube.svg';
import Twitter from '../assets/shared/desktop/icon-twitter.svg';
import Pinterest from '../assets/shared/desktop/icon-pinterest.svg';
import Instagram from '../assets/shared/desktop/icon-instagram.svg';
import Image from 'next/image';
import Link from 'next/link';

export function TabletFooter(){
    return (
      <div className='bg-black w-full mt-10'>
        <div className='flex flex-col gap-10 text-white py-10'>
          <div className='w-full'>
            <div className='flex justify-around items-center'>
              <Link href='/'>
              <Image src={Logo} alt='/' className='w-48 md:w-36'/>
              </Link>
              <div className='hidden md:flex gap-6 text-white px-6 font-light tracking-widest text-sm'>
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
            </div>
          </div>
          <div className='flex my-9 justify-around gap-20 items-end'>
            <div className='flex items-center justify-center gap-32 opacity-50'>
            <div className='flex flex-col justify-center items-start'>
            <p>Designo Central Office</p>
            <p className='font-light'>3886 Wellington Street</p>
            <p className='font-light'>Toronto, Ontario M9C 3J5</p>
          </div>
            <div className='flex flex-col justify-center items-start'>
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
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
  
  