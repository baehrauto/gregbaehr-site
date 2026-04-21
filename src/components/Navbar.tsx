import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color:var(--color-paper)]/75 border-b border-[color:var(--color-rule)]">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 h-20 grid grid-cols-3 items-center">
        <Link href="/" className="justify-self-start flex items-center gap-3" aria-label="Greg Baehr — home">
          <span className="serif italic text-[26px] tracking-tight leading-none">gb</span>
        </Link>
        <nav className="justify-self-center hidden md:flex items-center gap-10 mono text-[11px] uppercase tracking-[0.18em]">
          <Link href="/" className="muted hover:text-[color:var(--color-ink)] transition-colors">Index</Link>
          <Link href="/about" className="muted hover:text-[color:var(--color-ink)] transition-colors">About</Link>
          <a href="https://instagram.com/baehr.ai" target="_blank" rel="noreferrer" className="muted hover:text-[color:var(--color-ink)] transition-colors">@baehr.ai</a>
        </nav>
        <Link href="/waitlist" className="pill-cta pill-cta-solid justify-self-end">
          <span>Join waitlist</span>
          <span className="pill-cta-arrow" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
}
