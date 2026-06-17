"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";
import { ScrollReveal } from "./ScrollReveal";
import { SectionBand } from "./SectionBand";

function SparklesGroup() {
  return (
    <div className="relative h-10 w-16 pointer-events-none select-none">
      <svg className="absolute top-0 right-0 h-6 w-6 text-accent-interactive animate-pulse" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l1.8 3.8 4.2.6-3 3 .7 4.1-3.7-2-3.7 2 .7-4.1-3-3 4.2-.6z" />
      </svg>
      <svg className="absolute bottom-0 left-2 h-4 w-4 text-accent-gold animate-pulse" style={{ animationDelay: "0.5s" }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l1.8 3.8 4.2.6-3 3 .7 4.1-3.7-2-3.7 2 .7-4.1-3-3 4.2-.6z" />
      </svg>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] h-[440px] sm:h-[480px] rounded-t-[3rem] border-x-[10px] border-t-[10px] border-ink/90 bg-ink shadow-2xl flex flex-col overflow-hidden">
      {/* Notch / Speaker */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-ink rounded-full z-20 flex items-center justify-center">
        <div className="w-12 h-1 bg-white/20 rounded-full" />
      </div>
      
      {/* Screen */}
      <div className="flex-1 rounded-t-[2.3rem] bg-white overflow-hidden flex flex-col p-4 pt-7 relative font-body select-none">
        {/* Glow inside phone screen */}
        <div className="absolute top-[-30%] left-[-20%] w-[100%] h-[75%] rounded-full bg-accent-sky/20 blur-[35px] pointer-events-none" />
        
        {/* Status bar */}
        <div className="flex items-center justify-between px-2 py-1 text-ink/40 text-[10px] z-10 font-medium">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* User profile */}
        <div className="flex items-center justify-between mt-5 z-10 px-1">
          <div>
            <p className="text-[10px] text-ink-soft/60">Good evening,</p>
            <p className="font-display font-bold text-xs sm:text-sm text-ink">Adaeze Okafor 👋</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-accent-sky/25 border border-ink/10 flex items-center justify-center text-[10px] text-primary font-bold">
            AO
          </div>
        </div>

        {/* Balance Card - Dark Blue Brand Pop */}
        <div className="rounded-2xl bg-primary text-white p-4 mt-4 z-10 relative overflow-hidden shadow-md">
          <p className="text-[10px] text-white/60">Available Balance</p>
          <div className="flex items-baseline justify-between mt-1">
            <p className="font-display font-bold text-xl sm:text-2xl text-white">₦2,450,800</p>
            <span className="text-[9px] font-semibold text-accent-lime bg-accent-lime/15 px-2 py-0.5 rounded-full">
              + 12%
            </span>
          </div>
          <div className="flex items-center justify-between mt-4 text-[8px] text-white/45">
            <span>Status: Active</span>
            <span>ID: 1657754</span>
          </div>
        </div>

        {/* Quick Action buttons */}
        <div className="grid grid-cols-4 gap-2 mt-5 z-10">
          {[
            { label: "Send", icon: "↗️" },
            { label: "Request", icon: "↙️" },
            { label: "Save", icon: "➕" },
            { label: "More", icon: "🎛️" }
          ].map((action, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <button className="h-9 w-9 rounded-full bg-cloud/60 flex items-center justify-center text-sm text-ink hover:bg-cloud transition-all border border-ink/5">
                {action.icon}
              </button>
              <span className="text-[9px] text-ink-soft/70">{action.label}</span>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="mt-5 z-10 flex-1 flex flex-col justify-end">
          <p className="text-[9px] text-ink-soft/50 mb-2 px-1">Recent Transactions</p>
          <div className="space-y-2 bg-cloud/20 border border-ink/5 rounded-xl p-2.5">
            {[
              { name: "Spotify Premium", amount: "-₦2,500", type: "debit" },
              { name: "Salary Payment", amount: "+₦480,000", type: "credit" }
            ].map((t, idx) => (
              <div key={idx} className="flex items-center justify-between text-[9px] border-b border-ink/5 last:border-0 pb-1.5 last:pb-0">
                <span className="text-ink font-medium">{t.name}</span>
                <span className={`font-semibold ${t.type === "credit" ? "text-accent-teal" : "text-ink-soft"}`}>
                  {t.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Soft background glow bottom */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[65%] h-[45%] rounded-full bg-accent-apricot/10 blur-[35px] pointer-events-none" />
      </div>
    </div>
  );
}

function HeroShowcase() {
  return (
    <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto px-4 z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-0">
        
        {/* Left Floating Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-12 z-20">
          {/* Card 1: Users */}
          <ScrollReveal direction="left">
            <GlassCard className="p-6 text-left group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-ink-soft/50 text-xs uppercase tracking-wider font-body">Trusted by</p>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mt-1">
                    2M+ <span className="text-[10px] font-semibold bg-accent-interactive/10 text-accent-interactive px-2 py-0.5 rounded-full inline-block align-middle ml-2">Active</span>
                  </h3>
                </div>
                <SparklesGroup />
              </div>
              <p className="text-ink-soft text-xs sm:text-sm mt-4 leading-relaxed font-body">
                Trusted users making smarter financial decisions daily.
              </p>
              <div className="mt-4 flex justify-end">
                <div className="h-8 w-8 rounded-full bg-ink/5 hover:bg-accent-interactive hover:text-white transition-all duration-300 flex items-center justify-center text-ink cursor-pointer border border-ink/5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Card 2: Savings */}
          <ScrollReveal direction="left" delay={150}>
            <GlassCard className="p-6 text-left">
              <div className="flex justify-between items-center text-xs text-ink-soft/50 font-body">
                <span>Net Savings</span>
                <span className="text-accent-interactive bg-accent-interactive/10 px-2 py-0.5 rounded-full font-semibold">16% APY</span>
              </div>
              <p className="font-display font-extrabold text-2xl text-primary mt-2">₦1,478,400</p>
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-ink/5">
                <span className="text-ink-soft/40 text-[11px] font-body">Auto-Save Active</span>
                <button className="h-7 w-7 rounded-full bg-ink/5 hover:bg-accent-sky hover:text-primary transition-all flex items-center justify-center text-ink text-xs border border-ink/5">
                  ↗️
                </button>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Center Phone Mockup */}
        <div className="lg:col-span-4 relative flex justify-center z-10 lg:translate-y-6">
          <ScrollReveal direction="up" delay={100}>
            <PhoneMockup />
          </ScrollReveal>
          
          {/* Curved SVG Arrows pointing from phone to left/right cards */}
          {/* Left Arrow */}
          <svg className="absolute top-1/3 right-[75%] w-32 h-16 hidden lg:block text-ink/10 pointer-events-none" fill="none" viewBox="0 0 120 60">
            <path d="M110,10 C80,30 40,30 15,20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
            <path d="M15,20 L25,16 M15,20 L22,28" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>

          {/* Right Arrow */}
          <svg className="absolute top-1/3 left-[75%] w-32 h-16 hidden lg:block text-ink/10 pointer-events-none" fill="none" viewBox="0 0 120 60">
            <path d="M10,10 C40,30 80,30 105,20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
            <path d="M105,20 L95,16 M105,20 L98,28" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Right Floating Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-12 z-20">
          {/* Card 1: Security */}
          <ScrollReveal direction="right">
            <GlassCard className="p-6 text-left relative overflow-hidden group">
              <div className="absolute bottom-[-10%] right-[-10%] w-24 h-24 rounded-full bg-accent-sky/20 blur-md pointer-events-none" />
              <div className="inline-block px-3 py-1 rounded-full bg-ink/5 border border-ink/10 text-ink-soft/75 text-[10px] tracking-wider uppercase font-body font-semibold">
                CBN Licensed & Regulated
              </div>
              <p className="text-ink-soft/50 text-xs mt-4 font-body">Security Standards</p>
              <h3 className="font-display font-extrabold text-2xl text-primary mt-1">100% Secure</h3>
              <p className="text-ink-soft text-xs sm:text-sm mt-1 font-body leading-relaxed">
                Military-grade encryption protecting all transfers.
              </p>
              <div className="mt-4 flex justify-end">
                <div className="h-8 w-8 rounded-full bg-ink/5 hover:bg-accent-sky hover:text-primary transition-all duration-300 flex items-center justify-center text-ink cursor-pointer border border-ink/5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Card 2: Received Payment Badge */}
          <ScrollReveal direction="right" delay={150}>
            <div className="flex flex-col gap-2 items-start font-body">
              <span className="text-[10px] text-accent-interactive bg-accent-interactive/10 px-2.5 py-0.5 rounded-full font-semibold ml-4">
                Transaction
              </span>
              <div className="w-full flex items-center gap-3 px-5 py-3.5 rounded-full border border-white/60 bg-white/65 backdrop-blur-[20px] shadow-soft-lift">
                <span className="h-8 w-8 rounded-full bg-accent-lime flex items-center justify-center text-sm shadow-sm">
                  🎉
                </span>
                <div className="text-left">
                  <p className="text-[10px] text-ink-soft/50">Received Payment</p>
                  <p className="font-display font-bold text-xs sm:text-sm text-primary">₦35,000.00 🥰</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-b from-canvas via-white to-canvas">
      {/* Layer 2: Blurred radial gradients (light theme pastel) */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-accent-sky/20 blur-[130px] opacity-70" />
      <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-lime/30 blur-[120px] opacity-80" />
      <div className="absolute top-[20%] right-[10%] w-[45%] h-[45%] rounded-full bg-accent-lavender/35 blur-[125px] opacity-75" />
      
      {/* Layer 3: Vertical translucent stripes (corrugated panels in light style) */}
      <div className="absolute inset-0 flex justify-between opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1 border-r border-ink/[0.08] bg-gradient-to-r from-transparent via-ink/[0.005] to-transparent"
          />
        ))}
      </div>
      
      {/* Layer 4: Soft lighting overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent" />
      
      {/* Layer 5: Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <SectionBand id="hero" className="relative pt-24 sm:pt-32 pb-16 overflow-hidden min-h-screen flex flex-col justify-between">
      <HeroBackground />
      
      {/* Fade-in on mount container */}
      <div 
        className={`flex-1 flex flex-col justify-between transition-opacity duration-1000 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 z-20">
          {/* Badge */}
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ink/10 bg-white/60 backdrop-blur-md text-ink-soft text-[10px] sm:text-xs font-semibold tracking-wider uppercase font-body select-none">
              <span>🌐</span> Available Across 36 States & FCT
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={150}>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-ink max-w-3xl mx-auto mt-6">
              Your Money,<br />
              <span className="bg-gradient-to-r from-accent-interactive via-[#4362d1] to-accent-gold bg-clip-text text-transparent">
                Your Power.
              </span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={300}>
            <p className="max-w-xl mx-auto mt-6 text-ink-soft/80 text-base sm:text-lg md:text-xl font-body leading-relaxed">
              Send, save, spend, and grow your money — all from one powerful platform built for modern Africa.
            </p>
          </ScrollReveal>

          {/* Center CTA button */}
          <ScrollReveal direction="up" delay={450}>
            <div className="mt-8 flex justify-center">
              <Button
                href="/register"
                className="rounded-full !px-8 !py-4 bg-accent-interactive text-white hover:bg-primary-bright transition-all duration-300 shadow-lg flex items-center gap-3 group"
              >
                <span className="font-body font-semibold">Get Started Free</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-accent-interactive group-hover:bg-accent-lime group-hover:text-primary transition-colors duration-300">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual showcase section */}
        <HeroShowcase />
      </div>
    </SectionBand>
  );
}
