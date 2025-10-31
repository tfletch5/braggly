import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Users, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Braggly | Your AI Marketing Partner",
  description: "Learn about Braggly's mission to democratize AI-powered marketing for small businesses and startups.",
};

const values = [
  {
    icon: Zap,
    title: "Automation-First",
    description: "We believe in leveraging AI to eliminate repetitive tasks and free up your time for strategic work.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "No hidden fees, no surprises. We're upfront about what we can deliver and how we'll get there.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your success. Every strategy is designed to deliver measurable ROI.",
  },
  {
    icon: Users,
    title: "Client Success Focus",
    description: "Your growth is our priority. We're not satisfied until you're seeing real business impact.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Meet Your AI Concierge
            </h1>
            <p className="text-lg text-white/90 lg:text-xl">
              We're on a mission to make AI-powered marketing accessible to
              every small business and startup.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              At Braggly, we believe that small businesses and startups
              shouldn't have to choose between expensive marketing agencies and
              doing everything themselves. AI technology has made it possible to
              automate sophisticated marketing strategies that were once only
              available to enterprise companies.
            </p>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Our mission is to democratize AI-powered marketing by making it
              affordable, accessible, and actually useful for growing
              businesses. We combine cutting-edge AI tools with proven marketing
              strategies to help you compete with larger competitors without the
              enterprise budget.
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              Whether you're a solo entrepreneur or leading a small team, we're
              here to be your AI concierge—handling the repetitive marketing
              tasks so you can focus on what you do best: running and growing
              your business.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--background-light)]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              These principles guide everything we do at Braggly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl bg-white p-6 text-center shadow-sm"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 text-center">
              Our Approach
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              We leverage the latest AI technologies and marketing platforms to
              deliver results. Our tech stack includes leading tools like
              OpenAI, Claude, Make.com, Zapier, and industry-standard marketing
              platforms.
            </p>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              But technology alone isn't enough. We combine AI automation with
              proven marketing frameworks and human expertise to create
              strategies that actually work for your specific business.
            </p>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background-light)] p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3">
                Security & Privacy
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                We take data security seriously. All client data is encrypted,
                and we follow industry best practices for data protection. We
                never share your data with third parties, and you maintain full
                ownership of all content and strategies we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-[var(--background-light)]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
              Meet the Founder
            </h2>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] flex items-center justify-center text-white text-3xl font-bold">
                    TF
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    Tony Fletcher
                  </h3>
                  <p className="text-[var(--primary)] font-medium mb-4">
                    Founder & AI Strategist
                  </p>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Tony founded Braggly with a vision to help small businesses
                    leverage AI technology for marketing automation. With a
                    background in both technology and marketing, he understands
                    the unique challenges that growing businesses face.
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    His approach combines technical expertise with a deep
                    understanding of small business needs, ensuring that every
                    automation strategy is practical, effective, and delivers
                    real ROI.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://www.linkedin.com/in/therealtfletch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] hover:underline font-medium"
                    >
                      Connect on LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] p-8 lg:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your marketing and
              help your business grow.
            </p>
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-[var(--primary)] hover:bg-white/90"
            >
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
