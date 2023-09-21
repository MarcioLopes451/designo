'use client'
import React, { useEffect, useState } from 'react'
import Canada from '../../assets/locations/desktop/image-map-canada.png';
import TabletCanada from '../../assets/locations/tablet/image-map-canada.png';
import TabletUk from '../../assets/locations/tablet/image-map-uk.png';
import TabletAustralia from '../../assets/locations/tablet/image-map-australia.png';
import Australia from '../../assets/locations/desktop/image-map-australia.png';
import Uk from '../../assets/locations/desktop/image-map-united-kingdom.png';
import { Talk, Footer, TabletFooter } from '../page';
import Image from 'next/image';


export default function Locations() {
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
    <div className='mt-10'>
       <div className='flex justify-center items-center flex-col flex-wrap gap-10'>
        <div className='xl:flex flex-row-reverse items-center justify-center gap-9'>
            {width < breakPoint ? <Image src={Canada} alt='canada'/> : width >= breakPoint && width < med ?
            <Image src={TabletCanada} alt='tab' className='rounded-lg'/> :  <Image src={Canada} alt='canada' className='h-80 rounded-lg'/>}
            <div className='bg-seashell w-full md:mt-10 rounded-lg xl:mt-0 xl:w-[45rem] xl:h-80'>
                <div className='flex flex-col items-center justify-center md:items-start px-16'>
                    <h2 className='text-3xl text-peach mt-10'>Canada</h2>
                <div className='font-light px-6 text-center my-9 md:flex flex-row items-center justify-center gap-14 md:px-0 md:text-left'>
                    <p>
                        <span className='font-bold'>Designo Central Office</span> <br /> 3886 Wellington Street <br /> Toronto, Ontario M9C 3J5 
                        <br className='md:hidden'/> <br className='md:hidden'/>
                    </p>
                    <p>
                        <span className='font-bold'>Contact</span> <br /> P : +1 253-863-8967 <br /> M : contact@designo.co
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='xl:flex flex-row items-center justify-center gap-9'>
            {width < breakPoint ? <Image src={Australia} alt='Australia'/> : width >= breakPoint && width < med ?
             <Image src={TabletAustralia} alt='tab'/> : <Image src={Australia} alt='Australia' className='h-80 rounded-lg'/> }
            <div className='bg-seashell w-full xl:mt-0 xl:w-[45rem] xl:h-80 rounded-lg'>
            <div className='flex flex-col items-center justify-center md:items-start px-16 md:mt-10'>
                    <h2 className='text-3xl text-peach mt-10'>Australia</h2>
                <div className='font-light px-6 text-center my-9 md:flex flex-row items-center justify-center gap-14 md:px-0 md:text-left'>
                    <p>
                        <span className='font-bold'>Designo AU Office</span> <br /> 19 Balonne Street <br /> New South Wales 2443
                         <br className='md:hidden'/> <br className='md:hidden'/>
                    </p>
                    <p>
                        <span className='font-bold'>Contact</span> <br /> P : (02) 6720 9092 <br /> M : contact@designo.au
                    </p>
                </div>
                </div>
        </div>
        </div>
        <div className='xl:flex flex-row-reverse items-center justify-center gap-9'>
           {width < breakPoint ? <Image src={Uk} alt='uk'/> :  width >= breakPoint && width < med ?
            <Image src={TabletUk} alt='tab'/> : <Image src={Uk} alt='uk' className='h-80 rounded-lg'/>}
            <div className='bg-seashell w-full xl:mt-0 xl:w-[45rem] xl:h-80 rounded-lg'>
            <div className='flex flex-col items-center justify-center md:items-start px-16 md:mt-10'>
                    <h2 className='text-3xl text-peach mt-10'>United Kingdom</h2>
                <div className='font-light px-6 text-center my-9 md:flex flex-row items-center justify-center gap-14 md:px-0 md:text-left'>
                    <p>
                        <span className='font-bold'>Designo UK Office</span> <br /> 13 Colorado Way <br /> Rhyd-y-fro SA8 9GA 
                        <br className='md:hidden'/> <br className='md:hidden'/>
                    </p>
                    <p>
                        <span className='font-bold'>Contact</span> <br /> P : 078 3115 1400 <br /> M : contact@designo.uk
                    </p>
                </div>
                </div>
        </div>
        </div>
    </div>
        <Talk />
        {width < breakPoint ? <Footer /> : <TabletFooter />}
    </div>
  )
}
