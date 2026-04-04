'use client';
import { useEffect, useRef, useState } from 'react';

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  gold?: boolean;
  duration?: number;
}

export default function MetricCard({
  value, prefix = '', suffix = '', label, sub, gold = false, duration = 2200
}: Props) {
  const [count, setCount] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.round(easeOutQuart(p) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={wrapRef} className={gold ? 'stat-card-gold' : 'stat-card'}>
      <div
        className="text-5xl md:text-6xl lg:text-7xl mb-3 text-[#111111]"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-[#111111] font-medium text-sm md:text-base mb-1">{label}</p>
      <p className="text-[#888888] text-xs md:text-sm">{sub}</p>
    </div>
  );
}
