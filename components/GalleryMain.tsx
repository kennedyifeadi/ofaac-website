"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { X, SearchX, Maximize2 } from "lucide-react";

// Placeholder Images
import DSC_38 from "@/public/DSC_38.jpg";
import DSC_41 from "@/public/DSC_41.jpg";
import DSC_47 from "@/public/DSC_47.jpg";
import DSC_56 from "@/public/DSC_56.jpg";
import DSC_63 from "@/public/DSC_63.jpg";
import DSC_64 from "@/public/DSC_64.jpg";
import DSC_66 from "@/public/DSC_66.jpg";

// Defined Filter Categories based on user request
const categories = [
  "All",
  "Anioma Lecture",
  "Anioma Festival 2024",
  "Anioma Festival 2023",
  "Visitations",
  "Dances",
  "Dignitaries",
  "Leadership"
];

// Data Array - Built to be easily swappable with Cloudinary URLs later
type GalleryImage = {
  id: number;
  src: StaticImageData | string;
  category: string;
  alt: string;
};

const galleryData: GalleryImage[] = [
  { id: 1, src: DSC_41, category: "Dances", alt: "Youth performing traditional dance" },
  { id: 2, src: DSC_47, category: "Anioma Festival 2024", alt: "Crowd at the festival" },
  { id: 3, src: DSC_63, category: "Visitations", alt: "Royal visitation" },
  { id: 4, src: DSC_66, category: "Leadership", alt: "Community leadership" },
  { id: 5, src: DSC_38, category: "Dances", alt: "Dancers in Akwa-Ocha" },
  { id: 6, src: DSC_56, category: "Anioma Lecture", alt: "Annual lecture series speaker" },
  { id: 7, src: DSC_64, category: "Dignitaries", alt: "Dignitaries arriving at the event" },
  { id: 8, src: DSC_41, category: "Anioma Festival 2023", alt: "Festival performances" },
];

export default function GalleryMain() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  // Filter Logic
  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  return (
    <section className="w-full bg-background py-12 px-4 sm:px-6 md:px-12  min-h-[800px]">
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

        {/* Filter Bar */}
        <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-3 mb-16 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gold-dark text-white border-gold-dark shadow-md"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-gold hover:text-gold-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Grid / Empty State */}
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              <AnimatePresence>
                {filteredImages.map((img) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={img.id}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-black/5 bg-zinc-100"
                    onClick={() => setLightboxImage(img)}
                  >
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay with expand icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
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
                We haven&apos;t uploaded any photos to the <span className="font-bold text-gold-dark">{activeCategory}</span> category yet. Check back soon!
              </p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-8 text-gold-dark font-sans font-bold text-sm uppercase tracking-widest hover:text-gold transition-colors underline underline-offset-4"
              >
                View All Photos
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button */}
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
                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing lightbox
              >
                <Image 
                  src={lightboxImage.src} 
                  alt={lightboxImage.alt} 
                  fill 
                  sizes="100vw"
                  className="object-contain"
                />
                
                {/* Image Details Bar */}
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
