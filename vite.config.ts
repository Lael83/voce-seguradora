import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = subpasta do GitHub Pages em produção; raiz no dev
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/voce-seguradora/' : '/',
}))
