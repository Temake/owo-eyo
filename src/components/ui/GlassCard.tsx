import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/40 bg-white/20 backdrop-blur-[24px] shadow-soft-lift hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 ${className}`}
    >
      {/* Subtle inner highlight/reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-white/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
