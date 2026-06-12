"use client";

import React from "react";

export function PolylineTitle() {
  return (
    <div className="relative w-full max-w-lg select-none">
      {/* Glow Filter SVG definition */}
      <svg className="w-0 h-0 absolute pointer-events-none">
        <defs>
          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <svg
        viewBox="-10 -30 320 270"
        className="w-full h-auto drop-shadow-[0_4px_20px_rgba(212,160,23,0.15)]"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Style tag for drawing animations */}
        <style>{`
          .draw-path {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: drawLine 3.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          }
          .accent-draw {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: drawLine 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.8s forwards;
          }
          .dot-draw {
            stroke-dasharray: 40;
            stroke-dashoffset: 40;
            animation: drawLine 1.8s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;
          }
          @keyframes drawLine {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>

        {/* ─── ROW 1: OWÓ ─── */}
        <g stroke="url(#titleGradient)" strokeWidth="6.5" filter="url(#gold-glow)">
          <defs>
            <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#190066" />
              <stop offset="50%" stopColor="#2c56dd" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
          </defs>

          {/* Letter O (Geometric Hexagon) */}
          <path
            className="draw-path"
            style={{ animationDelay: "0s" }}
            d="M 30,10 L 70,10 L 90,50 L 70,90 L 30,90 L 10,50 Z"
          />

          {/* Letter W (Futuristic polyline) */}
          <path
            className="draw-path"
            style={{ animationDelay: "0.2s" }}
            d="M 110,10 L 128,90 L 150,45 L 172,90 L 190,10"
          />

          {/* Letter Ó (Hexagon + Accent) */}
          <path
            className="draw-path"
            style={{ animationDelay: "0.4s" }}
            d="M 230,10 L 270,10 L 290,50 L 270,90 L 230,90 L 210,50 Z"
          />
        </g>

        {/* Accent over Ó (Glow gold) */}
        <path
          className="accent-draw"
          stroke="#D4A017"
          strokeWidth="6.5"
          filter="url(#gold-glow)"
          d="M 258,-5 L 278,-20"
        />

        {/* ─── ROW 2: ẸYỌ ─── */}
        <g stroke="url(#titleGradient)" strokeWidth="6.5" filter="url(#gold-glow)">
          {/* Letter Ẹ (Hexagon with bottom sub-dot block) */}
          {/* Stylized E */}
          <path
            className="draw-path"
            style={{ animationDelay: "0.6s" }}
            d="M 75,130 L 25,130 L 25,210 L 75,210 M 25,170 L 65,170"
          />

          {/* Letter Y */}
          <path
            className="draw-path"
            style={{ animationDelay: "0.8s" }}
            d="M 110,130 L 130,170 L 150,130 M 130,170 L 130,210"
          />

          {/* Letter Ọ (Hexagon) */}
          <path
            className="draw-path"
            style={{ animationDelay: "1s" }}
            d="M 230,130 L 270,130 L 290,170 L 270,210 L 230,210 L 210,170 Z"
          />
        </g>

        {/* Sub-dots (under dot block for Ẹ and Ọ) in Gold */}
        <g stroke="#D4A017" strokeWidth="5.5" filter="url(#gold-glow)">
          {/* Sub-dot under Ẹ (triangular low-poly block) */}
          <path
            className="dot-draw"
            d="M 45,225 L 50,217 L 55,225 Z"
          />
          {/* Sub-dot under Ọ (triangular low-poly block) */}
          <path
            className="dot-draw"
            d="M 245,225 L 250,217 L 255,225 Z"
          />
        </g>
      </svg>
    </div>
  );
}
