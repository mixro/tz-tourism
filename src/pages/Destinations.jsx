import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { Btn, Heading, Img, PageHero, Reveal, Wrap, useSEO } from '../components/ui.jsx'
import { destinations } from '../data/destinations.js'
import { DestinationTile, FinalCTA } from './Home.jsx'

export default function Destinations() {
  useSEO('Destinations', 'Serengeti, Kilimanjaro, Ngorongoro, Zanzibar, Tarangire and Nyerere: explore Tanzania’s great destinations.')
  return (
    <>
      <PageHero title="Destinations" sub="Six places that define Tanzania, each with a story of its own." image="/images/serengeti.jpg" tone={['#B98A3E', '#0B241B']} />
      <section className="bg-cream py-24">
        <Wrap className="grid gap-5 md:grid-cols-2">
          {destinations.map(d => <Reveal key={d.slug}><DestinationTile d={d} cls="aspect-[4/3] w-full" /></Reveal>)}
        </Wrap>
      </section>
      <FinalCTA />
    </>
  )
}

export function DestinationDetail() {
  const { slug } = useParams()
  const d = destinations.find(x => x.slug === slug)
  const [box, setBox] = useState(null)
  useSEO(d?.name, d?.intro)
  if (!d) return (
    <Wrap className="py-48 text-center"><h1 className="text-6xl text-deep">Destination not found</h1><div className="mt-8"><Btn to="/destinations" variant="dark">All destinations</Btn></div></Wrap>
  )
  const gallery = [1, 2, 3].map(n => ({ src: d.image.replace('.jpg', `-${n}.jpg`), tone: d.tone, alt: `${d.name} view ${n}` }))
  return (
    <>
      <PageHero title={d.name} sub={d.tagline} image={d.image} tone={d.tone} />

      <section className="bg-cream py-24">
        <Wrap className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal><p className="font-display text-3xl leading-snug text-forest md:text-4xl">{d.intro}</p><p className="mt-6 text-sm text-charcoal/60">{d.location}</p></Reveal>
          <Reveal delay={.1}>
            <h2 className="text-3xl text-deep">Why visit</h2>
            <ul className="mt-5 space-y-3">{d.why.map(w => <li key={w} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-gold" />{w}</li>)}</ul>
          </Reveal>
        </Wrap>
      </section>

      <section className="bg-forest py-24 text-cream">
        <Wrap className="grid gap-14 md:grid-cols-2">
          <Reveal><h2 className="text-4xl">Wildlife</h2><ul className="mt-6 flex flex-wrap gap-3">{d.wildlife.map(w => <li key={w} className="border border-white/30 px-4 py-2 text-sm">{w}</li>)}</ul></Reveal>
          <Reveal delay={.1}><h2 className="text-4xl">Best time to visit</h2><p className="mt-6 text-lg text-cream/85">{d.bestTime}</p></Reveal>
        </Wrap>
      </section>

      <section className="bg-cream py-24">
        <Wrap>
          <Heading title="Experiences" />
          <ul className="mt-10 grid gap-px border border-forest/20 bg-forest/20 sm:grid-cols-2 lg:grid-cols-4">
            {d.experiences.map(e => <li key={e} className="bg-cream p-8 font-display text-2xl text-deep">{e}</li>)}
          </ul>
        </Wrap>
      </section>

      <section className="bg-deep py-24">
        <Wrap>
          <Heading light title="Gallery" />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((g, i) => (
              <button key={g.src} onClick={() => setBox(g)} aria-label={`Open ${g.alt}`} className={`group ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}>
                <Img src={g.src} tone={d.tone} alt={g.alt} className="aspect-[4/3] w-full" />
              </button>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-sand py-24">
        <Wrap>
          <Heading title="Suggested itineraries" />
          <ul className="mt-10 divide-y divide-forest/20 border-y border-forest/20">
            {d.itineraries.map(t => (
              <li key={t.title} className="grid gap-4 py-8 md:grid-cols-[8rem_1fr_auto] md:items-center">
                <p className="font-display text-5xl text-forest">{t.days}<span className="ml-2 text-xl">days</span></p>
                <div><h3 className="text-3xl text-deep">{t.title}</h3><p className="mt-1 text-charcoal/75">{t.text}</p></div>
                <Btn to="/contact" variant="dark">Enquire</Btn>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm"><Link to="/destinations" className="underline underline-offset-4">Back to all destinations</Link></p>
        </Wrap>
      </section>
      <FinalCTA />

      <AnimatePresence>
        {box && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setBox(null)} role="dialog" aria-modal="true" aria-label={box.alt}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-6">
            <button className="absolute right-6 top-6 text-white" aria-label="Close gallery" onClick={() => setBox(null)}><X size={28} /></button>
            <Img src={box.src} tone={box.tone} alt={box.alt} zoom={false} className="aspect-[4/3] w-full max-w-5xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
