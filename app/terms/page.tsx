import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FlashPreviews Consulting Group',
  description: 'Terms of Service for FlashPreviews Consulting Group lead generation systems and consulting services.',
  alternates: { canonical: 'https://www.flashpreviewsconsultinggroup.com/terms' },
};

const S = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 } as React.CSSProperties;
const M = { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties;
import React from 'react';

const SECTIONS = [
  { title: '1. Services', body: 'FlashPreviews Consulting Group provides digital marketing consulting services including programmatic SEO system development, lead generation infrastructure, and related services. All services are provided as described in individual service agreements or proposals.' },
  { title: '2. Market Exclusivity', body: 'When agreed upon in writing, FlashPreviews may offer exclusive market arrangements. Exclusivity is limited to the specific market, geographic area, and service vertical defined in the service agreement. Exclusivity is not guaranteed until a signed agreement and payment are received.' },
  { title: '3. No Guarantee of Results', body: 'While we build systems designed to generate leads, we cannot guarantee specific results, rankings, traffic levels, or lead volumes. SEO and lead generation outcomes depend on many factors outside our control including market conditions, algorithm changes, and competitor activity.' },
  { title: '4. Payment', body: 'Payment terms are defined in individual service agreements. All fees are non-refundable unless otherwise specified in writing. We reserve the right to suspend or terminate services for non-payment.' },
  { title: '5. Intellectual Property', body: 'Upon full payment, clients receive a license to use the deliverables created for them. FlashPreviews retains rights to methodologies, frameworks, and tools developed independently. We reserve the right to reference completed projects in our portfolio unless a non-disclosure agreement is in place.' },
  { title: '6. Confidentiality', body: 'We treat all client business information as confidential. We do not share client-specific data, strategies, or market positioning with competitors or third parties without written consent.' },
  { title: '7. Limitation of Liability', body: 'FlashPreviews Consulting Group\'s liability is limited to the amount paid for services in the preceding 30 days. We are not liable for indirect, incidental, or consequential damages arising from use of our services.' },
  { title: '8. Termination', body: 'Either party may terminate services with 30 days written notice unless otherwise specified in the service agreement. Upon termination, client retains ownership of all completed deliverables paid for in full.' },
  { title: '9. Governing Law', body: 'These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of Los Angeles County, California.' },
  { title: '10. Contact', body: 'Questions about these terms should be directed to: FlashPreviews Consulting Group, 8549 Wilshire Blvd Suite 535, Beverly Hills, CA 90211. Email: flashpreviews@gmail.com. Phone: (310) 846-1658.' },
];

export default function Terms() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <Navigation />
      <main id="main-content" role="main">
        <section style={{ paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #E5E5E5' }}>
          <div className="fp-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div className="gold-rule-short" aria-hidden="true" />
              <span className="section-label">Legal</span>
            </div>
            <h1 style={{ ...S, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111', marginBottom: '1rem' }}>Terms of Service</h1>
            <p style={{ ...M, fontSize: '0.75rem', color: '#888', letterSpacing: '0.1em' }}>Last updated: April 4, 2026</p>
          </div>
        </section>

        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="fp-container">
            <div style={{ maxWidth: '760px' }}>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '3rem' }}>
                By engaging FlashPreviews Consulting Group for services or submitting an inquiry through our website, you agree to these Terms of Service. Please read them carefully before proceeding.
              </p>
              {SECTIONS.map((s, i) => (
                <div key={i} style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: i < SECTIONS.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
                  <h2 style={{ ...S, fontSize: '1.3rem', color: '#111', marginBottom: '0.85rem' }}>{s.title}</h2>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
