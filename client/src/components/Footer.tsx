/**
 * Footer — "Clean White Authority" design system
 * Minimal dark footer with contact info and navigation
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-[#F0EDE8]">
      <div className="container py-16 md:py-20">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                className="text-white text-2xl tracking-tight block"
              >
                FlashPreviews
              </span>
              <span
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-[#B8860B] text-[0.6rem] tracking-[0.25em] uppercase"
              >
                Consulting Group
              </span>
            </div>
            <p className="text-[#888888] text-sm leading-relaxed">
              We build systems that generate high-intent leads — not just websites.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
            <div>
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase mb-4"
              >
                Pages
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-[#888888] hover:text-white text-sm transition-colors">Home</Link>
                <Link href="/case-study" className="text-[#888888] hover:text-white text-sm transition-colors">Case Study</Link>
                <Link href="/contact" className="text-[#888888] hover:text-white text-sm transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-[#B8860B] text-[0.65rem] tracking-[0.2em] uppercase mb-4"
              >
                Contact
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:3104373343" className="text-[#888888] hover:text-white text-sm transition-colors">
                  (310) 437-3343
                </a>
                <a href="mailto:info@flashpreviews.com" className="text-[#888888] hover:text-white text-sm transition-colors">
                  info@flashpreviews.com
                </a>
                <p className="text-[#888888] text-sm">
                  8549 Wilshire Blvd #535<br />Beverly Hills, CA 90211
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gold rule */}
        <div className="h-px bg-[#2A2A2A] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-[#555555] text-xs tracking-wider"
          >
            © {new Date().getFullYear()} FlashPreviews Consulting Group. All rights reserved.
          </p>
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-[#555555] text-xs tracking-wider"
          >
            Beverly Hills, CA — Est. 2014
          </p>
        </div>
      </div>
    </footer>
  );
}
