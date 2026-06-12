"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-hairline rounded-lg overflow-hidden transition-colors duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display font-semibold text-ink hover:bg-cloud/50 cursor-pointer transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <span
          className={`shrink-0 text-xl text-accent-interactive transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-ink-soft leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
