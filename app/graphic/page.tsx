import React from 'react'
import Image from 'next/image';
import Change from '../../assets/graphic-design/desktop/image-change.jpg';
import Boxed from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import Science from '../../assets/graphic-design/desktop/image-science.jpg';
import Web from '../../assets/home/mobile/image-web-design.jpg';
//import Graphic from '../../assets/home/mobile/image-graphic-design.jpg';
import Arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import ThreeCircles from '../../assets/shared/desktop/bg-pattern-three-circles.svg';
import { Footer } from '../page';
export const links = [
  {
    Name:'WEB DESIGN',
    image: Web,
    text:'VIEW PROJECTS',
  },
  {
    Name:'GRAPHIC DESIGN',
    image: '',
    text:'VIEW PROJECTS',
  },
]

export default function Graphic() {
return (
  <div className='mt-10'>
      <div className='bg-peach flex flex-col justify-center items-center text-center h-80 gap-10 text-white'>
          <h1 className='text-4xl tracking-wider'>Graphic Design</h1>
          <p className='font-light px-3 tracking-normal'>
          We deliver eye-catching branding materials that are tailored to meet your business objectives. 
          </p>
      </div>

      <div className='mt-7'>
          <div className='flex flex-col justify-center items-center gap-9'>
              <div>
                  <Image src={Change} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>TIM BROWN</h1>
                          <p className='text-center w-56 mt-4'>A book cover designed for Tim Brown’s new release, ‘Change’</p>
                      </div>
                  </div>
              </div>
              <div>
                  <Image src={Boxed} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>BOXED WATER</h1>
                          <p className='text-center w-56 mt-4'>A simple packaging concept made for Boxed Water</p>
                      </div>
                  </div>
              </div>
              <div>
                  <Image src={Science} alt='express' className='w-80 h-80 rounded-lg' />
                  <div className='bg-seashell rounded-lg -mt-4'>
                      <div className='flex flex-col justify-center items-center h-36'>
                          <h1 className='text-peach tracking-widest text-xl'>SCIENCE!</h1>
                          <p className='text-center w-56 mt-4'>A poster made in collaboration with the Federal Art Project</p>
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

      <div className='mt-10 flex justify-center items-center'>
        <div className='bg-peach relative w-80 h-96 flex justify-center items-center rounded-lg text-white flex-col'>
          <Image src={ThreeCircles} alt='three' className='absolute top-0 w-96'/>
          <h2 className='text-4xl text-center px-10'>Let’s talk about your project</h2>
          <p className='px-4 text-center mt-4'>
          Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
          </p>
          <button className="bg-white text-black w-40 h-14 rounded-lg mt-6 font-medium tracking-wider">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <Footer />
  </div>
)
}
