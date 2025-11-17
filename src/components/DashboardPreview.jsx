import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DashboardPreview() {
  const [showRestore, setShowRestore] = useState(false)
  const [flipped, setFlipped] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <motion.div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm perspective" onClick={() => setFlipped(!flipped)} aria-live="polite">
            <div className="text-slate-900 font-semibold">Multi-tenant dashboard</div>
            <div className="text-sm text-slate-600">Click to flip card</div>
            <div className="relative mt-4" style={{ transformStyle: 'preserve-3d' }}>
              <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: .6 }} className="rounded-lg border p-4 bg-white" style={{ backfaceVisibility: 'hidden', position: 'relative' }}>
                <table className="w-full text-sm">
                  <thead className="text-slate-500">
                    <tr><th className="text-left">Tenant</th><th>Plan</th><th>Region</th><th>Status</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    {['Acme', 'Globex', 'Umbrella', 'Stark'].map((n,i)=> (
                      <tr key={n} className="hover:bg-slate-50">
                        <td className="py-2">{n}</td>
                        <td className="text-center">{['starter','pro','enterprise','pro'][i]}</td>
                        <td className="text-center">{['us-east-1','eu-west-1','ap-south-1','us-west-2'][i]}</td>
                        <td className="text-center"><span className="inline-flex items-center gap-1 text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> healthy</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <motion.div animate={{ rotateY: flipped ? 0 : -180 }} transition={{ duration: .6 }} className="absolute inset-0 rounded-lg border p-4 bg-white" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <div className="text-sm text-slate-700">Tenant details</div>
                <ul className="mt-2 text-sm text-slate-600 list-disc pl-5">
                  <li>Read/write QPS: 842</li>
                  <li>Avg latency: 6.4 ms</li>
                  <li>Storage: 128.6 GB</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <div className="text-slate-900 font-semibold">Backups</div>
            <p className="text-sm text-slate-600">Daily automated backups with PITR.</p>
            <button onClick={() => setShowRestore(true)} className="mt-4 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Restore backup…</button>
            <AnimatePresence>
              {showRestore && (
                <motion.div role="dialog" aria-modal="true" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-black/30">
                  <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                    <div className="text-slate-900 font-semibold">Restore backup</div>
                    <p className="text-sm text-slate-600">Choose a snapshot to restore.</p>
                    <select className="mt-3 w-full rounded border p-2"><option>2025-11-16T03:00Z</option><option>2025-11-15T03:00Z</option></select>
                    <div className="mt-4 flex justify-end gap-2">
                      <button onClick={() => setShowRestore(false)} className="px-3 py-2 rounded border">Cancel</button>
                      <button onClick={() => setShowRestore(false)} className="px-3 py-2 rounded bg-slate-900 text-white">Restore</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
