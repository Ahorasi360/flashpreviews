'use client';
import { useEffect, useRef, useState } from 'react';

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function MetricCard({
  value,
  prefix = '',
  suffix = '',
  label,
  sub,
  gold = false,
  duration = 2000,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  gold?: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (fired.current) return;
      fired.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        setCount(Math.round(easeOutQuart(p) * value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) run(); }, { threshold: 0.2 });
    obs.observe(el);

    // Fallback: also start after 1s if IntersectionObserver never fires
    const fallback = setTimeout(run, 1000);

    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, [value, duration]);

  return (
    <div
      ref={ref}
      style={{
        borderTop: gold ? '2px solid #B8860B' : '1px solid #E5E5E5',
        paddingTop: '2rem',
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          color: '#111111',
          lineHeight: 1.05,
          marginBottom: '0.75rem',
          letterSpacing: '-0.02em',
        }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '0.9rem', color: '#111111', marginBottom: '4px' }}>
        {label}
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: '#888888' }}>
        {sub}
      </p>
    </div>
  );
}
