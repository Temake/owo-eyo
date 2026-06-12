"use client";

import React, { useState, type FormEvent } from "react";
import type { Metadata } from "next";
import { SectionBand } from "@/components/ui/SectionBand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/AccordionItem";

/* ─── Data ─────────────────────────────────────────────────────────── */

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "hello@owoeyoo.com",
    href: "mailto:hello@owoeyoo.com",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "+234 800 123 4567",
    href: "tel:+2348001234567",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Office",
    value: "15 Adeola Odeku Street, Victoria Island, Lagos, Nigeria",
    href: undefined,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon–Fri, 8 am – 6 pm WAT",
    href: undefined,
  },
];

const socials = [
  {
    name: "Twitter / X",
    href: "https://twitter.com/owoeyo",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/owoeyo",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/owoeyo",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/owoeyo",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "Tap \"Forgot Password\" on the login screen, enter your registered email or phone number, and we'll send you a secure reset link. The link expires in 15 minutes for your security. If you don't receive it, check your spam folder or contact our support team.",
  },
  {
    question: "How long do transfers take?",
    answer:
      "Transfers between Owó Ẹyọ accounts are instant — available in seconds. Bank transfers typically arrive within 5–30 minutes depending on your bank. International transfers may take 1–3 business days. You'll receive real-time notifications at every stage.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Absolutely. Your funds are held in trust with licensed, NDIC-insured partner banks. We use 256-bit AES encryption, biometric authentication, and two-factor verification to protect every transaction. We're also licensed by the Central Bank of Nigeria.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us through in-app live chat (available 24/7), email at hello@owoeyoo.com, or call us at +234 800 123 4567 during business hours (Mon–Fri, 8 am–6 pm WAT). We also respond on Twitter/X and Instagram.",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Account Support",
  "Partnership Opportunity",
  "Press & Media",
  "Bug Report",
  "Feature Request",
];

/* ─── Contact Form Component ──────────────────────────────────────── */

function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const subject = form.get("subject") as string;
    const message = form.get("message") as string;

    if (!name || name.trim().length < 2) errs.name = "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!subject) errs.subject = "Please select a subject.";
    if (!message || message.trim().length < 10)
      errs.message = "Your message should be at least 10 characters.";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <Card className="p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[420px] gap-6">
        {/* Checkmark circle */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-teal/15">
          <svg
            className="h-10 w-10 text-accent-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h3 className="font-display text-2xl font-bold text-primary">
          Message Sent!
        </h3>
        <p className="text-ink-soft max-w-sm leading-relaxed">
          Thank you for reaching out. Our team will get back to you within 24
          hours. In the meantime, check out our{" "}
          <a href="#faqs" className="text-accent-interactive underline underline-offset-2 cursor-pointer">
            FAQs
          </a>{" "}
          for quick answers.
        </p>
        <Button
          variant="outline"
          size="md"
          onClick={() => setFormState("idle")}
          type="button"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  const inputBase =
    "w-full rounded-pill border border-hairline bg-paper px-5 py-3.5 font-body text-ink placeholder:text-ink-soft/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-interactive/50 focus:border-accent-interactive";

  return (
    <Card className="p-6 sm:p-8 lg:p-10">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
        Send Us a Message
      </h2>
      <p className="text-ink-soft mb-8">
        Fill out the form and our team will respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1.5 font-display">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Adaeze Nwosu"
            className={`${inputBase} ${errors.name ? "border-red-500 ring-1 ring-red-500/30" : ""}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5 font-display">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? "border-red-500 ring-1 ring-red-500/30" : ""}`}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-ink mb-1.5 font-display">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            defaultValue=""
            className={`${inputBase} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%23393d46%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_16px_center] bg-no-repeat pr-12 ${errors.subject ? "border-red-500 ring-1 ring-red-500/30" : ""}`}
          >
            <option value="" disabled>
              Select a subject...
            </option>
            {subjectOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1.5 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5 font-display">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us how we can help..."
            className={`${inputBase} !rounded-xl resize-none ${errors.message ? "border-red-500 ring-1 ring-red-500/30" : ""}`}
          />
          {errors.message && (
            <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="w-full mt-2"
          disabled={formState === "submitting"}
        >
          {formState === "submitting" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending…
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Card>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <SectionBand bg="bg-canvas">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-pill bg-accent-sky/60 text-primary font-display text-sm font-semibold tracking-wide mb-6">
              Get in Touch
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              We&rsquo;d Love to Hear
              <span className="block text-accent-interactive">From You</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
              Whether you have a question about our products, need technical
              support, or want to explore a partnership — our team is here to
              help.
            </p>
          </ScrollReveal>
        </div>
      </SectionBand>

      {/* ── 2. Contact Grid ─────────────────────────────────────── */}
      <SectionBand bg="bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Form — takes 3 columns */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Right: Contact Info — takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <ScrollReveal direction="right">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
                Contact Information
              </h2>
              <p className="text-ink-soft mb-6">
                Reach out through any of these channels — we typically respond
                within a few hours.
              </p>
            </ScrollReveal>

            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} direction="right" delay={i * 100}>
                <Card className="p-5 sm:p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-interactive/10 text-accent-interactive">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-ink text-sm uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-ink-soft hover:text-accent-interactive transition-colors duration-200 cursor-pointer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-ink-soft">{item.value}</p>
                    )}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* ── 3. Social Links ─────────────────────────────────────── */}
      <SectionBand bg="bg-accent-sky">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Connect With Us
            </h2>
            <p className="mt-4 text-ink-soft text-lg max-w-xl mx-auto">
              Follow us on social media for product updates, financial tips, and
              community stories.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {socials.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 80}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${s.name}`}
                className="group cursor-pointer"
              >
                <Card className="p-6 sm:p-8 flex flex-col items-center gap-3 text-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <div className="text-accent-interactive group-hover:text-accent-lime transition-colors duration-300">
                    {s.icon}
                  </div>
                  <span className="font-display font-semibold text-sm text-ink group-hover:text-on-primary transition-colors duration-300">
                    {s.name}
                  </span>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </SectionBand>

      {/* ── 4. Support FAQs ─────────────────────────────────────── */}
      <SectionBand bg="bg-paper" id="faqs">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-ink-soft text-lg">
                Quick answers to the most common questions our support team
                receives.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 80}>
                <AccordionItem
                  question={faq.question}
                  answer={faq.answer}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* ── 5. Map / Location ───────────────────────────────────── */}
      <SectionBand bg="bg-accent-lime">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Decorative map element */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden bg-paper shadow-soft-lift aspect-[4/3] flex items-center justify-center">
              {/* Stylised map illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sky/40 via-paper to-accent-lavender/30" />
              <div className="relative flex flex-col items-center gap-4 p-8 text-center">
                {/* Pin icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary animate-pulse-glow">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>

                <h3 className="font-display text-xl font-bold text-primary">
                  Victoria Island, Lagos
                </h3>
                <p className="text-ink-soft text-sm max-w-xs">
                  Our headquarters is located in the heart of Lagos&rsquo;s
                  business district, easily accessible by road and ferry.
                </p>

                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #190066 39px, #190066 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #190066 39px, #190066 40px)" }} />
              </div>
            </div>
          </ScrollReveal>

          {/* Address details */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
                Visit Our Office
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed">
                We&rsquo;d love to meet you in person. Drop by our Lagos
                headquarters for a coffee and a chat about how Owó Ẹyọ can
                work for you.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-ink">Address</p>
                    <p className="text-ink-soft">
                      15 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-ink">Business Hours</p>
                    <p className="text-ink-soft">Monday – Friday, 8:00 am – 6:00 pm WAT</p>
                    <p className="text-ink-soft text-sm">Closed on weekends &amp; public holidays</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-ink">Phone</p>
                    <a
                      href="tel:+2348001234567"
                      className="text-ink-soft hover:text-accent-interactive transition-colors cursor-pointer"
                    >
                      +234 800 123 4567
                    </a>
                  </div>
                </div>
              </div>

              <Button variant="primary" size="lg" href="https://maps.google.com/?q=15+Adeola+Odeku+Street+Victoria+Island+Lagos" className="self-start mt-2">
                Get Directions →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionBand>
    </>
  );
}
