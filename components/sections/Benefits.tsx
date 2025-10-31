import { Clock, DollarSign, TrendingUp, Shield, Zap, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 AI-Powered Automation",
    description: "Your marketing never sleeps. AI systems work around the clock to engage customers, generate leads, and optimize campaigns.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solution",
    description: "Save 60-80% compared to traditional agencies or full-time marketing hires. Get enterprise-level capabilities at startup prices.",
  },
  {
    icon: Zap,
    title: "Faster Implementation",
    description: "Go from strategy to execution in weeks, not months. Our AI systems are deployed quickly and start delivering results immediately.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Start small and scale effortlessly. Our AI solutions grow with your business without the need for additional headcount.",
  },
  {
    icon: Shield,
    title: "Data-Driven Decisions",
    description: "Make smarter choices with real-time analytics and AI-powered insights. Know what's working and optimize continuously.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Get expert human support when you need it. We're here to guide your strategy and ensure your success.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[var(--background-light)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl mb-4">
            Why Choose Braggly?
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            We combine cutting-edge AI technology with proven marketing strategies to deliver results that traditional agencies can't match.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
