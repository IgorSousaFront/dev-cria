// Next
import Image from "next/image"

// Components
import { Button } from "../Button"

export interface IProjectCardProps {
  name: string
  thumb: string
  description: string
  technologies: string[]
  link: string
  isActive?: boolean
}

export const ProjectCard = ({name, thumb, description, technologies, link, isActive}: IProjectCardProps) => {
  return (
    <div className={`bg-white dark:bg-dark-bg p-5 flex flex-col md:flex-row gap-5 ${!isActive && 'blur-sm'}`}>
      <div className="h-[251px] w-full md:w-[244px] min-w-[244px] overflow-hidden relative">
        <Image src={thumb} alt="Projeto Libercard" fill className="object-cover object-top"/>
      </div>
      <div className="flex flex-col justify-between md:h-[251px]">
        <div>
          <p className="text-font-light dark:text-white font-bold mb-5 text-3xl text-center md:text-left">{name}</p>
          <p className="text-font-light hidden md:block dark:text-white">{description}</p>
        </div>
        <div className="flex items-end justify-between">
          <div className="hidden md:flex">
            {technologies.map((item, index) => (
              <p key={index} className="bg-font-light dark:bg-dark-base rounded-full text-white dar:text-primary py-[2px] px-5 mr-2">{item}</p>
            ))}
          </div>
          <div className="w-full sm:w-40">
            <Button onClick={() => window.open(link, '_ blank')}>Visitar site</Button>
          </div>
        </div>
      </div>
    </div>
  )
}