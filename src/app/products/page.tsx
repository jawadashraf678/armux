"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, X, Shield, Sparkles, Shirt, Flame, ChevronRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionBadge, MotionFadeUp, MotionCard, MotionButton } from "@/components/MotionWrappers";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  useEffect(() => {
    if (categoryParam) {
      const upper = categoryParam.toUpperCase();
      if (["ALL", "UNIFORMS", "JERSEYS", "APPAREL", "ACCESSORIES"].includes(upper)) {
        setActiveCategory(upper);
      }
    }
  }, [categoryParam]);

  const uniformsList = [
    {
      id: "youth-uniform",
      name: "YOUTH UNIFORM",
      category: "UNIFORMS",
      subCategory: "Youth League",
      image: "/images/youth_uniform.jpg",
      description: "Customizable youth basketball uniform tailored for junior leagues and school teams with flexible athletic fit.",
      features: ["Junior Athletic Cut", "Durable Lightweight Mesh", "Custom Team Numbers & Names", "Breathable Fabric"],
      badge: "POPULAR YOUTH",
    },
    {
      id: "kids-uniform",
      name: "KIDS UNIFORM",
      category: "UNIFORMS",
      subCategory: "Mini League",
      image: "/images/kids_uniform.jpg",
      description: "Comfortable and vibrant basketball kit designed specifically for young kids and mini-league athletes.",
      features: ["Soft Touch Fabric", "Elastic Waistband Shorts", "Vibrant Sublimation", "Easy Care & Washable"],
      badge: "KIDS SPECIAL",
    },
    {
      id: "girls-uniform",
      name: "GIRLS UNIFORM",
      category: "UNIFORMS",
      subCategory: "Women & Girls",
      image: "/images/girls uniform.jpg",
      description: "Customizable uniforms designed around team identity with tailored female athletic cut and enhanced ergonomics.",
      features: ["Tailored Female Cut", "Moisture-Wicking Technology", "Custom Team Branding", "Ergonomic Side Panels"],
      badge: "TAILORED CUT",
    },
    {
      id: "coach-uniform",
      name: "COACH UNIFORM",
      category: "UNIFORMS",
      subCategory: "Staff & Coaches",
      image: "/images/coach_uniform.jpg",
      description: "Professional teamwear for coaching staff including performance polo shirts, quarter-zips and sideline trousers.",
      features: ["Professional Staff Polo / Zip", "Embroidered Team Crest", "Lightweight Comfort", "Wrinkle Resistant"],
      badge: "STAFF EDITION",
    },
    {
      id: "warmup-suit",
      name: "WARM UP SUIT",
      category: "UNIFORMS",
      subCategory: "Pre-Game Gear",
      image: "/images/warmup_suit.jpg",
      description: "Sleek team warm-up jacket and track pants kit designed for pre-game preparations, travel, and sideline warmth.",
      features: ["Full-Zip Track Jacket", "Zippered Pockets & Cuffs", "Wind & Chill Resistant", "Custom Team Logo Embroidery"],
      badge: "PRE-GAME KIT",
    },
    {
      id: "training-bibs",
      name: "TRAINING BIBS",
      category: "UNIFORMS",
      subCategory: "Practice & Scrimmage",
      image: "/images/bibs_black_gold.jpg",
      description: "Ultra-breathable athletic scrimmage bibs engineered for high-intensity team drills, practice games, and squad differentiation.",
      features: ["Breathable Micro-Mesh", "Reinforced Deep Armholes", "Dual-Sided Reversible Colors", "Custom Squad Numbering"],
      badge: "TRAINING ESSENTIAL",
    },
  ];

  const apparelList = [
    {
      id: "armux-hoodies",
      name: "PERFORMANCE HOODIES",
      category: "APPAREL",
      subCategory: "Athletic Fleece (5 Colors)",
      image: "/images/hoodie_black_gold.jpg",
      pageUrl: "/hoodies",
      description: "Heavyweight 360 GSM fleece hoodies featuring gold inner lining, gold eyelets, and official golden wolf chest emblem in 5 colorways.",
      features: ["Black & Gold, Red, Yellow, White & Striped", "Heavyweight 360 GSM Fleece", "Embroidered Golden Wolf Crest", "Kangaroo Warmth Pocket"],
      badge: "5 COLORWAYS",
    },
    {
      id: "armux-warmup-suits",
      name: "WARM UP SUITS & TRACKSUITS",
      category: "APPAREL",
      subCategory: "Travel & Sideline Kits",
      image: "/images/warmup_black_gold.jpg",
      pageUrl: "/warmup-suits",
      description: "Full-zip track jacket and tapered track pants engineered for team travel, sideline warmth, and quick bench substitutions.",
      features: ["Full-Zip Jacket & Tapered Pants", "Concealed Ankle Zipper Fast Entry", "Wind & Cold Chill Deflector", "Zippered Security Pockets"],
      badge: "4 COLORWAYS",
    },
    {
      id: "armux-training-suits",
      name: "PRECISION TRAINING SUITS",
      category: "APPAREL",
      subCategory: "Agility Drill Kits",
      image: "/images/training_black_gold.jpg",
      pageUrl: "/training-suits",
      description: "Athletic 1/4 zip drill top with ergonomic thumbholes and stretch drill pants engineered for rapid gym and court conditioning.",
      features: ["1/4 Zip Stand-Up Collar", "Invisible Thumbhole Cuffs", "4-Way High Flex Agility Fabric", "Slim Athletic Silhouette"],
      badge: "5 EDITIONS",
    },
    {
      id: "armux-compression",
      name: "GRADUATED COMPRESSION GEAR",
      category: "APPAREL",
      subCategory: "Vascular Base Layers",
      image: "/images/compression_black_gold.jpg",
      pageUrl: "/compression",
      description: "Vascular support compression tops and muscle recovery tights reducing muscle oscillation and accelerating lactic acid clearance.",
      features: ["Graduated 25-30 mmHg Pressure", "Flatlock Zero-Chafe Seams", "Under-Jersey Heat Regulation", "Targeted Quad & Hamstring Lock"],
      badge: "4 COLORWAYS",
    },
    {
      id: "armux-striped-hoodie",
      name: "ATHLETIC STRIPED HOODIE",
      category: "APPAREL",
      subCategory: "Racing Stripe Edition",
      image: "/images/hoodie_striped.jpg",
      pageUrl: "/hoodies",
      description: "Modern athletic pullover hoodie with bold dual racing chest stripes in gold and white, featuring centered ARMUX insignia.",
      features: ["Speed Stripe Chest Graphics", "Ribbed Athletic Cuffs & Hem", "Satin Hood Lining", "Premium Cotton-Poly Blend"],
      badge: "LIMITED EDITION",
    },
    {
      id: "armux-strike-tracksuit",
      name: "RED & BLACK STRIKE TRACKSUIT",
      category: "APPAREL",
      subCategory: "Pro Team Colorway",
      image: "/images/warmup_red_black.jpg",
      pageUrl: "/warmup-suits",
      description: "Aggressive two-tone track jacket and matching jogger pants in vivid crimson and stealth black with official ARMUX emblem.",
      features: ["High-Contrast Squad Colorway", "Breathable Mesh Lining", "Custom Name & Number Printing", "Tapered Ankle Ribbing"],
      badge: "PRO EDITION",
    },
  ];

  const jerseysAndAccessories = [
    {
      id: "elite-jersey",
      name: "BLACK & GOLD ELITE JERSEY",
      category: "JERSEYS",
      image: "/images/jersey_black_gold.jpg",
      description: "Advanced performance-focused design in Black & Gold with lightweight, durable and moisture-managing construction.",
      features: ["Custom Colors & Logos", "Golden Wolf Foil Logo", "Lightweight Mesh Panels", "Moisture Wicking"],
    },
    {
      id: "performance-jersey",
      name: "RED & BLACK PERFORMANCE JERSEY",
      category: "JERSEYS",
      image: "/images/jersey_red_black.jpg",
      description: "Aggressive Red & Black basketball jersey with dynamic side geometric patterns and metallic gold ARMUX emblem.",
      features: ["Ergonomic Cut", "Sleeveless Athletic Cut", "Player Name & Number", "Durable Stitching"],
    },
    {
      id: "legacy-jersey",
      name: "YELLOW & BLACK LEGACY JERSEY",
      category: "JERSEYS",
      image: "/images/jersey_yellow_black.jpg",
      description: "Vibrant Yellow & Black basketball jersey engineered for team prestige and high visibility on court.",
      features: ["Classic Athletic Trim", "Breathable Mesh Fabric", "Sublimated / Foil Logo", "V-Neck Collar"],
    },
    {
      id: "signature-jersey",
      name: "WHITE & GOLD SIGNATURE JERSEY",
      category: "JERSEYS",
      image: "/images/jersey_white_gold.jpg",
      description: "Clean White & Golden premium customizable basketball jersey featuring golden ARMUX emblem.",
      features: ["High-End Crest Foil / Patch", "Reflective Accents", "Tailored Sleeveless Fit", "Breathable Fabric"],
    },
    {
      id: "reversible-jersey",
      name: "REVERSIBLE TOP SINGLET",
      category: "JERSEYS",
      image: "/images/reversible_top_singlet.jpg",
      description: "Versatile 2-in-1 dual-sided reversible basketball singlet top for home and away flexibility.",
      features: ["Dual-Sided Sublimation", "Home & Away Kit in One", "Lightweight Double Mesh", "Custom Team Branding"],
    },
    {
      id: "reversible-shorts",
      name: "REVERSIBLE BOTTOM SHORTS",
      category: "JERSEYS",
      image: "/images/reversible_bottom_shorts.jpg",
      description: "Dual-sided reversible basketball shorts matching team singlets in Black, Yellow & Gold.",
      features: ["Reversible 2-in-1 Shorts", "Deep Pockets & Drawstring", "Elastic Athletic Band", "Gold Logo Print"],
    },
    {
      id: "sports-accessories",
      name: "SPORTS ACCESSORIES KIT",
      category: "ACCESSORIES",
      image: "/images/b acc.jpg",
      description: "Complete set of athletic accessories: Headbands, Wristbands, Knee Pads, Arm Sleeves, Socks, Ankle Braces.",
      features: ["Headbands & Wristbands", "Compression Arm Sleeves", "Protective Knee Pads", "Custom Team Socks"],
    },
  ];

  const allProducts = [...uniformsList, ...apparelList, ...jerseysAndAccessories];

  const categories = [
    { id: "ALL", label: "ALL" },
    { id: "UNIFORMS", label: "UNIFORMS" },
    { id: "JERSEYS", label: "JERSEYS" },
    { id: "APPAREL", label: "SPORTSWEAR APPAREL" },
    { id: "ACCESSORIES", label: "ACCESSORIES" },
  ];

  const filteredProducts =
    activeCategory === "ALL"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* HERO */}
      <section className="bg-zinc-950 text-white pt-36 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionBadge delay={0.1} className="inline-block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 mb-6 max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] text-amber-300 uppercase truncate sm:whitespace-normal">
                ARMUX PRODUCT CATALOG
              </span>
            </div>
          </MotionBadge>
          <MotionFadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display tracking-tight text-white mb-6 break-words px-2">
              SPORTSWEAR MADE <br />
              <span className="gold-text">AROUND YOUR TEAM.</span>
            </h1>
          </MotionFadeUp>
          <MotionFadeUp delay={0.35}>
            <p className="max-w-xl mx-auto text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed px-2">
              Explore ARMUX&apos;s full range of custom athletic uniforms, high-performance jerseys, sportswear apparel, and team accessories.
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* SPECIAL UNIFORMS SECTION HIGHLIGHT */}
      <section className="py-20 bg-zinc-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-2">
                FEATURED COLLECTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
                UNIFORM <span className="gold-text">SECTION</span>
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm mt-3 md:mt-0">
              Custom-tailored uniform solutions for players of all ages, coaches, and sideline warm-up gear.
            </p>
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniformsList.map((uniform, idx) => (
              <MotionCard key={uniform.id} delay={idx * 0.08} className="h-full">
                <div className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-xl hover-lift-dark flex flex-col h-full group">
                  <div className="relative h-80 bg-zinc-900 overflow-hidden hover-zoom-img">
                    <Image
                      src={uniform.image}
                      alt={uniform.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-md group-hover:scale-105 transition-transform">
                      {uniform.badge}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-amber-400/80 tracking-widest uppercase block mb-1">
                        {uniform.subCategory}
                      </span>
                      <h3 className="text-2xl font-black uppercase text-white mb-2 group-hover:text-amber-400 transition-colors font-display">
                        {uniform.name}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                        {uniform.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {uniform.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
                      <button
                        onClick={() => setSelectedProduct(uniform)}
                        className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded btn-hover-dark transition-all active:scale-95"
                      >
                        VIEW DETAILS
                      </button>
                      <Link
                        href={`/contact?product=${encodeURIComponent(uniform.name)}`}
                        className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded hover-shine btn-hover-glow transition-all flex items-center justify-center gap-1 active:scale-95 group/btn"
                      >
                        <span>GET QUOTE</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL SPORTSWEAR APPAREL SECTION HIGHLIGHT */}
      <section id="apparel" className="py-20 bg-zinc-950 text-white relative border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase block mb-2">
                TEAM APPAREL & OUTERWEAR
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
                SPORTSWEAR <span className="gold-text">APPAREL</span>
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm mt-3 md:mt-0">
              Athletic hoodies, training bibs, warmup tracksuits and lifestyle gear built with official ARMUX team styling.
            </p>
          </MotionFadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apparelList.map((apparel, idx) => (
              <MotionCard key={apparel.id} delay={idx * 0.08} className="h-full">
                <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-xl hover-lift-dark flex flex-col h-full group">
                  <div className="relative h-80 bg-zinc-950 overflow-hidden hover-zoom-img">
                    <Image
                      src={apparel.image}
                      alt={apparel.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-md group-hover:scale-105 transition-transform">
                      {apparel.badge}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-amber-400/80 tracking-widest uppercase block mb-1">
                        {apparel.subCategory}
                      </span>
                      {apparel.pageUrl ? (
                        <Link href={apparel.pageUrl} className="block group/link">
                          <h3 className="text-2xl font-black uppercase text-white mb-2 group-hover/link:text-amber-400 transition-colors font-display">
                            {apparel.name}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="text-2xl font-black uppercase text-white mb-2 group-hover:text-amber-400 transition-colors font-display">
                          {apparel.name}
                        </h3>
                      )}
                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                        {apparel.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {apparel.features.map((feat: string, fIdx: number) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
                      {apparel.pageUrl ? (
                        <Link
                          href={apparel.pageUrl}
                          className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded btn-hover-dark transition-all flex items-center justify-center gap-1 active:scale-95 group/linkbtn"
                        >
                          <span>ALL COLORS</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/linkbtn:translate-x-1" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => setSelectedProduct(apparel)}
                          className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded btn-hover-dark transition-all active:scale-95"
                        >
                          VIEW DETAILS
                        </button>
                      )}
                      <Link
                        href={`/contact?product=${encodeURIComponent(apparel.name)}`}
                        className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded hover-shine btn-hover-glow transition-all flex items-center justify-center gap-1 active:scale-95 group/btn"
                      >
                        <span>GET QUOTE</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR & ALL PRODUCTS CATALOG */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFadeUp className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-2">
            FULL CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-zinc-950">
            EXPLORE ALL <span className="gold-text">PRODUCTS</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
        </MotionFadeUp>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-amber-400 text-black shadow-md shadow-amber-500/20 font-black"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <MotionCard key={product.id} delay={Math.min(idx * 0.05, 0.4)} className="h-full">
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl hover-lift-light flex flex-col h-full group">
                <div className="relative h-72 bg-zinc-100 overflow-hidden hover-zoom-img">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-amber-400 uppercase tracking-widest border border-amber-500/20 group-hover:border-amber-400/60 transition-colors">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-zinc-950 mb-2 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {product.features.slice(0, 3).map((feat: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-zinc-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-200">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-zinc-800 bg-zinc-200 hover:bg-zinc-300 rounded btn-hover-dark transition-all active:scale-95"
                    >
                      VIEW DETAILS
                    </button>
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-black bg-amber-400 hover-shine btn-hover-glow rounded transition-all active:scale-95"
                    >
                      GET A QUOTE
                    </Link>
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      {/* PRODUCT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-amber-400/40"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black hover:rotate-90 hover:scale-110 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto bg-zinc-100 overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 tracking-widest uppercase block mb-1">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 font-display">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>

                    <h4 className="text-xs font-bold uppercase text-zinc-900 mb-3 tracking-wider">
                      SPECIFICATIONS & FEATURES:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProduct.features.map((feat: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                          <Check className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-200">
                    <Link
                      href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                      className="w-full block py-3 text-center font-extrabold text-xs uppercase tracking-widest text-black bg-amber-400 hover-shine btn-hover-glow rounded shadow"
                    >
                      REQUEST QUOTE FOR THIS ITEM
                    </Link>
                    <Link
                      href="/teamwear"
                      className="w-full block py-2.5 text-center font-bold text-xs uppercase tracking-widest text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded btn-hover-dark transition-all"
                    >
                      CUSTOMIZE TEAM LOGO & COLORS
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SECTION: NEED SOMETHING CUSTOM? */}
      <section className="py-20 bg-zinc-950 text-white text-center border-t border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4 animate-bounce" />
          <MotionFadeUp>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display mb-4">
              NEED SOMETHING <span className="gold-text">CUSTOM?</span>
            </h2>
          </MotionFadeUp>
          <MotionFadeUp delay={0.1}>
            <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
              Have a specific design or team requirement? Tell us what you have in mind and let&apos;s explore the possibilities.
            </p>
          </MotionFadeUp>
          <MotionButton delay={0.2} className="inline-block">
            <Link
              href="/teamwear"
              className="inline-flex items-center gap-2 px-8 py-4 font-black text-xs uppercase tracking-widest text-black bg-amber-400 hover-shine btn-hover-glow rounded shadow-xl transition-all group"
            >
              <span>CUSTOMIZE YOUR TEAMWEAR</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </MotionButton>
        </div>
      </section>
    </div>

  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-amber-400 font-bold tracking-widest uppercase text-sm">
        Loading ARMUX Products...
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
