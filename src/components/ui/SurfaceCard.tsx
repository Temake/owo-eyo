import React from "react";

interface SurfaceCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: string;
}

export function SurfaceCard({ children, className = "", accent }: SurfaceCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-paper shadow-soft-lift border border-hairline/30 hover:border-accent-interactive/15 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 ${accent ? accent : ""} ${className}`}
    >
      {/* Subtle shine/overlay highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
      {children}
    </div>
  );
}
