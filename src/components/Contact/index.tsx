'use client'

// Components
import { Button } from "../Button"
import { Container } from "../Container"

export const Contact = () => {
  return (
    <section className="bg-white pt-6 pb-8 mb-8" id="contato">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-blue-primary font-bold text-[45px] leading-none md:text-5xl mb-9 lg:mb-0">
            Entre em contato comigo <br className="hidden md:block"/>
            através de <span className="text-light-green">email</span> ou <span className="text-light-green">whatsapp</span>
          </h3>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Button onClick={() => console.log('Email')}><span className="text-2xl">E-mail</span></Button>
            <Button onClick={() => console.log('Whatsapp')} type="outlined"><span className="text-2xl">Whatsapp</span></Button>
          </div>
        </div>
      </Container>
    </section>
  )
}