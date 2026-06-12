import React from "react";

interface SectionBandProps {
  children: React.ReactNode;
  bg?: string;
  className?: string;
  id?: string;
}

export function SectionBand({
  children,
  bg = "",
  className = "",
  id,
}: SectionBandProps) {
  return (
    <section id={id} className={`w-full py-20 ${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
