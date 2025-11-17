import { motion } from 'framer-motion'

const features = [
  {
    title: 'Blazing performance',
    desc: 'Sub-10ms p95 reads, globally distributed replicas, and adaptive caches.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm9-7v7l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  },
  {
    title: 'Security by default',
    desc: 'Encrypted at rest & in transit, fine-grained RBAC, and audit trails.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4Z" stroke="currentColor" strokeWidth="2"/><path d="M9.5 12l1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  },
  {
    title: 'Automated backups',
    desc: 'Daily automated backups with point-in-time restore and retention controls.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/></svg>
    )
  },
  {
    title: 'Effortless scaling',
    desc: 'Zero-downtime scale up/down with workload-aware autoscaling.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h18M12 3v18M7 7l5-4 5 4M7 17l5 4 5-4" stroke="currentColor" strokeWidth="2"/></svg>
    )
  },
  {
    title: 'Multi-tenant ready',
    desc: 'Isolated tenants, per-tenant metrics, and usage-based billing hooks.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="2"/><path d="M3 3h6v6H3zM15 15h6v6h-6z" stroke="currentColor" strokeWidth="2"/></svg>
    )
  },
  {
    title: 'Developer loved',
    desc: 'CLI + SDKs, copy-paste snippets, and a clean dashboard your team will love.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 16l-4-4 4-4M16 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple, secure, and fast</h2>
          <p className="mt-2 text-slate-600">SOC 2 ready · Encrypted at rest & in transit · Daily automated backups</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div whileHover={{ y: -6 }} key={i} className="group rounded-xl border border-slate-200 p-6 bg-white/80 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="text-primary-600 group-hover:text-primary-700 transition">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-400" aria-hidden="true">
                <div className="absolute -inset-20 bg-gradient-to-tr from-primary-200/40 to-cyan-200/40 blur-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
