import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FlashPreviews Consulting Group',
  description: 'Privacy Policy for FlashPreviews Consulting Group. Learn how we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.flashpreviewsconsultinggroup.com/privacy' },
};

const S = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 } as React.CSSProperties;
const M = { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties;
import React from 'react';

const SECTIONS = [
  { title: '1. Information We Collect', body: 'We collect information you voluntarily provide when you submit our intake form, including your name, business name, email address, phone number, business type, target market, and goals. We may also collect basic usage data such as pages visited and time spent on our website through standard web analytics.' },
  { title: '2. How We Use Your Information', body: 'We use the information you provide to evaluate your market request, contact you regarding our services, send you relevant communications about your inquiry, and improve our services. We do not sell your personal information to third parties.' },
  { title: '3. Data Storage', body: 'Your information is stored securely using Supabase, a PostgreSQL-based database platform with industry-standard encryption. We retain your data for as long as necessary to provide our services and fulfill our legal obligations.' },
  { title: '4. Third-Party Services', body: 'We use the following third-party services: Supabase (database storage), Resend (email notifications), Vercel (website hosting), and Anthropic Claude API (AI chat assistant). Each of these services has their own privacy policies and data handling practices.' },
  { title: '5. Cookies', body: 'Our website may use essential cookies necessary for basic site functionality. We do not use tracking cookies or third-party advertising cookies. You may disable cookies in your browser settings, though this may affect certain site features.' },
  { title: '6. Your Rights', body: 'You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at flashpreviews@gmail.com. We will respond to all requests within 30 days.' },
  { title: '7. Children\'s Privacy', body: 'Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.' },
  { title: '8. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of our services after changes constitutes acceptance of the updated policy.' },
  { title: '9. Contact Us', body: 'If you have questions about this Privacy Policy, please contact us at: FlashPreviews Consulting Group, 8549 Wilshire Blvd Suite 535, Beverly Hills, CA 90211. Email: flashpreviews@gmail.com. Phone: (310) 846-1658.' },
];

export default function Privacy() {
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
            <h1 style={{ ...S, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111', marginBottom: '1rem' }}>Privacy Policy</h1>
            <p style={{ ...M, fontSize: '0.75rem', color: '#888', letterSpacing: '0.1em' }}>Last updated: April 4, 2026</p>
          </div>
        </section>

        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="fp-container">
            <div style={{ maxWidth: '760px' }}>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '3rem' }}>
                FlashPreviews Consulting Group ("we," "us," or "our") operates the website at flashpreviewsconsultinggroup.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an inquiry.
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
