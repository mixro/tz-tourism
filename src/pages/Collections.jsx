import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Btn, Img, PageHero, Reveal, Wrap, useSEO } from '../components/ui.jsx'
import { experiences, safaris } from '../data/content.js'
import { FinalCTA } from './Home.jsx'

function Collection({ items, title, sub, hero, tone, seo, linkTo }) {
  useSEO(seo, sub)
  return (
    <>
      <PageHero title={title} sub={sub} image={hero} tone={tone} />
      <section className="bg-cream py-24">
        <Wrap className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * .08}>
              <Link to={linkTo || e.to} className="group block">
                <Img src={e.image} tone={e.tone} alt={e.title} className="aspect-[4/5]" />
                <h2 className="mt-5 text-3xl text-deep">{e.title}</h2>
                <p className="mt-2 text-charcoal/70">{e.text}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-forest">Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </Wrap>
        {linkTo && <Wrap className="mt-16"><Btn to="/contact" variant="dark">Plan a safari</Btn></Wrap>}
      </section>
      <FinalCTA />
    </>
  )
}

export const Experiences = () => (
  <Collection items={experiences} title="Experiences beyond ordinary" sub="Nine ways to travel Tanzania, each built around what you love." seo="Experiences" hero="/images/exp-wildlife.jpg" tone={['#B98A3E', '#0B241B']} />
)
export const Safaris = () => (
  <Collection items={safaris} linkTo="/contact?type=Safari" title="Into the wild" sub="Choose the safari that suits your pace, your party and your passion." seo="Safaris" hero="/images/safari-classic.jpg" tone={['#B98A3E', '#0B241B']} />
)
