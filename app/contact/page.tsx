import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact OFAAC: Connect with Anioma Culture",
  description:
    "Get in touch with the Organization for the Advancement of Anioma Culture (OFAAC). Find our office addresses, phone numbers, email, and social media links. Join our community or sign up for our newsletter.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <CTASection />
    </main>
  );
}
