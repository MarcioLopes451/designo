import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'peach':'#E7816B',
      'black':'#1D1C1E',
      'white':' #FFFFFF',
      'lightPeach':' #FFAD9B',
      'darkGray':'#333136',
      'lightGray':'#F1F3F5',
      'trans':'#00000099'
      }
    },
  },
  plugins: [],
}
export default config
