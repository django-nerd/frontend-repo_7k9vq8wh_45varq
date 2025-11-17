import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import UseCases from './components/UseCases'
import DemoPlayground from './components/DemoPlayground'
import DashboardPreview from './components/DashboardPreview'
import DocsCTA from './components/DocsCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  // simple signup handler
  const submitSignup = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      email: form.get('email'),
      name: form.get('name'),
      company: form.get('company'),
      source: 'website:signup'
    }
    try {
      await fetch(`${API}/api/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      alert('Thanks for signing up! Check your inbox to verify your email.')
      e.currentTarget.reset()
    } catch (err) {
      alert('Could not submit right now. Please try again later.')
    }
  }

  const submitDemo = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      email: form.get('email'),
      name: form.get('name'),
      company: form.get('company'),
      use_case: form.get('use_case'),
      source: 'website:demo'
    }
    try {
      await fetch(`${API}/api/demos`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      alert('Thanks! We will reach out to schedule a demo.')
      e.currentTarget.reset()
    } catch (err) {
      alert('Could not submit right now. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero onRequestDemo={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })} />
        <Features />
        <DemoPlayground />
        <Pricing />
        <UseCases />
        <DashboardPreview />
        <DocsCTA />
        <section id="signup" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <form onSubmit={submitSignup} className="rounded-xl border border-slate-200 p-6 bg-white/80 shadow-sm">
                <h3 className="font-semibold text-slate-900">Start free</h3>
                <p className="text-sm text-slate-600">No credit card required.</p>
                <div className="mt-3 space-y-3">
                  <input required name="email" type="email" placeholder="Email" className="w-full rounded-md border p-2" />
                  <input name="name" placeholder="Name" className="w-full rounded-md border p-2" />
                  <input name="company" placeholder="Company" className="w-full rounded-md border p-2" />
                  <button className="w-full px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Create account</button>
                  <p className="text-xs text-slate-500">By signing up you agree to our Terms and Privacy.</p>
                </div>
              </form>
              <form id="demo-form" onSubmit={submitDemo} className="rounded-xl border border-slate-200 p-6 bg-white/80 shadow-sm">
                <h3 className="font-semibold text-slate-900">Request a demo</h3>
                <p className="text-sm text-slate-600">We’ll reach out shortly.</p>
                <div className="mt-3 space-y-3">
                  <input required name="email" type="email" placeholder="Work email" className="w-full rounded-md border p-2" />
                  <input name="name" placeholder="Name" className="w-full rounded-md border p-2" />
                  <input name="company" placeholder="Company" className="w-full rounded-md border p-2" />
                  <input name="use_case" placeholder="Use case" className="w-full rounded-md border p-2" />
                  <button className="w-full px-4 py-2 rounded-md border">Request demo</button>
                  <p className="text-xs text-slate-500">We respect your privacy. GDPR compliant.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
