'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'border-b border-[#E5E5E5]' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }} className="text-[#111111] text-xl md:text-2xl tracking-tight">FlashPreviews</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#B8860B] text-[0.55rem] tracking-[0.25em] uppercase">Consulting Group</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/case-study" className="nav-link">Case Study</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <a href="tel:3104373343" style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[0.75rem] text-[#444444] tracking-wider">(310) 437-3343</a>
            <Link href="/contact" className="btn-primary text-sm py-3 px-6">Get Leads</Link>
          </nav>

          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-px bg-[#111111] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-[#111111] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-[#111111] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E5E5] px-6 py-8 flex flex-col gap-6">
          <Link href="/" className="nav-link text-base">Home</Link>
          <Link href="/case-study" className="nav-link text-base">Case Study</Link>
          <Link href="/contact" className="nav-link text-base">Contact</Link>
          <a href="tel:3104373343" style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-sm text-[#444444]">(310) 437-3343</a>
          <Link href="/contact" className="btn-primary text-center">Get Leads for My Business</Link>
        </div>
      )}
    </header>
  );
}
