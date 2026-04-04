import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | FlashPreviews Consulting Group',
  description: 'Accessibility Statement for FlashPreviews Consulting Group. Our commitment to WCAG 2.1 AA compliance and digital accessibility.',
  alternates: { canonical: 'https://www.flashpreviewsconsultinggroup.com/accessibility' },
};

const S = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 } as React.CSSProperties;
const M = { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties;
import React from 'react';

export default function Accessibility() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <Navigation />
      <main id="main-content" role="main">
        <section style={{ paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #E5E5E5' }}>
          <div className="fp-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div className="gold-rule-short" aria-hidden="true" />
              <span className="section-label">ADA Compliance</span>
            </div>
            <h1 style={{ ...S, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111', marginBottom: '1rem' }}>Accessibility Statement</h1>
            <p style={{ ...M, fontSize: '0.75rem', color: '#888', letterSpacing: '0.1em' }}>Last updated: April 4, 2026</p>
          </div>
        </section>

        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="fp-container">
            <div style={{ maxWidth: '760px' }}>

              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '3rem' }}>
                FlashPreviews Consulting Group is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>

              {[
                {
                  title: 'Our Commitment',
                  body: 'We are committed to making our website accessible to all users, including those with disabilities. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, which defines requirements for designers and developers to improve accessibility for people with disabilities.',
                },
                {
                  title: 'Measures We Take',
                  body: 'To ensure accessibility, FlashPreviews Consulting Group takes the following measures: includes skip navigation links on all pages, uses proper heading hierarchy throughout the site, provides descriptive alt text for all meaningful images, ensures all interactive elements are keyboard accessible, provides visible focus indicators for keyboard navigation, uses sufficient color contrast ratios, includes ARIA labels and landmarks for screen reader navigation, ensures forms have properly associated labels and error messages, and tests the site with multiple screen sizes and assistive technologies.',
                },
                {
                  title: 'Conformance Status',
                  body: 'This website is designed to be partially conformant with WCAG 2.1 Level AA. "Partially conformant" means that some parts of the content do not fully conform to the accessibility standard. We are actively working to identify and resolve any remaining issues.',
                },
                {
                  title: 'Technical Specifications',
                  body: 'Our website relies on the following technologies for conformance with WCAG 2.1: HTML5, CSS3, JavaScript (React/Next.js), and WAI-ARIA. These technologies are relied upon for conformance with the accessibility standards used.',
                },
                {
                  title: 'Known Limitations',
                  body: 'We are aware that some older content or third-party embedded components may not fully meet accessibility standards. We are actively working to identify and remediate these issues. If you encounter a specific barrier, please contact us so we can address it promptly.',
                },
                {
                  title: 'Feedback and Contact',
                  body: 'We welcome your feedback on the accessibility of this website. If you experience accessibility barriers, please contact us: Email: flashpreviews@gmail.com | Phone: (310) 846-1658 | Address: 8549 Wilshire Blvd Suite 535, Beverly Hills, CA 90211. We aim to respond to accessibility feedback within 2 business days.',
                },
                {
                  title: 'Formal Complaints',
                  body: 'If you are not satisfied with our response to your accessibility feedback, you may contact the U.S. Department of Justice ADA Information Line at 1-800-514-0301 (voice) or 1-800-514-0383 (TTY), or file a complaint with the appropriate government authority.',
                },
              ].map((s, i, arr) => (
                <div key={i} style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: i < arr.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
                  <h2 style={{ ...S, fontSize: '1.3rem', color: '#111', marginBottom: '0.85rem' }}>{s.title}</h2>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>{s.body}</p>
                </div>
              ))}

              <div style={{ borderLeft: '3px solid #B8860B', paddingLeft: '1.5rem', marginTop: '2rem' }}>
                <p style={{ ...M, fontSize: '0.68rem', color: '#B8860B', letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Direct Contact</p>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>
                  For immediate accessibility assistance, call us at{' '}
                  <a href="tel:3108461658" style={{ color: '#111', fontWeight: 600 }} aria-label="Call 310-846-1658">(310) 846-1658</a>{' '}
                  or email{' '}
                  <a href="mailto:flashpreviews@gmail.com" style={{ color: '#111', fontWeight: 600 }}>flashpreviews@gmail.com</a>.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
