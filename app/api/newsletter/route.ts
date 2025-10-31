import { NextRequest, NextResponse } from "next/server";
import { newsletterFormSchema } from "@/lib/validations";
import { sendNewsletterEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = newsletterFormSchema.parse(body);

    // Check honeypot field
    if (validatedData.honeypot) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    // Send welcome email
    const result = await sendNewsletterEmail(validatedData.email);

    if (!result.success) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
