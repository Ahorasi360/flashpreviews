import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MetricCard from '@/components/MetricCard';

const METRICS = [
  { value: 30000, prefix: '', suffix: '+', label: 'Pages Deployed at Scale', sub: 'Live across legal and real estate markets', gold: true },
  { value: 22000, prefix: '', suffix: '+', label: 'Search Impressions in 7 Days', sub: 'From a single system launch — no ads', gold: false },
  { value: 1000, prefix: '$', suffix: '', label: 'Per Lead Generated', sub: 'High-intent buyers, not browsers', gold: true },
  { value: 10, prefix: '', suffix: ' yrs', label: 'Building Lead Systems', sub: 'Trusted by attorneys and agents since 2014', gold: false },
];

const SERVICES = [
  { num: '01', title: 'Programmatic SEO Systems', desc: "Thousands of pages targeting the exact queries your buyers type into Google. Built to rank, capture, and convert — at a scale no traditional agency can match.", tags: ['Scale', 'Organic Traffic', 'Long-tail Capture'] },
  { num: '02', title: 'Lead Generation Engines', desc: "We don't just drive traffic — we capture it. Every visitor is a potential lead routed directly to your inbox or phone. No middlemen. No lead-sharing. Yours exclusively.", tags: ['Qualified Leads', 'Automated Delivery', 'High Intent'] },
  { num: '03', title: 'Bilingual Acquisition Systems', desc: "Your competitors aren't showing up in Spanish search results. We are. We build English + Spanish systems that tap a high-value, underserved market your rivals can't reach.", tags: ['English + Spanish', 'Underserved Markets', 'Dual Reach'] },
];

const FEATURES = [
  { label: 'Market Exclusivity', desc: 'One system per market, per vertical' },
  { label: 'Programmatic Scale', desc: 'Thousands of pages, not dozens' },
  { label: 'High-Intent Traffic', desc: 'People searching for your exact service' },
  { label: 'Bilingual Reach', desc: 'English + Spanish systems available' },
  { label: 'Automated Delivery', desc: 'Leads delivered directly to your inbox' },
  { label: 'Proven Results', desc: '30,000+ pages deployed, $1K/lead value' },
];

const MARKETS = [
  { market: 'Legal Services', desc: 'Attorneys, law firms, and legal professionals across all practice areas.', examples: ['Personal Injury', 'Immigration', 'Estate Planning', 'Family Law'] },
  { market: 'Real Estate', desc: 'Agents, brokers, and developers targeting buyers and sellers in competitive markets.', examples: ['Residential Sales', 'Commercial', 'Mortgage', 'Property Management'] },
  { market: 'Local Service Businesses', desc: 'High-value service providers who depend on local search visibility to acquire clients.', examples: ['Medical Practices', 'Financial Services', 'Home Services', 'Insurance'] },
];

const FAQS = [
  { q: 'What kind of businesses do you build lead systems for?', a: 'Primarily attorneys, real estate professionals, and local service businesses that want inbound leads rather than relying only on referrals or paid advertising.' },
  { q: 'What is a programmatic SEO system?', a: 'A system that deploys thousands of targeted pages at scale — each engineered to rank for specific high-intent search queries. Instead of one or two pages, we build hundreds or thousands, capturing demand across an entire city or region.' },
  { q: 'Do you only build websites?', a: 'No. We build lead generation infrastructure. The result includes a website, but the goal is qualified inbound leads — not a digital brochure.' },
  { q: 'How do leads get delivered?', a: 'Captured directly from the system and delivered to your inbox and phone in real time. No shared lead pools. No middlemen. Every lead is exclusively yours.' },
  { q: 'Do you work exclusively by market?', a: 'Yes. One system per market per vertical. Once your market is claimed, we do not build a competing system for another operator in the same space.' },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: "'DM Sans', sans-serif", color: '#111111' }}>
      <Navigation />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/hero-abstract-MGGZzFZNUkdEcY7DjD4kt8.webp)', backgroundSize: 'cover', backgroundPosition: 'right center', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.87)' }} />
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '6rem 4rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
              <div style={{ height: '2px', background: '#B8860B', width: '3rem', flexShrink: 0 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B' }}>Lead Generation Systems</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', lineHeight: 1.05, marginBottom: '2rem', color: '#111111' }}>
              We Build Systems That Generate High-Intent Leads{' '}
              — <em style={{ fontStyle: 'italic', color: '#B8860B' }}>Not Just Websites</em>
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#444', marginBottom: '2.5rem', maxWidth: '520px' }}>
              We build systems that put your business in front of people already searching for your service — and turn that demand into qualified leads.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <Link href="/contact" className="btn-primary">Get Leads for My Business</Link>
              <Link href="/case-study" className="btn-ghost">View Case Study</Link>
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#999', letterSpacing: '0.15em', marginBottom: '2rem' }}>
              Limited availability per market
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ height: '1px', width: '32px', background: '#B8860B' }} />
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#888', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Beverly Hills, CA · Est. 2014 · (310) 846-1658
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.75rem' }}>Verified Results</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111111' }}>The Numbers Don&apos;t Lie</h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#666', maxWidth: '280px', lineHeight: 1.6 }}>
              Every number below comes from a live system we operate — not projections, not case studies from other agencies.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {METRICS.map((m) => (
              <MetricCard key={m.label} value={m.value} prefix={m.prefix} suffix={m.suffix} label={m.label} sub={m.sub} gold={m.gold} />
            ))}
          </div>
          <div style={{ borderLeft: '3px solid #B8860B', paddingLeft: '1.5rem', marginTop: '4rem', maxWidth: '680px' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.6, fontStyle: 'italic', color: '#111111' }}>
              &ldquo;We don&apos;t run ads. We don&apos;t chase followers. We build infrastructure that puts your firm in front of people actively searching for your services — at scale.&rdquo;
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#B8860B', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '1rem' }}>
              — FlashPreviews Consulting Group
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ background: '#F8F7F4', padding: '5rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ height: '2px', background: '#B8860B', width: '3rem', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B' }}>Case Study</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: '#111111' }}>
                MarVistaLaw: Building a Statewide Legal Lead Generation System
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
                We deployed 30,000+ pages targeting legal search queries across every major California city — in English and Spanish. The system now generates inbound leads around the clock, with no ad spend.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', borderTop: '1px solid #E5E5E5', paddingTop: '2rem', marginBottom: '2.5rem' }}>
                {[{ n: '30K+', l: 'Pages Built' }, { n: '22K+', l: 'Impressions / 7 Days' }, { n: '$1K', l: 'Per Lead Value' }].map(x => (
                  <div key={x.l}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>{x.n}</div>
                    <div style={{ fontSize: '0.75rem', color: '#888' }}>{x.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-study" className="btn-primary">See How This System Generates Leads</Link>
            </div>
            <div>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/case-study-visual-FHhzmcqGMFFk9iDkojgt3X.webp" alt="MarVistaLaw Lead Generation System Results" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.75rem' }}>Our Systems</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#111111', maxWidth: '480px' }}>What We Build</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid #E5E5E5' }}>
            {SERVICES.map((s, i) => (
              <div key={s.num} style={{ borderRight: i < 2 ? '1px solid #E5E5E5' : 'none', padding: '2.5rem 2rem', paddingLeft: i === 0 ? 0 : '2rem' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#B8860B', letterSpacing: '0.18em', marginBottom: '1.5rem' }}>{s.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.2, color: '#111111', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', border: '1px solid rgba(184,134,11,0.3)', padding: '3px 8px' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONE SYSTEM */}
      <section style={{ background: '#0E0E0E', padding: '5rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <div style={{ height: '1px', width: '32px', background: '#B8860B', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B' }}>Our Model</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, color: '#fff', marginBottom: '2rem' }}>
                One System.<br />One Market.<br /><em style={{ color: '#B8860B' }}>One Operator.</em>
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#888', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We take on one client per market. That means when we build your system, no competitor in your vertical gets one from us.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#888', lineHeight: 1.7 }}>
                This isn&apos;t a monthly retainer for blog posts. It&apos;s infrastructure that generates inbound leads from organic search — permanently. First mover wins.
              </p>
            </div>
            <div style={{ border: '1px solid #2A2A2A' }}>
              {FEATURES.map((f, i) => (
                <div key={f.label} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', borderBottom: i < FEATURES.length - 1 ? '1px solid #2A2A2A' : 'none' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#B8860B', flexShrink: 0, marginTop: '2px' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#fff', marginBottom: '2px' }}>{f.label}</p>
                    <p style={{ fontSize: '0.75rem', color: '#666' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM DIAGRAM */}
      <section style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.75rem' }}>How It Works</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#111111' }}>The System Architecture</h2>
          </div>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/system-diagram-MT94BKHCZ9LREGoeFhjLy2.webp" alt="Lead Generation System Architecture" style={{ width: '100%', border: '1px solid #E5E5E5', display: 'block' }} />
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#666', maxWidth: '560px', margin: '2rem auto 0', lineHeight: 1.7 }}>
            Thousands of pages targeting real search demand — turning organic traffic into inbound leads without paid ads.
          </p>
        </div>
      </section>

      {/* MARKETS */}
      <section style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.75rem' }}>Our Reach</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#111111' }}>Markets We Deploy Systems In</h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#888', maxWidth: '280px', lineHeight: 1.6 }}>One methodology. Multiple markets.</p>
          </div>
          <div style={{ borderTop: '1px solid #E5E5E5' }}>
            {MARKETS.map(m => (
              <div key={m.market} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr', gap: '1.5rem', padding: '2rem 0', borderBottom: '1px solid #F0F0F0', alignItems: 'baseline' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.4rem', color: '#111111' }}>{m.market}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.6 }}>{m.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {m.examples.map(e => (
                    <span key={e} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', border: '1px solid #E5E5E5', padding: '3px 8px' }}>{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F8F7F4', padding: '5rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.75rem' }}>Common Questions</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#111111' }}>What You Should Know</h2>
          </div>
          <div style={{ maxWidth: '760px', borderTop: '1px solid #E5E5E5' }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ borderBottom: '1px solid #E5E5E5' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', cursor: 'pointer', listStyle: 'none', gap: '1rem' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: '#111111', fontWeight: 600 }}>{f.q}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#B8860B', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.7, paddingBottom: '1.5rem' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fff', padding: '6rem 0', borderTop: '1px solid #E5E5E5' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
              <div style={{ height: '2px', background: '#B8860B', width: '3rem', flexShrink: 0 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B' }}>Ready to Scale?</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.05, color: '#111111', marginBottom: '1.5rem' }}>
              Your competitors are getting leads right now.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '520px' }}>
              Markets are claimed one at a time. Once we build a system in your vertical and city, that slot is closed. Find out if yours is still available.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary">Request a Consultation</Link>
              <a href="tel:3108461658" className="btn-ghost" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', letterSpacing: '0.1em' }}>(310) 846-1658</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
