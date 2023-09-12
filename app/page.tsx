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

export const links = [
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
  return (
    <main className="mt-9">
      <div className='text-center pt-20 px-7 text-white relative w-full bg-peach'>
        <h2 className='text-3xl'>
          Award-winning custom designs and digital branding solutions
        </h2>
        <p className="mt-5 font-light">
        With over 10 years in the industry, we are experienced in creating fully 
        responsive websites, app design, and engaging brand experiences. 
        Find out more about our services.
        </p>
        <button className="bg-white text-black w-40 h-14 rounded-lg mt-6 font-medium tracking-wider">
          LEARN MORE
        </button>
        <Image src={Hero} alt='hero'/>
        <Image src={Circle} alt='circle' className='absolute top-28'/>
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

        <div className='mt-10 bg-white'>
          <div className='flex justify-center items-center flex-col flex-wrap gap-12'>
            <div className='flex justify-center items-center flex-col relative'>
              <Image src={Passionate} alt='passionate'/>
              <Image src={SmallCircle} alt='circle' className='absolute top-0'/>
              <h2 className='text-center text-xl tracking-widest mt-6'>PASSIONATE</h2>
              <p className='text-center px-6 mt-6'>
                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. 
                We merge art, design, and technology into exciting new solutions.
              </p>
            </div>
            <div className='flex justify-center items-center flex-col relative'>
              <Image src={Resourceful} alt='res'/>
              <Image src={SmallCircle} alt='circle' className='absolute top-0'/>
              <h2 className='text-center text-xl tracking-widest mt-6'>RESOURCEFUL</h2>
              <p className='text-center px-6 mt-6'>
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value 
              customer collaboration. It guarantees superior results that fulfill our clients’ needs.
              </p>
            </div>
            <div className='flex justify-center items-center flex-col relative'>
              <Image src={Friendly} alt='friendly'/>
              <Image src={SmallCircle} alt='circle' className='absolute top-0'/>
              <h2 className='text-center text-xl tracking-widest mt-6'>FRIENDLY</h2>
              <p className='text-center px-6 mt-6'>
              We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers,
               and we strive to give them the best experience a company can provide.
              </p>
            </div>
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
    </main>
  )
}

function Footer(){
return (
  <div className='bg-black mt-4'>
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