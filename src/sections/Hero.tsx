import { useState } from 'react'

const QUICK_PF = [
  { tag: '01 · MORADIA', name: 'Residencial', href: '#residencial' },
  { tag: '02 · VIDA', name: 'Vida', href: '#catalogo' },
  { tag: '03 · MOBILIDADE', name: 'Franquia Auto', href: '#catalogo' },
  { tag: '04 · EQUIPAMENTOS', name: 'Celular', href: '#catalogo' },
  { tag: '05 · FINANCEIRO', name: 'Pix Protegido', href: '#catalogo' },
]

const QUICK_PJ = [
  { tag: '01 · PESSOAS', name: 'Vida em Grupo', href: '#catalogo' },
  { tag: '02 · ACIDENTES', name: 'AP Coletivo', href: '#catalogo' },
  { tag: '03 · CRÉDITO', name: 'Prestamista', href: '#catalogo' },
]

export function Hero() {
  const [pf, setPf] = useState(true)
  const quick = pf ? QUICK_PF : QUICK_PJ

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">Você Seguradora · digital por natureza</p>
          <h1>
            Você em <em>movimento.</em>
          </h1>
          <p>
            Mais saúde, mais movimento, mais proteção. Cuidando do seu presente, pensando no seu
            futuro — com contratação simples e preço antes do cadastro.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-dark" href="#simulador">
              Simular Residencial <span className="arrow">↘</span>
            </a>
            <a className="btn btn-line" href="#catalogo">
              Explorar 13 seguros
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-ride" />
          <div className="hero-tint" />
          <div className="hero-streaks" />
          <div className="visual-copy">
            <strong>
              você
              <br />
              em frente.
            </strong>
            <span>proteção em movimento</span>
          </div>
        </div>
      </div>
      <div className="wrap protection reveal">
        <div>
          <h2>O que você quer proteger?</h2>
          <div className="tabs">
            <button aria-pressed={pf} onClick={() => setPf(true)}>
              Você · 10
            </button>
            <button aria-pressed={!pf} onClick={() => setPf(false)}>
              Empresa · 3
            </button>
          </div>
        </div>
        <div className="quick-products">
          {quick.map((q) => (
            <a key={q.tag} href={q.href}>
              <small>{q.tag}</small>
              {q.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Facts() {
  const facts = [
    ['Assistência 24h', 'quando você precisar'],
    ['Sem letra miúda', 'publicamos o que não cobrimos'],
    ['Sem fidelidade', 'cancele quando quiser'],
    ['Em processo de registro', 'na SUSEP'],
  ]
  return (
    <div className="facts" aria-label="Diferenciais">
      <div className="facts-track">
        {[...facts, ...facts].map(([b, s], i) => (
          <div className="fact" key={i}>
            {b} <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
