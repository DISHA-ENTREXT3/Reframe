import React, { useState } from "react";

interface StickerBadgeProps {
  children: React.ReactNode;
  variant?: "pink" | "blue" | "yellow" | "green" | "orange" | "purple";
  rotation?: number;
  floatDelay?: number;
  className?: string;
  icon?: string;
  onClick?: () => void;
}

const colorMap = {
  pink: "bg-[#ffd4e5] text-[#4d102e] border-[#f48fb1] shadow-[#f48fb1]/30",
  blue: "bg-[#cce4ff] text-[#082a5e] border-[#90caf9] shadow-[#90caf9]/30",
  yellow: "bg-[#fff7b2] text-[#4a4200] border-[#fff59d] shadow-[#fff59d]/30",
  green: "bg-[#d4f8d3] text-[#0f441c] border-[#a5d6a7] shadow-[#a5d6a7]/30",
  orange: "bg-[#ffe0b2] text-[#5d2800] border-[#ffb74d] shadow-[#ffb74d]/30",
  purple: "bg-[#ecd4ff] text-[#360959] border-[#ce93d8] shadow-[#ce93d8]/30",
};

export function StickerBadge({
  children,
  variant = "yellow",
  rotation = 0,
  floatDelay = 0,
  className = "",
  icon,
  onClick,
}: StickerBadgeProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`inline-flex items-center gap-2 select-none cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide border-2 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ${
        colorMap[variant]
      } ${className}`}
      style={{
        transform: `rotate(${rotation}deg) ${isPressed ? "scale(0.92)" : ""}`,
        animation: `lofty-bob 4s ease-in-out infinite`,
        animationDelay: `${floatDelay}s`,
      }}
    >
      {icon && <span className="text-sm leading-none">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
