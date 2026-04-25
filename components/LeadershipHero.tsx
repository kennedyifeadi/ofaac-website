"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DSC_41 from "@/public/DSC_41.jpg";

export default function LeadershipHero() {
  return (
    <section className="relative w-full bg-white pb-12 overflow-hidden">
      
      {/* 1. The Visual Banner */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[400px] md:h-[600px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-zinc-200/50"
        >
          {/* Background Image with slow gentle zoom */}
          <motion.div 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={DSC_41} 
              alt="OFAAC Leadership" 
              fill 
              className="object-cover object-[50%_35%]"
              priority
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
          </motion.div>

          {/* Title overlay at the bottom left */}
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-14 z-10 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white w-max shadow-sm"
            >
              <span>The Pillars of OFAAC</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight max-w-4xl drop-shadow-lg"
            >
              Our Leaders: Guiding the Future of <br className="hidden md:block"/>
              <span className="text-gold font-script font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md pr-4">
                Anioma Culture
              </span>
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* 2. The Introduction Text (Separated into an editorial layout) */}
      <div className="w-full max-w-6xl mx-auto px-6 mt-16 md:mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start"
        >
          {/* Left Column: Bold statement */}
          <div className="lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 leading-[1.3] tracking-tight">
              The success and enduring impact of OFAAC are deeply rooted in vision and dedication.
            </h2>
            <div className="w-20 h-1.5 bg-gold mt-8 rounded-full" />
          </div>
          
          {/* Right Column: Elaborate description */}
          <div className="lg:w-3/5">
            <p className="font-sans text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 font-medium">
              These esteemed individuals, comprising our Founding Patrons, Board of Trustees, and Board of Directors, are the custodians of Anioma heritage, guiding our mission to preserve, promote, and advance the rich cultural tapestry of our people. 
            </p>
            <p className="font-sans text-base md:text-lg text-zinc-500 leading-relaxed">
              Their collective wisdom, experience, and passion are instrumental in steering OFAAC towards its goals and ensuring the legacy of Anioma thrives for generations to come. We operate under a robust leadership framework designed to ensure effective governance, strategic direction, and impactful program implementation.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
