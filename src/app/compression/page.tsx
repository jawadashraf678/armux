"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Zap, 
  Activity, 
  HeartPulse, 
  ShieldAlert 
} from "lucide-react";

export default function CompressionPage() {
  const colorways = [
    {
      id: "black_gold",
      name: "BLACK & GOLD COMPRESSION KIT",
      colorName: "Stealth Black & Metallic Gold Seams",
      hex: "#111111",
      accent: "#f59e0b",
      image: "/images/compression_black_gold.jpg?v=4k_hd_logo",
      badge: "PRO MUSCLE SUPPORT",
      description: "Graduated athletic compression long-sleeve top and matching recovery compression tights with golden ARMUX chest and thigh emblems."
    },
    {
      id: "red_black",
      name: "RED & BLACK RECOVERY KIT",
      colorName: "Crimson Red Base & Carbon Stitching",
      hex: "#dc2626",
      accent: "#111111",
      image: "/images/compression_red_black.jpg?v=4k_hd_logo",
      badge: "HIGH INTENSITY",
      description: "High-compression vascular support base layer engineered to accelerate oxygen delivery and reduce post-workout muscle soreness."
    },
    {
      id: "white_gold",
      name: "WHITE & GOLD BASELAYER",
      colorName: "Pure White & Golden Ergonomic Seams",
      hex: "#f4f4f5",
      accent: "#d97706",
      image: "/images/compression_white_gold.jpg?v=4k_hd_logo",
      badge: "ELITE MATCHDAY",
      description: "Under-jersey matchday baselayer designed to regulate core body temperature under hot arena lights with antibacterial silver-infused weave."
    },
    {
      id: "yellow_black",
      name: "YELLOW & BLACK POWER KIT",
      colorName: "Vibrant Yellow & Jet Black Seams",
      hex: "#eab308",
      accent: "#18181b",
      image: "/images/compression_yellow_black.jpg?v=4k_hd_logo",
      badge: "EXPLOSIVE POWER",
      description: "Targeted quad, hamstring, and latissimus dorsi compression zones providing mechanical support during explosive vertical jumping."
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
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-black tracking-[0.25em] text-amber-300 uppercase">
                  ARMUX VASCULAR ATHLETIC GEAR
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-white leading-none">
                GRADUATED <br />
                <span className="gold-text">COMPRESSION GEAR</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Scientifically engineered compression tops and tights that stabilize major muscle groups, reduce muscle oscillation, and enhance blood circulation during 48 minutes of full-court pressure.
              </p>

              {/* Quick Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-amber-400 font-black text-lg">25-30 mmHg</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Graduated Pressure</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-amber-400 font-black text-lg">FLATLOCK</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Zero Chafing Seams</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 col-span-2 sm:col-span-1">
                  <div className="text-amber-400 font-black text-lg">RAPID RECOVERY</div>
                  <div className="text-zinc-400 text-xs uppercase font-semibold">Lactic Acid Flush</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={`/contact?product=${encodeURIComponent("ARMUX Compression Gear - " + activeColorway.name)}`}
                  className="px-8 py-4 text-xs font-black uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                >
                  <span>ORDER SQUAD COMPRESSION</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="#colorways"
                  className="px-8 py-4 text-xs font-black uppercase tracking-widest text-zinc-300 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-700 transition-all"
                >
                  VIEW ALL COMPRESSION SETS
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
                      SELECT COMPRESSION COLOR:
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
            </div>

          </div>
        </div>
      </section>

      {/* ALL COMPRESSION COLORWAYS GRID */}
      <section id="colorways" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
            COMPRESSION SQUAD PACKAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
            FOUR TARGETED <span className="gold-text">COMPRESSION SETS</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Equip your roster with medical-grade athletic base layer gear printed with team numbers, initials, and official ARMUX crest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {colorways.map((item) => (
            <div
              key={item.id}
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
                <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow">
                  {item.badge}
                </div>
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
                      <span>Graduated Muscle Oscillation Reduction</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Thermal Baselayer Heat Dissipation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Reinforced Seamless Elastic Waistband</span>
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
                  <Link
                    href={`/contact?product=${encodeURIComponent("ARMUX Compression - " + item.name)}`}
                    className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all flex items-center justify-center gap-1"
                  >
                    <span>QUOTE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHYSIOLOGICAL BENEFITS SECTION */}
      <section className="py-20 bg-zinc-900 border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">ACCELERATED CIRCULATION</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Applies calibrated pressure gradients towards the heart, encouraging venous return and maintaining high muscle oxygenation during overtime periods.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">VIBRATION DAMPENING</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Locks down quads, hamstrings, and calves during hard hardwood landings, drastically curbing microscopic muscle tears that cause next-day DOMS.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 font-display">PROPRIOCEPTIVE AWARENESS</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Tactile feedback against the athlete&apos;s skin elevates sensory awareness of body position in space, improving defensive footwork and jump mechanics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-4">
            GIVE YOUR ROSTER A PHYSIOLOGICAL EDGE.
          </h2>
          <p className="text-black/80 font-medium max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Equip your entire team with custom fitted ARMUX compression baselayers. Fast turnaround with custom roster number prints.
          </p>
          <Link
            href="/contact?product=ARMUX Team Compression Baselayer Package"
            className="inline-flex items-center gap-2 px-10 py-4 font-black text-xs uppercase tracking-widest text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl shadow-2xl transition-all"
          >
            <span>REQUEST COMPRESSION QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
