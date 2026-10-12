"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsapp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.a
        href="https://wa.me/923201713838"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ARMUX on WhatsApp"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full shadow-2xl shadow-emerald-500/35 transition-colors"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline font-bold">WHATSAPP ARMUX</span>
      </motion.a>
    </motion.div>
  );
}

