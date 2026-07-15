import { Navbar } from './sections/Navbar'
import { Hero, Kinetic } from './sections/Hero'
import { Movement } from './sections/Movement'
import { Cotacao } from './sections/Cotacao'
import { Products, Transparency } from './sections/Products'
import { Audiences } from './sections/Audiences'
import { PortalMockup } from './sections/PortalMockup'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Kinetic />
        <Movement />
        <Cotacao />
        <Products />
        <Transparency />
        <Audiences />
        <PortalMockup />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
