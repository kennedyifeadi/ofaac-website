"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, SearchX, Maximize2, ChevronUp, Loader2 } from "lucide-react";
import type { CloudinaryImage } from "@/app/api/gallery/route";

// ── Category definitions ────────────────────────────────────────
const PRIMARY_CATEGORIES = [
  "All",
  "Anioma Festival 2023",
  "Anioma Festival 2024",
  "Anioma Festival 2025",
  "Anioma Festival 2026",
  "Anioma Lecture",
  "Dances",
  "Dignitaries",
  "Leadership",
];

const MORE_CATEGORIES = ["Visitations"];

// ── Types ───────────────────────────────────────────────────────
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
};

function toGalleryImages(resources: CloudinaryImage[], category: string): GalleryImage[] {
  return resources.map((r) => ({
    id:       r.public_id,
    src:      r.secure_url,
    alt:      r.context?.caption ?? r.context?.alt ?? r.display_name ?? r.public_id.split("/").pop() ?? "OFAAC Gallery Image",
    category,
    width:    r.width,
    height:   r.height,
  }));
}

export default function GalleryMain() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMore, setShowMore]             = useState(false);
  const [images, setImages]                 = useState<GalleryImage[]>([]);
  const [nextCursor, setNextCursor]         = useState<string | null>(null);
  const [total, setTotal]                   = useState(0);
  const [loading, setLoading]               = useState(true);
  const [loadingMore, setLoadingMore]       = useState(false);
  const [error, setError]                   = useState<string | null>(null);
  const [retryKey, setRetryKey]             = useState(0);
  const [lightboxImage, setLightboxImage]   = useState<GalleryImage | null>(null);

  // ── Initial / category-change fetch (always page 1) ────────────
  useEffect(() => {
    let cancelled = false;

    async function loadFirst() {
      setLoading(true);
      setError(null);
      setImages([]);
      setNextCursor(null);
      setTotal(0);
      console.log(`GalleryMain: Fetching first page for "${activeCategory}"`);
      try {
        const res  = await fetch(`/api/gallery?category=${encodeURIComponent(activeCategory)}`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        console.log(`GalleryMain: Got ${data.images?.length ?? 0} / ${data.total} images`);
        if (!cancelled) {
          setImages(toGalleryImages(data.images ?? [], activeCategory));
          setNextCursor(data.next_cursor ?? null);
          setTotal(data.total ?? 0);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to load images.";
        console.error("GalleryMain load error:", msg);
        if (!cancelled) setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadFirst();
    return () => { cancelled = true; };
  }, [activeCategory, retryKey]);

  // ── Load More (append next page) ───────────────────────────────
  async function loadMore() {
    if (!nextCursor || loadingMore) return;
    setLoadingMore(true);
    console.log(`GalleryMain: Loading more for "${activeCategory}" (cursor: ${nextCursor})`);
    try {
      const url  = `/api/gallery?category=${encodeURIComponent(activeCategory)}&cursor=${encodeURIComponent(nextCursor)}`;
      const res  = await fetch(url);
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      console.log(`GalleryMain: Appended ${data.images?.length ?? 0} more images`);
      setImages((prev) => [...prev, ...toGalleryImages(data.images ?? [], activeCategory)]);
      setNextCursor(data.next_cursor ?? null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load more images.";
      console.error("GalleryMain loadMore error:", msg);
    } finally {
      setLoadingMore(false);
    }
  }

  const handleCategory = (cat: string) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
  };

  return (
    <section className="w-full bg-background py-12 px-4 sm:px-6 md:px-12 min-h-[800px]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
            The Complete Archive
          </h2>
          <p className="font-sans text-zinc-500 max-w-2xl mx-auto">
            Browse through our extensive collection of photographs documenting the rich history, events, and leadership of the Anioma people.
          </p>
        </div>

        {/* ── Filter Bar ─────────────────────────────────────── */}
        <div className="mb-16 space-y-3">
          {/* Primary row */}
          <div className="flex flex-wrap gap-2 items-center justify-start md:justify-center">
            {PRIMARY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gold-dark text-white border-gold-dark shadow-md"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-gold hover:text-gold-dark"
                }`}
              >
                {cat}
              </button>
            ))}

            {MORE_CATEGORIES.length > 0 && (
              <button
                onClick={() => setShowMore((p) => !p)}
                className={`flex items-center gap-1 whitespace-nowrap px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-300 border ${
                  showMore
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                }`}
                aria-expanded={showMore}
                aria-label={showMore ? "Show fewer categories" : "Show more categories"}
              >
                {showMore ? <><ChevronUp size={14} /> Less</> : <>···</>}
              </button>
            )}
          </div>

          {/* Overflow row */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 items-center justify-start md:justify-center pt-1">
                  {MORE_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className={`whitespace-nowrap px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-300 border ${
                        activeCategory === cat
                          ? "bg-gold-dark text-white border-gold-dark shadow-md"
                          : "bg-white text-zinc-600 border-zinc-200 hover:border-gold hover:text-gold-dark"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Grid / Loading / Error / Empty ─────────────────── */}
        <AnimatePresence mode="wait">

          {/* Loading skeleton */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32 gap-4"
            >
              <Loader2 size={40} className="text-gold-dark animate-spin" />
              <p className="font-sans text-zinc-400 text-sm">Loading images…</p>
            </motion.div>
          )}

          {/* Error state */}
          {!loading && error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-red-100"
            >
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-400 mb-4">
                <SearchX size={28} />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-900 mb-2">Could not load images</h3>
              <p className="text-zinc-400 text-sm text-center max-w-xs mb-6">{error}</p>
              <button
                onClick={() => setRetryKey((k) => k + 1)}
                className="px-6 py-2 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-gold-dark transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          )}

          {/* Empty state */}
          {!loading && !error && images.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-zinc-100 border-dashed"
            >
              <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300 mb-6">
                <SearchX size={32} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-zinc-900 mb-2">No photos found</h3>
              <p className="font-sans text-zinc-500 text-center max-w-sm">
                We haven&apos;t uploaded any photos to the{" "}
                <span className="font-bold text-gold-dark">{activeCategory}</span> category yet. Check back soon!
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-8 text-gold-dark font-sans font-bold text-sm uppercase tracking-widest hover:text-gold transition-colors underline underline-offset-4"
              >
                View All Photos
              </button>
            </motion.div>
          )}

          {/* Image grid */}
          {!loading && !error && images.length > 0 && (
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                {images.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.3) }}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-black/5 bg-zinc-100"
                    onClick={() => setLightboxImage(img)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ── Load More / count footer ────────────────── */}
              <div className="flex flex-col items-center gap-5 mt-12">

                {/* Image count */}
                <p className="font-sans text-sm text-zinc-400">
                  Showing <span className="font-semibold text-zinc-700">{images.length}</span>
                  {total > 0 && (
                    <> of <span className="font-semibold text-zinc-700">{total}</span></>
                  )}{" "}
                  photos
                </p>

                {/* Load More button — only shown when there are more pages */}
                {nextCursor && (
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-zinc-900 hover:bg-gold-dark text-white font-sans font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {loadingMore ? (
                      <><Loader2 size={16} className="animate-spin" /> Loading…</>
                    ) : (
                      "Load More"
                    )}
                  </button>
                )}

              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* ── External Archive CTA (Google Drive) ──────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-12 border-t border-zinc-200 text-center flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold-dark mb-6">
            <SearchX size={28} className="hidden" /> {/* Placeholder just for sizing context if needed */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
            Explore Our Complete Archive
          </h3>
          <p className="font-sans text-zinc-500 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Access more about our rich culture with our full bank of galleries spanning from 2003 to 2026.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1T_MytPiKdNanNfP6qpfZK89hnKXNzACB?usp=sharing" // <-- PASTE GOOGLE DRIVE LINK HERE
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 hover:bg-gold-dark text-white font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Access Google Drive Archive
          </a>
        </motion.div>
        {/* ── Lightbox ───────────────────────────────────────── */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
              onClick={() => setLightboxImage(null)}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-110"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl bg-zinc-900"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 md:p-8 flex flex-col justify-end pointer-events-none">
                  <span className="text-gold font-sans font-bold text-xs uppercase tracking-widest mb-2">
                    {lightboxImage.category}
                  </span>
                  <p className="text-white font-sans text-base md:text-lg">
                    {lightboxImage.alt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
