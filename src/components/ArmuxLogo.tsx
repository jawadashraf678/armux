import React from "react";

interface ArmuxLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: "gold" | "white" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function ArmuxLogo({
  className = "",
  size = "md",
}: ArmuxLogoProps) {
  const sizeClasses = {
    sm: "h-6 sm:h-7 max-h-7",
    md: "h-7 sm:h-8 max-h-8",
    lg: "h-10 sm:h-12 max-h-12",
    xl: "h-14 sm:h-16 max-h-16",
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/web logo.png"
        alt="ARMUX - POWER | FOCUS | DOMINATE"
        className={`${sizeClasses[size]} w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)] hover:drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)] transition-all duration-300`}
        loading="eager"
      />
    </div>
  );
}


