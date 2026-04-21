import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <p className="eyebrow mb-8">
            <span className="roman not-italic mr-2">—</span> About
          </p>
          <h1 className="serif text-[52px] md:text-[108px] leading-[0.96] tracking-[-0.035em] max-w-[14ch]">
            I build the AI layer operating companies <span className="italic accent">actually need</span>.
          </h1>
        </div>
      </section>

      <div className="hairline" />

      {/* Who I am */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">
              <span className="roman not-italic mr-2">I —</span> Who I am
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed">
            <p className="dropcap">
              Greg Baehr. I run <a href="https://autera.us" target="_blank" rel="noreferrer" className="italic accent">Autera</a>, a growth
              infrastructure agency for freight forwarders, and I do fractional
              CAIO work for a small list of operating companies outside freight.
            </p>
            <p className="muted">
              I build in public at <a href="https://instagram.com/baehr.ai" target="_blank" rel="noreferrer" className="italic accent">@baehr.ai</a> &mdash;
              notes on what&rsquo;s actually working when you deploy AI inside real,
              operating, messy businesses.
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Why I started */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">
              <span className="roman not-italic mr-2">II —</span> Why
            </p>
            <h2 className="serif text-3xl md:text-5xl leading-tight mt-6 tracking-[-0.02em]">
              The gap between AI <span className="italic accent">hype</span> and AI <span className="italic accent">execution</span>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed">
            <p>
              Every operating company I talk to has the same problem. They know AI
              matters. They don&rsquo;t know what to do about it. They&rsquo;ve tried
              a few tools, subscribed to a few newsletters, and are no closer to a
              real plan.
            </p>
            <p className="muted">
              The vendors selling them AI are incentivized to sell them more AI.
              The consultants who claim AI expertise mostly produce slide decks. No
              one is sitting next to the ops team, rewriting a workflow end to end,
              shipping something into production, and owning the outcome.
            </p>
            <p className="serif italic text-2xl md:text-3xl accent pt-4">
              That&rsquo;s the job. That&rsquo;s what I do.
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* How I work */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">
              <span className="roman not-italic mr-2">III —</span> How I work
            </p>
            <h2 className="serif text-3xl md:text-5xl leading-tight mt-6 tracking-[-0.02em]">
              Small list. <span className="italic accent">High ownership</span>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-10">
            {[
              {
                t: "Small client list by design.",
                b: "I take on no more than 3&ndash;4 CAIO engagements at a time. If we work together, you get me, not a junior.",
              },
              {
                t: "Hands on, not slideware.",
                b: "Real implementations, real code, real operations changes. Decks are byproducts, not deliverables.",
              },
              {
                t: "Full client ownership.",
                b: "Everything I build &mdash; prompts, workflows, systems, policy &mdash; is yours. No lock-in, no &ldquo;hosted on my account.&rdquo;",
              },
              {
                t: "Direct access.",
                b: "Slack or SMS. No account manager layer. If you text me at 9pm about a client demo tomorrow, I&rsquo;ll answer.",
              },
            ].map((p, i) => (
              <div key={i} className="border-t border-[color:var(--color-rule)] pt-6">
                <p className="serif text-xl md:text-2xl tracking-[-0.01em]" dangerouslySetInnerHTML={{ __html: p.t }} />
                <p className="muted mt-3 leading-relaxed max-w-xl" dangerouslySetInnerHTML={{ __html: p.b }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <p className="eyebrow mb-8">
            <span className="roman not-italic mr-2">IV —</span> Start
          </p>
          <h2 className="serif text-4xl md:text-6xl leading-tight max-w-3xl mx-auto tracking-[-0.02em]">
            If you&rsquo;ve read this far,
            <br />
            <span className="italic accent">let&rsquo;s talk</span>.
          </h2>
          <div className="mt-10 flex justify-center gap-3">
            <Link href="/waitlist" className="pill-cta pill-cta-solid pill-cta-lg">
              <span>Join the waitlist</span>
              <span className="pill-cta-arrow" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
