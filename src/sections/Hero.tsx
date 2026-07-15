export function Hero() {
  return (
    <section className="vhero" id="topo">
      <div className="vhero-ride" aria-hidden="true" />
      <div className="vhero-tint" aria-hidden="true" />
      <div className="vhero-streaks" aria-hidden="true" />

      <div className="vhero-content">
        <div>
          <p className="kicker">Você Seguradora · digital por natureza</p>
          <h1>
            Você em
            <br />
            <span className="sweep">movimento.</span>
          </h1>
          <p className="vhero-sub">
            Mais saúde, mais movimento, mais proteção. Seguro simples de entender, com preço antes
            do cadastro — para a vida que não para.
          </p>
          <div className="vhero-ctas">
            <a className="pill pill-neon" href="#simulador">
              Simular Residencial →
            </a>
            <a className="pill pill-ghost" href="#produtos">
              Conhecer os 13 seguros
            </a>
          </div>
        </div>

        <div className="vhero-card">
          <small>Residencial · estimativa em 30s</small>
          <div className="big">R$ 131/mês</div>
          <p>Casa protegida contra incêndio, danos elétricos, vendaval e roubo — com assistência 24h. Sem pedir seus dados.</p>
          <a className="pill pill-neon" href="#simulador">
            Ver minha estimativa
          </a>
        </div>
      </div>

      <span className="vhero-scroll" aria-hidden="true">
        role para explorar
      </span>
    </section>
  )
}

export function Kinetic() {
  const line = (
    <>
      <span>
        mais <b>saúde</b> ·
      </span>
      <span>
        mais <b>movimento</b> ·
      </span>
      <span>
        mais <i>proteção</i> ·
      </span>
    </>
  )
  return (
    <div className="kinetic" aria-hidden="true">
      <div className="kinetic-track">
        {line}
        {line}
      </div>
    </div>
  )
}
