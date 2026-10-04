import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Btn, Heading, Img, PageHero, Reveal, Wrap, useSEO } from '../components/ui.jsx'
import { journal, why } from '../data/content.js'
import { FinalCTA } from './Home.jsx'

export function About() {
  useSEO('About', 'CHONG ADVENTURE is a Tanzanian adventure company designing journeys with local knowledge and authentic experiences.')
  return (
    <>
      <PageHero title="About CHONG ADVENTURE" sub="Discover Tanzania. Live the adventure." image="/images/about.jpg" tone={['#3b5a46', '#0B241B']} />
      <section className="bg-cream py-24">
        <Wrap className="max-w-4xl space-y-8">
          <Reveal><p className="font-display text-3xl leading-snug text-forest md:text-5xl">CHONG ADVENTURE exists to help travelers experience the extraordinary diversity of Tanzania.</p></Reveal>
          <Reveal><p className="text-lg leading-relaxed text-charcoal/75">From the untamed plains of the Serengeti to the summit of Kilimanjaro, from wildlife-rich national parks to the turquoise waters of Zanzibar, we connect travelers with these experiences through carefully designed journeys, local knowledge and authentic adventure.</p></Reveal>
        </Wrap>
      </section>
      <section className="bg-sand py-24">
        <Wrap>
          <Heading title="What we stand for" />
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {why.map(([t, d]) => <Reveal key={t}><li><h3 className="text-3xl text-deep">{t}</h3><p className="mt-2 text-charcoal/75">{d}</p></li></Reveal>)}
          </ul>
        </Wrap>
      </section>
      <FinalCTA />
    </>
  )
}

export function Journal() {
  useSEO('Journal', 'Stories, guides and planning advice for traveling in Tanzania.')
  return (
    <>
      <PageHero title="Stories from Tanzania" sub="Guides, field notes and planning advice from our team." image="/images/j-serengeti.jpg" tone={['#B98A3E', '#0B241B']} />
      <section className="bg-cream py-24">
        <Wrap className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {journal.map(a => (
            <Reveal key={a.slug}>
              <article id={a.slug} className="scroll-mt-28">
                <Img src={a.image} tone={a.tone} alt={a.title} className="aspect-[3/2]" zoom={false} />
                <p className="mt-4 text-xs text-forest">{a.category} · {a.date}</p>
                <h2 className="mt-2 text-4xl text-deep">{a.title}</h2>
                <p className="mt-3 text-charcoal/75">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </Wrap>
      </section>
      <FinalCTA />
    </>
  )
}

const types = ['Safari', 'Kilimanjaro', 'Zanzibar', 'Safari + Zanzibar', 'Cultural Experience', 'Honeymoon', 'Family Adventure', 'Other']
const budgets = ['Under $2,000', '$2,000 – $4,000', '$4,000 – $8,000', '$8,000+', 'Not sure yet']
const field = 'w-full border border-forest/30 bg-white px-4 py-3 text-base text-charcoal focus:border-forest'

export function Contact() {
  useSEO('Plan Your Adventure', 'Tell CHONG ADVENTURE about your dream Tanzania journey.')
  const [params] = useSearchParams()
  const [v, setV] = useState({ name: '', email: '', phone: '', country: '', dates: '', travelers: '2', type: types.includes(params.get('type')) ? params.get('type') : '', budget: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })

  const submit = e => {
    e.preventDefault()
    const x = {}
    if (v.name.trim().length < 2) x.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email address.'
    if (v.phone && !/^[+\d][\d\s()-]{6,}$/.test(v.phone)) x.phone = 'Enter a valid phone number.'
    if (!v.country.trim()) x.country = 'Tell us where you’re traveling from.'
    if (!(Number(v.travelers) >= 1)) x.travelers = 'At least one traveler.'
    if (!v.type) x.type = 'Choose an experience.'
    setErr(x)
    if (!Object.keys(x).length) { setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' }) } // no backend: replace with API call
  }

  const F = ({ k, label, children, req }) => (
    <label className="block text-sm font-semibold text-deep">
      {label}{req && <span aria-hidden="true"> *</span>}
      <div className="mt-2 font-normal">{children}</div>
      {err[k] && <p role="alert" className="mt-1 text-sm font-medium text-red-700">{err[k]}</p>}
    </label>
  )
  const inp = (k, p = {}) => <input className={field} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} {...p} />

  return (
    <>
      <PageHero title="Plan your adventure" sub="Tell us what you dream of discovering. We’ll reply within two working days." image="/images/cta.jpg" tone={['#B98A3E', '#0B241B']} />
      <section className="bg-cream py-24">
        <Wrap className="max-w-3xl">
          {sent ? (
            <div role="status" className="border-l-4 border-gold bg-white p-10">
              <CheckCircle2 className="text-forest" size={36} />
              <h2 className="mt-4 text-5xl text-deep">Thank you, {v.name.split(' ')[0]}.</h2>
              <p className="mt-4 text-lg text-charcoal/75">Your journey request is with our team. We’ll email {v.email} within two working days with first ideas for your {v.type} trip.</p>
              <div className="mt-8"><Btn to="/destinations" variant="dark">Keep exploring</Btn></div>
            </div>
          ) : (
            <form noValidate onSubmit={submit} className="grid gap-6 md:grid-cols-2">
              <F k="name" label="Full name" req>{inp('name', { autoComplete: 'name' })}</F>
              <F k="email" label="Email" req>{inp('email', { type: 'email', autoComplete: 'email' })}</F>
              <F k="phone" label="Phone / WhatsApp">{inp('phone', { type: 'tel', autoComplete: 'tel' })}</F>
              <F k="country" label="Country" req>{inp('country', { autoComplete: 'country-name' })}</F>
              <F k="dates" label="Travel dates">{inp('dates', { placeholder: 'e.g. July 2026, flexible' })}</F>
              <F k="travelers" label="Number of travelers" req>{inp('travelers', { type: 'number', min: 1 })}</F>
              <F k="type" label="Experience type" req>
                <select className={field} value={v.type} onChange={set('type')} aria-invalid={!!err.type}>
                  <option value="">Select an experience</option>{types.map(t => <option key={t}>{t}</option>)}
                </select>
              </F>
              <F k="budget" label="Budget range (per person)">
                <select className={field} value={v.budget} onChange={set('budget')}><option value="">Select a range</option>{budgets.map(b => <option key={b}>{b}</option>)}</select>
              </F>
              <div className="md:col-span-2"><F k="message" label="Message"><textarea rows={5} className={field} value={v.message} onChange={set('message')} /></F></div>
              <div className="md:col-span-2"><Btn type="submit" variant="dark">Start my journey</Btn></div>
            </form>
          )}
        </Wrap>
      </section>
    </>
  )
}
