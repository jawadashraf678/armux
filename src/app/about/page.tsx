import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ShieldCheck, Target, Sparkles, Award, ArrowRight, Layers, Flame } from "lucide-react";
import {
  MotionBadge,
  MotionFadeUp,
  MotionSlideIn,
  MotionCard,
  MotionNumber,
  MotionButton,
} from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "About ARMUX | Custom Sportswear Brand",
  description:
    "ARMUX is a Pakistan-based sportswear brand founded by two women who chose to turn life's challenges into an opportunity to build something of their own.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative py-24 sm:py-32 bg-zinc-950 text-white overflow-hidden pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <MotionBadge delay={0.1} className="inline-block">
              <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-4">
                ABOUT ARMUX
              </span>
            </MotionBadge>
            <MotionFadeUp delay={0.2}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display tracking-tight text-white leading-tight mb-6">
                BORN FROM ADVERSITY. <br />
                <span className="gold-text">DRIVEN BY AMBITION.</span>
              </h1>
            </MotionFadeUp>
            <MotionFadeUp delay={0.35}>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
                Crafting premium custom teamwear and basketball sportswear designed around your identity, your performance, and your vision.
              </p>
            </MotionFadeUp>
          </div>
        </div>

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      </section>


      {/* OUR COLLECTION SECTION */}
      <section className="py-24 bg-white text-zinc-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <MotionSlideIn direction="left" className="space-y-6">
              <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block">
                OUR COLLECTION
              </span>

              <h2 className="text-4xl sm:text-6xl font-black uppercase font-display text-zinc-950 tracking-tight leading-none">
                BUILT FOR THE <br />
                <span className="gold-text">GAME</span>
              </h2>

              <div className="w-20 h-1 bg-amber-500 rounded-full my-4" />

              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed">
                <p className="font-semibold text-zinc-900">
                  ARMUX brings premium sportswear designed for athletes, teams, and clubs who want to look sharp and perform with confidence.
                </p>
                <p className="text-zinc-600">
                  From custom basketball jerseys to complete team uniforms, every piece is made with quality fabrics, comfortable fits, and attention to detail.
                </p>
              </div>

              {/* Tagline Pill */}
              <div className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider">
                CUSTOM DESIGNS • PREMIUM FABRICS • TEAM ORDERS
              </div>

              {/* 2 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <MotionCard delay={0.1}>
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-amber-400 transition-all shadow-sm">
                    <h3 className="text-lg font-black uppercase font-display text-zinc-950 mb-1">
                      CUSTOM TEAMWEAR
                    </h3>
                    <p className="text-xs font-bold text-amber-600 tracking-wider">
                      COLORS • LOGO • NAME • NUMBER
                    </p>
                  </div>
                </MotionCard>

                <MotionCard delay={0.2}>
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-amber-400 transition-all shadow-sm">
                    <h3 className="text-lg font-black uppercase font-display text-zinc-950 mb-1">
                      PREMIUM QUALITY
                    </h3>
                    <p className="text-xs font-bold text-amber-600 tracking-wider">
                      LIGHTWEIGHT • BREATHABLE • DURABLE
                    </p>
                  </div>
                </MotionCard>
              </div>
            </MotionSlideIn>

            {/* Right Image Container */}
            <MotionSlideIn direction="right">
              <div className="relative h-[520px] rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl group">
                <Image
                  src="/images/jersey_signature.jpg"
                  alt="ARMUX Built For The Game"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/40" />

                {/* Top Overlay Badge */}
                <MotionBadge delay={0.2} className="absolute top-6 left-6 right-6 flex justify-start">
                  <div className="px-4 py-2 rounded-full bg-zinc-950/85 border border-amber-500/40 backdrop-blur-md text-amber-300 text-xs font-black uppercase tracking-widest shadow-lg">
                    MADE FOR YOUR GAME
                  </div>
                </MotionBadge>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md text-center">
                    <span className="text-xs sm:text-sm font-black text-amber-400 uppercase tracking-widest">
                      CUSTOM • QUALITY • PERFORMANCE
                    </span>
                  </div>
                </div>
              </div>
            </MotionSlideIn>
          </div>
        </div>
      </section>

      {/* SECTION: OUR VISION */}
      <section className="py-16 sm:py-20 bg-zinc-950 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionFadeUp className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
              OUR VISION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-5">
              MORE THAN <span className="gold-text">SPORTSWEAR.</span>
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-5 rounded-full" />
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              ARMUX is built around the idea that teamwear should represent the identity of the people wearing it.
            </p>
          </MotionFadeUp>

          {/* TWO FEMALE MODELS PHOTOGRAPHS */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Model Card 1 - Anum Fatima */}
              <MotionCard delay={0.1}>
                <div className="group relative rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-900/90 shadow-2xl hover:border-amber-400 transition-all duration-500 cursor-pointer">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src="/images/about_female_model_1.jpg"
                      alt="Anum Fatima - Co-Founder ARMUX"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority
                    />

                    {/* Top vignette for badge legibility */}
                    <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-zinc-950/70 to-transparent pointer-events-none" />

                    {/* Top Badge: CO-FOUNDER */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/85 border border-amber-500/40 backdrop-blur-md z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-amber-300">
                        CO-FOUNDER
                      </span>
                    </div>

                    {/* Default Bottom Caption (Fades out smoothly on hover) */}
                    <div className="absolute bottom-0 inset-x-0 pt-20 pb-5 px-5 sm:px-6 bg-gradient-to-t from-zinc-950 via-zinc-950/85 via-50% to-transparent transition-opacity duration-300 group-hover:opacity-0">
                      <div className="h-0.5 w-10 bg-amber-400 mb-2 group-hover:w-16 transition-all duration-300" />
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white font-display leading-tight drop-shadow-sm">
                        ANUM FATIMA
                      </h3>
                      <p className="text-xs sm:text-[13px] font-bold text-amber-300/95 tracking-wider uppercase mt-1">
                        CO-FOUNDER, ARMUX
                      </p>
                    </div>

                    {/* HOVER DETAILS OVERLAY */}
                    <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-3 group-hover:translate-y-0">
                      <div>
                        {/* Top Role Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
                          <span className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-black text-amber-300 uppercase tracking-widest">
                            CO-FOUNDER & CREATIVE DIRECTOR
                          </span>
                          <Sparkles className="w-4 h-4 text-amber-400" />
                        </div>

                        {/* Name & Subtitle */}
                        <div className="mt-4">
                          <h3 className="text-2xl font-black uppercase font-display text-white tracking-wide">
                            ANUM FATIMA
                          </h3>
                          <p className="text-xs font-bold text-amber-400 tracking-wider uppercase mt-0.5">
                            Brand Strategy & Design Vision
                          </p>
                        </div>

                        {/* Bio */}
                        <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed mt-3 font-normal">
                          Leading the creative spirit and identity of ARMUX. Anum drives custom sportswear concepts, ergonomic cuts, and dynamic team styling designed to empower athletes on every court.
                        </p>

                        {/* Highlights */}
                        <div className="mt-4 space-y-1.5">
                          <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Bespoke Teamwear & Jersey Sublimation</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Athletic Inclusivity & Ergonomic Design</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Brand Identity & Creative Direction</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Quote & Watermark */}
                      <div className="pt-3 border-t border-zinc-800">
                        <p className="text-[11px] italic text-zinc-400 leading-snug">
                          &ldquo;We don&apos;t just make jerseys; we craft the identity and pride of your team.&rdquo;
                        </p>
                        <div className="mt-2 flex items-center justify-between text-[9px] font-black tracking-widest text-amber-400/70 uppercase">
                          <span>ARMUX LEADERSHIP</span>
                          <span>OFFICIAL FOUNDER</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionCard>

              {/* Model Card 2 - Arooba */}
              <MotionCard delay={0.25}>
                <div className="group relative rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-900/90 shadow-2xl hover:border-amber-400 transition-all duration-500 cursor-pointer">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src="/images/about_female_model_2.jpg"
                      alt="Arooba - Co-Founder ARMUX"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority
                    />

                    {/* Top vignette for badge legibility */}
                    <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-zinc-950/70 to-transparent pointer-events-none" />

                    {/* Top Badge: CO-FOUNDER */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/85 border border-amber-500/40 backdrop-blur-md z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-amber-300">
                        CO-FOUNDER
                      </span>
                    </div>

                    {/* Default Bottom Caption (Fades out smoothly on hover) */}
                    <div className="absolute bottom-0 inset-x-0 pt-20 pb-5 px-5 sm:px-6 bg-gradient-to-t from-zinc-950 via-zinc-950/85 via-50% to-transparent transition-opacity duration-300 group-hover:opacity-0">
                      <div className="h-0.5 w-10 bg-amber-400 mb-2 group-hover:w-16 transition-all duration-300" />
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white font-display leading-tight drop-shadow-sm">
                        AROOBA
                      </h3>
                      <p className="text-xs sm:text-[13px] font-bold text-amber-300/95 tracking-wider uppercase mt-1">
                        CO-FOUNDER, ARMUX
                      </p>
                    </div>

                    {/* HOVER DETAILS OVERLAY */}
                    <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-3 group-hover:translate-y-0">
                      <div>
                        {/* Top Role Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
                          <span className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-black text-amber-300 uppercase tracking-widest">
                            CO-FOUNDER & OPERATIONS LEAD
                          </span>
                          <ShieldCheck className="w-4 h-4 text-amber-400" />
                        </div>

                        {/* Name & Subtitle */}
                        <div className="mt-4">
                          <h3 className="text-2xl font-black uppercase font-display text-white tracking-wide">
                            AROOBA
                          </h3>
                          <p className="text-xs font-bold text-amber-400 tracking-wider uppercase mt-0.5">
                            Technical Operations & Manufacturing
                          </p>
                        </div>

                        {/* Bio */}
                        <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed mt-3 font-normal">
                          Directing technical execution and product quality across ARMUX. Arooba guarantees that every athletic fabric, precision stitch, and performance kit meets professional international standards.
                        </p>

                        {/* Highlights */}
                        <div className="mt-4 space-y-1.5">
                          <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Technical Fabric Engineering & Quality</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Endurance & Moisture-Wicking Control</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Production Precision & Global Supply</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Quote & Watermark */}
                      <div className="pt-3 border-t border-zinc-800">
                        <p className="text-[11px] italic text-zinc-400 leading-snug">
                          &ldquo;True sportswear excellence is built when no compromises are made on performance.&rdquo;
                        </p>
                        <div className="mt-2 flex items-center justify-between text-[9px] font-black tracking-widest text-amber-400/70 uppercase">
                          <span>ARMUX LEADERSHIP</span>
                          <span>OFFICIAL FOUNDER</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionCard>
            </div>
          </div>

          {/* Vision Pillars Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 text-center">
              {[
                "Your colors.",
                "Your logo.",
                "Your players.",
                "Your numbers.",
                "Your design.",
                "Your team.",
              ].map((item, idx) => (
                <MotionCard key={idx} delay={idx * 0.08}>
                  <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-400/50 transition-all text-amber-300 font-black text-base sm:text-lg uppercase tracking-wider font-display">
                    {item}
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE CREATE */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              PRODUCT LINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950">
              WHAT WE <span className="gold-text">CREATE</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                title: "CUSTOM BASKETBALL UNIFORMS",
                desc: "Performance jerseys & shorts engineered for competition.",
                link: "/basketball",
                cta: "VIEW COLLECTION",
              },
              {
                num: "02",
                title: "TEAMWEAR",
                desc: "Complete unified apparel for whole team squads.",
                link: "/teamwear",
                cta: "DISCOVER TEAMWEAR",
              },
              {
                num: "03",
                title: "COACH UNIFORMS",
                desc: "Professional polos and athletic staff gear.",
                link: "/teamwear",
                cta: "EXPLORE COACH GEAR",
              },
              {
                num: "04",
                title: "SPORTS ACCESSORIES",
                desc: "Headbands, sleeves, knee pads & compression socks.",
                link: "/accessories",
                cta: "VIEW ACCESSORIES",
              },
              {
                num: "05",
                title: "SPORTSWEAR APPAREL",
                desc: "Hoodies, warmup suits, shooting shirts & training lifestyle apparel.",
                link: "/products?category=APPAREL",
                cta: "EXPLORE APPAREL",
              },
            ].map((prod, idx) => (
              <MotionCard key={prod.num} delay={idx * 0.08}>
                <Link
                  href={prod.link}
                  className="p-7 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-amber-400 transition-all shadow-sm hover:shadow-xl group flex flex-col justify-between h-72 block"
                >
                  <div>
                    <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">{prod.num}</span>
                    <h3 className="text-lg font-black uppercase text-zinc-950 mt-2 group-hover:text-amber-600 transition-colors">
                      {prod.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600">
                    {prod.desc}
                  </p>
                  <div className="flex items-center text-xs font-bold text-amber-600 gap-1 uppercase tracking-wider">
                    <span>{prod.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: OUR APPROACH */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display">
              OUR <span className="gold-text">APPROACH</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "IDENTITY",
                desc: "Create teamwear around your visual identity. We preserve your crest, colors, and organizational character in every detail.",
              },
              {
                num: "02",
                title: "CUSTOMIZATION",
                desc: "Personalize colors, logos, names, numbers and designs with full precision according to your roster requirements.",
              },
              {
                num: "03",
                title: "PERFORMANCE",
                desc: "Create sportswear designed for movement and active use. High breathability, tear resistance, and ergonomic athlete comfort.",
              },
            ].map((approach, idx) => (
              <MotionCard key={approach.num} delay={idx * 0.12}>
                <div className="p-8 h-full rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-400/50 transition-all">
                  <MotionNumber delay={idx * 0.12 + 0.1}>
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 font-bold text-xl">
                      {approach.num}
                    </div>
                  </MotionNumber>
                  <h3 className="text-2xl font-black uppercase mb-3 font-display">{approach.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{approach.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-amber-400 text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <MotionFadeUp>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-6">
              BUILD YOUR TEAM&apos;S IDENTITY.
            </h2>
          </MotionFadeUp>
          <MotionButton delay={0.2} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 font-black text-xs uppercase tracking-widest text-white bg-zinc-950 hover:bg-zinc-800 rounded shadow-xl transition-all"
            >
              GET A QUOTE
            </Link>
          </MotionButton>
        </div>
      </section>
    </div>
  );
}

