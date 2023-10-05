'use client'
// React
import { useRouter } from "next/navigation"

// Components
import { Button } from "../Button"
import { Container } from "../Container"

export const Contact = () => {
  const router = useRouter()

  return (
    <section className="bg-white dark:bg-dark-bg pt-6 pb-8 mb-8" id="contato">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-font-light dark:text-white font-bold text-[45px] leading-none md:text-5xl mb-9 lg:mb-0">
            Entre em contato comigo <br className="hidden md:block"/>
            através de email ou whatsapp
          </h3>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Button onClick={() => router.push('mailto:igor.ssqwe@gmail.com')}><span className="text-2xl">E-mail</span></Button>
            <Button onClick={() => window.open('https://wa.me/55985706621', '_blank')} type="outlined"><span className="text-2xl">Whatsapp</span></Button>
          </div>
        </div>
      </Container>
    </section>
  )
}