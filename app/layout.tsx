import type { Metadata } from 'next';
import ChatWidget from '@/components/ChatWidget';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.flashpreviews.com'),
  title: 'Lead Generation Systems for Attorneys, Real Estate & Local Businesses | FlashPreviews Consulting Group',
  description: 'FlashPreviews Consulting Group builds programmatic SEO systems, lead generation engines, and bilingual acquisition infrastructure that turn search demand into qualified leads.',
  keywords: 'lead generation systems, programmatic SEO, qualified leads, bilingual lead generation, attorney lead generation, real estate lead generation, local business lead generation, client acquisition systems',
  alternates: { canonical: 'https://www.flashpreviews.com' },
  openGraph: {
    type: 'website',
    url: 'https://www.flashpreviews.com',
    siteName: 'FlashPreviews Consulting Group',
    title: 'Lead Generation Systems for Attorneys, Real Estate & Local Businesses | FlashPreviews Consulting Group',
    description: 'FlashPreviews Consulting Group builds programmatic SEO systems, lead generation engines, and bilingual acquisition infrastructure that turn search demand into qualified leads.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'FlashPreviews Consulting Group — Lead Generation Systems' }],
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
        '@id': 'https://www.flashpreviews.com/#organization',
        name: 'FlashPreviews Consulting Group',
        url: 'https://www.flashpreviews.com',
        telephone: '(310) 846-1658',
        email: 'flashpreviews@gmail.com',
        address: { '@type': 'PostalAddress', streetAddress: '8549 Wilshire Blvd Suite 535', addressLocality: 'Beverly Hills', addressRegion: 'CA', postalCode: '90211', addressCountry: 'US' },
        foundingDate: '2014',
        description: 'FlashPreviews Consulting Group builds programmatic SEO systems, lead generation engines, and bilingual acquisition infrastructure for attorneys, real estate professionals, and local businesses.',
        areaServed: { '@type': 'Country', name: 'United States' },
        knowsAbout: ['Programmatic SEO', 'Lead Generation', 'Bilingual Marketing', 'Attorney Marketing', 'Real Estate Marketing'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.flashpreviews.com/#website',
        url: 'https://www.flashpreviews.com',
        name: 'FlashPreviews Consulting Group',
        publisher: { '@id': 'https://www.flashpreviews.com/#organization' },
      },
      {
        '@type': 'Service',
        '@id': 'https://www.flashpreviews.com/#service',
        name: 'Lead Generation Systems',
        provider: { '@id': 'https://www.flashpreviews.com/#organization' },
        description: 'Programmatic SEO systems, lead generation engines, and bilingual acquisition infrastructure that turn search demand into qualified leads.',
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: { '@type': 'Audience', audienceType: 'Attorneys, Real Estate Professionals, Local Service Businesses' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What kind of businesses do you build lead systems for?', acceptedAnswer: { '@type': 'Answer', text: 'We primarily work with attorneys, real estate professionals, and local service businesses that need consistent inbound leads rather than relying only on referrals or paid advertising.' } },
          { '@type': 'Question', name: 'What is a programmatic SEO system?', acceptedAnswer: { '@type': 'Answer', text: 'A programmatic SEO system deploys thousands of targeted pages at scale, each engineered to rank for specific high-intent search queries. Instead of one or two pages, we build hundreds or thousands — capturing demand across an entire market.' } },
          { '@type': 'Question', name: 'Do you only build websites?', acceptedAnswer: { '@type': 'Answer', text: 'No. We build lead generation infrastructure. The result includes a website, but the goal is qualified inbound leads — not a digital brochure.' } },
          { '@type': 'Question', name: 'How do leads get delivered?', acceptedAnswer: { '@type': 'Answer', text: 'Leads are captured through the system and delivered directly to your inbox and phone in real time. No shared lead pools, no middlemen.' } },
          { '@type': 'Question', name: 'Do you work exclusively by market?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build one system per market per vertical. Once your market is claimed, we do not build a competing system for another operator in the same space.' } },
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
      </head>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
