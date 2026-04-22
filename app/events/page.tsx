import type { Metadata } from "next";
import FestivalHighlight from "@/components/FestivalHighlight";
import EventsArchive from "@/components/EventsArchive";
import CTASection from "@/components/CTASection";
import EventsHero from "@/components/EventsHero";

export const metadata: Metadata = {
  title: "Anioma Cultural Events: Celebrate Our Heritage",
  description: "Explore upcoming and past events hosted by OFAAC, including the vibrant Anioma Cultural Festival and insightful Anioma Annual Lecture Series. Discover how we celebrate and promote the rich traditions of the Anioma people.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <EventsHero />
      <FestivalHighlight />
      <EventsArchive />
      <CTASection />
    </div>
  );
}
