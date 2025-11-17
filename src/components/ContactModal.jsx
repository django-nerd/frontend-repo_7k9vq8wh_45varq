import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactModal({ open, onClose }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e) => {
    e.preventDefault()
    setTimeout(() => { setSent(true); setTimeout(onClose, 1200) }, 600)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div role="dialog" aria-modal="true" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/30">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="text-slate-900 font-semibold">Contact us</div>
            <p className="text-sm text-slate-600">We typically reply within 1 business day.</p>
            <form onSubmit={submit} className="mt-3 space-y-3">
              <input required aria-label="Name" placeholder="Name" className="w-full rounded-md border p-2" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
              <input required type="email" aria-label="Email" placeholder="Email" className="w-full rounded-md border p-2" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
              <textarea required aria-label="Message" placeholder="Message" className="w-full rounded-md border p-2" rows={4} value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={onClose} className="px-3 py-2 rounded border">Cancel</button>
                <button type="submit" className="px-3 py-2 rounded bg-slate-900 text-white">Send</button>
              </div>
            </form>
            <AnimatePresence>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded p-2">Message sent! Thanks — we’ll be in touch.</motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
