import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next js',
  description: 'Generated by create next app',
  icons: {
    icon: ['/favicon.ico?v=4']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className && "relative min-h-screen"} >

        {children}
        <Footer /></body>
    </html>
  )
}
