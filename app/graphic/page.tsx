'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Change from '../../assets/graphic-design/desktop/image-change.jpg';
import Boxed from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import Science from '../../assets/graphic-design/desktop/image-science.jpg';
import Web from '../../assets/home/mobile/image-web-design.jpg';
import App from '../../assets/home/mobile/image-app-design.jpg';
import Arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import ThreeCircles from '../../assets/shared/desktop/bg-pattern-three-circles.svg';
import { Talk, Footer, TabletFooter} from '../page';

 const links = [
  {
    Name:'WEB DESIGN',
    image: Web,
    text:'VIEW PROJECTS',
  },
  {
    Name:'APP DESIGN',
    image: App,
    text:'VIEW PROJECTS',
  },
]

export default function Graphic() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;
  const med = 1024;


  useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResizeWindow);
      return () => {
          window.removeEventListener('resize', handleResizeWindow);
      };
  }, []);
  
return (
  <div className='mt-10 md:flex flex-col justify-center items-center'>
      <div className='bg-peach flex flex-col justify-center items-center text-center h-80 gap-10 text-white 
      md:w-[43rem] rounded-lg 
      xl:w-[69rem] xl:flex xl:items-center xl:pt-6 xl:h-64'>
          <h1 className='text-4xl tracking-wider'>Graphic Design</h1>
          <p className='font-light px-3 tracking-normal'>
          We deliver eye-catching branding materials that are tailored to meet your business objectives. 
          </p>
      </div>

      <div className='mt-7'>
          <div className='flex flex-col justify-center items-center gap-9 xl:flex-row xl:justify-items-start xl:flex-wrap'>
              <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                  <Image src={Change} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                  <div className='bg-seashell rounded-lg -mt-4 md:mt-0'>
                      <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                          <h1 className='text-peach tracking-widest text-xl'>TIM BROWN</h1>
                          <p className='text-center w-56 mt-4'>A book cover designed for Tim Brown’s new release, ‘Change’</p>
                      </div>
                  </div>
              </div>
              <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                  <Image src={Boxed} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                  <div className='bg-seashell rounded-lg -mt-4 md:mt-0'>
                      <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                          <h1 className='text-peach tracking-widest text-xl'>BOXED WATER</h1>
                          <p className='text-center w-56 mt-4'>A simple packaging concept made for Boxed Water</p>
                      </div>
                  </div>
              </div>
              <div className='md:flex flex-row items-center justify-center xl:flex-col'>
                  <Image src={Science} alt='express' className='w-80 h-80 rounded-lg md:w-[21.5rem] md:h-[21.5rem]' />
                  <div className='bg-seashell rounded-lg -mt-4 md:mt-0'>
                      <div className='flex flex-col justify-center items-center h-36 md:w-[21.5rem] md:h-[21.5rem] xl:h-44'>
                          <h1 className='text-peach tracking-widest text-xl'>SCIENCE!</h1>
                          <p className='text-center w-56 mt-4'>A poster made in collaboration with the Federal Art Project</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className='bg-white'>
      <div className='flex justify-center items-center flex-col flex-wrap gap-6 pt-6 xl:flex-row'>
        {links.map((data,key) => (
          <div key={key}>
            <div className='relative'>
            <Image src={data.image} alt='links' className='w-80 h-64 rounded-2xl md:w-[43rem] xl:w-[33rem]'/>
            <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-2xl'>
              <div className='mt-20 flex justify-center flex-col gap-3 items-center'>
              <h2 className='text-3xl tracking-wide'>{data.Name}</h2>
              <p className='tracking-widest flex items-center gap-5'>
                {data.text} 
                <Image src={Arrow} alt='arrow'/> 
              </p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Talk />
      {width < breakPoint ? <Footer /> : <TabletFooter />}
  </div>
)
}
