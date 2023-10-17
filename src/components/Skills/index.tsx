'use client'

// React
import { useContext, useState } from "react"

// Components
import { Container } from "@/components/Container"
import { SectionTitle } from "../Title"
import { Button } from "../Button"
import { SkillCard, ISkillCardProps } from "../SkillCard"

// Icons
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoVuejs,
  BiLogoGit,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoSass
} from "react-icons/bi"

import { DiScrum } from "react-icons/di"

// Contexts
import { ModalContext } from "@/contexts/modal-context"
import { useTheme } from "next-themes"

const skillList: ISkillCardProps[] = [
  {
    name: 'Typescript',
    icon: BiLogoTypescript
  },
  {
    name: 'Javascript',
    icon: BiLogoJavascript
  },
  {
    name: 'React',
    icon: BiLogoReact,
  },
  {
    name: 'Vue.Js',
    icon: BiLogoVuejs,
  },
  {
    name: 'HTML',
    icon: BiLogoHtml5,
  },
  {
    name: 'GIT',
    icon: BiLogoGit,
  },
  {
    name: 'CSS',
    icon: BiLogoCss3
  },
  {
    name: 'Sass',
    icon: BiLogoSass
  },
  {
    name: 'Node',
    icon: BiLogoNodejs
  },
  {
    name: 'SCRUM',
    icon: DiScrum
  },
]

export const Skills = () => {
  const { toggleVisibility: toggleModal } = useContext(ModalContext)

  const { theme } = useTheme()

  return (
    <section id="habilidades" className="w-auto mx-5 md:w-[95vw] py-11 md:mx-auto bg-white dark:bg-dark-bg shadow-lg z-40 relative">
      <Container>
        <SectionTitle color="primary">Habilidades</SectionTitle>
        <div className="flex items-center gap-4 justify-center flex-wrap">
          {skillList.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
        <div className="flex items-center justify-center pt-14 w-full md:w-60 mx-auto">
          <Button onClick={toggleModal} type={theme === 'light' ? 'outlined' : 'filled'}>Baixe meu curriculo</Button>
        </div>
      </Container>
    </section>
  )
}