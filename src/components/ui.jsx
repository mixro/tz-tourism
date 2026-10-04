import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function useSEO(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | CHONG ADVENTURE` : 'CHONG ADVENTURE | Discover Tanzania'
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
  }, [title, description])
}

// Photo with gradient fallback until a real file exists in /public/images.
export function Img({ src, tone = ['#2c5a43', '#0B241B'], alt = '', className = '', zoom = true }) {
  const [bad, setBad] = useState(false)
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(150deg, ${tone[0]}, ${tone[1]})` }}>
      {!bad && (
        <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${zoom ? 'group-hover:scale-105' : ''}`} />
      )}
    </div>
  )
}

export function ParallaxImg({ className = '', ...p }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-[10%]"><Img {...p} zoom={false} className="h-full w-full" /></motion.div>
    </div>
  )
}

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)

export function Btn({ to, variant = 'solid', children, className = '', ...p }) {
  const v = {
    solid: 'bg-gold text-deep hover:bg-sand',
    ghost: 'border border-white/60 text-white hover:bg-white hover:text-deep',
    dark: 'bg-forest text-cream hover:bg-deep',
  }[variant]
  const cls = `group inline-flex min-h-12 items-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-[.18em] transition-all duration-300 hover:-translate-y-0.5 ${v} ${className}`
  const inner = <>{children}<ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></>
  return to ? <Link to={to} className={cls} {...p}>{inner}</Link> : <button className={cls} {...p}>{inner}</button>
}

export const Heading = ({ title, children, light, className = '' }) => (
  <div className={className}>
    <h2 className={`text-4xl uppercase md:text-6xl ${light ? 'text-cream' : 'text-deep'}`}>{title}</h2>
    {children && <p className={`mt-5 max-w-xl text-base leading-relaxed ${light ? 'text-cream/80' : 'text-charcoal/70'}`}>{children}</p>}
  </div>
)

export function PageHero({ title, sub, image, tone }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-deep text-cream">
      <Img src={image} tone={tone} zoom={false} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-deep/30" />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-16 pt-40 md:px-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="max-w-4xl text-5xl uppercase md:text-8xl">{title}</motion.h1>
        {sub && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .4 }}
          className="mt-6 max-w-xl text-lg text-cream/85">{sub}</motion.p>}
      </div>
    </section>
  )
}

export const Wrap = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1320px] px-6 md:px-10 ${className}`}>{children}</div>
)
