import { useEffect, useRef, useState } from 'react'

const RATES = { essence: 0.00487, gold: 0.00586, prime: 0.00832 } as const
type Plan = keyof typeof RATES
const PLAN_LABEL: Record<Plan, string> = { essence: 'Essence', gold: 'Gold', prime: 'Prime' }
const PLAN_DESC: Record<Plan, string> = { essence: 'essencial', gold: 'ampliado', prime: 'completo' }

function money(v: number) {
  return 'R$ ' + v.toLocaleString('pt-BR')
}

/* Contador: interpola do valor anterior ao novo em ~400ms. */
function useCountUp(target: number) {
  const [shown, setShown] = useState(target)
  const prev = useRef(target)

  useEffect(() => {
    const from = prev.current
    prev.current = target
    if (from === target) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(target)
      return
    }
    const t0 = performance.now()
    const dur = 400
    let raf = 0
    function step(t: number) {
      const p = Math.min((t - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setShown(Math.round(from + (target - from) * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target])

  return shown
}

export function Cotacao() {
  const [cep, setCep] = useState('')
  const [lmi, setLmi] = useState(300000)
  const [plan, setPlan] = useState<Plan>('essence')

  const price = Math.round(((lmi * RATES[plan]) / 12) * 1.0738)
  const shownPrice = useCountUp(price)

  function maskCep(v: string) {
    const d = v.replace(/\D/g, '').slice(0, 8)
    setCep(d.length > 5 ? d.slice(0, 5) + '-' + d.slice(5) : d)
  }

  return (
    <section className="residential" id="residencial">
      <div className="wrap">
        <div className="res-head reveal">
          <div>
            <p className="kicker" style={{ color: 'var(--neon)' }}>
              Produto em destaque · 01
            </p>
            <h2>
              Sua casa. Seu <span>ritmo.</span>
            </h2>
          </div>
          <p>
            Incêndio, danos elétricos, vendaval, roubo qualificado e assistência 24h. Você escolhe
            o valor máximo de proteção e vê uma estimativa na hora.
          </p>
        </div>
        <div className="quote reveal reveal-late" id="simulador">
          <div className="quote-form">
            <h3>Monte uma estimativa</h3>
            <div className="field-grid">
              <div className="field">
                <label htmlFor="cep">CEP do imóvel</label>
                <input
                  id="cep"
                  type="text"
                  inputMode="numeric"
                  maxLength={9}
                  placeholder="00000-000"
                  value={cep}
                  onChange={(e) => maskCep(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="lmi">Valor máximo que pagamos (importância segurada)</label>
                <div className="range-row">
                  <input
                    id="lmi"
                    type="range"
                    min={50000}
                    max={1000000}
                    step={10000}
                    value={lmi}
                    aria-describedby="range-help"
                    onChange={(e) => setLmi(parseInt(e.target.value, 10))}
                  />
                  <output>{money(lmi)}</output>
                </div>
                <p className="range-help" id="range-help">
                  De R$ 50 mil a R$ 1 milhão
                </p>
              </div>
            </div>
            <div className="plans" role="group" aria-label="Escolha o plano">
              {(Object.keys(RATES) as Plan[]).map((p) => (
                <button key={p} className="plan" aria-pressed={plan === p} onClick={() => setPlan(p)}>
                  <strong>{PLAN_LABEL[p]}</strong>
                  <small>{PLAN_DESC[p]}</small>
                </button>
              ))}
            </div>
          </div>
          <div className="price" aria-live="polite">
            <div>
              <span className="price-label">Estimativa mensal</span>
              <strong>{money(shownPrice)}</strong>
              <span className="per">por mês · plano {PLAN_LABEL[plan]}</span>
            </div>
            <div>
              <p className="price-note">
                Valor estimado. O preço final é calculado na cotação. Sem pedir seus dados
                pessoais.
              </p>
              <a className="btn btn-neon" href="#publicos">
                Continuar cotação <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
