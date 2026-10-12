"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  ChevronRight, 
  Layers, 
  Scissors, 
  Wind, 
  PackageCheck,
  Palette
} from "lucide-react";

export default function HoodiesPage() {
  const colorways = [
    {
      id: "black_gold",
      name: "BLACK & GOLD EDITION",
      colorName: "Pitch Black & Metallic Gold",
      hex: "#111111",
      accent: "#f59e0b",
      image: "/images/hoodie_black_gold.jpg?v=apparel1",
      badge: "FLAGSHIP BESTSELLER",
      description: "Heavyweight athletic fleece in pitch black with luxurious gold inner hood lining, custom brass eyelets, and metallic gold ARMUX chest emblem."
    },
    {
      id: "red_black",
      name: "RED & BLACK EDITION",
      colorName: "Crimson Red & Stealth Black",
      hex: "#dc2626",
      accent: "#111111",
      image: "/images/hoodie_red_black.jpg?v=apparel1",
      badge: "GAME DAY SPECIAL",
      description: "Aggressive two-tone color blocking featuring deep crimson torso, stealth black sleeves, and contrast drawstrings with high-density silicone ARMUX branding."
    },
    {
      id: "white_gold",
      name: "WHITE & GOLD EDITION",
      colorName: "Pure White & Polished Gold",
      hex: "#f4f4f5",
      accent: "#d97706",
      image: "/images/hoodie_white_gold.jpg?v=apparel1",
      badge: "PREMIUM SIGNATURE",
      description: "Crisp optical white athletic pullover with satin gold interior hood lining, gold metallic drawstring tips, and subtle embroidered ARMUX chest insignia."
    },
    {
      id: "yellow_black",
      name: "YELLOW & BLACK EDITION",
      colorName: "Vibrant Yellow & Jet Black",
      hex: "#eab308",
      accent: "#18181b",
      image: "/images/hoodie_yellow_black.jpg?v=apparel1",
      badge: "HIGH VISIBILITY",
      description: "High-contrast electric yellow chest and back with jet black raglan sleeves for maximum athletic presence on the court and sideline."
    },
    {
      id: "striped",
      name: "ATHLETIC STRIPED EDITION",
      colorName: "Black, Gold & White Racing Stripes",
      hex: "#27272a",
      accent: "#f59e0b",
      image: "/images/hoodie_striped.jpg?v=apparel1",
      badge: "LIMITED STRIPE EDITION",
      description: "Dual athletic chest stripes in gold and white on deep charcoal fleece, featuring centered ARMUX golden crest. Engineered for team warmups and street fashion."
    }
  ];

  const [activeColorway, setActiveColorway] = useState(colorways[0]);

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-28">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 max-w-full">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.25em] text-amber-300 uppercase">
                  ARMUX ATHLETIC OUTERWEAR
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display tracking-tight text-white leading-tight break-words">
                PERFORMANCE <br />
                <span className="gold-text">BASKETBALL HOODIES</span>
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Engineered for pre-game shootarounds, sideline warmth, and modern streetwear. 
                Custom manufactured with official ARMUX metallic embroidery, ultra-durable heavyweight fleece, and tailored athletic fit.
              </p>

              {/* Quick Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 w-full max-w-lg">
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-amber-400 font-black text-lg">360 GSM</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Heavyweight Fleece</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-amber-400 font-black text-lg">GOLD FOIL</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Official Crest</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 col-span-2 sm:col-span-1">
                  <div className="text-amber-400 font-black text-lg">5 COLORWAYS</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Fully Customizable</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 w-full">
                <Link
                  href={`/contact?product=${encodeURIComponent("ARMUX Custom Hoodie - " + activeColorway.name)}`}
                  className="w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <span>ORDER TEAM HOODIES</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="#colorways"
                  className="px-8 py-4 text-xs font-black uppercase tracking-widest text-zinc-300 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-700 transition-all"
                >
                  EXPLORE COLORWAYS
                </a>
              </div>
            </div>

            {/* Right Interactive Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-zinc-900 border border-amber-500/30 overflow-hidden shadow-2xl p-6 group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black">
                  <Image
                    src={activeColorway.image}
                    alt={activeColorway.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                    key={activeColorway.id}
                  />
                  <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow">
                    {activeColorway.badge}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-amber-400 font-black tracking-widest uppercase block">
                        ACTIVE COLORWAY
                      </span>
                      <h3 className="text-xl font-black uppercase text-white font-display">
                        {activeColorway.name}
                      </h3>
                    </div>
                    <span className="text-xs text-zinc-400 font-medium">{activeColorway.colorName}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {activeColorway.description}
                  </p>

                  {/* Color Selector Thumbnails */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                      SELECT COLOR / EDITION:
                    </span>
                    <div className="flex items-center gap-2.5">
                      {colorways.map((cw) => (
                        <button
                          key={cw.id}
                          onClick={() => setActiveColorway(cw)}
                          title={cw.name}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all ${
                            activeColorway.id === cw.id
                              ? "border-amber-400 scale-110 shadow-lg shadow-amber-400/30"
                              : "border-zinc-700 hover:border-zinc-500 opacity-80 hover:opacity-100"
                          }`}
                          style={{ backgroundColor: cw.hex }}
                        >
                          <span 
                            className="w-3.5 h-3.5 rounded-full border border-black/40" 
                            style={{ backgroundColor: cw.accent }} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ALL COLORWAYS GALLERY GRID */}
      <section id="colorways" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
            COMPLETE COLORWAY SELECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
            EVERY COLOR. <span className="gold-text">YOUR TEAM IDENTITY.</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Choose from our 5 signature colorway releases or customize with your exact school, club, or sponsor Pantone shades.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {colorways.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-xl flex flex-col group"
            >
              <div className="relative aspect-square bg-black overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow">
                  {item.badge}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-black text-amber-400 tracking-widest uppercase block mb-1">
                    {item.colorName}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white mb-2 group-hover:text-amber-400 transition-colors font-display">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Custom Chest Logo & Roster Embroidery</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Kangaroo Pocket with Reinforced Seams</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Ribbed Cuffs & Athletic Stretch Hem</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => {
                      setActiveColorway(item);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors"
                  >
                    PREVIEW TOP
                  </button>
                  <Link
                    href={`/contact?product=${encodeURIComponent("ARMUX Hoodie - " + item.name)}`}
                    className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all flex items-center justify-center gap-1"
                  >
                    <span>GET QUOTE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FABRIC ENGINEERING & CRAFTSMANSHIP */}
      <section className="py-20 bg-zinc-900 border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">THERMAL FLEECE</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-density 360 GSM cotton-poly brushed fleece retains natural body heat while preventing sweat accumulation during cold weather shootarounds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">ATHLETIC ERGONOMICS</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Raglan and drop-shoulder sleeve cuts give players unrestricted shooting motion and full shoulder mobility without jacket lift.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">ARMUX CREST FINISH</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Metallic gold foil heat transfer or raised 3D high-density silicone emblems resist cracking, fading, and peeling over 50+ wash cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-4">
            OUTFIT YOUR WHOLE TEAM IN ARMUX HOODIES.
          </h2>
          <p className="text-black/80 font-medium max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Minimum order quantity starts at just 10 pieces with full player name, roster number, and sponsor logo customization included.
          </p>
          <Link
            href="/contact?product=ARMUX Team Hoodies Full Squad"
            className="inline-flex items-center gap-2 px-10 py-4 font-black text-xs uppercase tracking-widest text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl shadow-2xl transition-all"
          >
            <span>REQUEST BULK TEAM QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
