import { MetadataRoute } from "next";
import { getAllBloggerPosts } from "@/lib/blogger";
import { projectsData } from "@/lib/projectsData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ofaac.org";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/events",
    "/gallery",
    "/leadership",
    "/projects",
    "/sponsor",
    "/blog",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const posts = await getAllBloggerPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), // Ideally this would be the post's actual last modified date
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic project routes
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
