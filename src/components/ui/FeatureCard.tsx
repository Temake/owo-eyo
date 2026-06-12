import React from "react";
import { Card } from "./Card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 sm:p-8 flex flex-col items-start gap-4 h-full">
      {/* Icon circle */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-sky text-accent-interactive">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
        {title}
      </h3>

      {/* Description */}
      <p className="text-ink-soft leading-relaxed">{description}</p>
    </Card>
  );
}
