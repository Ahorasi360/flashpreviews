/**
 * HOME PAGE — "Clean White Authority" design system
 * Sections: Hero → Proof/Metrics → Case Study Preview → What We Build → Offer → CTA
 * Typography: Cormorant Garamond (display) | DM Sans (body) | JetBrains Mono (data)
 * Colors: White bg | #111111 text | #B8860B gold accent
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";

// Animated counter component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useCounterAnimation(value);
  return (
    <span>
      <span ref={ref}>0</span>{suffix}
    </span>
  );
}

// Metric card component
function MetricCard({
  value,
  suffix,
  label,
  sublabel,
  gold = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  gold?: boolean;
}) {
  return (
    <div className={gold ? "stat-card-gold" : "stat-card"}>
      <div
        className="metric-number text-5xl md:text-6xl lg:text-7xl mb-3"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
      >
        <Counter value={value} suffix={suffix} />
      </div>
      <p className="text-[#111111] font-medium text-sm md:text-base mb-1">{label}</p>
      {sublabel && (
        <p className="text-[#888888] text-xs md:text-sm">{sublabel}</p>
      )}
    </div>
  );
}

export default function Home() {
  const heroRef = useScrollAnimation();
  const metricsRef = useScrollAnimation();
  const caseRef = useScrollAnimation();
  const buildRef = useScrollAnimation();
  const offerRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-20"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/hero-abstract-MGGZzFZNUkdEcY7DjD4kt8.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/85" />

        <div ref={heroRef} className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="fade-in-up flex items-center gap-3 mb-8">
              <div className="gold-rule-short" />
              <span className="section-label">Lead Generation Systems</span>
            </div>

            {/* Headline */}
            <h1
              className="fade-in-up text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[#111111] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, transitionDelay: "0.1s" }}
            >
              We Build Systems That Generate High-Intent Leads —{" "}
              <em style={{ fontStyle: "italic", color: "#B8860B" }}>Not Just Websites</em>
            </h1>

            {/* Subheadline */}
            <p
              className="fade-in-up text-[#444444] text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
              style={{ transitionDelay: "0.2s" }}
            >
              We engineer programmatic SEO systems, lead generation engines, and automated client acquisition infrastructure for attorneys, real estate professionals, and business owners who demand results.
            </p>

            {/* CTAs */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-4" style={{ transitionDelay: "0.3s" }}>
              <Link href="/contact" className="btn-primary text-center">
                Get Leads for My Business
              </Link>
              <Link href="/case-study" className="btn-ghost text-center">
                View Case Study
              </Link>
            </div>

            {/* Trust signal */}
            <div
              className="fade-in-up mt-12 flex items-center gap-6"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="h-px w-8 bg-[#B8860B]" />
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-[#888888] text-xs tracking-widest uppercase"
              >
                Beverly Hills, CA · Est. 2014 · (310) 437-3343
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROOF / METRICS ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#E5E5E5]">
        <div ref={metricsRef} className="container">
          {/* Section header */}
          <div className="fade-in-up mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="section-label block mb-3">Verified Results</span>
              <h2
                className="text-4xl md:text-5xl text-[#111111]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                The Numbers Don't Lie
              </h2>
            </div>
            <p className="text-[#666666] text-sm max-w-xs leading-relaxed">
              Real metrics from live systems we've deployed for clients in competitive legal and real estate markets.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="fade-in-up" style={{ transitionDelay: "0.05s" }}>
              <MetricCard
                value={30000}
                suffix="+"
                label="Pages Deployed"
                sublabel="Programmatic SEO infrastructure"
                gold={true}
              />
            </div>
            <div className="fade-in-up" style={{ transitionDelay: "0.1s" }}>
              <MetricCard
                value={22000}
                suffix="+"
                label="Impressions in 7 Days"
                sublabel="From a single system launch"
              />
            </div>
            <div className="fade-in-up" style={{ transitionDelay: "0.15s" }}>
              <MetricCard
                value={1000}
                suffix=""
                label="Per Lead Sale"
                sublabel="High-intent legal leads"
                gold={true}
              />
            </div>
            <div className="fade-in-up" style={{ transitionDelay: "0.2s" }}>
              <MetricCard
                value={10}
                suffix="yrs"
                label="In Operation"
                sublabel="Trusted since 2014"
              />
            </div>
          </div>

          {/* Gold callout */}
          <div className="fade-in-up mt-16 gold-callout max-w-2xl" style={{ transitionDelay: "0.25s" }}>
            <p
              className="text-[#111111] text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              "We don't run ads. We don't chase followers. We build infrastructure that puts your firm in front of people actively searching for your services — at scale."
            </p>
            <p
              className="mt-4 text-[#B8860B] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              — FlashPreviews Consulting Group
            </p>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY PREVIEW ───────────────────────────────────────────── */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div ref={caseRef} className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: content */}
            <div>
              <div className="fade-in-up flex items-center gap-3 mb-6">
                <div className="gold-rule-short" />
                <span className="section-label">Case Study</span>
              </div>

              <h2
                className="fade-in-up text-4xl md:text-5xl text-[#111111] mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, transitionDelay: "0.05s" }}
              >
                MarVistaLaw: Building a Statewide Legal Lead Generation System
              </h2>

              <p
                className="fade-in-up text-[#555555] text-base leading-relaxed mb-8"
                style={{ transitionDelay: "0.1s" }}
              >
                This system captures high-intent search traffic across multiple legal categories, including personal injury, immigration, estate planning, and family law — deployed statewide across California in both English and Spanish.
              </p>

              {/* Mini metrics */}
              <div
                className="fade-in-up grid grid-cols-3 gap-6 mb-10 border-t border-[#E5E5E5] pt-8"
                style={{ transitionDelay: "0.15s" }}
              >
                {[
                  { num: "30K+", label: "Pages Built" },
                  { num: "22K+", label: "Impressions / 7 Days" },
                  { num: "$1K", label: "Per Lead Value" },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      className="text-2xl md:text-3xl font-bold text-[#111111] mb-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.num}
                    </div>
                    <div className="text-[#888888] text-xs">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="fade-in-up" style={{ transitionDelay: "0.2s" }}>
                <Link href="/case-study" className="btn-primary">
                  Read Full Case Study
                </Link>
              </div>
            </div>

            {/* Right: visual */}
            <div className="fade-in-up" style={{ transitionDelay: "0.1s" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/case-study-visual-FHhzmcqGMFFk9iDkojgt3X.webp"
                alt="MarVistaLaw Lead Generation System Results"
                className="w-full"
                style={{ aspectRatio: "4/3", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILD ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#E5E5E5]">
        <div ref={buildRef} className="container">
          <div className="fade-in-up mb-16">
            <span className="section-label block mb-3">Our Systems</span>
            <h2
              className="text-4xl md:text-5xl text-[#111111] max-w-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
            >
              What We Build
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-[#E5E5E5]">
            {[
              {
                num: "01",
                title: "Programmatic SEO Systems",
                description:
                  "We deploy thousands of optimized pages targeting high-intent search queries in your market. Each page is engineered to rank and convert — not just exist.",
                tags: ["Scale", "Organic Traffic", "Long-tail Capture"],
              },
              {
                num: "02",
                title: "Lead Generation Engines",
                description:
                  "End-to-end systems that capture, qualify, and deliver high-intent prospects directly to your firm. Built for attorneys, real estate professionals, and service businesses.",
                tags: ["Qualified Leads", "Automated Delivery", "High Intent"],
              },
              {
                num: "03",
                title: "Bilingual Acquisition Systems",
                description:
                  "Reach Spanish-speaking markets that your competitors ignore. We build fully bilingual systems that capture an underserved, high-value audience.",
                tags: ["English + Spanish", "Underserved Markets", "Dual Reach"],
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="fade-in-up border-b md:border-b-0 md:border-r border-[#E5E5E5] last:border-r-0 py-10 md:py-12 md:px-10 first:md:pl-0 last:md:pr-0"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-[#B8860B] text-xs tracking-widest mb-6"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.num}
                </div>
                <h3
                  className="text-2xl md:text-3xl text-[#111111] mb-4 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] tracking-widest uppercase text-[#B8860B] border border-[#B8860B]/30 px-2 py-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFER / POSITIONING ──────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-20 md:py-28">
        <div ref={offerRef} className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="fade-in-up flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#B8860B]" />
                <span
                  className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Our Model
                </span>
              </div>

              <h2
                className="fade-in-up text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, transitionDelay: "0.05s" }}
              >
                One System.<br />
                One Market.<br />
                <em className="text-[#B8860B]">One Operator.</em>
              </h2>

              <p
                className="fade-in-up text-[#888888] text-base leading-relaxed mb-8"
                style={{ transitionDelay: "0.1s" }}
              >
                We don't spread thin across hundreds of clients. We build one dominant system per market — and we work exclusively with the operator who controls it.
              </p>

              <p
                className="fade-in-up text-[#888888] text-base leading-relaxed"
                style={{ transitionDelay: "0.15s" }}
              >
                When we build your lead generation system, your competitors in that market don't get one. This is not a commodity service. It's a competitive advantage.
              </p>
            </div>

            {/* Right: feature list */}
            <div className="fade-in-up" style={{ transitionDelay: "0.1s" }}>
              <div className="border border-[#2A2A2A]">
                {[
                  { label: "Market Exclusivity", desc: "One system per market, per vertical" },
                  { label: "Programmatic Scale", desc: "Thousands of pages, not dozens" },
                  { label: "High-Intent Traffic", desc: "People searching for your exact service" },
                  { label: "Bilingual Reach", desc: "English + Spanish systems available" },
                  { label: "Automated Delivery", desc: "Leads delivered directly to your inbox" },
                  { label: "Proven Results", desc: "30,000+ pages deployed, $1K/lead value" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 border-b border-[#2A2A2A] last:border-b-0"
                  >
                    <div
                      className="text-[#B8860B] text-xs mt-0.5 shrink-0"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">{item.label}</p>
                      <p className="text-[#666666] text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SYSTEM DIAGRAM ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#E5E5E5]">
        <div className="container">
          <div className="fade-in-up text-center mb-12">
            <span className="section-label block mb-3">How It Works</span>
            <h2
              className="text-4xl md:text-5xl text-[#111111]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
            >
              The System Architecture
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/hW5EohCPXhBCRizTCg8qS7/system-diagram-MT94BKHCZ9LREGoeFhjLy2.webp"
              alt="Lead Generation System Architecture"
              className="w-full border border-[#E5E5E5]"
            />
          </div>
          <div className="max-w-2xl mx-auto mt-10 text-center">
            <p className="text-[#666666] text-sm leading-relaxed">
              Every system begins with a programmatic SEO foundation — thousands of pages targeting specific search queries. High-intent visitors are captured, qualified, and delivered as leads. The entire pipeline is automated and scalable.
            </p>
          </div>
        </div>
      </section>
      {/* ─── MARKETS WE DEPLOY SYSTEMS IN ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-t border-[#E5E5E5]">
        <div className="container">
          <div className="fade-in-up mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="section-label block mb-3">Our Reach</span>
              <h2
                className="text-4xl md:text-5xl text-[#111111]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                Markets We Deploy Systems In
              </h2>
            </div>
            <p className="text-[#888888] text-sm max-w-xs leading-relaxed">
              The same system architecture adapts across industries. One methodology. Multiple markets.
            </p>
          </div>

          <div className="border-t border-[#E5E5E5]">
            {[
              {
                market: "Legal Services",
                desc: "Attorneys, law firms, and legal professionals across all practice areas.",
                examples: ["Personal Injury", "Immigration", "Estate Planning", "Family Law"],
              },
              {
                market: "Real Estate",
                desc: "Agents, brokers, and developers targeting buyers and sellers in competitive markets.",
                examples: ["Residential Sales", "Commercial", "Mortgage", "Property Management"],
              },
              {
                market: "Local Service Businesses",
                desc: "High-value service providers who depend on local search visibility to acquire clients.",
                examples: ["Medical Practices", "Financial Services", "Home Services", "Insurance"],
              },
            ].map((item, i) => (
              <div
                key={item.market}
                className="fade-in-up grid md:grid-cols-12 gap-6 py-8 border-b border-[#F0F0F0] items-baseline"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Market name */}
                <div className="md:col-span-3">
                  <h3
                    className="text-2xl text-[#111111]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                  >
                    {item.market}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Sub-categories */}
                <div className="md:col-span-4 flex flex-wrap gap-2">
                  {item.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-[#888888] text-[0.6rem] tracking-widest uppercase border border-[#E5E5E5] px-2 py-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-[#F8F7F4] border-t border-[#E5E5E5]">
        <div ref={ctaRef} className="container">
          <div className="max-w-3xl">
            <div className="fade-in-up flex items-center gap-3 mb-8">
              <div className="gold-rule-short" />
              <span className="section-label">Ready to Scale?</span>
            </div>

            <h2
              className="fade-in-up text-4xl md:text-6xl lg:text-7xl text-[#111111] leading-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, transitionDelay: "0.05s" }}
            >
              Your competitors are getting leads right now.
            </h2>

            <p
              className="fade-in-up text-[#555555] text-lg leading-relaxed mb-12 max-w-xl"
              style={{ transitionDelay: "0.1s" }}
            >
              We build one system per market. Once your market is taken, it's taken. Request a consultation to find out if your market is still available.
            </p>

            <div
              className="fade-in-up flex flex-col sm:flex-row gap-4"
              style={{ transitionDelay: "0.15s" }}
            >
              <Link href="/contact" className="btn-primary text-center">
                Request a Consultation
              </Link>
              <a
                href="tel:3104373343"
                className="btn-ghost text-center"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.1em" }}
              >
                (310) 437-3343
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
