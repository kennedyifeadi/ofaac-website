import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

const PAGE_SIZE = 15;

type CategoryEntry =
  | { type: "tag"; value: string }
  | { type: "folder"; value: string };

const CATEGORY_MAP: Record<string, CategoryEntry> = {
  All:                    { type: "tag",    value: "anioma-gallery" },
  "Anioma Festival 2023": { type: "folder", value: "Anioma_Festival_2023" },
  "Anioma Festival 2024": { type: "folder", value: "Anioma_Festival_2024" },
  "Anioma Festival 2025": { type: "folder", value: "Anioma_Festival_2025" },
  "Anioma Festival 2026": { type: "folder", value: "Anioma_Festival_2026" },
  "Anioma Lecture":       { type: "folder", value: "Anioma_Lecture" },
  Dances:                 { type: "folder", value: "Dances" },
  Dignitaries:            { type: "folder", value: "Dignitaries" },
  Leadership:             { type: "folder", value: "Leadership" },
  Visitations:            { type: "folder", value: "Visitations" },
};

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  folder: string;
  display_name?: string;
  context?: { alt?: string; caption?: string };
}

export interface GalleryResponse {
  images: CloudinaryImage[];
  total: number;
  next_cursor: string | null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category  = searchParams.get("category") ?? "All";
  const cursor    = searchParams.get("cursor") ?? undefined; // Cloudinary next_cursor for pagination

  if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
  ) {
    console.error("Gallery API: Missing Cloudinary environment variables.");
    return NextResponse.json({ error: "Cloudinary not configured" }, { status: 500 });
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:    process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const entry: CategoryEntry =
    CATEGORY_MAP[category] ?? { type: "tag", value: "Anioma_Gallery" };

  const expression =
    entry.type === "tag"
      ? `tags:${entry.value}`
      : `folder:"${entry.value}"`;

  console.log(
    `Gallery API [${category}] page${cursor ? " (cursor)" : " 1"}: expression → ${expression}`
  );

  try {
    // Build the search query
    let search = cloudinary.search
      .expression(expression)
      .sort_by("created_at", "desc")
      .with_field("context")
      .with_field("tags")
      .max_results(PAGE_SIZE);

    // Apply cursor for subsequent pages
    if (cursor) {
      search = search.next_cursor(cursor);
    }

    const result = await search.execute();

    console.log(
      `Gallery API [${category}]: returned ${result.resources.length} images` +
      ` (total: ${result.total_count}, has_more: ${!!result.next_cursor})`
    );

    const images: CloudinaryImage[] = result.resources.map((r: CloudinaryImage) => ({
      public_id:    r.public_id,
      secure_url:   r.secure_url,
      width:        r.width,
      height:       r.height,
      format:       r.format,
      folder:       r.folder,
      display_name: r.display_name,
      context:      r.context,
    }));

    const response: GalleryResponse = {
      images,
      total:       result.total_count,
      next_cursor: result.next_cursor ?? null,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Gallery API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch images from Cloudinary" },
      { status: 500 }
    );
  }
}
