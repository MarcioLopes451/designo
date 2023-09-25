import Link from "next/link";

export function Talk(){
    return (
      <div className='mt-20 flex justify-center items-center bg-peach flex-col rounded-lg'>
      <div className='relative w-full h-96 flex justify-center items-center
       text-white flex-col md:w-[43rem] md:h-80 xl:w-[69rem]'>
        <h2 className='text-4xl text-center px-10 md:px-56'>Let’s talk about your project</h2>
        <p className='px-4 text-center mt-4 md:w-[32rem]'>
        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
        </p>
        <Link href='/contact'>
        <button className="bg-white text-black w-40 h-14 rounded-lg mt-6 font-medium tracking-wider 
        hover:bg-lightPeach hover:text-white">
          GET IN TOUCH
        </button>
        </Link>
        
      </div>
      
    </div>
    )
  }