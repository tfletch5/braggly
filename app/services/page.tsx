import type { Metadata } from "next";
import { Bot, Mail, MessageSquare, PenTool, Search, Target, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Marketing Services | Braggly",
  description: "Explore our comprehensive AI-powered marketing and automation services. From social media to SEO, we automate everything for small businesses.",
};

const services = [
  {
    id: "social-media",
    icon: MessageSquare,
    title: "AI-Powered Social Media Automation",
    description:
      "Transform your social media presence with intelligent automation that works around the clock. Our AI systems handle everything from content creation to posting and engagement, ensuring your brand stays active and relevant across all platforms.",
    features: [
      "Automated content scheduling and posting across all major platforms",
      "AI-generated captions, hashtags, and post copy that matches your brand voice",
      "Multi-platform management (Instagram, LinkedIn, Twitter/X, Facebook, TikTok)",
      "Performance analytics and automated reporting",
      "Intelligent engagement responses and community management",
      "Content calendar creation with optimal posting times",
      "Competitor analysis and trend identification",
      "Visual content recommendations and optimization",
    ],
    benefits: [
      "Save 15+ hours per week on social media management",
      "Maintain consistent posting schedule without manual effort",
      "Increase engagement rates by 40% on average",
      "Never miss trending topics or opportunities",
    ],
    useCases: [
      "E-commerce brands growing their audience",
      "Service businesses building thought leadership",
      "Startups establishing brand presence",
      "Local businesses reaching community customers",
    ],
  },
  {
    id: "content-generation",
    icon: PenTool,
    title: "AI Content Generation",
    description:
      "Create high-quality, SEO-optimized content at scale with our advanced AI writing systems. From blog posts to ad copy, we generate content that resonates with your audience and drives results.",
    features: [
      "Long-form blog posts and articles (1000-3000 words)",
      "Website copy and landing page content",
      "Ad copy for Google, Facebook, and LinkedIn",
      "Email newsletters and campaign content",
      "Product descriptions and category pages",
      "Social media post variations",
      "SEO-optimized content with keyword integration",
      "Brand voice customization and consistency",
      "Content editing and refinement workflows",
    ],
    benefits: [
      "Publish 10x more content in the same time",
      "Maintain consistent brand voice across all channels",
      "Improve SEO rankings with optimized content",
      "Reduce content creation costs by 70%",
    ],
    useCases: [
      "Content marketing campaigns",
      "E-commerce product catalogs",
      "Thought leadership and blog strategies",
      "Multi-channel marketing campaigns",
    ],
  },
  {
    id: "email-marketing",
    icon: Mail,
    title: "Email Marketing Automation",
    description:
      "Build sophisticated email campaigns that nurture leads and drive conversions. Our automation systems create personalized experiences for every subscriber without manual intervention.",
    features: [
      "Automated welcome sequences for new subscribers",
      "Behavioral trigger-based campaigns",
      "Drip campaigns with smart segmentation",
      "Personalization using customer data and AI",
      "A/B testing for subject lines and content",
      "Performance analytics and optimization",
      "List management and hygiene automation",
      "Professional template design",
      "Integration with popular ESP platforms",
    ],
    benefits: [
      "Increase email open rates by 30-50%",
      "Automate lead nurturing workflows",
      "Recover abandoned carts automatically",
      "Build stronger customer relationships",
    ],
    useCases: [
      "E-commerce cart abandonment campaigns",
      "SaaS onboarding and activation sequences",
      "Lead nurturing for service businesses",
      "Customer retention and upsell campaigns",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization with AI",
    description:
      "Dominate search rankings with AI-powered SEO strategies. We combine technical expertise with intelligent automation to improve your visibility and drive organic traffic.",
    features: [
      "Comprehensive keyword research and analysis",
      "On-page SEO optimization",
      "Content strategy and topic clustering",
      "Technical SEO audits and fixes",
      "Competitor analysis and gap identification",
      "Link building strategies and outreach",
      "Local SEO for local businesses",
      "Performance tracking and reporting",
      "Schema markup implementation",
    ],
    benefits: [
      "Rank on page 1 for target keywords in 3-6 months",
      "Increase organic traffic by 100-300%",
      "Improve conversion rates from organic visitors",
      "Build long-term sustainable traffic sources",
    ],
    useCases: [
      "New websites building authority",
      "Local businesses targeting local customers",
      "E-commerce sites competing for product keywords",
      "Service businesses attracting qualified leads",
    ],
  },
  {
    id: "chatbot",
    icon: Bot,
    title: "Chatbot Development",
    description:
      "Deploy intelligent AI chatbots that provide 24/7 customer support, qualify leads, and engage visitors. Our bots handle routine inquiries so your team can focus on high-value interactions.",
    features: [
      "AI-powered customer support chatbots",
      "Lead qualification and routing",
      "FAQ automation with natural language processing",
      "Multi-channel deployment (website, WhatsApp, Facebook Messenger, SMS)",
      "CRM and database integration",
      "Appointment booking and scheduling",
      "Product recommendations",
      "Handoff to human agents when needed",
      "Analytics and conversation insights",
    ],
    benefits: [
      "Handle 80% of inquiries automatically",
      "Provide instant responses 24/7",
      "Qualify leads before they reach sales",
      "Reduce support costs by 60%",
    ],
    useCases: [
      "E-commerce customer support",
      "Lead generation for service businesses",
      "Appointment booking (healthcare, salons, etc.)",
      "FAQ automation for any business",
    ],
  },
  // {
  //   id: "ad-campaigns",
  //   icon: Target,
  //   title: "Ad Campaign Automation",
  //   description:
  //     "Maximize your advertising ROI with AI-optimized campaigns. We automate bidding, targeting, and creative testing to ensure your ads perform at peak efficiency.",
  //   features: [
  //     "Google Ads campaign management and optimization",
  //     "Facebook and Instagram ads",
  //     "LinkedIn advertising for B2B",
  //     "Automated bidding strategies",
  //     "Ad creative testing and optimization",
  //     "Audience targeting and segmentation",
  //     "Campaign monitoring and adjustments",
  //     "ROI tracking and attribution",
  //     "Budget optimization across channels",
  //   ],
  //   benefits: [
  //     "Improve ROI by 50-100% through optimization",
  //     "Reduce cost per acquisition",
  //     "Scale campaigns without increasing workload",
  //     "Get better results with same budget",
  //   ],
  //   useCases: [
  //     "E-commerce sales and retargeting",
  //     "Lead generation campaigns",
  //     "App install campaigns",
  //     "Brand awareness initiatives",
  //   ],
  // },
  {
    id: "business-automation",
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Streamline your operations with custom workflow automation. We eliminate repetitive tasks and create efficient systems that save time and reduce errors.",
    features: [
      "Custom workflow automation design",
      "CRM automation and optimization",
      "Data entry and management automation",
      "Reporting and analytics dashboards",
      "Tool integration (Zapier, Make.com, custom APIs)",
      "Invoice and payment processing",
      "Inventory and order management",
      "Document generation and management",
      "Team notifications and alerts",
    ],
    benefits: [
      "Save 20+ hours per week on admin tasks",
      "Eliminate manual data entry errors",
      "Improve team productivity and focus",
      "Scale operations without hiring",
    ],
    useCases: [
      "Sales pipeline automation",
      "Customer onboarding workflows",
      "Inventory and order processing",
      "Financial reporting and invoicing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI-Powered Services Built for Growth
            </h1>
            <p className="text-lg text-white/90 lg:text-xl">
              Comprehensive automation solutions tailored for small businesses and startups.
              From strategy to execution, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 ${index !== 0 ? "pt-20 border-t border-[var(--border)]" : ""}`}
                >
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                    {/* Content */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white mb-6">
                        <Icon className="h-8 w-8" />
                      </div>

                      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                        {service.title}
                      </h2>

                      <p className="text-lg text-[var(--text-secondary)] mb-6">
                        {service.description}
                      </p>

                      <Button href="/contact" size="lg">
                        Get Started
                      </Button>
                    </div>

                    {/* Details Cards */}
                    <div className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      {/* Features */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl">Key Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.features.slice(0, 6).map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                              >
                                <svg
                                  className="h-5 w-5 flex-shrink-0 text-[var(--success)] mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Benefits */}
                      <Card className="bg-[var(--background-light)] border-[var(--primary)]/20">
                        <CardHeader>
                          <CardTitle className="text-xl">Benefits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]"
                              >
                                <svg
                                  className="h-5 w-5 flex-shrink-0 text-[var(--primary)] mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--background-light)]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              From consultation to implementation, we ensure smooth delivery and exceptional results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {[
              { step: "01", title: "Discovery", description: "Understand your goals and challenges" },
              { step: "02", title: "Strategy", description: "Design custom AI automation plan" },
              { step: "03", title: "Setup", description: "Configure tools and systems" },
              { step: "04", title: "Launch", description: "Deploy and monitor performance" },
              { step: "05", title: "Optimize", description: "Continuously improve results" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0F52BA] to-[#3B82F6] text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] p-8 lg:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Book a free consultation and we'll help you identify the best automation solutions for your business.
            </p>
            <Button href="/contact" size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
