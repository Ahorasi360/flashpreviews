'use client';
import { useEffect, useRef, useState } from 'react';

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function MetricCard({
  value, prefix = '', suffix = '', label, sub, gold = false,
}: {
  value: number; prefix?: string; suffix?: string;
  label: string; sub: string; gold?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const run = () => {
      if (fired.current) return;
      fired.current = true;
      const duration = 2000;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        setCount(Math.round(easeOutQuart(p) * value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Strategy 1: IntersectionObserver when scrolled into view
    if (ref.current) {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { obs.disconnect(); run(); }
      }, { threshold: 0.1 });
      obs.observe(ref.current);
    }

    // Strategy 2: Fallback — always starts after 800ms regardless
    const fallback = setTimeout(run, 800);
    return () => clearTimeout(fallback);
  }, [value]);

  return (
    <div ref={ref} style={{ borderTop: gold ? '2px solid #B8860B' : '1px solid #E5E5E5', paddingTop: '1.75rem' }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 700,
        fontSize: 'clamp(2.2rem, 8vw, 4rem)',
        color: '#111111',
        lineHeight: 1,
        marginBottom: '0.6rem',
        letterSpacing: '-0.02em',
      }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111111', marginBottom: '4px', fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
      <p style={{ fontSize: '0.78rem', color: '#888', fontFamily: "'DM Sans', sans-serif" }}>{sub}</p>
    </div>
  );
}
