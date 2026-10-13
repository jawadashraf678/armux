"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Palette, Layers, UserCheck, Hash, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  MotionBadge,
  MotionFadeUp,
  MotionCard,
  MotionNumber,
  MotionButton,
  MotionIconBox,
  MotionSlideIn,
} from "@/components/MotionWrappers";


export default function TeamwearPage() {
  // Interactive Customizer Preview state
  const [jerseyColor, setJerseyColor] = useState("#0B0B0C");
  const [accentColor, setAccentColor] = useState("#CCA044");
  const [teamName, setTeamName] = useState("ARMUX");
  const [playerNumber, setPlayerNumber] = useState("24");

  // 15-Color Swatch Palette matching official athletics palette
  const colorPalette = [
    { name: "Black", code: "#0B0B0C" },
    { name: "White", code: "#FFFFFF" },
    { name: "Silver Grey", code: "#808080" },
    { name: "Athletic Gold", code: "#CCA044" },
    { name: "Midnight Navy", code: "#111E38" },
    { name: "Royal Blue", code: "#113F8A" },
    { name: "Sky Blue", code: "#4FA8E0" },
    { name: "Kelly Green", code: "#0C6E3D" },
    { name: "Forest Green", code: "#0B281B" },
    { name: "Crimson Red", code: "#A11B22" },
    { name: "Sport Pink", code: "#EB548F" },
    { name: "Vibrant Orange", code: "#DF5717" },
    { name: "Deep Purple", code: "#5C1C8A" },
    { name: "Dark Plum", code: "#331A4B" },
    { name: "Maroon", code: "#4D141C" },
  ];

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* HERO */}
      <section className="bg-zinc-950 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionBadge delay={0.1} className="inline-block">
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 tracking-[0.15em] sm:tracking-[0.25em] uppercase block mb-3">
              TEAMWEAR & CUSTOMIZATION
            </span>
          </MotionBadge>
          <MotionFadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display tracking-tight text-white mb-6 break-words px-2">
              YOUR VISION. <br />
              <span className="gold-text">MADE REAL.</span>
            </h1>
          </MotionFadeUp>
          <MotionFadeUp delay={0.35}>
            <p className="max-w-xl mx-auto text-zinc-300 text-sm sm:text-base md:text-lg px-2">
              Bring your team&apos;s identity to life with custom sportswear designed around your colors, branding and requirements.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* SECTION: WHAT CAN YOU CUSTOMIZE? */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              ENDLESS OPTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950">
              WHAT CAN YOU <span className="gold-text">CUSTOMIZE?</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                icon: Shield,
                title: "TEAM LOGO",
                desc: "Add your official team or organization logo in high-definition sublimation, woven patch, or gold foil.",
              },
              {
                num: "02",
                icon: Palette,
                title: "TEAM COLORS",
                desc: "Choose the exact primary, secondary and trim colors that represent your team.",
              },
              {
                num: "03",
                icon: UserCheck,
                title: "PLAYER NAME",
                desc: "Personalize uniforms with individual player roster names in crisp athletic typography.",
              },
              {
                num: "04",
                icon: Hash,
                title: "PLAYER NUMBER",
                desc: "Add individual front and back player numbers with custom athletic font outlines.",
              },
              {
                num: "05",
                icon: Layers,
                title: "CUSTOM DESIGN",
                desc: "Create a unique design around your team's vision with side geometric patterns, fades, or stripes.",
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <MotionCard key={item.num} delay={idx * 0.08}>
                  <div className="p-6 h-full rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-amber-400 transition-all shadow-sm hover:shadow-xl hover-lift-light group">
                    <div className="text-amber-500 font-extrabold text-xs tracking-widest uppercase mb-4 group-hover:text-amber-600 transition-colors">{item.num}</div>
                    <MotionIconBox className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                      <IconComp className="w-6 h-6" />
                    </MotionIconBox>
                    <h3 className="text-lg font-extrabold uppercase text-zinc-950 mb-2 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </section>


      {/* INTERACTIVE CUSTOMIZATION STUDIO PREVIEW */}
      <section className="py-20 bg-zinc-950 text-white border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-2">
              INTERACTIVE PREVIEW
            </span>
            <h2 className="text-3xl font-black uppercase font-display text-white">
              TRY THE ARMUX <span className="gold-text">DESIGN LAB</span>
            </h2>
            <p className="text-zinc-400 text-xs mt-2">
              Experiment with colors and roster text below to envision your custom uniform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-zinc-800">
            {/* Customizer Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  TEAM NAME / CREST TEXT
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value.toUpperCase())}
                  maxLength={12}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white font-black tracking-widest uppercase focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  SAMPLE PLAYER NUMBER
                </label>
                <input
                  type="text"
                  value={playerNumber}
                  onChange={(e) => setPlayerNumber(e.target.value)}
                  maxLength={3}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white font-black text-xl focus:border-amber-400 outline-none"
                />
              </div>

              {/* JERSEY BASE COLOR PALETTE */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-400">
                    JERSEY BASE COLOR
                  </label>
                  <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-zinc-800 text-amber-400 border border-zinc-700">
                    {colorPalette.find((c) => c.code.toLowerCase() === jerseyColor.toLowerCase())?.name || "Custom"}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2.5 sm:gap-3 max-w-xs">
                  {colorPalette.map((color) => {
                    const isSelected = jerseyColor.toLowerCase() === color.code.toLowerCase();
                    const isLight = color.code.toLowerCase() === "#ffffff";
                    return (
                      <button
                        key={`base-${color.name}`}
                        type="button"
                        onClick={() => setJerseyColor(color.code)}
                        title={color.name}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 relative group flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-zinc-900 scale-110 shadow-lg shadow-black/60 z-10"
                            : "hover:scale-110 hover:shadow-md opacity-90 hover:opacity-100"
                        } ${isLight ? "border-2 border-zinc-400" : "border border-white/15"}`}
                        style={{ backgroundColor: color.code }}
                      >
                        {isSelected && (
                          <span
                            className={`w-2.5 h-2.5 rounded-full shadow-sm ${
                              isLight ? "bg-black" : "bg-white"
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* METALLIC ACCENT TRIM PALETTE */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-400">
                    METALLIC ACCENT TRIM
                  </label>
                  <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-zinc-800 text-amber-400 border border-zinc-700">
                    {colorPalette.find((c) => c.code.toLowerCase() === accentColor.toLowerCase())?.name || "Custom"}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2.5 sm:gap-3 max-w-xs">
                  {colorPalette.map((color) => {
                    const isSelected = accentColor.toLowerCase() === color.code.toLowerCase();
                    const isLight = color.code.toLowerCase() === "#ffffff";
                    return (
                      <button
                        key={`accent-${color.name}`}
                        type="button"
                        onClick={() => setAccentColor(color.code)}
                        title={color.name}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 relative group flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-zinc-900 scale-110 shadow-lg shadow-black/60 z-10"
                            : "hover:scale-110 hover:shadow-md opacity-90 hover:opacity-100"
                        } ${isLight ? "border-2 border-zinc-400" : "border border-white/15"}`}
                        style={{ backgroundColor: color.code }}
                      >
                        {isSelected && (
                          <span
                            className={`w-2.5 h-2.5 rounded-full shadow-sm ${
                              isLight ? "bg-black" : "bg-white"
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <Link
                  href={`/contact?concept=${encodeURIComponent(
                    `${teamName} #${playerNumber} (Base: ${
                      colorPalette.find(
                        (c) => c.code.toLowerCase() === jerseyColor.toLowerCase()
                      )?.name || jerseyColor
                    }, Accent: ${
                      colorPalette.find(
                        (c) => c.code.toLowerCase() === accentColor.toLowerCase()
                      )?.name || accentColor
                    })`
                  )}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 font-extrabold text-xs uppercase tracking-widest text-black bg-amber-400 hover:bg-amber-300 rounded shadow-lg transition-all"
                >
                  <span>SUBMIT THIS CONCEPT FOR A QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Canvas Mockup */}
            <div className="flex items-center justify-center p-8 bg-zinc-950 rounded-2xl border border-zinc-800 min-h-[380px] relative overflow-hidden">
              <div
                className="w-64 h-80 rounded-3xl border-4 transition-all duration-300 shadow-2xl flex flex-col items-center justify-between p-6 relative"
                style={{
                  backgroundColor: jerseyColor,
                  borderColor: accentColor,
                }}
              >
                {/* Collar Ribbing */}
                <div
                  className="w-24 h-6 border-b-4 rounded-b-xl"
                  style={{ borderColor: accentColor }}
                />

                {/* Team Name */}
                <div
                  className="text-2xl font-black tracking-widest uppercase font-display text-center"
                  style={{ color: accentColor }}
                >
                  {teamName || "ARMUX"}
                </div>

                {/* Number */}
                <div
                  className="text-6xl font-black tracking-tighter font-display"
                  style={{ color: accentColor }}
                >
                  {playerNumber || "00"}
                </div>

                {/* Bottom Jock Tag */}
                <div
                  className="px-3 py-1 border text-[9px] font-bold uppercase tracking-widest rounded"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  ARMUX CUSTOM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COACH UNIFORMS */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionSlideIn direction="left">
              <div className="relative h-[420px] rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl">
                <Image
                  src="/images/coach_uniform.jpg"
                  alt="ARMUX Coach Uniforms"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </MotionSlideIn>

            <MotionSlideIn direction="right" className="space-y-6">
              <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block">
                STAFF TEAMWEAR
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950 leading-tight">
                LEAD. INSPIRE. <br />
                <span className="gold-text">DOMINATE.</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Professional teamwear isn&apos;t only for the players. ARMUX coach uniforms combine a professional look with comfortable, lightweight and durable construction.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { title: "PROFESSIONAL LOOK", desc: "Tailored polo collar & clean embroidery" },
                  { title: "DURABLE", desc: "Reinforced stitching for intense seasons" },
                  { title: "BREATHABLE", desc: "Airflow mesh inserts keep coaches cool" },
                  { title: "LIGHTWEIGHT", desc: "High comfort performance blend" },
                ].map((feat, idx) => (
                  <MotionCard key={feat.title} delay={idx * 0.08}>
                    <div className="p-4 h-full rounded-xl bg-zinc-50 border border-zinc-200">
                      <div className="font-extrabold text-sm uppercase text-zinc-950 mb-1">
                        {feat.title}
                      </div>
                      <div className="text-xs text-zinc-600">{feat.desc}</div>
                    </div>
                  </MotionCard>
                ))}
              </div>
            </MotionSlideIn>
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
              THE WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display">
              HOW IT <span className="gold-text">WORKS</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "SHARE YOUR IDEA",
                desc: "Send your design, reference, logo or concept to our team via inquiry or WhatsApp.",
              },
              {
                num: "02",
                title: "CUSTOMIZE",
                desc: "Choose colors, patterns, names, numbers and branding details for your squad.",
              },
              {
                num: "03",
                title: "APPROVE YOUR DESIGN",
                desc: "Review your customized digital design proof to ensure exact visual perfection.",
              },
              {
                num: "04",
                title: "WE MAKE IT REAL",
                desc: "Your custom teamwear moves from digital concept into manufactured finished products.",
              },
            ].map((step, idx) => (
              <MotionCard key={step.num} delay={idx * 0.1}>
                <div className="p-8 h-full rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400 transition-all hover-lift-dark group">
                  <MotionNumber delay={idx * 0.1 + 0.15}>
                    <div className="text-3xl font-black text-amber-400 font-display mb-4 group-hover:scale-110 group-hover:text-amber-300 transition-transform origin-left">{step.num}</div>
                  </MotionNumber>
                  <h3 className="text-lg font-bold uppercase mb-2 group-hover:text-amber-400 transition-colors">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{step.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-400 text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <MotionFadeUp>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-4">
              NO IDEA IS TOO BIG. <br />
              LET&apos;S DESIGN IT FOR YOUR TEAM.
            </h2>
          </MotionFadeUp>
          <MotionButton delay={0.2} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 font-black text-xs uppercase tracking-widest text-white bg-zinc-950 hover-shine btn-hover-dark rounded shadow-xl transition-all"
            >
              GET A QUOTE
            </Link>
          </MotionButton>
        </div>
      </section>

    </div>
  );
}
