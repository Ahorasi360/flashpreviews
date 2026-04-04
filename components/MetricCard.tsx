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
  const [display, setDisplay] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setDisplay(Math.round(easeOutQuart(progress) * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={containerRef} className={gold ? 'stat-card-gold' : 'stat-card'}>
      <div
        className="text-5xl md:text-6xl lg:text-7xl mb-3"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          color: '#111111',
          lineHeight: 1.1,
        }}
      >
        {prefix}{display.toLocaleString()}{suffix}
      </div>
      <p className="font-medium text-sm md:text-base mb-1" style={{ color: '#111111' }}>{label}</p>
      <p className="text-xs md:text-sm" style={{ color: '#888888' }}>{sub}</p>
    </div>
  );
}
