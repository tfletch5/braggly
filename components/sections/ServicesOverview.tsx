import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bot,
  Mail,
  MessageSquare,
  PenTool,
  Search,
  Target,
  Workflow,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI-Powered Social Media Automation",
    description: "Automate content scheduling, posting, and engagement across all platforms with AI-generated captions and hashtags.",
    href: "/services#social-media",
  },
  {
    icon: PenTool,
    title: "AI Content Generation",
    description: "Create high-quality blog posts, website copy, ad copy, and social content with AI that matches your brand voice.",
    href: "/services#content-generation",
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    description: "Build automated email sequences, drip campaigns, and personalized workflows that convert leads into customers.",
    href: "/services#email-marketing",
  },
  {
    icon: Search,
    title: "SEO Optimization with AI",
    description: "Boost your search rankings with AI-powered keyword research, on-page optimization, and content strategy.",
    href: "/services#seo",
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    description: "Deploy intelligent AI chatbots for 24/7 customer support, lead qualification, and engagement.",
    href: "/services#chatbot",
  },
  // {
  //   icon: Target,
  //   title: "Ad Campaign Automation",
  //   description: "Maximize ROI with automated Google, Facebook, and LinkedIn ad campaigns powered by AI optimization.",
  //   href: "/services#ad-campaigns",
  // },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Streamline operations with custom workflow automation, CRM integration, and intelligent data management.",
    href: "/services#business-automation",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl mb-4">
            Comprehensive AI-Powered Services
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            From social media to SEO, we automate every aspect of your marketing so you can focus on growing your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-[var(--primary)]">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="group-hover:text-[var(--primary)] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
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
        </div>
      </div>
    </section>
  );
}
