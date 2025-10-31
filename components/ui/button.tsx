import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] focus-visible:ring-[var(--primary)]":
          variant === "primary",
        "bg-[var(--success)] text-white hover:bg-emerald-600 focus-visible:ring-[var(--success)]":
          variant === "secondary",
        "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white":
          variant === "outline",
        "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--background-light)]":
          variant === "ghost",
        "px-4 py-2 text-sm": size === "sm",
        "px-6 py-3 text-base": size === "md",
        "px-8 py-4 text-lg": size === "lg",
      },
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
