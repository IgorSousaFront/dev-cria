'use client'

// Components
import { Container } from "@/components/Container"
import { SocialIcon, ISocialIconsProps } from "@/components/SocialIcon"
import { Button } from "@/components/Button";

// Next
import Image from "next/image";

// Icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

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

export const Hero = () => {
  return (
    <Container>
      <div className="md:flex items-center justify-between">
        <div className="my-16 lg:my-0 md:w-full lg:w-2/4">
          {socialListItems.map((social, index) => (
            <SocialIcon key={index} icon={social.icon} link={social.link} />
          ))}
          <h1 className="my-6 font-bold text-[40px] md:text-5xl text-white">
            Olá, me chamo <br />
            <span className="text-blue-primary">Igor Sousa </span>
            e sou dev!
          </h1>
          <p className="text-white text-xl md:text-3xl mb-7">Há 8 anos desenvolvendo interfaces <br /> para projetos incríveis!</p>
          <div className="flex items-center flex-col sm:flex-row justify-start gap-4 sm:w-3/4 lg:w-full">
            <Button onClick={() => console.log('PROJETOS')}>Projetos</Button>
            <Button onClick={() => console.log('CURRICULO')} type="outlined" color="light">Baixe meu curriculo</Button>
          </div>
        </div>
        <Image className="mix-blend-hard-light hidden lg:block" src="/banner__image.png" alt="Imagem do desenvolvedor" width={500} height={583}/>
      </div>
    </Container>
  )
}