import { LogoLockup } from '../lib/brand'

export function Navbar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <a href="#topo" aria-label="Você Seguradora">
          <LogoLockup className="lockup" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produtos">Seguros</a>
          <a href="#simulador">Simulador</a>
          <a href="#corretor">Corretores</a>
          <a href="#publicos">A Você</a>
        </nav>
        <a className="pill pill-line secondary" href="#publicos" style={{ marginLeft: 'auto' }}>
          Área do cliente
        </a>
        <a className="pill pill-navy" href="#simulador">
          Cotar agora
        </a>
      </div>
    </div>
  )
}
