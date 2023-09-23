import Image from "next/image"
import Canada from '../assets/shared/desktop/illustration-canada.svg';
import Australia from '../assets/shared/desktop/illustration-australia.svg';
import UK from '../assets/shared/desktop/illustration-united-kingdom.svg';
import SmallCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg';
import Link from "next/link";

export function Locations(){
    return (
        <div className='mt-32'>
            <div className='flex flex-col justify-center items-center gap-20 xl:flex-row xl:gap-56'>
                <div className='relative text-center'>
                    <Image src={Canada} alt='canada'/>
                    <Image src={SmallCircle} alt='circles' className='absolute top-0'/>
                    <h2 className='mt-10 text-xl tracking-widest'>CANADA</h2>
                    <Link href='/locations'>
                    <button className='w-40 h-14 bg-peach text-center text-white rounded-lg mt-5 tracking-widest hover:bg-lightPeach'>
                        SEE LOCATION
                    </button>
                    </Link>
                </div>
                <div className='relative text-center'>
                    <Image src={Australia} alt='canada'/>
                    <Image src={SmallCircle} alt='circles' className='absolute top-0'/>
                    <h2 className='mt-10 text-xl tracking-widest'>AUSTRALIA</h2>
                    <Link href='/locations'>
                    <button className='w-40 h-14 bg-peach text-center text-white rounded-lg mt-5 tracking-widest hover:bg-lightPeach'>
                        SEE LOCATION
                    </button>
                    </Link>
                </div>
                <div className='relative text-center'>
                    <Image src={UK} alt='canada'/>
                    <Image src={SmallCircle} alt='circles' className='absolute top-0'/>
                    <h2 className='mt-10 text-xl tracking-widest'>UNITED KINGDOM</h2>
                    <Link href='/locations'>
                    <button className='w-40 h-14 bg-peach text-center text-white rounded-lg mt-5 tracking-widest hover:bg-lightPeach'>
                        SEE LOCATION
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
  }