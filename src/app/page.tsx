import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionBand } from "@/components/ui/SectionBand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PaymentNetwork } from "@/components/three/PaymentNetwork";
import { PolylineTitle } from "@/components/ui/PolylineTitle";
import { HeroSection } from "@/components/ui/ClientHero";

/* ─── Page Metadata ─── */
export const metadata: Metadata = {
  title: "Owó Ẹyọ — Your Money, Your Power",
  description:
    "Owó Ẹyọ puts you in control. Send, save, spend, and grow your money — all from one powerful platform built for modern Africa. Open your free account in minutes.",
  openGraph: {
    title: "Owó Ẹyọ — Your Money, Your Power",
    description:
      "Send, save, spend, and grow your money — all from one powerful fintech platform built for modern Africa.",
    url: "https://owoeyo.com",
    siteName: "Owó Ẹyọ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owó Ẹyọ — Your Money, Your Power",
    description:
      "Send, save, spend, and grow your money — all from one powerful platform built for modern Africa.",
  },
};

/* ══════════════════════════════════════════════════════════════
   1 ─ HERO COMPONENTS & SECTION
   ══════════════════════════════════════════════════════════════ */



/* ══════════════════════════════════════════════════════════════
   2 ─ TRUST BAR
   ══════════════════════════════════════════════════════════════ */
function FirstBankLogo() {
  return (
    <img
      src="/images/first.png"
      alt="FirstBank"
      className="h-8 sm:h-9 w-auto object-contain select-none cursor-pointer"
    />
  );
}

function PaystackLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none cursor-pointer">
      <svg className="h-6 w-6 text-[#3ec9a5] shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10" ry="10" fill="#3ec9a5" />
        <path d="M8.5 7h4c1.93 0 3.5 1.57 3.5 3.5S14.43 14 12.5 14H10v4H8.5V7zm4 5.5c1.1 0 2-.9 2-2s-.9-2-2-2H10v4h2.5z" fill="white" />
      </svg>
      <span className="font-display font-extrabold text-base sm:text-lg text-[#011b33] tracking-tight">
        paystack
      </span>
    </div>
  );
}

function FlutterwaveLogo() {
  return (
    <img
      src="/images/flutterwave.png"
      alt="Flutterwave"
      className="h-7 sm:h-8 w-auto object-contain select-none cursor-pointer"
    />
  );
}

function GTBankLogo() {
  return (
    <img
      src="/images/gtco.png"
      alt="GTBank"
      className="h-7 sm:h-8 w-auto object-contain select-none cursor-pointer"
    />
  );
}

function AccessBankLogo() {
  return (
    <img
      src="/images/access.png"
      alt="Access Bank"
      className="h-7 sm:h-8 w-auto object-contain select-none cursor-pointer"
    />
  );
}

function InterswitchLogo() {
  return (
    <img
      src="/images/interswitch.png"
      alt="Interswitch"
      className="h-7 sm:h-8 w-auto object-contain select-none cursor-pointer"
    />
  );
}

function TrustBar() {
  const logos = (
    <>
      <FirstBankLogo />
      <PaystackLogo />
      <FlutterwaveLogo />
      <GTBankLogo />
      <AccessBankLogo />
      <InterswitchLogo />
    </>
  );

  return (
    <SectionBand bg="bg-cloud" id="trust-bar" className="!py-10 border-b border-hairline/25">
      <p className="text-center text-xs sm:text-sm text-ink-soft/50 tracking-wider uppercase mb-8 font-body font-semibold">
        Trusted by leading organizations across Africa
      </p>
      {/* Marquee container */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee" style={{ width: "200%" }}>
          <div className="flex shrink-0 items-center justify-around gap-10 sm:gap-16 w-1/2 px-4">
            {logos}
          </div>
          <div className="flex shrink-0 items-center justify-around gap-10 sm:gap-16 w-1/2 px-4">
            {logos}
          </div>
        </div>
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   3 ─ PRODUCT OVERVIEW
   ══════════════════════════════════════════════════════════════ */
function ProductOverview() {
  return (
    <SectionBand bg="bg-paper" id="product-overview">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* ── Left: Cowrie visual ── */}
        <ScrollReveal direction="left">
          <div className="relative mx-auto max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-accent-gold/30 via-accent-gold/10 to-canvas flex items-center justify-center overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-accent-gold/30 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-16 rounded-full border border-accent-gold/20" />

            {/* Shell emoji centre */}
            <span className="text-8xl sm:text-9xl drop-shadow-lg select-none" role="img" aria-label="Cowrie shell">
              🐚
            </span>

            {/* Floating coins */}
            <span className="absolute top-8 right-10 text-3xl animate-float" style={{ animationDelay: "0s" }}>💰</span>
            <span className="absolute bottom-12 left-8 text-2xl animate-float" style={{ animationDelay: "1s" }}>✨</span>
            <span className="absolute top-1/3 left-6 text-2xl animate-float" style={{ animationDelay: "2s" }}>🪙</span>
          </div>
        </ScrollReveal>

        {/* ── Right: Copy ── */}
        <ScrollReveal direction="right" delay={150}>
          <p className="text-sm font-semibold text-accent-interactive uppercase tracking-wider mb-3">
            The Owó Ẹyọ Platform
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-6">
            One App.
            <br />
            Complete Financial&nbsp;Freedom.
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed mb-6 max-w-lg">
            Whether you&rsquo;re sending money to family in seconds, splitting bills
            with friends, saving towards that dream car, or tracking every naira
            you earn&nbsp;— Owó Ẹyọ brings it all together in one secure,
            beautifully simple app.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Instant peer-to-peer transfers with zero fees",
              "Automated savings plans that actually grow your wealth",
              "Bill payments, airtime, and subscriptions in one tap",
              "Real-time spending insights powered by AI",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-soft">
                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-accent-lime flex items-center justify-center">
                  <svg className="h-3 w-3 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="/features" size="md">
            Explore All Features
          </Button>
        </ScrollReveal>
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   4 ─ KEY BENEFITS
   ══════════════════════════════════════════════════════════════ */
function KeyBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Payments",
      description:
        "Send and receive money in under 3 seconds. Whether it's across the street or across the country, your naira moves at the speed of thought.",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Bank-Level Security",
      description:
        "256-bit encryption, biometric login, and two-factor authentication protect every transaction. Your money is as safe as it gets.",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Smart Savings",
      description:
        "Set goals, automate contributions, and earn competitive interest. Owó Ẹyọ makes saving effortless — your future self will thank you.",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-Time Insights",
      description:
        "Know exactly where your money goes with AI-powered spending analytics, weekly reports, and personalised budget recommendations.",
    },
  ];

  return (
    <SectionBand bg="bg-accent-lime" id="benefits">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent-teal uppercase tracking-wider mb-3">
            Built Different
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Why Choose Owó Ẹyọ?
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 100}>
            <FeatureCard icon={b.icon} title={b.title} description={b.description} />
          </ScrollReveal>
        ))}
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   5 ─ FEATURE HIGHLIGHTS (Alternating rows)
   ══════════════════════════════════════════════════════════════ */
function FeatureHighlights() {
  const features: {
    tag: string;
    title: string;
    description: string;
    direction: "left" | "right";
    mockup: React.ReactNode;
  }[] = [
    {
      tag: "Payments",
      title: "Send & Receive Money",
      description:
        "Transfer naira to any bank account or Owó Ẹyọ wallet instantly. Schedule recurring payments, split bills, and request money from friends — all with zero transfer fees for wallet-to-wallet transactions.",
      direction: "left",
      mockup: (
        <div className="rounded-2xl bg-paper shadow-hero-float p-6 max-w-xs mx-auto">
          <p className="text-xs text-ink-soft uppercase tracking-wider mb-4">Send Money</p>
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-canvas">
            <span className="h-10 w-10 rounded-full bg-accent-interactive flex items-center justify-center text-white text-sm font-bold">AO</span>
            <div>
              <p className="font-display font-semibold text-ink text-sm">Adaeze Okafor</p>
              <p className="text-xs text-ink-soft">@adaeze · GTBank</p>
            </div>
          </div>
          <div className="text-center py-4">
            <p className="font-display font-bold text-4xl text-ink">₦35,000</p>
          </div>
          <div className="w-full py-3 bg-accent-interactive text-white text-center rounded-lg font-display font-semibold text-sm">
            Send Instantly →
          </div>
        </div>
      ),
    },
    {
      tag: "Analytics",
      title: "Track Every Naira",
      description:
        "See exactly where your money goes with beautiful, easy-to-read charts and AI-powered spending categories. Get weekly digest emails, monthly reports, and proactive alerts when you're spending more than usual.",
      direction: "right",
      mockup: (
        <div className="rounded-2xl bg-paper shadow-hero-float p-6 max-w-xs mx-auto">
          <p className="text-xs text-ink-soft uppercase tracking-wider mb-2">Monthly Spending</p>
          <p className="font-display font-bold text-2xl text-ink mb-4">₦184,300</p>

          {/* Fake category bars */}
          {[
            { label: "Transport", pct: 35, color: "bg-accent-interactive" },
            { label: "Food & Dining", pct: 28, color: "bg-accent-teal" },
            { label: "Bills & Utilities", pct: 20, color: "bg-accent-gold" },
            { label: "Entertainment", pct: 12, color: "bg-accent-apricot" },
            { label: "Others", pct: 5, color: "bg-accent-lavender" },
          ].map((c) => (
            <div key={c.label} className="mb-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-ink-soft">{c.label}</span>
                <span className="font-semibold text-ink">{c.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-cloud">
                <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      tag: "Savings",
      title: "Save Smarter",
      description:
        "Create multiple savings goals — from emergency funds to dream vacations. Automate daily, weekly, or monthly contributions and earn up to 16% annual interest. Lock funds for even higher returns with our fixed-deposit vaults.",
      direction: "left",
      mockup: (
        <div className="rounded-2xl bg-paper shadow-hero-float p-6 max-w-xs mx-auto">
          <p className="text-xs text-ink-soft uppercase tracking-wider mb-4">Savings Goals</p>

          {[
            { name: "Emergency Fund", target: "₦1,000,000", pct: 82, icon: "🛡️" },
            { name: "New Laptop", target: "₦450,000", pct: 64, icon: "💻" },
            { name: "Dubai Trip", target: "₦2,500,000", pct: 31, icon: "✈️" },
          ].map((g) => (
            <div key={g.name} className="mb-4 last:mb-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{g.icon}</span>
                <p className="font-display font-semibold text-sm text-ink flex-1">{g.name}</p>
                <p className="text-xs text-accent-teal font-semibold">{g.pct}%</p>
              </div>
              <div className="h-2 rounded-full bg-cloud">
                <div className="h-full rounded-full bg-accent-teal transition-all duration-500" style={{ width: `${g.pct}%` }} />
              </div>
              <p className="text-[10px] text-ink-soft mt-1">Target: {g.target}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <SectionBand bg="bg-paper" id="features">
      <div className="text-center mb-16">
        <ScrollReveal>
          <p className="text-sm font-semibold text-accent-interactive uppercase tracking-wider mb-3">
            Powerful Features
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Everything You Need, Nothing You Don&rsquo;t
          </h2>
        </ScrollReveal>
      </div>

      <div className="space-y-24">
        {features.map((f, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <div
              key={f.title}
              className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 ${isReversed ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Text */}
              <ScrollReveal direction={f.direction} className={isReversed ? "lg:[direction:ltr]" : ""}>
                <p className="text-sm font-semibold text-accent-interactive uppercase tracking-wider mb-3">
                  {f.tag}
                </p>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-4">{f.title}</h3>
                <p className="text-ink-soft text-lg leading-relaxed mb-6 max-w-lg">{f.description}</p>
                <Button href="/features" variant="outline" size="sm">
                  Learn More →
                </Button>
              </ScrollReveal>

              {/* Mockup */}
              <ScrollReveal
                direction={f.direction === "left" ? "right" : "left"}
                delay={200}
                className={isReversed ? "lg:[direction:ltr]" : ""}
              >
                {f.mockup}
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   6 ─ HOW IT WORKS
   ══════════════════════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: "Create Your Account",
      description:
        "Sign up in under 2 minutes with just your phone number and BVN. No branch visits, no paperwork.",
    },
    {
      num: "02",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: "Add Your Money",
      description:
        "Fund your wallet via bank transfer, card, or USSD. No hidden fees, no minimum balance requirements.",
    },
    {
      num: "03",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: "Start Growing",
      description:
        "Send money, pay bills, save towards goals, and watch your wealth grow. It's that simple.",
    },
  ];

  return (
    <SectionBand bg="bg-accent-sky" id="how-it-works">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-interactive uppercase tracking-wider mb-3">
            Simple & Fast
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Get Started in 3 Simple Steps
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {/* Connecting dotted line (desktop only) */}
        <div className="hidden md:block absolute top-24 left-[20%] right-[20%] border-t-2 border-dashed border-accent-interactive/30" aria-hidden="true" />

        {steps.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 150}>
            <div className="relative text-center flex flex-col items-center gap-4">
              {/* Number badge */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent-interactive text-white font-display font-bold text-xl shadow-lg">
                {s.num}
              </div>

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-paper text-accent-interactive shadow-soft-lift">
                {s.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-ink">{s.title}</h3>
              <p className="text-ink-soft leading-relaxed max-w-xs mx-auto">{s.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={500}>
        <div className="text-center mt-12">
          <Button href="/register" size="lg">
            Open Free Account
          </Button>
        </div>
      </ScrollReveal>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   7 ─ SECURITY & TRUST
   ══════════════════════════════════════════════════════════════ */
function SecuritySection() {
  const securityFeatures = [
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "256-bit Encryption",
      description: "Military-grade encryption protects your data at rest and in transit. Always.",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Two-Factor Authentication",
      description: "Biometrics + OTP ensure only you can access your account and approve transactions.",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "CBN Licensed & Regulated",
      description: "Fully licensed by the Central Bank of Nigeria and compliant with all regulatory standards.",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "NDIC Insured Deposits",
      description: "Your deposits are insured up to ₦500,000 by the Nigeria Deposit Insurance Corporation.",
    },
  ];

  return (
    <SectionBand bg="bg-primary" id="security" className="text-white">
      <div className="text-center mb-14">
        <ScrollReveal>
          {/* Shield icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-lime/10 ring-2 ring-accent-lime/30">
            <svg className="h-10 w-10 text-accent-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Your Security Is Our Priority
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            We&rsquo;ve built Owó Ẹyọ from the ground up with world-class security
            infrastructure. Your money and your data are protected at every layer.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityFeatures.map((sf, i) => (
          <ScrollReveal key={sf.title} delay={i * 100}>
            <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-lime/10 text-accent-lime">
                {sf.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{sf.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{sf.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Trust badge */}
      <ScrollReveal delay={500}>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-teal" />
            PCI DSS Compliant
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-teal" />
            ISO 27001 Certified
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-teal" />
            SOC 2 Type II Audited
          </span>
        </div>
      </ScrollReveal>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   8 ─ STATS COUNTER
   ══════════════════════════════════════════════════════════════ */
function StatsCounter() {
  return (
    <SectionBand bg="bg-canvas" id="stats">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        <AnimatedCounter end={2} suffix="M+" label="Active Users" />
        <AnimatedCounter end={50} suffix="B+" label="Transactions Processed (₦)" />
        <AnimatedCounter end={99} suffix=".9%" label="Platform Uptime" />
        <AnimatedCounter end={36} suffix="" label="States Covered" />
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   9 ─ TESTIMONIALS
   ══════════════════════════════════════════════════════════════ */
function Testimonials() {
  return (
    <SectionBand bg="bg-accent-lavender" id="testimonials">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Loved by Thousands Across&nbsp;Nigeria
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScrollReveal delay={0}>
          <TestimonialCard
            name="Chidinma Okonkwo"
            role="Small Business Owner, Lagos"
            quote="Owó Ẹyọ has completely transformed how I manage my boutique's finances. I can track every sale, pay my suppliers instantly, and the savings feature helped me set aside money for my second store opening. It's like having a CFO in my pocket."
            rating={5}
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <TestimonialCard
            name="Emeka Nwosu"
            role="Software Engineer, Abuja"
            quote="I've tried almost every fintech app in Nigeria, and nothing comes close to Owó Ẹyọ. The transfers are genuinely instant, the UI is beautiful, and the spending insights actually helped me cut my monthly expenses by 20%. Highly recommend."
            rating={5}
          />
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <TestimonialCard
            name="Aisha Mohammed"
            role="University Lecturer, Kano"
            quote="What I love most about Owó Ẹyọ is how simple everything is. My mum who isn't tech-savvy uses it to receive money I send her every month. The customer service team is also phenomenal — they resolved my issue in under 5 minutes."
            rating={4}
          />
        </ScrollReveal>
      </div>

      <ScrollReveal delay={400}>
        <div className="text-center mt-10">
          <Button href="/testimonials" variant="outline" size="md">
            Read More Stories
          </Button>
        </div>
      </ScrollReveal>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   10 ─ FAQ PREVIEW
   ══════════════════════════════════════════════════════════════ */
function FaqPreview() {
  return (
    <SectionBand bg="bg-paper" id="faq">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-interactive uppercase tracking-wider mb-3">
              Got Questions?
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          <AccordionItem
            question="Is Owó Ẹyọ safe to use?"
            answer="Absolutely. Owó Ẹyọ is licensed by the Central Bank of Nigeria and your deposits are insured by the NDIC up to ₦500,000. We use 256-bit encryption, biometric authentication, and two-factor verification to protect every transaction. Your security is our number one priority."
          />
          <AccordionItem
            question="How much does it cost to use Owó Ẹyọ?"
            answer="Opening an account is completely free. Wallet-to-wallet transfers are free, and bank transfers start at just ₦10 for amounts under ₦5,000, and ₦25 for larger amounts. There are no hidden charges, no monthly maintenance fees, and no minimum balance requirements."
          />
          <AccordionItem
            question="How fast are transfers?"
            answer="Wallet-to-wallet transfers are instant — typically completed in under 3 seconds. Bank transfers are processed within 5 to 30 seconds depending on the receiving bank. You'll receive real-time notifications for every transaction."
          />
          <AccordionItem
            question="What do I need to open an account?"
            answer="All you need is a valid phone number and your Bank Verification Number (BVN). The entire signup process takes less than 2 minutes. For higher transaction limits, you can verify your identity with a valid government-issued ID."
          />
          <AccordionItem
            question="Can I use Owó Ẹyọ outside Nigeria?"
            answer="Currently, Owó Ẹyọ is available across all 36 states in Nigeria and the FCT. We're actively expanding to Ghana, Kenya, and South Africa in 2026. You can receive international remittances from over 30 countries through our partner network."
          />
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-10">
            <Button href="/faq" variant="ghost" size="md">
              View All FAQs →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   11 ─ DOWNLOAD APP CTA
   ══════════════════════════════════════════════════════════════ */
function DownloadCta() {
  return (
    <SectionBand bg="bg-accent-apricot" id="download">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Copy */}
        <ScrollReveal direction="left">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Ready to Take Control of Your&nbsp;Finances?
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed mt-4 mb-8 max-w-lg">
            Download Owó Ẹyọ today and join over 2 million Nigerians who are
            sending, saving, and growing their money the smarter way. Available on
            iOS and Android.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* App Store */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 rounded-pill bg-ink px-6 py-3 text-white hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-70">Download on the</p>
                <p className="font-display font-semibold text-base leading-tight">App Store</p>
              </div>
            </Link>

            {/* Google Play */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 rounded-pill bg-ink px-6 py-3 text-white hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-70">Get it on</p>
                <p className="font-display font-semibold text-base leading-tight">Google Play</p>
              </div>
            </Link>
          </div>
        </ScrollReveal>

        {/* Phone mockup */}
        <ScrollReveal direction="right" delay={200}>
          <div className="relative mx-auto max-w-[260px]">
            {/* Phone frame */}
            <div className="rounded-[2.5rem] bg-ink p-3 shadow-hero-float">
              <div className="rounded-[2rem] bg-paper overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 py-2 bg-primary text-white text-[10px]">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* App content */}
                <div className="px-4 py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-display font-bold text-sm text-ink">Good evening, Ada 👋</p>
                    <span className="h-7 w-7 rounded-full bg-accent-gold flex items-center justify-center text-[10px]">AO</span>
                  </div>

                  <div className="rounded-xl bg-primary p-4 text-white">
                    <p className="text-[10px] opacity-70">Available Balance</p>
                    <p className="font-display font-bold text-xl mt-1">₦2,450,800</p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { emoji: "↗️", label: "Send" },
                      { emoji: "↙️", label: "Request" },
                      { emoji: "📱", label: "Airtime" },
                      { emoji: "💡", label: "Bills" },
                    ].map((a) => (
                      <div key={a.label} className="flex flex-col items-center gap-1">
                        <span className="h-9 w-9 rounded-full bg-accent-sky flex items-center justify-center text-sm">{a.emoji}</span>
                        <span className="text-[9px] text-ink-soft">{a.label}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-[10px] text-ink-soft mb-2">Recent Transactions</p>
                    {[
                      { name: "Spotify", amount: "-₦2,500", type: "debit" },
                      { name: "Salary", amount: "+₦480,000", type: "credit" },
                      { name: "MTN Airtime", amount: "-₦1,000", type: "debit" },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center justify-between py-1.5 border-b border-hairline/50 last:border-0">
                        <span className="text-[10px] text-ink font-medium">{t.name}</span>
                        <span className={`text-[10px] font-semibold ${t.type === "credit" ? "text-accent-teal" : "text-ink-soft"}`}>
                          {t.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 rounded-full bg-accent-lime px-3 py-1.5 shadow-soft-lift">
              <p className="text-xs font-display font-bold text-ink">Free! 🎉</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   12 ─ NEWSLETTER
   ══════════════════════════════════════════════════════════════ */
function NewsletterSection() {
  return (
    <SectionBand bg="bg-primary" id="newsletter" className="text-white">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-accent-lime">
            Stay in the Loop
          </h2>
          <p className="text-white/70 text-lg mt-4 mb-8 leading-relaxed">
            Get the latest product updates, financial tips, and exclusive early
            access to new features. No spam — just value, once&nbsp;a&nbsp;week.
          </p>

          {/* Form */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="flex-1 rounded-pill px-5 py-3 text-ink bg-white placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-accent-lime"
            />
            <Button variant="footer" size="md" type="submit">
              Subscribe
            </Button>
          </form>

          <p className="text-white/40 text-xs mt-4">
            By subscribing you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-white/60 cursor-pointer">
              Privacy Policy
            </Link>
            . Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </SectionBand>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductOverview />
      <KeyBenefits />
      <FeatureHighlights />
      <HowItWorks />
      <SecuritySection />
      <StatsCounter />
      <Testimonials />
      <FaqPreview />
      <DownloadCta />
      <NewsletterSection />
    </>
  );
}
