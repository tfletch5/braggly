"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-2">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white font-bold text-xl">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--primary)]">
                Braggly
              </span>
              <span className="text-xs text-[var(--text-secondary)]">
                Your AI Concierge
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Button href="/contact" size="md">
            Book a Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--text-secondary)] hover:bg-[var(--background-light)] hover:text-[var(--primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 border-t border-[var(--border)] px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:bg-[var(--background-light)] hover:text-[var(--primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
