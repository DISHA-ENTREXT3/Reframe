import React, { useEffect, useRef, useState } from "react";

interface ScrollFloat3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  rotateX?: number;
  scale?: number;
  className?: string;
  threshold?: number;
}

export function ScrollFloat3D({
  children,
  delay = 0,
  duration = 0.85,
  yOffset = 60,
  rotateX = 14,
  scale = 0.94,
  className = "",
  threshold = 0.05,
  style,
  ...props
}: ScrollFloat3DProps) {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`transform-gpu will-change-transform ${className}`}
      style={{
        transformOrigin: "center bottom",
        transform: isVisible
          ? "perspective(1200px) rotateX(0deg) translateY(0px) scale(1)"
          : `perspective(1200px) rotateX(${rotateX}deg) translateY(${yOffset}px) scale(${scale})`,
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}s cubic-bezier(0.2, 0.9, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.2, 0.9, 0.3, 1) ${delay}s`,
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
