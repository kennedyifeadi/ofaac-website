import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SponsorHero from "@/components/SponsorHero";
import SponsorWhy from "@/components/SponsorWhy";
import SponsorTiers from "@/components/SponsorTiers";
import SponsorPartners from "@/components/SponsorPartners";
import SponsorCTA from "@/components/SponsorCTA";

export const metadata: Metadata = {
  title: "Partner with OFAAC: Support Anioma Culture",
  description: "Explore sponsorship opportunities with the Organization for the Advancement of Anioma Culture (OFAAC). Partner with us to preserve, promote, and advance the rich cultural heritage of the Anioma people through our Gold, Silver, and Bronze tiers.",
};

export default function SponsorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <SponsorHero />
      <SponsorWhy />
      <SponsorTiers />
      <SponsorPartners />
      <SponsorCTA />

    </main>
  );
}
