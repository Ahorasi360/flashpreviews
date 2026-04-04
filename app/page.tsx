import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MetricCard from '@/components/MetricCard';

const METRICS = [
  { value: 30000, prefix: '', suffix: '+', label: 'Pages Deployed at Scale',     sub: 'Live across legal and real estate markets',  gold: true  },
  { value: 22000, prefix: '', suffix: '+', label: 'Search Impressions in 7 Days', sub: 'From a single system launch — no ads',        gold: false },
  { value: 1000,  prefix: '$', suffix: '', label: 'Per Lead Generated',            sub: 'High-intent buyers, not browsers',           gold: true  },
  { value: 10,    prefix: '', suffix: ' yrs', label: 'Building Lead Systems',      sub: 'Trusted by attorneys and agents since 2014', gold: false },
];

const SERVICES = [
  { num: '01', title: 'Programmatic SEO Systems',
    desc: 'Thousands of pages targeting the exact queries your buyers type into Google. Built to rank, capture, and convert — at a scale no traditional agency can match.',
    tags: ['Scale', 'Organic Traffic', 'Long-tail Capture'] },
  { num: '02', title: 'Lead Generation Engines',
    desc: "We don't just drive traffic — we capture it. Every visitor is a potential lead routed directly to your inbox or phone. No middlemen. No lead-sharing. Yours exclusively.",
    tags: ['Qualified Leads', 'Automated Delivery', 'High Intent'] },
  { num: '03', title: 'Bilingual Acquisition Systems',
    desc: "Your competitors aren't showing up in Spanish search results. We are. We build English + Spanish systems that tap a high-value, underserved market your rivals can't reach.",
    tags: ['English + Spanish', 'Underserved Markets', 'Dual Reach'] },
];

const FEATURES = [
  { label: 'Market Exclusivity',  desc: 'One system per market, per vertical' },
  { label: 'Programmatic Scale',  desc: 'Thousands of pages, not dozens' },
  { label: 'High-Intent Traffic', desc: 'People searching for your exact service' },
  { label: 'Bilingual Reach',     desc: 'English + Spanish systems available' },
  { label: 'Automated Delivery',  desc: 'Leads delivered directly to your inbox' },
  { label: 'Proven Results',      desc: '30,000+ pages deployed, $1K/lead value' },
];

const MARKETS = [
  { market: 'Legal Services',          desc: 'Attorneys, law firms, and legal professionals across all practice areas.',             examples: ['Personal Injury','Immigration','Estate Planning','Family Law'] },
  { market: 'Real Estate',             desc: 'Agents, brokers, and developers targeting buyers and sellers in competitive markets.',  examples: ['Residential Sales','Commercial','Mortgage','Property Management'] },
  { market: 'Local Service Businesses',desc: 'High-value service providers who depend on local search visibility to acquire clients.',examples: ['Medical Practices','Financial Services','Home Services','Insurance'] },
];

const FAQS = [
  { q: 'What kind of businesses do you build lead systems for?',
    a: 'Primarily attorneys, real estate professionals, and local service businesses that want inbound leads rather than relying only on referrals or paid advertising.' },
  { q: 'What is a programmatic SEO system?',
    a: 'A system that deploys thousands of targeted pages at scale — each engineered to rank for specific high-intent search queries in your market.' },
  { q: 'Do you only build websites?',
    a: 'No. We build lead generation infrastructure. The result includes a website, but the goal is qualified inbound leads — not a digital brochure.' },
  { q: 'How do leads get delivered?',
    a: 'Captured directly from the system and delivered to your inbox and phone in real time. No shared lead pools. No middlemen.' },
  { q: 'Do you work exclusively by market?',
    a: 'Yes. One system per market per vertical. Once your market is claimed, we do not build a competing system for another operator in the same space.' },
];

const S = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 } as React.CSSProperties;
const M = { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties;
const GOLD = '#B8860B';

import React from 'react';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', overflowX: 'hidden' }}>
      <Navigation />

      {/* HERO */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        backgroundImage: `url(${JSON.stringify('https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/hero-abstract-MGGZzFZNUkdEcY7DjD4kt8.webp').slice(1,-1)})`,
        backgroundSize: 'cover', backgroundPosition: 'right center', paddingTop: '80px',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.88)' }} />
        <div className="fp-container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div className="gold-rule-short" />
              <span className="section-label">Lead Generation Systems</span>
            </div>
            <h1 style={{ ...S, fontSize: 'clamp(2.2rem, 6vw, 5.5rem)', lineHeight: 1.05, marginBottom: '1.5rem', color: '#111' }}>
              We Build Systems That Generate High-Intent Leads —{' '}
              <em style={{ color: GOLD }}>Not Just Websites</em>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#444', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px' }}>
              We build systems that put your business in front of people already searching for your service — and turn that demand into qualified leads.
            </p>
            <div className="fp-cta-row" style={{ marginBottom: '1rem' }}>
              <Link href="/contact" className="btn-primary">Get Leads for My Business</Link>
              <Link href="/case-study" className="btn-ghost">View Case Study</Link>
            </div>
            <p style={{ ...M, fontSize: '0.68rem', color: '#999', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Limited availability per market</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ height: '1px', width: '32px', background: GOLD, flexShrink: 0 }} />
              <p style={{ ...M, fontSize: '0.68rem', color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Beverly Hills, CA · Est. 2014 · (310) 846-1658</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section style={{ background: '#fff', padding: '4rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div className="fp-container">
          <div className="fp-flex-between" style={{ marginBottom: '3rem' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '0.75rem' }}>Verified Results</span>
              <h2 style={{ ...S, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111' }}>The Numbers Don't Lie</h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#666', maxWidth: '280px', lineHeight: 1.6 }}>
              Every number below comes from a live system we operate — not projections.
            </p>
          </div>
          <div className="fp-grid-4">
            {METRICS.map(m => <MetricCard key={m.label} {...m} />)}
          </div>
          <div className="gold-callout" style={{ marginTop: '3rem', maxWidth: '640px' }}>
            <p style={{ ...S, fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', fontStyle: 'italic', color: '#111', lineHeight: 1.6 }}>
              "We don't run ads. We don't chase followers. We build infrastructure that puts your firm in front of people actively searching for your services — at scale."
            </p>
            <p style={{ ...M, fontSize: '0.68rem', color: GOLD, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '0.75rem' }}>— FlashPreviews Consulting Group</p>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ background: '#F8F7F4', padding: '4rem 0' }}>
        <div className="fp-container">
          <div className="fp-grid-2">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div className="gold-rule-short" />
                <span className="section-label">Case Study</span>
              </div>
              <h2 style={{ ...S, fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: '#111' }}>
                MarVistaLaw: Building a Statewide Legal Lead Generation System
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                We deployed 30,000+ pages across 482 California cities — from Calexico to Redding — covering 51 legal services in English and Spanish. The system generates inbound search traffic around the clock with zero ad spend.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', borderTop: '1px solid #E5E5E5', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                {[{ n: '30K+', l: 'Pages Deployed' }, { n: '482', l: 'California Cities' }, { n: '51', l: 'Legal Services' }].map(x => (
                  <div key={x.l}>
                    <div style={{ ...M, fontSize: 'clamp(1.2rem,3vw,1.6rem)', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{x.n}</div>
                    <div style={{ fontSize: '0.72rem', color: '#888' }}>{x.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-study" className="btn-primary">See How This System Generates Leads</Link>
            </div>
            <div>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/case-study-visual-FHhzmcqGMFFk9iDkojgt3X.webp" alt="MarVistaLaw Lead Generation System Results"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section style={{ background: '#fff', padding: '4rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div className="fp-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="section-label" style={{ marginBottom: '0.75rem' }}>Our Systems</span>
            <h2 style={{ ...S, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111', maxWidth: '440px' }}>What We Build</h2>
          </div>
          <div className="fp-grid-3" style={{ borderTop: '1px solid #E5E5E5' }}>
            {SERVICES.map((s, i) => (
              <div key={s.num} className="fp-service-card">
                <div style={{ ...M, fontSize: '0.68rem', color: GOLD, letterSpacing: '0.18em', marginBottom: '1.25rem' }}>{s.num}</div>
                <h3 style={{ ...S, fontSize: 'clamp(1.3rem,2.5vw,1.7rem)', lineHeight: 1.2, color: '#111', marginBottom: '0.85rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {s.tags.map(t => <span key={t} className="fp-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONE SYSTEM */}
      <section style={{ background: '#0E0E0E', padding: '4rem 0' }}>
        <div className="fp-container">
          <div className="fp-dark-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
                <div style={{ height: '1px', width: '32px', background: GOLD, flexShrink: 0 }} />
                <span style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: GOLD }}>Our Model</span>
              </div>
              <h2 style={{ ...S, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: '#fff', marginBottom: '1.75rem' }}>
                One System.<br />One Market.<br /><em style={{ color: GOLD }}>One Operator.</em>
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#888', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We take on one client per market. When we build your system, no competitor in your vertical gets one from us.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#888', lineHeight: 1.7 }}>
                This isn't a monthly retainer for blog posts. It's infrastructure that generates inbound leads from organic search — permanently. First mover wins.
              </p>
            </div>
            <div style={{ border: '1px solid #2A2A2A' }}>
              {FEATURES.map((f, i) => (
                <div key={f.label} style={{ display: 'flex', gap: '1rem', padding: '1.1rem 1.25rem', borderBottom: i < FEATURES.length - 1 ? '1px solid #2A2A2A' : 'none' }}>
                  <div style={{ ...M, fontSize: '0.68rem', color: GOLD, flexShrink: 0, marginTop: '2px' }}>{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{f.label}</p>
                    <p style={{ fontSize: '0.75rem', color: '#666' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIAGRAM */}
      <section style={{ background: '#fff', padding: '4rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div className="fp-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label" style={{ marginBottom: '0.75rem' }}>How It Works</span>
            <h2 style={{ ...S, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111' }}>The System Architecture</h2>
          </div>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/system-diagram-MT94BKHCZ9LREGoeFhjLy2.webp" alt="Lead Generation System Architecture"
              style={{ width: '100%', border: '1px solid #E5E5E5', display: 'block' }} />
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#666', maxWidth: '520px', margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            Thousands of pages targeting real search demand — turning organic traffic into inbound leads without paid ads.
          </p>
        </div>
      </section>

      {/* MARKETS */}
      <section style={{ background: '#fff', padding: '4rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div className="fp-container">
          <div className="fp-flex-between" style={{ marginBottom: '2.5rem' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '0.75rem' }}>Our Reach</span>
              <h2 style={{ ...S, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111' }}>Markets We Deploy Systems In</h2>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #E5E5E5' }}>
            {MARKETS.map(m => (
              <div key={m.market} className="fp-markets-row">
                <h3 style={{ ...S, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#111' }}>{m.market}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.6 }}>{m.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {m.examples.map(e => (
                    <span key={e} style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#888', border: '1px solid #E5E5E5', padding: '3px 8px' }}>{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F8F7F4', padding: '4rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div className="fp-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="section-label" style={{ marginBottom: '0.75rem' }}>Common Questions</span>
            <h2 style={{ ...S, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111' }}>What You Should Know</h2>
          </div>
          <div style={{ maxWidth: '720px', borderTop: '1px solid #E5E5E5' }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ borderBottom: '1px solid #E5E5E5' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', cursor: 'pointer', gap: '1rem' }}>
                  <span style={{ ...S, fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: '#111', fontWeight: 600 }}>{f.q}</span>
                  <span style={{ ...M, color: GOLD, fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7, paddingBottom: '1.25rem' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div className="fp-container">
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
              <div className="gold-rule-short" />
              <span className="section-label">Ready to Scale?</span>
            </div>
            <h2 style={{ ...S, fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 1.05, color: '#111', marginBottom: '1.25rem' }}>
              Your competitors are getting leads right now.
            </h2>
            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: '#555', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '500px' }}>
              Markets are claimed one at a time. Once we build a system in your vertical and city, that slot is closed. Find out if yours is still available.
            </p>
            <div className="fp-cta-row">
              <Link href="/contact" className="btn-primary">Request a Consultation</Link>
              <a href="tel:3108461658" className="btn-ghost" style={{ ...M, fontSize: '0.8rem', letterSpacing: '0.1em' }}>(310) 846-1658</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
