
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
import Logo from '../assets/shared/desktop/logo-light.png';
import Facebook from '../assets/shared/desktop/icon-facebook.svg';
import Youtube from '../assets/shared/desktop/icon-youtube.svg';
import Twitter from '../assets/shared/desktop/icon-twitter.svg';
import Pinterest from '../assets/shared/desktop/icon-pinterest.svg';
import Instagram from '../assets/shared/desktop/icon-instagram.svg';
import Image from 'next/image';
import DesktopWeb from '../assets/home/desktop/image-web-design-large.jpg';
import Canada from '../assets/shared/desktop/illustration-canada.svg';
import Australia from '../assets/shared/desktop/illustration-australia.svg';
import UK from '../assets/shared/desktop/illustration-united-kingdom.svg';
import { useEffect, useState } from 'react';


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
  {
    Name:'GRAPHIC DESIGN',
    image: Graphic,
    text:'VIEW PROJECTS',
  },
]

export default function Home() {

  const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;
    const med = 1024;
    const large = 1440


    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);
  return (
    <main className="mt-9 md:flex flex-col justify-center items-center">
      <div className='text-center pt-20 px-7 text-white relative w-full bg-peach md:w-[43rem] rounded-lg xl:w-[69rem] xl:flex items-center xl:pt-6'>
        <div>
        <h2 className='text-3xl md:text-5xl px-10'>
          Award-winning custom designs and digital branding solutions
        </h2>
        <p className="mt-5 font-light md:px-24 text-base">
        With over 10 years in the industry, we are experienced in creating fully 
        responsive websites, app design, and engaging brand experiences. 
        Find out more about our services.
        </p>
        <button className="bg-white text-black w-40 h-14 rounded-lg mt-6 font-medium tracking-wider">
          LEARN MORE
        </button>
        </div>
        <Image src={Hero} alt='hero'/>
      </div>
      <div className='bg-white'>

       {width < large ? <div className='flex justify-center items-center flex-col flex-wrap gap-6 pt-6'>
          {links.map((data,key) => (
            <div key={key}>
              <div className='relative'>
              <Image src={data.image} alt='links' className='w-80 h-64 rounded-2xl md:w-[43rem]'/>
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
        </div> : 
        <div className='flex justify-center items-center flex-row flex-wrap gap-10 pt-6'>
          <div className='relative'>
            <Image src={DesktopWeb} alt='web' className='rounded-lg'/>
            <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-2xl'>
                <div className='flex justify-center flex-col gap-3 items-center mt-64'>
                <h2 className='text-3xl tracking-wide'>WEB DESIGN</h2>
                <p className='tracking-widest flex items-center gap-5'>
                  VIEW PROJECTS
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </div>
              </div>
          </div>

          <div className='flex flex-col flex-wrap gap-9'>
            <div className='relative'>
            <Image src={App} alt='web' className='rounded-lg w-[33rem] h-[19rem]'/>
            <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-2xl'>
                <div className='flex justify-center flex-col gap-3 items-center mt-32'>
                <h2 className='text-3xl tracking-wide'>APP DESIGN</h2>
                <p className='tracking-widest flex items-center gap-5'>
                  VIEW PROJECTS
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </div>
              </div>
            </div>
            <div className='relative'>
            <Image src={Graphic} alt='web' className='rounded-lg w-[33rem] h-[19rem]'/>
            <div className='absolute top-0 left-0 text-white bg-trans w-full h-full rounded-2xl'>
                <div className='flex justify-center flex-col gap-3 items-center mt-32'>
                <h2 className='text-3xl tracking-wide'>GRAPHIC DESIGN</h2>
                <p className='tracking-widest flex items-center gap-5'>
                  VIEW PROJECTS
                  <Image src={Arrow} alt='arrow'/> 
                </p>
                </div>
              </div>
            </div>
          </div>
          </div>}
        </div>
        <div className='mt-10 bg-white'>
          <div className='flex justify-center items-center flex-col flex-wrap gap-12 xl:flex-row xl:flex-nowrap'>
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

export function Talk(){
  return (
    <div className='mt-20 flex justify-center items-center bg-peach flex-col'>
    <div className='relative w-80 h-96 flex justify-center items-center rounded-lg
     text-white flex-col md:w-[43rem] md:h-80 xl:w-[69rem]'>
      <h2 className='text-4xl text-center px-10 md:px-56'>Let’s talk about your project</h2>
      <p className='px-4 text-center mt-4 md:w-[32rem]'>
      Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
      </p>
      <button className="bg-white text-black w-40 h-14 rounded-lg mt-6 font-medium tracking-wider">
        GET IN TOUCH
      </button>
    </div>
    
  </div>
  )
}

export function Footer(){
return (
  <div className='bg-black mt-4 md:w-full'>
    <div className='flex justify-center items-center py-8 flex-col'>
      <Image src={Logo} alt='/' className='w-48'/>
      <div className='flex flex-col justify-center items-center mt-7 border-t-2 border-white gap-8 text-white'>
        <p className='mt-10'>OUR COMPANY</p>
        <p>LOCATIONS</p>
        <p>CONTACT</p>
        <div className='flex flex-col justify-center items-center'>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className='flex justify-center items-center gap-4'>
        <Image src={Facebook} alt='/'/>
        <Image src={Youtube} alt='/'/>
        <Image src={Twitter} alt='/'/>
        <Image src={Pinterest} alt='/'/>
        <Image src={Instagram} alt='/'/>
        </div>
      </div>
    </div>
  </div>
)
}

export function TabletFooter(){
  return (
    <div className='bg-black w-full mt-10'>
      <div className='flex flex-col justify-around gap-8 text-white px-9'>
        <div className='flex justify-between items-center py-16'>
        <Image src={Logo} alt='/' className='w-48'/>
        <div className='flex justify-between items-center gap-6'>
        <p>OUR COMPANY</p>
        <p>LOCATIONS</p>
        <p>CONTACT</p>
        </div>
        </div>
        <div className='flex justify-between my-9'>
        <div className='flex flex-col justify-center items-center'>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className='flex justify-center items-center gap-4'>
        <Image src={Facebook} alt='/'/>
        <Image src={Youtube} alt='/'/>
        <Image src={Twitter} alt='/'/>
        <Image src={Pinterest} alt='/'/>
        <Image src={Instagram} alt='/'/>
        </div>
        </div>
      </div>
    </div>
  )
}


