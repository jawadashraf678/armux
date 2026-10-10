import React from "react";

interface ArmuxLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: "gold" | "white" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function ArmuxLogo({
  className = "",
  showTagline = false,
  variant = "gold",
  size = "md",
}: ArmuxLogoProps) {
  const sizeClasses = {
    sm: "h-8 sm:h-10",
    md: "h-10 sm:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src="/web logo.png"
        alt="ARMUX Logo"
        className={`${sizeClasses[size]} w-auto object-contain rounded drop-shadow-md`}
      />
    </div>
  );
}

