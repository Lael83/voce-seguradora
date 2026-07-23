import { useState, type FormEvent } from 'react'

const TOOLS = [
  'Nova cotação',
  'Propostas e emissões',
  'Carteira de clientes',
  'Comissões',
  'Materiais comerciais',
  'Suporte especializado',
]

export function PortalMockup() {
  const [status, setStatus] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('Ambiente demonstrativo — o acesso definitivo será conectado ao Portal do Corretor.')
  }

  return (
    <section className="broker" id="corretor" aria-labelledby="broker-title">
      <div className="wrap broker-grid">
        <div className="broker-copy reveal reveal-left">
          <p className="kicker" style={{ color: 'var(--neon)' }}>
            Área do corretor
          </p>
          <h2 id="broker-title">
            Mais tempo para <span>vender.</span>
          </h2>
          <p>
            Um ponto único para cotar, emitir e acompanhar sua operação. O portal será integrado
            aos motores da seguradora e preparado para os 13 produtos.
          </p>
          <ul className="broker-tools">
            {TOOLS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="portal-shell reveal reveal-right reveal-late" aria-label="Demonstração do acesso ao Portal do Corretor">
          <div className="portal-top">
            <strong>Portal do Corretor</strong>
            <span>ambiente demonstrativo</span>
          </div>
          <div className="portal-body">
            <div className="portal-side" aria-hidden="true">
              <b>Você Corretor</b>
              <span>Visão geral</span>
              <span>Cotações</span>
              <span>Propostas</span>
              <span>Carteira</span>
              <span>Comissões</span>
            </div>
            <form className="portal-login" onSubmit={onSubmit}>
              <h3>Bem-vindo</h3>
              <p>Use seu acesso profissional para continuar.</p>
              <label className="portal-field">
                <span>E-mail profissional</span>
                <input type="email" autoComplete="username" placeholder="nome@corretora.com.br" required />
              </label>
              <label className="portal-field">
                <span>Senha</span>
                <input type="password" autoComplete="current-password" placeholder="Sua senha" required />
              </label>
              <button className="btn btn-dark" type="submit">
                Entrar no portal <span>→</span>
              </button>
              <div className="portal-help">
                <a href="#corretor">Esqueci minha senha</a>
                <a href="#publicos">Solicitar cadastro</a>
              </div>
              <p className="portal-status" role="status" aria-live="polite">
                {status}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
