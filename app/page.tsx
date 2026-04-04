import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const METRICS = [
  { value: '30,000+', label: 'Pages Deployed at Scale', sub: 'Live across legal and real estate markets', gold: true },
  { value: '22,000+', label: 'Search Impressions in 7 Days', sub: 'From a single system launch — no ads', gold: false },
  { value: '$1,000', label: 'Per Lead Generated', sub: 'High-intent buyers, not browsers', gold: true },
  { value: '10 yrs', label: 'Building Lead Systems', sub: 'Trusted by attorneys and agents since 2014', gold: false },
];

const SERVICES = [
  { num: '01', title: 'Programmatic SEO Systems', desc: 'Thousands of pages targeting the exact queries your buyers type into Google. Built to rank, capture, and convert — at a scale no traditional agency can match.', tags: ['Scale', 'Organic Traffic', 'Long-tail Capture'] },
  { num: '02', title: 'Lead Generation Engines', desc: 'We don't just drive traffic — we capture it. Every visitor is a potential lead routed directly to your inbox or phone. No middlemen. No lead-sharing. Yours exclusively.', tags: ['Qualified Leads', 'Automated Delivery', 'High Intent'] },
  { num: '03', title: 'Bilingual Acquisition Systems', desc: 'Your competitors aren't showing up in Spanish search results. We are. We build English + Spanish systems that tap a high-value, underserved market your rivals can't reach.', tags: ['English + Spanish', 'Underserved Markets', 'Dual Reach'] },
];

const MARKETS = [
  { market: 'Legal Services', desc: 'Attorneys, law firms, and legal professionals across all practice areas.', examples: ['Personal Injury', 'Immigration', 'Estate Planning', 'Family Law'] },
  { market: 'Real Estate', desc: 'Agents, brokers, and developers targeting buyers and sellers in competitive markets.', examples: ['Residential Sales', 'Commercial', 'Mortgage', 'Property Management'] },
  { market: 'Local Service Businesses', desc: 'High-value service providers who depend on local search visibility to acquire clients.', examples: ['Medical Practices', 'Financial Services', 'Home Services', 'Insurance'] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20" style={{ background: 'linear-gradient(135deg, #f8f7f4 0%, #ffffff 60%)', backgroundSize: 'cover' }}>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-rule-short" />
              <span className="section-label">Lead Generation Systems</span>
            </div>
            <h1 className="text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[#111111] mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
              We Build Systems That Generate High-Intent Leads —{' '}
              <em style={{ fontStyle: 'italic', color: '#B8860B' }}>Not Just Websites</em>
            </h1>
            <p className="text-[#444444] text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
              We build systems that put your business in front of people already searching for your service — and turn that demand into qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/contact" className="btn-primary text-center">Get Leads for My Business</Link>
              <Link href="/case-study" className="btn-ghost text-center">View Case Study</Link>
            </div>
            <p className="text-[#888888] text-xs tracking-wider mb-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Limited availability per market</p>
            <div className="flex items-center gap-6">
              <div className="h-px w-8 bg-[#B8860B]" />
              <p style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#888888] text-xs tracking-widest uppercase">Beverly Hills, CA · Est. 2014 · (310) 846-1658</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white py-20 md:py-28 border-t border-[#E5E5E5]">
        <div className="container">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="section-label block mb-3">Verified Results</span>
              <h2 className="text-4xl md:text-5xl text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>The Numbers Don't Lie</h2>
            </div>
            <p className="text-[#666666] text-sm max-w-xs leading-relaxed">Every number below comes from a live system we operate — not projections, not case studies from other agencies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {METRICS.map((m) => (
              <div key={m.label} className={m.gold ? 'stat-card-gold' : 'stat-card'}>
                <div className="text-5xl md:text-6xl lg:text-7xl mb-3 text-[#111111]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{m.value}</div>
                <p className="text-[#111111] font-medium text-sm md:text-base mb-1">{m.label}</p>
                <p className="text-[#888888] text-xs md:text-sm">{m.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 gold-callout max-w-2xl">
            <p className="text-[#111111] text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
              "We don't run ads. We don't chase followers. We build infrastructure that puts your firm in front of people actively searching for your services — at scale."
            </p>
            <p className="mt-4 text-[#B8860B] text-xs tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>— FlashPreviews Consulting Group</p>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-rule-short" />
                <span className="section-label">Case Study</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-[#111111] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
                MarVistaLaw: Building a Statewide Legal Lead Generation System
              </h2>
              <p className="text-[#555555] text-base leading-relaxed mb-8">
                We deployed 30,000+ pages targeting legal search queries across every major California city — in English and Spanish. The system now generates inbound leads around the clock, with no ad spend.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10 border-t border-[#E5E5E5] pt-8">
                {[{ num: '30K+', label: 'Pages Built' }, { num: '22K+', label: 'Impressions / 7 Days' }, { num: '$1K', label: 'Per Lead Value' }].map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl md:text-3xl font-bold text-[#111111] mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.num}</div>
                    <div className="text-[#888888] text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-study" className="btn-primary">See How This System Generates Leads</Link>
            </div>
            <div className="bg-[#E5E5E5] flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#B8860B' }}>30K</div>
                <div className="text-[#666] text-sm">Pages Deployed</div>
                <div className="mt-4 text-[#999] text-xs">MarVistaLaw.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-white py-20 md:py-28 border-t border-[#E5E5E5]">
        <div className="container">
          <div className="mb-16">
            <span className="section-label block mb-3">Our Systems</span>
            <h2 className="text-4xl md:text-5xl text-[#111111] max-w-xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>What We Build</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border-t border-[#E5E5E5]">
            {SERVICES.map((item, i) => (
              <div key={item.num} className={`border-b md:border-b-0 md:border-r border-[#E5E5E5] last:border-r-0 py-10 md:py-12 md:px-10 ${i === 0 ? 'first:md:pl-0' : ''} ${i === 2 ? 'last:md:pr-0' : ''}`}>
                <div className="text-[#B8860B] text-xs tracking-widest mb-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.num}</div>
                <h3 className="text-2xl md:text-3xl text-[#111111] mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>{item.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[0.65rem] tracking-widest uppercase text-[#B8860B] border border-[#B8860B]/30 px-2 py-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="bg-[#0E0E0E] py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Our Model</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
                One System.<br />One Market.<br /><em className="text-[#B8860B]">One Operator.</em>
              </h2>
              <p className="text-[#888888] text-base leading-relaxed mb-8">We take on one client per market. That means when we build your system, no competitor in your vertical gets one from us.</p>
              <p className="text-[#888888] text-base leading-relaxed">This isn't a monthly retainer for blog posts. It's infrastructure that generates inbound leads from organic search — permanently. First mover wins.</p>
            </div>
            <div className="border border-[#2A2A2A]">
              {[
                { label: 'Market Exclusivity', desc: 'One system per market, per vertical' },
                { label: 'Programmatic Scale', desc: 'Thousands of pages, not dozens' },
                { label: 'High-Intent Traffic', desc: 'People searching for your exact service' },
                { label: 'Bilingual Reach', desc: 'English + Spanish systems available' },
                { label: 'Automated Delivery', desc: 'Leads delivered directly to your inbox' },
                { label: 'Proven Results', desc: '30,000+ pages deployed, $1K/lead value' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-start gap-4 p-5 border-b border-[#2A2A2A] last:border-b-0">
                  <div className="text-[#B8860B] text-xs mt-0.5 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <p className="text-white text-sm font-medium mb-0.5">{item.label}</p>
                    <p className="text-[#666666] text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="bg-white py-20 md:py-24 border-t border-[#E5E5E5]">
        <div className="container">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="section-label block mb-3">Our Reach</span>
              <h2 className="text-4xl md:text-5xl text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>Markets We Deploy Systems In</h2>
            </div>
            <p className="text-[#888888] text-sm max-w-xs leading-relaxed">The same system architecture adapts across industries. One methodology. Multiple markets.</p>
          </div>
          <div className="border-t border-[#E5E5E5]">
            {MARKETS.map((item) => (
              <div key={item.market} className="grid md:grid-cols-12 gap-6 py-8 border-b border-[#F0F0F0] items-baseline">
                <div className="md:col-span-3">
                  <h3 className="text-2xl text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>{item.market}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-2">
                  {item.examples.map((ex) => (
                    <span key={ex} className="text-[#888888] text-[0.6rem] tracking-widest uppercase border border-[#E5E5E5] px-2 py-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#F8F7F4] border-t border-[#E5E5E5]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-rule-short" />
              <span className="section-label">Ready to Scale?</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#111111] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
              Your competitors are getting leads right now.
            </h2>
            <p className="text-[#555555] text-lg leading-relaxed mb-12 max-w-xl">
              Markets are claimed one at a time. Once we build a system in your vertical and city, that slot is closed. Find out if yours is still available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">Request a Consultation</Link>
              <a href="tel:3108461658" className="btn-ghost text-center" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', letterSpacing: '0.1em' }}>(310) 846-1658</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
