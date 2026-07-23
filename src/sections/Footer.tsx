import { LogoLockup } from '../lib/brand'

export function Footer() {
  return (
    <footer className="footer" id="rodape">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#conteudo">
              <LogoLockup className="lockup" />
            </a>
            <p>Você em movimento. Simples de entender, fácil de contratar.</p>
          </div>
          <div>
            <h3>Para Você</h3>
            <a href="#simulador">Residencial</a>
            <a href="#catalogo">Vida</a>
            <a href="#catalogo">Acidentes Pessoais</a>
            <a href="#catalogo">Franquia Auto</a>
          </div>
          <div>
            <h3>Para sua Empresa</h3>
            <a href="#catalogo">Vida em Grupo</a>
            <a href="#catalogo">AP Coletivo</a>
            <a href="#catalogo">Prestamista</a>
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
            <a href="#institucional">Quem somos</a>
            <a href="#residencial">Produtos</a>
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
