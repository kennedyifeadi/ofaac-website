"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Camera } from "lucide-react";

import DSC_38 from "@/public/DSC_38.jpg";
import DSC_41 from "@/public/DSC_41.jpg";
import DSC_47 from "@/public/DSC_47.jpg";
import DSC_56 from "@/public/DSC_56.jpg";
import DSC_63 from "@/public/DSC_63.jpg";
import DSC_64 from "@/public/DSC_64.jpg";
import DSC_66 from "@/public/DSC_66.jpg";

// Map our images into the structure provided by the user
const leftPhotos = [
  { src: DSC_38, alt: "Gallery Highlight 1", rotate: "-rotate-3", translateY: "-translate-y-4" },
  { src: DSC_41, alt: "Gallery Highlight 2", rotate: "rotate-2", translateY: "translate-y-2" },
  { src: DSC_47, alt: "Gallery Highlight 3", rotate: "-rotate-2", translateY: "-translate-y-2" },
  { src: DSC_66, alt: "Gallery Highlight 4", rotate: "rotate-3", translateY: "translate-y-4" },
];

const centerTopPhotos = [
  { src: DSC_64, alt: "Gallery Highlight 5", rotate: "-rotate-2", translateY: "-translate-y-6", size: "large" },
  { src: DSC_63, alt: "Gallery Highlight 6", rotate: "rotate-1", translateY: "translate-y-0", size: "medium" },
  { src: DSC_56, alt: "Gallery Highlight 7", rotate: "rotate-2", translateY: "-translate-y-4", size: "large" },
  { src: DSC_63, alt: "Gallery Highlight 6", rotate: "rotate-1", translateY: "translate-y-0", size: "medium" },
];

const rightPhotos = [
  { src: DSC_38, alt: "Gallery Highlight 8", rotate: "-rotate-2", translateY: "-translate-y-4" },
  { src: DSC_41, alt: "Gallery Highlight 9", rotate: "-rotate-3", translateY: "translate-y-2" },
  { src: DSC_47, alt: "Gallery Highlight 10", rotate: "rotate-1", translateY: "-translate-y-2" },
  { src: DSC_66, alt: "Gallery Highlight 11", rotate: "-rotate-2", translateY: "translate-y-4" },
];

interface PhotoCardProps {
  src: StaticImageData;
  alt: string;
  rotate?: string;
  translateY?: string;
  size?: "small" | "medium" | "large";
}

function PhotoCard({ src, alt, rotate = "", translateY = "", size = "medium" }: PhotoCardProps) {
  // Adapted size classes to ensure they look good on both mobile and desktop
  const sizeClasses = {
    small: "w-24 h-32 md:w-28 md:h-36",
    medium: "w-28 h-36 md:w-36 md:h-48",
    large: "w-32 h-44 md:w-44 md:h-60",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
      className={`
        relative ${sizeClasses[size]} ${rotate} ${translateY}
        rounded-2xl overflow-hidden shadow-lg
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 30vw, 20vw"
        className="object-cover"
      />
    </motion.div>
  );
}

export default function GalleryHero() {
  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col items-center justify-start overflow-hidden px-4 py-2 md:py-2">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-background pointer-events-none" />

      <div className="relative w-full mx-auto flex flex-col items-center">

        {/* ── Top photo row ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-3 w-full pt-8 pb-4">

          {/* Left cluster */}
          <div className="hidden lg:flex items-end gap-4 flex-1 justify-start pl-8">
            <div className="flex flex-col gap-4">
              <PhotoCard {...leftPhotos[0]} size="medium" />
              <PhotoCard {...leftPhotos[2]} size="small" />
            </div>
            <div className="flex flex-col gap-4 pb-6">
              <PhotoCard {...leftPhotos[1]} size="large" />
              <PhotoCard {...leftPhotos[3]} size="medium" />
            </div>
          </div>

          {/* Center top photos */}
          <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5 w-full lg:w-auto z-10">
            {centerTopPhotos.map((photo, i) => (
              <PhotoCard key={i} {...photo} size={photo.size as "small" | "medium" | "large"} />
            ))}
          </div>

          {/* Right cluster */}
          <div className="hidden lg:flex items-end gap-4 flex-1 justify-end pr-8">
            <div className="flex flex-col gap-4 pb-6">
              <PhotoCard {...rightPhotos[0]} size="large" />
              <PhotoCard {...rightPhotos[2]} size="medium" />
            </div>
            <div className="flex flex-col gap-4">
              <PhotoCard {...rightPhotos[1]} size="medium" />
              <PhotoCard {...rightPhotos[3]} size="small" />
            </div>
          </div>
        </div>

        {/* ── Center text content ── */}
        <div className="flex flex-col items-center text-center z-10 max-w-2xl px-4 mt-4 md:-mt-48">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 mb-6 text-zinc-500 font-sans tracking-widest text-xs font-semibold uppercase bg-white border border-zinc-200 px-4 py-1.5 rounded-full shadow-sm"
          >
            <Camera size={14} />
            <span>Visual Archive</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-zinc-900 mb-6 tracking-tight"
          >
            Capturing Our <br className="hidden sm:block"/>
            <span className="text-gold-dark font-script font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Heritage</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-sm md:text-base text-zinc-500 leading-relaxed max-w-md mb-8"
          >
            Explore a rich tapestry of our past events, festivals, and cultural
            milestones. Every picture tells a story of unity and tradition.
          </motion.p>

          {/* CTA Button */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
               onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
               className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-gold-dark transition-all duration-300 cursor-pointer"
            >
              Explore The Gallery
              <span className="text-lg leading-none">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
