import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Check, Layers, Pen, Share2, MessageSquare, Mail, Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Braggly AI Marketing Services",
  description:
    "The 5-Layer AI Marketing Stack — transparent pricing for complete marketing automation. Plans for every business size and budget.",
};

const layers = [
  {
    number: 1,
    name: "Content Engine",
    description: "AI writes your first drafts — social captions, blog posts, email newsletters, ad copy. You edit and approve.",
    icon: "Pen",
  },
  {
    number: 2,
    name: "Distribution System",
    description: "Auto-scheduling across LinkedIn, Instagram, Facebook, and Google Business. One batch session per week — posts go out daily.",
    icon: "Share2",
  },
  {
    number: 3,
    name: "Lead Capture",
    description: "AI chatbots on your website that qualify leads 24/7, answer objections, and book calls on your calendar.",
    icon: "MessageSquare",
  },
  {
    number: 4,
    name: "Nurture Sequences",
    description: "Automated email sequences that turn cold leads into warm prospects. Welcome series, educational drips, re-engagement campaigns.",
    icon: "Mail",
  },
  {
    number: 5,
    name: "Follow-Up & Conversion",
    description: "AI-powered follow-up with branded Mini Games that convert at 30–55% vs. 2–5% for standard follow-ups.",
    icon: "Gamepad2",
  },
];

const layerIcons: Record<string, React.FC<{ className?: string }>> = {
  Pen,
  Share2,
  MessageSquare,
  Mail,
  Gamepad2,
};

const tiers = [
  {
    name: "Launch",
    price: "$1,500",
    period: "/month",
    layerCount: 2,
    layerLabel: "Layers 1 – 2",
    headline: "Content Engine + Distribution System",
    description:
      "Get visible and stay top-of-mind. We build your content engine and distribute it everywhere — consistently, automatically.",
    features: [
      "AI-generated content: 12–16 social posts/month",
      "Multi-platform scheduling (LinkedIn, IG, FB, Google Business)",
      "Content calendar with weekly themes",
      "Captions, graphics & hashtag strategy",
      "Monthly performance report",
      "1 strategy call/month",
    ],
    solves: "\"I know I need to post consistently but I don't have time.\"",
    comparison: "A social media manager costs $3,500–$5,000/mo.",
    cta: "Get Started",
    ctaLink: "/contact",
    popular: false,
  },
  {
    name: "Grow",
    price: "$2,500",
    period: "/month",
    layerCount: 4,
    layerLabel: "Layers 1 – 4",
    headline: "Content + Distribution + Lead Capture + Nurture",
    description:
      "Turn visibility into pipeline. Everything in Launch plus AI-powered lead capture and automated email nurturing.",
    features: [
      "Everything in Launch",
      "AI chatbot — qualifies leads 24/7 & books calls",
      "Lead capture forms + landing page optimization",
      "5-email automated welcome sequence",
      "Educational drip & re-engagement campaigns",
      "Lead scoring and segmentation",
      "Weekly performance dashboard",
      "2 strategy calls/month",
    ],
    solves: "\"Leads come in but I lose them because I can't follow up fast enough.\"",
    comparison: "An agency + email platform + chatbot tool = $5,000–$8,000/mo.",
    cta: "Get Started",
    ctaLink: "/contact",
    popular: true,
  },
  {
    name: "Dominate",
    price: "$4,000",
    period: "/month",
    layerCount: 5,
    layerLabel: "All 5 Layers",
    headline: "The Full Stack — with Branded Mini Games",
    description:
      "The complete AI marketing machine. Every layer working together — from first impression to closed deal.",
    features: [
      "Everything in Grow",
      "🎮 Branded Mini Games for quote & lead follow-up",
      "AI-powered follow-up sequences",
      "Real-time lead engagement notifications",
      "Conversion rate optimization",
      "Retargeting campaign setup (Meta/Google)",
      "Priority support",
      "Weekly strategy calls",
    ],
    solves: "\"I want a complete marketing machine that generates, nurtures, AND closes — without me.\"",
    comparison: "A marketing team + SDR + tools = $10,000–$15,000/mo.",
    cta: "Get Started",
    ctaLink: "/contact",
    popular: false,
  },
];

const addOns = [
  { name: "Paid Ad Management (Meta/Google)", price: "+$500/mo + ad spend" },
  { name: "SEO Package", price: "+$500/mo" },
  { name: "Additional Social Platform", price: "+$200/mo per platform" },
  { name: "Video Content Creation", price: "$250–$500 per video" },
  { name: "Mini Games Standalone", price: "$750/mo (included free with Dominate)" },
];

const faqs = [
  {
    question: "What is the 5-Layer Marketing Stack?",
    answer:
      "It's our framework for complete marketing automation. Most agencies only give you Layer 1 (content). We build all five layers — from content creation to automated follow-up — so your marketing generates, nurtures, and closes leads without you.",
  },
  {
    question: "Do I have to start with all 5 layers?",
    answer:
      "No — and we actually recommend starting with Layers 1 and 2 (our Launch plan). Get your content engine and distribution running first, then add layers as you grow. Every tier is designed to upgrade seamlessly.",
  },
  {
    question: "What are Branded Mini Games?",
    answer:
      "Mini Games are interactive, branded experiences you send to leads instead of boring follow-up texts. A customer plays a 30-second game and unlocks savings on their quote. Gamified follow-ups convert at 30–55% vs. 2–5% for standard messages. They're included with the Dominate plan or available as a standalone add-on.",
  },
  {
    question: "How does pricing work?",
    answer:
      "You pay a fixed monthly fee with no hidden costs. All plans include setup, implementation, and ongoing optimization. Save 15% with an annual commitment.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel with 30 days notice. We believe in earning your business every month through results, not long-term contracts.",
  },
  {
    question: "Can I add or remove layers later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or add individual services anytime. We'll prorate charges and update your plan accordingly.",
  },
];

function LayerDots({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="flex items-center gap-1.5 mt-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${
            i < count
              ? "bg-gradient-to-br from-[#0F52BA] to-[#3B82F6]"
              : "bg-gray-200"
          }`}
        />
      ))}
      <span className="ml-2 text-xs font-medium text-[var(--text-secondary)]">
        {count} of {total} layers
      </span>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The 5-Layer Marketing Stack
            </h1>
            <p className="text-lg text-white/90 lg:text-xl">
              Most agencies give you one layer and charge you a fortune.
              We build all five — so your marketing generates, nurtures, and
              closes leads automatically.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Layer Explainer */}
      <section className="py-16 bg-[var(--background-light)]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Every business needs these 5 layers
            </h2>
            <p className="text-[var(--text-secondary)]">
              Each layer builds on the last. Start where you are and add layers
              as you grow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {layers.map((layer) => {
              const Icon = layerIcons[layer.icon];
              return (
                <div
                  key={layer.number}
                  className="relative rounded-xl border border-[var(--border)] bg-white p-5 text-center shadow-sm"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white text-sm font-bold">
                    {layer.number}
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                    {layer.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Choose your stack
            </h2>
            <p className="text-[var(--text-secondary)]">
              Every plan adds more layers. Every layer compounds your results.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col ${
                  tier.popular
                    ? "border-2 border-[var(--primary)] shadow-lg"
                    : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[var(--text-primary)]">
                      {tier.price}
                    </span>
                    <span className="text-[var(--text-secondary)]">
                      {tier.period}
                    </span>
                  </div>
                  <LayerDots count={tier.layerCount} />
                  <p className="mt-1 text-xs font-semibold text-[var(--primary)]">
                    {tier.layerLabel}: {tier.headline}
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    {tier.description}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-4 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 flex-shrink-0 text-[var(--success)] mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Social proof / savings callout */}
                  <div className="mb-6 rounded-lg bg-[var(--background-light)] p-3">
                    <p className="text-xs italic text-[var(--text-secondary)] mb-1">
                      {tier.solves}
                    </p>
                    <p className="text-xs font-medium text-[var(--primary)]">
                      💡 {tier.comparison}
                    </p>
                  </div>

                  <Button
                    href={tier.ctaLink}
                    className="w-full"
                    variant={tier.popular ? "primary" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Annual discount note */}
          <div className="mt-12 text-center">
            <p className="text-[var(--text-secondary)] mb-4">
              All plans include a{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                15% discount
              </span>{" "}
              when billed annually. Month-to-month available — cancel with 30
              days notice.
            </p>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-[var(--background-light)]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 text-center">
              Add-Ons
            </h2>
            <p className="text-[var(--text-secondary)] text-center mb-8">
              Available with any plan. Layer on what you need.
            </p>

            <Card>
              <CardContent className="pt-6">
                <div className="divide-y divide-[var(--border)]">
                  {addOns.map((addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {addon.name}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)] ml-4 text-right">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
              Need something custom?{" "}
              <Link
                href="/contact"
                className="text-[var(--primary)] hover:underline font-medium"
              >
                Let&apos;s build your perfect stack
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--text-secondary)]">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--background-light)]">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] p-8 lg:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Not sure which layer to start with?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Book a free audit and we&apos;ll show you which layers your
              business is missing — and exactly where to start.
            </p>
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-[var(--primary)] hover:bg-white/90"
            >
              Get Your Free Marketing Audit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
