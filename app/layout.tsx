import type { Metadata } from 'next';
import ChatWidget from '@/components/ChatWidget';
import './globals.css';

const DOMAIN = 'https://www.flashpreviewsconsultinggroup.com';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: 'Lead Generation Systems for Attorneys, Real Estate & Local Businesses | FlashPreviews Consulting Group',
  description: 'FlashPreviews Consulting Group builds programmatic SEO systems, lead generation engines, and bilingual acquisition infrastructure that turn search demand into qualified leads. Beverly Hills, CA.',
  keywords: 'lead generation systems, programmatic SEO, qualified leads, bilingual lead generation, attorney lead generation, real estate lead generation, local business lead generation, client acquisition systems',
  alternates: { canonical: DOMAIN },
  openGraph: {
    type: 'website', url: DOMAIN, siteName: 'FlashPreviews Consulting Group',
    title: 'Lead Generation Systems for Attorneys, Real Estate & Local Businesses | FlashPreviews Consulting Group',
    description: 'FlashPreviews Consulting Group builds programmatic SEO systems, lead generation engines, and bilingual acquisition infrastructure that turn search demand into qualified leads.',
    images: [{ url: `${DOMAIN}/og-image.jpg`, width: 1200, height: 630, alt: 'FlashPreviews Consulting Group' }],
  },
  twitter: { card: 'summary_large_image', title: 'FlashPreviews Consulting Group | Lead Generation Systems', description: 'We build systems that generate high-intent leads — not just websites.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${DOMAIN}/#organization`,
        name: 'FlashPreviews Consulting Group',
        url: DOMAIN,
        telephone: '(310) 846-1658',
        email: 'flashpreviews@gmail.com',
        foundingDate: '2014',
        address: { '@type': 'PostalAddress', streetAddress: '8549 Wilshire Blvd Suite 535', addressLocality: 'Beverly Hills', addressRegion: 'CA', postalCode: '90211', addressCountry: 'US' },
        description: 'FlashPreviews Consulting Group builds programmatic SEO systems, lead generation engines, and bilingual acquisition infrastructure for attorneys, real estate professionals, and local businesses.',
        areaServed: { '@type': 'Country', name: 'United States' },
        knowsAbout: ['Programmatic SEO', 'Lead Generation', 'Bilingual Marketing', 'Attorney Marketing', 'Real Estate Marketing'],
      },
      {
        '@type': 'WebSite',
        '@id': `${DOMAIN}/#website`,
        url: DOMAIN, name: 'FlashPreviews Consulting Group',
        publisher: { '@id': `${DOMAIN}/#organization` },
        potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${DOMAIN}/contact` }, 'query-input': 'required name=search_term_string' },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${DOMAIN}/#service`,
        name: 'Lead Generation Systems',
        provider: { '@id': `${DOMAIN}/#organization` },
        description: 'Programmatic SEO systems and lead generation engines deployed across 482 California cities and 51 legal service categories — English and Spanish. From Calexico to Redding.',
        areaServed: { '@type': 'Country', name: 'United States' },
        serviceType: ['Programmatic SEO', 'Lead Generation', 'Bilingual Acquisition Systems'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What kind of businesses do you build lead systems for?', acceptedAnswer: { '@type': 'Answer', text: 'We primarily work with attorneys, real estate professionals, and local service businesses that need consistent inbound leads.' } },
          { '@type': 'Question', name: 'What is a programmatic SEO system?', acceptedAnswer: { '@type': 'Answer', text: 'A programmatic SEO system deploys thousands of targeted pages at scale, each engineered to rank for specific high-intent search queries, capturing demand across an entire market.' } },
          { '@type': 'Question', name: 'Do you only build websites?', acceptedAnswer: { '@type': 'Answer', text: 'No. We build lead generation infrastructure. The result includes a website, but the goal is qualified inbound leads — not a digital brochure.' } },
          { '@type': 'Question', name: 'How do leads get delivered?', acceptedAnswer: { '@type': 'Answer', text: 'Leads are captured and delivered directly to your inbox and phone in real time. No shared lead pools, no middlemen.' } },
          { '@type': 'Question', name: 'Do you work exclusively by market?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build one system per market per vertical. Once your market is claimed, we do not build a competing system for another operator.' } },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <link rel="canonical" href={DOMAIN} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
