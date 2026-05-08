import { BlogPost, blogPosts, BlogCategory, BLOG_CATEGORIES } from "./blog-data";
import DSC_41 from "@/public/DSC_41.jpg";
import DSC_66 from "@/public/DSC_66.jpg";
import DSC_56 from "@/public/DSC_56.jpg";

const BLOGGER_JSON_FEED_URL = "https://emekaesogbue.blogspot.com/feeds/posts/default?alt=json";

// Types matching the Blogger JSON response structure
interface BloggerEntry {
  id: { $t: string };
  published: { $t: string };
  updated: { $t: string };
  category?: Array<{ term: string }>;
  title: { type: string; $t: string };
  content: { type: string; $t: string };
  link: Array<{ rel: string; type: string; href: string }>;
  author: Array<{ name: { $t: string } }>;
  media$thumbnail?: { url: string; height: string; width: string };
}

interface BloggerFeed {
  feed: {
    entry?: BloggerEntry[];
  };
}

/**
 * Strips basic HTML to calculate read time and extract a clean excerpt.
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ");
}

/**
 * Generates an estimated reading time based on word count (approx. 200 words/min).
 */
function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

/**
 * Extracts a high-res image from the Blogger post content if available.
 * Blogger thumbnails are notoriously small (s72-c).
 */
function extractImageFromContent(html: string): string | null {
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = html.match(imgRegex);
  if (match && match[1]) {
    // If it's a blogger image, try to get a higher resolution version
    // Typically Blogger images look like .../s320/... we can replace with /s1600/
    return match[1].replace(/\/s\d+(-c)?\//, '/s1600/');
  }
  return null;
}

/**
 * Fallback static images for posts without media
 */
const fallbackImages = [DSC_41, DSC_66, DSC_56];

/**
 * Maps a single Blogger entry to our existing BlogPost format
 */
function mapBloggerEntryToBlogPost(entry: BloggerEntry, index: number): BlogPost {
  // 1. Extract the canonical URL / slug
  const alternateLink = entry.link.find((l) => l.rel === "alternate");
  let slug = "blogger-post-" + index;
  if (alternateLink) {
    const urlParts = alternateLink.href.split("/");
    const filename = urlParts[urlParts.length - 1]; // e.g. my-post-title.html
    slug = filename.replace(".html", "");
  }

  // 2. Parse Date
  const dateObj = new Date(entry.published.$t);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // 3. Clean Text & Extract Excerpt
  const rawContent = entry.content?.$t || "";
  const plainText = stripHtml(rawContent);
  const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;

  // 4. Map Category
  let mappedCategory: BlogCategory = "Cultural Insights"; // Default
  if (entry.category && entry.category.length > 0) {
    const term = entry.category[0].term;
    // Attempt basic mapping to our predefined categories
    if (term.toLowerCase().includes("event")) mappedCategory = "Event Updates";
    if (term.toLowerCase().includes("history")) mappedCategory = "Anioma History";
    if (term.toLowerCase().includes("community")) mappedCategory = "Community Spotlights";
  }

  // 5. High-Res Image Extraction
  let imageUrl = extractImageFromContent(rawContent);
  if (!imageUrl && entry.media$thumbnail?.url) {
    // Try to up-res the tiny thumbnail provided by Blogger
    imageUrl = entry.media$thumbnail.url.replace(/\/s\d+-c\//, "/s1600/");
  }

  // 6. Final Object
  return {
    slug,
    title: entry.title.$t,
    excerpt,
    category: mappedCategory,
    author: entry.author?.[0]?.name?.$t || "Blogger Author",
    date: formattedDate,
    readTime: estimateReadTime(plainText),
    image: imageUrl || fallbackImages[index % fallbackImages.length],
    content: rawContent,
    featured: false, // Don't override our primary featured post
  };
}

/**
 * Fetches and merges Blogger posts with our local static posts.
 */
export async function getAllBloggerPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(BLOGGER_JSON_FEED_URL, {
      next: { revalidate: 3600 }, // Revalidate cache every 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Blogger feed: ${res.status}`);
    }

    const data: BloggerFeed = await res.json();
    const entries = data.feed?.entry || [];

    const fetchedPosts = entries.map((entry, index) =>
      mapBloggerEntryToBlogPost(entry, index)
    );

    // Merge fetched posts with local static posts.
    // For this implementation, we put local featured posts first,
    // then fetched posts, then the rest of local posts.
    const allPosts = [...blogPosts];
    const featuredLocal = allPosts.filter(p => p.featured);
    const regularLocal = allPosts.filter(p => !p.featured);

    return [...featuredLocal, ...fetchedPosts, ...regularLocal];
  } catch (error) {
    console.error("Error fetching blogger posts:", error);
    // Fallback safely to just local posts if API fails
    return blogPosts;
  }
}

/**
 * Retrieve a specific post by its slug (looks in merged list).
 */
export async function getBloggerPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const allPosts = await getAllBloggerPosts();
  return allPosts.find((p) => p.slug === slug);
}
