import React from "react";
import Link from "next/link";

const PRODUCT_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#security", label: "Security" },
  { href: "/#api", label: "API" },
];

const COMPANY_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#careers", label: "Careers" },
  { href: "/#blog", label: "Blog" },
  { href: "/#press", label: "Press" },
];

const SUPPORT_LINKS = [
  { href: "/#help", label: "Help Center" },
  { href: "/#contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#status", label: "Status" },
];

const SOCIAL_ICONS = [
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-display font-semibold text-accent-lime text-sm uppercase tracking-wider mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-on-ink/70 hover:text-accent-lime transition-colors duration-200 text-sm cursor-pointer"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-on-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 cursor-pointer group" aria-label="Owó Ẹyọ home">
              <svg
                className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <ellipse cx="16" cy="16" rx="11" ry="14" fill="#e5ffc3" stroke="#ffffff" strokeWidth="1.5" />
                <ellipse cx="16" cy="16" rx="6" ry="11" fill="#fff1eb" stroke="#ffffff" strokeWidth="1" />
                <line x1="16" y1="5" x2="16" y2="27" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
              <span className="font-display font-bold text-xl text-on-ink">
                Owó Ẹyọ
              </span>
            </Link>
            <p className="mt-4 text-on-ink/70 text-sm leading-relaxed max-w-xs">
              Modern finance for Africa. Seamless payments, smart savings, and wealth-building tools for everyone.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_ICONS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-on-ink/10 text-on-ink/70 hover:bg-accent-lime hover:text-primary transition-all duration-200 cursor-pointer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Product */}
          <FooterColumn title="Product" links={PRODUCT_LINKS} />

          {/* Col 3: Company */}
          <FooterColumn title="Company" links={COMPANY_LINKS} />

          {/* Col 4: Support */}
          <FooterColumn title="Support" links={SUPPORT_LINKS} />

          {/* Col 5: Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-accent-lime text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-on-ink/70 text-sm mb-4 leading-relaxed">
              Stay updated with the latest features and financial tips.
            </p>
            <form
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full px-4 py-2.5 rounded-pill bg-on-ink/10 border border-on-ink/20 text-on-ink placeholder:text-on-ink/40 text-sm focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-pill bg-accent-lime text-primary font-display font-semibold text-sm hover:bg-accent-lime/90 cursor-pointer transition-colors duration-200 active:scale-[0.97]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-on-ink/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-on-ink/50 text-sm">
            &copy; {new Date().getFullYear()} Owó Ẹyọ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-on-ink/50 hover:text-accent-lime text-sm transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-on-ink/50 hover:text-accent-lime text-sm transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
