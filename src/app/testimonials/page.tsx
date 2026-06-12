import type { Metadata } from "next";
import { SectionBand } from "@/components/ui/SectionBand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Testimonials — Owó Ẹyọ",
  description:
    "Hear from thousands of Africans who trust Owó Ẹyọ to manage their finances. Real stories, real results from our growing community.",
  openGraph: {
    title: "Testimonials — Owó Ẹyọ",
    description:
      "Hear from thousands of Africans who trust Owó Ẹyọ to manage their finances.",
  },
};

/* ─── Data ─────────────────────────────────────────────────────────── */

const testimonials: {
  name: string;
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}[] = [
  {
    name: "Ngozi Okafor",
    role: "Fashion Designer, Abuja",
    quote:
      "Receiving payments from clients used to be such a hassle. With Owó Ẹyọ, I just share my payment link and the money lands instantly. My cash flow has never been smoother.",
    rating: 5,
  },
  {
    name: "Ibrahim Musa",
    role: "University Student, Kano",
    quote:
      "I set a savings goal for my tuition and Owó Ẹyọ helped me stay disciplined. The auto-save feature took small amounts weekly without me even noticing. I hit my target two months early!",
    rating: 5,
  },
  {
    name: "Folake Adeyemi",
    role: "Freelance Writer, Lagos",
    quote:
      "As a freelancer, tracking expenses was my biggest headache. Owó Ẹyọ categorises every transaction automatically and even shows me where I'm overspending. It's like having a personal accountant.",
    rating: 5,
  },
  {
    name: "Chukwuemeka Obi",
    role: "Software Engineer, Port Harcourt",
    quote:
      "I manage accounts across three banks and Owó Ẹyọ brings them all together in one clean dashboard. The multi-account view is a game-changer — no more juggling banking apps.",
    rating: 4,
  },
  {
    name: "Amina Yusuf",
    role: "Market Trader, Ibadan",
    quote:
      "I'm not a tech person at all, but Owó Ẹyọ is so simple even my mother can use it. I taught my market women association and now we all use it for our cooperative savings.",
    rating: 5,
  },
  {
    name: "Tunde Akinola",
    role: "Uber Driver, Lagos",
    quote:
      "I need to know exactly what comes in and goes out every day. Owó Ẹyọ gives me a clean transaction history with daily summaries. It helped me realise I was spending too much on fuel.",
    rating: 4,
  },
  {
    name: "Blessing Edem",
    role: "Nurse, Benin City",
    quote:
      "Security was my number one concern before switching. After learning about their bank-grade encryption and biometric login, I felt completely safe. I haven't looked back since.",
    rating: 5,
  },
  {
    name: "Yemi Olatunji",
    role: "Restaurant Owner, Abeokuta",
    quote:
      "The financial insights feature showed me my busiest days and highest-margin items. I adjusted my menu and staffing accordingly — my profit jumped 25% in just three months.",
    rating: 5,
  },
];

const stats = [
  { end: 4.8, suffix: "/5", label: "App Store Rating" },
  { end: 50, suffix: "K+", label: "Reviews" },
  { end: 98, suffix: "%", label: "Satisfaction Rate" },
  { end: 24, suffix: "/7", label: "Customer Support" },
];

/* ─── Star display for featured testimonial ────────────────────────── */
function StarCluster({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-6 w-6 ${
            i < count ? "text-accent-gold" : "text-hairline"
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

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function TestimonialsPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <SectionBand bg="bg-canvas">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-pill bg-accent-lavender/60 text-primary font-display text-sm font-semibold tracking-wide mb-6">
              Customer Stories
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Trusted by Thousands
              <span className="block text-accent-interactive">
                Across Africa
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
              Real stories from real people. Discover how Owó Ẹyọ is helping
              individuals and businesses take control of their financial future.
            </p>
          </ScrollReveal>
        </div>
      </SectionBand>

      {/* ── 2. Featured Testimonial ─────────────────────────────── */}
      <SectionBand bg="bg-paper">
        <ScrollReveal>
          <Card className="p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent-interactive via-primary-bright to-accent-teal" />

            {/* Large quote mark */}
            <svg
              className="h-12 w-12 sm:h-16 sm:w-16 text-accent-interactive/20 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
            </svg>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-ink leading-relaxed font-body">
              &ldquo;Before Owó Ẹyọ, managing my business finances was a
              nightmare. Multiple bank apps, spreadsheets, and receipts
              everywhere. Now everything is in one place. I&rsquo;ve saved over
              15 hours a month and my business has grown 40% since I started
              using their smart insights.&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary font-display font-bold text-lg">
                  OB
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-ink">
                    Olumide Bakare
                  </p>
                  <p className="text-ink-soft">Small Business Owner, Lagos</p>
                </div>
              </div>
              <div className="sm:ml-auto">
                <StarCluster count={5} />
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </SectionBand>

      {/* ── 3. Testimonial Grid ─────────────────────────────────── */}
      <SectionBand bg="bg-accent-lime">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              What Our Community Says
            </h2>
            <p className="mt-4 text-ink-soft text-lg max-w-2xl mx-auto">
              From students to business owners, Owó Ẹyọ is transforming how
              Africans interact with their money.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <TestimonialCard
                name={t.name}
                role={t.role}
                quote={t.quote}
                rating={t.rating}
              />
            </ScrollReveal>
          ))}
        </div>
      </SectionBand>

      {/* ── 4. Stats Section ────────────────────────────────────── */}
      <SectionBand bg="bg-paper">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              The Numbers Speak for Themselves
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 120}>
              <Card className="p-6 sm:p-8">
                <AnimatedCounter
                  end={s.end}
                  suffix={s.suffix}
                  label={s.label}
                />
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionBand>

      {/* ── 5. CTA ──────────────────────────────────────────────── */}
      <SectionBand bg="bg-accent-apricot">
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Join Our Growing Community
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Thousands of Africans are already building better financial habits
              with Owó Ẹyọ. Start your journey today — it only takes 2 minutes
              to get started.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionBand>
    </>
  );
}
