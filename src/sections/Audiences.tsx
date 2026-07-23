const AUDIENCES = [
  {
    tag: '01 · CLIENTE',
    title: 'Proteger',
    text: 'Cote, contrate, consulte sua apólice, peça 2ª via e avise um sinistro.',
    cta: 'Simular agora',
    href: '#simulador',
  },
  {
    tag: '02 · CORRETOR',
    title: 'Distribuir',
    text: 'Acesse o ambiente do corretor, conheça o catálogo e acompanhe sua operação.',
    cta: 'Conhecer a área',
    href: '#corretor',
  },
  {
    tag: '03 · PARCEIRO',
    title: 'Integrar',
    text: 'Leve seguros ao seu ecossistema por meio de integrações e novos canais.',
    cta: 'Quero ser parceiro',
    href: '#rodape',
  },
]

export function Audiences() {
  return (
    <section className="audiences" id="publicos">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">Três públicos. Uma marca.</p>
            <h2>Qual é o seu próximo passo?</h2>
          </div>
        </div>
        <div className="aud-grid reveal reveal-late">
          {AUDIENCES.map((a) => (
            <article className="aud" key={a.tag}>
              <small>{a.tag}</small>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <a href={a.href}>
                {a.cta} <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
