import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionBand } from "@/components/ui/SectionBand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Features — Owó Ẹyọ",
  description:
    "Discover every feature Owó Ẹyọ offers — secure payments, expense tracking, budgeting, savings goals, AI insights, multi-account support, and more. One app, total financial control.",
  openGraph: {
    title: "Features — Owó Ẹyọ",
    description:
      "Explore the complete suite of financial tools that make Owó Ẹyọ the smartest way to manage your money across Africa.",
  },
};

/* ─── SVG Icon helpers ─── */

function IconShield() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
      />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

function IconStack() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
      />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5 flex-shrink-0 text-accent-teal"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

/* ─── Decorative Mockup Components ─── */

function MockupPayments() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-ink">Send Money</span>
          <span className="text-xs bg-accent-teal/10 text-accent-teal px-2 py-1 rounded-pill font-semibold">Instant</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-sky flex items-center justify-center text-primary font-bold text-sm">AO</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">Adeyemi Oluwaseun</p>
              <p className="text-xs text-ink-soft">@adeyemi_o</p>
            </div>
          </div>
          <div className="bg-canvas rounded-xl p-4 text-center">
            <p className="text-xs text-ink-soft mb-1">Amount</p>
            <p className="text-3xl font-display font-bold text-primary">₦25,000</p>
          </div>
          <div className="bg-accent-interactive text-white text-center py-3 rounded-lg font-display font-semibold text-sm">
            Send Instantly →
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent-gold/20 rounded-full blur-xl" />
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-lavender/30 rounded-full blur-xl" />
    </div>
  );
}

function MockupExpenses() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <span className="font-display font-bold text-ink">Spending Overview</span>
        <div className="flex gap-2 items-end h-32">
          {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-accent-interactive/80 transition-all"
                style={{ height: `${h}%` }}
              />
              <span className="text-[10px] text-ink-soft">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-hairline">
          <div>
            <p className="text-xs text-ink-soft">This Week</p>
            <p className="font-display font-bold text-ink">₦142,800</p>
          </div>
          <span className="text-xs bg-accent-lime px-2 py-1 rounded-pill font-semibold text-primary">↓ 12% vs last week</span>
        </div>
      </div>
    </div>
  );
}

function MockupBudget() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <span className="font-display font-bold text-ink">Monthly Budget</span>
        <div className="space-y-3">
          {[
            { label: "Food & Groceries", spent: 32000, total: 50000, color: "bg-accent-teal" },
            { label: "Transport", spent: 18000, total: 25000, color: "bg-accent-interactive" },
            { label: "Entertainment", spent: 8000, total: 15000, color: "bg-accent-gold" },
            { label: "Utilities", spent: 12000, total: 20000, color: "bg-accent-apricot" },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-ink font-medium">{item.label}</span>
                <span className="text-ink-soft">₦{item.spent.toLocaleString()} / ₦{item.total.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-cloud rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${(item.spent / item.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupSavings() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <span className="font-display font-bold text-ink">Savings Goals</span>
        <div className="space-y-4">
          {[
            { goal: "New Laptop", saved: 280000, target: 450000, emoji: "💻" },
            { goal: "Ajo Group — December", saved: 150000, target: 600000, emoji: "🤝" },
            { goal: "Emergency Fund", saved: 500000, target: 1000000, emoji: "🏦" },
          ].map((item) => (
            <div key={item.goal} className="flex items-center gap-3">
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-ink">{item.goal}</span>
                  <span className="text-ink-soft">{Math.round((item.saved / item.target) * 100)}%</span>
                </div>
                <div className="h-2 bg-cloud rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent-teal"
                    style={{ width: `${(item.saved / item.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-accent-sky/40 rounded-full blur-xl" />
    </div>
  );
}

function MockupInsights() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-accent-interactive"><IconBrain /></span>
          <span className="font-display font-bold text-ink">AI Insights</span>
        </div>
        <div className="space-y-3">
          {[
            { text: "You spent 23% more on transport this month. Consider carpooling?", type: "alert" },
            { text: "Great job! Your savings rate increased to 18% — keep it up!", type: "success" },
            { text: "Your financial health score improved to 82/100.", type: "info" },
          ].map((insight, i) => (
            <div
              key={i}
              className={`rounded-lg p-3 text-sm ${
                insight.type === "alert"
                  ? "bg-accent-apricot/20 text-ink"
                  : insight.type === "success"
                    ? "bg-accent-lime/60 text-ink"
                    : "bg-accent-sky/40 text-ink"
              }`}
            >
              {insight.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupMultiAccount() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <span className="font-display font-bold text-ink">Your Accounts</span>
        <div className="space-y-3">
          {[
            { name: "Personal Wallet", balance: "₦1,240,500", icon: "👤", accent: "bg-accent-sky/30" },
            { name: "Business Account", balance: "₦3,800,000", icon: "💼", accent: "bg-accent-lavender/30" },
            { name: "Family Account", balance: "₦680,200", icon: "👨‍👩‍👧‍👦", accent: "bg-accent-lime/50" },
            { name: "GTBank (Linked)", balance: "₦425,900", icon: "🏦", accent: "bg-accent-apricot/30" },
          ].map((acc) => (
            <div key={acc.name} className={`flex items-center gap-3 rounded-xl p-3 ${acc.accent}`}>
              <span className="text-xl">{acc.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{acc.name}</p>
                <p className="text-xs text-ink-soft">{acc.balance}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-ink-soft">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupHistory() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-ink">Recent Transactions</span>
          <span className="text-xs text-accent-interactive font-semibold cursor-pointer">Export</span>
        </div>
        <div className="space-y-3">
          {[
            { desc: "Netflix Subscription", amount: "-₦4,400", date: "Today, 2:30 PM", positive: false },
            { desc: "Salary Credit", amount: "+₦850,000", date: "Jun 1, 9:00 AM", positive: true },
            { desc: "Uber Ride", amount: "-₦3,200", date: "May 31, 6:15 PM", positive: false },
            { desc: "Refund — Jumia", amount: "+₦12,500", date: "May 30, 11:00 AM", positive: true },
          ].map((tx) => (
            <div key={tx.desc} className="flex items-center justify-between py-2 border-b border-hairline last:border-0">
              <div>
                <p className="text-sm font-medium text-ink">{tx.desc}</p>
                <p className="text-xs text-ink-soft">{tx.date}</p>
              </div>
              <span className={`text-sm font-semibold ${tx.positive ? "text-accent-teal" : "text-ink"}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupRecommendations() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-white shadow-soft-lift p-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-accent-gold"><IconSparkles /></span>
          <span className="font-display font-bold text-ink">For You</span>
        </div>
        <div className="space-y-3">
          {[
            { title: "Switch to a cheaper data plan", desc: "Save ₦2,500/month by switching from your current plan.", tag: "Bill Optimization" },
            { title: "Start a 90-day fixed deposit", desc: "Earn up to 16% p.a. on idle funds in your wallet.", tag: "Investment Tip" },
            { title: "Reduce food delivery spending", desc: "You've spent 40% more than last month. Try meal prepping!", tag: "Spending Alert" },
          ].map((rec) => (
            <div key={rec.title} className="rounded-xl border border-hairline p-3 space-y-1 hover:border-accent-interactive/40 transition-colors">
              <span className="text-[10px] font-semibold text-accent-interactive bg-accent-sky/40 px-2 py-0.5 rounded-pill">{rec.tag}</span>
              <p className="text-sm font-semibold text-ink">{rec.title}</p>
              <p className="text-xs text-ink-soft leading-relaxed">{rec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Feature Section Layout ─── */

interface FeatureSectionProps {
  bg: string;
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  points: string[];
  ctaText: string;
  ctaHref: string;
  mockup: React.ReactNode;
  reverse?: boolean;
}

function FeatureSection({
  bg,
  id,
  icon,
  heading,
  description,
  points,
  ctaText,
  ctaHref,
  mockup,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <SectionBand bg={bg} id={id}>
      <div
        className={`flex flex-col items-center gap-12 lg:gap-16 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Text content */}
        <ScrollReveal
          direction={reverse ? "right" : "left"}
          className="flex-1 max-w-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-interactive/10 text-accent-interactive">
              {icon}
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed mb-6">
            {description}
          </p>
          <ul className="space-y-3 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-1 text-accent-interactive font-display font-semibold hover:underline cursor-pointer transition-colors"
          >
            {ctaText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </ScrollReveal>

        {/* Mockup visual */}
        <ScrollReveal
          direction={reverse ? "left" : "right"}
          delay={200}
          className="flex-1 flex justify-center"
        >
          {mockup}
        </ScrollReveal>
      </div>
    </SectionBand>
  );
}

/* ─── Page Component ─── */

export default function FeaturesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <SectionBand bg="bg-canvas" className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto text-center">
          <p className="text-accent-interactive font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Platform Features
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
            Everything You Need,{" "}
            <span className="text-accent-interactive">Nothing You Don&apos;t</span>
          </h1>
          <p className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Owó Ẹyọ combines powerful financial tools into one beautiful,
            intuitive platform. No complexity. No hidden fees. Just pure
            financial freedom.
          </p>
        </ScrollReveal>
      </SectionBand>

      {/* ─── Feature 1: Secure Payments ─── */}
      <FeatureSection
        bg="bg-paper"
        id="payments"
        icon={<IconShield />}
        heading="Secure Payments That Move at the Speed of Life"
        description="Send and receive money instantly across Nigeria and beyond. Whether you're splitting a dinner bill or sending money home, every transaction is encrypted and lightning-fast."
        points={[
          "Instant peer-to-peer transfers — money arrives in seconds, not days",
          "Pay bills directly from your wallet: electricity, airtime, internet, and more",
          "QR code payments for seamless in-store and market purchases",
          "International remittances to 30+ African countries at unbeatable rates",
        ]}
        ctaText="Learn about our security"
        ctaHref="/security"
        mockup={<MockupPayments />}
      />

      {/* ─── Feature 2: Expense Tracking ─── */}
      <FeatureSection
        bg="bg-accent-lime"
        id="expenses"
        icon={<IconChart />}
        heading="Know Exactly Where Your Money Goes"
        description="Stop guessing and start knowing. Owó Ẹyọ automatically categorizes every transaction so you can see your spending patterns at a glance and make informed decisions."
        points={[
          "Automatic categorization powered by machine learning — no manual tagging",
          "Visual spending trends with beautiful, easy-to-read charts and graphs",
          "Monthly and weekly reports delivered straight to your inbox",
          "Create custom categories that match your unique lifestyle and priorities",
        ]}
        ctaText="See how tracking works"
        ctaHref="/features#expenses"
        mockup={<MockupExpenses />}
        reverse
      />

      {/* ─── Feature 3: Budget Management ─── */}
      <FeatureSection
        bg="bg-paper"
        id="budgets"
        icon={<IconWallet />}
        heading="Budgets That Actually Work for You"
        description="Set budgets that adapt to your real life — not rigid spreadsheets that break by day three. Get nudged when you're close to a limit and celebrated when you stay on track."
        points={[
          "Category-based budgets with smart suggestions based on your spending history",
          "Real-time notifications before you overspend — not after",
          "Flexible limits you can adjust anytime without judgment",
          "Visual progress bars so you always know where you stand at a glance",
        ]}
        ctaText="Start budgeting smarter"
        ctaHref="/get-started"
        mockup={<MockupBudget />}
      />

      {/* ─── Feature 4: Savings Goals ─── */}
      <FeatureSection
        bg="bg-accent-sky"
        id="savings"
        icon={<IconTarget />}
        heading="Turn Dreams Into Reality, One Naira at a Time"
        description="Whether it's a new laptop, your dream wedding, or an emergency fund, set a goal and let Owó Ẹyọ automate the journey. Watch your progress grow every day."
        points={[
          "Goal-based saving with visual milestones and progress celebrations",
          "Auto-debit schedules — set it once and save effortlessly on autopilot",
          "Competitive interest rates that make your idle money work harder",
          "Group savings (Ajo) — save together with friends, family, or colleagues",
        ]}
        ctaText="Explore savings options"
        ctaHref="/savings"
        mockup={<MockupSavings />}
        reverse
      />

      {/* ─── Feature 5: Financial Insights ─── */}
      <FeatureSection
        bg="bg-paper"
        id="insights"
        icon={<IconBrain />}
        heading="AI-Powered Insights That Make You Smarter With Money"
        description="Your personal financial advisor that never sleeps. Owó Ẹyọ analyzes your habits and delivers actionable insights to help you save more, spend wisely, and build wealth."
        points={[
          "Deep spending analysis that reveals hidden patterns and opportunities",
          "Personalized saving recommendations tailored to your income and goals",
          "Income tracking across multiple sources with growth trend analysis",
          "Financial health score — a single number that tells you where you stand",
        ]}
        ctaText="Discover your insights"
        ctaHref="/insights"
        mockup={<MockupInsights />}
      />

      {/* ─── Feature 6: Multi-Account Support ─── */}
      <FeatureSection
        bg="bg-accent-apricot"
        id="accounts"
        icon={<IconStack />}
        heading="All Your Accounts, One Beautiful Dashboard"
        description="No more juggling between banking apps. Link every account, wallet, and card to Owó Ẹyọ and get a unified view of your complete financial picture."
        points={[
          "Multiple wallet support for different spending purposes and goals",
          "Link your existing bank accounts for a complete financial overview",
          "Seamless business and personal account separation — no more mixing",
          "Family accounts with shared visibility and individual spending controls",
        ]}
        ctaText="Connect your accounts"
        ctaHref="/get-started"
        mockup={<MockupMultiAccount />}
        reverse
      />

      {/* ─── Feature 7: Transaction History ─── */}
      <FeatureSection
        bg="bg-paper"
        id="history"
        icon={<IconClock />}
        heading="Complete Transparency, Zero Surprises"
        description="Every naira accounted for. Search, filter, and export your full transaction history anytime. Never wonder where your money went again."
        points={[
          "Searchable history with powerful filters by date, amount, and category",
          "Export to CSV or PDF for bookkeeping, tax filing, or personal records",
          "Digital receipt storage — snap and attach receipts to any transaction",
          "Built-in dispute resolution for quick resolution of payment issues",
        ]}
        ctaText="View sample reports"
        ctaHref="/features#history"
        mockup={<MockupHistory />}
      />

      {/* ─── Feature 8: Smart Recommendations ─── */}
      <FeatureSection
        bg="bg-accent-lavender"
        id="recommendations"
        icon={<IconSparkles />}
        heading="Personalized Tips to Optimize Every Naira"
        description="Owó Ẹyọ doesn't just track your money — it actively helps you make it go further. Get tailored suggestions based on your unique financial behavior."
        points={[
          "Investment tips matched to your risk profile and financial goals",
          "Bill optimization — find cheaper alternatives for recurring expenses",
          "Savings opportunities you'd never spot on your own, surfaced automatically",
          "Smart spending alerts that catch unusual patterns before they become problems",
        ]}
        ctaText="Get personalized tips"
        ctaHref="/get-started"
        mockup={<MockupRecommendations />}
        reverse
      />

      {/* ─── CTA Section ─── */}
      <SectionBand bg="bg-primary" className="py-24 sm:py-32">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Experience the{" "}
            <span className="text-accent-lime">Future of Finance?</span>
          </h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10">
            Join thousands of Nigerians who are already taking control of their
            finances with Owó Ẹyọ. It takes less than two minutes to get
            started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/get-started" size="lg" variant="footer">
              Get Started — It&apos;s Free
            </Button>
            <Button
              href="/pricing"
              variant="ghost"
              size="lg"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              View Pricing →
            </Button>
          </div>
        </ScrollReveal>
      </SectionBand>
    </>
  );
}
