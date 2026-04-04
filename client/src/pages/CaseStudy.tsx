/**
 * CASE STUDY PAGE — "Clean White Authority" design system
 * MarVistaLaw: Before → After → Results
 * Clean storytelling layout, data-forward, editorial
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CaseStudy() {
  const s1 = useScrollAnimation();
  const s2 = useScrollAnimation();
  const s3 = useScrollAnimation();
  const s4 = useScrollAnimation();
  const s5 = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ─── CASE STUDY HERO ──────────────────────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 border-b border-[#E5E5E5]">
        <div ref={s1} className="container">
          <div className="fade-in-up flex items-center gap-3 mb-8">
            <div className="gold-rule-short" />
            <span className="section-label">Case Study — 2024</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-end">
            <div className="md:col-span-2">
              <h1
                className="fade-in-up text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, transitionDelay: "0.05s" }}
              >
                MarVistaLaw: Building a<br />
                <em className="text-[#B8860B]">Statewide Legal Lead System</em>
              </h1>
              <p
                className="fade-in-up text-[#555555] text-lg leading-relaxed max-w-xl"
                style={{ transitionDelay: "0.1s" }}
              >
                A California-wide legal lead generation platform built using programmatic SEO — capturing high-intent traffic across multiple legal categories including personal injury, immigration, estate planning, and family law.
              </p>
            </div>

            {/* Quick stats sidebar */}
            <div className="fade-in-up border-t-2 border-[#B8860B] pt-6" style={{ transitionDelay: "0.15s" }}>
              <div className="flex flex-col gap-6">
                {[
                  { label: "Client", value: "MarVistaLaw" },
                  { label: "Market", value: "Statewide — California" },
                  { label: "Verticals", value: "Multi-Category Legal" },
                  { label: "System Type", value: "Bilingual pSEO" },
                  { label: "Timeline", value: "30-Day Launch" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-baseline border-b border-[#F0F0F0] pb-3">
                    <span
                      className="text-[#888888] text-xs tracking-wider uppercase"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-[#111111] text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS BANNER ───────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "30,000+", label: "Pages Deployed", sub: "System-wide" },
              { num: "22,000+", label: "Impressions", sub: "First 7 days" },
              { num: "$1,000", label: "Per Lead Value", sub: "System-wide avg." },
              { num: "5+", label: "Legal Verticals", sub: "Multi-category" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="border-t border-[#2A2A2A] pt-6"
              >
                <div
                  className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.num}
                </div>
                <p className="text-[#F0EDE8] text-sm mb-1">{item.label}</p>
                <p
                  className="text-[#B8860B] text-xs tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE CHALLENGE (BEFORE) ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5]">
        <div ref={s2} className="container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Label column */}
            <div className="md:col-span-3">
              <div className="fade-in-up sticky top-32">
                <span
                  className="text-[#B8860B] text-[0.65rem] tracking-[0.25em] uppercase block mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Phase 01
                </span>
                <h2
                  className="text-3xl md:text-4xl text-[#111111]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  The Challenge
                </h2>
                <div className="gold-rule-short mt-4" />
              </div>
            </div>

            {/* Content column */}
            <div className="md:col-span-9">
              <div className="fade-in-up mb-8" style={{ transitionDelay: "0.05s" }}>
                <h3
                  className="text-2xl md:text-3xl text-[#111111] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  A Full-Service Firm with No Digital Presence
                </h3>
                <p className="text-[#555555] text-base leading-relaxed mb-4">
                  MarVistaLaw is a full-service California law firm offering legal representation across personal injury, immigration, estate planning, family law, and business services — in both English and Spanish. Despite years of operation and strong client outcomes, they had virtually no digital presence: no rankings, no organic traffic, no lead pipeline.
                </p>
                <p className="text-[#555555] text-base leading-relaxed">
                  They were competing across multiple high-value legal verticals in one of the most competitive markets in the country, against firms spending tens of thousands per month on paid advertising. They needed a different approach — one that would compound over time, cover every practice area, and reach clients across the entire state.
                </p>
              </div>

              {/* Before state */}
              <div
                className="fade-in-up grid sm:grid-cols-3 gap-6 bg-[#F8F7F4] p-8"
                style={{ transitionDelay: "0.1s" }}
              >
                <div>
                  <div
                    className="text-3xl font-bold text-[#CCCCCC] mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    ~0
                  </div>
                  <p className="text-[#888888] text-sm">Monthly organic visitors</p>
                </div>
                <div>
                  <div
                    className="text-3xl font-bold text-[#CCCCCC] mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    0
                  </div>
                  <p className="text-[#888888] text-sm">Indexed SEO pages</p>
                </div>
                <div>
                  <div
                    className="text-3xl font-bold text-[#CCCCCC] mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    $0
                  </div>
                  <p className="text-[#888888] text-sm">Digital lead pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE SYSTEM (AFTER) ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5]">
        <div ref={s3} className="container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Label column */}
            <div className="md:col-span-3">
              <div className="fade-in-up sticky top-32">
                <span
                  className="text-[#B8860B] text-[0.65rem] tracking-[0.25em] uppercase block mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Phase 02
                </span>
                <h2
                  className="text-3xl md:text-4xl text-[#111111]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  The System
                </h2>
                <div className="gold-rule-short mt-4" />
              </div>
            </div>

            {/* Content column */}
            <div className="md:col-span-9">
              <div className="fade-in-up mb-10" style={{ transitionDelay: "0.05s" }}>
                <h3
                  className="text-2xl md:text-3xl text-[#111111] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  A Statewide, Multi-Category Programmatic SEO Platform
                </h3>
                <p className="text-[#555555] text-base leading-relaxed mb-4">
                  We designed and deployed a programmatic SEO platform targeting thousands of high-intent search queries across every major legal category — personal injury, immigration, estate planning, family law, and business services — in both English and Spanish. Every page was engineered to match the exact language a potential client uses when searching for legal help in their city.
                </p>
                <p className="text-[#555555] text-base leading-relaxed">
                  The system wasn't just pages — it was a complete statewide acquisition infrastructure: structured data, internal linking architecture, city-level targeting across all California markets, conversion-optimized page templates, and automated lead capture forms connected directly to the firm's intake process.
                </p>
              </div>

              {/* System steps */}
              <div className="fade-in-up space-y-0 border-t border-[#E5E5E5]" style={{ transitionDelay: "0.1s" }}>
                {[
                  {
                    step: "01",
                    title: "Market & Keyword Research",
                    desc: "Mapped 10,000+ search queries across five legal verticals — personal injury, immigration, estate planning, family law, and business law — in English and Spanish. Identified low-competition, high-intent opportunities competitors were ignoring across every California city.",
                  },
                  {
                    step: "02",
                    title: "Programmatic Page Architecture",
                    desc: "Built a scalable template system generating thousands of unique, indexable pages — each targeting a specific practice area, California city, or legal situation. One architecture, deployed across all verticals simultaneously.",
                  },
                  {
                    step: "03",
                    title: "Bilingual Content Engine",
                    desc: "Deployed all pages in both English and Spanish across every practice area — capturing the underserved Spanish-speaking market that competitors were entirely ignoring in every legal vertical.",
                  },
                  {
                    step: "04",
                    title: "Lead Capture & Intake Integration",
                    desc: "Every page connected to a conversion-optimized intake form. Qualified leads delivered directly to the firm's team in real time.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-8 py-8 border-b border-[#F0F0F0]"
                  >
                    <div
                      className="text-[#B8860B] text-xs shrink-0 mt-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4
                        className="text-xl text-[#111111] mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE RESULTS ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8F7F4]">
        <div ref={s4} className="container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Label column */}
            <div className="md:col-span-3">
              <div className="fade-in-up sticky top-32">
                <span
                  className="text-[#B8860B] text-[0.65rem] tracking-[0.25em] uppercase block mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Phase 03
                </span>
                <h2
                  className="text-3xl md:text-4xl text-[#111111]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  The Results
                </h2>
                <div className="gold-rule-short mt-4" />
              </div>
            </div>

            {/* Content column */}
            <div className="md:col-span-9">
              <div className="fade-in-up mb-10" style={{ transitionDelay: "0.05s" }}>
                <h3
                  className="text-2xl md:text-3xl text-[#111111] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  From Zero Presence to a Statewide Lead Pipeline — in 30 Days
                </h3>
                <p className="text-[#555555] text-base leading-relaxed">
                  Within the first week of deployment, the system began generating impressions at scale across multiple legal categories and California cities. The bilingual, multi-vertical architecture captured search traffic that competitors weren't even targeting. The firm went from zero digital presence to an active, statewide, compounding lead pipeline — covering every practice area simultaneously.
                </p>
              </div>

              {/* Results grid */}
              <div
                className="fade-in-up grid sm:grid-cols-2 gap-8 mb-12"
                style={{ transitionDelay: "0.1s" }}
              >
                {[
                  {
                    num: "30,000+",
                    label: "Pages Deployed",
                    desc: "Fully indexed, conversion-optimized pages targeting high-intent queries across all legal verticals and California cities",
                    gold: true,
                  },
                  {
                    num: "22,000+",
                    label: "Impressions in 7 Days",
                    desc: "System-wide organic search impressions within the first week of launch, across all verticals",
                    gold: false,
                  },
                  {
                    num: "$1,000",
                    label: "Per Lead Value",
                    desc: "Average value of each qualified lead delivered to the firm across all practice areas",
                    gold: false,
                  },
                  {
                    num: "5+",
                    label: "Legal Verticals",
                    desc: "Personal injury, immigration, estate planning, family law, and business services — all covered",
                    gold: true,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`p-8 ${item.gold ? "bg-[#0E0E0E]" : "bg-white border border-[#E5E5E5]"}`}
                  >
                    <div
                      className={`text-4xl md:text-5xl font-bold mb-3 ${item.gold ? "text-[#B8860B]" : "text-[#111111]"}`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.num}
                    </div>
                    <p className={`font-medium mb-2 ${item.gold ? "text-white" : "text-[#111111]"}`}>
                      {item.label}
                    </p>
                    <p className={`text-sm leading-relaxed ${item.gold ? "text-[#888888]" : "text-[#666666]"}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Visualization */}
              <div className="fade-in-up" style={{ transitionDelay: "0.15s" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/case-study-visual-FHhzmcqGMFFk9iDkojgt3X.webp"
                  alt="MarVistaLaw Lead Generation Results Visualization"
                  className="w-full"
                />
                <p
                  className="text-center text-[#888888] text-xs mt-3 tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  System-wide lead generation performance — MarVistaLaw statewide platform, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SYSTEM COVERAGE ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-[#E5E5E5] bg-white">
        <div ref={s5} className="container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Label column */}
            <div className="md:col-span-3">
              <div className="fade-in-up sticky top-32">
                <span
                  className="text-[#B8860B] text-[0.65rem] tracking-[0.25em] uppercase block mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  System Coverage
                </span>
                <h2
                  className="text-3xl md:text-4xl text-[#111111]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  Legal Categories
                </h2>
                <div className="gold-rule-short mt-4" />
                <p className="text-[#888888] text-sm leading-relaxed mt-4">
                  The system captures high-intent search traffic across every major legal category — not a single niche.
                </p>
              </div>
            </div>

            {/* Coverage table */}
            <div className="md:col-span-9">
              <div className="fade-in-up border-t border-[#E5E5E5]" style={{ transitionDelay: "0.05s" }}>
                {[
                  {
                    category: "Personal Injury",
                    tags: ["Car Accidents", "Uber / Lyft"],
                    desc: "Pages targeting victims of vehicle accidents seeking legal representation across California cities.",
                    query: "\"Uber accident lawyer Los Angeles\"",
                  },
                  {
                    category: "Immigration",
                    tags: ["Visas", "DACA", "Deportation Defense"],
                    desc: "Bilingual pages capturing individuals navigating the immigration system in English and Spanish.",
                    query: "\"immigration attorney near me\"",
                  },
                  {
                    category: "Estate Planning",
                    tags: ["Wills", "Trusts", "Probate"],
                    desc: "Pages targeting individuals and families planning for asset protection and wealth transfer.",
                    query: "\"estate planning lawyer California\"",
                  },
                  {
                    category: "Family Law",
                    tags: ["Divorce", "Custody", "Child Support"],
                    desc: "High-intent pages for individuals seeking legal help with family disputes and domestic matters.",
                    query: "\"divorce attorney Los Angeles\"",
                  },
                  {
                    category: "Business / Legal Services",
                    tags: ["Contracts", "Business Formation", "Litigation"],
                    desc: "Pages targeting business owners and entrepreneurs seeking legal counsel for commercial matters.",
                    query: "\"business lawyer Beverly Hills\"",
                  },
                ].map((item, i) => (
                  <div
                    key={item.category}
                    className="grid md:grid-cols-12 gap-6 py-8 border-b border-[#F0F0F0] group"
                  >
                    {/* Category name + tags */}
                    <div className="md:col-span-4">
                      <h3
                        className="text-xl text-[#111111] mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                      >
                        {item.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[#888888] text-[0.6rem] tracking-widest uppercase border border-[#E5E5E5] px-2 py-1"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-5">
                      <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Example query */}
                    <div className="md:col-span-3">
                      <p
                        className="text-[#AAAAAA] text-[0.6rem] tracking-widest uppercase mb-1"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Example Query
                      </p>
                      <p
                        className="text-[#B8860B] text-xs leading-relaxed"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {item.query}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#E5E5E5]">
        <div ref={s5} className="container">
          <div className="max-w-2xl">
            <div className="fade-in-up flex items-center gap-3 mb-8">
              <div className="gold-rule-short" />
              <span className="section-label">Your Market Is Next</span>
            </div>

            <h2
              className="fade-in-up text-4xl md:text-5xl text-[#111111] leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, transitionDelay: "0.05s" }}
            >
              We build one system per market. Is yours still available?
            </h2>

            <p
              className="fade-in-up text-[#555555] text-base leading-relaxed mb-10"
              style={{ transitionDelay: "0.1s" }}
            >
              We don't work with everyone. We work with one operator per market — and we build them a system that dominates. Request a consultation to find out if your market is available.
            </p>

            <div
              className="fade-in-up flex flex-col sm:flex-row gap-4"
              style={{ transitionDelay: "0.15s" }}
            >
              <Link href="/contact" className="btn-primary text-center">
                Request a Consultation
              </Link>
              <Link href="/" className="btn-ghost text-center">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
