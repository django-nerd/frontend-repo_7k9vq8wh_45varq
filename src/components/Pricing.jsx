import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    priceMonthly: 0,
    priceYearly: 0,
    highlight: false,
    features: [
      'Shared compute',
      '1GB storage',
      'Daily automated backups',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    priceMonthly: 49,
    priceYearly: 39,
    highlight: true,
    features: [
      'Dedicated compute',
      '100GB storage',
      'Point-in-time restore',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    priceMonthly: 299,
    priceYearly: 249,
    highlight: false,
    features: [
      'Private VPC',
      'SAML SSO / RBAC',
      '99.99% uptime SLA',
      'Dedicated CSM',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const priceFor = (t) => (yearly ? t.priceYearly : t.priceMonthly)

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple, usage-based pricing</h2>
            <p className="mt-2 text-slate-600">Switch anytime. Generous free tier to get you to production.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={!yearly ? 'font-semibold' : ''}>Monthly</span>
            <button aria-pressed={yearly} onClick={() => setYearly(!yearly)} className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition">
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${yearly ? 'translate-x-5' : 'translate-x-1'}`} />
            </button>
            <span className={yearly ? 'font-semibold' : ''}>Yearly</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 bg-white/80 ${t.highlight ? 'border-primary-300 shadow-lg scale-100' : 'border-slate-200'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                {t.highlight && <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700">Most popular</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.span key={`${t.name}-${yearly}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .3 }}>
                      ${priceFor(t)}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Choose {t.name}</button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">Placeholders for analytics and Stripe/Paddle integration.</p>
      </div>
    </section>
  )
}
