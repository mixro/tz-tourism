import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

const Destinations = lazy(() => import('./pages/Destinations.jsx'))
const DestinationDetail = lazy(() => import('./pages/Destinations.jsx').then(m => ({ default: m.DestinationDetail })))
const Collections = (name) => lazy(() => import('./pages/Collections.jsx').then(m => ({ default: m[name] })))
const Experiences = Collections('Experiences')
const Safaris = Collections('Safaris')
const Features = (name) => lazy(() => import('./pages/Features.jsx').then(m => ({ default: m[name] })))
const Kilimanjaro = Features('Kilimanjaro')
const Zanzibar = Features('Zanzibar')
const Misc = (name) => lazy(() => import('./pages/Misc.jsx').then(m => ({ default: m[name] })))
const About = Misc('About')
const Journal = Misc('Journal')
const Contact = Misc('Contact')

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen bg-deep" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/safaris" element={<Safaris />} />
          <Route path="/kilimanjaro" element={<Kilimanjaro />} />
          <Route path="/zanzibar" element={<Zanzibar />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
