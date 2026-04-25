"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

import DSC_41 from "@/public/DSC_41.jpg";
import DSC_47 from "@/public/DSC_47.jpg";
import DSC_63 from "@/public/DSC_63.jpg";
import DSC_66 from "@/public/DSC_66.jpg";

export default function GallerySpotlight() {
  const spotlights = [
    {
      image: DSC_63,
      title: "The Royal Procession",
      description: "A breathtaking display of traditional Anioma royalty, adorned in authentic Akwa-Ocha garments.",
      aspect: "aspect-3/4" // Tall
    },
    {
      image: DSC_47,
      title: "Festival Spectacle",
      description: "Thousands gathered to witness the annual dance arts, a testament to our enduring unity.",
      aspect: "aspect-video" // Wide
    },
    {
      image: DSC_66,
      title: "Community Outreach",
      description: "Connecting with the youth to instill positive self-esteem and cultural identity.",
      aspect: "aspect-square" // Square
    },
    {
      image: DSC_41,
      title: "Traditional Dance",
      description: "Youth performers executing the Maiden Dance with incredible precision and grace.",
      aspect: "aspect-4/3" // Horizontal
    }
  ];

  return (
    <section className="w-full bg-white py-4 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 text-gold font-sans tracking-widest text-xs font-semibold uppercase"
          >
            <Star size={16} />
            <span>Spotlight Highlights</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight text-center md:text-left"
          >
            Moments that Define <span className="text-gold-dark font-script font-normal text-4xl sm:text-5xl md:text-6xl">Anioma</span>
          </motion.h2>
        </div>

        {/* CSS Columns Masonry Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {spotlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="break-inside-avoid w-full group cursor-pointer"
            >
              <div className={`relative w-full ${item.aspect} rounded-3xl overflow-hidden mb-6`}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
                />
                
                {/* Subtle protective overlay that appears on hover to draw focus */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Text Description underneath the creative images */}
              <div className="px-2">
                <h3 className="font-serif font-bold text-xl md:text-2xl text-zinc-900 mb-2 group-hover:text-gold-dark transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
