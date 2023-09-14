import React from 'react'
import { Locate } from '../about/page';
import { Footer } from '../page';

export default function page() {
  return (
    <div className='mt-10  w-full'>
        <div className='flex justify-center items-center flex-col flex-wrap gap-6 text-white bg-peach'>
            <h2 className='mt-14 text-3xl'>Contact Us</h2>
            <p className='text-center px-4 font-light'>
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
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50'
                />
                <label htmlFor='email'></label>
                <br />
                <input
                type='text'
                placeholder='Email Address'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50'
                />
                <label htmlFor='Phone'></label>
                <br />
                <input
                type='text'
                placeholder='Phone'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50'
                />
                <label htmlFor='name'></label>
                <br />
                <textarea
                placeholder='Your Message'
                className='bg-peach text-white w-80 border-b border-white py-3 mb-2 placeholder-white placeholder:opacity-50'
                rows={4}
                cols={40}
                >
                </textarea>
                <br />
                <div className='flex justify-center items-center mt-4 mb-16'>
                <button className='w-40 h-14 bg-white text-black rounded-lg text-center'>
                    SUBMIT
                </button>
                </div>
            </form>
        </div>
        <Locate />
        <Footer />
    </div>
  )
}
