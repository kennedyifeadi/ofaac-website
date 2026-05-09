import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Terms of Service | OFAAC",
  description: "Terms of Service for the Organization For the Advancement of Anioma Culture (OFAAC).",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="w-full bg-zinc-900 py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="font-sans text-zinc-400 text-lg">
            Last updated: May 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose prose-zinc prose-headings:font-serif prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-a:text-gold-dark hover:prose-a:text-gold">
          <p>
            Welcome to the Organization For the Advancement of Anioma Culture (&quot;OFAAC&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our website located at ofaacofficial.com (the &quot;Site&quot;) and form a binding contractual agreement between you, the user of the Site, and us.
          </p>
          <p>
            By accessing or using the Site, you acknowledge that you have read and understood these Terms and agree to be bound by them. If you do not agree with any part of these Terms, you must discontinue your use of the Site immediately.
          </p>

          <h2>1. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
          <p>
            You are granted a limited license only for purposes of viewing the material contained on this Site. You may not reproduce, distribute, or create derivative works from our Content without our express written permission.
          </p>

          <h2>2. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that:
          </p>
          <ul>
            <li>All information you submit via contact forms or sponsorship applications will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            <li>Your use of the Site will not violate any applicable law or regulation.</li>
          </ul>

          <h2>3. Prohibited Activities</h2>
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>

          <h2>4. Limitations of Liability</h2>
          <p>
            In no event shall OFAAC, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Site, whether such liability is under contract. OFAAC, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Site.
          </p>

          <h2>5. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent OFAAC from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Nigeria for the resolution of any disputes.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms, please contact us at:
          </p>
          <p>
            <strong>Organization For the Advancement of Anioma Culture (OFAAC)</strong><br />
            287 Nnebisi Road, by Slot, opposite Sterling Bank<br />
            Asaba, Delta State, Nigeria<br />
            Phone: +234 803 307 0480<br />
            Email: ofaacofficial@gmail.com
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
