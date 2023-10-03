import './globals.css'
// Import Swiper styles
import 'swiper/css'

import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'

import { Header } from '@/components/Header'

const robotoCondensed = Roboto_Condensed({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Igor Sousa - Frontend',
  description: 'A web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className} bg-purple-base`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
