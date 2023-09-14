import React from 'react'
import Canada from '../../assets/locations/desktop/image-map-canada.png';
import Australia from '../../assets/locations/desktop/image-map-australia.png';
import Uk from '../../assets/locations/desktop/image-map-united-kingdom.png';
import { Talk, Footer } from '../page';
import Image from 'next/image';

export default function page() {
  return (
    <div className='mt-10'>
       <div className='flex justify-center items-center flex-col flex-wrap gap-10'>
        <div>
            <Image src={Canada} alt='canada'/>
            <div className='bg-seashell w-full'>
            <div className='flex justify-center items-center flex-col text-center py-10'>
                <h2 className='text-3xl text-peach'>Canada</h2>
                <p className='mt-5 font-light px-6'>
                <span className='font-bold'>Designo Central Office</span> <br /> 3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
                <br /> <br />
                <span className='font-bold'>Contact</span> <br /> P : +1 253-863-8967 <br /> M : contact@designo.co
                </p>
            </div>
        </div>
        </div>
        <div>
            <Image src={Australia} alt='Australia'/>
            <div className='bg-seashell w-full'>
            <div className='flex justify-center items-center flex-col text-center py-10'>
                <h2 className='text-3xl text-peach'>Australia</h2>
                <p className='mt-5 font-light px-6'>
                <span className='font-bold'>Designo AU Office</span> <br /> 19 Balonne Street <br /> New South Wales 2443
                <br /> <br />
                <span className='font-bold'>Contact</span> <br /> P : (02) 6720 9092 <br /> M : contact@designo.au
                </p>
            </div>
        </div>
        </div>
        <div>
            <Image src={Uk} alt='canada'/>
            <div className='bg-seashell w-full'>
            <div className='flex justify-center items-center flex-col text-center py-10'>
                <h2 className='text-3xl text-peach'>United Kingdom</h2>
                <p className='mt-5 font-light px-6'>
                <span className='font-bold'>Designo UK Office</span> <br /> 13 Colorado Way <br /> Rhyd-y-fro SA8 9GA
                <br /> <br />
                <span className='font-bold'>Contact</span> <br /> P : 078 3115 1400 <br /> M : contact@designo.uk
                </p>
            </div>
        </div>
        </div>
    </div>
        <Talk />
        <Footer />
    </div>
  )
}

