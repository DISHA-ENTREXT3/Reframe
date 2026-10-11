import React from "react";

interface SectionCloudDividerProps {
  fillColor?: string;
  className?: string;
  inverted?: boolean;
}

export function SectionCloudDivider({
  fillColor = "var(--background)",
  className = "",
  inverted = false,
}: SectionCloudDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative w-full h-[50px] md:h-[80px] lg:h-[110px] overflow-hidden select-none z-10 ${
        inverted ? "-mt-1 rotate-180" : "-mb-1"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-full drop-shadow-[0_-6px_12px_rgba(3,15,46,0.04)]"
        style={{ fill: fillColor }}
      >
        <path d="M0,120 L1440,120 L1440,55 C1380,15 1320,15 1260,55 C1200,95 1140,95 1080,55 C1020,15 960,15 900,55 C840,95 780,95 720,55 C660,15 600,15 540,55 C480,95 420,95 360,55 C300,15 240,15 180,55 C120,95 60,95 0,55 Z" />
      </svg>
    </div>
  );
}
