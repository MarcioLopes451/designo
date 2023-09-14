//'use server'
import React from 'react'
import Image from 'next/image';
import Airfilter from '../../assets/app-design/desktop/image-airfilter.jpg';
import Eyecam from '../../assets/app-design/desktop/image-eyecam.jpg';
import Faceit from '../../assets/app-design/desktop/image-faceit.jpg';
import Todo from '../../assets/app-design/desktop/image-todo.jpg';
import Loopstudios from '../../assets/app-design/desktop/image-loopstudios.jpg';
import Web from '../../assets/home/mobile/image-web-design.jpg';
import Graphic from '../../assets/home/mobile/image-graphic-design.jpg';
import Arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import ThreeCircles from '../../assets/shared/desktop/bg-pattern-three-circles.svg';
import { Talk, Footer } from '../page';
export const links = [
  {
    Name:'WEB DESIGN',
    image: Web,
    text:'VIEW PROJECTS',
  },
  {
    Name:'GRAPHIC DESIGN',
    image: Graphic,
    text:'VIEW PROJECTS',
  },
]

export default function App() {
return (
  <div className='mt-10'>
      <div className='bg-peach flex flex-col justify-center items-center text-center h-80 gap-10 text-white'>
          <h1 className='text-4xl tracking-wider'>App Design</h1>
          <p className='font-light px-3 tracking-normal'>
            Our mobile designs bring intuitive digital solutions to your customers right at their fingertips. 
          </p>
      </div>

      <div className='mt-7'>
          <div className='flex flex-col justify-center items-center gap-9'>
              <div>
                  <Image src={Airfilter} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>AIRFILTER</h1>
                          <p className='text-center w-56 mt-4'>Solving the problem of poor indoor air quality by filtering the air</p>
                      </div>
                  </div>
              </div>
              <div>
                  <Image src={Eyecam} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>EYECAM</h1>
                          <p className='text-center w-56 mt-4'>Product that lets you edit your favorite photos and videos at any time</p>
                      </div>
                  </div>
              </div>
              <div>
                  <Image src={Faceit} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>FACEIT</h1>
                          <p className='text-center w-56 mt-4'>Get to meet your favorite internet superstar with the faceit app</p>
                      </div>
                  </div>
              </div>
              <div>
                  <Image src={Todo} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>TODO</h1>
                          <p className='text-center w-56 mt-4'>A todo app that features cloud sync with light and dark mode</p>
                      </div>
                  </div>
              </div>
              <div>
                  <Image src={Loopstudios} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>LOOPSTUDIOS</h1>
                          <p className='text-center w-56 mt-4'>A VR experience app made for Loopstudios</p>
                      </div>
                  </div>
              </div>
             
          </div>
      </div>

      <div className='bg-white'>
      <div className='flex justify-center items-center flex-col flex-wrap gap-6 pt-6'>
        {links.map((data,key) => (
          <div key={key}>
            <div className='relative'>
            <Image src={data.image} alt='links' className='w-80 h-64 rounded-2xl'/>
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
      <Footer />
  </div>
)
}
