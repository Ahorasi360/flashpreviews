import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0E0E0E', color: '#ffffff', fontFamily: "'DM Sans', sans-serif" }} role="contentinfo">
      <div className="fp-container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>

        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '3rem' }}>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.6rem', display: 'block' }}>FlashPreviews</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#B8860B', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' as const }}>Consulting Group</span>
            </div>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: 1.65 }}>
              We build systems that generate high-intent leads — not just websites.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#B8860B', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginBottom: '1rem' }}>Pages</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.6rem' }}>
                <Link href="/" style={{ color: '#cccccc', fontSize: '0.9rem', textDecoration: 'none' }}>Home</Link>
                <Link href="/case-study" style={{ color: '#cccccc', fontSize: '0.9rem', textDecoration: 'none' }}>Case Study</Link>
                <Link href="/contact" style={{ color: '#cccccc', fontSize: '0.9rem', textDecoration: 'none' }}>Contact</Link>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#B8860B', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginBottom: '1rem' }}>Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.6rem' }}>
                <a href="tel:3108461658" style={{ color: '#cccccc', fontSize: '0.9rem', textDecoration: 'none' }} aria-label="Call 310-846-1658">(310) 846-1658</a>
                <a href="mailto:flashpreviews@gmail.com" style={{ color: '#cccccc', fontSize: '0.9rem', textDecoration: 'none' }}>flashpreviews@gmail.com</a>
                <p style={{ color: '#cccccc', fontSize: '0.875rem', lineHeight: 1.55, margin: 0 }}>8549 Wilshire Blvd #535<br />Beverly Hills, CA 90211</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#2A2A2A', marginBottom: '1.25rem' }} aria-hidden="true" />

        {/* Legal bottom row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#666666', fontSize: '0.68rem', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} FlashPreviews Consulting Group. All rights reserved.
          </p>
          <nav aria-label="Legal navigation" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            {[
              { href: '/privacy',       label: 'Privacy Policy' },
              { href: '/terms',         label: 'Terms of Service' },
              { href: '/accessibility', label: 'Accessibility' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ fontFamily: "'JetBrains Mono', monospace", color: '#666666', fontSize: '0.68rem', letterSpacing: '0.06em', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}
