import { useEffect } from 'react'
import { Navbar } from './sections/Navbar'
import { Hero, Facts } from './sections/Hero'
import { Cotacao } from './sections/Cotacao'
import { Products, Transparency } from './sections/Products'
import { Audiences } from './sections/Audiences'
import { PortalMockup } from './sections/PortalMockup'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'

/* Revela os blocos .reveal e .stagger conforme entram na viewport. */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .stagger')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* Barra de progresso + paralaxe do hero, num único rAF. */
function useMotion() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>('.progress-bar')
    const ride = document.querySelector<HTMLElement>('.hero-ride')
    const vcopy = document.querySelector<HTMLElement>('.visual-copy')
    const heroCopy = document.querySelector<HTMLElement>('.hero-copy')
    let raf = 0

    function frame() {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const y = window.scrollY
      if (bar) bar.style.setProperty('--progress', String(max > 0 ? y / max : 0))
      // paralaxe: fundo desce mais devagar, texto do visual sobe
      if (y < window.innerHeight * 1.2) {
        if (ride) ride.style.setProperty('--py', `${y * 0.18}px`)
        if (vcopy) vcopy.style.setProperty('--vy', `${y * -0.12}px`)
        if (heroCopy) heroCopy.style.transform = `translateY(${y * 0.08}px)`
      }
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(frame)
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) {
      window.addEventListener('scroll', onScroll, { passive: true })
      frame()
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}

export default function App() {
  useScrollReveal()
  useMotion()

  return (
    <>
      <div className="progress-bar" aria-hidden="true" />
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
