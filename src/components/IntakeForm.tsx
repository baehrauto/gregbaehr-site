"use client";

import { useState } from "react";

const FREE_EMAIL_PROVIDERS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "yandex.com",
  "zoho.com",
  "mail.com",
  "fastmail.com",
  "hey.com",
]);

const DOMAIN_RE = /^(?!-)[a-z0-9-]+(\.[a-z0-9-]+)+$/i;

function extractDomain(email: string) {
  const at = email.lastIndexOf("@");
  return at === -1 ? "" : email.slice(at + 1).toLowerCase().trim();
}

function normalizeDomain(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");
}

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  domain: string;
  role: string;
  revenue: string;
  problem: string;
  timeline: string;
  source: string;
};

const INITIAL: Values = {
  firstName: "",
  lastName: "",
  email: "",
  domain: "",
  role: "",
  revenue: "",
  problem: "",
  timeline: "",
  source: "",
};

export default function IntakeForm() {
  const [v, setV] = useState<Values>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof Values>(k: K, val: Values[K]) {
    setV((p) => ({ ...p, [k]: val }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function validate(values: Values) {
    const e: Partial<Record<keyof Values, string>> = {};
    if (!values.firstName.trim()) e.firstName = "Required";
    if (!values.lastName.trim()) e.lastName = "Required";

    const email = values.email.trim();
    if (!email) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Enter a valid email";
    } else {
      const emailDomain = extractDomain(email);
      if (FREE_EMAIL_PROVIDERS.has(emailDomain)) {
        e.email = "Please use a business email (no gmail, outlook, etc.)";
      }
    }

    const dom = normalizeDomain(values.domain);
    if (!dom) {
      e.domain = "Required";
    } else if (!DOMAIN_RE.test(dom)) {
      e.domain = "Enter a valid domain (e.g. acme.com)";
    }

    if (!values.revenue) e.revenue = "Pick a range";
    if (!values.problem.trim() || values.problem.trim().length < 20) {
      e.problem = "A sentence or two, please";
    }
    if (!values.timeline) e.timeline = "Pick one";

    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("submitting");
    try {
      const body = new URLSearchParams();
      body.append("form-name", "intake");
      body.append("firstName", v.firstName);
      body.append("lastName", v.lastName);
      body.append("email", v.email);
      body.append("domain", normalizeDomain(v.domain));
      body.append("role", v.role);
      body.append("revenue", v.revenue);
      body.append("problem", v.problem);
      body.append("timeline", v.timeline);
      body.append("source", v.source);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[color:var(--color-rule)] p-10 md:p-14 text-center">
        <p className="eyebrow mb-6">Received</p>
        <h2 className="serif text-4xl md:text-5xl leading-tight max-w-2xl mx-auto">
          You&rsquo;re on the list.
        </h2>
        <p className="muted mt-6 max-w-lg mx-auto leading-relaxed">
          I review every intake personally. If there&rsquo;s a fit, I&rsquo;ll reach
          out within 72 hours from <span className="text-[color:var(--color-paper)]">greg@autera.us</span>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="intake"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-12"
      noValidate
    >
      <input type="hidden" name="form-name" value="intake" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
        </label>
      </p>

      {/* Section 1 — You */}
      <FieldSection number="01" title="You">
        <Row>
          <Field label="First name" error={errors.firstName}>
            <input
              value={v.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className="input"
              autoComplete="given-name"
            />
          </Field>
          <Field label="Last name" error={errors.lastName}>
            <input
              value={v.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className="input"
              autoComplete="family-name"
            />
          </Field>
        </Row>
        <Row>
          <Field
            label="Business email"
            help="No gmail / outlook / yahoo."
            error={errors.email}
          >
            <input
              type="email"
              value={v.email}
              onChange={(e) => update("email", e.target.value)}
              className="input"
              autoComplete="email"
              placeholder="you@company.com"
            />
          </Field>
          <Field
            label="Company domain"
            help="e.g. acme.com"
            error={errors.domain}
          >
            <input
              value={v.domain}
              onChange={(e) => update("domain", e.target.value)}
              className="input"
              placeholder="company.com"
            />
          </Field>
        </Row>
        <Row>
          <Field label="Your role / title">
            <input
              value={v.role}
              onChange={(e) => update("role", e.target.value)}
              className="input"
              placeholder="CEO, COO, Head of Ops, etc."
            />
          </Field>
          <div />
        </Row>
      </FieldSection>

      {/* Section 2 — Company */}
      <FieldSection number="02" title="Company">
        <Row>
          <Field label="Annual revenue" error={errors.revenue}>
            <select
              value={v.revenue}
              onChange={(e) => update("revenue", e.target.value)}
              className="input"
            >
              <option value="">Select range</option>
              <option value="under-10m">Under $10M</option>
              <option value="10-25m">$10M – $25M</option>
              <option value="25-50m">$25M – $50M</option>
              <option value="50-100m">$50M – $100M</option>
              <option value="over-100m">Over $100M</option>
            </select>
          </Field>
          <Field label="Timeline" error={errors.timeline}>
            <select
              value={v.timeline}
              onChange={(e) => update("timeline", e.target.value)}
              className="input"
            >
              <option value="">Select</option>
              <option value="now">Ready now</option>
              <option value="30d">Within 30 days</option>
              <option value="60-90d">60 – 90 days</option>
              <option value="exploring">Exploring</option>
            </select>
          </Field>
        </Row>
      </FieldSection>

      {/* Section 3 — Problem */}
      <FieldSection number="03" title="Problem">
        <Field
          label="What are you trying to solve with AI?"
          help="The clearer you can be, the better. Workflows, decisions, costs — whatever&rsquo;s top of mind."
          error={errors.problem}
        >
          <textarea
            value={v.problem}
            onChange={(e) => update("problem", e.target.value)}
            className="input min-h-[180px] resize-y"
            placeholder="We&rsquo;re losing 10+ hours a week to manual quote generation. Also curious about governance before a client audit in Q3..."
          />
        </Field>
        <Field label="How did you find me? (optional)">
          <input
            value={v.source}
            onChange={(e) => update("source", e.target.value)}
            className="input"
            placeholder="Instagram, referral, podcast, etc."
          />
        </Field>
      </FieldSection>

      {/* Submit */}
      <div className="pt-4 border-t border-[color:var(--color-rule)]">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="pill-cta pill-cta-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{status === "submitting" ? "Submitting…" : "Request access"}</span>
          <span className="pill-cta-arrow" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        {status === "error" && (
          <p className="mt-4 text-sm text-[color:var(--color-accent)]">
            Something went wrong. Email greg@autera.us directly.
          </p>
        )}
      </div>
    </form>
  );
}

function FieldSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid md:grid-cols-12 gap-10 border-t border-[color:var(--color-rule)] pt-10">
      <div className="md:col-span-3">
        <p className="eyebrow">
          <span className="num not-italic mr-2">{number} —</span> {title}
        </p>
      </div>
      <div className="md:col-span-9 space-y-6">{children}</div>
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-6">{children}</div>;
}

function Field({
  label,
  help,
  error,
  children,
}: {
  label: string;
  help?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}</span>
      {children}
      {help && !error && <span className="block mt-2 text-xs muted">{help}</span>}
      {error && (
        <span className="block mt-2 text-xs text-[color:var(--color-accent)]">
          {error}
        </span>
      )}
    </label>
  );
}
