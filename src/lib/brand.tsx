import type { CSSProperties, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

/* Marca "V" da Você Seguradora (quadrante do lockup oficial). */
export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 383 383" fill="currentColor" className={className} aria-hidden="true">
      <path d="M131.79,23.94H20.19l169.1,335.17s31.78-20.43,42.75-54.85c10.97-34.43,10.21-60.53-8.7-97.98-18.91-37.45-91.55-182.34-91.55-182.34Z" />
      <circle cx="299.57" cy="79.74" r="55.61" />
    </svg>
  )
}

/* Lockup completo "Você Seguradora" extraído do site oficial. */
export function LogoLockup({ className = 'w-32 h-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1046.67 383.05" fill="currentColor" className={className} aria-hidden="true">
      <g>
        <path d="M131.79,23.94H20.19l169.1,335.17s31.78-20.43,42.75-54.85c10.97-34.43,10.21-60.53-8.7-97.98-18.91-37.45-91.55-182.34-91.55-182.34Z" />
        <circle cx="299.57" cy="79.74" r="55.61" />
      </g>
      <g>
        <polygon points="412.26 74.44 482.1 241.84 500.36 241.84 569.84 74.44 532.79 74.44 491.05 175.1 449.7 74.44 412.26 74.44" />
        <path d="M654.41,71.79c-47.64,0-86.25,38.62-86.25,86.25s38.62,86.25,86.25,86.25,86.25-38.62,86.25-86.25-38.62-86.25-86.25-86.25ZM654.41,210.82c-29.14,0-52.77-23.63-52.77-52.77s23.63-52.77,52.77-52.77,52.77,23.63,52.77,52.77-23.63,52.77-52.77,52.77Z" />
        <path d="M867.02,288.94c-19.33,0-34.99,15.67-34.99,34.99s15.67,34.99,34.99,34.99,34.99-15.67,34.99-34.99-15.67-34.99-34.99-34.99ZM867.02,345.34c-11.82,0-21.41-9.59-21.41-21.41s9.59-21.41,21.41-21.41,21.41,9.59,21.41,21.41-9.59,21.41-21.41,21.41Z" />
        <path d="M887.05,188.95c-9.48,13.13-24.92,21.68-42.35,21.68-28.83,0-52.21-23.38-52.21-52.21s23.38-52.21,52.21-52.21c17.52,0,33.03,8.63,42.5,21.88l24.26-23.4c-15.69-20.04-40.02-32.9-67.33-32.9-47.32,0-85.68,38.62-85.68,86.25s38.36,86.25,85.68,86.25c27.35,0,51.71-12.9,67.39-32.98l-24.48-22.36Z" />
        <polygon points="931.75 74.44 1025.9 74.44 1025.9 105.08 965 105.08 965 144.43 1019.01 144.43 1019.01 172.04 965 172.04 965 211.39 1025.9 211.39 1025.9 242.03 931.75 242.03 931.75 74.44" />
        <polygon points="465.68 289.69 504.23 289.69 504.23 302.24 479.3 302.24 479.3 318.34 501.41 318.34 501.41 329.65 479.3 329.65 479.3 345.76 504.23 345.76 504.23 358.3 465.68 358.3 465.68 289.69" />
        <polygon points="966.51 60.44 937.76 60.44 968.8 23.94 991.48 23.94 1022.29 60.44 993.59 60.44 980.02 47.51 966.51 60.44" />
        <path d="M737.45,289.88h-6.81l-28.56,68.28h14.28l5.39-13.24h24.4l5.4,13.24h14.27l-28.37-68.28ZM725.91,334.14l8.04-18.29,7.66,18.29h-15.7Z" />
        <path d="M998.1,289.88h-6.81l-28.56,68.28h14.28l5.39-13.24h24.4l5.4,13.24h14.27l-28.37-68.28ZM986.56,334.14l8.04-18.29,7.66,18.29h-15.7Z" />
        <path d="M687.52,328.47s9.08-5.3,9.08-17.78c0-19.48-18.81-20.81-18.81-20.81h-26.02v68.28h13.12l-.06-26.67h9.08l12.48,26.48h14.75l-13.62-29.51ZM677.91,318.28h-13.09v-15.15h13.05s5.63,1.13,5.63,7.58-5.59,7.58-5.59,7.58Z" />
        <path d="M948.16,328.47s9.08-5.3,9.08-17.78c0-19.48-18.81-20.81-18.81-20.81h-26.02v68.28h13.12l-.06-26.67h9.08l12.48,26.48h14.75l-13.62-29.51ZM938.56,318.28h-13.09v-15.15h13.05s5.63,1.13,5.63,7.58-5.59,7.58-5.59,7.58Z" />
        <path d="M791.84,289.88h-18.8v68.28h18.8s31.55-1.65,31.55-33.17-25.78-35.11-31.55-35.11ZM791.9,346.25h-5.27v-44.64h5.27s18.06.38,18.06,22.41-18.06,22.23-18.06,22.23Z" />
        <path d="M599.01,336.6s1.68,9.08,13.41,9.08,13.62-9.08,13.62-9.08v-46.72h13.55v46.72s-2.2,22.28-27.17,22.28-27.28-22.28-27.28-22.28v-46.72h13.87v46.72" />
        <path d="M542.82,318.44h30.47v39.53h-12.46l-.8-3.78s-4.54,4.73-17.21,4.73-32.32-11.39-32.32-34.54,19.27-35.26,35.16-35.26,24.97,11.35,24.97,11.35l-9.08,10.21s-3.78-7.57-16.27-7.57-20.91,10.78-20.91,20.9,8.43,21.09,20.53,21.09,14.75-4.54,14.75-4.54v-10.97h-16.83v-11.16Z" />
        <path d="M412.3,341.52l12.11-5.67s1.7,9.27,9.27,9.27c4.29,0,6.64-2.31,7.86-4.32s.92-4.64-.79-6.27c-1.36-1.3-3.63-2.79-7.45-4.17-9.46-3.4-17.4-9.84-17.4-20.05s7.57-21.18,20.43-21.18,17.59,10.4,18.91,14l-12.11,6.05s-.54-1.36-.58-1.44c-.92-1.93-2.28-3.77-4.37-4.53-3.03-1.09-6.16.36-7.71,3.08-1.21,2.13-1.54,5.18.31,7.06.66.67,1.59,1.34,2.89,1.88,4.54,1.89,21.94,6.81,21.94,22.32s-13.05,21.35-21.66,21.35-18.44-4.7-21.66-17.37Z" />
      </g>
    </svg>
  )
}

/* CTA principal — pill neon da marca (equivalente ao AppleButton do layout). */
export function PillButton({
  label = 'Simular Residencial',
  full = false,
}: {
  label?: string
  full?: boolean
}) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-brand text-navy font-semibold text-sm px-5 py-3 transition-all hover:bg-brand/90 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      <LogoMark className="w-4 h-4" />
      {label}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
    </button>
  )
}

export function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/80">
      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
      <span className="font-medium">{label}</span>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">
          {tag}
        </span>
      )}
    </div>
  )
}

/* Gradiente shiny da headline — stops adaptados à paleta da marca. */
export const gradientStyle: CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #002430 0%, #279989 12.5%, #b9f7d0 32.5%, #46EF80 50%, #279989 67.5%, #002430 87.5%, #002430 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
}
