// Components
import { Container } from "@/components/Container"
import Link from "next/link"

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
      <header className="flex items-center justify-between py-8">
        <div className="text-3xl font-bold text-white">
          @DEV_CRIA
        </div>

        <nav>
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
      </header>
    </Container>
  )
}