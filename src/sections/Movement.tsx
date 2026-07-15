/* Frases oficiais do manual de identidade aplicadas sobre fotografia de movimento. */

const CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=70&auto=format&fit=crop',
    quote: (
      <>
        A vitória só tem valor quando vem <b>com proteção.</b>
      </>
    ),
    tag: 'Motocross · Acidentes Pessoais',
  },
  {
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&q=70&auto=format&fit=crop',
    quote: (
      <>
        Cuidamos de você <b>dentro e fora das pistas</b> da vida.
      </>
    ),
    tag: 'Ciclismo · Vida',
  },
  {
    img: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=900&q=70&auto=format&fit=crop',
    quote: (
      <>
        Segurança é liberdade para <b>conquistar seus sonhos.</b>
      </>
    ),
    tag: 'Escalada · Proteção completa',
  },
]

export function Movement() {
  return (
    <section className="sport">
      <div className="wrap">
        <div className="sport-head">
          <h2>Cuidando do seu presente, pensando no seu futuro.</h2>
          <p>
            A vida acontece em movimento. A gente existe para que você siga — no esporte, em casa,
            no trabalho.
          </p>
        </div>
        <div className="sport-grid">
          {CARDS.map((c) => (
            <figure className="sport-card" key={c.tag} style={{ margin: 0 }}>
              <img src={c.img} alt="" loading="lazy" />
              <blockquote>
                <p>{c.quote}</p>
                <cite>{c.tag}</cite>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
