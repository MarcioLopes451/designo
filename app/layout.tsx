import Navbar from '@/components/Nav'
import './globals.css'
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets:['latin'],
  weight:['400','500']
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
      <main className='app'>
        <Navbar />
          {children}
        </main>
    </body>
  </html>
  )
}
