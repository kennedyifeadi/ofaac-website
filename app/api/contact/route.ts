import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      console.error("Contact API: Missing required fields");
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    console.log(`Contact form submission from ${name} <${email}> — Subject: ${subject || "N/A"}`);

    // Email dispatch (only if API key is present)
    try {
      if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY not defined. Skipping email dispatch.");
      } else {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Confirmation to sender
        const confirmResult = await resend.emails.send({
          from: "OFAAC <onboarding@resend.dev>",
          to: [email],
          subject: "We received your message — OFAAC",
          html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
              <h2 style="color: #AA771C;">Thank you, ${name}!</h2>
              <p>We have received your message and will get back to you within 24 hours.</p>
              <p><strong>Your message:</strong></p>
              <blockquote style="border-left: 3px solid #AA771C; padding-left: 16px; color: #555; margin: 16px 0;">
                ${message}
              </blockquote>
              <p>Sincerely,<br/><strong>The OFAAC Team</strong></p>
            </div>
          `,
        });
        if (confirmResult.error) console.error("Resend (Confirmation):", confirmResult.error);
        else console.log("Confirmation email sent successfully.");

        // Notification to OFAAC admin
        const adminResult = await resend.emails.send({
          from: "OFAAC Website <onboarding@resend.dev>",
          to: ["info@ofaac.org"],
          subject: `New Contact Form Submission: ${subject || "General Inquiry"} from ${name}`,
          html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
              <h2 style="color: #AA771C;">New Contact Inquiry</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || "N/A"}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${subject || "N/A"}</td></tr>
                <tr><td style="padding: 8px;"><strong>Message:</strong></td><td style="padding: 8px;">${message}</td></tr>
              </table>
            </div>
          `,
        });
        if (adminResult.error) console.error("Resend (Admin):", adminResult.error);
        else console.log("Admin notification email sent successfully.");
      }
    } catch (emailError) {
      console.error("Email dispatch failed:", emailError);
      // Don't return 500 — message was still received
    }

    return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
