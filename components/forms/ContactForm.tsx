"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Loader2, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Social Media Automation",
  "Content Generation",
  "Email Marketing",
  "SEO Optimization",
  "Chatbot Development",
  // "Ad Campaign Automation",
  "Business Automation",
  "Not Sure / Multiple Services",
];

const budgetOptions = [
  "Under $2,000/month",
  "$2,000-$5,000/month",
  "$5,000-$10,000/month",
  "$10,000+/month",
  "Not sure yet",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(
        "Something went wrong. Please try again or email us directly at support@braggly.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-[var(--success)] bg-[var(--success)]/5 p-8 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-[var(--success)] mb-4" />
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
          Thank You!
        </h3>
        <p className="text-[var(--text-secondary)] mb-4">
          We've received your consultation request and will get back to you
          within 24 hours.
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          Check your email for a confirmation message.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Name *
        </label>
        <Input
          id="name"
          {...register("name")}
          placeholder="John Doe"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Email *
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Phone (optional)
        </label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Company Name (optional)
        </label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Your Company"
        />
      </div>

      {/* Website */}
      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Website URL (optional)
        </label>
        <Input
          id="website"
          type="url"
          {...register("website")}
          placeholder="https://yourwebsite.com"
        />
        {errors.website && (
          <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>
        )}
      </div>

      {/* Services Interest */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          Services You're Interested In *
        </label>
        <div className="space-y-2 max-h-48 overflow-y-auto p-4 border border-[var(--border)] rounded-lg bg-white">
          {serviceOptions.map((service) => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                id={service}
                value={service}
                {...register("services")}
                className="h-4 w-4 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
              />
              <label
                htmlFor={service}
                className="ml-2 text-sm text-[var(--text-secondary)]"
              >
                {service}
              </label>
            </div>
          ))}
        </div>
        {errors.services && (
          <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Monthly Marketing Budget (optional)
        </label>
        <select
          id="budget"
          {...register("budget")}
          className="flex h-12 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
        >
          <option value="">Select a range...</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Challenges */}
      <div>
        <label
          htmlFor="challenges"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Current Marketing Challenges *
        </label>
        <Textarea
          id="challenges"
          {...register("challenges")}
          placeholder="Tell us about your current marketing challenges and what you're hoping to achieve..."
          rows={4}
          aria-invalid={errors.challenges ? "true" : "false"}
        />
        {errors.challenges && (
          <p className="mt-1 text-sm text-red-600">
            {errors.challenges.message}
          </p>
        )}
      </div>

      {/* How did you hear about us */}
      <div>
        <label
          htmlFor="hearAbout"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          How did you hear about us? (optional)
        </label>
        <Input
          id="hearAbout"
          {...register("hearAbout")}
          placeholder="Google search, referral, social media, etc."
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          Additional Message *
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Any additional information you'd like to share..."
          rows={4}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Book My Consultation"
        )}
      </Button>

      <p className="text-xs text-center text-[var(--text-secondary)]">
        By submitting this form, you agree to receive communication from
        Braggly. We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
