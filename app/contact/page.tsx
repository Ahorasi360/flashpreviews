'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const MARKETS = [
  { group: '— Legal Services', options: [
    { value: 'personal-injury', label: 'Personal Injury Law' },
    { value: 'immigration', label: 'Immigration Law' },
    { value: 'criminal-defense', label: 'Criminal Defense' },
    { value: 'family-law', label: 'Family Law' },
    { value: 'estate-planning', label: 'Estate Planning & Probate' },
    { value: 'business-law', label: 'Business & Commercial Law' },
    { value: 'other-legal', label: 'Other Legal Practice' },
  ]},
  { group: '— Real Estate', options: [
    { value: 'real-estate-agent', label: 'Real Estate Agent / Broker' },
    { value: 'mortgage', label: 'Mortgage & Lending' },
    { value: 'property-management', label: 'Property Management' },
  ]},
  { group: '— Medical & Financial', options: [
    { value: 'medical', label: 'Medical Practice' },
    { value: 'insurance', label: 'Insurance Agency' },
    { value: 'financial', label: 'Financial Advisor' },
  ]},
  { group: '— Other', options: [
    { value: 'home-services', label: 'Home Services' },
    { value: 'restaurant', label: 'Restaurant & Hospitality' },
    { value: 'other', label: 'Other Industry' },
  ]},
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', market: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 md:pt-40 pb-16 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-rule-short" />
            <span className="section-label">Request a Consultation</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-tight max-w-3xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            Let's Find Out If Your Market Is <em className="text-[#B8860B]">Available</em>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[#555555] text-base leading-relaxed mb-6">We build one lead generation system per market. Once a market is claimed, it's closed to new operators in that vertical.</p>
              <p className="text-[#555555] text-base leading-relaxed mb-12">Fill out the form to request a consultation. We'll review your market and reach out within 24 hours.</p>

              <div className="mb-12">
                <h3 className="text-xl text-[#111111] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>What Happens Next</h3>
                <div className="border-t border-[#E5E5E5]">
                  {[
                    { num: '01', title: 'Market Assessment', desc: 'We review your market, vertical, and competitive landscape.' },
                    { num: '02', title: 'Strategy Call', desc: 'A 30-minute call to discuss your goals and what a system would look like for your business.' },
                    { num: '03', title: 'System Design', desc: 'If we're a fit, we design your custom lead generation system and begin deployment.' },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-6 py-6 border-b border-[#F0F0F0]">
                      <span className="text-[#B8860B] text-xs shrink-0 mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.num}</span>
                      <div>
                        <p className="text-[#111111] text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gold-callout">
                <p className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Prefer to call?</p>
                <a href="tel:3108461658" className="text-[#111111] text-2xl font-medium hover:text-[#B8860B] transition-colors block mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>(310) 846-1658</a>
                <a href="mailto:flashpreviews@gmail.com" className="text-[#888888] text-sm hover:text-[#111111] transition-colors block mb-2">flashpreviews@gmail.com</a>
                <p className="text-[#888888] text-sm">8549 Wilshire Blvd #535, Beverly Hills, CA 90211</p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="border border-[#E5E5E5] p-12 text-center">
                  <div className="text-[#B8860B] text-4xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>Thank You</div>
                  <p className="text-[#111111] text-lg mb-4">Your consultation request has been received.</p>
                  <p className="text-[#888888] text-sm leading-relaxed mb-8">We'll review your market and reach out within 24 hours. If your market is available, we'll schedule a strategy call.</p>
                  <div className="text-[#B8860B] text-xs tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>FlashPreviews Consulting Group</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Anthony Galeano', required: true },
                    { label: 'Business Name *', name: 'business', type: 'text', placeholder: 'Your Law Firm or Business', required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[#111111] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{field.label}</label>
                      <input type={field.type} name={field.name} required={field.required} value={(form as any)[field.name]} onChange={handleChange} placeholder={field.placeholder}
                        className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]" />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[#111111] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Your Market / Vertical *</label>
                    <select name="market" required value={form.market} onChange={handleChange} className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors">
                      <option value="">Select your market or industry</option>
                      {MARKETS.map((g) => (
                        <optgroup key={g.group} label={g.group}>
                          {g.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#111111] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@firm.com" className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]" />
                    </div>
                    <div>
                      <label className="block text-[#111111] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(310) 000-0000" className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#111111] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Tell Us About Your Business</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Describe your current lead generation challenges and what market you're targeting..." className="w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC] resize-none" />
                  </div>

                  <button type="submit" disabled={loading} className="w-full btn-primary text-center flex items-center justify-center gap-3 disabled:opacity-60">
                    {loading ? (<><span className="inline-block w-4 h-4 border border-white border-t-transparent rounded-full" style={{ animation: 'spin 1s linear infinite' }} />Submitting...</>) : 'Request a Consultation'}
                  </button>
                  <p className="text-center text-[#AAAAAA] text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>We respond within 24 hours. No spam, ever.</p>
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
