import { Calendar, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book a Consultation",
    description: "Schedule a free 30-minute discovery call. We'll discuss your business goals, current marketing challenges, and opportunities for automation.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Custom AI Strategy",
    description: "Receive a tailored AI automation plan designed specifically for your business. We identify the best tools and workflows to maximize your ROI.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Automated Growth",
    description: "Watch your business scale as we implement and optimize your AI marketing systems. Enjoy 24/7 automation with dedicated ongoing support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[var(--background-light)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Get started in three simple steps. From consultation to implementation, we make AI automation easy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[63%] w-[80%] h-0.5 bg-gradient-to-r from-transparent to-[var(--primary)]" />
                )}

                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white">
                    <Icon className="h-10 w-10" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
