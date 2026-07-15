import { LogoLockup } from '../lib/brand'

export function Footer() {
  return (
    <footer className="footer" id="rodape">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#topo" aria-label="Você Seguradora">
              <LogoLockup className="lockup" />
            </a>
            <p>Você em movimento. Simples de entender, fácil de contratar.</p>
          </div>
          <div>
            <h3>Seguros</h3>
            <a href="#simulador">Residencial</a>
            <a href="#produtos">Vida e Acidentes</a>
            <a href="#produtos">Franquia Auto</a>
            <a href="#produtos">Para sua Empresa</a>
          </div>
          <div>
            <h3>Canais</h3>
            <a href="#publicos">Área do cliente</a>
            <a href="#corretor">Portal do corretor</a>
            <a href="#publicos">Acesso parceiros</a>
            <a href="#publicos">Avisar sinistro</a>
          </div>
          <div>
            <h3>Institucional</h3>
            <a href="#publicos">Quem somos</a>
            <a href="#produtos">Produtos</a>
            <a href="#rodape">Fale com a gente</a>
          </div>
        </div>
        <div className="legal">
          <p>
            CNPJ 00.000.000/0001-00
            <br />
            Produto em processo de registro na SUSEP
          </p>
          <p>
            O registro do produto na SUSEP não implica incentivo ou recomendação à sua
            comercialização. Consulte as condições gerais antes de contratar. A companhia ainda
            não vendeu sua primeira apólice — não inventamos avaliações, números ou prêmios.
          </p>
        </div>
      </div>
    </footer>
  )
}
