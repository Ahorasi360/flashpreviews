import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: MarVistaLaw Lead Generation System | FlashPreviews Consulting',
  description: 'How we built a statewide California legal lead generation system with 30,000+ pages, 27,200+ impressions in 7 days, at $1,000 per lead value.',
  alternates: { canonical: 'https://www.flashpreviewsconsultinggroup.com/case-study' },
};

const RESULTS = [
  { num: '30,805',  label: 'Pages Deployed',         sub: 'Live across California markets' },
  { num: '19,200+', label: 'Pages Indexed by Google', sub: 'Growing weekly' },
  { num: '27,200+', label: 'Search Impressions',      sub: '28-day window, April 2026' },
  { num: '30 Days', label: 'Launch to Live',          sub: 'Concept to full deployment' },
];

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main id="main-content" role="main">

        {/* Header */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 border-b border-[#E5E5E5]" aria-label="Case study overview">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-rule-short" aria-hidden="true" />
              <span className="section-label">Case Study — 2024</span>
            </div>
            <div className="grid md:grid-cols-3 gap-12 items-end">
              <div className="md:col-span-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-tight mb-6" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:700 }}>
                  MarVistaLaw: Building a<br /><em className="text-[#B8860B]">Statewide Legal Lead System</em>
                </h1>
                <p className="text-[#555555] text-lg leading-relaxed max-w-xl">
                  A California-wide legal lead generation platform built using programmatic SEO — capturing high-intent traffic across personal injury, immigration, estate planning, and family law.
                </p>
              </div>
              <aside aria-label="Project details" className="border-t-2 border-[#B8860B] pt-6">
                <dl>
                  {[
                    { label:'Client',      value:'MarVistaLaw' },
                    { label:'Market',      value:'Statewide — California' },
                    { label:'Verticals',   value:'Multi-Category Legal' },
                    { label:'System Type', value:'Bilingual pSEO' },
                    { label:'Timeline',    value:'30-Day Launch' },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-baseline border-b border-[#F0F0F0] pb-3 mb-3">
                      <dt className="text-[#888888] text-xs tracking-wider uppercase" style={{ fontFamily:"'JetBrains Mono', monospace" }}>{item.label}</dt>
                      <dd className="text-[#111111] text-sm font-medium">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* Results banner */}
        <section className="bg-[#0E0E0E] py-16 md:py-20" aria-label="Key results">
          <div className="container">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {RESULTS.map(r => (
                <div key={r.label} className="border-t border-[#2A2A2A] pt-6">
                  <dt className="text-[#888888] text-sm mb-1">{r.label}</dt>
                  <dd className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily:"'JetBrains Mono', monospace" }}>{r.num}</dd>
                  <p className="text-[#555555] text-xs">{r.sub}</p>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 md:py-28 border-b border-[#E5E5E5]" aria-label="The challenge">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <span className="section-label block mb-3" aria-hidden="true">01</span>
                <h2 className="text-3xl md:text-4xl text-[#111111]" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:700 }}>The Challenge</h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-[#555555] text-lg leading-relaxed mb-6">
                  California's legal market is one of the most competitive in the country. Firms spend tens of thousands per month on Google Ads chasing the same 10 keywords. The brief: capture high-intent legal traffic at scale without a single dollar in ad spend.
                </p>
                <p className="text-[#555555] text-base leading-relaxed">
                  The goal: build a system that ranks across hundreds of city-level legal queries in English and Spanish — creating a lead engine that runs 24/7 and compounds month over month.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The System */}
        <section className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#E5E5E5]" aria-label="The system we built">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <span className="section-label block mb-3" aria-hidden="true">02</span>
                <h2 className="text-3xl md:text-4xl text-[#111111]" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:700 }}>The System</h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-[#555555] text-lg leading-relaxed mb-10">
                  We engineered a programmatic SEO system combining a Next.js 14 application with Supabase — generating thousands of unique, high-quality pages from structured data.
                </p>
                <ul className="grid md:grid-cols-2 gap-8 list-none" aria-label="System components">
                  {[
                    { title:'301 Cities × 51 Services', desc:'Every major California city, every major legal practice area. 13,570+ unique bilingual page combinations.' },
                    { title:'AI-Generated Content',     desc:'Each page contains unique, locally-relevant content generated via Anthropic Claude API — not template-spun text.' },
                    { title:'Bilingual Architecture',   desc:'Full Spanish-language parity with hreflang implementation, capturing the underserved Latino legal market.' },
                    { title:'Lead Capture Infrastructure', desc:'Integrated Supabase lead storage, Resend email notifications, and direct-to-phone alerts for every inquiry.' },
                  ].map(item => (
                    <li key={item.title} className="border-t border-[#E5E5E5] pt-6">
                      <h3 className="text-xl text-[#111111] mb-3" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:700 }}>{item.title}</h3>
                      <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Results */}
        <section className="py-20 md:py-28 border-b border-[#E5E5E5]" aria-label="Results achieved">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <span className="section-label block mb-3" aria-hidden="true">03</span>
                <h2 className="text-3xl md:text-4xl text-[#111111]" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:700 }}>The Results</h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-[#555555] text-lg leading-relaxed mb-10">
                  As of April 2026: 19,200+ pages indexed, 27,200+ impressions in the past 28 days, zero ad spend. Top ranking bilingual queries include 'abogado de bienes raices' and 'abogados cerca de mi.' Google continues to index new pages weekly — the system compounds month over month.
                </p>
                <blockquote className="gold-callout mb-10" cite="https://www.flashpreviewsconsultinggroup.com/case-study">
                  <p className="text-[#111111] text-xl md:text-2xl leading-relaxed" style={{ fontFamily:"'Cormorant Garamond', serif", fontStyle:'italic' }}>
                    "19,200+ pages indexed by Google. 27,200+ search impressions in the past 28 days — and growing. Top ranking queries include bilingual legal terms across every major California city. Zero ad spend. The system compounds month over month."
                  </p>
                </blockquote>
                <dl className="grid grid-cols-3 gap-8 border-t border-[#E5E5E5] pt-8">
                  {[
                    { num:'19,200+', label:'Pages Indexed by Google' },
                    { num:'1,000+', label:'Unique Search Queries' },
                    { num:'27,200+', label:'Search Impressions (28 Days)' },
                  ].map(item => (
                    <div key={item.label}>
                      <dd className="text-3xl font-bold text-[#111111] mb-2" style={{ fontFamily:"'JetBrains Mono', monospace" }}>{item.num}</dd>
                      <dt className="text-[#888888] text-sm">{item.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-36 bg-[#F8F7F4]" aria-label="Contact call to action">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="gold-rule-short" aria-hidden="true" />
                <span className="section-label">Your Market Could Be Next</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-[#111111] leading-tight mb-8" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:700 }}>
                We build one system per market. Is yours available?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">Request a Consultation</Link>
                <a href="tel:3108461658" className="btn-ghost text-center" style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:'0.8rem', letterSpacing:'0.1em' }} aria-label="Call 310-846-1658">(310) 846-1658</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
