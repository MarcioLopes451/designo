import Navbar from '@/components/Nav'
import './globals.css'
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets:['latin'],
  weight:['400','500','100','200','300']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <div className='main'>
        <div className='gradient' />
      </div>
      <main className={jost.className}>
        <Navbar />
          {children}
        </main>
    </body>
  </html>
  )
}
