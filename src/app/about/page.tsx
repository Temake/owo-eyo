import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionBand } from "@/components/ui/SectionBand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FeatureCard } from "@/components/ui/FeatureCard";

export const metadata: Metadata = {
  title: "About Us — Owó Ẹyọ",
  description:
    "Learn about Owó Ẹyọ — the African fintech platform empowering millions with accessible payments, savings, and investments. Discover our story, mission, and the team driving financial freedom across the continent.",
  openGraph: {
    title: "About Us — Owó Ẹyọ",
    description:
      "Discover the story, mission, and team behind Owó Ẹyọ — Africa's most trusted financial platform.",
  },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const coreValues = [
  {
    icon: "🤝",
    title: "Trust",
    description:
      "We earn trust through transparency, honesty, and relentless commitment to protecting our customers' money and data. Every decision we make is guided by doing right by the people who depend on us.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We challenge the status quo and build technology that leapfrogs legacy banking systems. From instant payments to AI-powered savings, we push boundaries so our users don't have to settle for less.",
  },
  {
    icon: "✨",
    title: "Simplicity",
    description:
      "Financial tools should feel effortless. We obsess over clean interfaces and intuitive workflows so that anyone — from a first-time user to a seasoned investor — can navigate their finances with ease.",
  },
  {
    icon: "🔒",
    title: "Security",
    description:
      "Bank-grade encryption, biometric authentication, and real-time fraud monitoring are not add-ons — they're foundational. Your money is safe with Owó Ẹyọ, period.",
  },
  {
    icon: "🌍",
    title: "Accessibility",
    description:
      "We design for the market trader in Onitsha, the student in Nairobi, and the entrepreneur in Accra. Our platform works on every device, in every network condition, for every African.",
  },
  {
    icon: "🚀",
    title: "Empowerment",
    description:
      "We don't just move money — we move lives forward. Through financial literacy tools, micro-investment options, and savings automation, we equip people to build generational wealth.",
  },
];

const teamMembers = [
  {
    name: "Adebayo Ogundimu",
    initials: "AO",
    role: "CEO & Co-Founder",
    bio: "Former VP at Flutterwave with 12 years in African fintech. Adebayo's vision is to make financial services as ubiquitous as mobile airtime across the continent.",
    color: "bg-primary",
  },
  {
    name: "Chidinma Eze",
    initials: "CE",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer and Stanford CS graduate. Chidinma architects the infrastructure powering millions of daily transactions with 99.99% uptime.",
    color: "bg-accent-teal",
  },
  {
    name: "Oluwaseun Adeyemi",
    initials: "OA",
    role: "Chief Product Officer",
    bio: "Led product at Paystack before joining Owó Ẹyọ. Oluwaseun combines deep user empathy with data-driven design to build features people actually love.",
    color: "bg-accent-interactive",
  },
  {
    name: "Fatima Ibrahim",
    initials: "FI",
    role: "VP of Engineering",
    bio: "A distributed systems specialist who previously built payment rails at Stripe. Fatima leads a 60-person engineering team shipping at startup speed.",
    color: "bg-[#9333EA]",
  },
  {
    name: "Emeka Nwosu",
    initials: "EN",
    role: "Head of Design",
    bio: "Award-winning designer who led the rebrand of two major African banks. Emeka ensures every pixel in Owó Ẹyọ reflects clarity, warmth, and confidence.",
    color: "bg-accent-gold",
  },
  {
    name: "Aisha Bello",
    initials: "AB",
    role: "Chief Compliance Officer",
    bio: "Former CBN regulator with 15 years in financial compliance. Aisha navigates complex regulatory landscapes to keep Owó Ẹyọ licensed and compliant across all markets.",
    color: "bg-accent-apricot",
  },
];

const milestones = [
  {
    date: "2021 · Q1",
    title: "Founded in Lagos",
    description:
      "Three co-founders, a shared WeWork desk, and an audacious idea — Owó Ẹyọ was born.",
  },
  {
    date: "2021 · Q3",
    title: "Secured $2M Seed Funding",
    description:
      "Backed by Techstars, Y Combinator, and leading African angel investors.",
  },
  {
    date: "2022 · Q1",
    title: "Beta Launch — 10,000 Users",
    description:
      "Our beta went live in Lagos and hit 10K users within 6 weeks of launch.",
  },
  {
    date: "2022 · Q3",
    title: "CBN Microfinance License",
    description:
      "Obtained our Central Bank of Nigeria microfinance banking license — a major regulatory milestone.",
  },
  {
    date: "2023 · Q1",
    title: "500,000 Active Users",
    description:
      "Half a million Nigerians chose Owó Ẹyọ as their primary financial platform.",
  },
  {
    date: "2023 · Q3",
    title: "Series A — $15M Raised",
    description:
      "Led by Sequoia Africa and Accel, fuelling our expansion across West Africa.",
  },
  {
    date: "2024 · Q1",
    title: "Expanded to Ghana & Kenya",
    description:
      "Cross-border launch with instant GHS and KES wallets, zero-fee transfers.",
  },
  {
    date: "2024 · Q3",
    title: "2 Million Users · $50B+ Processed",
    description:
      "A testament to trust — over ₦50 billion in transactions processed to date.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <SectionBand bg="bg-canvas" className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="inline-block mb-4 rounded-pill bg-accent-gold/20 px-4 py-1.5 text-sm font-semibold text-accent-gold tracking-wide uppercase">
              About Owó Ẹyọ
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight mb-6">
              Empowering Financial Freedom{" "}
              <span className="text-primary-bright">for Everyone</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
              We&rsquo;re on a mission to democratise finance across Africa —
              making payments instant, savings effortless, and wealth-building
              accessible to every person on the continent, not just the
              privileged few.
            </p>
          </ScrollReveal>
        </div>
      </SectionBand>

      {/* ── 2. OUR STORY ───────────────────────────────────────── */}
      <SectionBand bg="bg-paper" id="our-story">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-sm font-semibold text-accent-teal tracking-widest uppercase mb-3 block">
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-6 leading-snug">
                From a Lagos Living Room to Millions of Wallets
              </h2>

              <div className="space-y-4 text-ink-soft leading-relaxed text-base sm:text-lg">
                <p>
                  Owó Ẹyọ was founded in Lagos in 2021 by a team of fintech
                  veterans who saw a glaring truth: millions of Africans were
                  underserved — and often ignored — by traditional banking.
                  Long queues, excessive fees, and rigid KYC requirements kept
                  hardworking people locked out of the financial system.
                </p>
                <p>
                  The name <strong>&ldquo;Owó Ẹyọ&rdquo;</strong> comes from
                  the Yoruba language.{" "}
                  <em>&ldquo;Owó&rdquo;</em> means money, and{" "}
                  <em>&ldquo;Ẹyọ&rdquo;</em> refers to the cowrie shell — one
                  of the earliest forms of currency used across West Africa for
                  centuries. The cowrie shell wasn&rsquo;t just money; it was
                  art, status, and connection.
                </p>
                <p>
                  It symbolises our belief that money should be{" "}
                  <strong>accessible</strong>, <strong>beautiful</strong>, and{" "}
                  <strong>empowering</strong>. That&rsquo;s the future
                  we&rsquo;re building — one transaction at a time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Decorative cowrie visual */}
          <ScrollReveal direction="right" delay={150}>
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-accent-gold/10 animate-pulse-glow" />
              {/* Shell circle */}
              <div className="relative flex flex-col items-center justify-center w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-accent-gold/30 to-accent-apricot/30 border-2 border-accent-gold/40 shadow-lg">
                <span className="text-7xl sm:text-8xl" role="img" aria-label="Cowrie shell">
                  🐚
                </span>
                <span className="mt-3 font-display font-bold text-primary text-lg tracking-wide">
                  Owó Ẹyọ
                </span>
                <span className="text-ink-soft text-xs mt-1 tracking-wider uppercase">
                  est. 2021
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionBand>

      {/* ── 3. MISSION & VISION ────────────────────────────────── */}
      <SectionBand bg="bg-accent-lime" id="mission-vision">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-teal tracking-widest uppercase mb-3 block">
              What Drives Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
              Mission &amp; Vision
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left" delay={100}>
            <Card className="p-8 sm:p-10 h-full border-t-4 border-primary-bright">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-4">
                Our Mission
              </h3>
              <p className="text-ink-soft leading-relaxed text-base sm:text-lg">
                To build Africa&rsquo;s most trusted financial platform that
                empowers every person to manage, grow, and protect their money
                with confidence — regardless of income, location, or banking
                history.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <Card className="p-8 sm:p-10 h-full border-t-4 border-accent-gold">
              <span className="text-4xl mb-4 block">🌅</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-4">
                Our Vision
              </h3>
              <p className="text-ink-soft leading-relaxed text-base sm:text-lg">
                A world where financial freedom is not a privilege but a right —
                accessible to every African, everywhere. We envision a continent
                where anyone can save, invest, and transact with the same ease
                and security as anywhere on earth.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </SectionBand>

      {/* ── 4. CORE VALUES ─────────────────────────────────────── */}
      <SectionBand bg="bg-paper" id="values">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-interactive tracking-widest uppercase mb-3 block">
              What We Stand For
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
              Our Core Values
            </h2>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto">
              Six principles that guide every product we build, every hire we
              make, and every customer interaction we have.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 80}>
              <FeatureCard
                icon={<span className="text-2xl">{value.icon}</span>}
                title={value.title}
                description={value.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </SectionBand>

      {/* ── 5. WHY OWÓ ẸYỌ EXISTS ──────────────────────────────── */}
      <SectionBand bg="bg-accent-sky" id="why-we-exist">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 block">
                The Problem
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-6 leading-snug">
                Why Owó Ẹyọ Exists
              </h2>
              <div className="space-y-4 text-ink-soft leading-relaxed text-base sm:text-lg">
                <p>
                  Sub-Saharan Africa is home to nearly{" "}
                  <strong>350 million unbanked adults</strong> — more than any
                  other region on earth. Another 200 million are
                  &ldquo;underbanked,&rdquo; forced to rely on informal savings
                  groups, predatory lenders, or expensive legacy bank accounts.
                </p>
                <p>
                  Meanwhile, Africa has the world&rsquo;s youngest population
                  and fastest-growing smartphone adoption. The infrastructure
                  for change exists — what&rsquo;s been missing is a platform
                  designed <em>by</em> Africans, <em>for</em> Africans, that
                  truly understands the nuances of how people across the
                  continent interact with money.
                </p>
                <p>
                  Owó Ẹyọ bridges that gap. We combine mobile-first design,
                  local-language support, USSD fallbacks for feature phones, and
                  zero-minimum-balance accounts to meet people exactly where
                  they are — and take them where they want to go.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { stat: "350M+", label: "Unbanked adults in Sub-Saharan Africa" },
                { stat: "57%", label: "Adults without formal bank accounts" },
                { stat: "60%", label: "Of Africa's population is under 25" },
                { stat: "2M+", label: "Users already trust Owó Ẹyọ" },
              ].map((item) => (
                <Card key={item.label} className="p-6 text-center">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-primary-bright mb-2">
                    {item.stat}
                  </p>
                  <p className="text-ink-soft text-sm leading-snug">
                    {item.label}
                  </p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </SectionBand>

      {/* ── 6. LEADERSHIP TEAM ─────────────────────────────────── */}
      <SectionBand bg="bg-paper" id="team">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-gold tracking-widest uppercase mb-3 block">
              Our People
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
              Meet the Team Behind Owó Ẹyọ
            </h2>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto">
              A diverse group of builders, dreamers, and operators united by one
              goal: financial inclusion for every African.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 80}>
              <Card className="p-6 sm:p-8 text-center h-full">
                {/* Avatar */}
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-white font-display font-bold text-xl ${member.color}`}
                >
                  {member.initials}
                </div>

                <h3 className="font-display font-bold text-lg text-ink">
                  {member.name}
                </h3>
                <p className="text-accent-interactive font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionBand>

      {/* ── 7. COMPANY MILESTONES ──────────────────────────────── */}
      <SectionBand bg="bg-accent-lavender" id="milestones">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
              Company Milestones
            </h2>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto">
              From a Lagos living room to two million users across three
              countries — here&rsquo;s how we got here.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile & desktop) */}
          <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-10 lg:space-y-14">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal
                  key={milestone.date}
                  direction={isLeft ? "left" : "right"}
                  delay={i * 60}
                >
                  <div
                    className={`relative flex items-start lg:items-center ${
                      isLeft
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-accent-lavender z-10 mt-1.5 lg:mt-0" />

                    {/* Spacer (hidden on mobile) */}
                    <div className="hidden lg:block lg:w-1/2" />

                    {/* Card */}
                    <div
                      className={`ml-12 lg:ml-0 lg:w-1/2 ${
                        isLeft ? "lg:pr-12" : "lg:pl-12"
                      }`}
                    >
                      <Card className="p-6">
                        <span className="text-xs font-bold text-accent-interactive tracking-wider uppercase">
                          {milestone.date}
                        </span>
                        <h3 className="font-display font-bold text-lg text-ink mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-ink-soft text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </Card>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </SectionBand>

      {/* ── 8. CTA ─────────────────────────────────────────────── */}
      <SectionBand bg="bg-primary" className="text-center">
        <ScrollReveal>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-primary mb-6">
            Join the Movement
          </h2>
          <p className="text-on-primary/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Two million Africans already trust Owó Ẹyọ to send, save, and grow
            their money. Whether you&rsquo;re an individual looking for
            financial freedom or a business seeking smarter tools — there&rsquo;s
            a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/get-started" size="lg" variant="footer">
              Get Started — It&rsquo;s Free
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="ghost"
              className="text-on-primary/80 hover:text-on-primary hover:bg-white/10"
            >
              Talk to Our Team →
            </Button>
          </div>
        </ScrollReveal>
      </SectionBand>
    </>
  );
}
