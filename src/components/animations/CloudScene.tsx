import React, { useEffect, useState } from "react";
import { StickerBadge } from "./StickerBadge";

interface CloudSceneProps {
  children?: React.ReactNode;
  scrollY?: number;
  className?: string;
}

export function CloudScene({ children, className = "" }: CloudSceneProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative w-full overflow-hidden lofty-sky-bg ${className}`}>
      {/* Dynamic Animated Dreamy Sky Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lofty-sky-mesh opacity-90 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${offsetY * 0.15}px, 0)`,
        }}
      />

      {/* Background Floating Cloud 1 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-20 w-105 h-55 opacity-75 blur-[2px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${offsetY * 0.08}px, ${offsetY * 0.25}px, 0)`,
          animation: "lofty-float-slow 18s ease-in-out infinite",
        }}
      >
        <svg viewBox="0 0 200 120" className="w-full h-full fill-white/80 drop-shadow-xl">
          <path d="M 20,80 A 30,30 0 0,1 60,50 A 40,40 0 0,1 130,40 A 35,35 0 0,1 180,80 A 20,20 0 0,1 170,100 L 30,100 A 20,20 0 0,1 20,80 Z" />
        </svg>
      </div>

      {/* Background Floating Cloud 2 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -right-16 w-120 h-62.5 opacity-80 blur-[1px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${-offsetY * 0.1}px, ${offsetY * 0.3}px, 0)`,
          animation: "lofty-float-slow 22s ease-in-out infinite reverse",
        }}
      >
        <svg viewBox="0 0 200 120" className="w-full h-full fill-white/90 drop-shadow-2xl">
          <path d="M 25,85 A 35,35 0 0,1 70,55 A 45,45 0 0,1 145,45 A 40,40 0 0,1 190,85 A 25,25 0 0,1 175,105 L 35,105 A 25,25 0 0,1 25,85 Z" />
        </svg>
      </div>

      {/* Floating 3D Interactive Sticker Chips */}
      <div
        className="absolute top-16 left-[8%] z-10 hidden lg:block transition-transform duration-300"
        style={{
          transform: `translate3d(0, ${-offsetY * 0.2}px, 0)`,
        }}
      >
        <StickerBadge variant="yellow" rotation={-7} floatDelay={0} icon="✨">
          High Conviction
        </StickerBadge>
      </div>

      <div
        className="absolute top-28 right-[10%] z-10 hidden lg:block transition-transform duration-300"
        style={{
          transform: `translate3d(0, ${-offsetY * 0.15}px, 0)`,
        }}
      >
        <StickerBadge variant="pink" rotation={8} floatDelay={1.5} icon="🌈">
          Story Engine
        </StickerBadge>
      </div>

      <div
        className="absolute bottom-28 left-[14%] z-10 hidden xl:block transition-transform duration-300"
        style={{
          transform: `translate3d(0, ${-offsetY * 0.1}px, 0)`,
        }}
      >
        <StickerBadge variant="green" rotation={-5} floatDelay={2.2} icon="💡">
          Partner Viewpoint
        </StickerBadge>
      </div>

      <div
        className="absolute bottom-36 right-[12%] z-10 hidden xl:block transition-transform duration-300"
        style={{
          transform: `translate3d(0, ${-offsetY * 0.25}px, 0)`,
        }}
      >
        <StickerBadge variant="purple" rotation={6} floatDelay={0.8} icon="🎯">
          Top Decile Recall
        </StickerBadge>
      </div>

      {/* Content Injection */}
      <div className="relative z-10">{children}</div>

      {/* Signature Scalloped Cloud Bottom Border (Lofty Lab divider) */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative w-full h-15 md:h-22.5 lg:h-30 -mb-1 z-20"
        style={{
          transform: `translate3d(0, ${Math.min(offsetY * 0.08, 20)}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-(--background) drop-shadow-[0_-8px_16px_rgba(0,0,0,0.04)]"
        >
          <path d="M0,120 L1440,120 L1440,55 C1380,15 1320,15 1260,55 C1200,95 1140,95 1080,55 C1020,15 960,15 900,55 C840,95 780,95 720,55 C660,15 600,15 540,55 C480,95 420,95 360,55 C300,15 240,15 180,55 C120,95 60,95 0,55 Z" />
        </svg>
      </div>
    </div>
  );
}
