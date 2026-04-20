"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="w-full bg-white text-zinc-900 py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gold-dark grow max-w-12" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-gold-dark">
              Introduction
            </span>
          </div>
          
          <h2 className="font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl font-medium text-zinc-900 tracking-tight">
            The Genesis of a <br className="hidden lg:block" />
            <span className="text-gold-dark font-script font-normal text-5xl md:text-6xl lg:text-7xl">Cultural</span> Movement
          </h2>
        </motion.div>

        {/* Right Column: Paragraph Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-7 flex flex-col gap-6 md:gap-8 font-sans text-base md:text-lg lg:text-xl text-zinc-600 leading-relaxed md:pt-10"
        >
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-gold-dark first-letter:mr-3 first-letter:float-left">
            The Organization for the Advancement of Anioma Culture (OFAAC) stands as the preeminent cultural umbrella body for the Anioma people, nestled within Delta State, Nigeria. 
          </p>
          <p>
            Established in November 2003, OFAAC emerged from a profound commitment to safeguard, celebrate, and propel forward the unique cultural tapestry of the Anioma nation.
          </p>
          <p>
            As a non-governmental and non-political entity, our membership transcends geographical boundaries, embracing all sons and daughters of Anioma, alongside non-Anioma individuals who share a vested interest in the advancement of Nigeria&apos;s rich cultural heritage.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
