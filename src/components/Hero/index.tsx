'use client'
import { useContext, useEffect, useState } from "react"

// Components
import { Container } from "@/components/Container"
import { SocialIcon, ISocialIconsProps } from "@/components/SocialIcon"
import { Button } from "@/components/Button"
import { Modal } from "../Modal"
import { SectionTitle } from "../Title"

// Next
import Image from "next/image"
import { useRouter } from "next/navigation"

// Icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

// Contexts
import { ModalContext } from "@/contexts/modal-context"

import { useTheme } from "next-themes"
import { PageOverlay } from "../PageOverlay"

const socialListItems: ISocialIconsProps[] = [
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/igorsousafront/'
  },
  {
    icon: <FaGithub />,
    link: 'https://github.com/IgorSousaFront'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/igor_tavares21/'
  },
]

interface IheroDetailsProps {
  icon: string
  size: number
  position: {
    top?: number
    left?: number
    right?: number
    bottom?: number
  }
}

const heroDetails: IheroDetailsProps[] = [
  {
    icon: '/hero-icons-01.svg',
    size: 60,
    position: {
      top: 132,
      left: 10,
    }
  },
  {
    icon: '/hero-icons-02.svg',
    size: 113,
    position: {
      top: 38,
      right: 40,
    }
  },
  {
    icon: '/hero-icons-03.svg',
    size: 80,
    position: {
      top: 280,
      left: 80,
    }
  },
  {
    icon: '/hero-icons-04.svg',
    size: 50,
    position: {
      top: 500,
      left: 15,
    }
  },
  {
    icon: '/hero-icons-05.svg',
    size: 140,
    position: {
      right: -10,
      bottom: 60,
    }
  },
]

export const Hero = () => {
  const router = useRouter()
  const { isOpen: isModalOpen, toggleVisibility: toggleModal } = useContext(ModalContext)
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false)
  const [heroImage, setHeroImage] = useState<string | undefined>(undefined)
  const { theme } = useTheme()

  useEffect(() => {
    if(theme === 'light') {
      setHeroImage('/banner__image.png')
    } else {
      setHeroImage('/banner__image-dark.png')
    }
  }, [theme])

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayOpen(true)
    }, 1000)
  }, [])

  return (
    <Container>
      <div className="md:flex items-center justify-between">
        <div className="my-16 lg:my-0 md:w-full lg:w-2/4">
          {socialListItems.map((social, index) => (
            <SocialIcon key={index} icon={social.icon} link={social.link} />
          ))}
          <h1 className="my-6 font-bold text-[40px] md:text-5xl text-font-light dark:text-white">
            Olá, me chamo <br />
            <span className="text-primary">Igor Sousa </span>
            e sou dev!
          </h1>
          <p className="text-xl md:text-3xl mb-7 text-font-light dark:text-white">Há 8 anos desenvolvendo interfaces <br /> para projetos incríveis!</p>
          <div className="flex items-center flex-col sm:flex-row justify-start gap-4 sm:w-3/4 lg:w-full">
            <Button onClick={() => router.push('/#projetos')}>Projetos</Button>
            <Button onClick={toggleModal} type="outlined" color="light">Baixe meu curriculo</Button>
          </div>
        </div>
        {heroImage ? (
          <div className="relative hidden lg:block max-w-full w-[500px] h-[250px] lg:h-[583px]">
            <Image
              className="cursor-pointer mix-blend-luminosity object-contain object-right-bottom"
              src={heroImage}
              alt="Imagem do desenvolvedor"
              onClick={() => setIsOverlayOpen(true)}
              fill
            />
            {heroDetails.map((icon, i) => (
              <Image
                key={i}
                src={icon.icon}
                width={icon.size}
                height={icon.size}
                alt={icon.icon}
                className="absolute"
                style={{
                  top: icon.position.top ? `${icon.position.top}px` : 'initial',
                  left: icon.position.left ? `${icon.position.left}px` : 'initial',
                  right: icon.position.right ? `${icon.position.right}px` : 'initial',
                  bottom: icon.position.bottom ? `${icon.position.bottom}px` : 'initial',
                }}
              />
            ))}
          </div>
        ) : (
          <div className="lg:h-[583px] w-[500px] hidden lg:block"></div>
        )}
      </div>
      <Modal isOpen={isModalOpen}>
        {/* <SectionTitle color="primary">Baixe meu currículo</SectionTitle> */}
        <h3 className="text-xl lg:text-[30px] font-bold text-center mb-4 text-font-light dark:text-white">Baixe meu currículo</h3>
        <div className="my-4 mb-5">
          <p className="mb-2 text-center text-font-light dark:text-white">Currículo em português</p>
          <Button><HiOutlineDocumentDownload size={28} className="mr-2"/> Baixar</Button>
        </div>
        <div className="my-4">
          <p className="mb-2 text-center text-font-light dark:text-white">Resume in english</p>
          <Button><HiOutlineDocumentDownload size={28} className="mr-2"/> Download</Button>
        </div>
      </Modal>
      <PageOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
    </Container>
  )
}