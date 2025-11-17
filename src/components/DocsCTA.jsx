import { useState } from 'react'

export default function DocsCTA() {
  const [copied, setCopied] = useState(false)
  const code = `// JS SDK\nimport { Client } from '@product/sdk'\nconst db = new Client({ apiKey: 'pk_...' })\nconst users = await db.query('SELECT * FROM users LIMIT 5')\n`
  const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(()=>setCopied(false), 1200) }
  return (
    <section id="docs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Loved docs. Fast starts.</h2>
            <p className="mt-2 text-slate-600">Dive into concise guides and SDKs for JS, Python, and Go. Clear examples, ready to paste.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="px-4 py-2 rounded-md border hover:bg-white/60">API reference</a>
              <a href="#" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">SDKs</a>
            </div>
            <div className="mt-4">
              <label htmlFor="doc-search" className="sr-only">Search docs</label>
              <input id="doc-search" placeholder="Search docs…" className="w-full rounded-md border p-3" />
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-700">JS example</div>
                <button onClick={copy} className="text-xs px-2 py-1 rounded border hover:bg-slate-50">{copied ? 'Copied' : 'Copy'}</button>
              </div>
              <pre className="mt-2 text-sm text-slate-800 overflow-auto"><code>{code}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
