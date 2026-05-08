import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogMain from "@/components/BlogMain";
import { getAllBloggerPosts } from "@/lib/blogger";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "OFAAC Blog: Insights into Anioma Culture and Heritage",
  description:
    "Explore the OFAAC blog for engaging articles on Anioma culture, event updates, community spotlights, and historical insights. Dive deep into the traditions and vibrant life of the Anioma people.",
};

export default async function BlogPage() {
  const posts = await getAllBloggerPosts();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BlogMain posts={posts} />
      <CTASection />
    </main>
  );
}
