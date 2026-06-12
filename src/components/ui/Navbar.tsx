"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
] as const;

function CowrieIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="16" cy="16" rx="11" ry="14" fill="#e5ffc3" stroke="#190066" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="6" ry="11" fill="#fff1eb" stroke="#190066" strokeWidth="1" />
      <line x1="16" y1="5" x2="16" y2="27" stroke="#190066" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
      <span
        className={`block h-[2px] w-5 bg-ink transition-all duration-300 origin-center ${
          open ? "rotate-45 translate-y-[7px]" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-5 bg-ink transition-all duration-300 ${
          open ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-5 bg-ink transition-all duration-300 origin-center ${
          open ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      />
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-lg shadow-soft-lift"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
            aria-label="Owó Ẹyọ home"
          >
            <CowrieIcon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-xl sm:text-2xl text-primary">
              Owó Ẹyọ
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive(href)
                      ? "text-accent-interactive bg-accent-sky/40"
                      : "text-ink-soft hover:text-ink hover:bg-cloud/60"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="/#contact">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-cloud/60 cursor-pointer transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-[280px] max-w-[80vw] bg-paper shadow-hero-float transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-body text-base font-medium transition-colors duration-200 cursor-pointer ${
                    isActive(href)
                      ? "text-accent-interactive bg-accent-sky/40"
                      : "text-ink-soft hover:text-ink hover:bg-cloud/60"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <Button
              variant="primary"
              size="md"
              href="/#contact"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
