import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  services: [
    { name: "Social Media Automation", href: "/services#social-media" },
    { name: "AI Content Generation", href: "/services#content-generation" },
    { name: "Email Marketing", href: "/services#email-marketing" },
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Chatbot Development", href: "/services#chatbot" },
    { name: "Business Automation", href: "/services#business-automation" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-light)] p-8">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
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
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              Empowering small businesses and startups with AI-powered marketing
              automation. Transform your marketing, scale your business.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Get AI marketing tips and insights delivered to your inbox weekly.
            </p>
            <form
              className="flex flex-col gap-2"
              action="/api/newsletter"
              method="POST"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="h-10"
              />
              <Button type="submit" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-xs text-[var(--text-secondary)]">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[var(--border)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[var(--text-secondary)]">
              © {new Date().getFullYear()} Braggly. All rights reserved.
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              <a
                href="mailto:support@braggly.com"
                className="hover:text-[var(--primary)] transition-colors"
              >
                support@braggly.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
