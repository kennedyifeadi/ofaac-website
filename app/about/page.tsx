import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Story | Organization for the Advancement of Anioma Culture",
  description: "Learn about the Organization for the Advancement of Anioma Culture (OFAAC), its history, mission, objectives, and significant achievements in promoting the rich cultural heritage of the Anioma people of Delta State, Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      
      {/* The highly interactive Arup-inspired Hero Section */}
      <AboutHero />

      {/* The main reading copy for the Genesis history */}
      <AboutContent />

      {/* Mount standard dynamic CTA below it to catch them at the end */}
      <CTASection />
      
    </div>
  );
}
