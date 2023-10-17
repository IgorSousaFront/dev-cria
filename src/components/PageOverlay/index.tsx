// React
import { useState } from 'react'

// Icons
import { IoClose } from 'react-icons/io5'
import { AiOutlineInfoCircle } from 'react-icons/ai'

// Components
import { Container } from '../Container'
import { Button } from '../Button'
import { Card } from '../Card'



interface IPageOverlayProps {
  isOpen: boolean
  onClose: () => void
}

type Links = {
  label: string
  link: string
}

interface IUserListProps {
  role: string
  description: string
  links: Links[]
  info: string[]
}

const userList: IUserListProps[] = [
  {
    role: 'Recrutador(a)',
    description: 'Procuro desenvolvedores',
    links: [
      {
        label: 'Formulário',
        link: 'https://www.google.com'
      },
      {
        label: 'Candidatos',
        link: 'https://www.google.com'
      },
    ],
    info: [
      'Este formulário enviará essa vaga diretamente para o nosso grupo com vários desenvolvedores que podem estar no perfil que você busca.',
      'A lista de candidatos está atualizada com desenvolvedores que buscam uma oportunidade',
    ]
  },
  {
    role: 'Desenvolvedor(a)',
    description: 'Procuro vagas',
    links: [
      {
        label: 'Formulário',
        link: 'https://www.google.com'
      },
      {
        label: 'grupo',
        link: 'https://www.google.com'
      },
    ],
    info: [
      'Este formulário alimenta uma base de dados onde recrutadores podem encontrar o seu perfil.',
      'O grupo do whatapp é uma comunidade que serve para fazer networking, tirar dúvidas e se manter atualizado.',
    ]
  },
]

const UserCard = ({role, description, links, info}: IUserListProps) => {
  return (
    <Card className="w-full relative md:hover:scale-110 hover:z-20">
      <div className="flex flex-col items-center py-10">
        <div className="absolute top-2 right-2 text-font-light dark:text-white">
          <div className="cursor-pointer peer">
            <AiOutlineInfoCircle size={22} />
          </div>
          <Card className="text-sm w-max max-w-[180px] absolute top-[150%] right-0 hidden peer-hover:block divide-y dark:divide-stone-800 divide-gray-200">
            {info.map((text, i) => (
              <p className="py-1 px-2" key={i}>{text}</p>
            ))}
          </Card>
        </div>
        <span className="mb-1 text-2xl font-medium text-font-light dark:text-white">Sou: </span>
        <h5 className="mb-1 text-2xl font-bold text-font-light dark:text-white">{role}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>
        <div className="flex flex-col lg:flex-row mt-4 gap-3 md:mt-6">
          {links.map((button, index) => (
            <Button 
              key={index}
              type={index === 0 ? 'filled' : 'outlined'}
              color={index === 0 ? 'primary' : 'light'}
              onClick={() => window.open(button.link, '_blank')}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}

export const PageOverlay = ({ isOpen, onClose }: IPageOverlayProps) => {
  return (
    <div className={`fixed shadow-2xl backdrop-blur-md z-50 h-[85vh] overflow-auto w-[85vw] border border-b-0 border-gray-200 dark:border-stone-800 bg-white/70 dark:bg-dark-base/90 rounded-md px-7 lg:px-14 py-16 lg:py-12 bottom-0 left-2/4 -translate-x-2/4 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
      <button className="absolute top-4 right-4 m-2 text-font-light dark:text-white" onClick={onClose}>
        <IoClose size={40} />
      </button>
      <h3 className="text-xl lg:text-[30px] font-bold text-center mb-4 text-font-light dark:text-white">Olá, visitante. Antes de conferir meu portfólio, que tal encontrar <br /> uma vaga ou um candidato para a sua vaga?</h3>
      <p className="text-center text-font-light dark:text-white">Este é um projeto pessoal criado para ajudar as empresas a encontrar os perfis que melhor se encaixam em suas vagas.</p>
      <Container>
        <div className="flex items-center flex-col md:flex-row justify-around my-16 gap-6">
          {userList.map((user, index) => (
            <UserCard
              key={index}
              role={user.role}
              description={user.description}
              links={user.links}
              info={user.info}
            />
          ))}
        </div>
        <div className='w-[200px] mx-auto'>
          <Button onClick={onClose}>Ver portfólio</Button>
        </div>
      </Container>
    </div>
  )
}