'use client'
import React, { useEffect, useState } from 'react'
import { Locations } from '@/components/Locations';
import { Footer } from '@/components/Footer';
import { TabletFooter } from '@/components/TabletFooter';


export default function Contact() {
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
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  
  return (
    <div className='mt-10 w-full md:flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col flex-wrap gap-6 text-white bg-peach 
        md:w-[43rem] rounded-lg xl:w-[69rem] xl:flex-row xl:flex-nowrap'>
          <div className='text-center xl:mt-0 xl:px-14'>
          <h2 className='mt-14 text-3xl md:text-left xl:mt-0 md:px-4'>Contact Us</h2>
            <p className='text-center px-4 font-light md:text-left xl:px-0 xl:mt-5 mt-5'>
            Ready to take it to the next level? Let’s talk about your project or idea and find out 
            how we can help your business grow. If you are looking for unique digital experiences 
            that’s relatable to your users, drop us a line 
            </p>
            </div>
            <form className='xl:px-24'>
                <label htmlFor='name'></label>
                <br />
                <input
                type='text'
                placeholder='Name'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 
                md:w-[35rem] xl:w-[23rem]'
                />
                <label htmlFor='email'></label>
                <br />
                <input
                type='text'
                placeholder='Email Address'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 
                md:w-[35rem] xl:w-[23rem]'
                />
                <label htmlFor='Phone'></label>
                <br />
                <input
                type='text'
                placeholder='Phone'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 
                md:w-[35rem] xl:w-[23rem]'
                />
                <label htmlFor='name'></label>
                <br />
                <textarea
                placeholder='Your Message'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 
                md:w-[35rem] xl:w-[23rem]'
                rows={4}
                cols={40}
                >
                </textarea>
                <br />
                <div className='flex justify-center items-center mt-4 mb-16 md:justify-end'>
                <button className='w-40 h-14 bg-white text-black rounded-lg text-center hover:bg-lightPeach hover:text-white'>
                    SUBMIT
                </button>
                </div>
            </form>
        </div>
        <Locations />
        {width < breakPoint ? <Footer /> : <TabletFooter />}
    </div>
  )
}
