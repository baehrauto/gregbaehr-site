"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "https://instagram.com/baehr.ai", label: "@baehr.ai", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color:var(--color-bg)]/80 border-b border-[color:var(--color-rule-2)]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">
          {/* Mark */}
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 group" aria-label="Greg Baehr — home">
            <span aria-hidden className="inline-block w-2.5 h-2.5 bg-[color:var(--color-accent)]" />
            <span className="font-semibold tracking-tight text-[18px] leading-none lowercase">gb</span>
            <span className="hidden md:inline label ml-1">/ Fractional CAIO</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 label">
            {navItems.map((item) => (
              item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-fg)] transition-colors">{item.label}</a>
              ) : (
                <Link key={item.href} href={item.href} className="hover:text-[color:var(--color-fg)] transition-colors">{item.label}</Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="/waitlist" className="hidden md:inline-flex btn btn-accent">
            <span>Join waitlist</span>
            <span className="btn-arrow" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[color:var(--color-fg)] relative"
          >
            <span aria-hidden className="absolute top-0 right-0 w-2 h-2 bg-[color:var(--color-accent)] -translate-y-1/2 translate-x-1/2" />
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
              {open ? (
                <>
                  <path d="M2 2 L18 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M18 2 L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M0 2 L20 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M0 7 L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M0 12 L20 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[color:var(--color-bg)]/95 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel content */}
        <div className="relative h-full flex flex-col pt-20 pb-10 px-6">
          <p className="label mb-8">— MENU</p>

          <nav className="flex-1 flex flex-col gap-1">
            {navItems.map((item, i) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-5 border-t border-[color:var(--color-rule-2)]"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label tnum">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-4xl">{item.label}</span>
                  </span>
                  <span aria-hidden className="accent text-2xl">↗</span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-5 border-t border-[color:var(--color-rule-2)]"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label tnum">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-4xl">{item.label}</span>
                  </span>
                  <span aria-hidden className="accent text-2xl">→</span>
                </Link>
              )
            ))}
            <div className="border-t border-[color:var(--color-rule-2)]" />
          </nav>

          <div className="mt-8">
            <Link
              href="/waitlist"
              onClick={() => setOpen(false)}
              className="btn btn-accent btn-lg w-full justify-center"
            >
              <span>Join the waitlist</span>
              <span className="btn-arrow" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <p className="label mt-6 text-center">— FRACTIONAL CAIO · EST. 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
