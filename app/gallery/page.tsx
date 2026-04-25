import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GallerySpotlight from "@/components/GallerySpotlight";
import GalleryMain from "@/components/GalleryMain";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery | OFAAC",
  description: "Explore the visual archive of the Organization for the Advancement of Anioma Culture (OFAAC), featuring highlights from the Anioma Cultural Festival, Annual Lecture Series, and community outreach.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <GalleryHero />
      <GallerySpotlight />
      <GalleryMain />
      <CTASection />
    </div>
  );
}
