import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us | Braggly Digital Growth Partner",
  description: "Explore tailored digital growth partnerships, websites, custom software, and business automation. Book a consultation to discuss your goals.",
};

const engagements = [
  {
    title: "Digital Growth Partnership",
    description: "An ongoing partnership to attract the right customers, convert more opportunities, and improve your marketing performance.",
    services: ["Digital marketing and content strategy", "SEO and local visibility", "Lead generation and conversion optimization", "Performance reporting and ongoing improvement"],
  },
  {
    title: "Website & Software Solutions",
    description: "Digital experiences and custom technology built around how your business operates and grows.",
    services: ["Website design and development", "Landing pages and conversion improvements", "Custom web and mobile applications", "Integrations and digital product development"],
  },
  {
    title: "Automation & Business Systems",
    description: "Connect your tools and streamline the work between first contact and loyal customer.",
    services: ["CRM and lead capture workflows", "Email and SMS follow-up", "Scheduling and customer engagement", "Practical AI and workflow automation"],
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-20 text-white">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest">Ways to Work With Braggly</p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Let’s Build Your Growth Strategy</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">No one-size-fits-all packages. We learn where your business is today, identify the biggest growth opportunities, and recommend a solution built around your goals.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-[#0F52BA] hover:bg-blue-50">Book a Growth Consultation</Link>
        </div>
      </section>
      <section className="container-custom py-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold">The right partnership for your next stage</h2>
          <p className="text-lg text-[var(--text-secondary)]">Start with the business challenge. We’ll help you determine the right mix of strategy, marketing, technology, and automation.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {engagements.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
              <p className="mb-6 text-[var(--text-secondary)]">{item.description}</p>
              <ul className="mb-8 space-y-3 text-sm">{item.services.map((service) => <li key={service} className="flex gap-2"><span aria-hidden="true" className="text-[#0F52BA]">✓</span>{service}</li>)}</ul>
              <Link href="/contact" className="font-semibold text-[#0F52BA] hover:underline">Discuss your project →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[var(--background-light)] py-20">
        <div className="container-custom">
          <h2 className="mb-10 text-center text-3xl font-bold">How We Work Together</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["01", "Discover", "We discuss your goals, challenges, customers, and existing systems."],
              ["02", "Strategize", "We identify opportunities and recommend a focused plan."],
              ["03", "Propose", "You receive a tailored scope, timeline, and price before committing."],
              ["04", "Build & Optimize", "We implement, measure, and refine the work together."],
            ].map(([number, title, detail]) => <div key={number}><p className="mb-3 text-xl font-bold text-[#0F52BA]">{number}</p><h3 className="mb-2 text-xl font-semibold">{title}</h3><p className="text-[var(--text-secondary)]">{detail}</p></div>)}
          </div>
        </div>
      </section>
      <section className="container-custom py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Let’s Build Your Growth System</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--text-secondary)]">Tell us what you’re trying to achieve. We’ll explore the right approach and prepare a custom proposal if we’re a good fit.</p>
        <Link href="/contact" className="inline-block rounded-lg bg-[#0F52BA] px-8 py-3 font-semibold text-white hover:bg-blue-700">Book a Growth Consultation</Link>
        <p className="mt-8 text-sm text-[var(--text-secondary)]">Braggly — Your Digital Growth Partner. We give you a reason to brag.</p>
      </section>
    </main>
  );
}
