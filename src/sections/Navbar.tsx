import { useEffect, useRef, useState } from 'react'
import { LogoLockup } from '../lib/brand'

export function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuWrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMegaOpen(false)
    }
    function onClick(e: MouseEvent) {
      if (menuWrap.current && !menuWrap.current.contains(e.target as Node)) setMegaOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <header className="header">
      <div className="wrap head">
        <a className="brand" href="#conteudo" aria-label="Você Seguradora">
          <LogoLockup className="lockup" />
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <div className="menu-wrap" ref={menuWrap}>
            <button
              className="menu-btn"
              aria-expanded={megaOpen}
              aria-controls="mega"
              onClick={() => setMegaOpen((v) => !v)}
            >
              Seguros ↓
            </button>
            {megaOpen && (
              <div className="mega" id="mega">
                <div className="wrap mega-inner">
                  <p className="mega-intro">Proteção para cada movimento.</p>
                  <div>
                    <h3>Moradia</h3>
                    <a href="#residencial">Residencial</a>
                  </div>
                  <div>
                    <h3>Vida</h3>
                    <a href="#catalogo">Vida</a>
                    <a href="#catalogo">Acidentes Pessoais</a>
                  </div>
                  <div>
                    <h3>Mobilidade</h3>
                    <a href="#catalogo">Franquia Auto</a>
                    <a href="#catalogo">Celular</a>
                  </div>
                  <div>
                    <h3>Empresa</h3>
                    <a href="#catalogo">Vida em Grupo</a>
                    <a href="#catalogo">Prestamista</a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#catalogo">Todos os produtos</a>
          <a href="#corretor">Para corretores</a>
          <a href="#institucional">A Você</a>
        </nav>
        <div className="head-actions">
          <a className="btn btn-line portal" href="#publicos">
            Área do cliente
          </a>
          <a className="btn btn-line portal" href="#corretor">
            Área do corretor
          </a>
          <a className="btn btn-dark" href="#simulador">
            Cotar
          </a>
        </div>
        <button
          className="hamb"
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile"
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {mobileOpen && (
        <nav id="mobile" className="mobile" aria-label="Menu mobile" onClick={() => setMobileOpen(false)}>
          <a href="#catalogo">Seguros</a>
          <a href="#publicos">Área do cliente</a>
          <a href="#corretor">Área do corretor</a>
          <a href="#publicos">Parceiros</a>
          <a href="#institucional">A Você Seguradora</a>
        </nav>
      )}
    </header>
  )
}
