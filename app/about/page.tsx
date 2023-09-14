import React from 'react';
import MobileAbout from '../../assets/about/mobile/image-about-hero.jpg';
import Talent from '../../assets/about/mobile/image-world-class-talent.jpg';
import Canada from '../../assets/shared/desktop/illustration-canada.svg';
import Australia from '../../assets/shared/desktop/illustration-australia.svg';
import UK from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import SmallCircle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';
import Real from '../../assets/about/mobile/image-real-deal.jpg';
import { Talk, Footer } from '../page';
import Image from 'next/image';

export default function About() {
  return (
    <div className='mt-10'>
        <div className='flex justify-center items-center flex-col flex-wrap'>
            <Image src={MobileAbout} alt='hero'/>
            <div className='bg-peach w-full'>
                <div className='flex justify-center items-center flex-col text-center my-16 text-white'>
                    <h2 className='text-3xl'>About Us</h2>
                    <p className='mt-5 font-light px-6'>
                    Founded in 2010, we are a creative agency that produces lasting results 
                    for our clients. We’ve partnered with many startups, corporations, and 
                    nonprofits alike to craft designs that make real impact. We’re always 
                    looking forward to creating brands, products, and digital experiences 
                    that connect with our clients’ audiences. 
                    </p>
                </div>
            </div>
            <Image src={Talent} alt='talent'/>
            <div className='bg-seashell'>
                <div className='flex justify-center items-center flex-col my-14'>
                    <h2 className='text-peach text-3xl'>World-class talent</h2>
                    <p className='font-light text-sm text-center px-5 mt-5'>
                    We are a crew of strategists, problem-solvers, and technologists. Every design 
                    is thoughtfully crafted from concept to launch, ensuring success in its given market. 
                    We are constantly updating our skills in a myriad of platforms.
                    <br />
                    <br />
                    Our team is multi-disciplinary and we are not merely interested in form — content and 
                    meaning are just as important. We give great importance to craftsmanship, service, 
                    and prompt delivery. Clients have always been impressed with our high-quality outcomes 
                    that encapsulates their brand’s story and mission.
                    </p>
                </div>
            </div>
        </div>

        <div className='mt-10'>
            <div className='flex flex-col justify-center items-center gap-20'>
                <div className='relative text-center'>
                    <Image src={Canada} alt='canada'/>
                    <Image src={SmallCircle} alt='circles' className='absolute top-0'/>
                    <h2 className='mt-10 text-xl tracking-widest'>CANADA</h2>
                    <button className='w-40 h-14 bg-peach text-center text-white rounded-lg mt-5 tracking-widest'>
                        SEE LOCATION
                    </button>
                </div>
                <div className='relative text-center'>
                    <Image src={Australia} alt='canada'/>
                    <Image src={SmallCircle} alt='circles' className='absolute top-0'/>
                    <h2 className='mt-10 text-xl tracking-widest'>AUSTRALIA</h2>
                    <button className='w-40 h-14 bg-peach text-center text-white rounded-lg mt-5 tracking-widest'>
                        SEE LOCATION
                    </button>
                </div>
                <div className='relative text-center'>
                    <Image src={UK} alt='canada'/>
                    <Image src={SmallCircle} alt='circles' className='absolute top-0'/>
                    <h2 className='mt-10 text-xl tracking-widest'>UNITED KINGDOM</h2>
                    <button className='w-40 h-14 bg-peach text-center text-white rounded-lg mt-5 tracking-widest'>
                        SEE LOCATION
                    </button>
                </div>
            </div>
        </div>

        <div className='mt-10'>
            <div className='flex justify-center items-center flex-col flex-wrap'>
                <Image src={Real} alt='real'/>
                <div className='bg-seashell'>
                    <div className='flex justify-center items-center flex-col flex-wrap text-center my-16'>
                        <h2 className='text-3xl text-peach'>The Real Deal</h2>
                        <p className='mt-5 font-light px-6'>
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective 
                        to every opportunity. We make design and technology more accessible and give you tools to measure success.
                        <br />
                        <br />
                        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
                        we inspire audiences to take action and drive real results.
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
