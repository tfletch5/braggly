import type { Metadata } from "next";
import {
  Pen,
  Share2,
  MessageSquare,
  Mail,
  Gamepad2,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Marketing Services | Braggly",
  description:
    "The 5-Layer AI Marketing Stack — from content creation to automated follow-up. Explore every layer of our AI-powered marketing system.",
};

const layers = [
  {
    id: "content-engine",
    number: 1,
    icon: Pen,
    title: "Content Engine",
    tagline: "Never stare at a blank screen again",
    description:
      "Our AI creates publish-ready first drafts for every channel — social captions, long-form blog posts, email newsletters, and ad copy — all in your brand voice. You review, approve, and we handle the rest.",
    features: [
      "12–16 social posts per month (more at higher tiers)",
      "Long-form blog posts and articles (1,000–3,000 words)",
      "Ad copy for Google, Meta, and LinkedIn",
      "Email newsletter and campaign copy",
      "Brand voice calibration and consistency",
      "Content calendar with weekly themes",
    ],
    benefits: [
      "Save 15+ hours per week on content creation",
      "Publish 10x more content in the same time",
      "Maintain consistent brand voice across all channels",
      "Reduce content costs by up to 70%",
    ],
    includedIn: "Launch, Grow, and Dominate",
  },
  {
    id: "distribution-system",
    number: 2,
    icon: Share2,
    title: "Distribution System",
    tagline: "One batch session. Posts go out daily.",
    description:
      "Creating content is only half the battle — it needs to reach your audience at the right time, on every platform. Our distribution system auto-schedules across LinkedIn, Instagram, Facebook, and Google Business so you batch once and stay visible all week.",
    features: [
      "Multi-platform auto-scheduling",
      "Optimal posting time detection per platform",
      "Hashtag and keyword strategy per channel",
      "Graphics and visual asset formatting",
      "Cross-posting with platform-native optimization",
      "Monthly performance report with insights",
    ],
    benefits: [
      "Stay active on every platform without daily effort",
      "Increase engagement with platform-optimized content",
      "Never miss a posting window",
      "Compound your brand visibility over time",
    ],
    includedIn: "Launch, Grow, and Dominate",
  },
  {
    id: "lead-capture",
    number: 3,
    icon: MessageSquare,
    title: "Lead Capture",
    tagline: "Qualify leads at 2 AM while you sleep",
    description:
      "Your content is working and people are visiting your website — but are you capturing them? Our AI chatbots greet every visitor, answer their questions, qualify them on the spot, and book them directly into your calendar. No form, no friction, no missed opportunities.",
    features: [
      "AI chatbot with natural language processing",
      "24/7 lead qualification and routing",
      "Smart FAQ handling and objection responses",
      "Calendar integration for instant booking",
      "Multi-channel deployment (website, Facebook Messenger, SMS)",
      "Lead capture forms with landing page optimization",
    ],
    benefits: [
      "Handle 80% of inquiries automatically",
      "Qualify leads before they reach your sales team",
      "Provide instant responses around the clock",
      "Never let a warm lead go cold",
    ],
    includedIn: "Grow and Dominate",
  },
  {
    id: "nurture-sequences",
    number: 4,
    icon: Mail,
    title: "Nurture Sequences",
    tagline: "Turn cold leads into warm prospects — on autopilot",
    description:
      "Not every lead is ready to buy today. Our automated email sequences keep you top-of-mind — educating, building trust, and moving prospects closer to a decision without you lifting a finger.",
    features: [
      "5-email automated welcome sequence",
      "Educational drip campaigns by segment",
      "Re-engagement campaigns for cold leads",
      "Behavioral trigger-based sequences",
      "Lead scoring and segmentation",
      "A/B testing for subject lines and content",
      "Integration with major email platforms",
    ],
    benefits: [
      "Increase email open rates by 30–50%",
      "Automate the entire lead nurturing process",
      "Build trust through consistent value delivery",
      "Recover leads that would otherwise be lost",
    ],
    includedIn: "Grow and Dominate",
  },
  {
    id: "follow-up-conversion",
    number: 5,
    icon: Gamepad2,
    title: "Follow-Up & Conversion",
    tagline: "The layer that closes the deal",
    description:
      "This is the layer most agencies don't even offer — and it's the one that matters most. AI-powered follow-up sequences combined with Braggly's proprietary branded Mini Games turn quotes and proposals into closed deals. Instead of another boring follow-up email, your prospect plays a 30-second game and unlocks savings on their quote.",
    features: [
      "🎮 Branded Mini Games for quote follow-up",
      "AI-powered follow-up sequences",
      "Real-time lead engagement notifications",
      "Conversion rate optimization",
      "Retargeting campaign setup (Meta/Google)",
      "Weekly strategy calls",
      "Priority support",
    ],
    benefits: [
      "Convert at 30–55% vs. 2–5% for standard follow-ups",
      "Turn proposals into closed deals faster",
      "Stand out from every other business in your market",
      "Close more revenue without more leads",
    ],
    includedIn: "Dominate only",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The 5-Layer AI Marketing Stack
            </h1>
            <p className="text-lg text-white/90 lg:text-xl">
              Most agencies give you content and call it marketing. We build
              all five layers — from first draft to closed deal — so your
              business runs a complete marketing machine.
            </p>
          </div>
        </div>
      </section>

      {/* Layer Navigator */}
      <section className="py-6 bg-white border-b border-[var(--border)] sticky top-0 z-10">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {layers.map((layer) => (
              <a
                key={layer.id}
                href={`#${layer.id}`}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white text-xs font-bold">
                  {layer.number}
                </span>
                {layer.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Layer Sections */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={layer.id}
                  id={layer.id}
                  className={`scroll-mt-32 ${
                    index !== 0
                      ? "pt-24 border-t border-[var(--border)]"
                      : ""
                  }`}
                >
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                    {/* Content */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white text-lg font-bold">
                          {layer.number}
                        </div>
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F52BA]/10 to-[#3B82F6]/10 text-[var(--primary)]">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                        {layer.title}
                      </h2>
                      <p className="text-base font-medium text-[var(--primary)] mb-4">
                        {layer.tagline}
                      </p>

                      <p className="text-lg text-[var(--text-secondary)] mb-6">
                        {layer.description}
                      </p>

                      <p className="text-sm text-[var(--text-secondary)] mb-6">
                        <span className="font-semibold text-[var(--text-primary)]">
                          Included in:
                        </span>{" "}
                        {layer.includedIn}
                      </p>

                      <Button href="/pricing" size="lg">
                        See Plans with Layer {layer.number}
                      </Button>
                    </div>

                    {/* Details Cards */}
                    <div
                      className={`space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Features */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl">
                            What&apos;s Included
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {layer.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                              >
                                <Check className="h-5 w-5 flex-shrink-0 text-[var(--success)] mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Benefits */}
                      <Card className="bg-[var(--background-light)] border-[var(--primary)]/20">
                        <CardHeader>
                          <CardTitle className="text-xl">Results</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {layer.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]"
                              >
                                <svg
                                  className="h-5 w-5 flex-shrink-0 text-[var(--primary)] mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How the Layers Work Together */}
      <section className="py-20 bg-[var(--background-light)]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl mb-4">
              How the 5 Layers Work Together
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Each layer builds on the last. Together, they create a
              self-reinforcing marketing machine.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {layers.map((layer, index) => (
              <div key={layer.id} className="relative text-center">
                {/* Connector arrow */}
                {index < layers.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-[var(--primary)] z-10">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <div className="mb-3 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white text-xl font-bold">
                  {layer.number}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">
                  {layer.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {layer.tagline}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/pricing" size="lg">
              Choose Your Starting Layer
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] p-8 lg:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Not Sure Which Layers You Need?
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
