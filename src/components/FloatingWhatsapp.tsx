import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/923201713838"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ARMUX on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full shadow-2xl shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline font-bold">WHATSAPP ARMUX</span>
    </a>
  );
}
