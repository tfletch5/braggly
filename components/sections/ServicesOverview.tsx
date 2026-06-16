import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pen,
  Share2,
  MessageSquare,
  Mail,
  Gamepad2,
  ArrowRight,
} from "lucide-react";

const layers = [
  {
    number: 1,
    icon: Pen,
    title: "Content Engine",
    description:
      "AI writes your first drafts — social captions, blog posts, email newsletters, ad copy. You review and approve. No more staring at a blank screen.",
    href: "/services#content-engine",
  },
  {
    number: 2,
    icon: Share2,
    title: "Distribution System",
    description:
      "One batch session per week, and your content goes out daily across LinkedIn, Instagram, Facebook, and Google Business — automatically.",
    href: "/services#distribution-system",
  },
  {
    number: 3,
    icon: MessageSquare,
    title: "Lead Capture",
    description:
      "AI chatbots on your website qualifying leads 24/7, answering questions, handling objections, and booking calls on your calendar.",
    href: "/services#lead-capture",
  },
  {
    number: 4,
    icon: Mail,
    title: "Nurture Sequences",
    description:
      "Automated email drips that turn cold leads into warm prospects — welcome series, educational content, and re-engagement campaigns that run on autopilot.",
    href: "/services#nurture-sequences",
  },
  {
    number: 5,
    icon: Gamepad2,
    title: "Follow-Up & Conversion",
    description:
      "AI-powered follow-up with branded Mini Games that convert at 30–55% vs. 2–5% for standard follow-ups. The layer that closes the deal.",
    href: "/services#follow-up-conversion",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl mb-4">
            The 5 Layers Every Business Needs
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Most agencies give you one layer and call it a strategy. We build all
            five — each one compounding the results of the last.
          </p>
        </div>

        {/* 5-Layer Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <Link
                key={layer.title}
                href={layer.href}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-[var(--primary)]">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white text-sm font-bold">
                        {layer.number}
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-[var(--primary)] transition-colors">
                      {layer.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {layer.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-sm font-medium text-[var(--primary)]">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}

          {/* "See all plans" card */}
          <Link href="/pricing" className="group">
            <Card className="h-full flex flex-col items-center justify-center text-center transition-all hover:shadow-lg hover:border-[var(--primary)] bg-gradient-to-br from-[var(--background-light)] to-white">
              <CardContent className="py-8">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white">
                  <ArrowRight className="h-7 w-7" />
                </div>
                <p className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-2">
                  See the Plans
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Start with 2 layers. Add more as you grow.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
