import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Compass, Sparkles, Leaf, Handshake, MapPin, Quote } from 'lucide-react'
import { Btn, Heading, Img, ParallaxImg, Reveal, Wrap, useSEO } from '../components/ui.jsx'
import { destinations } from '../data/destinations.js'
import { experiences, safaris, journal, testimonials, why } from '../data/content.js'

const rise = (d) => ({ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease: [0.22, 1, 0.36, 1] } })

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-deep text-cream">
      <motion.div className="absolute inset-0" initial={{ scale: 1.18 }} animate={{ scale: 1 }} transition={{ duration: 2.6, ease: 'easeOut' }}>
        <Img src="/images/hero.jpg" tone={['#B98A3E', '#0B241B']} zoom={false} alt="Acacia trees on the Serengeti at sunrise" className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/20 to-deep/90" />
      <Wrap className="relative pt-24">
        <motion.p {...rise(.3)} className="text-xs uppercase tracking-[.3em] text-gold">Tanzania • East Africa</motion.p>
        <h1 className="mt-6 text-6xl uppercase leading-[.92] md:text-[9rem]">
          <motion.span className="block" {...rise(.5)}>Discover the</motion.span>
          <motion.span className="block" {...rise(.7)}>wild heart</motion.span>
          <motion.span className="block" {...rise(.9)}>of Tanzania</motion.span>
        </h1>
        <motion.p {...rise(1.1)} className="mt-8 max-w-xl text-lg text-cream/85">
          From endless Serengeti plains to the summit of Kilimanjaro and the turquoise shores of Zanzibar, experience Tanzania through journeys designed around you.
        </motion.p>
        <motion.div {...rise(1.3)} className="mt-10 flex flex-wrap gap-4">
          <Btn to="/destinations">Explore Tanzania</Btn>
          <Btn to="/contact" variant="ghost">Plan Your Adventure</Btn>
        </motion.div>
      </Wrap>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.3em] text-cream/70">
        Scroll to explore <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}

function Statement() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <Wrap className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Reveal><p className="font-display text-3xl text-forest md:text-4xl">CHONG ADVENTURE designs journeys across Tanzania.</p></Reveal>
        <Reveal delay={.15}>
          <p className="text-lg leading-relaxed text-charcoal/75">From the untamed plains of the Serengeti to the summit of Kilimanjaro, from wildlife-rich national parks to the turquoise waters of Zanzibar, Tanzania offers a world of experiences. We connect you with them through local knowledge and authentic adventure.</p>
        </Reveal>
      </Wrap>
    </section>
  )
}

const spans = ['md:col-span-7 aspect-[4/3]', 'md:col-span-5 aspect-auto', 'md:col-span-4 aspect-[4/5]', 'md:col-span-4 aspect-[4/5]', 'md:col-span-4 aspect-[4/5]', 'md:col-span-12 aspect-[21/9]']
export function DestinationTile({ d, cls = '' }) {
  return (
    <Link to={`/destinations/${d.slug}`} className={`group relative block overflow-hidden bg-deep text-cream ${cls}`}>
      <Img src={d.image} tone={d.tone} alt={`${d.name}, Tanzania`} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/10 to-transparent transition-colors duration-500 group-hover:from-deep" />
      <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1 md:p-8">
        <h3 className="text-4xl md:text-5xl">{d.name}</h3>
        <p className="mt-2 max-w-sm text-sm text-cream/85">{d.description}</p>
        <ArrowRight className="mt-4 transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </Link>
  )
}

function Destinations() {
  return (
    <section className="bg-cream pb-28">
      <Wrap>
        <Reveal><Heading title="Where will Tanzania take you?" /></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-5">
          {destinations.map((d, i) => <Reveal key={d.slug} className={spans[i].split(' ').filter(c => c.startsWith('md:col')).join(' ')}><DestinationTile d={d} cls={`w-full h-full ${spans[i].split(' ').filter(c => c.startsWith('aspect')).join(' ')} min-h-[320px]`} /></Reveal>)}
        </div>
      </Wrap>
    </section>
  )
}

function Experiences() {
  const [first, ...rest] = experiences
  return (
    <section className="bg-forest py-28 text-cream">
      <Wrap>
        <Reveal><Heading light title="Experiences beyond ordinary" /></Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Link to={first.to} className="group relative block min-h-[520px] overflow-hidden">
            <Img src={first.image} tone={first.tone} className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/90 to-transparent" />
            <div className="absolute bottom-0 p-8"><h3 className="text-5xl">{first.title}</h3><p className="mt-3 max-w-sm text-cream/85">{first.text}</p></div>
          </Link>
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {rest.slice(0, 5).map(e => (
              <li key={e.title}>
                <Link to={e.to} className="group flex items-center justify-between gap-6 py-6 transition-all hover:pl-3">
                  <div><h3 className="text-3xl">{e.title}</h3><p className="mt-1 text-sm text-cream/70">{e.text}</p></div>
                  <ArrowRight className="shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10"><Btn to="/experiences" variant="ghost">All experiences</Btn></div>
      </Wrap>
    </section>
  )
}

function Migration() {
  const meta = [['Best time', 'June to October'], ['Location', 'Serengeti, Northern Tanzania'], ['Duration', '5 to 8 days'], ['Experience', 'Wildlife safari']]
  return (
    <section className="relative overflow-hidden bg-deep text-cream">
      <ParallaxImg src="/images/migration.jpg" tone={['#B98A3E', '#1a1208']} alt="Wildebeest crossing the Serengeti" className="absolute inset-0" />
      <div className="absolute inset-0 bg-deep/60" />
      <Wrap className="relative py-32 md:py-48">
        <Reveal><h2 className="max-w-3xl text-5xl uppercase md:text-8xl">The Great Migration</h2></Reveal>
        <Reveal delay={.15}><p className="mt-6 max-w-xl text-lg text-cream/85">Witness one of nature’s greatest spectacles as millions of wildebeest and other animals move across the Serengeti ecosystem.</p></Reveal>
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/25 pt-8 md:grid-cols-4">
          {meta.map(([k, v]) => <div key={k}><dt className="text-xs text-gold">{k}</dt><dd className="mt-1 text-sm">{v}</dd></div>)}
        </dl>
        <div className="mt-12"><Btn to="/destinations/serengeti">Explore the journey</Btn></div>
      </Wrap>
    </section>
  )
}

function Safaris() {
  return (
    <section className="bg-cream py-28">
      <Wrap>
        <Reveal><Heading title="Into the wild">Six ways to meet Tanzania’s wildlife, each shaped by pace, comfort and curiosity.</Heading></Reveal>
        <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-3">
          {safaris.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * .1} className={i % 3 === 1 ? 'md:mt-16' : ''}>
              <Link to="/safaris" className="group block">
                <Img src={s.image} tone={s.tone} alt={s.title} className="aspect-[4/5]" />
                <h3 className="mt-5 text-3xl text-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-forest">Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

function Feature({ image, tone, title, text, list, cta, to, dark }) {
  return (
    <section className={`relative overflow-hidden py-32 text-cream md:py-44 ${dark ? 'bg-deep' : 'bg-[#0d3a40]'}`}>
      <ParallaxImg src={image} tone={tone} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/55 to-transparent" />
      <Wrap className="relative">
        <Reveal><h2 className="max-w-2xl text-5xl uppercase md:text-8xl">{title}</h2></Reveal>
        <Reveal delay={.1}><p className="mt-6 max-w-lg text-lg text-cream/85">{text}</p></Reveal>
        <ul className="mt-8 flex max-w-xl flex-wrap gap-x-8 gap-y-2 text-cream/90">{list.map(l => <li key={l} className="flex items-center gap-2"><MapPin size={14} className="text-gold" />{l}</li>)}</ul>
        <div className="mt-10"><Btn to={to}>{cta}</Btn></div>
      </Wrap>
    </section>
  )
}

const icons = [Compass, Sparkles, Leaf, Handshake, Leaf]
function Why() {
  return (
    <section className="bg-sand py-28">
      <Wrap className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <Reveal><Heading title="Why journey with Chong?" className="lg:sticky lg:top-32" /></Reveal>
        <ul className="divide-y divide-forest/20 border-y border-forest/20">
          {why.map(([t, d], i) => { const I = icons[i]; return (
            <Reveal key={t}><li className="flex gap-6 py-8"><I className="mt-1 shrink-0 text-forest" /><div><h3 className="text-3xl text-deep">{t}</h3><p className="mt-2 text-charcoal/75">{d}</p></div></li></Reveal>
          ) })}
        </ul>
      </Wrap>
    </section>
  )
}

function Story() {
  return (
    <section className="bg-cream py-32 md:py-48">
      <Wrap className="text-center">
        <Reveal><h2 className="mx-auto max-w-5xl text-5xl uppercase text-deep md:text-8xl">Tanzania is not just a destination.</h2></Reveal>
        <Reveal delay={.15}><p className="mt-6 font-display text-4xl italic text-gold md:text-6xl">It is a feeling.</p></Reveal>
        <Reveal delay={.25}>
          <p className="mx-auto mt-14 max-w-lg font-display text-2xl leading-relaxed text-forest">The sound of the savannah at sunrise.<br />The first sight of Kilimanjaro above the clouds.<br />The rhythm of Zanzibar.<br />The silence of the wilderness.<br />The warmth of its people.</p>
        </Reveal>
      </Wrap>
    </section>
  )
}

export function JournalCard({ a }) {
  return (
    <Link to={`/journal#${a.slug}`} className="group block">
      <Img src={a.image} tone={a.tone} alt={a.title} className="aspect-[3/2]" />
      <p className="mt-4 text-xs text-forest">{a.category} · {a.date}</p>
      <h3 className="mt-2 text-3xl text-deep">{a.title}</h3>
      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-forest">Read article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
    </Link>
  )
}

function JournalPreview() {
  return (
    <section className="bg-cream pb-28">
      <Wrap>
        <div className="flex flex-wrap items-end justify-between gap-6"><Reveal><Heading title="Stories from Tanzania" /></Reveal><Btn to="/journal" variant="dark">All stories</Btn></div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">{journal.slice(0, 3).map(a => <Reveal key={a.slug}><JournalCard a={a} /></Reveal>)}</div>
      </Wrap>
    </section>
  )
}

function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  return (
    <section className="bg-forest py-28 text-cream">
      <Wrap className="max-w-4xl">
        <Heading light title="Stories from the journey" />
        <Quote className="mt-12 text-gold" />
        <motion.blockquote key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mt-4 font-display text-3xl leading-snug md:text-5xl">“{t.quote}”</motion.blockquote>
        <p className="mt-6 text-sm text-cream/75">{t.name}, {t.country} · {t.trip}</p>
        <div className="mt-8 flex gap-3" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, n) => <button key={n} role="tab" aria-selected={n === i} aria-label={`Testimonial ${n + 1}`} onClick={() => setI(n)} className={`h-1.5 w-12 transition-colors ${n === i ? 'bg-gold' : 'bg-white/30'}`} />)}
        </div>
      </Wrap>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-deep py-32 text-center text-cream md:py-48">
      <Img src="/images/cta.jpg" tone={['#B98A3E', '#0B241B']} zoom={false} className="absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-deep/55" />
      <Wrap className="relative">
        <Reveal><h2 className="mx-auto max-w-4xl text-5xl uppercase md:text-8xl">Your Tanzania adventure starts here.</h2></Reveal>
        <Reveal delay={.1}><p className="mx-auto mt-6 max-w-lg text-lg text-cream/85">Tell us what you dream of discovering. We’ll help turn it into a journey worth remembering.</p></Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-4"><Btn to="/contact">Start planning</Btn><Btn to="/destinations" variant="ghost">Explore destinations</Btn></div>
      </Wrap>
    </section>
  )
}

export default function Home() {
  useSEO('', 'Premium Tanzania safaris, Kilimanjaro treks and Zanzibar escapes, designed around you by CHONG ADVENTURE.')
  return (
    <>
      <Hero /><Statement /><Destinations /><Experiences /><Migration /><Safaris />
      <Feature dark image="/images/kilimanjaro.jpg" tone={['#8FA3B8', '#16222f']} title="Stand above Africa" text="Challenge yourself to reach the roof of Africa." list={['Machame Route', 'Marangu Route', 'Lemosho Route', 'Rongai Route']} cta="Explore Kilimanjaro" to="/kilimanjaro" />
      <Feature image="/images/zanzibar.jpg" tone={['#2f7f84', '#0b343a']} title="From savannah to sea" text="White sand beaches, Stone Town, spice farms and the warm Indian Ocean." list={['Diving and snorkelling', 'Spice experiences', 'Romantic escapes']} cta="Explore Zanzibar" to="/zanzibar" />
      <Why /><Story /><JournalPreview /><Testimonials /><FinalCTA />
    </>
  )
}
