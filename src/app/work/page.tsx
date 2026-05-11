import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Greg Baehr",
  description:
    "Inside CSC+ — a coaching + peptide platform built end to end. Marketing site, member app, coach surface, 23-table backend.",
};

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[color:var(--color-rule-2)] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-accent)]/60 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="num-stamp">01</span>
                <span className="label">— The Showcase · 2026</span>
              </div>
              <h1 className="display text-[44px] sm:text-[72px] md:text-[108px] lg:text-[128px]">
                Inside <span className="stamp">CSC+</span>.<br />
                The full build.
              </h1>
            </div>
            <p className="md:col-span-4 text-[16px] leading-[1.55] muted">
              A coaching practice partnered with a licensed clinical group for
              prescription peptide therapy &mdash; with no platform tying them
              together. I built the marketing site, the member app, and the coach
              surface. One codebase. Twenty-three tables. Live in production.
            </p>
          </div>

          <ImageFrame
            src="/images/csc/csc-coaching.jpg"
            alt="CSC+ /coaching page — Custom coaching. Training, nutrition, check-ins."
            caption="/coaching"
            hero
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Campanaro Plus, Inc.",
              "Wellness · Performance · Peptide therapy",
              "Live · May 2026",
              "Solo build",
            ].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[color:var(--color-rule-2)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-5">
          {[
            { v: "37",  l: "Surfaces shipped",     s: "marketing · client · coach" },
            { v: "23",  l: "Backend tables",       s: "role-aware, real-time" },
            { v: "12+", l: "Permissioned actions", s: "every write is gated" },
            { v: "1",   l: "Codebase",             s: "three apps, one repo" },
            { v: "0",   l: "Mock data in prod",    s: "every screen reads live" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`px-6 py-10 md:px-9 md:py-14 border-[color:var(--color-rule-2)] ${i < 4 ? "lg:border-r" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i >= 3 ? "lg:border-t" : ""}`}
            >
              <div className="display tnum" style={{ fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 1 }}>
                {s.v}
              </div>
              <div className="mt-3 text-[14px] font-medium">{s.l}</div>
              <div className="mt-1 label">— {s.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 02 / CONTEXT — Before & After */}
      <section className="relative py-20 md:py-28 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 02 / CONTEXT</span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num-stamp">02</span>
            <span className="label">— Context</span>
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-[68px] max-w-[24ch] mb-12">
            Same practice. A <span className="stamp">completely</span> different way to operate.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <div className="bg-[color:var(--color-bg-2)] border border-[color:var(--color-rule-2)]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[color:var(--color-rule-2)]">
                <span className="label">— Before</span>
                <span className="label">THE PROBLEM</span>
              </div>
              <ul className="p-7 space-y-3.5">
                {[
                  "Inbound went to email; nothing routed or tracked",
                  "Programs lived in spreadsheets and DMs",
                  "No client app — no workouts, check-ins, messaging",
                  "Intakes tracked by hand; peptide orders too",
                  "Partnership existed; no system connected it",
                  "Compliance language scattered across docs",
                  "No scheduling, no payment flow",
                ].map(i => (
                  <li key={i} className="flex gap-3 text-[15px] leading-[1.55] muted">
                    <span className="text-[color:var(--color-fg)] font-semibold flex-shrink-0">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER */}
            <div className="bg-[color:var(--color-bg-2)] border-2 border-[color:var(--color-fg)]" style={{ boxShadow: "8px 8px 0 0 var(--color-accent)" }}>
              <div className="flex items-center justify-between px-6 py-4 bg-[color:var(--color-fg)] text-[color:var(--color-bg)]">
                <span className="inline-flex items-center gap-2 mono text-[10px] tracking-[0.22em] uppercase font-medium">
                  <span aria-hidden className="w-1.5 h-1.5 bg-[color:var(--color-accent)] inline-block" />
                  — After
                </span>
                <span className="mono text-[10px] tracking-[0.22em] uppercase font-medium opacity-65">
                  THE BUILD
                </span>
              </div>
              <ul className="p-7 space-y-3.5">
                {[
                  "Structured intakes captured straight to the database",
                  "Member app — workouts, nutrition, check-ins, messaging",
                  "Coach app — roster, dashboard, intakes, orders",
                  "Role-aware boundary enforces who sees what",
                  "Branded scheduling embedded inline",
                  "Compliance consolidated; single source of truth",
                  "Forms double-write for redundancy",
                ].map(i => (
                  <li key={i} className="flex gap-3 text-[15px] leading-[1.55]">
                    <span className="accent font-bold flex-shrink-0">+</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / BUILD TIMELINE */}
      <section className="relative py-20 md:py-28 border-b border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 03 / TIMELINE</span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num-stamp">03</span>
            <span className="label">— Build timeline</span>
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-[68px] max-w-[24ch] mb-3">
            From zero to <span className="stamp">live</span>, end to end.
          </h2>
          <p className="mb-12 max-w-[60ch] text-[17px] leading-[1.55] muted">
            One operator, one codebase, eleven weeks. No agency, no platform stitched
            from off-the-shelf parts &mdash; every screen and every table designed for this
            business.
          </p>

          <div className="grid md:grid-cols-4 border-t border-[color:var(--color-fg)]">
            {[
              {
                wk: "WK 01–02",
                phase: "Design + schema",
                detail: "Stakeholder interviews, role model, full schema with row-level security, brand system, design tokens.",
                tag: "FOUNDATION",
              },
              {
                wk: "WK 03–05",
                phase: "Marketing site",
                detail: "17 surfaces — home, coaching, peptide library, intake flows, scheduling, legal, journal.",
                tag: "ACQUISITION",
              },
              {
                wk: "WK 06–10",
                phase: "Member + coach apps",
                detail: "Training, nutrition, check-ins, messaging, coach dashboard, intakes pipeline, orders, reviews.",
                tag: "OPERATING SYSTEM",
              },
              {
                wk: "WK 11",
                phase: "Polish + ship",
                detail: "QA, copy pass, image work, deploy, domain cutover. Live on campanaroplus.com.",
                tag: "PRODUCTION",
              },
            ].map((p, i) => (
              <div
                key={p.wk}
                className={`p-7 md:p-9 border-b border-[color:var(--color-fg)] ${i < 3 ? "md:border-r border-[color:var(--color-rule-2)]" : ""} ${i > 0 ? "border-t md:border-t-0 border-[color:var(--color-rule-2)]" : ""}`}
              >
                <div className="inline-block bg-[color:var(--color-fg)] text-[color:var(--color-bg)] px-2.5 py-1 mono text-[10px] tracking-[0.22em] font-medium mb-6">
                  {p.wk}
                </div>
                <h3 className="display-md text-[22px] mb-2">{p.phase}</h3>
                <p className="text-[14px] leading-[1.55] muted mb-5">{p.detail}</p>
                <span className="block label pt-3 border-t border-[color:var(--color-rule-2)]">— {p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / THE SITE */}
      <section className="relative py-20 md:py-28 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 04 / SITE</span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num-stamp">04</span>
            <span className="label">— The site</span>
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-[68px] max-w-[24ch] mb-3">
            Performance, <span className="stamp">prescribed</span>.
          </h2>
          <p className="mb-12 max-w-[60ch] text-[17px] leading-[1.55] muted">
            Seventeen marketing surfaces &mdash; home, coaching, how-it-works, peptide
            library, waitlist, contact, FAQ, journal, book a call, legal, audience
            splits. All locked to the same brand system.
          </p>

          <ImageFrame src="/images/csc/csc-home.jpg" alt="CSC+ homepage — Performance, prescribed." caption="/" hero />

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <ImageFrame src="/images/csc/csc-how-it-works.jpg" alt="CSC+ /how-it-works" caption="/how-it-works" />
            <ImageFrame src="/images/csc/csc-peptides.jpg" alt="CSC+ /peptides library" caption="/peptides" />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ImageFrame src="/images/csc/csc-book.jpg" alt="CSC+ /book — branded scheduling embed" caption="/book" />
            <ImageFrame src="/images/csc/csc-waitlist.jpg" alt="CSC+ /waitlist" caption="/waitlist" />
          </div>
        </div>
      </section>

      {/* 05 / THE APP */}
      <section className="relative py-20 md:py-28 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 05 / APP</span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num-stamp">05</span>
            <span className="label">— The app</span>
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-[68px] max-w-[24ch] mb-3">
            One operator. <span className="stamp">Two</span> surfaces.
          </h2>
          <p className="mb-12 max-w-[60ch] text-[17px] leading-[1.55] muted">
            The same auth entry routes a client to their training app and a coach to
            the operating console. A role-aware boundary enforces who sees what,
            scoped per coach.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <MockClientWorkout />
            <MockCoachMessages />
          </div>
          <MockCoachDashboard />
          <div className="mt-6">
            <MockCoachOrders />
          </div>
        </div>
      </section>

      {/* 06 / WHAT IT DOES */}
      <section className="relative py-20 md:py-28 border-b border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 06 / CAPABILITY</span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num-stamp">06</span>
            <span className="label">— What it does</span>
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-[68px] max-w-[24ch] mb-3">
            A business that <span className="stamp">runs</span>.
          </h2>
          <p className="mb-12 max-w-[60ch] text-[17px] leading-[1.55] muted">
            Not features for their own sake. What the platform lets the practice
            actually do, on day one.
          </p>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <p className="label-accent mb-5">— FOR THE OWNER</p>
              <ul className="plus-list space-y-3 text-[15.5px]">
                <li>Take inbound from a structured intake, routed by stage</li>
                <li>Run an active roster from a single screen</li>
                <li>Place and track peptide orders to delivery</li>
                <li>Brand site that converts without ad spend</li>
                <li>Compliance language consolidated in one source</li>
              </ul>
            </div>
            <div>
              <p className="label-accent mb-5">— FOR THE CLIENT</p>
              <ul className="plus-list space-y-3 text-[15.5px]">
                <li>Train from a coach-assigned plan on their phone</li>
                <li>Log workouts with RPE + set-by-set tracking</li>
                <li>Weekly check-ins with form-video uploads</li>
                <li>Message the coach in-app &mdash; no Slack, no SMS</li>
                <li>See body composition + strength trend over weeks</li>
              </ul>
            </div>
            <div>
              <p className="label-accent mb-5">— FOR THE COACH</p>
              <ul className="plus-list space-y-3 text-[15.5px]">
                <li>Per-coach scoped roster, no cross-talk</li>
                <li>Weekly review queue surfaces overdue clients</li>
                <li>Intake pipeline with stage progression</li>
                <li>Live inbox, per-thread unread state</li>
                <li>Exercise + meal + workout libraries to compose from</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07 / INFRASTRUCTURE */}
      <section className="relative py-20 md:py-28 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 07 / INFRASTRUCTURE</span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num-stamp">07</span>
            <span className="label">— Infrastructure</span>
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-[68px] max-w-[24ch] mb-3">
            Foundations that <span className="stamp">scale</span>.
          </h2>
          <p className="mb-12 max-w-[64ch] text-[17px] leading-[1.55] muted">
            The platform isn&rsquo;t a feature list &mdash; it&rsquo;s a load-bearing
            foundation. What it can absorb without rewrites:
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                t: "Multi-coach roster, at any scale",
                b: "The codebase scopes per-coach by default. Add coach #2, coach #50 — no schema changes, no migrations.",
              },
              {
                t: "A second clinical partner",
                b: "Intake routing is partner-aware. Add another licensed prescriber, route inbound by state or specialty.",
              },
              {
                t: "Real-time, on every surface",
                b: "Messaging, presence, intake stage progression, order status — the data layer already streams. The UI just listens.",
              },
              {
                t: "AI-drafted coach replies",
                b: "Model-agnostic interface, drafts pulled from each client&rsquo;s logged history. Swap providers without touching the app.",
              },
              {
                t: "Push notifications, ready to flip",
                b: "Wired in at the data layer. Toggle on — clients get pings on new assignments, coaches get pings on reviews due.",
              },
              {
                t: "Subscription + per-cycle billing",
                b: "Payment state lives next to the client record. Subscription tier, last paid, dunning state — already modeled.",
              },
              {
                t: "Direct partner-clinic handshake",
                b: "Replace the manual intake forward with a programmatic write into the partner&rsquo;s portal. Endpoint already mapped.",
              },
              {
                t: "Composable coach toolkit",
                b: "Workout templates, meal plans, exercise + peptide libraries — coaches compose new protocols without engineering.",
              },
            ].map(c => (
              <div key={c.t} className="border-l-2 border-[color:var(--color-accent)] pl-6 py-1">
                <h3 className="font-semibold text-[18px] tracking-[-0.015em] mb-2">{c.t}</h3>
                <p className="muted text-[14.5px] leading-[1.55]">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 / OUTCOME */}
      <section className="relative py-20 md:py-28 border-b border-[color:var(--color-rule-2)]">
        <span className="hidden lg:block v-label absolute left-6 top-32">— 08 / OUTCOME</span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="num-stamp">08</span>
                <span className="label">— Outcome</span>
              </div>
              <h2 className="display text-4xl md:text-5xl lg:text-[80px] max-w-[16ch] mb-8">
                The website was the door. <span className="stamp">The platform is what&rsquo;s behind it</span>.
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.55]">
                <p>
                  The founder can onboard clients through a flow he controls. The
                  coach can manage an active roster from one screen. Every inbound
                  lead lands in the database the moment a visitor hits submit.
                  Orders to the compounding pharmacy are tracked from placed to
                  delivered, with full state history.
                </p>
                <p className="muted">
                  The compliance disclaimers, the peptide library, the intake form,
                  the check-in cadence &mdash; every regulated and recurring piece of
                  the business &mdash; lives in one codebase he can ship to in
                  minutes.
                </p>
              </div>

              <div className="mt-10 p-7 md:p-8 border-l-2 border-[color:var(--color-accent)] bg-[color:var(--color-bg-2)]">
                <p className="display-md text-[22px] leading-[1.3]">
                  Not a website with a CRM bolted on. A business built as software.
                </p>
                <span className="block mt-4 label">— Build notes / Greg Baehr</span>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <p className="label mb-6">— Next, on demand</p>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Subscription billing automation", desc: "Per-cycle invoicing, dunning, retries — wired into the coach surface so payment state lives next to the client file." },
                  { num: "02", title: "Push notifications", desc: "Real-time client + coach push for new messages, approved intakes, shipped orders, review-due reminders." },
                  { num: "03", title: "Coach AI assist", desc: "Drafted replies and weekly check-in summaries pulled from each client's logged data." },
                  { num: "04", title: "Direct partner-clinic handshake", desc: "Programmatic intake write into the partner clinical group's portal — replacing the manual forward." },
                ].map(item => (
                  <div key={item.num} className="flex gap-5">
                    <div className="num-stamp shrink-0">{item.num}</div>
                    <div className="pt-1">
                      <div className="font-semibold text-[17px] tracking-[-0.015em] mb-1">{item.title}</div>
                      <div className="text-[14.5px] leading-[1.55] muted">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[color:var(--color-bg-2)]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-fg) 1px, transparent 1px), linear-gradient(to bottom, var(--color-fg) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <p className="label mb-6">— Want this for your business</p>
          <h2 className="display text-4xl md:text-6xl lg:text-[96px] max-w-[20ch] mx-auto mb-10">
            One operator. <span className="stamp">One codebase</span>.
            <br />One business that runs.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link href="/waitlist" className="btn btn-accent btn-lg">
              <span>Join the waitlist</span>
              <span className="btn-arrow" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <a href="https://campanaroplus.com" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
              <span>See it live</span>
              <span className="btn-arrow" aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Sub-components — brand-skinned
 * ───────────────────────────────────────────────────────────── */

function ImageFrame({
  src,
  alt,
  caption,
  hero = false,
}: {
  src: string;
  alt: string;
  caption: string;
  hero?: boolean;
}) {
  return (
    <div
      className="w-full overflow-hidden border border-[color:var(--color-fg)] bg-[color:var(--color-bg-2)]"
      style={{
        boxShadow: hero
          ? "10px 10px 0 0 var(--color-accent)"
          : "6px 6px 0 0 var(--color-accent)",
      }}
    >
      <div className="flex items-center gap-3 px-3 py-2.5 md:px-4 border-b border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-3)]">
        <div className="flex gap-1.5 shrink-0">
          <span aria-hidden className="block w-2.5 h-2.5 rounded-full bg-[#ec6a5e]" />
          <span aria-hidden className="block w-2.5 h-2.5 rounded-full bg-[#f4be4f]" />
          <span aria-hidden className="block w-2.5 h-2.5 rounded-full bg-[#62c554]" />
        </div>
        <div className="flex-1 mx-1 md:mx-3 px-3 py-1 flex items-center gap-2 truncate bg-[color:var(--color-bg)] border border-[color:var(--color-rule-2)]">
          <span aria-hidden className="w-1.5 h-1.5 bg-[color:var(--color-accent)] flex-shrink-0" />
          <span className="truncate mono text-[10px] tracking-[0.06em] muted">
            campanaroplus.com{caption.startsWith("/") ? caption : ""}
          </span>
        </div>
        <span className="hidden md:inline shrink-0 label">
          {caption.startsWith("/")
            ? caption.replace("/", "").toUpperCase() || "HOME"
            : caption}
        </span>
      </div>
      <div
        className="relative w-full bg-[color:var(--color-bg-2)]"
        style={{ aspectRatio: hero ? "16 / 9" : "16 / 11" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={hero ? 92 : 85}
          priority={hero}
          sizes={hero ? "(max-width: 1280px) 100vw, 1400px" : "(max-width: 768px) 100vw, 700px"}
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
    </div>
  );
}

function MockChrome({
  name,
  status,
  children,
}: {
  name: string;
  status?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-[color:var(--color-bg-2)] border border-[color:var(--color-fg)]"
      style={{ boxShadow: "6px 6px 0 0 var(--color-accent)" }}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-3)]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                aria-hidden
                className={`block w-2 h-2 rounded-full ${i === 0 ? "bg-[color:var(--color-accent)]" : "bg-[color:var(--color-rule-2)]"}`}
              />
            ))}
          </div>
          <span className="label">CSC+ / {name}</span>
        </div>
        {status && <span className="label">{status}</span>}
      </div>
      {children}
    </div>
  );
}

function MockClientWorkout() {
  return (
    <MockChrome name="App · /train" status="WK 06 / DAY 03">
      <div className="p-6 space-y-5">
        <div>
          <p className="label-accent mb-2">— TODAY · PUSH A</p>
          <h4 className="display-md text-[26px]">Bench, OHP, dips.</h4>
          <p className="mt-1 text-[13px] muted">~58 min · Tempo focus on the bench. Hit the press hard.</p>
        </div>
        <ul className="space-y-2">
          {[
            { ex: "Barbell bench press", set: "4 × 6", load: "185 lb", rpe: "7" },
            { ex: "Standing OHP", set: "4 × 8", load: "115 lb", rpe: "8" },
            { ex: "Weighted dip", set: "3 × 10", load: "BW + 25", rpe: "8" },
            { ex: "DB lateral raise", set: "3 × 12", load: "20 lb", rpe: "7" },
          ].map((e, i, arr) => (
            <li
              key={e.ex}
              className={`grid grid-cols-12 gap-3 py-2 ${i < arr.length - 1 ? "border-b border-[color:var(--color-rule-2)]" : ""}`}
            >
              <span className="col-span-5 text-[14px] font-medium">{e.ex}</span>
              <span className="col-span-3 text-[13px] muted tnum">{e.set}</span>
              <span className="col-span-3 text-[13px] tnum">{e.load}</span>
              <span className="col-span-1 text-right label tnum">RPE {e.rpe}</span>
            </li>
          ))}
        </ul>
        <div className="px-4 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-bg)] font-semibold text-[13px]">
          + Log set →
        </div>
      </div>
    </MockChrome>
  );
}

function MockCoachMessages() {
  const threads = [
    { name: "J. Walton", proto: "CUT · WK 08", preview: "Got it. Appetite low — protein hit 140g vs target 200.", time: "8:14 AM", unread: 1 },
    { name: "M. Reyes",  proto: "BUILD · WK 05", preview: "Sleep was light midweek. Strength still good.", time: "YD", unread: 2 },
    { name: "S. Davis",  proto: "GLOW · WK 03", preview: "Skin clearer this week. Energy way up.", time: "MON", unread: 0 },
    { name: "E. Kovac",  proto: "ELITE · WK 04", preview: "Three back-to-back deep-work blocks today.", time: "SUN", unread: 0 },
  ];
  return (
    <MockChrome name="Coach · /messages" status="03 UNREAD">
      <div>
        {threads.map((t, i) => (
          <div
            key={t.name}
            className={`flex items-center gap-4 px-5 py-4 ${i < threads.length - 1 ? "border-b border-[color:var(--color-rule-2)]" : ""}`}
          >
            <div className="shrink-0 flex items-center justify-center w-9 h-9 bg-[color:var(--color-bg-3)] border border-[color:var(--color-rule-2)] text-[12px] font-semibold">
              {t.name.split(" ").map(p => p[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[14px] font-semibold">{t.name}</span>
                <span className="label tnum">{t.time}</span>
              </div>
              <div className="label">— {t.proto}</div>
              <p className={`mt-1 truncate text-[12.5px] ${t.unread > 0 ? "" : "muted"}`}>
                {t.preview}
              </p>
            </div>
            {t.unread > 0 && (
              <span className="shrink-0 flex items-center justify-center w-5 h-5 bg-[color:var(--color-accent)] text-[color:var(--color-bg)] text-[11px] font-bold">
                {t.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </MockChrome>
  );
}

function MockCoachDashboard() {
  return (
    <MockChrome name="Coach · /coach" status="MON · ROSTER 14">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-7 p-7 md:p-8 md:border-r border-[color:var(--color-rule-2)]">
          <p className="label-accent mb-3">— THIS WEEK</p>
          <div className="flex items-baseline gap-3">
            <span className="display tnum text-[72px] leading-none">09</span>
            <span className="text-[16px] muted">/ 14</span>
          </div>
          <p className="label mt-1">— REVIEWS DONE</p>
          <div className="mt-5 h-1.5 w-full bg-[color:var(--color-rule-2)]">
            <span className="block h-full bg-[color:var(--color-accent)]" style={{ width: "64%" }} />
          </div>
          <div className="mt-2 flex justify-between label tnum">
            <span>MON—SUN</span>
            <span>64%</span>
          </div>
        </div>
        <div className="md:col-span-5 p-7 md:p-8 border-t md:border-t-0 border-[color:var(--color-rule-2)]">
          <p className="label-accent mb-4">— NEEDS REVIEW · 05</p>
          <ul className="space-y-2.5">
            {[
              { name: "M. Reyes", proto: "CUT · WK 08", age: "2D OVERDUE", overdue: true },
              { name: "J. Walton", proto: "BUILD · WK 05", age: "1D" },
              { name: "S. Davis", proto: "GLOW · WK 03", age: "TODAY" },
              { name: "E. Kovac", proto: "ELITE · WK 04", age: "TODAY" },
              { name: "D. King", proto: "RECOVER · WK 02", age: "TODAY" },
            ].map((r, i, arr) => (
              <li
                key={r.name}
                className={`flex items-center justify-between py-2 ${i < arr.length - 1 ? "border-b border-[color:var(--color-rule-2)]" : ""}`}
              >
                <div>
                  <div className="text-[14px] font-semibold">{r.name}</div>
                  <div className="label">— {r.proto}</div>
                </div>
                <span className={`label tnum ${r.overdue ? "text-[color:var(--color-accent)] font-bold" : ""}`}>
                  {r.age}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-12 px-7 py-5 md:px-8 border-t border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-3)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { l: "ON CUT", v: "05" },
              { l: "ON BUILD", v: "04" },
              { l: "ON GLOW", v: "03" },
              { l: "OTHER", v: "02" },
            ].map(s => (
              <div key={s.l}>
                <div className="label">— {s.l}</div>
                <div className="display-md tnum text-[22px] mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockChrome>
  );
}

function MockCoachOrders() {
  const orders = [
    { id: "ORD-001", client: "M. Reyes",   peptide: "Semaglutide",      dose: "0.5mg / wk",  stage: "DELIVERED", stageColor: "fg",     amount: "$340", date: "2d ago" },
    { id: "ORD-002", client: "J. Walton",  peptide: "Tirzepatide",      dose: "2.5mg / wk",  stage: "SHIPPED",   stageColor: "accent", amount: "$510", date: "3d ago" },
    { id: "ORD-003", client: "S. Davis",   peptide: "GHK-Cu",           dose: "5-wk cycle",  stage: "PLACED",    stageColor: "soft",   amount: "$320", date: "5d ago" },
    { id: "ORD-004", client: "E. Kovac",   peptide: "Semax / Selank",   dose: "5-wk cycle",  stage: "APPROVED",  stageColor: "soft",   amount: "$370", date: "1d ago" },
    { id: "ORD-005", client: "D. King",    peptide: "BPC-157 / TB-500", dose: "5-wk cycle",  stage: "AWAITING",  stageColor: "muted",  amount: "$430", date: "4h ago" },
    { id: "ORD-006", client: "L. Brennan", peptide: "Sermorelin",       dose: "9-wk cycle",  stage: "DELIVERED", stageColor: "fg",     amount: "$430", date: "6d ago" },
  ];
  const stageStyles: Record<string, string> = {
    fg:     "bg-[color:var(--color-fg)] text-[color:var(--color-bg)]",
    accent: "bg-[color:var(--color-accent)] text-[color:var(--color-bg)]",
    soft:   "bg-[color:var(--color-bg-3)] text-[color:var(--color-fg)]",
    muted:  "bg-transparent text-[color:var(--color-muted)] border border-[color:var(--color-rule-2)]",
  };
  return (
    <MockChrome name="Coach · /orders" status="06 IN FLIGHT">
      <div>
        <div className="hidden md:grid grid-cols-[72px_1fr_160px_120px_140px_80px_72px] px-5 py-3 border-b border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-3)]">
          {["ID", "Client", "Peptide", "Dose / cycle", "Stage", "Amount", "Last"].map(h => (
            <div key={h} className="label">{h}</div>
          ))}
        </div>
        {orders.map((o, i) => (
          <div
            key={o.id}
            className={`grid grid-cols-1 md:grid-cols-[72px_1fr_160px_120px_140px_80px_72px] gap-1 md:gap-0 px-5 py-3 ${i < orders.length - 1 ? "border-b border-[color:var(--color-rule-2)]" : ""}`}
          >
            <div className="hidden md:block self-center mono text-[10px] muted tnum">{o.id}</div>
            <div className="self-center">
              <div className="text-[14px] font-semibold">{o.client}</div>
              <div className="md:hidden mt-0.5 label">— {o.peptide} · {o.dose}</div>
            </div>
            <div className="hidden md:block self-center text-[13px]">{o.peptide}</div>
            <div className="hidden md:block self-center text-[12px] muted">{o.dose}</div>
            <div className="self-center mt-1 md:mt-0">
              <span className={`inline-flex font-medium px-2 py-1 mono text-[9px] tracking-[0.18em] ${stageStyles[o.stageColor]}`}>
                {o.stage}
              </span>
            </div>
            <div className="hidden md:block self-center text-[13px] font-semibold tnum">{o.amount}</div>
            <div className="hidden md:block self-center label tnum">{o.date}</div>
          </div>
        ))}
        <div className="flex flex-wrap gap-x-6 gap-y-2 px-5 py-3 border-t border-[color:var(--color-rule-2)] bg-[color:var(--color-bg-3)]">
          {[
            ["PIPELINE", "$2,400"],
            ["DELIVERED", "2 orders"],
            ["IN MOTION", "4 orders"],
            ["AVG STATUS UPDATE", "<24 HRS"],
          ].map(([l, v]) => (
            <div key={l} className="mono text-[10px] tnum">
              <span className="muted tracking-[0.18em]">{l}: </span>
              <span className="font-semibold">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </MockChrome>
  );
}
