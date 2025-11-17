export default function UseCases() {
  const cases = [
    { title: 'Web apps', text: 'Ship user data and sessions with confidence and speed.' },
    { title: 'Analytics', text: 'Real-time events, time-series, and BI pipelines.' },
    { title: 'Internal tools', text: 'Admin panels, CRMs, and reporting dashboards.' },
    { title: 'Mobile backends', text: 'Sync, offline-first, and low-latency APIs.' },
  ]
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Built for modern teams</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map(c => (
            <div key={c.title} className="rounded-xl border border-slate-200 p-6 bg-white/80 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
