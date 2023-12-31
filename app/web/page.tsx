'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Express from '../../assets/web-design/desktop/image-express.jpg';
import Transfer from '../../assets/web-design/desktop/image-transfer.jpg';
import Photon from '../../assets/web-design/desktop/image-photon.jpg';
import Builder from '../../assets/web-design/desktop/image-builder.jpg';
import Blogr from '../../assets/web-design/desktop/image-blogr.jpg';
import Camp from '../../assets/web-design/desktop/image-camp.jpg';
import App from '../../assets/home/mobile/image-app-design.jpg';
import Graphic from '../../assets/home/mobile/image-graphic-design.jpg';
import Arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import ThreeCircles from '../../assets/shared/desktop/bg-pattern-three-circles.svg';
import { Footer } from '@/components/Footer';
import { TabletFooter } from '@/components/TabletFooter';
import { Talk } from '@/components/Talk';
import Link from 'next/link';

const links = [
    {
      Name:'APP DESIGN',
      image: App,
      text:'VIEW PROJECTS',
      link: '/app'
    },
    {
      Name:'GRAPHIC DESIGN',
      image: Graphic,
      text:'VIEW PROJECTS',
      link: '/graphic'
    },
  ]

export default function Web() {
    const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const breakPoint = 768;
    const med = 1024;
    const large = 1440

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
    
  return (
    <div className='mt-10 md:flex flex-col justify-center items-center'>
        <div className='bg-peach flex flex-col justify-center items-center text-center h-80 gap-10 text-white 
        md:w-[43rem] rounded-lg
        xl:w-[69rem] xl:flex xl:items-center xl:pt-6 xl:h-64'>
            <h1 className='text-4xl tracking-wider'>Web Design</h1>
            <p className='font-light px-3 tracking-normal'>
                We build websites that serve as powerful marketing tools and bring memorable brand experiences.
            </p>
        </div>

        <div className='mt-7'>
            <div className='flex flex-col justify-center items-center gap-9 xl:flex-row xl:flex-wrap xl:w-[69rem]'>
                <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                    <Image src={Express} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                    <div className='bg-seashell  rounded-lg -mt-4 md:mt-0 hover:bg-peach hover:text-white'>
                        <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                            <h1 className='tracking-widest text-xl'>EXPRESS</h1>
                            <p className='text-center w-56 mt-4'>A multi-carrier shipping website for ecommerce businesses</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                    <Image src={Transfer} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                    <div className='bg-seashell rounded-lg -mt-4 md:mt-0 hover:bg-peach hover:text-white'>
                        <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                            <h1 className='tracking-widest text-xl mt-5'>TRANSFER</h1>
                            <p className='text-center w-56 mt-4'>Site for low-cost money transfers and sending money within seconds</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                    <Image src={Photon} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                    <div className='bg-seashell rounded-lg -mt-4 md:mt-0 hover:bg-peach hover:text-white'>
                        <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                            <h1 className=' tracking-widest text-xl mt-5'>PHOTON</h1>
                            <p className='text-center w-56 mt-4'>A state-of-the-art music player with high-resolution audio and DSP effects</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                    <Image src={Builder} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                    <div className='bg-seashell rounded-lg -mt-4 md:mt-0 hover:bg-peach hover:text-white'>
                        <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                            <h1 className=' tracking-widest text-xl mt-5'>BUILDER</h1>
                            <p className='text-center w-56 mt-4'>Connects users with local contractors based on their location</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                    <Image src={Blogr} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                    <div className='bg-seashell rounded-lg -mt-4 md:mt-0 hover:bg-peach hover:text-white'>
                        <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                            <h1 className=' tracking-widest text-xl'>BLOGR</h1>
                            <p className='text-center w-56 mt-4'>Blogr is a platform for creating an online blog or publication</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                    <Image src={Camp} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                    <div className='bg-seashell rounded-lg -mt-4 md:mt-0 hover:bg-peach hover:text-white'>
                        <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                            <h1 className=' tracking-widest text-xl mt-5'>CAMP</h1>
                            <p className='text-center w-56 mt-4'>Get expert training in coding, data, design, and digital marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-white mt-10'>
        <div className='flex justify-center items-center flex-col flex-wrap gap-6 pt-6 xl:flex-row'>
          {links.map((data,key) => (
            <div key={key}>
              <Link href={data.link}>
              <div className='relative'>
              <Image src={data.image} alt='links' className='w-80 h-64 rounded-2xl md:w-[43rem] xl:w-[33rem]'/>
              <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-2xl hover:bg-[#e7816b99]'>
                <div className='mt-20 flex justify-center flex-col gap-3 items-center'>
                <h2 className='text-3xl tracking-wide'>{data.Name}</h2>
                <p className='tracking-widest flex items-center gap-5'>
                  {data.text} 
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </div>
              </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        </div>
        <Talk />
        {width < breakPoint ? <Footer /> : <TabletFooter />}
    </div>
  )
}
