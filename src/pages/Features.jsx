import { MapPin } from 'lucide-react'
import { Btn, Heading, PageHero, Reveal, Wrap, useSEO } from '../components/ui.jsx'
import { features } from '../data/content.js'
import { FinalCTA } from './Home.jsx'

function Feature({ f }) {
  useSEO(f.seo, f.intro)
  return (
    <>
      <PageHero title={f.title} sub={f.sub} image={f.image} tone={f.tone} />
      <section className="bg-cream py-24">
        <Wrap className="max-w-4xl"><Reveal><p className="font-display text-3xl leading-snug text-forest md:text-5xl">{f.intro}</p></Reveal></Wrap>
      </section>
      <section className="bg-sand py-24">
        <Wrap>
          <Heading title={f.listTitle} />
          <ul className="mt-12 divide-y divide-forest/20 border-y border-forest/20">
            {f.items.map(([n, meta, text]) => (
              <Reveal key={n}>
                <li className="grid gap-3 py-8 md:grid-cols-[1.2fr_1fr_1.6fr] md:items-baseline">
                  <h3 className="text-4xl text-deep">{n}</h3>
                  <p className="flex items-center gap-2 text-sm text-forest"><MapPin size={14} />{meta}</p>
                  <p className="text-charcoal/75">{text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12"><Btn to={`/contact?type=${encodeURIComponent(f.type)}`} variant="dark">{f.cta}</Btn></div>
        </Wrap>
      </section>
      <FinalCTA />
    </>
  )
}
export const Kilimanjaro = () => <Feature f={features.kilimanjaro} />
export const Zanzibar = () => <Feature f={features.zanzibar} />
