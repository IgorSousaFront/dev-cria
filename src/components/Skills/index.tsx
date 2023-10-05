'use client'

// React
import { useContext } from "react"

// Components
import { Container } from "@/components/Container"
import { SectionTitle } from "../Title"
import { SkillLoader, ISkillLoaderProps } from "../SkillLoader"
import { Button } from "../Button"

// Contexts
import { ModalContext } from "@/contexts/modal-context"

const skillList: ISkillLoaderProps[] = [
  {
    label: 'Typescript',
    percent: 85
  },
  {
    label: 'React',
    percent: 80
  },
  {
    label: 'HTML',
    percent: 90
  },
  {
    label: 'CSS',
    percent: 90
  },
  {
    label: 'GIT',
    percent: 65
  },
  {
    label: 'SCRUM',
    percent: 85
  },
  {
    label: 'Node',
    percent: 45
  },
  {
    label: 'Vue',
    percent: 60
  },
]

export const Skills = () => {
  const { toggleVisibility: toggleModal } = useContext(ModalContext)

  return (
    <section id="habilidades" className="w-auto mx-5 md:w-[95vw] py-11 md:mx-auto bg-white dark:bg-dark-bg shadow-lg">
      <Container>
        <SectionTitle color="primary">Habilidades</SectionTitle>
        <div className="flex gap-y-5 flex-wrap">
          {skillList.map((skill, index) => (
            <div className="w-full md:w-2/4 px-3" key={index}>
              <SkillLoader label={skill.label} percent={skill.percent}/>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-14 w-full md:w-60 mx-auto">
          <Button onClick={toggleModal} type="outlined">Baixe meu curriculo</Button>
        </div>
      </Container>
    </section>
  )
}