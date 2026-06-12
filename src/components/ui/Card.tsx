import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: string;
}

export function Card({ children, className = "", accent }: CardProps) {
  return (
    <div
      className={`bg-paper rounded-xl shadow-soft-lift transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${accent ? accent : ""} ${className}`}
    >
      {children}
    </div>
  );
}
