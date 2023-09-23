import Link from "next/link"

type Nav = {
    isOpen: boolean
    onClose: () => void
}
export default function MobileNav({isOpen}: Nav) {
    return isOpen ? (
      <div className='absolute top-24 bg-transparent w-full z-50' style={{height:'500px'}}>
          <div className="bg-black py-9">
             <div className='flex flex-col gap-9 text-white text-2xl px-6 font-light tracking-widest'>
                <Link href='/about' className="">
                    OUR COMPANY
                </Link>
                <Link href='/locations' className="">
                   LOCATIONS
                </Link>
                <Link href='/contact' className="">
                    CONTACT
                </Link>
             </div>
          </div>
      </div>
    ) : null
  }