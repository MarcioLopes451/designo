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
            <div className='flex justify-around'>
              <Image src={Logo} alt='/' className='w-48 md:w-36'/>
              <div className='hidden md:flex gap-6 text-white px-6 font-light tracking-widest text-sm'>
                <Link href='/'>
                    OUR COMPANY
                </Link>
                <Link href='/'>
                   LOCATIONS
                </Link>
                <Link href='/'>
                    CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-around my-9'>
            <div className='flex items-center justify-center gap-32'>
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
  
  