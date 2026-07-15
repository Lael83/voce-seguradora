import { useState } from 'react'

const PF = [
  { tag: '02 · VIDA', name: 'Vida' },
  { tag: '03 · VIDA', name: 'Acidentes Pessoais' },
  { tag: '04 · MOBILIDADE', name: 'Franquia Auto' },
  { tag: '05 · EQUIPAMENTOS', name: 'Celular' },
  { tag: '06 · EQUIPAMENTOS', name: 'Notebook e Tablet' },
  { tag: '07 · FINANCEIRO', name: 'Pix Protegido' },
  { tag: '08 · FINANCEIRO', name: 'Cartão Protegido' },
  { tag: '09 · FINANCEIRO', name: 'Bolsa Protegida' },
]

const PJ = [
  { tag: '01 · PESSOAS', name: 'Vida em Grupo' },
  { tag: '02 · ACIDENTES', name: 'AP Coletivo' },
  { tag: '03 · CRÉDITO', name: 'Prestamista' },
]

export function Products() {
  const [pf, setPf] = useState(true)
  const items = pf ? PF : PJ

  return (
    <section className="bento" id="produtos">
      <div className="wrap">
        <div className="bento-head">
          <div>
            <p className="kicker">Catálogo completo</p>
            <h2>Proteção do seu jeito.</h2>
          </div>
          <div className="bento-toggle">
            <button aria-pressed={pf} onClick={() => setPf(true)}>
              Para Você · 10
            </button>
            <button aria-pressed={!pf} onClick={() => setPf(false)}>
              Empresa · 3
            </button>
          </div>
        </div>

        <div className="bento-grid">
          {pf && (
            <a className="bento-card bento-feature" href="#simulador">
              <small>01 · MORADIA · DESTAQUE</small>
              <div>
                <h3>Residencial</h3>
                <p>
                  A proteção mais completa para sua casa, com estimativa de preço na hora e
                  assistência 24h desde o primeiro dia.
                </p>
              </div>
              <span className="pill pill-neon">Simular agora →</span>
            </a>
          )}
          {items.map((p, i) => (
            <a
              className={`bento-card${!pf && i === 0 ? ' bento-wide' : ''}`}
              href="#publicos"
              key={p.name}
            >
              <small>{p.tag}</small>
              <h3>{p.name}</h3>
              <span className="go">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const COVERED = [
  ['Incêndio, raio e explosão', 'cobertura básica de toda apólice'],
  ['Danos elétricos', 'eletrodomésticos queimados por oscilação'],
  ['Roubo e furto qualificado', 'com vestígio de arrombamento'],
  ['Vendaval, granizo e queda de árvore', 'inclusive o telhado'],
  ['Responsabilidade civil familiar', 'danos causados a um vizinho'],
  ['Assistência 24h', 'chaveiro, encanador, eletricista e vidraceiro'],
]

const NOT_COVERED = [
  ['Furto simples', 'sem vestígio de arrombamento'],
  ['Desgaste natural', 'infiltração antiga, mofo, falta de manutenção'],
  ['Joias e dinheiro em espécie', 'salvo cobertura contratada à parte'],
  ['Imóvel desocupado', 'acima de 90 dias seguidos'],
  ['Obras e reformas estruturais', 'durante a execução'],
  ['Dolo', 'dano causado de propósito pelo segurado'],
]

export function Transparency() {
  return (
    <section className="clear">
      <div className="wrap">
        <div className="clear-head">
          <p className="kicker">Sem letra miúda</p>
          <h2>O que entra. E o que fica de fora.</h2>
        </div>
        <div className="clear-board">
          <div className="clear-col yes">
            <h3>Está coberto</h3>
            <ul>
              {COVERED.map(([b, s]) => (
                <li key={b}>
                  <span className="dot">✓</span>
                  <div>
                    <b>{b}</b>
                    <span className="desc">{s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="clear-col not">
            <h3>Não está coberto</h3>
            <ul>
              {NOT_COVERED.map(([b, s]) => (
                <li key={b}>
                  <span className="dot">×</span>
                  <div>
                    <b>{b}</b>
                    <span className="desc">{s}</span>
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
