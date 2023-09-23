'use client'
import Hero from '../assets/home/desktop/image-hero-phone.png';
import Circle from '../assets/home/desktop/bg-pattern-hero-home.svg';
import Web from '../assets/home/mobile/image-web-design.jpg';
import App from '../assets/home/mobile/image-app-design.jpg';
import Graphic from '../assets/home/mobile/image-graphic-design.jpg';
import Arrow from '../assets/shared/desktop/icon-right-arrow.svg';
import Passionate from '../assets/home/desktop/illustration-passionate.svg';
import Resourceful from '../assets/home/desktop/illustration-resourceful.svg';
import Friendly from '../assets/home/desktop/illustration-friendly.svg';
import SmallCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg';
import ThreeCircles from '../assets/shared/desktop/bg-pattern-three-circles.svg';
import Image from 'next/image';
import DesktopWeb from '../assets/home/desktop/image-web-design-large.jpg';
import Canada from '../assets/shared/desktop/illustration-canada.svg';
import Australia from '../assets/shared/desktop/illustration-australia.svg';
import UK from '../assets/shared/desktop/illustration-united-kingdom.svg';
import { Talk } from '@/components/Talk';
import { Footer } from '@/components/Footer';
import { TabletFooter } from '@/components/TabletFooter';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const links = [
  {
    Name:'WEB DESIGN',
    image: Web,
    text:'VIEW PROJECTS',
    link: '/web'
  },
  {
    Name:'APP DESIGN',
    image: App,
    text:'VIEW PROJECTS',
  },
  {
    Name:'GRAPHIC DESIGN',
    image: Graphic,
    text:'VIEW PROJECTS',
  },
]

export default function Home() {

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
    <main className="mt-9 md:flex flex-col justify-center items-center">
      <div className='text-center pt-20 px-7 text-white relative w-full bg-peach md:w-[43rem] rounded-lg 
      xl:w-[69rem] xl:flex items-center xl:pt-6 xl:h-[30rem]'>
        <div className='xl:ml-10'>
        <h2 className='text-3xl md:text-5xl px-10 xl:px-0 xl:text-left'>
          Award-winning custom designs and digital branding solutions
        </h2>
        <p className="mt-5 font-light md:px-24 text-base xl:px-0 xl:text-left">
        With over 10 years in the industry, we are experienced in creating fully 
        responsive websites, app design, and engaging brand experiences. 
        Find out more about our services.
        </p>
        <Link href='/about'>
        <button className="bg-white text-black w-40 h-14 rounded-lg mt-6 font-medium tracking-wider 
        xl:flex items-center justify-center hover:bg-lightPeach hover:text-white">
          LEARN MORE
        </button>
        </Link>

        </div>
        <Image src={Hero} alt='hero' className='xl:w-[30rem]'/>
      </div>
      <div className='bg-white'>

       {width < large ? <div className='flex justify-center items-center flex-col flex-wrap gap-6 pt-6'>
          {links.map((data,key) => (
            <div key={key}>
              <div className='relative'>
              <Image src={data.image} alt='links' className='w-80 h-64 rounded-2xl md:w-[43rem]'/>
              <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-2xl hover:bg-[#e7816b99]'>
                <div className='mt-20 flex justify-center flex-col gap-3 items-center'>
                <h2 className='text-3xl tracking-wide'>{data.Name}</h2>
                <Link href='/'>
                <p className='tracking-widest flex items-center gap-5'>
                  {data.text} 
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </Link>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div> : 
        <div className='flex justify-center items-center flex-row flex-wrap gap-10 pt-6'>
          <Link href='/web'>
          <div className='relative'>
            <Image src={DesktopWeb} alt='web' className='rounded-lg'/>
            <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-lg hover:bg-[#e7816b99]'>
                <div className='flex justify-center flex-col gap-3 items-center mt-64'>
                <h2 className='text-3xl tracking-wide'>WEB DESIGN</h2>
                <p className='tracking-widest flex items-center gap-5'>
                  VIEW PROJECTS
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </div>
              </div>
          </div>
          </Link>
         
          <div className='flex flex-col flex-wrap gap-9'>
            <Link href='/app'>
            <div className='relative'>
            <Image src={App} alt='web' className='rounded-lg w-[33rem] h-[19rem]'/>
            <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-lg hover:bg-[#e7816b99]'>
                <div className='flex justify-center flex-col gap-3 items-center mt-32'>
                <h2 className='text-3xl tracking-wide'>APP DESIGN</h2>
                <p className='tracking-widest flex items-center gap-5'>
                  VIEW PROJECTS
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </div>
              </div>
            </div>
            </Link>

            <Link href='/graphic'>
            <div className='relative'>
            <Image src={Graphic} alt='web' className='rounded-lg w-[33rem] h-[19rem]'/>
            <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-lg hover:bg-[#e7816b99]'>
                <div className='flex justify-center flex-col gap-3 items-center mt-32'>
                <h2 className='text-3xl tracking-wide'>GRAPHIC DESIGN</h2>
                <p className='tracking-widest flex items-center gap-5'>
                  VIEW PROJECTS
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </div>
              </div>
            </div>
            </Link>
          </div>
          </div>}
        </div>
        <div className='mt-10'>
          <div className='flex justify-center items-center flex-col flex-wrap gap-10 xl:flex-row xl:flex-nowrap xl:gap-0'>
            <div className='flex justify-center items-center flex-col relative md:flex-row gap-10 px-6 xl:flex-col'>
              <Image src={Passionate} alt='passionate'/>
              <Image src={SmallCircle} alt='circle' className='absolute top-0 md:left-7 xl:left-28'/>
              <div>
              <h2 className='text-center text-xl tracking-widest mt-6 md:text-left xl:text-center'>PASSIONATE</h2>
              <p className='text-center px-6 mt-6 md:text-left md:px-0 xl:text-center xl:px-14'>
                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. 
                We merge art, design, and technology into exciting new solutions.
              </p>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col relative md:flex-row gap-10 px-6 xl:flex-col'>
              <Image src={Resourceful} alt='res'/>
              <Image src={SmallCircle} alt='circle' className='absolute top-0 md:left-7 xl:left-28'/>
              <div>
              <h2 className='text-center text-xl tracking-widest mt-6 md:text-left xl:text-center'>RESOURCEFUL</h2>
              <p className='text-center px-6 mt-6 md:text-left md:px-0 xl:text-center xl:px-14'>
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value 
              customer collaboration. It guarantees superior results that fulfill our clients’ needs.
              </p>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col relative md:flex-row gap-10 px-6 xl:flex-col'>
              <Image src={Friendly} alt='friendly'/>
              <Image src={SmallCircle} alt='circle' className='absolute top-0 md:left-7 xl:left-28'/>
              <div>
              <h2 className='text-center text-xl tracking-widest mt-6 md:text-left xl:text-center'>FRIENDLY</h2>
              <p className='text-center px-6 mt-6 md:text-left md:px-0 xl:text-center xl:px-14'>
              We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers,
               and we strive to give them the best experience a company can provide.
              </p>
              </div>
            </div>
          </div>
        </div>
        <Talk />
        {width < breakPoint ? <Footer /> : <TabletFooter />}
    </main>
  )
}



