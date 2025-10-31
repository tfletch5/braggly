"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Hours Saved Monthly",
    description: "Across all our clients",
  },
  {
    value: 50,
    suffix: "+",
    label: "Small Businesses Served",
    description: "And growing every day",
  },
  {
    value: 85,
    suffix: "%",
    label: "Efficiency Increase",
    description: "Average improvement",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Automated Operations",
    description: "Your marketing never stops",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-5xl font-bold text-[var(--primary)] lg:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-white/90">
            Real numbers from real businesses using AI automation to scale their marketing.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-xl font-semibold">{stat.label}</div>
              <div className="mt-1 text-sm text-white/80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
