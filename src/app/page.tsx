import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import Dispatches from "@/components/Dispatches";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        <HeroBackground />

        <div className="relative flex-1 flex items-end pt-32 pb-12">
          <div className="w-full max-w-[1480px] mx-auto px-6 md:px-10">
            {/* Top meta strip */}
            <div className="flex items-center justify-between mb-10">
              <p className="label">VOL. 01 · EST. 2026</p>
              <p className="label hidden md:block">— STATUS · TAKING NEW ENGAGEMENTS</p>
            </div>

            <h1 className="display text-[44px] sm:text-[68px] md:text-[110px] lg:text-[140px] max-w-[14ch]">
              Fractional <span className="stamp">CAIO</span>
              <br />
              for operating
              <br />
              companies.
            </h1>

            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-5 muted text-[15px] leading-relaxed max-w-[42ch]">
                AI strategy, implementation, and governance for $10M–$100M operating companies — without hiring a full-time executive.
              </p>
              <div className="md:col-span-7 md:justify-self-end flex flex-wrap gap-4">
                <Link href="/waitlist" className="btn btn-accent btn-lg">
                  <span>Join the waitlist</span>
                  <span className="btn-arrow" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
                <Link href="/work" className="btn btn-ghost btn-lg">
                  <span>See the work</span>
                  <span className="btn-arrow" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors strip */}
        <div className="relative border-t border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-2)]">
          <div className="max-w-[1480px] mx-auto px-6 md:px-10 py-4 flex items-center gap-8">
            <p className="label shrink-0 hidden md:block">— NOW SERVING /</p>
            <div className="marquee flex-1">
              <div className="marquee-track">
                {[
                  "Freight & logistics",
                  "Healthcare services",
                  "Franchises & multi-unit operators",
                  "Professional services",
                  "Mid-market & enterprise",
                  "Operating co. · $10M–$100M+",
                  "Freight & logistics",
                  "Healthcare services",
                  "Franchises & multi-unit operators",
                  "Professional services",
                  "Mid-market & enterprise",
                  "Operating co. · $10M–$100M+",
                ].map((sector, i) => (
                  <span key={i} className="text-[15px] font-medium tracking-tight">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 · INTRODUCTION ── */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-1/2 -translate-y-1/2">— 01 / INTRODUCTION</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="num-stamp">01</span>
              <span className="label">— Introduction</span>
            </div>
          </div>
          <p className="md:col-span-7 md:col-start-6 text-2xl md:text-[34px] leading-[1.22] tracking-[-0.018em] font-light">
            Own your AI transformation without hiring a full-time executive.
            I partner with <span className="stamp-sm stamp-r">$10M–$100M</span> operating
            companies to turn AI from a line item into measurable leverage.
          </p>
        </div>
      </section>

      {/* ── 02 · THE PROBLEM ── */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 02 / PROBLEM</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="num-stamp">02</span>
              <span className="label">— The problem</span>
            </div>
            <h2 className="display text-4xl md:text-5xl lg:text-[68px]">
              Most companies have <span className="stamp">AI anxiety</span>, not an AI plan.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-0">
            {[
              {
                n: "i",
                t: "Hype without a thesis.",
                b: "Every vendor claims to be AI-first. Your team can&rsquo;t tell which tools matter, which are theater, and which will regret-purchase you in six months.",
              },
              {
                n: "ii",
                t: "Pilots that never leave the sandbox.",
                b: "Marketing demos an ops chatbot, legal flags it, IT shelves it. No one is accountable for getting real systems into production.",
              },
              {
                n: "iii",
                t: "Tool sprawl, no leverage.",
                b: "You&rsquo;re paying for six copilots and seeing no margin, no hours back, no compounding. Spend is up, output is flat.",
              },
              {
                n: "iv",
                t: "No governance, rising risk.",
                b: "Clients and carriers are starting to ask. You don&rsquo;t have a policy, a data boundary, or a clear answer when they do.",
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

      {/* ── 03 · ENGAGEMENT (3 pillars) ── */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 03 / ENGAGEMENT</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="num-stamp">03</span>
                <span className="label">— Engagement</span>
              </div>
              <h2 className="display text-4xl md:text-5xl lg:text-[68px]">
                What a Fractional CAIO <span className="stamp">actually does</span>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-b border-[color:var(--color-fg)]">
            {[
              {
                n: "01",
                title: "AI Strategy",
                body: "Define where AI creates real margin in your business — then say no to everything else.",
                ex: "For a 40-person freight forwarder: prioritized 3 use cases worth $480k/yr in recovered ops hours, killed 5 shiny pilots.",
              },
              {
                n: "02",
                title: "AI Implementation",
                body: "Ship real systems into production. Not slideware, not sandbox demos.",
                ex: "Built a Claude-powered quote-drafting workflow that cut response time from 40 minutes to 3, hands-on with the ops team.",
              },
              {
                n: "03",
                title: "AI Governance",
                body: "Policy, data boundaries, model selection, and an answer when clients ask.",
                ex: "Authored a usage policy and data handling framework for a healthcare services firm ahead of an enterprise client audit.",
              },
            ].map((p, i) => (
              <div
                key={p.n}
                className={`p-9 md:p-11 border-[color:var(--color-rule-2)] ${i < 2 ? "md:border-r" : ""} ${i > 0 ? "border-t md:border-t-0" : ""}`}
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="num-stamp num-stamp-lg">{p.n}</span>
                  <span className="label">— Pillar</span>
                </div>
                <h3 className="display-md text-[28px] md:text-[32px] mb-4">{p.title}</h3>
                <p className="muted leading-relaxed mb-6">{p.body}</p>
                <div className="pt-5 border-t border-[color:var(--color-rule-2)]">
                  <p className="label mb-2">— Case</p>
                  <p className="text-sm leading-relaxed fg-2">{p.ex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 · FIT ── */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 04 / FIT</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="num-stamp">04</span>
              <span className="label">— Fit</span>
            </div>
            <h2 className="display text-4xl md:text-5xl lg:text-[64px]">
              Built for a <span className="stamp">specific</span> kind of company.
            </h2>
          </div>
          <div className="md:col-span-4 bg-[color:var(--color-bg-2)] p-8 border-t-2 border-[color:var(--color-accent)]">
            <p className="label-accent mb-6">— FOR</p>
            <ul className="plus-list space-y-4">
              {[
                "Operating companies, $10M–$100M in revenue",
                "Real customers, real margin, real operations",
                "Leadership that wants an owner, not a deck",
                "Industries without an in-house AI bench",
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4 p-8 border-t border-[color:var(--color-rule-2)]">
            <p className="label mb-6">— NOT FOR</p>
            <ul className="space-y-4 muted">
              {[
                "Tech startups with in-house AI teams",
                "Early-stage companies without a business to augment",
                "Buyers looking for a PowerPoint deliverable",
                "Anyone who wants to stay anonymous about AI usage",
              ].map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <span className="text-sm mt-0.5 shrink-0">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 05 · CADENCE ── */}
      <section className="relative py-24 md:py-32 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 05 / CADENCE</span>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="num-stamp">05</span>
                <span className="label">— Cadence</span>
              </div>
              <h2 className="display text-4xl md:text-5xl lg:text-[64px]">
                How we work <span className="stamp">together</span>.
              </h2>
            </div>
            <p className="md:col-span-5 muted leading-relaxed self-end text-[15px]">
              Weekly working sessions with your leadership, shared Notion, and a
              real backlog &mdash; not a report.
            </p>
          </div>

          <div className="border-t border-[color:var(--color-fg)]">
            {[
              {
                m: "MONTH 1",
                t: "Audit",
                tag: "DISCOVER",
                b: "Map workflows, interview the team, identify where AI creates leverage &mdash; and where it doesn&rsquo;t. Output: a prioritized roadmap, not a 90-slide deck.",
              },
              {
                m: "MONTHS 2–3",
                t: "Pilot",
                tag: "BUILD",
                b: "Ship 1&ndash;2 real systems into production. Fast feedback loops, hands on keys with your ops and engineering teams.",
              },
              {
                m: "MONTHS 4+",
                t: "Scale & govern",
                tag: "OPERATE",
                b: "Expand what works, document policy, train the team so they own it. My job is to make myself progressively less necessary.",
              },
            ].map((s) => (
              <div
                key={s.m}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-[color:var(--color-rule-2)] items-start"
              >
                <p className="md:col-span-2 label tnum pt-2">— {s.m}</p>
                <div className="md:col-span-4">
                  <h3 className="display-md text-3xl md:text-[40px]">{s.t}</h3>
                  <span className="inline-block mt-3 tag tag-accent">{s.tag}</span>
                </div>
                <p
                  className="md:col-span-6 muted leading-relaxed text-[15.5px]"
                  dangerouslySetInnerHTML={{ __html: s.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dispatches />
    </>
  );
}
