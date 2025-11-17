const faqs = [
  { q: 'Is it SOC 2 ready?', a: 'Yes. Our controls align with SOC 2 and we can provide a report under NDA.' },
  { q: 'How are backups handled?', a: 'Daily automated backups with configurable retention and point-in-time restore.' },
  { q: 'What about encryption?', a: 'Data is encrypted at rest and in transit with TLS 1.3 and managed keys.' },
  { q: 'What SLA do you offer?', a: '99.99% uptime SLA is available on Enterprise plans.' },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">FAQ</h2>
        <dl className="mt-10 space-y-6">
          {faqs.map(({q,a}) => (
            <div key={q} className="rounded-xl border border-slate-200 p-5 bg-white/80 shadow-sm">
              <dt className="font-medium text-slate-900">{q}</dt>
              <dd className="mt-1 text-slate-600">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
