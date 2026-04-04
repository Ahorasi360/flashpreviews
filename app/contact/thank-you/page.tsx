import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Received | FlashPreviews Consulting Group',
  description: 'Your market request has been received. We review fit based on market, category, and current system availability.',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content" role="main">

        <section className="pt-32 md:pt-40 pb-16 border-b border-[#E5E5E5]">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule-short" aria-hidden="true" />
              <span className="section-label">Request Received</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-[#111111] leading-tight max-w-2xl" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:700 }}>
              Thank You.
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28" aria-label="Next steps">
          <div className="container">
            <div className="max-w-xl">
              <blockquote className="gold-callout mb-12">
                <p className="text-[#111111] text-xl md:text-2xl leading-relaxed" style={{ fontFamily:"'Cormorant Garamond', serif", fontStyle:'italic' }}>
                  Your market request has been received. We review fit based on market, category, and current system availability.
                </p>
              </blockquote>

              <ol className="border-t border-[#E5E5E5]" aria-label="What happens next">
                {[
                  { num:'01', title:'Market Review',           desc:"We'll assess your market, vertical, and whether a system is currently available in your space." },
                  { num:'02', title:'Response Within 24 Hours',desc:"If there's a fit, we'll reach out to schedule a brief strategy call." },
                  { num:'03', title:'System Design',           desc:"If we move forward, we design and deploy your lead generation system." },
                ].map(item => (
                  <li key={item.num} className="flex gap-6 py-6 border-b border-[#F0F0F0] list-none">
                    <span className="text-[#B8860B] text-xs shrink-0 mt-0.5" style={{ fontFamily:"'JetBrains Mono', monospace" }} aria-hidden="true">{item.num}</span>
                    <div>
                      <p className="text-[#111111] text-sm font-medium mb-1">{item.title}</p>
                      <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <nav className="mt-12 flex flex-col sm:flex-row gap-4" aria-label="Continue navigation">
                <Link href="/" className="btn-primary text-center">Back to Home</Link>
                <Link href="/case-study" className="btn-ghost text-center">View Case Study</Link>
              </nav>

              <div className="mt-10 flex items-center gap-6">
                <div className="h-px w-8 bg-[#B8860B]" aria-hidden="true" />
                <p style={{ fontFamily:"'JetBrains Mono', monospace" }} className="text-[#888888] text-xs tracking-widest uppercase">
                  Questions?{' '}
                  <a href="tel:3108461658" aria-label="Call us at 310-846-1658" style={{ color:'inherit' }}>
                    Call (310) 846-1658
                  </a>
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
