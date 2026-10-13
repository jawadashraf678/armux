import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Check, Sparkles, Shield, Flame, CircleDot } from "lucide-react";
import {
  MotionBadge,
  MotionFadeUp,
  MotionCard,
  MotionButton,
  MotionSlideIn,
} from "@/components/MotionWrappers";


export const metadata: Metadata = {
  title: "Custom Basketball Uniforms & Official Balls | ARMUX",
  description:
    "Custom basketball uniforms and official match, indoor, outdoor, youth, and kids basketballs designed around your team's identity.",
};

export default function BasketballPage() {
  const basketballJerseys = [
    {
      name: "ELITE JERSEY",
      image: "/images/jersey_elite.jpg",
      desc: "Advanced performance-focused design with lightweight, durable and moisture-managing construction.",
    },
    {
      name: "PERFORMANCE JERSEY",
      image: "/images/jersey_performance.jpg",
      desc: "Designed for movement with breathable performance-focused construction and full customization.",
    },
    {
      name: "LEGACY JERSEY",
      image: "/images/jersey_legacy.jpg",
      desc: "A classic-inspired basketball design combined with modern performance styling.",
    },
    {
      name: "REVERSIBLE JERSEY",
      image: "/images/jersey_reversible.jpg",
      desc: "A versatile two-sided design created for teams that need flexibility.",
    },
    {
      name: "SIGNATURE JERSEY",
      image: "/images/jersey_signature.jpg",
      desc: "A premium customizable jersey designed around your team's identity.",
    },
  ];

  const basketballList = [
    {
      id: "indoor-ball",
      name: "INDOOR BASKETBALL",
      badge: "PRO INDOOR",
      badgeBg: "bg-amber-400 text-black",
      image: "/images/basketball_indoor_user.jpg",
      surface: "Hardwood Courts",
      material: "Microfiber Composite Leather",
      size: "Official Size 7 (29.5\")",
      desc: "Engineered for indoor hardwood courts, offering soft-feel composite leather and optimal grip control during high-speed championship play."
    },
    {
      id: "outdoor-ball",
      name: "OUTDOOR BASKETBALL",
      badge: "ALL-WEATHER OUTDOOR",
      badgeBg: "bg-zinc-800 text-zinc-200 border border-zinc-700",
      image: "/images/basketball_outdoor_user.jpg",
      surface: "Street & Concrete",
      material: "Reinforced Rubber Composite",
      size: "Official Size 7 (29.5\")",
      desc: "Built to withstand rough asphalt and concrete street courts with extra tack, durable grooving, and weather-resistant surface coating."
    },
    {
      id: "match-ball",
      name: "OFFICIAL MATCH BALL",
      badge: "CHAMPIONSHIP MATCH",
      badgeBg: "bg-amber-500 text-black",
      image: "/images/basketball_match_user.jpg",
      surface: "Tournament Regulation",
      material: "Premium Full-Grain Composite",
      size: "Official Size 7 (29.5\")",
      desc: "The pinnacle of official tournament match balls. Designed for true rotational flight, consistent bounce response, and precision shooting."
    },
    {
      id: "kids-ball",
      name: "KIDS BASKETBALL",
      badge: "MINI / KIDS (SIZE 5)",
      badgeBg: "bg-emerald-500 text-black",
      image: "/images/basketball_kids_user.jpg",
      surface: "Junior Courts & Training",
      material: "Soft-Grip Cushioned Composite",
      size: "Junior Size 5 (27.5\")",
      desc: "Specially sized for young players under 11 years old. Lightweight construction with enhanced grip texture for easy shooting and ball control."
    },
    {
      id: "youth-ball",
      name: "YOUTH BASKETBALL",
      badge: "JUNIOR LEAGUE (SIZE 6)",
      badgeBg: "bg-sky-500 text-black",
      image: "/images/basketball_youth_user.jpg",
      surface: "School & Youth Leagues",
      material: "High-Tack Composite Leather",
      size: "Youth / Women Size 6 (28.5\")",
      desc: "Official Size 6 regulation basketball for youth leagues and women's competitions. Engineered for rapid skill development and consistent handling."
    }
  ];

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* HERO */}
      <section className="bg-zinc-950 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionBadge delay={0.1} className="inline-block">
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 tracking-[0.15em] sm:tracking-[0.25em] uppercase block mb-3">
              BASKETBALL COLLECTION
            </span>
          </MotionBadge>
          <MotionFadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase font-display tracking-tight text-white mb-6 break-words px-2">
              BASKETBALL <br />
              <span className="gold-text">BUILT FOR THE GAME.</span>
            </h1>
          </MotionFadeUp>
          <MotionFadeUp delay={0.35}>
            <p className="max-w-xl mx-auto text-zinc-300 text-sm sm:text-base md:text-lg px-2">
              Custom basketball uniforms and official match gear designed around your team&apos;s identity.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* SECTION: BASKETBALL JERSEYS */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              JERSEY LINEUP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950">
              BASKETBALL <span className="gold-text">JERSEYS</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {basketballJerseys.map((jersey, idx) => (
              <MotionCard
                key={jersey.name}
                delay={idx * 0.08}
                className={`flex flex-col h-full lg:col-span-2 ${
                  idx === 3 ? "lg:col-start-2" : ""
                } ${
                  idx === 4
                    ? "md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 w-full"
                    : ""
                }`}
              >
                <div className="rounded-2xl bg-zinc-50 border border-zinc-200 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl hover-lift-light flex flex-col h-full group">
                  <div className="relative h-80 bg-zinc-100 overflow-hidden hover-zoom-img">
                    <Image
                      src={jersey.image}
                      alt={jersey.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-amber-400 uppercase tracking-widest border border-amber-500/20 group-hover:border-amber-400/60 transition-colors">
                      BASKETBALL
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold uppercase text-zinc-950 mb-2 group-hover:text-amber-600 transition-colors font-display">
                        {jersey.name}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                        {jersey.desc}
                      </p>
                    </div>

                    <Link
                      href={`/contact?product=${encodeURIComponent(jersey.name)}`}
                      className="w-full py-3 px-4 text-center font-extrabold text-xs uppercase tracking-widest text-black bg-amber-400 hover-shine btn-hover-glow rounded shadow transition-all block active:scale-95"
                    >
                      GET A QUOTE
                    </Link>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 5 BASKETBALL TYPES (INDOOR, OUTDOOR, MATCH, KIDS, YOUTH) */}
      <section className="py-24 bg-zinc-950 text-white border-t border-b border-zinc-800 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 mb-4">
              <CircleDot className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-[0.2em]">
                OFFICIAL MATCH & TRAINING BALLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white mb-4">
              ARMUX <span className="gold-text">BASKETBALLS</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Championship tournament regulation & specialty basketballs engineered for maximum grip, true flight control, and all-surface endurance.
            </p>
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {basketballList.map((ball, idx) => (
              <MotionCard
                key={ball.id}
                delay={idx * 0.08}
                className={`flex flex-col h-full lg:col-span-2 ${
                  idx === 3 ? "lg:col-start-2" : ""
                } ${
                  idx === 4
                    ? "md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 w-full"
                    : ""
                }`}
              >
                <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400 transition-all duration-300 shadow-2xl hover-lift-dark flex flex-col h-full group overflow-hidden">
                  <div className="relative h-72 bg-zinc-950 p-6 flex items-center justify-center overflow-hidden hover-zoom-img">
                    <Image
                      src={ball.image}
                      alt={ball.name}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <span className={`absolute top-4 left-4 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-md group-hover:scale-105 transition-transform ${ball.badgeBg}`}>
                      {ball.badge}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-black uppercase text-white font-display mb-2 group-hover:text-amber-400 transition-colors">
                        {ball.name}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                        {ball.desc}
                      </p>

                      <div className="space-y-1.5 text-[11px] text-zinc-400 font-medium border-t border-zinc-800/80 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">Surface:</span>
                          <span className="text-amber-400 font-bold">{ball.surface}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">Material:</span>
                          <span className="text-zinc-300">{ball.material}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">Size & Spec:</span>
                          <span className="text-zinc-300 font-semibold">{ball.size}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/contact?product=${encodeURIComponent(ball.name)}`}
                      className="w-full py-3.5 px-4 text-center font-extrabold text-xs uppercase tracking-widest text-black bg-amber-400 hover-shine btn-hover-glow rounded-xl shadow-lg transition-all block active:scale-95"
                    >
                      GET A QUOTE FOR {ball.name}
                    </Link>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: GIRLS BASKETBALL */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionSlideIn direction="left">
              <div className="relative h-[440px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                <Image
                  src="/images/girls_uniform.jpg?v=4k_hd_logo"
                  alt="ARMUX Girls Basketball Uniform"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </MotionSlideIn>

            <MotionSlideIn direction="right" className="space-y-6">
              <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block">
                GIRLS BASKETBALL
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white leading-tight">
                TEAMWEAR FOR <br />
                <span className="gold-text">EVERY PLAYER.</span>
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                ARMUX offers customizable basketball uniforms for girls&apos; teams, allowing teams to create a unified identity through custom colors, logos, names, numbers and designs.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <MotionCard delay={0.05}>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="font-extrabold text-sm text-amber-400 uppercase">CUSTOM COLORS</div>
                  </div>
                </MotionCard>
                <MotionCard delay={0.1}>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="font-extrabold text-sm text-amber-400 uppercase">CUSTOM LOGOS</div>
                  </div>
                </MotionCard>
                <MotionCard delay={0.15}>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="font-extrabold text-sm text-amber-400 uppercase">CUSTOM NAMES</div>
                  </div>
                </MotionCard>
                <MotionCard delay={0.2}>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="font-extrabold text-sm text-amber-400 uppercase">CUSTOM NUMBERS</div>
                  </div>
                </MotionCard>
              </div>

              <div className="pt-4">
                <MotionButton className="inline-block">
                  <Link
                    href="/contact?product=Girls%20Basketball%20Uniform"
                    className="inline-flex items-center gap-2 px-8 py-4 font-black text-xs uppercase tracking-widest text-black bg-amber-400 hover:bg-amber-300 rounded shadow-lg transition-all"
                  >
                    <span>GET A QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MotionButton>
              </div>
            </MotionSlideIn>
          </div>
        </div>
      </section>

      {/* SECTION: BASKETBALL SHORTS */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              GAME SHORTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950">
              PERFORMANCE <span className="gold-text">BASKETBALL SHORTS</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
            <p className="text-zinc-600 text-base">
              Complete your team uniform with lightweight, breathable basketball shorts designed for movement and performance.
            </p>
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "BREATHABLE", desc: "Engineered side mesh ventilation for game comfort." },
              { title: "QUICK-DRY", desc: "Rapid sweat dissipation for dry execution under pressure." },
              { title: "ADJUSTABLE WAIST", desc: "Heavy elastic waistband with reinforced interior drawstrings." },
              { title: "CUSTOMIZABLE", desc: "Side leg striping, team crest patch & player numbers." },
            ].map((shortFeature, idx) => (
              <MotionCard key={shortFeature.title} delay={idx * 0.1}>
                <div className="p-6 h-full rounded-2xl bg-zinc-50 border border-zinc-200 text-center">
                  <h3 className="font-extrabold text-lg uppercase text-zinc-950 mb-2">{shortFeature.title}</h3>
                  <p className="text-xs text-zinc-600">{shortFeature.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>

          <div className="text-center">
            <MotionButton className="inline-block">
              <Link
                href="/contact?product=Basketball%20Shorts"
                className="inline-flex items-center gap-2 px-8 py-4 font-black text-xs uppercase tracking-widest text-black bg-amber-400 hover:bg-amber-300 rounded shadow-xl transition-all"
              >
                <span>GET A QUOTE FOR SHORTS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MotionButton>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-zinc-950 text-white text-center border-t border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <MotionFadeUp>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight mb-6">
              YOUR COURT. YOUR COLORS. <br />
              <span className="gold-text">YOUR TEAM.</span>
            </h2>
          </MotionFadeUp>
          <MotionButton delay={0.2} className="inline-block">
            <Link
              href="/teamwear"
              className="inline-flex items-center justify-center px-10 py-4 font-black text-xs uppercase tracking-widest text-black bg-amber-400 hover:bg-amber-300 rounded shadow-xl transition-all"
            >
              CUSTOMIZE YOUR TEAMWEAR
            </Link>
          </MotionButton>
        </div>
      </section>
    </div>
  );
}
