import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar({ onOpenContact }) {
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Home">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--primary, #6366F1)"/>
                <stop offset="100%" stopColor="#22D3EE"/>
              </linearGradient>
            </defs>
            <path d="M4 12c0-4.418 3.582-8 8-8 1.657 0 3.19.504 4.46 1.36l-2.02 2.02A5 5 0 0 0 12 6C8.686 6 6 8.686 6 12s2.686 6 6 6a5 5 0 0 0 4.46-7.46l2.02-2.02A8 8 0 1 1 4 12Z" fill="url(#grad)"/>
            <circle cx="12" cy="12" r="2.5" stroke="url(#grad)" strokeWidth="2" fill="white"/>
          </svg>
          <span className="font-semibold text-slate-800 tracking-tight">{import.meta.env.VITE_PRODUCT_NAME || 'ProductName'}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#use-cases" className="hover:text-slate-900">Use cases</a>
          <a href="#docs" className="hover:text-slate-900">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/demo" className="hidden sm:inline-flex px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">Live demo</Link>
          <button onClick={onOpenContact} className="px-3 py-2 rounded-md border border-slate-300 hover:bg-slate-50 transition" aria-haspopup="dialog">Contact</button>
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#signup" className="px-4 py-2 rounded-md bg-primary-600 text-white shadow hover:shadow-md transition" style={{ background: 'linear-gradient(135deg, var(--primary, #6366F1), #22D3EE)'}}>
            Start free
          </motion.a>
        </div>
      </div>
    </div>
  )
}
