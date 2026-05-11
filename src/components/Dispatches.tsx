export default function Dispatches() {
  return (
    <section className="py-20 md:py-24 border-b border-[color:var(--color-rule-2)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <a
          href="https://instagram.com/baehr.ai"
          target="_blank"
          rel="noreferrer"
          className="block bg-[color:var(--color-bg-2)] border border-[color:var(--color-rule-2)] p-8 md:p-12 group hover:border-[color:var(--color-accent)] transition-colors"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-2 flex md:justify-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 bg-[color:var(--color-bg-3)] flex items-center justify-center overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255, 138, 61, 0.55) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(236, 232, 219, 0.10) 0%, transparent 60%)",
                  }}
                />
                <span className="relative font-semibold text-3xl tracking-tight">gb</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[color:var(--color-accent)]" aria-hidden />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="label mb-4">— INSTAGRAM · PUBLIC BUILDING</p>
              <p className="display text-3xl md:text-4xl">
                <span className="stamp">@baehr.ai</span>
              </p>
              <p className="muted mt-4 max-w-lg leading-relaxed">
                Field notes on deploying AI inside real operating companies —
                what&rsquo;s working, what isn&rsquo;t, and why.
              </p>
            </div>
            <div className="md:col-span-3 md:justify-self-end">
              <span className="btn btn-ghost group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]">
                Follow
                <span className="btn-arrow" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8m0 0L7 3m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
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
