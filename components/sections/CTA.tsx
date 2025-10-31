import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free 30-minute consultation",
  "No commitment required",
  "Custom AI strategy for your business",
  "Results in 30 days or less",
];

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] p-8 lg:p-16">
          <div className="mx-auto max-w-3xl text-center text-white">
            {/* Headline */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              Ready to Automate Your Success?
            </h2>

            {/* Subheadline */}
            <p className="text-lg mb-8 text-white/90 lg:text-xl">
              Join 50+ small businesses that have transformed their marketing with AI automation.
              Book your free consultation today and discover how we can help you scale.
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
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Risk-free message */}
            <p className="mt-6 text-sm text-white/80">
              No credit card required. No strings attached. Just a conversation about your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
