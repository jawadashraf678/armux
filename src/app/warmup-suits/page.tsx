"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Wind, 
  ChevronRight, 
  Layers, 
  Pocket, 
  Zap,
  Activity
} from "lucide-react";
import { 
  MotionBadge, 
  MotionFadeUp, 
  MotionSlideIn, 
  MotionCard, 
  MotionButton, 
  MotionIconBox 
} from "@/components/MotionWrappers";

export default function WarmUpSuitsPage() {
  const colorways = [
    {
      id: "black_gold",
      name: "BLACK & GOLD SUIT",
      colorName: "Pitch Black & Metallic Gold Piping",
      hex: "#111111",
      accent: "#f59e0b",
      image: "/images/warmup_black_gold.jpg?v=apparel1",
      badge: "ELITE SQUAD EDITION",
      description: "Full-zip track jacket with metallic gold shoulder racing bands and matching tapered track pants featuring zippered pockets and ankle cuffs."
    },
    {
      id: "red_black",
      name: "RED & BLACK SUIT",
      colorName: "Crimson Red & Stealth Black Panels",
      hex: "#dc2626",
      accent: "#111111",
      image: "/images/warmup_red_black.jpg?v=apparel1",
      badge: "PRO TEAM EDITION",
      description: "Dynamic red athletic jacket with black raglan sleeves, contrast side ventilation panels, and streamlined athletic travel joggers."
    },
    {
      id: "white_gold",
      name: "WHITE & GOLD SUIT",
      colorName: "Pure White & Golden Accent Zips",
      hex: "#f4f4f5",
      accent: "#d97706",
      image: "/images/warmup_white_gold.jpg?v=apparel1",
      badge: "LUXURY PRESENTATION",
      description: "Crisp white team presentation tracksuit with polished gold metallic zippers, gold sleeve trim, and water-repellent micro-weave finish."
    },
    {
      id: "yellow_black",
      name: "YELLOW & BLACK SUIT",
      colorName: "Vibrant Yellow & Jet Black Two-Tone",
      hex: "#eab308",
      accent: "#18181b",
      image: "/images/warmup_yellow_black.jpg?v=apparel1",
      badge: "HIGH-CONTRAST SQUAD",
      description: "High-visibility electric yellow torso with black sleeves and matching black track pants with yellow athletic side racing stripes."
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
            <MotionSlideIn direction="left" className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <MotionBadge className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 max-w-full">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.25em] text-amber-300 uppercase">
                  ARMUX PRO TRACKSUITS & TRAVEL KITS
                </span>
              </MotionBadge>

              <MotionFadeUp>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display tracking-tight text-white leading-tight break-words">
                  PERFORMANCE <br />
                  <span className="gold-text">WARM UP SUITS</span>
                </h1>
              </MotionFadeUp>

              <MotionFadeUp delay={0.15}>
                <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Engineered for pre-game team arrivals, sideline warming, and cross-country squad travel. 
                  Full 2-piece kit consisting of premium aerodynamic track jacket and custom tapered track pants with official ARMUX golden wolf emblem.
                </p>
              </MotionFadeUp>

              {/* Quick Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 w-full max-w-lg">
                <MotionCard delay={0.1} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-amber-400 font-black text-lg">2-PIECE KIT</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Jacket & Tapered Pants</div>
                </MotionCard>
                <MotionCard delay={0.15} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-amber-400 font-black text-lg">WIND RESISTANT</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Micro-Poly Shield</div>
                </MotionCard>
                <MotionCard delay={0.2} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 col-span-2 sm:col-span-1">
                  <div className="text-amber-400 font-black text-lg">ZIPPERED CUFFS</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Over-Shoe Fast Entry</div>
                </MotionCard>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 w-full">
                <MotionButton>
                  <Link
                    href={`/contact?product=${encodeURIComponent("ARMUX Warm-Up Suit - " + activeColorway.name)}`}
                    className="w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <span>ORDER SQUAD SUITS</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </MotionButton>
                <MotionButton>
                  <a
                    href="#colorways"
                    className="w-full sm:w-auto text-center px-8 py-4 text-xs font-black uppercase tracking-widest text-zinc-300 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-700 transition-all"
                  >
                    VIEW ALL SUIT COLORS
                  </a>
                </MotionButton>
              </div>
            </MotionSlideIn>

            {/* Right Interactive Preview */}
            <MotionSlideIn direction="right" className="lg:col-span-5">
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
                  <MotionBadge className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow">
                    {activeColorway.badge}
                  </MotionBadge>
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
                      SELECT TRACKSUIT COLORWAY:
                    </span>
                    <div className="flex items-center gap-3">
                      {colorways.map((cw) => (
                        <button
                          key={cw.id}
                          onClick={() => setActiveColorway(cw)}
                          title={cw.name}
                          className={`w-11 h-11 rounded-xl flex items-center justify-center border-2 transition-all ${
                            activeColorway.id === cw.id
                              ? "border-amber-400 scale-110 shadow-lg shadow-amber-400/30"
                              : "border-zinc-700 hover:border-zinc-500 opacity-80 hover:opacity-100"
                          }`}
                          style={{ backgroundColor: cw.hex }}
                        >
                          <span 
                            className="w-4 h-4 rounded-full border border-black/40" 
                            style={{ backgroundColor: cw.accent }} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MotionSlideIn>

          </div>
        </div>
      </section>

      {/* ALL SUIT COLORWAYS GRID */}
      <section id="colorways" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MotionBadge className="inline-block text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
            TEAM COLORWAY OPTIONS
          </MotionBadge>
          <MotionFadeUp>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
              FOUR SIGNATURE <span className="gold-text">TRACKSUIT EDITIONS</span>
            </h2>
          </MotionFadeUp>
          <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Every suit is fully customizable with your team&apos;s crest, player names, and numbers on both the jacket and the pants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {colorways.map((item, idx) => (
            <MotionCard
              key={item.id}
              delay={idx * 0.08}
              className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-xl flex flex-col group"
            >
              <div className="relative aspect-square bg-black overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <MotionBadge className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow">
                  {item.badge}
                </MotionBadge>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-black text-amber-400 tracking-widest uppercase block mb-1">
                    {item.colorName}
                  </span>
                  <h3 className="text-xl font-black uppercase text-white mb-2 group-hover:text-amber-400 transition-colors font-display">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Full-Zip Performance Track Jacket</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Ankle Zippers for Shoe Clearance</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Zippered Deep Security Pockets</span>
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
                    PREVIEW
                  </button>
                  <MotionButton>
                    <Link
                      href={`/contact?product=${encodeURIComponent("ARMUX Warm-Up Suit - " + item.name)}`}
                      className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all flex items-center justify-center gap-1"
                    >
                      <span>QUOTE</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </MotionButton>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      {/* TECH FEATURES BREAKDOWN */}
      <section className="py-20 bg-zinc-900 border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionCard delay={0.1} className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <MotionIconBox className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <Wind className="w-6 h-6" />
              </MotionIconBox>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">CHILL & DRAFT SHIELD</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Tightly woven micro-poly shell deflects drafts, cool arena air conditioning, and rain during pre-game warmups and team transit.
              </p>
            </MotionCard>

            <MotionCard delay={0.2} className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <MotionIconBox className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <Pocket className="w-6 h-6" />
              </MotionIconBox>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">ZIPPERED LOCK DOWN</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Both jacket pockets and pant pockets are equipped with reverse-coil auto-locking zippers to keep athlete essentials secure.
              </p>
            </MotionCard>

            <MotionCard delay={0.3} className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <MotionIconBox className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <Zap className="w-6 h-6" />
              </MotionIconBox>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">SWIFT BENCH TRANSITIONS</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Concealed 9-inch ankle zippers allow players called off the bench to slip their pants off over high-top basketball sneakers in 3 seconds.
              </p>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <MotionFadeUp>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-4">
              EQUIP YOUR BENCH WITH OFFICIAL ARMUX TRACKSUITS.
            </h2>
          </MotionFadeUp>
          <p className="text-black/80 font-medium max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Custom made for your complete roster including coaching staff and athletic trainers. Fast delivery worldwide.
          </p>
          <MotionButton>
            <Link
              href="/contact?product=ARMUX Warm Up Tracksuit Team Squad"
              className="inline-flex items-center gap-2 px-10 py-4 font-black text-xs uppercase tracking-widest text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl shadow-2xl transition-all"
            >
              <span>GET SQUAD QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionButton>
        </div>
      </section>
    </div>
  );
}
