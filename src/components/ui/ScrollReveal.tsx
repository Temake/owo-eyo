"use client";

import React, { useRef, useEffect, useState } from "react";

type Direction = "up" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const directionStyles: Record<Direction, { initial: React.CSSProperties }> = {
  up: {
    initial: { opacity: 0, transform: "translateY(30px)" },
  },
  left: {
    initial: { opacity: 0, transform: "translateX(-30px)" },
  },
  right: {
    initial: { opacity: 0, transform: "translateX(30px)" },
  },
};

const visibleStyle: React.CSSProperties = {
  opacity: 1,
  transform: "translate(0, 0)",
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  const style: React.CSSProperties = {
    ...(isVisible ? visibleStyle : directionStyles[direction].initial),
    transition: `all 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
