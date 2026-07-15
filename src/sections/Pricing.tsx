import { useState } from 'react'

type Plano = {
  tier: string
  mensal: string
  anual: string
  desc: string
  features: string[]
  pro?: boolean
}

const PLANOS: Plano[] = [
  {
    tier: 'Essence',
    mensal: 'R$ 131/m',
    anual: 'R$ 1.310/a',
    desc: 'O essencial para proteger sua casa sem complicação.',
    features: [
      'Incêndio, raio e explosão',
      'Danos elétricos',
      'Assistência 24h essencial (chaveiro e encanador)',
      '2ª via de apólice digital',
      'Cancele quando quiser',
    ],
  },
  {
    tier: 'Gold',
    mensal: 'R$ 189/m',
    anual: 'R$ 1.890/a',
    desc: 'Cobertura ampliada para quem quer mais tranquilidade no dia a dia.',
    features: [
      'Tudo do Essence',
      'Roubo e furto qualificado',
      'Vendaval, granizo e queda de árvore',
      'Assistência 24h completa',
      'Responsabilidade civil familiar',
    ],
  },
  {
    tier: 'Prime',
    mensal: 'R$ 247/m',
    anual: 'R$ 2.470/a',
    desc: 'Proteção completa, com os maiores limites e atendimento prioritário.',
    features: [
      'Tudo do Gold',
      'Importância segurada até R$ 1 milhão',
      'Eletrônicos portáteis',
      'Vidros e espelhos',
      'Atendimento prioritário',
    ],
    pro: true,
  },
]

function Check() {
  return (
    <span className="c3-check">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 13l4 4L19 7"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="c3-pricing-section">
      {/* filtro de ruído próprio do pricing */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="c3-noise-pricing">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.075" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Seguro para</span>
          <span className="c3-watermark-line-2">seguir.</span>
        </div>
      </div>

      <div className="c3-toggle-wrap">
        <span className="text-sm text-white/70">Anual</span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Cobrança anual"
          className={`c3-toggle ${yearly ? 'active' : ''}`}
          onClick={() => setYearly((v) => !v)}
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>

      <div className="c3-grid">
        {PLANOS.map((plano) => (
          <div key={plano.tier} className={`c3-card ${plano.pro ? 'c3-card-pro' : ''}`}>
            <p className="c3-tier-small">{plano.tier}</p>
            <p className="c3-tier-large">{yearly ? plano.anual : plano.mensal}</p>
            <p className="c3-desc">{plano.desc}</p>
            <ul className="c3-list">
              {plano.features.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <button className="c3-btn">Continuar cotação</button>
          </div>
        ))}
      </div>

      <p className="relative z-[3] mt-8 max-w-xl text-center text-xs text-white/40 leading-relaxed">
        Valores estimados do seguro Residencial. O preço final é calculado na cotação, de
        acordo com o CEP e a importância segurada — sem pedir seus dados pessoais antes do
        preço.
      </p>
    </section>
  )
}
