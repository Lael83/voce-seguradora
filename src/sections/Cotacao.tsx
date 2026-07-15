import { useState } from 'react'

const RATES = { essence: 0.00487, gold: 0.00586, prime: 0.00832 } as const
type Plan = keyof typeof RATES
const PLAN_LABEL: Record<Plan, string> = { essence: 'Essence', gold: 'Gold', prime: 'Prime' }
const PLAN_DESC: Record<Plan, string> = { essence: 'essencial', gold: 'ampliado', prime: 'completo' }

function money(v: number) {
  return 'R$ ' + v.toLocaleString('pt-BR')
}

export function Cotacao() {
  const [cep, setCep] = useState('')
  const [lmi, setLmi] = useState(300000)
  const [plan, setPlan] = useState<Plan>('essence')

  const price = Math.round(((lmi * RATES[plan]) / 12) * 1.0738)

  function maskCep(v: string) {
    const d = v.replace(/\D/g, '').slice(0, 8)
    setCep(d.length > 5 ? d.slice(0, 5) + '-' + d.slice(5) : d)
  }

  return (
    <section className="sim" id="simulador">
      <div className="wrap sim-grid">
        <div className="sim-copy">
          <p className="kicker">Produto em destaque · Residencial</p>
          <h2>
            Sua casa. <em>Seu ritmo.</em>
          </h2>
          <p>
            Escolha quanto de proteção você quer e veja uma estimativa na hora — sem cadastro, sem
            telefone, sem letra miúda.
          </p>
          <div className="sim-badges">
            <span>Incêndio e raio</span>
            <span>Danos elétricos</span>
            <span>Vendaval e granizo</span>
            <span>Roubo qualificado</span>
            <span>Assistência 24h</span>
          </div>
        </div>

        <div className="sim-card">
          <h3>Monte sua estimativa</h3>
          <div className="sim-field">
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
          <div className="sim-field">
            <label htmlFor="lmi">Importância segurada</label>
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
          <div className="sim-plans" role="group" aria-label="Escolha o plano">
            {(Object.keys(RATES) as Plan[]).map((p) => (
              <button key={p} className="sim-plan" aria-pressed={plan === p} onClick={() => setPlan(p)}>
                <strong>{PLAN_LABEL[p]}</strong>
                <small>{PLAN_DESC[p]}</small>
              </button>
            ))}
          </div>
          <div className="sim-result" aria-live="polite">
            <div>
              <small>Estimativa mensal</small>
              <strong>{money(price)}</strong>
              <span className="per">plano {PLAN_LABEL[plan]}</span>
            </div>
            <a className="pill pill-neon" href="#publicos">
              Continuar →
            </a>
          </div>
          <p className="sim-note">
            Valor estimado. O preço final é calculado na cotação. Sem pedir seus dados pessoais.
          </p>
        </div>
      </div>
    </section>
  )
}
