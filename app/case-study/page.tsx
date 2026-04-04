import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: MarVistaLaw Lead Generation System | FlashPreviews Consulting',
  description: 'How we built a statewide California legal lead generation system with 30,000+ pages, 22,000+ impressions in 7 days, at $1,000 per lead value.',
  alternates: { canonical: 'https://www.flashpreviews.com/case-study' },
};

const RESULTS = [
  { num: '30,000+', label: 'Pages Deployed', sub: 'System-wide' },
  { num: '22,000+', label: 'Impressions', sub: 'First 7 days' },
  { num: '$1,000', label: 'Per Lead Value', sub: 'High-intent legal' },
  { num: '30 Days', label: 'Launch Timeline', sub: 'Concept to live' },
];

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HEADER */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-rule-short" />
            <span className="section-label">Case Study — 2024</span>
          </div>
          <div className="grid md:grid-cols-3 gap-12 items-end">
            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
                MarVistaLaw: Building a<br /><em className="text-[#B8860B]">Statewide Legal Lead System</em>
              </h1>
              <p className="text-[#555555] text-lg leading-relaxed max-w-xl">
                A California-wide legal lead generation platform built using programmatic SEO — capturing high-intent traffic across multiple legal categories including personal injury, immigration, estate planning, and family law.
              </p>
            </div>
            <div className="border-t-2 border-[#B8860B] pt-6">
              {[
                { label: 'Client', value: 'MarVistaLaw' },
                { label: 'Market', value: 'Statewide — California' },
                { label: 'Verticals', value: 'Multi-Category Legal' },
                { label: 'System Type', value: 'Bilingual pSEO' },
                { label: 'Timeline', value: '30-Day Launch' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-baseline border-b border-[#F0F0F0] pb-3 mb-3">
                  <span className="text-[#888888] text-xs tracking-wider uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</span>
                  <span className="text-[#111111] text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS BANNER */}
      <section className="bg-[#0E0E0E] py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {RESULTS.map((r) => (
              <div key={r.label} className="border-t border-[#2A2A2A] pt-6">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r.num}</div>
                <p className="text-[#888888] text-sm mb-1">{r.label}</p>
                <p className="text-[#555555] text-xs">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="section-label block mb-3">01</span>
              <h2 className="text-3xl md:text-4xl text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>The Challenge</h2>
            </div>
            <div className="md:col-span-9">
              <p className="text-[#555555] text-lg leading-relaxed mb-6">
                California's legal market is one of the most competitive in the country. Law firms spend tens of thousands per month on Google Ads, fighting for the same keywords. The client needed a way to capture high-intent legal traffic at scale — without depending on paid advertising.
              </p>
              <p className="text-[#555555] text-base leading-relaxed">
                The goal: build an organic lead generation system that would rank across hundreds of city-level legal search queries in both English and Spanish, creating a sustainable traffic engine that compounds over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#E5E5E5]">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="section-label block mb-3">02</span>
              <h2 className="text-3xl md:text-4xl text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>The System</h2>
            </div>
            <div className="md:col-span-9">
              <p className="text-[#555555] text-lg leading-relaxed mb-10">
                We engineered a programmatic SEO system combining a Next.js 14 application with Supabase as a content database — allowing us to generate thousands of unique, high-quality pages from structured data.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: '301 Cities × 51 Services', desc: 'Every major California city, every major legal practice area. 13,570+ unique bilingual page combinations.' },
                  { title: 'AI-Generated Content', desc: 'Each page contains unique, locally-relevant content generated via Anthropic Claude API — not template-spun text.' },
                  { title: 'Bilingual Architecture', desc: 'Full Spanish-language parity with proper hreflang implementation, capturing the underserved Latino legal market.' },
                  { title: 'Lead Capture Infrastructure', desc: 'Integrated Supabase lead storage, Resend email notifications, and direct-to-phone alerts for every inquiry.' },
                ].map((item) => (
                  <div key={item.title} className="border-t border-[#E5E5E5] pt-6">
                    <h3 className="text-xl text-[#111111] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>{item.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE RESULTS */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="section-label block mb-3">03</span>
              <h2 className="text-3xl md:text-4xl text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>The Results</h2>
            </div>
            <div className="md:col-span-9">
              <p className="text-[#555555] text-lg leading-relaxed mb-10">
                Within 7 days of launch, the system generated over 22,000 impressions across 1,000+ unique search queries. Google began indexing and ranking pages immediately — without a single dollar spent on advertising.
              </p>
              <div className="gold-callout mb-10">
                <p className="text-[#111111] text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                  "8,150+ pages indexed by Google within 30 days of launch. The system is now generating impressions across legal search queries in every major California market."
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-[#E5E5E5] pt-8">
                {[
                  { num: '8,150+', label: 'Pages Indexed by Google' },
                  { num: '1,000+', label: 'Unique Search Queries' },
                  { num: '27K', label: 'Weekly Impressions (growing)' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.num}</div>
                    <div className="text-[#888888] text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#F8F7F4]">
        <div className="container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-rule-short" />
              <span className="section-label">Your Market Could Be Next</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#111111] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
              We build one system per market. Is yours available?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">Request a Consultation</Link>
              <a href="tel:3104373343" className="btn-ghost text-center" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', letterSpacing: '0.1em' }}>(310) 437-3343</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
