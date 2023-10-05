import Image from "next/image"
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
    <div className={`bg-white p-5 flex flex-col md:flex-row gap-5 ${!isActive && 'blur-sm'}`}>
      <div className="h-[251px] w-full md:w-[244px] min-w-[244px] overflow-hidden relative">
        <Image src={thumb} alt="Projeto Libercard" fill className="object-cover object-top"/>
      </div>
      <div className="flex flex-col justify-between md:h-[251px]">
        <div>
          <p className="text-blue-primary font-bold mb-5 text-3xl text-center md:text-left">{name}</p>
          <p className="text-black hidden md:block">{description}</p>
        </div>
        <div className="flex items-end justify-between">
          <div className="hidden md:flex">
            {technologies.map((item, index) => (
              <p key={index} className="bg-light-green rounded-full text-white py-[2px] px-5 mr-2">{item}</p>
            ))}
          </div>
          <div className="w-full sm:w-40">
            <Button onClick={() => console.log(link)}>Visitar site</Button>
          </div>
        </div>
      </div>
    </div>
  )
}