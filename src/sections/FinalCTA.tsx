export function FinalCTA() {
  return (
    <>
      <section className="institution" id="institucional">
        <div className="wrap inst-grid">
          <div className="reveal">
            <p className="kicker" style={{ color: 'var(--neon)' }}>
              A Você Seguradora
            </p>
            <h2>Nova por escolha. Clara por princípio.</h2>
          </div>
          <div className="copy reveal reveal-late">
            <p>
              Estamos construindo uma seguradora digital brasileira para unir a estrutura do
              mercado de seguros a uma experiência simples e direta.
            </p>
            <p>
              A companhia ainda não vendeu sua primeira apólice. Não inventamos avaliações,
              números ou prêmios: credibilidade começa dizendo exatamente onde estamos.
            </p>
            <div className="behind">
              <strong>Quem está por trás</strong>
              <ul>
                <li>Resseguradora — a definir</li>
                <li>Grupo controlador / investidores — a definir</li>
                <li>Seguradora emissora — a definir</li>
                <li>Nº do processo SUSEP — em processo de registro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="tagline reveal" aria-label="Você em movimento">
        você em <strong>movimento</strong>
      </section>
      <section className="antifraud">
        <div className="wrap">
          <p>
            A Você Seguradora nunca pede dados ou pagamento por WhatsApp. Toda cobrança sai dos
            nossos canais oficiais.
          </p>
        </div>
      </section>
    </>
  )
}
