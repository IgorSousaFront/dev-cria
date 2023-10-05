'use client'

// Components
import { SectionTitle } from "../Title"
import { ProjectCard, IProjectCardProps } from "../ProjectCard"

// Libs
import { Swiper, SwiperSlide } from 'swiper/react'

const projectList: IProjectCardProps[] = [
  {
    name: "Libercard Homepage",
    description: "Desenvolvimento de landing page para a empresa de benefícios Libercard, e desenvolvimento de CMS para gerenciamento de conteúdo",
    thumb: "/project-01.png",
    technologies: ['React', 'Strapi'],
    link: 'https://www.libercard.com.br/'
  },
  {
    name: "LabsAnimal Homepage",
    description: "O Laboratório de Patologia Animal SANIMAL foi fundado em 2000, por iniciativa do Médico Veterinário João de Brito Neto, e tem por finalidade atuar nas mais diferentes áreas de diagnóstico para trazer aos nossos clientes",
    thumb: "/project-02.png",
    technologies: ['Vue.js', 'Wordpress'],
    link: 'https://www.libercard.com.br/'
  },
  {
    name: "Libercard Homepage",
    description: "Desenvolvimento de landing page para a empresa de benefícios Libercard, e desenvolvimento de CMS para gerenciamento de conteúdo",
    thumb: "/project-01.png",
    technologies: ['React', 'Strapi'],
    link: 'https://www.libercard.com.br/'
  },
  {
    name: "LabsAnimal Homepage",
    description: "O Laboratório de Patologia Animal SANIMAL foi fundado em 2000, por iniciativa do Médico Veterinário João de Brito Neto, e tem por finalidade atuar nas mais diferentes áreas de diagnóstico para trazer aos nossos clientes",
    thumb: "/project-02.png",
    technologies: ['Vue.js', 'Wordpress'],
    link: 'https://www.libercard.com.br/'
  },
  {
    name: "LabsAnimal Homepage",
    description: "O Laboratório de Patologia Animal SANIMAL foi fundado em 2000, por iniciativa do Médico Veterinário João de Brito Neto, e tem por finalidade atuar nas mais diferentes áreas de diagnóstico para trazer aos nossos clientes",
    thumb: "/project-02.png",
    technologies: ['Vue.js', 'Wordpress'],
    link: 'https://www.libercard.com.br/'
  },
]

export const Projects = () => {
  return (
    <section className="py-11 overflow-hidden mt-8 md:mt-0" id="projetos">
      <SectionTitle color="light">Projetos</SectionTitle>
      <div className="mx-4 lg:-mx-5">
        <Swiper
          spaceBetween={60}
          slidesPerView={1}
          centeredSlides
          loop
          breakpoints={{
            1024: {
              slidesPerView: 1.5
            },
            1280: {
              slidesPerView: 2
            },
            1400: {
              slidesPerView: 2.5
            },
          }}
        >
          {projectList.map((project, index) => (
            <SwiperSlide key={index} className="w-[767px]">
              {({ isActive }) => (
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  thumb={project.thumb}
                  technologies={project.technologies}
                  link={project.link}
                  isActive={isActive}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}