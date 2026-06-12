"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { SectionBand } from "@/components/ui/SectionBand";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ─── FAQ Data ─────────────────────────────────────────────────────── */

type Category =
  | "Account Setup"
  | "Security"
  | "Transactions"
  | "Savings"
  | "Support"
  | "Fees"
  | "Privacy";

interface FaqEntry {
  question: string;
  answer: string;
}

const categories: Category[] = [
  "Account Setup",
  "Security",
  "Transactions",
  "Savings",
  "Support",
  "Fees",
  "Privacy",
];

const faqData: Record<Category, FaqEntry[]> = {
  "Account Setup": [
    {
      question: "How do I create an Owó Ẹyọ account?",
      answer:
        "Download the app from App Store or Google Play, enter your phone number, verify with OTP, and complete your profile with your BVN. The entire process takes less than 2 minutes.",
    },
    {
      question: "What documents do I need to sign up?",
      answer:
        "You'll need a valid phone number, your Bank Verification Number (BVN), and a government-issued ID (NIN, Voter's Card, International Passport, or Driver's License) for full KYC verification.",
    },
    {
      question: "Can I have multiple accounts?",
      answer:
        "Each individual can have one personal account linked to their BVN. However, you can create a separate business account with your CAC registration documents.",
    },
    {
      question: "How do I upgrade my account tier?",
      answer:
        "Navigate to Settings > Account Tier in the app. Complete the required verification steps for your desired tier. Higher tiers offer increased transaction limits and additional features.",
    },
    {
      question: "Can I use Owó Ẹyọ outside Nigeria?",
      answer:
        "Currently, Owó Ẹyọ is available in Nigeria, Ghana, and Kenya. We're actively expanding to more African countries. You can receive international remittances from over 30 countries.",
    },
  ],
  Security: [
    {
      question: "Is my money safe with Owó Ẹyọ?",
      answer:
        "Absolutely. We are licensed by the Central Bank of Nigeria and your deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC). We use bank-grade 256-bit encryption for all transactions.",
    },
    {
      question: "What happens if I lose my phone?",
      answer:
        "Contact our support team immediately at +234 800 123 4567. We'll freeze your account to prevent unauthorized access. You can regain access through our secure account recovery process on a new device.",
    },
    {
      question: "How does two-factor authentication work?",
      answer:
        "When enabled, you'll need both your PIN and a one-time code sent to your registered phone number or email to complete sensitive actions like transfers above your set limit or profile changes.",
    },
    {
      question: "Does Owó Ẹyọ share my data with third parties?",
      answer:
        "We never sell your personal data. We only share information with regulated financial partners as required to process your transactions, and with regulatory authorities as required by law.",
    },
    {
      question: "How do I report suspicious activity?",
      answer:
        "Tap the shield icon in the app or call our 24/7 fraud hotline at +234 800 123 4568. You can also email security@owoeyoo.com. We investigate all reports within 2 hours.",
    },
  ],
  Transactions: [
    {
      question: "How long do transfers take?",
      answer:
        "Transfers to other Owó Ẹyọ users are instant. Bank transfers typically complete within 5-30 minutes during banking hours. International transfers may take 1-3 business days.",
    },
    {
      question: "What are the transfer limits?",
      answer:
        "Basic tier: ₦200,000 daily. Standard tier: ₦1,000,000 daily. Premium tier: ₦5,000,000 daily. Business accounts have custom limits based on your business volume.",
    },
    {
      question: "Can I reverse a transaction?",
      answer:
        "Transactions to other Owó Ẹyọ users can be disputed within 24 hours. Bank transfers cannot be reversed once confirmed. Always double-check recipient details before confirming.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "You can fund your wallet via bank transfer, debit card, USSD (*919#), QR code payments, and direct bank debit. We support all major Nigerian banks.",
    },
    {
      question: "How do I pay bills?",
      answer:
        "Navigate to Payments > Bills in the app. We support airtime, data, electricity (PHCN), cable TV (DSTV, GOtv, Startimes), internet, and water bills across all major providers.",
    },
  ],
  Savings: [
    {
      question: "What interest rates do you offer?",
      answer:
        "Our flexible savings earn up to 12% per annum. Fixed savings (30-365 days) earn up to 16% per annum. Group savings (Ajo) earn up to 14% per annum. Interest is calculated daily and paid monthly.",
    },
    {
      question: "Can I withdraw my savings anytime?",
      answer:
        "Flexible savings can be withdrawn anytime with no penalty. Fixed savings have an early withdrawal fee of 25% of accrued interest. We recommend keeping funds locked for maximum returns.",
    },
    {
      question: "What is Group Savings (Ajo)?",
      answer:
        "Ajo is our digital version of the traditional rotating savings scheme. Create or join a group, set contribution amounts and frequency, and members take turns receiving the pooled funds. It's savings with accountability.",
    },
    {
      question: "Is there a minimum savings amount?",
      answer:
        "You can start saving with as little as ₦100. There's no maximum limit. We believe everyone deserves the opportunity to build wealth, no matter how small the start.",
    },
    {
      question: "How do savings goals work?",
      answer:
        "Create a named goal (e.g., 'New Laptop'), set a target amount and deadline, and optionally enable auto-debit to save automatically. Track your progress visually and celebrate when you reach your goal.",
    },
  ],
  Support: [
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us via in-app live chat (24/7), email at support@owoeyoo.com, phone at +234 800 123 4567 (8am-10pm WAT), or through our social media channels on Twitter and Instagram.",
    },
    {
      question: "What is your response time?",
      answer:
        "Live chat: under 2 minutes. Email: within 4 hours during business hours. Phone: average hold time is under 1 minute. Critical issues like fraud reports are escalated immediately.",
    },
    {
      question: "Do you have physical branches?",
      answer:
        "Our headquarters is at 15 Adeola Odeku Street, Victoria Island, Lagos. We also have service centers in Abuja, Port Harcourt, and Kano. However, most issues can be resolved digitally through the app.",
    },
    {
      question: "How do I provide feedback?",
      answer:
        "We love hearing from you! Use the in-app feedback feature (Settings > Feedback), email us at feedback@owoeyoo.com, or rate us on the App Store/Google Play. Every piece of feedback shapes our product.",
    },
  ],
  Fees: [
    {
      question: "Is Owó Ẹyọ free to use?",
      answer:
        "Creating an account and basic features are completely free. We charge minimal fees on certain transactions: bank transfers (₦10-25), bill payments (free), and international transfers (1.5% of amount).",
    },
    {
      question: "Are there hidden charges?",
      answer:
        "Never. We believe in complete transparency. All fees are displayed clearly before you confirm any transaction. No maintenance fees, no monthly charges, no surprises.",
    },
    {
      question: "How do you make money?",
      answer:
        "We earn revenue through small transaction fees, interest spread on deposits, premium subscription features, and merchant payment processing. We never monetize your personal data.",
    },
    {
      question: "What is the premium subscription?",
      answer:
        "Owó Ẹyọ Premium (₦1,500/month) includes fee-free bank transfers, higher transaction limits, priority support, exclusive savings rates, and advanced financial insights.",
    },
  ],
  Privacy: [
    {
      question: "What data do you collect?",
      answer:
        "We collect information necessary to provide our services: personal identification (name, BVN, ID), contact information, transaction history, and device information for security. We follow strict data minimization principles.",
    },
    {
      question: "How is my data stored?",
      answer:
        "Your data is encrypted at rest and in transit using AES-256 encryption. We store data in Tier-4 data centers within Nigeria, complying with NDPR (Nigeria Data Protection Regulation) requirements.",
    },
    {
      question: "Can I delete my account and data?",
      answer:
        "Yes. You can request account deletion through Settings > Account > Delete Account. We'll process your request within 30 days, retaining only data required by financial regulations for the mandatory 5-year period.",
    },
    {
      question: "Do you use cookies?",
      answer:
        "Our website uses essential cookies for functionality and analytics cookies to improve your experience. You can manage your cookie preferences at any time through our cookie settings panel.",
    },
  ],
};

/* ─── Category Icons ───────────────────────────────────────────────── */

const categoryIcons: Record<Category, React.ReactNode> = {
  "Account Setup": (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Security: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Transactions: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  Savings: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Support: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Fees: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  Privacy: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
};

/* ─── Page Component ───────────────────────────────────────────────── */

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Account Setup");
  const [searchQuery, setSearchQuery] = useState("");

  /* Filter questions within the active category by search query */
  const filteredQuestions = faqData[activeCategory].filter((faq) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q)
    );
  });

  /* Count total FAQs for display */
  const totalFaqs = Object.values(faqData).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <SectionBand bg="bg-canvas" className="pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <span className="inline-block rounded-pill bg-accent-interactive/10 px-4 py-1.5 text-sm font-semibold text-accent-interactive mb-6">
              {totalFaqs}+ Questions Answered
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Frequently Asked{" "}
              <span className="text-accent-interactive">Questions</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              Find answers to common questions about Owó Ẹyọ. Can&apos;t find
              what you&apos;re looking for?{" "}
              <a
                href="/contact"
                className="text-accent-interactive underline underline-offset-4 hover:text-primary-bright transition-colors cursor-pointer"
              >
                Contact our support team
              </a>
              .
            </p>
          </ScrollReveal>

          {/* Search Input (decorative filter) */}
          <ScrollReveal direction="up" delay={300}>
            <div className="relative mt-10 mx-auto max-w-xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="h-5 w-5 text-ink-soft"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a question..."
                className="w-full rounded-xl border border-hairline bg-paper py-4 pl-12 pr-4 text-ink shadow-soft-lift placeholder:text-ink-soft/60 focus:border-accent-interactive focus:outline-none focus:ring-2 focus:ring-accent-interactive/20 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-ink-soft hover:text-ink cursor-pointer transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </SectionBand>

      {/* ── Category Tabs + FAQ Accordion ────────────────────────── */}
      <SectionBand bg="bg-paper" className="py-16 sm:py-24" id="questions">
        <div className="mx-auto max-w-3xl">
          {/* Category Pills */}
          <ScrollReveal direction="up">
            <nav
              className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
              role="tablist"
              aria-label="FAQ categories"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 rounded-pill px-4 py-2.5 text-sm font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-interactive focus-visible:ring-offset-2 ${
                    activeCategory === cat
                      ? "bg-accent-interactive text-white shadow-soft-lift"
                      : "bg-cloud/60 text-ink-soft border border-hairline hover:bg-cloud hover:text-ink hover:border-hairline-strong"
                  }`}
                >
                  {categoryIcons[cat]}
                  {cat}
                </button>
              ))}
            </nav>
          </ScrollReveal>

          {/* Active Category Header */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {activeCategory}
            </h2>
            <span className="text-sm text-ink-soft">
              {filteredQuestions.length}{" "}
              {filteredQuestions.length === 1 ? "question" : "questions"}
            </span>
          </div>

          {/* Accordion List */}
          <div className="space-y-3" role="tabpanel" aria-label={`${activeCategory} questions`}>
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((faq, idx) => (
                <ScrollReveal key={`${activeCategory}-${idx}`} direction="up" delay={idx * 60}>
                  <AccordionItem
                    question={faq.question}
                    answer={faq.answer}
                  />
                </ScrollReveal>
              ))
            ) : (
              <div className="rounded-xl border border-hairline bg-canvas/50 py-16 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-ink-soft/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-4 font-display text-lg font-semibold text-ink">
                  No matching questions
                </p>
                <p className="mt-2 text-ink-soft">
                  Try a different search term or{" "}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-accent-interactive underline underline-offset-2 cursor-pointer hover:text-primary-bright transition-colors"
                  >
                    clear the search
                  </button>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </SectionBand>

      {/* ── Still Need Help? CTA ─────────────────────────────────── */}
      <SectionBand bg="bg-accent-apricot" className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal direction="up">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Still Have Questions?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-ink/80 sm:text-xl">
              Our support team is available 24/7 to help you with anything you
              need. We typically respond within minutes.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/contact">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Support
              </Button>
              <Button variant="outline" size="lg" href="mailto:support@owoeyoo.com">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionBand>
    </>
  );
}
