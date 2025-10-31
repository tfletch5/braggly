import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Braggly transformed our marketing strategy. The AI automation saved us 20+ hours per week and doubled our lead generation. We can finally focus on closing deals instead of managing campaigns.",
    author: "Sarah Johnson",
    role: "Founder",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote: "The chatbot they built handles 80% of our customer inquiries automatically. Our team can finally focus on growth instead of repetitive tasks. Best investment we've made this year.",
    author: "Michael Chen",
    role: "CEO",
    company: "GrowthCo",
    rating: 5,
  },
  {
    quote: "Braggly's social media automation is a game-changer. We're now posting consistently across all platforms and seeing real engagement. The AI-generated content is surprisingly on-brand and effective.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "LocalBiz",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            See what our clients say about working with Braggly and the impact AI automation has had on their businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="h-full">
              <CardContent className="pt-6">
                {/* Star Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[var(--success)] text-[var(--success)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 text-[var(--text-secondary)]">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-[var(--border)] pt-4">
                  <div className="font-semibold text-[var(--text-primary)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
