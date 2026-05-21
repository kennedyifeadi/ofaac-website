import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';
import { Resend } from 'resend';

const OFAAC_EMAIL = 'info@ofaac.org';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return NextResponse.json({ message: 'A valid email address is required.' }, { status: 400 });
    }

    // Save to MongoDB
    try {
      await dbConnect();
      await NewsletterSubscriber.create({ email });
      console.log(`Newsletter: New subscriber saved — ${email}`);
    } catch (dbError: unknown) {
      // Mongoose duplicate key error code
      if (
        typeof dbError === 'object' &&
        dbError !== null &&
        'code' in dbError &&
        (dbError as { code: number }).code === 11000
      ) {
        // Already subscribed — treat as success to avoid leaking info
        return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
      }
      console.error('Newsletter DB Error:', dbError);
      return NextResponse.json({ message: 'Failed to save subscription.' }, { status: 500 });
    }

    // Send welcome email to subscriber + notification to OFAAC
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Welcome email to subscriber
        await resend.emails.send({
          from: 'OFAAC <onboarding@resend.dev>',
          to: [email],
          subject: 'Welcome to the OFAAC Newsletter!',
          html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
              <h2 style="color: #AA771C;">Welcome to OFAAC!</h2>
              <p>Thank you for subscribing to the OFAAC newsletter. You'll now be among the first to hear about:</p>
              <ul>
                <li>The annual Anioma Cultural Festival</li>
                <li>Annual Lecture Series announcements</li>
                <li>New publications and research</li>
                <li>Community programs and updates</li>
              </ul>
              <p>We are glad to have you as part of our growing community.</p>
              <br/>
              <p>Sincerely,<br/><strong>The OFAAC Team</strong></p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
              <p style="font-size: 12px; color: #999;">Organization for the Advancement of Anioma Culture — 287 Nnebisi Road, Asaba, Delta State, Nigeria.</p>
            </div>
          `,
        });
        console.log(`Newsletter: Welcome email sent to ${email}`);

        // Notification to OFAAC admin
        await resend.emails.send({
          from: 'OFAAC Website <onboarding@resend.dev>',
          to: [OFAAC_EMAIL],
          subject: `New Newsletter Subscriber: ${email}`,
          html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
              <h2 style="color: #AA771C;">New Newsletter Subscriber</h2>
              <p>A new visitor has subscribed to the OFAAC newsletter:</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Date:</strong> ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}</p>
            </div>
          `,
        });
        console.log(`Newsletter: Admin notified of new subscriber.`);
      }
    } catch (emailError) {
      // Email failure is non-blocking — subscription was already saved
      console.error('Newsletter email error:', emailError);
    }

    return NextResponse.json({ message: 'Successfully subscribed! Welcome aboard.' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
