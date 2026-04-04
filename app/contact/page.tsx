'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FIELD_STYLE = "w-full border border-[#E5E5E5] bg-white text-[#111111] px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition-colors placeholder-[#CCCCCC]";
const LABEL_STYLE = "block text-[#111111] text-xs tracking-widest uppercase mb-2";

const MONO = { fontFamily: "'JetBrains Mono', monospace" };

type Form = {
  full_name: string; business_name: string; email: string; phone: string;
  business_type: string; service_type: string; target_market: string;
  website_url: string; lead_situation: string; monthly_budget: string;
  goal: string; notes: string;
};

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState<Form>({
    full_name: '', business_name: '', email: '', phone: '',
    business_type: '', service_type: '', target_market: '',
    website_url: '', lead_situation: '', monthly_budget: '',
    goal: '', notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/intake', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/contact/thank-you');
    } catch {
      setError('Something went wrong. Please call us at (310) 846-1658.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-rule-short" />
            <span className="section-label">Request Access</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-tight max-w-3xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            Let's Find Out If Your Market Is{' '}
            <em className="text-[#B8860B]">Available</em>
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Left: Trust copy */}
            <div>
              <p className="text-[#555555] text-base leading-relaxed mb-6">
                We build one lead generation system per market. Once a market is claimed, it's closed to new operators in that vertical.
              </p>
              <p className="text-[#555555] text-base leading-relaxed mb-12">
                Complete the intake below. We'll review your market and reach out within 24 hours.
              </p>

              {/* Process */}
              <div className="mb-12">
                <h3 className="text-xl text-[#111111] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>What Happens Next</h3>
                <div className="border-t border-[#E5E5E5]">
                  {[
                    { num: '01', title: 'Market Assessment', desc: 'We review your market, vertical, and competitive landscape.' },
                    { num: '02', title: 'Strategy Call', desc: 'A 30-minute call to confirm fit and outline the system for your business.' },
                    { num: '03', title: 'System Design & Deployment', desc: "If we're a fit, we design and deploy your lead generation system." },
                  ].map(item => (
                    <div key={item.num} className="flex gap-6 py-6 border-b border-[#F0F0F0]">
                      <span className="text-[#B8860B] text-xs shrink-0 mt-0.5" style={MONO}>{item.num}</span>
                      <div>
                        <p className="text-[#111111] text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact callout */}
              <div className="gold-callout">
                <p className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase mb-3" style={MONO}>Prefer to call?</p>
                <a href="tel:3108461658" className="text-[#111111] text-2xl font-medium hover:text-[#B8860B] transition-colors block mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  (310) 846-1658
                </a>
                <a href="mailto:flashpreviews@gmail.com" className="text-[#888888] text-sm hover:text-[#111111] transition-colors block mb-2">
                  flashpreviews@gmail.com
                </a>
                <p className="text-[#888888] text-sm">8549 Wilshire Blvd #535, Beverly Hills, CA 90211</p>
              </div>
            </div>

            {/* Right: Intake form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Basic */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_STYLE} style={MONO}>Full Name *</label>
                    <input type="text" name="full_name" required value={form.full_name} onChange={set} placeholder="Anthony Galeano" className={FIELD_STYLE} />
                  </div>
                  <div>
                    <label className={LABEL_STYLE} style={MONO}>Business Name *</label>
                    <input type="text" name="business_name" required value={form.business_name} onChange={set} placeholder="Your Firm or Business" className={FIELD_STYLE} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_STYLE} style={MONO}>Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={set} placeholder="you@firm.com" className={FIELD_STYLE} />
                  </div>
                  <div>
                    <label className={LABEL_STYLE} style={MONO}>Phone *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={set} placeholder="(310) 000-0000" className={FIELD_STYLE} />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#E5E5E5] pt-2">
                  <p className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase" style={MONO}>Qualification</p>
                </div>

                {/* Business Type */}
                <div>
                  <label className={LABEL_STYLE} style={MONO}>Business Type *</label>
                  <select name="business_type" required value={form.business_type} onChange={set} className={FIELD_STYLE}>
                    <option value="">Select your business type</option>
                    <option value="attorney">Attorney / Law Firm</option>
                    <option value="real-estate">Real Estate Professional</option>
                    <option value="local-service">Local Service Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Practice / Service Type */}
                <div>
                  <label className={LABEL_STYLE} style={MONO}>Practice Area / Service *</label>
                  <select name="service_type" required value={form.service_type} onChange={set} className={FIELD_STYLE}>
                    <option value="">Select your practice or service</option>
                    <optgroup label="— Legal">
                      <option value="personal-injury">Personal Injury</option>
                      <option value="immigration">Immigration</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="family-law">Family Law</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="business-law">Business Law</option>
                      <option value="other-legal">Other Legal</option>
                    </optgroup>
                    <optgroup label="— Real Estate">
                      <option value="real-estate-agent">Real Estate Agent / Broker</option>
                      <option value="mortgage">Mortgage & Lending</option>
                      <option value="property-management">Property Management</option>
                    </optgroup>
                    <optgroup label="— Local Business">
                      <option value="med-spa">Med Spa</option>
                      <option value="tailor">Tailor / Alterations</option>
                      <option value="hair-beauty">Hair / Beauty</option>
                      <option value="medical">Medical Practice</option>
                      <option value="insurance">Insurance</option>
                      <option value="financial">Financial Services</option>
                      <option value="home-services">Home Services</option>
                      <option value="other-local">Other Local Service</option>
                    </optgroup>
                  </select>
                </div>

                {/* Target Market */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_STYLE} style={MONO}>Target City / Market *</label>
                    <input type="text" name="target_market" required value={form.target_market} onChange={set} placeholder="e.g. Los Angeles, CA" className={FIELD_STYLE} />
                  </div>
                  <div>
                    <label className={LABEL_STYLE} style={MONO}>Website URL</label>
                    <input type="url" name="website_url" value={form.website_url} onChange={set} placeholder="https://yoursite.com" className={FIELD_STYLE} />
                  </div>
                </div>

                {/* Lead Situation */}
                <div>
                  <label className={LABEL_STYLE} style={MONO}>Current Lead Situation *</label>
                  <select name="lead_situation" required value={form.lead_situation} onChange={set} className={FIELD_STYLE}>
                    <option value="">Select your current situation</option>
                    <option value="need-now">I need leads now</option>
                    <option value="want-more">I get some leads but want more</option>
                    <option value="from-scratch">I'm building from scratch</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className={LABEL_STYLE} style={MONO}>Monthly Marketing Budget *</label>
                  <select name="monthly_budget" required value={form.monthly_budget} onChange={set} className={FIELD_STYLE}>
                    <option value="">Select your budget range</option>
                    <option value="under-2500">Under $2,500</option>
                    <option value="2500-5000">$2,500 – $5,000</option>
                    <option value="5000-10000">$5,000 – $10,000</option>
                    <option value="10000-plus">$10,000+</option>
                  </select>
                </div>

                {/* Goal */}
                <div>
                  <label className={LABEL_STYLE} style={MONO}>Primary Goal *</label>
                  <select name="goal" required value={form.goal} onChange={set} className={FIELD_STYLE}>
                    <option value="">Select your primary goal</option>
                    <option value="more-calls">More calls</option>
                    <option value="more-form-leads">More form leads</option>
                    <option value="booked-consultations">More booked consultations</option>
                    <option value="local-visibility">Better local visibility</option>
                    <option value="exclusive-system">Exclusive market system</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className={LABEL_STYLE} style={MONO}>What do you want to dominate in your market?</label>
                  <textarea name="notes" rows={3} value={form.notes} onChange={set} placeholder="Describe the types of clients or cases you want more of..." className={FIELD_STYLE + " resize-none"} />
                </div>

                {error && (
                  <p className="text-red-600 text-sm" style={MONO}>{error}</p>
                )}

                <button type="submit" disabled={loading} className="w-full btn-primary text-center flex items-center justify-center gap-3 disabled:opacity-60">
                  {loading ? (
                    <><span className="inline-block w-4 h-4 border border-white border-t-transparent rounded-full" style={{ animation: 'spin 1s linear infinite' }} />Submitting...</>
                  ) : 'Submit Market Request'}
                </button>

                <p className="text-center text-[#AAAAAA] text-xs tracking-wider" style={MONO}>
                  One market per system. We respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
