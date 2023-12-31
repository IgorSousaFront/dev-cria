// React
import React, { useContext } from 'react'

// Styles
import './globals.css'
import 'swiper/css'

import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'

// Components
import { Header } from '@/components/Header'

// Contexts
import { ModalProvider } from "@/contexts/modal-context"
import { ThemeProvider } from '@/contexts/theme-context'

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
    <ModalProvider>
      <html lang="en">
        <body className={`${robotoCondensed.className} bg-base dark:bg-dark-base`}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ModalProvider>
  )
}
