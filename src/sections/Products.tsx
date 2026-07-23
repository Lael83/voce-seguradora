import { useState } from 'react'

const FAMILIES_PF = [
  { no: '01', name: 'Moradia', links: [{ label: 'Residencial', badge: true, href: '#simulador' }] },
  {
    no: '02',
    name: 'Vida e Acidentes',
    links: [
      { label: 'Vida', href: '#publicos' },
      { label: 'Acidentes Pessoais', href: '#publicos' },
    ],
  },
  { no: '03', name: 'Mobilidade', links: [{ label: 'Franquia Auto', href: '#publicos' }] },
  {
    no: '04',
    name: 'RD Equipamentos',
    links: [
      { label: 'Celular', href: '#publicos' },
      { label: 'Notebook', href: '#publicos' },
      { label: 'Tablet', href: '#publicos' },
    ],
  },
  {
    no: '05',
    name: 'RD Financeiro',
    links: [
      { label: 'Pix Protegido', href: '#publicos' },
      { label: 'Cartão Protegido', href: '#publicos' },
      { label: 'Bolsa Protegida', href: '#publicos' },
    ],
  },
]

const FAMILIES_PJ = [
  {
    no: '06',
    name: 'Proteção empresarial',
    links: [
      { label: 'Vida em Grupo', href: '#publicos' },
      { label: 'Acidentes Pessoais Coletivo', href: '#publicos' },
      { label: 'Prestamista', href: '#publicos' },
    ],
  },
]

export function Products() {
  const [pf, setPf] = useState(true)
  const families = pf ? FAMILIES_PF : FAMILIES_PJ

  return (
    <section className="catalog" id="catalogo">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Catálogo completo</p>
            <h2>Proteção do seu jeito.</h2>
          </div>
          <p>
            Treze produtos organizados por momento de vida. Escolha um caminho e conheça cada
            cobertura sem jargão.
          </p>
        </div>
        <div className="catalog-toggle reveal">
          <button aria-pressed={pf} onClick={() => setPf(true)}>
            Para Você · 10
          </button>
          <button aria-pressed={!pf} onClick={() => setPf(false)}>
            Para sua Empresa · 3
          </button>
        </div>
        <div className="reveal reveal-late">
          {families.map((f) => (
            <article className="family" key={f.no}>
              <span className="family-no">{f.no}</span>
              <h3>{f.name}</h3>
              <div className="product-links">
                {f.links.map((l) => (
                  <a key={l.label} href={l.href}>
                    {l.label}
                    {'badge' in l && l.badge && <span className="badge">destaque</span>}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const COVERED = [
  ['Incêndio, raio e explosão', 'cobertura básica de toda apólice'],
  ['Danos elétricos', 'geladeira, TV e ar queimados por oscilação'],
  ['Roubo e furto qualificado', 'com vestígio de arrombamento'],
  ['Vendaval, granizo e queda de árvore', 'inclusive o telhado'],
  ['Responsabilidade civil familiar', 'danos causados a um vizinho'],
  ['Assistência 24h', 'chaveiro, encanador, eletricista e vidraceiro'],
]

const NOT_COVERED = [
  ['Furto simples', 'sem vestígio de arrombamento'],
  ['Desgaste natural', 'infiltração antiga, mofo e falta de manutenção'],
  ['Joias e dinheiro em espécie', 'salvo cobertura contratada à parte'],
  ['Imóvel desocupado', 'acima de 90 dias seguidos'],
  ['Obras e reformas estruturais', 'durante a execução'],
  ['Dolo', 'dano causado de propósito pelo segurado'],
]

export function Transparency() {
  return (
    <section className="transparency">
      <div className="wrap">
        <div className="trans-head reveal">
          <p className="kicker">Transparência residencial</p>
          <h2>O que entra. E o que fica de fora.</h2>
          <p>Os dois lados com o mesmo tamanho e a mesma importância.</p>
        </div>
        <div className="cover-board reveal reveal-late">
          <div className="cover-col">
            <h3>Está coberto</h3>
            <ul>
              {COVERED.map(([b, s], i) => (
                <li key={b}>
                  <span className="num">0{i + 1}</span>
                  <div>
                    <b>{b}</b>
                    <p>{s}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cover-col no">
            <h3>Não está coberto</h3>
            <ul>
              {NOT_COVERED.map(([b, s], i) => (
                <li key={b}>
                  <span className="num">×0{i + 1}</span>
                  <div>
                    <b>{b}</b>
                    <p>{s}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
