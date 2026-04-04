import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.flashpreviews.com'),
  title: 'FlashPreviews Consulting Group | Lead Generation Systems',
  description: 'We build programmatic SEO systems, lead generation engines, and automated client acquisition infrastructure for attorneys, real estate professionals, and business owners. Beverly Hills, CA.',
  alternates: { canonical: 'https://www.flashpreviews.com' },
  openGraph: {
    type: 'website',
    url: 'https://www.flashpreviews.com',
    siteName: 'FlashPreviews Consulting Group',
    title: 'FlashPreviews Consulting Group | Lead Generation Systems',
    description: 'We build systems that generate high-intent leads — not just websites.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
