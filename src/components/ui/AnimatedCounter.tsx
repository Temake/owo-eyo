"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [animate]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-primary">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-ink-soft font-body text-sm sm:text-base">
        {label}
      </div>
    </div>
  );
}
