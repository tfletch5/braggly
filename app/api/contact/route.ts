import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Check honeypot field
    if (validatedData.honeypot) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    // Send email
    const result = await sendContactEmail(validatedData);

    if (!result.success) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
