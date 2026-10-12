"use client";

import React from "react";
import { motion } from "framer-motion";

// 1. MotionBadge - Spring pop-in for category tags, badges, and pill headers
export function MotionBadge({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: -8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 240,
        damping: 18,
      }}
      whileHover={{ scale: 1.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. MotionFadeUp - Smooth vertical slide up with fade for titles and paragraphs
export function MotionFadeUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 25,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. MotionSlideIn - Directional slide for split layout columns (from left or right)
export function MotionSlideIn({
  children,
  direction = "left",
  className = "",
  delay = 0,
  duration = 0.65,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const xOffset = direction === "left" ? -40 : 40;
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 4. MotionCard - Interactive card with entrance animation and hover lift
export function MotionCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 5. MotionNumber - Playful spring scale & rotate pop for step numbers ("01", "02", etc.)
export function MotionNumber({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 6. MotionButton - Interactive button with tactile spring hover and tap feedback
export function MotionButton({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 7. MotionIconBox - Hover spin / spring bounce for icons in feature cards
export function MotionIconBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.18, rotate: 8 }}
      transition={{ type: "spring", stiffness: 400, damping: 14 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 8. MotionFloat - Continuous gentle floating animation
export function MotionFloat({
  children,
  className = "",
  duration = 3.5,
  y = 8,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  y?: number;
}) {
  return (
    <motion.div
      animate={{ y: [-y, y, -y] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 9. MotionStaggerContainer & Item - For animated lists or grids
export function MotionStaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
