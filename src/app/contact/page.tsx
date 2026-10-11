"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Palette,
  Truck,
  Users,
  Award,
  UploadCloud,
  FileText,
  ArrowRight,
  HelpCircle,
  FileCheck
} from "lucide-react";

// FAQ Accordion Component
function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "01",
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "ARMUX accommodates both small team orders and full club roster packages. Flexible MOQs are available for initial squad orders and sample runs. Contact our sales department on WhatsApp for specific squad size recommendations."
    },
    {
      id: "02",
      q: "What customization options are available?",
      a: "We offer complete full-dye sublimation, high-density embroidery, custom collar cuts, ribbed trims, athletic waistbands, side mesh ventilation panels, custom typography fonts, and roster-wide player numbers."
    },
    {
      id: "03",
      q: "How do I submit artwork or team logos?",
      a: "Vector format files (.AI, .EPS, .PDF) provide the sharpest printing clarity. You can also upload your logo file directly in our inquiry form or send high-resolution PNG / JPG files via email or WhatsApp."
    },
    {
      id: "04",
      q: "Can I request samples before placing a full team order?",
      a: "Yes! Fabric swatches, color proofing chips, and physical pre-production sample kits can be prepared upon request for team board or athletic director approval."
    },
    {
      id: "05",
      q: "What are the standard payment terms?",
      a: "Production begins upon digital mockup approval and receipt of initial order deposit, with the remaining balance settled prior to final quality dispatch."
    },
    {
      id: "06",
      q: "What are the estimated delivery timelines?",
      a: "Timelines depend on overall order quantity, printing technique, and shipping destination. Firm dispatch dates are confirmed immediately upon artwork proof approval."
    }
  ];

  return (
    <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto px-1 sm:px-0">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
              isOpen 
                ? "bg-white border-amber-400/90 shadow-md ring-2 ring-amber-400/15" 
                : "bg-white border-zinc-200/90 hover:border-amber-400/60 shadow-xs hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-3 group cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0">
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[11px] sm:text-xs font-black shrink-0 transition-all mt-0.5 sm:mt-0 ${
                  isOpen 
                    ? "bg-amber-400 text-black font-mono shadow-xs" 
                    : "bg-zinc-100 text-zinc-500 font-mono group-hover:bg-amber-100 group-hover:text-amber-800"
                }`}>
                  {faq.id}
                </span>
                <span className={`text-xs sm:text-base font-extrabold transition-colors leading-snug font-display break-words ${
                  isOpen ? "text-amber-600" : "text-zinc-900 group-hover:text-amber-600"
                }`}>
                  {faq.q}
                </span>
              </div>
              <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 sm:mt-0 ${
                isOpen 
                  ? "bg-amber-400 text-black rotate-180 shadow-xs" 
                  : "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-700"
              }`}>
                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
              </span>
            </button>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-zinc-100/80 pl-14 sm:pl-16">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preSelectedProduct = searchParams.get("product") || "";
  const preSelectedConcept = searchParams.get("concept") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    teamOrganization: "",
    email: "",
    phoneWhatsapp: "",
    lookingFor: preSelectedProduct ? "Basketball Jerseys" : "Basketball Jerseys",
    estimatedQuantity: "11-25 Sets",
    preferredContact: "WhatsApp",
    requiredDeliveryDate: "",
    message: preSelectedConcept
      ? `Interested in custom design concept: ${preSelectedConcept}`
      : preSelectedProduct
      ? `Inquiring about ${preSelectedProduct}`
      : "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedProduct) {
      if (preSelectedProduct.toLowerCase().includes("short")) {
        setFormData((prev) => ({ ...prev, lookingFor: "Basketball Shorts" }));
      } else if (preSelectedProduct.toLowerCase().includes("girls")) {
        setFormData((prev) => ({ ...prev, lookingFor: "Girls Basketball Uniforms" }));
      } else if (preSelectedProduct.toLowerCase().includes("coach")) {
        setFormData((prev) => ({ ...prev, lookingFor: "Coach Uniforms" }));
      } else if (preSelectedProduct.toLowerCase().includes("accessories")) {
        setFormData((prev) => ({ ...prev, lookingFor: "Accessories" }));
      }
    }
  }, [preSelectedProduct]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const query = new URLSearchParams({
      name: formData.fullName || "Coach",
      team: formData.teamOrganization || "Your Team",
      qty: formData.estimatedQuantity || "Full Squad Order",
      contact: formData.preferredContact || "WhatsApp",
      product: formData.lookingFor || "Custom Sportswear",
    }).toString();
    router.push(`/thank-you?${query}`);
  };

  const customizationCards = [
    {
      id: "jerseys",
      title: "BASKETBALL JERSEYS",
      subtitle: "Full-Dye Sublimated & Cut-Sleeve Cuts",
      image: "/images/shirt.jpg",
      badge: "CORE TEAMWEAR",
      description: "Custom neckline options (V-neck, round cut), moisture-wicking athletic polyester, and fade-resistant team color sublimation."
    },
    {
      id: "shorts",
      title: "MATCHING SHORTS",
      subtitle: "Ergonomic Cuts & Mesh Inserts",
      image: "/images/shorts.jpg",
      badge: "ATHLETIC FIT",
      description: "Reinforced elastic waistband with internal drawstring, optional side seam slits, and targeted ventilation zones."
    },
    {
      id: "typography",
      title: "NAMES & NUMBERS",
      subtitle: "Roster Personalization",
      image: "/images/jersey_red_black.jpg",
      badge: "PRECISION PRINT",
      description: "High-definition custom squad numbering, player surnames, sponsor badges, and embroidered team crests."
    },
    {
      id: "kits",
      title: "COMPLETE TEAM KITS",
      subtitle: "Jerseys, Warmups & Accessories",
      image: "/images/warmup_suit.jpg",
      badge: "FULL SQUAD PACKAGE",
      description: "Comprehensive gear setups including shooter shirts, travel tracksuits, compression gear, and matching team socks."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Share Requirements",
      icon: FileText,
      desc: "Provide your team color hexes, logo artwork, estimated sizes, and kit preferences."
    },
    {
      step: "02",
      title: "Approve Custom Design",
      icon: Palette,
      desc: "Our design team crafts 3D digital vector proofs for your final review and approval."
    },
    {
      step: "03",
      title: "Production & QC",
      icon: ShieldCheck,
      desc: "Precision dye sublimation, durable flatlock stitching, and strict quality control."
    },
    {
      step: "04",
      title: "Dispatch & Delivery",
      icon: Truck,
      desc: "Secure packaging and tracked direct delivery straight to your team headquarters."
    }
  ];

  const whyChooseUs = [
    {
      icon: Sparkles,
      title: "100% Custom Team Designs",
      desc: "No cookie-cutter templates. Every kit is tailor-made around your school, club, or league identity."
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      desc: "Pro-grade technical fabrics, tear-resistant stitching, and vibrant colors engineered for hard play."
    },
    {
      icon: Users,
      title: "Roster-Wide Uniformity",
      desc: "Flawless color matching across men's, women's, youth rosters, and coaching staff apparel."
    },
    {
      icon: MessageSquare,
      title: "Dedicated Direct Support",
      desc: "1-on-1 personal assistance via WhatsApp and email from initial quote through post-delivery."
    }
  ];

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* HERO SECTION - SLEEK DARK WITH GOLD GLOW */}
      <section className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white pt-36 pb-24 relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/40 backdrop-blur-md mb-6 max-w-full">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span className="text-[10px] sm:text-xs font-black tracking-[0.12em] sm:tracking-[0.25em] text-amber-300 uppercase truncate sm:whitespace-normal">
              ARMUX CUSTOM SPORTWEAR CONSULTATION
            </span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase font-display tracking-tight text-white mb-6 leading-tight break-words px-2">
            LET&apos;S TALK <span className="gold-text">TEAMWEAR.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-base sm:text-xl font-normal leading-relaxed">
            Have a custom basketball or sportswear project in mind? Tell ARMUX what your team needs, and our specialists will build a tailored roster package.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS & INQUIRY FORM SECTION - CLEAN LIGHT THEME */}
      <section className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-2">
                  DIRECT CONTACT
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-zinc-950 mb-4">
                  ARMUX HEADQUARTERS
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  Our sportswear consultants are ready to discuss your order, vector logo files, roster size distributions, and custom colorways.
                </p>
              </div>

              <div className="space-y-5">
                {/* WhatsApp Card */}
                <div className="p-7 rounded-3xl bg-white border border-emerald-500/30 shadow-lg relative overflow-hidden group hover:border-emerald-500 transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold border border-emerald-200">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                          WHATSAPP / PHONE
                        </div>
                        <div className="text-xl font-black text-zinc-900 font-display">
                          +92 320 1713838
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/923201713838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 font-black text-xs uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>START WHATSAPP CHAT</span>
                  </a>
                </div>

                {/* Email & Web Cards */}
                <div className="p-7 rounded-3xl bg-white border border-zinc-200 space-y-5 shadow-md">
                  <div className="flex items-center gap-4 border-b border-zinc-100 pb-5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        GENERAL INQUIRIES
                      </div>
                      <a href="mailto:info@armuxofficial.com" className="text-base font-bold text-zinc-900 hover:text-amber-600 transition-colors">
                        info@armuxofficial.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-b border-zinc-100 pb-5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        SALES DEPARTMENT
                      </div>
                      <a href="mailto:sales@armuxofficial.com" className="text-base font-bold text-zinc-900 hover:text-amber-600 transition-colors">
                        sales@armuxofficial.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        OFFICIAL WEBSITE
                      </div>
                      <div className="text-base font-bold text-zinc-900">
                        armuxofficial.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-xl relative">
                <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-2">
                  INQUIRY FORM
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase font-display text-zinc-950 mb-8">
                  START YOUR <span className="gold-text">CUSTOM ORDER</span>
                </h2>

                {submitted ? (
                  <div className="py-16 text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black uppercase text-zinc-950 font-display">
                      INQUIRY RECEIVED!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-amber-600">{formData.fullName}</strong>. Our team will review your specifications for <strong className="text-zinc-900">{formData.teamOrganization || "your team"}</strong> ({formData.estimatedQuantity}) and contact you via {formData.preferredContact} promptly.
                    </p>
                    
                    {selectedFile && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-xl text-xs text-amber-700 font-medium">
                        <FileCheck className="w-4 h-4" />
                        <span>Attached File: {selectedFile.name}</span>
                      </div>
                    )}

                    <div>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setSelectedFile(null);
                        }}
                        className="mt-4 px-8 py-3.5 font-black text-xs uppercase tracking-widest text-black bg-amber-400 rounded-xl hover:bg-amber-300 transition-all shadow-md"
                      >
                        SUBMIT ANOTHER INQUIRY
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          TEAM / ORGANIZATION *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Lions Academy / Club Name"
                          value={formData.teamOrganization}
                          onChange={(e) => setFormData({ ...formData, teamOrganization: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="coach@team.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          PHONE / WHATSAPP *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 234 567 8900"
                          value={formData.phoneWhatsapp}
                          onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          WHAT ARE YOU LOOKING FOR?
                        </label>
                        <select
                          value={formData.lookingFor}
                          onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        >
                          <option value="Basketball Jerseys">Basketball Jerseys</option>
                          <option value="Basketball Shorts">Basketball Shorts</option>
                          <option value="Girls Basketball Uniforms">Girls Basketball Uniforms</option>
                          <option value="Complete Squad Packages">Complete Squad Packages</option>
                          <option value="Coach Uniforms">Coach Uniforms</option>
                          <option value="Compression Gear & Sleeves">Compression Gear & Sleeves</option>
                          <option value="Accessories">Accessories</option>
                          <option value="Other Custom Sportswear">Other Custom Sportswear</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          ESTIMATED QUANTITY
                        </label>
                        <select
                          value={formData.estimatedQuantity}
                          onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        >
                          <option value="1-10 Sets (Sample Run)">1-10 Sets (Sample Run)</option>
                          <option value="11-25 Sets (Single Team)">11-25 Sets (Single Team)</option>
                          <option value="26-50 Sets (Squad Order)">26-50 Sets (Squad Order)</option>
                          <option value="51-100 Sets (Club Level)">51-100 Sets (Club Level)</option>
                          <option value="100+ Sets (League / Academy)">100+ Sets (League / Academy)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          PREFERRED CONTACT METHOD
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: "WhatsApp" })}
                            className={`py-3 px-4 rounded-xl text-xs font-bold uppercase border transition-all ${
                              formData.preferredContact === "WhatsApp"
                                ? "bg-emerald-100 text-emerald-700 border-emerald-400 font-extrabold shadow-sm"
                                : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300"
                            }`}
                          >
                            WhatsApp
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: "Email" })}
                            className={`py-3 px-4 rounded-xl text-xs font-bold uppercase border transition-all ${
                              formData.preferredContact === "Email"
                                ? "bg-amber-100 text-amber-800 border-amber-400 font-extrabold shadow-sm"
                                : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300"
                            }`}
                          >
                            Email
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          TARGET DELIVERY DATE (OPTIONAL)
                        </label>
                        <input
                          type="date"
                          value={formData.requiredDeliveryDate}
                          onChange={(e) => setFormData({ ...formData, requiredDeliveryDate: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        UPLOAD LOGO OR VECTOR ARTWORK (OPTIONAL)
                      </label>
                      <div className="relative border-2 border-dashed border-zinc-300 hover:border-amber-500 rounded-2xl p-6 text-center bg-zinc-50 hover:bg-amber-50/20 transition-colors group cursor-pointer">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.zip"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center gap-2">
                          <UploadCloud className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-zinc-800">
                            {selectedFile ? selectedFile.name : "Click or drag team logo (.AI, .EPS, .PDF, .PNG)"}
                          </span>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                            Max size 25MB • Vector files preferred
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        PROJECT DETAILS & SPECIAL REQUESTS
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe color scheme, specific fonts, collar preferences, or tournament deadlines..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 font-black text-xs uppercase tracking-widest text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg hover:shadow-amber-400/30 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT CUSTOM ORDER INQUIRY</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT CAN WE CUSTOMIZE - CLEAN WHITE BACKGROUND */}
      <section className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              PREMIUM ATHLETIC GEAR
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950 mb-4">
              WHAT CAN WE <span className="gold-text">CUSTOMIZE?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Every detail engineered specifically for high-intensity court performance and professional squad presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationCards.map((card) => (
              <div 
                key={card.id}
                className="rounded-3xl bg-zinc-50 border border-zinc-200 overflow-hidden group hover:border-amber-500 hover:shadow-2xl transition-all duration-300 flex flex-col shadow-md"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-amber-500 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
                    {card.badge}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    <h3 className="text-lg font-black text-zinc-950 uppercase font-display">
                      {card.title}
                    </h3>
                    <p className="text-xs text-amber-600 font-semibold mb-2">
                      {card.subtitle}
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href={`/contact?product=${encodeURIComponent(card.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider pt-2"
                  >
                    <span>REQUEST THIS SPEC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PROCESS TIMELINE - SOFT LIGHT ZINC */}
      <section className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              SIMPLE 4-STEP WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950 mb-4">
              OUR <span className="gold-text">ORDER PROCESS</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              From initial concept drawing to court-ready uniform delivery, we ensure seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="p-8 rounded-3xl bg-white border border-zinc-200 hover:border-amber-400 transition-all duration-300 relative group shadow-md"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-amber-600 font-display">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-zinc-950 uppercase font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE ARMUX - CLEAN WHITE BACKGROUND */}
      <section className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase block mb-3">
              THE ARMUX ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-zinc-950 mb-4">
              WHY ATHLETES <span className="gold-text">CHOOSE US</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Crafted with high-durability fabrics designed for professional leagues, school teams, and elite tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-amber-400 transition-all duration-300 text-center flex flex-col items-center shadow-md"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-black text-zinc-950 uppercase font-display mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS - SOFT LIGHT ZINC */}
      <section className="py-16 sm:py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] sm:text-xs font-black tracking-widest text-amber-600 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              GOT QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase font-display text-zinc-950 mb-3 tracking-tight leading-tight break-words">
              FREQUENTLY ASKED <span className="gold-text">QUESTIONS</span>
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Everything you need to know about custom ordering, vector sizing, proof approval, and bulk deliveries.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BANNER */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-black tracking-tight">
            READY TO OUTFIT YOUR TEAM IN ARMUX?
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto font-medium text-base sm:text-lg">
            Speak directly with our customization team right now on WhatsApp or submit your squad parameters online.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/923201713838"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-900 transition-colors inline-flex items-center gap-2 shadow-2xl"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>CHAT ON WHATSAPP (+92 320 1713838)</span>
            </a>
            <a
              href="mailto:sales@armuxofficial.com"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-black font-black text-xs uppercase tracking-widest rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>EMAIL SALES TEAM</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-amber-400 font-bold font-display uppercase tracking-widest animate-pulse">
          Loading ARMUX Consultation Desk...
        </div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
