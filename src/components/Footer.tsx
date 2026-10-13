import React from "react";
import Link from "next/link";
import ArmuxLogo from "./ArmuxLogo";
import { Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <ArmuxLogo size="lg" showTagline={true} />
            <p className="text-xs uppercase font-semibold text-amber-400 tracking-widest pt-2">
              WEAR IT. GEAR UP.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              Custom basketball wear and gear built around your team&apos;s identity. Lightweight, breathable and engineered for peak athletic performance.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/in/anum-fatima-356092423?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1DefhQb8Cj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/armuxofficial?exln=MWI1Y3IydGM4bTVwNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:pl-8">
            <h3 className="text-white text-sm font-bold uppercase tracking-widest border-l-2 border-amber-400 pl-3">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Teamwear & Customization", href: "/teamwear" },
                { name: "Basketball Collection", href: "/basketball" },
                { name: "Accessories", href: "/accessories" },
                { name: "Contact / Get a Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-all duration-200 flex items-center gap-1.5 group py-0.5 hover:translate-x-1.5"
                  >
                    <span className="text-xs text-amber-500 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">›</span>
                    <span className="group-hover:text-amber-300 transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-widest border-l-2 border-amber-400 pl-3">
              CATEGORIES
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Performance Basketball Hoodies", href: "/hoodies" },
                { name: "Warm Up Suits & Tracksuits", href: "/warmup-suits" },
                { name: "Precision Training & Drill Suits", href: "/training-suits" },
                { name: "Graduated Compression Gear", href: "/compression" },
                { name: "Elite Basketball Jerseys", href: "/basketball" },
                { name: "Performance Accessories", href: "/accessories" },
                { name: "Full Teamwear Customization", href: "/teamwear" },
              ].map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="hover:text-amber-400 transition-all duration-200 flex items-center gap-1.5 group py-0.5 hover:translate-x-1.5"
                  >
                    <span className="text-xs text-amber-500 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">›</span>
                    <span className="group-hover:text-amber-300 transition-colors">{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-widest border-l-2 border-amber-400 pl-3">
              GET IN TOUCH
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/923201713838"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-amber-400 transition-all p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/60 hover:bg-zinc-900 hover:-translate-y-0.5 hover:shadow-lg group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-semibold">WHATSAPP / PHONE</div>
                  <div className="font-bold text-zinc-200 group-hover:text-amber-300 transition-colors">+92 320 1713838</div>
                </div>
              </a>

              <a
                href="mailto:info@armuxofficial.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-amber-400 transition-all p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/60 hover:bg-zinc-900 hover:-translate-y-0.5 hover:shadow-lg group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] text-zinc-500 uppercase font-semibold">GENERAL INQUIRIES</div>
                  <div className="font-bold text-zinc-200 truncate group-hover:text-amber-300 transition-colors">info@armuxofficial.com</div>
                </div>
              </a>

              <a
                href="mailto:sales@armuxofficial.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-amber-400 transition-all p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/60 hover:bg-zinc-900 hover:-translate-y-0.5 hover:shadow-lg group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] text-zinc-500 uppercase font-semibold">SALES DEPARTMENT</div>
                  <div className="font-bold text-zinc-200 truncate group-hover:text-amber-300 transition-colors">sales@armuxofficial.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-zinc-400 p-2">
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-medium text-xs">armuxofficial.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 ARMUX. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-zinc-600">PREMIUM BASKETBALL WEAR & GEAR</span>
            <Link href="/contact" className="text-amber-400 hover:underline flex items-center gap-1">
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
