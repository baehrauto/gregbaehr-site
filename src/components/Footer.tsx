import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-[color:var(--color-fg)] bg-[color:var(--color-bg-2)]">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 pt-20 pb-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="label mb-6">— COLOPHON · NO. 01</p>
          <p className="display text-4xl md:text-6xl lg:text-[72px] max-w-2xl">
            Ready to stop guessing <span className="stamp">about AI?</span>
          </p>
          <Link href="/waitlist" className="btn btn-accent btn-lg mt-10">
            <span>Join the waitlist</span>
            <span className="btn-arrow" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="md:col-span-2 md:col-start-9">
          <p className="label mb-4">— NAVIGATE</p>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link href="/" className="muted hover:text-[color:var(--color-fg)] transition-colors">Index</Link></li>
            <li><Link href="/work" className="muted hover:text-[color:var(--color-fg)] transition-colors">Work</Link></li>
            <li><Link href="/about" className="muted hover:text-[color:var(--color-fg)] transition-colors">About</Link></li>
            <li><Link href="/waitlist" className="muted hover:text-[color:var(--color-fg)] transition-colors">Waitlist</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="label mb-4">— ELSEWHERE</p>
          <ul className="space-y-2.5 text-[14px]">
            <li><a href="https://instagram.com/baehr.ai" target="_blank" rel="noreferrer" className="muted hover:text-[color:var(--color-fg)] transition-colors">@baehr.ai</a></li>
            <li><a href="https://autera.us" target="_blank" rel="noreferrer" className="muted hover:text-[color:var(--color-fg)] transition-colors">Autera</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-rule-2)]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between label">
          <span>© {new Date().getFullYear()} · GREG BAEHR · ALL RIGHTS RESERVED</span>
          <span className="text-[color:var(--color-fg)]">EST. 2026</span>
        </div>
      </div>
    </footer>
  );
}
