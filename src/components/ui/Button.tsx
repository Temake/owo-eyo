import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "footer" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-interactive text-white hover:bg-primary-bright shadow-soft-lift hover:shadow-lg",
  outline:
    "bg-white text-ink border-2 border-hairline hover:border-accent-interactive hover:text-accent-interactive",
  footer:
    "bg-primary text-accent-lime rounded-pill hover:bg-primary-bright",
  ghost:
    "bg-transparent text-ink hover:bg-cloud",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-display font-semibold rounded-lg cursor-pointer transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-interactive focus-visible:ring-offset-2 active:scale-[0.97]";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<
          React.AnchorHTMLAttributes<HTMLAnchorElement>,
          keyof ButtonBaseProps
        >)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        keyof ButtonBaseProps
      >)}
    >
      {children}
    </button>
  );
}
