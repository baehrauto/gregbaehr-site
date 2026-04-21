"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0.5, y: 0.4 });
  const current = useRef({ x: 0.5, y: 0.4 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      target.current.x = (e.clientX - rect.left) / rect.width;
      target.current.y = (e.clientY - rect.top) / rect.height;
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      el.style.setProperty("--mx", `${current.current.x * 100}%`);
      el.style.setProperty("--my", `${current.current.y * 100}%`);
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="hero-bg">
      <div className="hero-bg-base" />
      <div className="hero-bg-aurora" />
      <div className="hero-bg-grid" />
      <div className="hero-bg-spot" />
      <div className="hero-bg-grain" />
      <div className="hero-bg-vignette" />
    </div>
  );
}
