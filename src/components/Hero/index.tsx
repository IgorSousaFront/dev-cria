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
      <div className="flex items-center justify-between">
        <div>
          {socialListItems.map((social, index) => (
            <SocialIcon key={index} icon={social.icon} link={social.link} />
          ))}
          <h1 className="my-6 font-bold text-5xl text-white">
            Olá, me chamo <br />
            <span className="text-blue-primary">Igor Sousa </span>
            e sou dev!
          </h1>
          <p className="text-white text-3xl mb-7">Há 8 anos desenvolvendo interfaces <br /> para projetos incríveis!</p>
          <div className="flex items-center justify-start gap-4">
            <Button onClick={() => console.log('PROJETOS')}>Projetos</Button>
            <Button onClick={() => console.log('CURRICULO')} type="light">Baixe meu curriculo</Button>
          </div>
        </div>
        <Image className="mix-blend-hard-light" src="/banner__image.png" alt="Imagem do desenvolvedor" width={570} height={583}/>
      </div>
    </Container>
  )
}