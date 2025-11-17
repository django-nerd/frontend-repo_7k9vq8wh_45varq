import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const samples = [
  { label: 'List users', sql: 'SELECT * FROM users LIMIT 5;' },
  { label: 'Orders by country', sql: 'SELECT country, COUNT(*) FROM orders GROUP BY 1;' },
  { label: 'Latency check', sql: "EXPLAIN SELECT * FROM events WHERE ts > now()-interval '1 day';" },
]

export default function DemoPlayground() {
  const API = import.meta.env.VITE_BACKEND_URL || ''
  const [tenant, setTenant] = useState(null)
  const [metrics, setMetrics] = useState(null)
  const [queries, setQueries] = useState([])
  const [sql, setSql] = useState(samples[0].sql)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    fetch(`${API}/api/tenant/demo`).then(r => r.json()).then(d => {
      setTenant(d.tenant); setMetrics(d.metrics); setQueries(d.recent_queries)
    }).catch(() => {})
  }, [API])

  const run = () => {
    setRunning(true)
    setTimeout(() => setRunning(false), 600)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">SQL Playground</h3>
              <div className="text-xs text-slate-500">Demo tenant: {tenant?.name || 'Loading…'}</div>
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              {samples.map(s => (
                <button key={s.label} onClick={() => setSql(s.sql)} className="px-2 py-1 rounded border text-xs hover:bg-slate-50">{s.label}</button>
              ))}
            </div>
            <textarea aria-label="SQL input" value={sql} onChange={e => setSql(e.target.value)} className="mt-3 w-full h-32 rounded-md border p-3 font-mono text-sm" />
            <button onClick={run} className="mt-3 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Run</button>
            <div className="mt-4 space-y-2">
              <AnimatePresence>
                {queries.map(q => (
                  <motion.div key={q.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }} className="flex items-center justify-between rounded border p-3 text-sm">
                    <code className="text-slate-700">{q.sql}</code>
                    <span className="text-xs text-slate-500">{q.latency_ms} ms · {q.rows} rows</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {running && <div className="text-xs text-primary-600">Running…</div>}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Metrics</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <Metric label="QPS" value={metrics?.qps} />
              <Metric label="Avg latency" value={`${metrics?.avg_latency_ms} ms`} />
              <Metric label="Storage" value={`${metrics?.storage_gb} GB`} />
              <Metric label="Uptime" value={`${metrics?.uptime_pct}%`} />
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-700">Backups</h4>
              <ul className="mt-2 text-sm text-slate-600 list-disc pl-5">
                {metrics?.backups?.map((b, i) => (
                  <li key={i}>Snapshot at {b.at} — {b.status}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border p-4 bg-white">
      <div className="text-xs text-slate-500">{label}</div>
      <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4 }} className="text-2xl font-bold text-slate-900">{value ?? '—'}</motion.div>
    </div>
  )
}
