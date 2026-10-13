"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArmuxLogo from "./ArmuxLogo";
import { Menu, X, ChevronRight, ChevronDown, PhoneCall, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "CUSTOMIZATION TEAMWEAR", href: "/teamwear" },
    { name: "BASKETBALL", href: "/basketball" },
    { name: "ACCESSORIES", href: "/accessories" },
    { name: "CONTACT", href: "/contact" },
  ];

  const productCategories = [
    { name: "ALL PRODUCTS", href: "/products", desc: "Full teamwear & equipment catalog" },
    { name: "HOODIES", href: "/hoodies", desc: "Pullover & striped team hoodies in 5 colors" },
    { name: "WARM UP SUITS", href: "/warmup-suits", desc: "Full-zip tracksuits & sideline travel kits" },
    { name: "TRAINING SUITS", href: "/training-suits", desc: "1/4 zip drill suits & agility track kits" },
    { name: "COMPRESSION GEAR", href: "/compression", desc: "Vascular support tops & muscle recovery tights" },
    { name: "CUSTOM UNIFORMS", href: "/products?category=UNIFORMS", desc: "Youth, kids, girls & coach uniforms" },
    { name: "GAME JERSEYS", href: "/products?category=JERSEYS", desc: "Elite, legacy & reversible singlets" },
    { name: "SPORTS ACCESSORIES", href: "/accessories", desc: "Headbands, sleeves, socks & basketballs" },
  ];

  // Auto-detect which category matches current URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const full = window.location.pathname + window.location.search;
      const matched = productCategories.find((cat) => {
        if (cat.href === "/products") {
          return window.location.pathname === "/products" && !window.location.search;
        }
        if (cat.href.includes("?")) {
          return full === cat.href;
        }
        return window.location.pathname === cat.href;
      });
      if (matched) {
        setSelectedCategory(matched.name);
      }
    }
  }, [pathname]);

  const isCategoryActive = (item: { name: string; href: string }) => {
    if (selectedCategory) {
      return selectedCategory === item.name;
    }
    if (typeof window !== "undefined") {
      const full = window.location.pathname + window.location.search;
      if (item.href === "/products") {
        return window.location.pathname === "/products" && !window.location.search;
      }
      if (item.href.includes("?")) {
        return full === item.href;
      }
      return window.location.pathname === item.href;
    }
    return pathname === item.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center shrink-0 transform hover:scale-105 transition-transform duration-200">
            <ArmuxLogo size="sm" showTagline={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/products" && pathname.startsWith("/products"));
              
              if (link.name === "PRODUCTS") {
                return (
                  <div key={link.name} className="relative group shrink-0">
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 text-xs font-bold tracking-wider transition-all duration-200 uppercase flex items-center gap-1 rounded-lg hover:bg-white/5 whitespace-nowrap ${
                        isActive
                          ? "text-amber-400"
                          : "text-zinc-300 hover:text-amber-300"
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 text-amber-400/80 shrink-0" />
                      {isActive ? (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                      ) : (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </Link>

                    {/* Products Dropdown Menu */}
                    <div className="absolute top-full left-0 w-80 pt-2 hidden group-hover:block transition-all duration-200 z-[100]">
                      <div className="bg-[#09090b] border-2 border-amber-500/40 rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.95)] space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-3 py-1.5 border-b border-zinc-800 mb-1 flex items-center justify-between">
                          <span className="text-[10px] font-black text-amber-400 tracking-widest uppercase">
                            PRODUCT CATEGORIES
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        </div>
                        {productCategories.map((item) => {
                          const isActive = isCategoryActive(item);
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setSelectedCategory(item.name)}
                              className={`flex flex-col px-3 py-2.5 rounded-xl transition-all duration-200 hover:translate-x-1.5 hover:shadow-lg ${
                                isActive
                                    ? "bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/60 shadow-[0_0_15px_rgba(251,191,36,0.18)]"
                                  : "bg-[#121215] hover:bg-[#1c1c24] border border-zinc-800/80 hover:border-amber-500/50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-xs font-black uppercase tracking-wider transition-colors ${
                                    isActive ? "text-amber-400" : "text-white group-hover:text-amber-300"
                                  }`}
                                >
                                  {item.name}
                                </span>
                                {isActive ? (
                                  <span className="text-[9px] font-black bg-amber-400 text-black px-1.5 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                                    ACTIVE
                                  </span>
                                ) : item.name === "HOODIES" ? (
                                  <span className="text-[9px] font-black bg-zinc-800 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded uppercase">
                                    HOT
                                  </span>
                                ) : null}
                              </div>
                              <span
                                className={`text-[10px] mt-0.5 font-medium transition-colors ${
                                  isActive ? "text-amber-200/90 font-semibold" : "text-zinc-400 group-hover:text-zinc-300"
                                }`}
                              >
                                {item.desc}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-xs font-bold tracking-wider transition-all duration-200 uppercase rounded-lg hover:bg-white/5 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-amber-400"
                      : "text-zinc-300 hover:text-amber-300"
                  }`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  ) : (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-400 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-xs uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded hover-shine btn-hover-glow transition-all duration-300 shadow-lg shadow-amber-500/25 group border border-amber-300/40"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                GET A QUOTE
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>


          {/* Mobile Hamburger Toggle */}
          <div className="xl:hidden flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-black bg-amber-400 rounded lg:hidden"
            >
              QUOTE
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-amber-400" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-amber-500/20 px-4 pt-4 pb-8 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.name === "PRODUCTS") {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400 border-l-4 border-amber-400"
                          : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-amber-400" : "text-zinc-500"}`} />
                    </button>

                    {mobileProductsOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-1.5 bg-[#09090b] rounded-xl border border-amber-500/30">
                        {productCategories.map((item) => {
                          const isActive = isCategoryActive(item);
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => {
                                setSelectedCategory(item.name);
                                setMobileMenuOpen(false);
                              }}
                              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                                isActive
                                  ? "text-amber-400 bg-amber-500/20 border border-amber-500/60 shadow-sm"
                                  : "text-zinc-300 hover:text-white bg-[#121215] border border-zinc-800/80"
                              }`}
                            >
                              <span>{item.name}</span>
                              {isActive ? (
                                <span className="text-[9px] bg-amber-400 text-black px-1.5 py-0.5 rounded font-black tracking-wider shadow-sm">
                                  ACTIVE
                                </span>
                              ) : item.name === "HOODIES" ? (
                                <span className="text-[9px] bg-zinc-800 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded font-black">
                                  HOT
                                </span>
                              ) : null}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 border-l-4 border-amber-400"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col space-y-3">
            <Link
              href="/contact"
              className="w-full text-center py-3 px-4 font-bold text-xs uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded shadow-lg shadow-amber-500/20"
            >
              GET A QUOTE
            </Link>
            <a
              href="https://wa.me/923201713838"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-4 font-bold text-xs uppercase tracking-widest text-zinc-300 bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center gap-2 hover:border-amber-400/50"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              WHATSAPP: +92 320 1713838
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
