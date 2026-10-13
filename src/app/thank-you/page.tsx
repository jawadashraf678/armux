"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Clock,
  ShieldCheck,
  Layers,
  Home,
  PackageCheck,
  PhoneCall,
  FileCheck2,
} from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Valued Coach / Athlete";
  const team = searchParams.get("team") || "Your Team";
  const product = searchParams.get("product") || "Custom Sportswear";
  const qty = searchParams.get("qty") || "Full Squad Order";
  const contact = searchParams.get("contact") || "WhatsApp";

  const [refId, setRefId] = useState("ARMUX-7842");

  useEffect(() => {
    // Generate an authentic quote reference ID
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setRefId(`ARMUX-QT-${randomCode}`);
  }, []);

  const nextSteps = [
    {
      step: "01",
      title: "Roster & Vector Review",
      desc: "Our design team reviews your color hexes, artwork, logos, and quantity specifications.",
    },
    {
      step: "02",
      title: "3D Digital Vector Proof",
      desc: "You will receive full 3D interactive mockups for team committee and player approval.",
    },
    {
      step: "03",
      title: "Custom Sublimation & Delivery",
      desc: "Upon proof sign-off, high-density fabric cutting, printing, and direct dispatch begin.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello ARMUX Team! I just submitted an inquiry on your website for ${team} (${product}, ${qty}). My reference is ${refId}. Looking forward to discussing details!`
  );

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glow & Subtle Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Animated Checkmark Badge */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-black flex items-center justify-center shadow-2xl shadow-amber-500/40 border-4 border-black relative z-10">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-amber-500/40 mb-6 max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.25em] text-amber-300 uppercase">
            INQUIRY REGISTERED SUCCESSFULLY
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display tracking-tight text-white mb-4 leading-tight break-words px-2">
          THANK YOU, <span className="gold-text">{name}</span>!
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed mb-10 px-2">
          Your custom sportswear request for <strong className="text-white font-bold">{team}</strong> has been received by the ARMUX design desk. We are excited to build your teamwear.
        </p>

        {/* Luxury Confirmation Card / Receipt */}
        <div className="bg-zinc-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 mb-12 text-left relative overflow-hidden backdrop-blur-xl hover-lift-dark transition-all">
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                OFFICIAL REFERENCE CODE
              </span>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-wider">
                {refId}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: UNDER ACTIVE REVIEW
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 border-b border-zinc-800 text-xs">
            <div>
              <span className="text-zinc-500 font-semibold uppercase block mb-1">TEAM / SQUAD</span>
              <span className="text-white font-bold text-sm block truncate">{team}</span>
            </div>
            <div>
              <span className="text-zinc-500 font-semibold uppercase block mb-1">PRODUCT CATEGORY</span>
              <span className="text-white font-bold text-sm block truncate">{product}</span>
            </div>
            <div>
              <span className="text-zinc-500 font-semibold uppercase block mb-1">ORDER SCOPE</span>
              <span className="text-white font-bold text-sm block">{qty}</span>
            </div>
            <div>
              <span className="text-zinc-500 font-semibold uppercase block mb-1">PREFERRED CONTACT</span>
              <span className="text-amber-400 font-bold text-sm block">{contact}</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Expected consultation response: <strong className="text-zinc-200">within 1 to 2 hours</strong>
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Official 100% Sublimated Performance Guarantee</span>
            </div>
          </div>
        </div>

        {/* 3 Next Steps Section */}
        <div className="mb-14">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-amber-400 uppercase block mb-2">
              WHAT HAPPENS NEXT?
            </span>
            <h2 className="text-xl sm:text-3xl font-black uppercase font-display text-white">
              OUR 3-STEP <span className="gold-text">WORKFLOW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            {nextSteps.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 hover-lift-dark transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-mono font-black text-sm mb-4 group-hover:scale-110 transition-transform">
                    {s.step}
                  </div>
                  <h3 className="text-base font-extrabold text-white uppercase font-display mb-2 group-hover:text-amber-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-lg mx-auto">
          <a
            href={`https://wa.me/923201713838?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 py-4 px-6 font-black text-xs uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 hover-shine btn-hover-glow hover-lift"
          >
            <MessageSquare className="w-4 h-4 text-black" />
            <span>FAST-TRACK ON WHATSAPP</span>
          </a>

          <Link
            href="/products"
            className="w-full sm:w-auto flex-1 py-4 px-6 font-black text-xs uppercase tracking-widest text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400 rounded-xl transition-all flex items-center justify-center gap-2 btn-hover-dark hover-lift"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>EXPLORE PRODUCTS</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto py-4 px-5 font-black text-xs uppercase tracking-widest text-zinc-400 hover:text-white bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-xl transition-all flex items-center justify-center gap-1.5 btn-hover-dark hover-lift"
            title="Return to Home"
          >
            <Home className="w-4 h-4" />
            <span className="sm:hidden">HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
          <div className="text-amber-400 font-bold font-display uppercase tracking-widest animate-pulse">
            Loading Confirmation Receipt...
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
