import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-ink)] mt-40 bg-[color:var(--color-paper-2)]">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 pt-20 pb-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="eyebrow mb-6">Colophon · No. 01</p>
          <p className="serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
            Ready to stop guessing <span className="italic accent">about AI?</span>
          </p>
          <Link href="/waitlist" className="pill-cta pill-cta-solid pill-cta-lg mt-10">
            <span>Join the waitlist</span>
            <span className="pill-cta-arrow" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="md:col-span-2 md:col-start-9">
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="muted hover:text-[color:var(--color-ink)] transition-colors">Index</Link></li>
            <li><Link href="/about" className="muted hover:text-[color:var(--color-ink)] transition-colors">About</Link></li>
            <li><Link href="/waitlist" className="muted hover:text-[color:var(--color-ink)] transition-colors">Waitlist</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://instagram.com/baehr.ai" target="_blank" rel="noreferrer" className="muted hover:text-[color:var(--color-ink)] transition-colors">@baehr.ai</a></li>
            <li><a href="https://autera.us" target="_blank" rel="noreferrer" className="muted hover:text-[color:var(--color-ink)] transition-colors">Autera</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-rule)]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between mono text-[11px] uppercase tracking-[0.18em] muted">
          <span>© {new Date().getFullYear()} Greg Baehr</span>
          <span className="serif italic normal-case tracking-normal text-sm text-[color:var(--color-ink)]">Atlanta · Remote</span>
        </div>
      </div>
    </footer>
  );
}
