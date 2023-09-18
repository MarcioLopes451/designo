'use client'
import React, { useEffect, useState } from 'react'
import { Locate } from '../about/page';
import { Footer,TabletFooter} from '../page';

export default function Contact() {
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
    <div className='mt-10 w-full md:flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col flex-wrap gap-6 text-white bg-peach md:w-[43rem] rounded-lg'>
            <h2 className='mt-14 text-3xl md:text-left'>Contact Us</h2>
            <p className='text-center px-4 font-light md:text-left'>
            Ready to take it to the next level? Let’s talk about your project or idea and find out 
            how we can help your business grow. If you are looking for unique digital experiences 
            that’s relatable to your users, drop us a line 
            </p>
            <form>
                <label htmlFor='name'></label>
                <br />
                <input
                type='text'
                placeholder='Name'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 md:w-[35rem]'
                />
                <label htmlFor='email'></label>
                <br />
                <input
                type='text'
                placeholder='Email Address'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 md:w-[35rem]'
                />
                <label htmlFor='Phone'></label>
                <br />
                <input
                type='text'
                placeholder='Phone'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 md:w-[35rem]'
                />
                <label htmlFor='name'></label>
                <br />
                <textarea
                placeholder='Your Message'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50 md:w-[35rem]'
                rows={4}
                cols={40}
                >
                </textarea>
                <br />
                <div className='flex justify-center items-center mt-4 mb-16 md:justify-end'>
                <button className='w-40 h-14 bg-white text-black rounded-lg text-center'>
                    SUBMIT
                </button>
                </div>
            </form>
        </div>
        <Locate />
        {width < breakPoint ? <Footer /> : <TabletFooter />}
    </div>
  )
}
