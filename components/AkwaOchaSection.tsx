"use client";

import Image from "next/image";
import { ArrowDown} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AkwaOchaSection() {
  const text = "At the heart of Anioma culture lies the Akwa-Ocha, a traditional hand-woven white cloth that embodies the very essence of our people. A profound symbol of pride, purity, and unity for the Anioma nation.";
  const words = text.split(" ");

  return (
    <section className="relative w-full mx-auto px-4 sm:px-6 md:px-6 py-10">
      {/* Main trigger wrapper: starts animation when user scrolls to it */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-[500px] md:h-[650px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden"
      >
        
        {/* The Curtain Reveal for the background (Bottom to Top) */}
        <motion.div 
          variants={{
            hidden: { clipPath: "inset(25% 0 0 0)" },
            visible: { 
              clipPath: "inset(0% 0 0 0)", 
              transition: { duration: 1, ease: [1, 1, 1, 1] } 
            }
          }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image (Placeholder) */}
          <Image 
            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop" 
            alt="Akwa-Ocha Fabric"
            fill
            className="object-cover"
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* OVERLAY TEXT (Reveals word by word as the curtain rises) */}
        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 pr-4 z-10 md:w-[70%]">
          <p className="text-white/95 text-base md:text-lg font-normal leading-relaxed drop-shadow-md flex flex-wrap">
            {words.map((word, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, delay: 1.0 + (i * 0.04) } 
                  }
                }}
                className="mr-[0.25em] mt-1"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* TOP LEFT CUTOUT (Reveals ONLY after text is fully shown at 2.6s) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 1 } }
          }}
          className="absolute top-0 left-0 bg-white pt-2 px-8 pb-2 rounded-br-2xl sm:rounded-br-[2.5rem] z-20"
        >
          {/* Inner rounded corners */}
          <svg className="absolute top-0 -right-[32px] w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" fill="white"/>
          </svg>

          <svg className="absolute -bottom-[32px] left-0 w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z" fill="white"/>
          </svg>

          <h2 className="text-5xl sm:text-5xl md:text-[7rem] leading-none font-script tracking-normal text-foreground capitalize pr-4">
            Akwa-<wbr/>ocha
          </h2>
          <p className="text-gold-dark font-sans text-sm md:text-xl italic font-normal tracking-wide">
            Pride, Purity, and Unity
          </p>
        </motion.div>

        {/* BOTTOM RIGHT CUTOUT (Explore button - visible from the start) */}
        <Link href="/about">
        <div 
          className="absolute bottom-0 right-0 bg-white md:pt-6 pt-2 md:pl-4 pl-2 md:pb-4 pb-2 md:pr-4 pr-2 rounded-tl-2xl sm:rounded-tl-[2.5rem] flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors z-20 group"
        >
          {/* Top-Right Fillet */}
          <svg className="absolute -top-[32px] right-0 w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" clipRule="evenodd" d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" fill="white"/>
          </svg>
          
          {/* Bottom-Left Fillet */}
          <svg className="absolute bottom-0 -left-[32px] w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" clipRule="evenodd" d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z" fill="white"/>
          </svg>

          <span className="font-sans font-medium text-foreground uppercase tracking-[0.2em] text-sm group-hover:text-gold-dark transition-colors">
            Explore
          </span>
          <div className=" text-black -rotate-45 rounded-full p-2 group-hover:bg-gold-dark group-hover:text-white transition-colors hover:scale-110 transform">
            <ArrowDown size={20} strokeWidth={2.5} />
          </div>
        </div>
        </Link>

      </motion.div>
    </section>
  );
}
