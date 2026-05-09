import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy | OFAAC",
  description: "Privacy Policy for the Organization For the Advancement of Anioma Culture (OFAAC).",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="w-full bg-zinc-900 py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
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
            The Organization For the Advancement of Anioma Culture (&quot;OFAAC&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site, express interest in sponsoring an event, or when you choose to participate in various activities related to the Site (such as newsletters and contact forms).</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Respond to your customer service requests and support needs.</li>
            <li>Communicate with you about sponsorships, events, and updates related to OFAAC.</li>
            <li>Send you our newsletter, if you have opted in.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>Improve website performance and user experience.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We will not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our trusted affiliates and advertisers for the purposes outlined above.
          </p>
          <p>
            We may disclose your information if we are required to do so by law or in response to a subpoena or court order.
          </p>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
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
