import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero({ onRequestDemo }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary, #6366F1)" stopOpacity=".15" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity=".15" />
            </linearGradient>
          </defs>
          <rect width="1440" height="800" fill="url(#bg)"/>
          <g className="animate-pulse">
            <path d="M0 600 C 300 500, 600 700, 900 600 S 1440 600, 1440 600" stroke="url(#bg)" strokeWidth="2" fill="none"/>
            <path d="M0 300 C 300 200, 600 400, 900 300 S 1440 300, 1440 300" stroke="url(#bg)" strokeWidth="2" fill="none"/>
          </g>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.2,0.9,0.3,1] }} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> SOC 2 ready · 99.99% uptime SLA available
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">Production-ready databases in minutes.</h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">Fast, secure, and effortless DBaaS — automated backups, instant scaling, and a dashboard your team will actually love.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#signup" className="px-5 py-3 rounded-md text-white shadow-md" style={{ background: 'linear-gradient(135deg, var(--primary, #6366F1), #22D3EE)'}}>
              Start free — no credit card
            </a>
            <button onClick={onRequestDemo} className="px-5 py-3 rounded-md border border-slate-300 hover:bg-white/60 transition">
              Request demo
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 opacity-80">
            <img src="/logo.png" alt="Customer logo" className="h-8 w-auto" loading="lazy"/>
            <img src="/logo.png" alt="Customer logo" className="h-8 w-auto" loading="lazy"/>
            <img src="/logo.png" alt="Customer logo" className="h-8 w-auto" loading="lazy"/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
