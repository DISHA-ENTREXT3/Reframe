import React, { useEffect, useState, useRef } from "react";

export function FramerCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    // Only enable on pointer fine (desktop mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const tiltParent = target?.closest("[data-cursor-label]");
      if (tiltParent) {
        const label = tiltParent.getAttribute("data-cursor-label");
        setCursorText(label || "");
        setIsHovering(true);
      } else {
        const isClickable = target?.closest("button, a, [role='button'], input, [role='tab']");
        if (isClickable) {
          setCursorText("");
          setIsHovering(true);
        } else {
          setCursorText("");
          setIsHovering(false);
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp following
  useEffect(() => {
    const loop = () => {
      setPos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [targetPos]);

  if (!mounted || !isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-300 transform-gpu"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-medium transition-all duration-200 ease-out ${
          cursorText
            ? "px-3.5 py-1.5 rounded-full bg-[#1e293b] text-white text-[11px] font-semibold tracking-wider shadow-xl border border-white/20 backdrop-blur-md scale-100"
            : isHovering
              ? "w-8 h-8 rounded-full bg-(--primary)/20 border-2 border-primary backdrop-blur-sm scale-125"
              : "w-3.5 h-3.5 rounded-full bg-primary shadow-sm opacity-60 scale-100"
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
