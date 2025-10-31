import { Resend } from "resend";
import { ContactFormData } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  const emailTo = process.env.EMAIL_TO || "support@braggly.com";
  const emailFrom = process.env.EMAIL_FROM || "website@braggly.com";

  try {
    // Send notification to business owner
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `New Consultation Request from ${data.name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ""}
        <p><strong>Services Interested In:</strong></p>
        <ul>
          ${data.services.map((service) => `<li>${service}</li>`).join("")}
        </ul>
        ${data.budget ? `<p><strong>Monthly Budget:</strong> ${data.budget}</p>` : ""}
        <p><strong>Current Marketing Challenges:</strong></p>
        <p>${data.challenges}</p>
        ${data.hearAbout ? `<p><strong>How they heard about us:</strong> ${data.hearAbout}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    // Send auto-reply to customer
    await resend.emails.send({
      from: emailFrom,
      to: data.email,
      subject: "Thank You for Contacting Braggly - Your AI Concierge",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F52BA;">Thank You for Reaching Out, ${data.name}!</h2>

          <p>We've received your consultation request and we're excited to help you transform your marketing with AI automation.</p>

          <h3 style="color: #1E40AF;">What Happens Next?</h3>
          <ol>
            <li><strong>Within 24 hours:</strong> We'll review your information and reach out to schedule your free consultation.</li>
            <li><strong>Discovery Call:</strong> We'll discuss your specific challenges and goals (30 minutes, no commitment required).</li>
            <li><strong>Custom Strategy:</strong> If we're a good fit, we'll create a tailored AI automation plan for your business.</li>
          </ol>

          <h3 style="color: #1E40AF;">In the Meantime</h3>
          <p>Check out these resources to learn more about AI marketing automation:</p>
          <ul>
            <li><a href="https://www.braggly.com/blog" style="color: #0F52BA;">Our Blog</a> - Latest insights and tips</li>
            <li><a href="https://www.braggly.com/services" style="color: #0F52BA;">Our Services</a> - Explore what we offer</li>
          </ul>

          <p>Have an urgent question? Reply to this email and we'll get back to you right away.</p>

          <p style="margin-top: 30px;">Best regards,<br>
          <strong>The Braggly Team</strong><br>
          Your AI Concierge<br>
          <a href="mailto:support@braggly.com" style="color: #0F52BA;">support@braggly.com</a></p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #E5E7EB;">

          <p style="font-size: 12px; color: #6B7280;">
            You're receiving this email because you submitted a consultation request at braggly.com.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendNewsletterEmail(email: string) {
  const emailFrom = process.env.EMAIL_FROM || "website@braggly.com";

  try {
    await resend.emails.send({
      from: emailFrom,
      to: email,
      subject: "Welcome to Braggly Insights!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F52BA;">Welcome to Braggly Insights!</h2>

          <p>Thank you for subscribing to our newsletter. You'll now receive:</p>

          <ul>
            <li>Weekly AI marketing tips and strategies</li>
            <li>Automation best practices</li>
            <li>Industry insights and trends</li>
            <li>Exclusive resources and guides</li>
          </ul>

          <p>We're committed to helping small businesses and startups leverage AI for growth.</p>

          <p style="margin-top: 30px;">Best regards,<br>
          <strong>The Braggly Team</strong><br>
          Your AI Concierge</p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #E5E7EB;">

          <p style="font-size: 12px; color: #6B7280;">
            You can unsubscribe at any time by clicking the unsubscribe link in any email.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending newsletter email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
