export default function Footer({ onOpenContact }) {
  const socials = [
    { name: 'Twitter', href: '#', svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 5.8c-.7.3-1.4.6-2.2.7.8-.5 1.4-1.2 1.7-2.2-.8.5-1.6.9-2.5 1.1A3.7 3.7 0 0 0 12 8.3c0 .3 0 .6.1.9A10.6 10.6 0 0 1 3 6s-4 9 5 13c-2.2 1.5-5 1.7-7 .9 9 5.8 20 0 20-11.6 0-.2 0-.4 0-.6.8-.6 1.4-1.3 2-2.1Z"/></svg>
    ) },
    { name: 'GitHub', href: '#', svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.5-.8 1.5-.8.5-1 1.2-1.3 1.2-1.3 2 .3 4.1-1 4.1-1 0-.9.3-1.6.7-2.1-2.2-.2-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.2-.5-1.3.1-2.6 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.3 2.8-1 2.8-1 .6 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.5 5 .4.5.7 1.2.7 2.1v3.1c0 .3.3.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z"/></svg>
    ) },
    { name: 'LinkedIn', href: '#', svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9h3v10H6zM7.5 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.5 3.5h3v1.4c.4-.7 1.4-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.9V19h-3v-4.3c0-1 0-2.3-1.4-2.3s-1.7 1.1-1.7 2.2V19h-3V9Z"/></svg>
    ) },
    { name: 'Discord', href: '#', svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 4a16 16 0 0 0-4-.9l-.2.5a14 14 0 0 1 3.7 1.2c-3.4-1.6-7.2-1.6-10.6 0l.2-.6A16 16 0 0 0 5 4C2 8 1 12 1 16c2.5 1.9 5 3 7.6 3.8l.6-.9c-1-.3-2-.8-2.9-1.3 2.8 1.9 8.2 1.9 11 0-.9.5-1.9 1-2.9 1.3l.5.9c2.6-.8 5.1-1.9 7.1-3.7 0-4-1-8-4-12Z"/></svg>
    ) },
    { name: 'Email', href: '#', svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18v12H3z"/><path d="M3 6l9 7 9-7"/></svg>
    ) },
    { name: 'Phone', href: '#', svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-8.7-3.1 19.5 19.5 0 0 1-6-6 19.9 19.9 0 0 1-3.1-8.8A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.7.9 2.5a2 2 0 0 1-.5 2.3L8.5 9.4a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 2.3-.5c.8.5 1.6.8 2.5.9a2 2 0 0 1 1.7 2.1Z"/></svg>
    ) },
  ]

  return (
    <footer className="bg-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} {import.meta.env.VITE_PRODUCT_NAME || 'ProductName'}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {socials.map(s => (
              <a key={s.name} href={s.href} aria-label={s.name} className="text-slate-600 hover:text-primary-600 transition-transform" style={{ display: 'inline-flex', transformOrigin: 'center' }}>
                <span className="inline-block transform hover:-translate-y-1 hover:scale-105 transition duration-120">{s.svg}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Security</a>
          <button onClick={onOpenContact} className="hover:text-slate-900">Contact</button>
          <span className="text-xs text-slate-500">This site uses cookies. We store essential cookies to enable core functionality. See Privacy for details.</span>
        </div>
      </div>
    </footer>
  )
}
