import React from "react";
import { SurfaceCard } from "./SurfaceCard";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: string;
}

export function Card({ children, className = "", accent }: CardProps) {
  return (
    <SurfaceCard className={className} accent={accent}>
      {children}
    </SurfaceCard>
  );
}
