"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Palette, Check, ShieldCheck, Flame, Layers, Sparkles } from "lucide-react";

export default function AccessoriesPage() {
  const [globalColor, setGlobalColor] = useState("ALL");
  const [cardColors, setCardColors] = useState<Record<string, string>>({
    HEADBANDS: "BLACK_GOLD",
    WRISTBANDS: "BLACK_GOLD",
    "KNEE PADS": "BLACK_GOLD",
    "KNEE SLEEVES": "BLACK_GOLD",
    "KNEE STRAP": "BLACK_GOLD",
    "ELBOW SLEEVES": "BLACK_GOLD",
    "ARM SLEEVES": "BLACK_GOLD",
    SOCKS: "BLACK_GOLD",
    "ANKLE BRACES": "BLACK_GOLD",
    "CALF COMPRESSION SLEEVE": "BLACK_GOLD",
    "ANKLE SUPPORT BAND": "BLACK_GOLD",
    "FINGER SUPPORT BAND": "BLACK_GOLD",
    "RESISTANCE BAND": "BLACK_GOLD",
    "CREW SOCKS": "BLACK_GOLD",
    "MID-CREW SOCKS": "BLACK_GOLD",
    "QUARTER SOCKS": "BLACK_GOLD",
    "ANKLE SOCKS": "BLACK_GOLD",
    "KNEE-HIGH SOCKS": "BLACK_GOLD",
    "COMPRESSION BASKETBALL SOCK": "BLACK_GOLD",
  });

  const colorways = [
    { id: "ALL", name: "ALL COLORS", bg: "bg-zinc-900 text-white" },
    { id: "BLACK_GOLD", name: "BLACK & GOLDEN", bg: "bg-black text-amber-400 border border-amber-500/40" },
    { id: "RED_BLACK", name: "RED & BLACK", bg: "bg-red-700 text-white" },
    { id: "YELLOW_BLACK", name: "YELLOW & BLACK", bg: "bg-yellow-400 text-black font-bold" },
    { id: "WHITE_GOLD", name: "WHITE & GOLDEN", bg: "bg-white text-zinc-950 border border-amber-400" },
  ];

  const colorOptions = [
    { id: "BLACK_GOLD", label: "Black & Gold", bg: "bg-zinc-950", border: "border-amber-400" },
    { id: "RED_BLACK", label: "Red & Black", bg: "bg-red-700", border: "border-zinc-900" },
    { id: "YELLOW_BLACK", label: "Yellow & Black", bg: "bg-yellow-400", border: "border-zinc-950" },
    { id: "WHITE_GOLD", label: "White & Gold", bg: "bg-white", border: "border-amber-400" },
  ];

  const accessories = [
    {
      name: "HEADBANDS",
      desc: "Performance sweat-absorbing headbands engineered for athletic focus with golden metallic ARMUX Wolf emblem.",
      images: {
        BLACK_GOLD: "/images/headband_black_gold.jpg",
        RED_BLACK: "/images/headband_red_black.jpg",
        YELLOW_BLACK: "/images/headband_yellow_black.jpg",
        WHITE_GOLD: "/images/headband_white_gold.jpg",
      },
    },
    {
      name: "WRISTBANDS",
      desc: "Absorbent moisture-wicking wristbands featuring woven golden ARMUX Wolf emblem.",
      images: {
        BLACK_GOLD: "/images/wristband_black_gold.jpg",
        RED_BLACK: "/images/wristband_red_black.jpg",
        YELLOW_BLACK: "/images/wristband_yellow_black.jpg",
        WHITE_GOLD: "/images/wristband_white_gold.jpg",
      },
    },
    {
      name: "KNEE PADS",
      desc: "Protective padded knee supports engineered for high-impact court dives and protection.",
      images: {
        BLACK_GOLD: "/images/kneepads_black_gold.jpg",
        RED_BLACK: "/images/kneepads_red_black.jpg",
        YELLOW_BLACK: "/images/kneepads_yellow_black.jpg",
        WHITE_GOLD: "/images/kneepads_white_gold.jpg",
      },
    },
    {
      name: "KNEE SLEEVES",
      desc: "Anatomic compression knee sleeves designed for joint stabilization, patella warmth, and power output.",
      images: {
        BLACK_GOLD: "/images/kneesleeves_black_gold.jpg",
        RED_BLACK: "/images/kneesleeves_red_black.jpg",
        YELLOW_BLACK: "/images/kneesleeves_yellow_black.jpg",
        WHITE_GOLD: "/images/kneesleeves_white_gold.jpg",
      },
    },
    {
      name: "KNEE STRAP",
      desc: "Targeted patellar tendon support straps engineered to reduce court stress during jumping and sprinting.",
      images: {
        BLACK_GOLD: "/images/kneestrap_black_gold.jpg",
        RED_BLACK: "/images/kneestrap_red_black.jpg",
        YELLOW_BLACK: "/images/kneestrap_yellow_black.jpg",
        WHITE_GOLD: "/images/kneestrap_white_gold.jpg",
      },
    },
    {
      name: "ELBOW SLEEVES",
      desc: "Flexible athletic elbow compression sleeves engineered for arm joint support and shooting accuracy.",
      images: {
        BLACK_GOLD: "/images/elbowsleeves_black_gold.jpg",
        RED_BLACK: "/images/elbowsleeves_red_black.jpg",
        YELLOW_BLACK: "/images/elbowsleeves_yellow_black.jpg",
        WHITE_GOLD: "/images/elbowsleeves_white_gold.jpg",
      },
    },
    {
      name: "ARM SLEEVES",
      desc: "Compression arm sleeves for muscle support, shooting arm regulation, and court style.",
      images: {
        BLACK_GOLD: "/images/armsleeves_black_gold.jpg?v=black_gold_arm_sleeve_new",
        RED_BLACK: "/images/armsleeves_red_black.jpg",
        YELLOW_BLACK: "/images/armsleeves_yellow_black.jpg",
        WHITE_GOLD: "/images/armsleeves_white_gold.jpg",
      },
    },
    {
      name: "SOCKS",
      desc: "Cushioned athletic crew socks with arch support, reinforced heel/toe, and moisture mesh.",
      images: {
        BLACK_GOLD: "/images/socks_black_gold.jpg",
        RED_BLACK: "/images/socks_red_black.jpg",
        YELLOW_BLACK: "/images/socks_yellow_black.jpg",
        WHITE_GOLD: "/images/socks_white_gold.jpg",
      },
    },
    {
      name: "ANKLE BRACES",
      desc: "Supportive ankle wrap braces designed to stabilize athletic movement and sharp cuts.",
      images: {
        BLACK_GOLD: "/images/ankle_black_gold.jpg",
        RED_BLACK: "/images/ankle_red_black.jpg",
        YELLOW_BLACK: "/images/ankle_yellow_black.jpg",
        WHITE_GOLD: "/images/ankle_white_gold.jpg",
      },
    },
  ];

  // ATHLETIC SUPPORT & SOCKS LINEUP WITH USER UPLOADED IMAGES
  const supportAndSocksCards = [
    {
      title: "CALF COMPRESSION SLEEVE",
      badge: "COMPRESSION GEAR",
      desc: "Graduated calf compression sleeve engineered to increase venous return, prevent shin splints, and reduce muscle fatigue.",
      spec1: "Targeted Calf Support",
      spec2: "Moisture-Wicking Nylon",
      images: {
        BLACK_GOLD: "/images/Calf  Sleeve balck and golden.jpg",
        RED_BLACK: "/images/Calf  Sleeve red and black.jpg",
        YELLOW_BLACK: "/images/Calf   Sleeve yellow and black.jpg",
        WHITE_GOLD: "/images/Calf  Sleeve  white and golden.jpg",
      },
    },
    {
      title: "ANKLE SUPPORT BAND",
      badge: "JOINT SUPPORT",
      desc: "Adjustable elastic ankle wrap band providing dynamic lateral stability and high-impact court ankle control.",
      spec1: "Criss-Cross Strap System",
      spec2: "Breathable Neoprene Blend",
      images: {
        BLACK_GOLD: "/images/ANKLEE BLACK.jpg",
        RED_BLACK: "/images/ANKLEE BALCK AND RED.jpg",
        YELLOW_BLACK: "/images/ANKLEE YELLOW AND BLACK.jpg",
        WHITE_GOLD: "/images/ANKLE WHITE AND GOLDEN.jpg",
      },
    },
    {
      title: "FINGER SUPPORT BAND",
      badge: "PROTECTIVE ACCESSORY",
      desc: "Elastic knitted finger sleeves designed for basketball player digit protection, joint cushioning, and jam prevention.",
      spec1: "Multi-Pack Squad Set",
      spec2: "Elastic Knitted Comfort",
      images: {
        BLACK_GOLD: "/images/hand support black and golden.jpg",
        RED_BLACK: "/images/hand support red and black.jpg",
        YELLOW_BLACK: "/images/hand support yellow and black.jpg",
        WHITE_GOLD: "/images/hand support white and golden.jpg",
      },
    },
    {
      title: "RESISTANCE BAND",
      badge: "TRAINING ESSENTIAL",
      desc: "Heavy-duty latex resistance loop bands for athletic warm-ups, lateral footwork drills, and court agility training.",
      spec1: "Multiple Tension Levels",
      spec2: "100% Natural Latex",
      images: {
        BLACK_GOLD: "/images/band balck.jpg",
        RED_BLACK: "/images/band red and balck.jpg",
        YELLOW_BLACK: "/images/band yellow and black.jpg",
        WHITE_GOLD: "/images/band white and golden.jpg",
      },
    },
    {
      title: "CREW SOCKS",
      badge: "CLASSIC TEAMWEAR",
      desc: "Mid-calf athletic crew socks featuring targeted arch compression, dense footbed cushioning, and anti-blister yarn.",
      spec1: "Targeted Arch Band",
      spec2: "Reinforced Heel & Toe",
      images: {
        BLACK_GOLD: "/images/crew socks black golden.jpg",
        RED_BLACK: "/images/crew socks red and golden.jpg",
        YELLOW_BLACK: "/images/crew socks yellow and black.jpg",
        WHITE_GOLD: "/images/crew socks white and golden.jpg",
      },
    },
    {
      title: "MID-CREW SOCKS",
      badge: "ATHLETIC CUT",
      desc: "Modern mid-crew height basketball socks offering optimal ankle coverage, breathable mesh vents, and secure ribbing.",
      spec1: "Mid-Height Silhouette",
      spec2: "Ventilated Instep Mesh",
      images: {
        BLACK_GOLD: "/images/crew socks black golden.jpg",
        RED_BLACK: "/images/crew socks red and golden.jpg",
        YELLOW_BLACK: "/images/crew socks yellow and black.jpg",
        WHITE_GOLD: "/images/crew socks white and golden.jpg",
      },
    },
    {
      title: "QUARTER SOCKS",
      badge: "LOW-PROFILE FIT",
      desc: "Above-the-ankle quarter length athletic socks built for lightweight speed, moisture management, and snug comfort.",
      spec1: "Ankle-Bone Protection",
      spec2: "Quick-Dry Fiber Tech",
      images: {
        BLACK_GOLD: "/images/crew socks black golden.jpg",
        RED_BLACK: "/images/crew socks red and golden.jpg",
        YELLOW_BLACK: "/images/crew socks yellow and black.jpg",
        WHITE_GOLD: "/images/crew socks white and golden.jpg",
      },
    },
    {
      title: "ANKLE SOCKS",
      badge: "MINIMALIST CUT",
      desc: "Low-cut compression ankle socks featuring non-slip heel tab, deep pocket heel, and breathable footbed construction.",
      spec1: "Non-Slip Heel Tab",
      spec2: "Ultra-Lightweight Fit",
      images: {
        BLACK_GOLD: "/images/ANKLEE BLACK.jpg",
        RED_BLACK: "/images/ANKLEE BALCK AND RED.jpg",
        YELLOW_BLACK: "/images/ANKLEE YELLOW AND BLACK.jpg",
        WHITE_GOLD: "/images/ANKLE WHITE AND GOLDEN.jpg",
      },
    },
    {
      title: "KNEE-HIGH SOCKS",
      badge: "FULL SQUAD EDITION",
      desc: "High-performance over-the-calf knee-high socks designed for full leg coverage, calf warmth, and bold squad uniformity.",
      spec1: "Over-The-Calf Coverage",
      spec2: "Stay-Up Ribbed Cuff",
      images: {
        BLACK_GOLD: "/images/crew socks black golden.jpg",
        RED_BLACK: "/images/crew socks red and golden.jpg",
        YELLOW_BLACK: "/images/crew socks yellow and black.jpg",
        WHITE_GOLD: "/images/crew socks white and golden.jpg",
      },
    },
    {
      title: "COMPRESSION BASKETBALL SOCK",
      badge: "PRO ATHLETE SPEC",
      desc: "Elite pro-tier basketball compression sock with padded impact pods, Achilles tendon wrap, and anatomical left/right fit.",
      spec1: "Anatomical L/R Pod System",
      spec2: "Achilles Shock Absorption",
      images: {
        BLACK_GOLD: "/images/crew socks black golden.jpg",
        RED_BLACK: "/images/crew socks red and golden.jpg",
        YELLOW_BLACK: "/images/crew socks yellow and black.jpg",
        WHITE_GOLD: "/images/crew socks white and golden.jpg",
      },
    },
  ];

  const handleGlobalColorSelect = (colorId: string) => {
    setGlobalColor(colorId);
    if (colorId !== "ALL") {
      const updated: Record<string, string> = {};
      accessories.forEach((item) => {
        updated[item.name] = colorId;
      });
      supportAndSocksCards.forEach((item) => {
        updated[item.title] = colorId;
      });
      setCardColors(updated);
    }
  };

  const handleCardColorSelect = (productName: string, colorId: string) => {
    setCardColors((prev) => ({
      ...prev,
      [productName]: colorId,
    }));
  };

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* HERO */}
      <section className="bg-zinc-950 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
            ARMUX ATHLETIC ACCESSORIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-white mb-6">
            COMPLETE <span className="gold-text">THE KIT.</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-base sm:text-lg">
            Featuring the signature ARMUX Golden Wolf emblem across 4 core team colorways.
          </p>
        </div>
      </section>

      {/* COLORWAY SELECTION BAR */}
      <section className="py-6 bg-zinc-900 border-b border-zinc-800 text-white sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-300">
              SWITCH ALL TEAM COLORS:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {colorways.map((cw) => (
              <button
                key={cw.id}
                onClick={() => handleGlobalColorSelect(cw.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${cw.bg} ${
                  globalColor === cw.id
                    ? "ring-2 ring-amber-400 scale-105 shadow-lg"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {cw.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE IMAGE ACCESSORIES GRID */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              COLOR-SWATCH ACCESSORIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950">
              PERFORMANCE <span className="gold-text">ACCESSORIES</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
            <p className="text-sm text-zinc-600">
              Click any color swatch below a product to instantly preview that colorway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((item) => {
              const activeColorKey = cardColors[item.name] || "BLACK_GOLD";
              const currentImage = item.images[activeColorKey as keyof typeof item.images] || item.images.BLACK_GOLD;
              const activeColorObj = colorOptions.find((c) => c.id === activeColorKey);

              return (
                <div
                  key={item.name}
                  className="rounded-2xl bg-zinc-50 border border-zinc-200 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col group"
                >
                  <div className="relative h-80 bg-zinc-100 overflow-hidden p-3 flex items-center justify-center">
                    <Image
                      key={`${item.name}-${activeColorKey}`}
                      src={currentImage}
                      alt={`${item.name} - ${activeColorObj?.label}`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all duration-500 shadow-sm"
                    />
                    <div className="absolute top-5 left-5 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold text-amber-400 uppercase tracking-widest border border-amber-400/30 shadow-md">
                      {activeColorObj?.label.toUpperCase()}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold uppercase text-zinc-950 mb-2 group-hover:text-amber-600 transition-colors tracking-tight font-display">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      {/* Interactive Per-Card Color Buttons */}
                      <div className="mb-6 pt-4 border-t border-zinc-200">
                        <span className="text-[11px] font-extrabold text-zinc-600 uppercase tracking-wider block mb-3">
                          SELECT COLOR:
                        </span>
                        <div className="flex items-center gap-2.5">
                          {colorOptions.map((c) => {
                            const isSelected = activeColorKey === c.id;
                            return (
                              <button
                                key={c.id}
                                onClick={() => handleCardColorSelect(item.name, c.id)}
                                title={c.label}
                                className={`group/btn relative w-8 h-8 rounded-full ${c.bg} border-2 ${c.border} flex items-center justify-center transition-all duration-200 shadow-sm ${
                                  isSelected
                                    ? "ring-2 ring-amber-500 scale-110 shadow-md"
                                    : "opacity-85 hover:opacity-100 hover:scale-105"
                                }`}
                              >
                                {isSelected && (
                                  <Check className={`w-3.5 h-3.5 ${c.id === "WHITE_GOLD" ? "text-amber-600" : "text-amber-400"}`} />
                                )}
                              </button>
                            );
                          })}
                          <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider ml-auto">
                            {activeColorObj?.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/contact?product=${encodeURIComponent(item.name)}&color=${encodeURIComponent(activeColorObj?.label || "")}`}
                      className="w-full py-3.5 px-4 text-center font-extrabold text-xs uppercase tracking-widest text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 block"
                    >
                      GET A QUOTE ({activeColorObj?.label})
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: ATHLETIC SUPPORT & SOCKS LINEUP WITH IMAGES */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-[0.2em]">
                SQUAD & PERFORMANCE SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white mb-4">
              ATHLETIC SUPPORT & <span className="gold-text">SOCKS LINEUP</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Custom team order options for compression supports, bands, and specialized athletic socks with interactive color selection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {supportAndSocksCards.map((card, idx) => {
              const activeColorKey = cardColors[card.title] || "BLACK_GOLD";
              const currentImage = card.images[activeColorKey as keyof typeof card.images] || card.images.BLACK_GOLD;
              const activeColorObj = colorOptions.find((c) => c.id === activeColorKey);

              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 p-5 flex flex-col justify-between shadow-2xl group hover:-translate-y-1"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-48 bg-zinc-950 rounded-2xl overflow-hidden mb-4 p-2 flex items-center justify-center border border-zinc-800/80">
                      <Image
                        key={`${card.title}-${activeColorKey}`}
                        src={currentImage}
                        alt={`${card.title} - ${activeColorObj?.label}`}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-bold text-amber-400 uppercase tracking-widest border border-amber-400/30">
                        {activeColorObj?.label.toUpperCase()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {card.badge}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm font-black uppercase text-white font-display mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-[11px] text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                      {card.desc}
                    </p>

                    <div className="space-y-1.5 mb-4 border-t border-zinc-800/80 pt-3 text-[10px] font-semibold text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{card.spec1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{card.spec2}</span>
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div className="mb-4 pt-3 border-t border-zinc-800/80">
                      <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-wider block mb-2">
                        COLOR:
                      </span>
                      <div className="flex items-center gap-2">
                        {colorOptions.map((c) => {
                          const isSelected = activeColorKey === c.id;
                          return (
                            <button
                              key={c.id}
                              onClick={() => handleCardColorSelect(card.title, c.id)}
                              title={c.label}
                              className={`relative w-6 h-6 rounded-full ${c.bg} border ${c.border} flex items-center justify-center transition-all duration-200 ${
                                isSelected
                                  ? "ring-2 ring-amber-400 scale-110"
                                  : "opacity-75 hover:opacity-100 hover:scale-105"
                              }`}
                            >
                              {isSelected && (
                                <Check className={`w-3 h-3 ${c.id === "WHITE_GOLD" ? "text-amber-600" : "text-amber-400"}`} />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/contact?product=${encodeURIComponent(card.title)}&color=${encodeURIComponent(activeColorObj?.label || "")}`}
                    className="w-full py-2.5 px-3 text-center font-extrabold text-[10px] uppercase tracking-widest text-black bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-colors block"
                  >
                    GET A QUOTE ({activeColorObj?.label})
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-black tracking-tight">
            NEED CUSTOM TEAM ACCESSORIES & SOCKS?
          </h2>
          <p className="text-black/80 font-medium text-base sm:text-lg max-w-xl mx-auto">
            Contact our sales team on WhatsApp to request custom team logo embroideries and bulk roster pricing.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 font-black text-xs uppercase tracking-widest text-white bg-black hover:bg-zinc-900 rounded-xl shadow-2xl transition-all"
            >
              REQUEST ACCESSORIES QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
