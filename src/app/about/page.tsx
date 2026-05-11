import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[color:var(--color-rule-2)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="num-stamp">00</span>
            <span className="label">— About</span>
          </div>
          <h1 className="display text-[48px] md:text-[108px] max-w-[14ch]">
            I build the AI layer operating companies <span className="stamp">actually need</span>.
          </h1>
        </div>
      </section>

      {/* 01 — Who I am */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 01 / WHO</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="num-stamp">01</span>
              <span className="label">— Who I am</span>
            </div>

            {/* Portrait — brutalist frame with mint accent + offset shadow */}
            <div className="relative inline-block max-w-full" style={{ width: "min(100%, 420px)" }}>
              <div
                className="relative bg-[color:var(--color-bg-3)] border border-[color:var(--color-fg)]"
                style={{
                  boxShadow: "10px 10px 0 0 var(--color-accent)",
                }}
              >
                <Image
                  src="/images/greg-baehr.png"
                  alt="Greg Baehr"
                  width={480}
                  height={1200}
                  quality={88}
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="block w-full h-auto"
                  style={{ display: "block" }}
                />
                {/* Mint corner mark */}
                <span
                  aria-hidden
                  className="absolute -top-2 -right-2 w-4 h-4 bg-[color:var(--color-accent)]"
                />
                {/* Caption strip */}
                <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-4 py-2.5 bg-[color:var(--color-bg)]/85 backdrop-blur-sm border-t border-[color:var(--color-rule-2)]">
                  <span className="label">— Greg Baehr</span>
                  <span className="label">2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 pt-2">
            <p className="text-lg leading-relaxed">
              <span className="display text-3xl md:text-4xl block mb-3">Greg Baehr.</span>
              I run <a href="https://autera.us" target="_blank" rel="noreferrer" className="stamp-sm">Autera</a>, a growth
              infrastructure agency for freight forwarders, and I do fractional
              CAIO work for a small list of operating companies outside freight.
            </p>

            <p className="text-lg leading-relaxed muted mt-5">
              Before this, I spent years operating inside the industries I now build for &mdash;
              close enough to know where AI creates real leverage, and far enough to
              call out where it&rsquo;s a distraction.
            </p>

            {/* Pull quote */}
            <div className="relative my-10 pl-6 border-l-2 border-[color:var(--color-accent)]">
              <p className="display text-2xl md:text-[28px] leading-[1.18]">
                The job isn&rsquo;t to introduce AI to your business. It&rsquo;s to figure out which
                two or three workflows it will <span className="stamp-sm">quietly transform</span>{" "}
                &mdash; then build them so they ship.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Most of what I do isn&rsquo;t advisory. It&rsquo;s hands-on &mdash; sitting with the ops
              team, rewriting a workflow end to end, shipping the system, and owning
              the outcome. When the engagement ends, you have working software, not a
              slide deck.
            </p>

            {/* Focus block */}
            <div className="mt-10 pt-8 border-t border-[color:var(--color-rule-2)]">
              <p className="label mb-5">— Where I focus</p>
              <ul className="plus-list grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[15.5px]">
                <li>AI strategy with a business thesis</li>
                <li>Hands-on implementation, not slideware</li>
                <li>Governance, policy &amp; data boundaries</li>
                <li>Operating-company ops automation</li>
                <li>Custom AI workflows on Claude / OpenAI</li>
                <li>Internal tools that replace 5+ SaaS subs</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 02 — Why */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 02 / WHY</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="num-stamp">02</span>
              <span className="label">— Why</span>
            </div>
            <h2 className="display text-3xl md:text-5xl lg:text-[60px]">
              The gap between AI <span className="stamp">hype</span> and AI <span className="stamp stamp-r">execution</span>.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed">
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
            <p className="display text-2xl md:text-3xl pt-4">
              That&rsquo;s the job. <span className="stamp">That&rsquo;s what I do</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — How I work */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 03 / HOW</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="num-stamp">03</span>
              <span className="label">— How I work</span>
            </div>
            <h2 className="display text-3xl md:text-5xl lg:text-[60px]">
              Small list. <span className="stamp">High ownership</span>.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-0">
            {[
              {
                n: "i",
                t: "Small client list by design.",
                b: "I take on no more than 3&ndash;4 CAIO engagements at a time. If we work together, you get me, not a junior.",
              },
              {
                n: "ii",
                t: "Hands on, not slideware.",
                b: "Real implementations, real code, real operations changes. Decks are byproducts, not deliverables.",
              },
              {
                n: "iii",
                t: "Full client ownership.",
                b: "Everything I build &mdash; prompts, workflows, systems, policy &mdash; is yours. No lock-in, no &ldquo;hosted on my account.&rdquo;",
              },
              {
                n: "iv",
                t: "Direct access.",
                b: "Slack or SMS. No account manager layer. If you text me at 9pm about a client demo tomorrow, I&rsquo;ll answer.",
              },
            ].map((p) => (
              <div key={p.n} className="grid grid-cols-[44px_1fr] gap-4 py-6 border-t border-[color:var(--color-rule-2)] first:border-t-0">
                <span className="mono text-[12px] uppercase tracking-[0.22em] accent pt-1">{p.n}</span>
                <div>
                  <p className="text-xl md:text-2xl tracking-[-0.018em] font-medium" dangerouslySetInnerHTML={{ __html: p.t }} />
                  <p className="muted mt-2 leading-relaxed max-w-xl" dangerouslySetInnerHTML={{ __html: p.b }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <span className="num-stamp">04</span>
            <span className="label">— Start</span>
          </div>
          <h2 className="display text-4xl md:text-6xl lg:text-[80px] max-w-3xl mx-auto">
            If you&rsquo;ve read this far,
            <br />
            <span className="stamp">let&rsquo;s talk</span>.
          </h2>
          <div className="mt-10 flex justify-center">
            <Link href="/waitlist" className="btn btn-accent btn-lg">
              <span>Join the waitlist</span>
              <span className="btn-arrow" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
