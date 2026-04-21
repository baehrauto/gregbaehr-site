import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import Dispatches from "@/components/Dispatches";

export default function Home() {
  return (
    <>
      {/* Hero — mouse-reactive paper masthead */}
      <section className="relative min-h-[100svh] flex flex-col">
        <HeroBackground />

        <div className="relative flex-1 flex items-end pt-32 pb-10">
          <div className="w-full max-w-[1480px] mx-auto px-6 md:px-10">
            <p className="eyebrow mb-8 hidden md:block">
              Vol. 01 · Fractional CAIO · Est. 2026
            </p>
            <h1 className="serif text-[44px] sm:text-[64px] md:text-[108px] lg:text-[132px] leading-[0.92] tracking-[-0.035em] max-w-[14ch]">
              Fractional <span className="italic accent">CAIO</span> for operating companies.
            </h1>
            <div className="mt-10">
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
        </div>

        {/* Sectors strip */}
        <div className="relative border-t border-[color:var(--color-ink)]">
          <div className="max-w-[1480px] mx-auto px-6 md:px-10 py-5 flex items-center gap-8">
            <p className="eyebrow shrink-0 hidden md:block">Now serving</p>
            <div className="marquee flex-1">
              <div className="marquee-track">
                {[
                  "Freight & logistics",
                  "Healthcare services",
                  "Franchises & multi-unit operators",
                  "Professional services",
                  "Mid-market & enterprise",
                  "Operating companies · $10M–$100M+",
                  "Freight & logistics",
                  "Healthcare services",
                  "Franchises & multi-unit operators",
                  "Professional services",
                  "Mid-market & enterprise",
                  "Operating companies · $10M–$100M+",
                ].map((sector, i) => (
                  <span key={i} className="serif italic text-lg">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-hero positioning */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <p className="eyebrow md:col-span-4 self-start">
            <span className="roman not-italic mr-2">I —</span> Introduction
          </p>
          <p className="md:col-span-7 md:col-start-6 serif text-2xl md:text-[38px] leading-[1.2] tracking-[-0.015em] dropcap">
            Own your AI transformation without hiring a full-time executive.
            I partner with <span className="italic accent">$10M–$100M</span> operating
            companies to turn AI from a line item into measurable leverage.
          </p>
        </div>
      </section>

      <div className="hairline" />

      {/* Problem */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">
              <span className="roman not-italic mr-2">II —</span> The problem
            </p>
            <h2 className="serif text-4xl md:text-5xl leading-tight mt-6 tracking-[-0.02em]">
              Most companies have <span className="italic accent">AI anxiety</span>, not an AI plan.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-10 pt-2">
            {[
              {
                t: "Hype without a thesis.",
                b: "Every vendor claims to be AI-first. Your team can&rsquo;t tell which tools matter, which are theater, and which will regret-purchase you in six months.",
              },
              {
                t: "Pilots that never leave the sandbox.",
                b: "Marketing demos an ops chatbot, legal flags it, IT shelves it. No one is accountable for getting real systems into production.",
              },
              {
                t: "Tool sprawl, no leverage.",
                b: "You&rsquo;re paying for six copilots and seeing no margin, no hours back, no compounding. Spend is up, output is flat.",
              },
              {
                t: "No governance, rising risk.",
                b: "Clients and carriers are starting to ask. You don&rsquo;t have a policy, a data boundary, or a clear answer when they do.",
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

      {/* 3 Pillars */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-6">
              <p className="eyebrow">
                <span className="roman not-italic mr-2">III —</span> Engagement
              </p>
              <h2 className="serif text-4xl md:text-5xl leading-tight mt-6 tracking-[-0.02em]">
                What a Fractional CAIO <span className="italic accent">actually does</span>.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 border-t border-[color:var(--color-ink)]">
            {[
              {
                n: "i",
                title: "AI Strategy",
                body: "Define where AI creates real margin in your business — then say no to everything else.",
                ex: "For a 40-person freight forwarder: prioritized 3 use cases worth $480k/yr in recovered ops hours, killed 5 shiny pilots.",
              },
              {
                n: "ii",
                title: "AI Implementation",
                body: "Ship real systems into production. Not slideware, not sandbox demos.",
                ex: "Built a Claude-powered quote-drafting workflow that cut response time from 40 minutes to 3, hands-on with the ops team.",
              },
              {
                n: "iii",
                title: "AI Governance",
                body: "Policy, data boundaries, model selection, and an answer when clients ask.",
                ex: "Authored a usage policy and data handling framework for a healthcare services firm ahead of an enterprise client audit.",
              },
            ].map((p, i) => (
              <div
                key={p.n}
                className={`p-10 md:p-12 border-[color:var(--color-rule)] ${
                  i < 2 ? "md:border-r" : ""
                } ${i > 0 ? "border-t md:border-t-0" : ""}`}
              >
                <p className="roman text-5xl mb-8 italic">{p.n}</p>
                <h3 className="serif text-2xl mb-4 tracking-[-0.01em]">{p.title}</h3>
                <p className="muted leading-relaxed">{p.body}</p>
                <p className="mt-6 text-sm leading-relaxed pl-4 border-l-2 border-[color:var(--color-accent)]">
                  <span className="eyebrow block mb-1">Case</span>
                  {p.ex}
                </p>
              </div>
            ))}
          </div>
          <div className="border-b border-[color:var(--color-ink)]" />
        </div>
      </section>

      <div className="hairline" />

      {/* Who it's for / not for */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">
              <span className="roman not-italic mr-2">IV —</span> Fit
            </p>
            <h2 className="serif text-4xl md:text-5xl leading-tight mt-6 tracking-[-0.02em]">
              Built for a <span className="italic accent">specific</span> kind of company.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">For</p>
            <ul className="space-y-5">
              {[
                "Operating companies, $10M–$100M in revenue",
                "Real customers, real margin, real operations",
                "Leadership that wants an owner, not a deck",
                "Industries without an in-house AI bench",
              ].map((t) => (
                <li key={t} className="flex gap-4">
                  <span className="roman text-sm mt-1.5">◆</span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">Not for</p>
            <ul className="space-y-5 muted">
              {[
                "Tech startups with in-house AI teams",
                "Early-stage companies without a business to augment",
                "Buyers looking for a PowerPoint deliverable",
                "Anyone who wants to stay anonymous about AI usage",
              ].map((t) => (
                <li key={t} className="flex gap-4">
                  <span className="text-sm mt-1.5">—</span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* How we work */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <p className="eyebrow">
                <span className="roman not-italic mr-2">V —</span> Cadence
              </p>
              <h2 className="serif text-4xl md:text-5xl leading-tight mt-6 tracking-[-0.02em]">
                How we work <span className="italic accent">together</span>.
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 muted leading-relaxed self-end">
              Weekly working sessions with your leadership, shared Notion, and a
              real backlog &mdash; not a report.
            </p>
          </div>
          <div className="space-y-0 border-t border-[color:var(--color-ink)]">
            {[
              {
                m: "Month 1",
                t: "Audit",
                b: "Map workflows, interview the team, identify where AI creates leverage &mdash; and where it doesn&rsquo;t. Output: a prioritized roadmap, not a 90-slide deck.",
              },
              {
                m: "Months 2–3",
                t: "Pilot",
                b: "Ship 1&ndash;2 real systems into production. Fast feedback loops, hands on keys with your ops and engineering teams.",
              },
              {
                m: "Months 4+",
                t: "Scale & govern",
                b: "Expand what works, document policy, train the team so they own it. My job is to make myself progressively less necessary.",
              },
            ].map((s) => (
              <div
                key={s.m}
                className="grid md:grid-cols-12 gap-10 py-10 border-b border-[color:var(--color-rule)]"
              >
                <p className="md:col-span-3 eyebrow">{s.m}</p>
                <h3 className="md:col-span-3 serif text-3xl tracking-[-0.01em]">{s.t}</h3>
                <p
                  className="md:col-span-6 muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline" />

      <Dispatches />

      <div className="hairline" />
    </>
  );
}
