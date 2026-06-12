import React from "react";
import Image from "next/image";
import { Card } from "./Card";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  imageSrc?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-accent-gold" : "text-hairline"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, imageSrc }: { name: string; imageSrc?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (imageSrc) {
    return (
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary font-display font-bold text-sm">
      {initials}
    </div>
  );
}

export function TestimonialCard({
  name,
  role,
  quote,
  rating,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <Card className="p-6 sm:p-8 flex flex-col gap-4 h-full">
      {/* Quote icon */}
      <svg
        className="h-8 w-8 text-accent-interactive/30"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
      </svg>

      {/* Quote */}
      <p className="text-ink-soft leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>

      {/* Rating */}
      <StarRating rating={rating} />

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-hairline">
        <Avatar name={name} imageSrc={imageSrc} />
        <div>
          <p className="font-display font-semibold text-ink">{name}</p>
          <p className="text-sm text-ink-soft">{role}</p>
        </div>
      </div>
    </Card>
  );
}
