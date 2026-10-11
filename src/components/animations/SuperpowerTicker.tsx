import React from "react";

interface SuperpowerTickerProps {
  className?: string;
}

const row1 = [
  { text: "Partner-Led Authority", icon: "★", bg: "bg-[#ffd4e5] text-[#4d102e] border-[#f48fb1]" },
  {
    text: "Founder Trust Before Meeting",
    icon: "⚡",
    bg: "bg-[#cce4ff] text-[#082a5e] border-[#90caf9]",
  },
  {
    text: "Distinctive Point Of View",
    icon: "✦",
    bg: "bg-[#fff7b2] text-[#4a4200] border-[#fff59d]",
  },
  { text: "Portfolio Storytelling", icon: "★", bg: "bg-[#d4f8d3] text-[#0f441c] border-[#a5d6a7]" },
  {
    text: "12x Deal-Flow Visibility",
    icon: "🚀",
    bg: "bg-[#ffe0b2] text-[#5d2800] border-[#ffb74d]",
  },
  { text: "Zero Marketing Fluff", icon: "💎", bg: "bg-[#ecd4ff] text-[#360959] border-[#ce93d8]" },
];

const row2 = [
  {
    text: "Investment Thesis Into Stories",
    icon: "✦",
    bg: "bg-[#cce4ff] text-[#082a5e] border-[#90caf9]",
  },
  {
    text: "Substance Over Frequency",
    icon: "★",
    bg: "bg-[#ffd4e5] text-[#4d102e] border-[#f48fb1]",
  },
  { text: "Top-Decile Recall", icon: "⚡", bg: "bg-[#ffe0b2] text-[#5d2800] border-[#ffb74d]" },
  { text: "Executive Positioning", icon: "✦", bg: "bg-[#ecd4ff] text-[#360959] border-[#ce93d8]" },
  { text: "Commercial Resonance", icon: "🚀", bg: "bg-[#d4f8d3] text-[#0f441c] border-[#a5d6a7]" },
  {
    text: "Content Factory & Brain",
    icon: "★",
    bg: "bg-[#fff7b2] text-[#4a4200] border-[#fff59d]",
  },
];

export function SuperpowerTicker({ className = "" }: SuperpowerTickerProps) {
  return (
    <div className={`w-full overflow-hidden py-10 relative select-none ${className}`}>
      {/* Subtle fade masks on sides */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-(--background) to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-(--background) to-transparent" />

      {/* Row 1: Leftward Marquee */}
      <div className="flex gap-4 whitespace-nowrap mb-4 marquee-track-left hover:paused">
        {[...row1, ...row1, ...row1].map((item, idx) => (
          <div
            key={`r1-${idx}`}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider border-2 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${item.bg}`}
          >
            <span className="text-sm">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Row 2: Rightward Marquee */}
      <div className="flex gap-4 whitespace-nowrap marquee-track-right hover:paused">
        {[...row2, ...row2, ...row2].map((item, idx) => (
          <div
            key={`r2-${idx}`}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider border-2 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${item.bg}`}
          >
            <span className="text-sm">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
