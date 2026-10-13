import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  Shirt,
  Flame,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import {
  MotionBadge,
  MotionFadeUp,
  MotionCard,
  MotionNumber,
  MotionButton,
  MotionIconBox,
  MotionFloat,
} from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "ARMUX | Custom Basketball Wear and Gear",
  description:
    "Premium custom basketball uniforms and teamwear designed around your identity, your colors, and your game.",
};

export default function HomePage() {
  const featuredProducts = [
    {
      name: "Black & Gold Elite Jersey",
      category: "Basketball",
      image: "/images/jersey_black_gold.jpg",
      desc: "Advanced performance-focused design in Black & Gold with metallic gold ARMUX emblem.",
    },
    {
      name: "Red & Black Performance Jersey",
      category: "Basketball",
      image: "/images/jersey_red_black.jpg",
      desc: "Aggressive Red & Black sleeveless jersey with dynamic side geometric patterns.",
    },
    {
      name: "Yellow & Black Legacy Jersey",
      category: "Basketball",
      image: "/images/jersey_yellow_black.jpg",
      desc: "Vibrant Yellow & Black basketball jersey with bold golden wolf ARMUX crest.",
    },
    {
      name: "White & Gold Signature Jersey",
      category: "Basketball",
      image: "/images/jersey_white_gold.jpg",
      desc: "Clean White & Golden customizable sleeveless jersey with gold metallic detailing.",
    },
    {
      name: "Reversible Top Singlet",
      category: "Basketball",
      image: "/images/reversible_top_singlet.jpg",
      desc: "A versatile 2-in-1 dual-sided reversible singlet top created for home & away games.",
    },
    {
      name: "Girls Uniform",
      category: "Basketball",
      image: "/images/girls uniform.jpg",
      desc: "Customizable basketball uniform designed with a tailored female athletic cut.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-20">
        {/* Background 4K Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_basketball.jpg"
            alt="ARMUX Custom Basketball Teamwear Hero"
            fill
            className="object-cover object-center opacity-45 scale-105"
            priority
          />
          {/* Gradients to keep white/gold text crisp */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center">
          <MotionBadge delay={0.1} className="inline-block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-amber-500/40 backdrop-blur-md mb-6 sm:mb-8 max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] text-amber-300 uppercase truncate sm:whitespace-normal">
                CUSTOM BASKETBALL WEAR AND GEAR
              </span>
            </div>
          </MotionBadge>

          <MotionFadeUp delay={0.2} y={30}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-display leading-[1.05] sm:leading-[0.95] max-w-5xl mx-auto mb-6 sm:mb-8 break-words px-2">
              CUSTOM BASKETBALL WEAR & GEAR <br />
              <span className="gold-text">BUILT FOR YOUR TEAM.</span>
            </h1>
          </MotionFadeUp>

          <MotionFadeUp delay={0.35} y={20}>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 sm:mb-10 px-2">
              Premium custom basketball uniforms and teamwear designed around your identity, your colors, and your game.
            </p>
          </MotionFadeUp>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <MotionButton delay={0.45} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 font-black text-sm uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded shadow-xl shadow-amber-500/25 hover-shine btn-hover-glow transition-all flex items-center justify-center gap-2 group border border-amber-300/40"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </MotionButton>

            <MotionButton delay={0.55} className="w-full sm:w-auto">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-4 font-black text-sm uppercase tracking-widest text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400 rounded btn-hover-dark transition-all flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE PRODUCTS</span>
                <ChevronRight className="w-4 h-4 text-amber-400 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </MotionButton>
          </div>
        </div>

        {/* Bottom Gold Accent Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-60" />
      </section>

      {/* SECTION: YOUR TEAM. YOUR IDENTITY. YOUR GEAR. */}
      <section className="py-24 bg-white text-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              THE ARMUX EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-zinc-950">
              YOUR TEAM. <span className="gold-text">YOUR IDENTITY.</span> YOUR GEAR.
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto my-6 rounded-full" />
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              ARMUX creates customizable sportswear for teams that want to stand out on and off the court.
              From basketball jerseys and shorts to coach uniforms and performance accessories, ARMUX brings your vision to life through team-focused designs and customization.
            </p>
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionCard delay={0.1} className="h-full">
              <div className="p-8 h-full rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-all shadow-sm hover:shadow-xl hover-lift-light group">
                <MotionIconBox className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/60 transition-all">
                  <Shirt className="w-7 h-7" />
                </MotionIconBox>
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-zinc-900 mb-3 group-hover:text-amber-700 transition-colors">
                  FULLY CUSTOMIZABLE
                </h3>
                <p className="text-sm font-medium text-amber-600 mb-2">
                  Colors • Logos • Names • Numbers • Designs
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Tailored graphics, official crest placement, player names and numbers crafted to match your exact team design specifications.
                </p>
              </div>
            </MotionCard>

            <MotionCard delay={0.2} className="h-full">
              <div className="p-8 h-full rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-all shadow-sm hover:shadow-xl hover-lift-light group">
                <MotionIconBox className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/60 transition-all">
                  <Zap className="w-7 h-7" />
                </MotionIconBox>
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-zinc-900 mb-3 group-hover:text-amber-700 transition-colors">
                  PERFORMANCE FOCUSED
                </h3>
                <p className="text-sm font-medium text-amber-600 mb-2">
                  Lightweight • Breathable • Comfortable
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Engineered with high-grade moisture-wicking fabrics built for intense movement, speed, and endurance during athletic competition.
                </p>
              </div>
            </MotionCard>

            <MotionCard delay={0.3} className="h-full">
              <div className="p-8 h-full rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-all shadow-sm hover:shadow-xl hover-lift-light group">
                <MotionIconBox className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/60 transition-all">
                  <Users className="w-7 h-7" />
                </MotionIconBox>
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-zinc-900 mb-3 group-hover:text-amber-700 transition-colors">
                  TEAM READY
                </h3>
                <p className="text-sm font-medium text-amber-600 mb-2">
                  Designed around your team&apos;s identity
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Unified head-to-toe teamwear solutions including player uniforms, coach outfits, and matching athletic accessories.
                </p>
              </div>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* SECTION: EXPLORE ARMUX */}
      <section className="py-24 bg-zinc-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
                COLLECTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
                EXPLORE <span className="gold-text">ARMUX</span>
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md mt-4 md:mt-0 text-sm">
              Discover customized teamwear solutions built specifically for your squad&apos;s visual identity.
            </p>
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "BASKETBALL",
                subtitle: "Jerseys & Game Shorts",
                image: "/images/jersey_elite.jpg",
                link: "/basketball",
              },
              {
                title: "TEAMWEAR",
                subtitle: "Player & Coach Outfits",
                image: "/images/coach_uniform.jpg",
                link: "/teamwear",
              },
              {
                title: "CUSTOMIZATION",
                subtitle: "Logos, Colors & Numbers",
                image: "/images/jersey_signature.jpg",
                link: "/teamwear",
              },
              {
                title: "ACCESSORIES",
                subtitle: "Headbands, Sleeves & Socks",
                image: "/images/b acc.jpg",
                link: "/accessories",
              },
            ].map((cat, index) => (
              <MotionCard key={cat.title} delay={index * 0.1}>
                <Link
                  href={cat.link}
                  className="group relative h-96 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-400 transition-all duration-300 shadow-xl block hover-lift-dark hover-shine"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block mb-1 group-hover:translate-x-1 transition-transform">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white font-display flex items-center justify-between">
                      <span className="group-hover:text-amber-300 transition-colors">{cat.title}</span>
                      <ArrowRight className="w-5 h-5 text-amber-400 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                    </h3>
                  </div>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FEATURED PRODUCTS */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              ARMUX SELECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950 tracking-tight">
              FEATURED <span className="gold-text">PRODUCTS</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
            <p className="text-zinc-600 text-sm sm:text-base">
              Explore our core customizable basketball jerseys engineered for endurance and team prestige.
            </p>
          </MotionFadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((prod, index) => (
              <MotionCard key={prod.name} delay={index * 0.08} className="h-full">
                <div className="rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl hover-lift-light flex flex-col h-full group">
                  <div className="relative h-72 bg-zinc-100 overflow-hidden hover-zoom-img">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <MotionBadge delay={0.15} className="absolute top-4 left-4 z-10">
                      <div className="bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-amber-400 uppercase tracking-widest border border-amber-500/20 group-hover:border-amber-400/60 transition-colors">
                        CUSTOMIZABLE
                      </div>
                    </MotionBadge>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold uppercase text-zinc-950 mb-2 group-hover:text-amber-600 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-200">
                      <MotionButton className="w-full">
                        <Link
                          href="/contact"
                          className="w-full block py-2.5 px-4 text-center font-bold text-xs uppercase tracking-wider text-black bg-amber-400 hover-shine btn-hover-glow rounded transition-all shadow-sm"
                        >
                          GET A QUOTE
                        </Link>
                      </MotionButton>
                      <MotionButton className="w-full">
                        <Link
                          href="/products"
                          className="w-full block py-2.5 px-4 text-center font-bold text-xs uppercase tracking-wider text-zinc-800 bg-zinc-200 hover:bg-zinc-300 hover:text-black rounded btn-hover-dark transition-all"
                        >
                          DETAILS
                        </Link>
                      </MotionButton>
                    </div>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>

          <MotionFadeUp delay={0.2} className="text-center mt-16">
            <MotionButton className="inline-block">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 font-black text-sm uppercase tracking-widest text-white bg-zinc-950 hover-shine btn-hover-dark rounded transition-all shadow-lg hover:shadow-amber-500/20 group"
              >
                <span>VIEW ALL PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-amber-400 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </MotionButton>
          </MotionFadeUp>
        </div>
      </section>

      {/* SECTION: WHY ARMUX */}
      <section className="py-24 bg-zinc-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-3">
              THE BRAND COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight">
              WHY <span className="gold-text">ARMUX</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "CUSTOM-FIRST APPROACH",
                desc: "Every jersey and piece of teamwear is tailored around your visual vision rather than generic template restrictions.",
              },
              {
                num: "02",
                title: "TEAM IDENTITY",
                desc: "We craft unified apparel that represents your players, coaches, and supporters with pride on and off the court.",
              },
              {
                num: "03",
                title: "PERFORMANCE FOCUSED",
                desc: "High-grade, breathable materials created for freedom of motion, sweat resistance, and active athletic use.",
              },
              {
                num: "04",
                title: "PREMIUM DESIGN",
                desc: "Sharp typography, clean stitchwork, bold color contrast, and modern international aesthetic standards.",
              },
            ].map((item, index) => (
              <MotionCard key={item.num} delay={index * 0.1}>
                <div className="p-6 h-full rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-400 transition-all hover-lift-dark group">
                  <MotionNumber delay={index * 0.1 + 0.15}>
                    <div className="text-amber-400 font-extrabold text-2xl font-display mb-3 group-hover:scale-110 group-hover:text-amber-300 transition-all origin-left">
                      {item.num}
                    </div>
                  </MotionNumber>
                  <h3 className="text-lg font-bold uppercase mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 text-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <MotionFloat duration={3.2} y={6}>
            <Flame className="w-12 h-12 mx-auto mb-6 text-black" />
          </MotionFloat>

          <MotionFadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-6">
              READY TO BUILD <br />
              YOUR TEAM&apos;S LOOK?
            </h2>
          </MotionFadeUp>

          <MotionFadeUp delay={0.2}>
            <p className="text-base sm:text-lg font-medium max-w-xl mx-auto mb-10 text-zinc-950">
              Tell us what you need and let&apos;s create sportswear around your team&apos;s identity.
            </p>
          </MotionFadeUp>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MotionButton delay={0.3} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 font-black text-xs uppercase tracking-widest text-white bg-zinc-950 hover-shine btn-hover-dark rounded shadow-2xl transition-all flex items-center justify-center border border-zinc-800"
              >
                GET A QUOTE
              </Link>
            </MotionButton>

            <MotionButton delay={0.4} className="w-full sm:w-auto">
              <a
                href="https://wa.me/923201713838"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 font-black text-xs uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-100 rounded border border-zinc-900 shadow-md hover-shine btn-hover-glow flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 fill-current text-emerald-600 group-hover:rotate-12 transition-transform duration-200" />
                WHATSAPP US
              </a>
            </MotionButton>
          </div>
        </div>
      </section>
    </div>
  );
}
