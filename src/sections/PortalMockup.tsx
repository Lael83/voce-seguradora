const TOOLS = [
  'Nova cotação',
  'Propostas e emissões',
  'Carteira de clientes',
  'Comissões',
  'Materiais comerciais',
  'Suporte especializado',
]

export function PortalMockup() {
  return (
    <section className="broker-strip" id="corretor">
      <div className="wrap broker-inner">
        <div>
          <p className="kicker" style={{ color: 'var(--neon)' }}>
            Área do corretor
          </p>
          <h2>
            Mais tempo para <span>vender.</span>
          </h2>
          <p>
            Um ponto único para cotar, emitir e acompanhar sua operação — preparado para os 13
            produtos e integrado aos motores da seguradora.
          </p>
          <a className="pill pill-neon" href="#rodape">
            Solicitar cadastro →
          </a>
        </div>
        <ul className="broker-list">
          {TOOLS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
