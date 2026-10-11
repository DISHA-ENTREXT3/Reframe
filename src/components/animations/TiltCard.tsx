import React, { useRef, useState, useCallback, useEffect } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
  scale?: number;
  className?: string;
  depth?: number;
  cursorLabel?: string;
}

export function TiltCard({
  children,
  maxTilt = 12,
  perspective = 1200,
  glare = true,
  scale = 1.025,
  className = "",
  depth = 30,
  cursorLabel = "TILT 3D ✦",
  style,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        setTransform(
          `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        );
        if (glare) {
          setGlareStyle({
            opacity: 0.65,
            background: `radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 80%)`,
          });
        }
      });
    },
    [maxTilt, perspective, glare, scale],
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
      setGlareStyle({ opacity: 0, transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)" });
    });
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor-label={cursorLabel}
      className={`relative transform-gpu transition-transform ease-out will-change-transform ${className}`}
      style={{
        transform:
          transform || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transitionDuration: isHovered ? "120ms" : "600ms",
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...props}
    >
      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateZ(${depth}px)`,
        }}
      >
        {children}
      </div>

      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
          style={{
            ...glareStyle,
            mixBlendMode: "overlay",
            transform: "translateZ(40px)",
          }}
        />
      )}
    </div>
  );
}
