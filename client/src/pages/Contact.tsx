/**
 * CONTACT PAGE — "Clean White Authority" design system
 * Minimal, high-trust, simple form with clear CTA
 * Left: positioning copy | Right: form
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const s1 = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    market: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ─── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-rule-short" />
            <span className="section-label">Request a Consultation</span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-tight max-w-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
          >
            Let's Find Out If Your Market Is{" "}
            <em className="text-[#B8860B]">Available</em>
          </h1>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div ref={s1} className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Left: Trust copy */}
            <div>
              <div className="fade-in-up mb-12">
                <p className="text-[#555555] text-base leading-relaxed mb-6">
                  We build one lead generation system per market. Once a market is claimed, it's closed to new operators in that vertical.
                </p>
                <p className="text-[#555555] text-base leading-relaxed">
                  Fill out the form to request a consultation. We'll review your market and reach out within 24 hours to discuss whether we can build a system for your business.
                </p>
              </div>

              {/* What to expect */}
              <div className="fade-in-up mb-12" style={{ transitionDelay: "0.05s" }}>
                <h3
                  className="text-xl text-[#111111] mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  What Happens Next
                </h3>
                <div className="space-y-0 border-t border-[#E5E5E5]">
                  {[
                    {
                      num: "01",
                      title: "Market Assessment",
                      desc: "We review your market, vertical, and competitive landscape.",
                    },
                    {
                      num: "02",
                      title: "Strategy Call",
                      desc: "A 30-minute call to discuss your goals and what a system would look like for your business.",
                    },
                    {
                      num: "03",
                      title: "System Design",
                      desc: "If we're a fit, we design your custom lead generation system and begin deployment.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-6 py-6 border-b border-[#F0F0F0]">
                      <span
                        className="text-[#B8860B] text-xs shrink-0 mt-0.5"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {item.num}
                      </span>
                      <div>
                        <p className="text-[#111111] text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="fade-in-up" style={{ transitionDelay: "0.1s" }}>
                <div className="gold-callout">
                  <p
                    className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Prefer to call?
                  </p>
                  <a
                    href="tel:3104373343"
                    className="text-[#111111] text-2xl font-medium hover:text-[#B8860B] transition-colors block mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    (310) 437-3343
                  </a>
                  <a
                    href="mailto:info@flashpreviews.com"
                    className="text-[#888888] text-sm hover:text-[#111111] transition-colors"
                  >
                    info@flashpreviews.com
                  </a>
                  <p className="text-[#888888] text-sm mt-2">
                    8549 Wilshire Blvd #535, Beverly Hills, CA 90211
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="fade-in-up" style={{ transitionDelay: "0.1s" }}>
              {submitted ? (
                <div className="border border-[#E5E5E5] p-12 text-center">
                  <div
                    className="text-[#B8860B] text-4xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                  >
                    Thank You
                  </div>
                  <p className="text-[#111111] text-lg mb-4">Your consultation request has been received.</p>
                  <p className="text-[#888888] text-sm leading-relaxed mb-8">
                    We'll review your market and reach out within 24 hours. If your market is available, we'll schedule a strategy call.
                  </p>
                  <div
                    className="text-[#B8860B] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    FlashPreviews Consulting Group
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-[#111111] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Anthony Galeano"
                      className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]"
                    />
                  </div>

                  {/* Business */}
                  <div>
                    <label
                      className="block text-[#111111] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Law Firm or Business"
                      className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]"
                    />
                  </div>

                  {/* Market / Vertical */}
                  <div>
                    <label
                      className="block text-[#111111] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Your Market / Vertical *
                    </label>
                  <select
                    name="market"
                    required
                    value={formData.market}
                    onChange={handleChange}
                    className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors"
                  >
                    <option value="">Select your market or industry</option>

                    <optgroup label="— Legal Services">
                      <option value="personal-injury">Personal Injury Law</option>
                      <option value="car-accident">Car Accident Law</option>
                      <option value="uber-lyft">Uber / Lyft Accident Law</option>
                      <option value="immigration-law">Immigration Law</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="family-law">Family Law</option>
                      <option value="divorce">Divorce &amp; Custody</option>
                      <option value="estate-planning">Estate Planning &amp; Probate</option>
                      <option value="business-law">Business &amp; Commercial Law</option>
                      <option value="employment-law">Employment Law</option>
                      <option value="bankruptcy">Bankruptcy Law</option>
                      <option value="other-legal">Other Legal Practice</option>
                    </optgroup>

                    <optgroup label="— Real Estate">
                      <option value="real-estate-agent">Real Estate Agent / Broker</option>
                      <option value="real-estate-developer">Real Estate Developer</option>
                      <option value="mortgage-lending">Mortgage &amp; Lending</option>
                      <option value="property-management">Property Management</option>
                      <option value="commercial-real-estate">Commercial Real Estate</option>
                    </optgroup>

                    <optgroup label="— Medical &amp; Health">
                      <option value="medical-practice">Medical Practice</option>
                      <option value="dental">Dental Practice</option>
                      <option value="chiropractic">Chiropractic / Physical Therapy</option>
                      <option value="mental-health">Mental Health Services</option>
                    </optgroup>

                    <optgroup label="— Financial Services">
                      <option value="insurance">Insurance Agency</option>
                      <option value="financial-advisor">Financial Advisor</option>
                      <option value="accounting">Accounting &amp; Tax Services</option>
                    </optgroup>

                    <optgroup label="— Other Business">
                      <option value="home-services">Home Services</option>
                      <option value="automotive">Automotive Services</option>
                      <option value="restaurant">Restaurant &amp; Hospitality</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Other Industry</option>
                    </optgroup>
                  </select>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[#111111] text-xs tracking-widest uppercase mb-2"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@firm.com"
                        className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#111111] text-xs tracking-widest uppercase mb-2"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(310) 000-0000"
                        className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-[#111111] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Tell Us About Your Business
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current lead generation challenges and what market you're targeting..."
                      className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC] resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary text-center flex items-center justify-center gap-3 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span
                          className="inline-block w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      "Request a Consultation"
                    )}
                  </button>

                  <p
                    className="text-center text-[#AAAAAA] text-xs tracking-wider"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
