// Components
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Contact } from "@/components/Contact"
import { PageOverlay } from "@/components/PageOverlay"

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
