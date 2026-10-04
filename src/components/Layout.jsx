import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Instagram, Facebook, Youtube, Music2 } from 'lucide-react'
import { Btn, Wrap } from './ui.jsx'

const links = [['Destinations', '/destinations'], ['Experiences', '/experiences'], ['Safaris', '/safaris'], ['About', '/about'], ['Journal', '/journal']]

function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-cream transition-all duration-500 ${solid || open ? 'border-b border-white/10 bg-deep/85 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <Wrap className="flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-[.12em]">CHONG ADVENTURE</Link>
        <nav aria-label="Main" className="hidden gap-9 lg:flex">
          {links.map(([l, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-sm tracking-wide transition-colors hover:text-gold ${isActive ? 'text-gold' : ''}`}>{l}</NavLink>
          ))}
        </nav>
        <div className="hidden lg:block"><Btn to="/contact" className="!py-3">Plan Your Adventure</Btn></div>
        <button className="p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </Wrap>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .4 }} className="overflow-hidden lg:hidden">
            <div className="flex flex-col gap-1 px-6 pb-8">
              {links.map(([l, to]) => <Link key={to} to={to} className="border-b border-white/10 py-4 font-display text-3xl">{l}</Link>)}
              <Btn to="/contact" className="mt-6 justify-center">Plan Your Adventure</Btn>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const cols = [
    ['Explore', [['Destinations', '/destinations'], ['Safaris', '/safaris'], ['Kilimanjaro', '/kilimanjaro'], ['Zanzibar', '/zanzibar'], ['Experiences', '/experiences']]],
    ['Company', [['About', '/about'], ['Contact', '/contact'], ['Journal', '/journal'], ['Sustainability', '/about']]],
  ]
  return (
    <footer className="bg-deep text-cream/80">
      <Wrap className="grid gap-12 py-20 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-3xl text-cream">CHONG ADVENTURE</p>
          <p className="mt-3 max-w-xs">Discover Tanzania differently.</p>
          <div className="mt-6 flex gap-4">
            {[[Instagram, 'Instagram'], [Facebook, 'Facebook'], [Youtube, 'YouTube'], [Music2, 'TikTok']].map(([I, n]) => (
              <a key={n} href="#" aria-label={n} className="transition-colors hover:text-gold"><I size={20} /></a>
            ))}
          </div>
        </div>
        {cols.map(([t, ls]) => (
          <div key={t}>
            <h3 className="mb-4 font-body text-sm font-semibold text-cream">{t}</h3>
            <ul className="space-y-2">{ls.map(([l, to]) => <li key={l}><Link className="transition-colors hover:text-gold" to={to}>{l}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h3 className="mb-4 font-body text-sm font-semibold text-cream">Contact</h3>
          <ul className="space-y-2"><li>Tanzania</li><li>hello@chongadventure.example</li><li>+255 000 000 000</li><li>WhatsApp: +255 000 000 000</li></ul>
        </div>
      </Wrap>
      <Wrap className="border-t border-white/10 py-6 text-sm">© 2026 CHONG ADVENTURE. All rights reserved.</Wrap>
    </footer>
  )
}

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const [past, setPast] = useState(false)
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const f = () => setPast(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:p-3">Skip to content</a>
      <Navbar />
      <motion.main id="main" key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }}>{children}</motion.main>
      <Footer />
      {past && pathname !== '/contact' && (
        <Link to="/contact" className="fixed bottom-5 right-5 z-40 bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-deep shadow-xl transition-transform hover:-translate-y-1">
          Plan Your Adventure
        </Link>
      )}
    </>
  )
}
