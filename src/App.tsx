import { useEffect } from 'react'
import { Navbar } from './sections/Navbar'
import { Hero, Facts } from './sections/Hero'
import { Cotacao } from './sections/Cotacao'
import { Products, Transparency } from './sections/Products'
import { Audiences } from './sections/Audiences'
import { PortalMockup } from './sections/PortalMockup'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'

/* Revela os blocos .reveal conforme entram na viewport. */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Facts />
        <Cotacao />
        <Products />
        <Transparency />
        <Audiences />
        <PortalMockup />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
