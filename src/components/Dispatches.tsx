export default function Dispatches() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <a
          href="https://instagram.com/baehr.ai"
          target="_blank"
          rel="noreferrer"
          className="block border border-[color:var(--color-ink)] p-8 md:p-10 group hover:bg-[color:var(--color-paper-2)] transition-colors"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-2 flex md:justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] flex items-center justify-center overflow-hidden relative">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70 mix-blend-multiply"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(139, 47, 28, 0.4) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(212, 160, 122, 0.5) 0%, transparent 60%)",
                  }}
                />
                <span className="serif italic text-3xl relative">gb</span>
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow mb-2">Instagram · public building</p>
              <p className="serif text-3xl md:text-4xl tracking-[-0.015em]">
                <span className="italic accent">@baehr.ai</span>
              </p>
              <p className="muted mt-3 max-w-lg leading-relaxed">
                Field notes on deploying AI inside real operating companies —
                what&rsquo;s working, what isn&rsquo;t, and why.
              </p>
            </div>
            <div className="md:col-span-3 flex md:justify-end">
              <span className="pill-cta group-hover:bg-[color:var(--color-ink)] group-hover:text-[color:var(--color-paper)]">
                Follow
                <span className="pill-cta-arrow" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8m0 0L7 3m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
