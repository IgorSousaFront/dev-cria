'use client'

import { useState } from 'react'

// Components
import { Container } from "@/components/Container"
import { ToggleTheme } from "../ToggleTheme"

// Next
import Link from "next/link"

import { useTheme } from "next-themes"
import { useEffect } from "react"

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
        <div className="text-2xl md:text-3xl font-bold text-white">
          @DEV_CRIA
        </div>

        <nav className="hidden md:block">
          <ul>
            {navList.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-white text-xl uppercase ml-8"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </nav>
        <ToggleTheme />
      </header>
    </Container>
  )
}