'use client'

import { useState } from 'react'

// Components
import { Container } from "@/components/Container"
import { ToggleTheme } from "../ToggleTheme"

// Next
import Link from "next/link"

interface INavList {
  label: string
  url: string
}

const navList:INavList[] = [
  {
    label: 'Habilidades',
    url: '#habilidades'
  },
  {
    label: 'Projetos',
    url: '#projetos'
  },
  {
    label: 'Contato',
    url: '#contato'
  },
]

export const Header = () => {  
  return (
    <Container>
      <header className="flex items-center justify-between py-5 md:py-8">
        <div className="text-2xl md:text-3xl font-bold text-font-light dark:text-white">
          @DEV_CRIA
        </div>

        <nav className="hidden md:block">
          <ul className='flex gap-8'>
            {navList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="text-font-light dark:text-white text-xl uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ToggleTheme />
      </header>
    </Container>
  )
}