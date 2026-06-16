import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "See which of the 5 layers you're missing",
  "Get a custom implementation roadmap",
  "No commitment required",
  "Start with just the layers you need",
];

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] p-8 lg:p-16">
          <div className="mx-auto max-w-3xl text-center text-white">
            {/* Headline */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              Not Sure Which Layer to Start With?
            </h2>

            {/* Subheadline */}
            <p className="text-lg mb-8 text-white/90 lg:text-xl">
              Book a free marketing audit and we&apos;ll show you exactly which
              layers your business is missing — and the fastest path to results.
            </p>

            {/* Benefits List */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 text-left mx-auto max-w-2xl">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm lg:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-[var(--primary)] hover:bg-white/90 text-lg"
            >
              Get Your Free Marketing Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Risk-free message */}
            <p className="mt-6 text-sm text-white/80">
              No credit card required. No strings attached. Just a conversation
              about your growth goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
