"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only execute on client side
    if (typeof window === "undefined") return;

    // Honor users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Detect if device is a pure touch device (mobile / tablet)
    const isTouchOnly =
      "ontouchstart" in window &&
      !window.matchMedia("(hover: hover)").matches;

    // Initialize ultra-smooth Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-grade exponential out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      // For pure touch devices (iPhone, iPad, Android phones & tablets), syncTouch false guarantees
      // zero lag, 120Hz/60Hz native hardware-accelerated momentum scrolling with no hanging
      syncTouch: false,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      autoRaf: true,
    });

    lenisRef.current = lenis;

    // Provide global access for manual smooth scrolls
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Intercept in-page hash links (#section) for smooth navigation with navbar offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -90, // Accounts for sticky navbar height
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // When route changes, smoothly reset scroll position to top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
