import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import SponsorshipLead from '@/models/SponsorshipLead';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tier, companyName, contactPerson, contactEmail, contactPhone, message } = body;

    // 1. Data Validation
    if (!tier || !companyName || !contactPerson || !contactEmail) {
      console.error("API Error: Missing required fields");
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contactEmail)) {
      console.error("API Error: Invalid email format");
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // 2. Database Storage
    let newLead;
    try {
      await dbConnect();
      console.log(`MongoDB connected. Attempting to save lead for ${companyName}`);
      
      newLead = await SponsorshipLead.create({
        tier,
        companyName,
        contactPerson,
        contactEmail,
        contactPhone,
        message,
        inquiryDate: new Date(),
        status: 'New',
      });
      console.log(`Lead saved to MongoDB successfully with ID: ${newLead._id}`);
    } catch (dbError) {
      console.error('Database Error: Failed to save lead.', dbError);
      return NextResponse.json({ message: 'Failed to save lead to database' }, { status: 500 });
    }

    // 3. Email Notification using Resend
    // We wrap this in a try/catch so that if Resend fails (e.g. due to unverified domains), 
    // we don't crash the user experience since the lead was already saved.
    try {
      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is not defined. Skipping email dispatch.');
      } else {
        // Instantiate Resend here so it's only evaluated at request time, not build time
        const resend = new Resend(process.env.RESEND_API_KEY);
        console.log(`Attempting to send confirmation email to ${contactEmail} via Resend...`);
        
        // Send confirmation to sponsor
        const sponsorEmailResult = await resend.emails.send({
          from: 'OFAAC <onboarding@resend.dev>', // Use verified domain here when ready
          to: [contactEmail],
          subject: `Thank You for Your OFAAC Sponsorship Inquiry - ${tier}`,
          html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
              <h2 style="color: #AA771C;">Thank you, ${contactPerson}!</h2>
              <p>We have successfully received your inquiry to partner with the Organization for the Advancement of Anioma Culture (OFAAC) as a <strong>${tier}</strong> sponsor.</p>
              <p>Your support is vital in helping us preserve and promote our rich cultural heritage. Our administrative team will review your inquiry and reach out to you within 1-2 business days to discuss the next steps.</p>
              <p>If you have any immediate questions, feel free to reply to this email.</p>
              <br/>
              <p>Sincerely,</p>
              <p><strong>The OFAAC Team</strong></p>
            </div>
          `,
        });

        if (sponsorEmailResult.error) {
           console.error("Resend Error (Sponsor Email):", sponsorEmailResult.error);
        } else {
           console.log("Sponsor confirmation email dispatched successfully.");
        }

        console.log(`Attempting to send admin notification...`);
        // Send notification to OFAAC admin
        const adminEmailResult = await resend.emails.send({
          from: 'OFAAC Website <onboarding@resend.dev>', // Use verified domain here when ready
          to: ['admin@ofaac.org'], // Replace with your actual verified email address for receiving leads
          subject: `New Lead: ${tier} Sponsorship from ${companyName}`,
          html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
              <h2 style="color: #AA771C;">New Sponsorship Inquiry</h2>
              <p>A new sponsorship inquiry has been submitted via the OFAAC website:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Tier:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${tier}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${companyName}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Contact Person:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactPerson}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${contactEmail}">${contactEmail}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactPhone || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message || 'N/A'}</td></tr>
              </table>
              <p style="margin-top: 20px;">Please follow up promptly.</p>
            </div>
          `,
        });

        if (adminEmailResult.error) {
           console.error("Resend Error (Admin Email):", adminEmailResult.error);
        } else {
           console.log("Admin notification email dispatched successfully.");
        }
      }
    } catch (emailError) {
      console.error('Email Dispatch Error: Failed to send emails.', emailError);
      // We don't return a 500 here because the database write was successful!
    }

    return NextResponse.json({ message: 'Sponsorship inquiry submitted successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error: Sponsorship inquiry submission failed:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
