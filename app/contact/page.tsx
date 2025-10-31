import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Consultation | Braggly",
  description:
    "Ready to automate your marketing? Book a free 30-minute consultation with Braggly. No commitment required.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let's Build Your AI Strategy
            </h1>
            <p className="text-lg text-white/90 lg:text-xl">
              Book a free 30-minute consultation. No commitment required, just
              an honest conversation about your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Form */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Request Your Free Consultation
              </h2>
              <ContactForm />
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        1. We Review Your Information
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Within 24 hours, we'll review your submission and reach
                        out to schedule your consultation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        2. Discovery Call (30 Minutes)
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        We'll discuss your specific challenges, goals, and
                        explore how AI automation can help your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        3. Custom Strategy Proposal
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        If we're a good fit, we'll create a tailored AI
                        automation plan specifically for your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background-light)] p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                      Is the consultation really free?
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Yes! It's completely free with no strings attached. We
                      just want to understand your needs and see if we can help.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                      How long is the consultation?
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      About 30 minutes. We keep it focused and respectful of
                      your time.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                      Is there any commitment?
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      None whatsoever. The consultation is purely exploratory
                      with no obligation to proceed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                      How quickly will you respond?
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      We typically respond within 24 hours, often much sooner.
                      You'll also receive an immediate confirmation email.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Prefer Email?
                </h3>
                <p className="text-[var(--text-secondary)] mb-3">
                  Drop us a line anytime at:
                </p>
                <a
                  href="mailto:support@braggly.com"
                  className="text-lg font-semibold text-[var(--primary)] hover:underline"
                >
                  support@braggly.com
                </a>
                <p className="text-sm text-[var(--text-secondary)] mt-4">
                  We usually respond within a few hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
