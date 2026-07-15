import { motion } from 'motion/react'
import { Search } from 'lucide-react'
import { Container, LogoMark } from '../lib/brand'

const ITEMS = ['Seguros', 'Cotação', 'Apólices', 'Sinistros', 'Janela', 'Ajuda']

export function MenuBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <Container className="h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <LogoMark className="w-3.5 h-3.5 text-white" />
          <span className="font-bold text-white">Você</span>
          {ITEMS.map((item, i) => (
            <span
              key={item}
              className={`text-white/70 ${i > 2 ? 'hidden sm:inline' : ''} ${
                i > 3 ? 'hidden md:inline' : ''
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <Search className="w-3.5 h-3.5" />
          <span>Qua 15 Jul 13:09</span>
        </div>
      </Container>
    </motion.div>
  )
}
