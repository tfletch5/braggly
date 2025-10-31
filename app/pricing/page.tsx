import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Braggly AI Marketing Services",
  description: "Transparent pricing for AI-powered marketing automation. Plans for every business size and budget.",
};

const tiers = [
  {
    name: "Starter",
    price: "$1,999",
    period: "/month",
    description: "Perfect for new startups and solopreneurs getting started with AI automation.",
    features: [
      "2-3 core automation services",
      "Social media automation (2 platforms)",
      "Basic email marketing setup",
      "Monthly performance reports",
      "Email support",
      "Up to 10,000 AI-generated words/month",
      "Strategy session (quarterly)",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$4,499",
    period: "/month",
    description: "For growing businesses ready to scale their marketing with comprehensive automation.",
    features: [
      "4-5 automation services",
      "Full social media automation (all platforms)",
      "Advanced email campaigns & segmentation",
      "SEO optimization & content strategy",
      "Chatbot implementation",
      "Weekly performance reports",
      "Priority support",
      "Up to 30,000 AI-generated words/month",
      "Strategy sessions (monthly)",
      "A/B testing & optimization",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "Enterprise-level automation for established businesses scaling rapidly.",
    features: [
      "All services included",
      "Unlimited platforms & channels",
      "Custom workflow automation",
      "Advanced analytics & dashboards",
      "Dedicated account manager",
      "Daily monitoring & optimization",
      "24/7 priority support",
      "Unlimited AI-generated content",
      "Weekly strategy sessions",
      "Custom integrations",
      "White-label options available",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does pricing work?",
    answer: "Our pricing is transparent and based on the scope of services you need. You pay a fixed monthly fee with no hidden costs. All plans include setup, implementation, and ongoing optimization.",
  },
  {
    question: "Is there a minimum contract length?",
    answer: "We offer flexible month-to-month plans. However, we recommend a minimum 3-month commitment to see significant results from AI automation.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel with 30 days notice. We believe in earning your business every month through results, not long-term contracts.",
  },
  {
    question: "What's included in the setup?",
    answer: "Setup includes strategy development, account configuration, content creation, automation workflows, integration with your existing tools, and initial testing. This is all included in your monthly fee.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely! If none of our standard tiers fit your needs, we can create a custom package tailored to your specific requirements and budget.",
  },
  {
    question: "What if I need to add or remove services?",
    answer: "You can adjust your services anytime. We'll prorate the charges and update your plan accordingly. Flexibility is key to our approach.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transparent Pricing
            </h1>
            <p className="text-lg text-white/90 lg:text-xl">
              Choose the plan that fits your business. No hidden fees, no surprises.
              Scale up or down as your needs change.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${tier.popular ? "border-2 border-[var(--primary)] shadow-lg" : ""}`}
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
                    <span className="text-[var(--text-secondary)]">{tier.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-[var(--text-secondary)]">
                    {tier.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 flex-shrink-0 text-[var(--success)] mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    className="w-full"
                    variant={tier.popular ? "primary" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-[var(--text-secondary)] mb-4">
              All plans include a 15% discount when billed annually.
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              Need something different?{" "}
              <Link href="/contact" className="text-[var(--primary)] hover:underline font-medium">
                Let's create a custom plan
              </Link>{" "}
              for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--background-light)]">
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
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] p-8 lg:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Book a free consultation and we'll help you find the perfect plan for your business.
            </p>
            <Button href="/contact" size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
