import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().optional(),
  challenges: z.string().min(10, "Please provide more details about your challenges"),
  hearAbout: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export const newsletterFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
