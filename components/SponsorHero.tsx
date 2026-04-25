"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Heart, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DSC_38 from "@/public/DSC_38.jpg";
import DSC_63 from "@/public/DSC_63.jpg";

export default function SponsorHero() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full bg-white pt-10 pb-10 overflow-hidden">
      
      {/* Top Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-zinc-900 mb-6 tracking-tight"
        >
          Partner with OFAAC: Support <br className="hidden md:block"/>
          <span className="text-gold-dark font-script font-normal text-6xl sm:text-7xl md:text-8xl">
            Anioma Culture
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base md:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Invest in culture, impact a community. Join us in preserving, promoting, and advancing the rich cultural heritage of the Anioma people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Sponsor Now → scrolls to tiers */}
          <button
            onClick={() => scrollToSection("sponsor-tiers")}
            className="w-full sm:w-auto bg-zinc-900 hover:bg-gold-dark text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl hover:shadow-gold-dark/20"
          >
            Sponsor Now
          </button>

          {/* Watch Video → links to about page (or swap for a modal later) */}
          <Link href="/about" className="w-full sm:w-auto">
            <button className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm transition-all duration-300">
              <Play size={16} className="fill-zinc-900" />
              Watch Video
            </button>
          </Link>
        </motion.div>
      </div>

      {/* 5-Column Cards Layout */}
      <div className="w-full mx-auto px-4 sm:px-6 z-10 relative mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-end">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Tall Dark Card → scrolls to tiers */}
            <button
              onClick={() => scrollToSection("sponsor-tiers")}
              className="bg-zinc-900 rounded-4xl rounded-tr-none p-6 h-88 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500 text-left w-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <div>
                <h3 className="text-white text-5xl font-bold font-serif mb-4">100%</h3>
                <p className="text-zinc-400 font-sans text-sm leading-relaxed pr-4">
                  Commitment to preserving and advancing Anioma heritage for future generations.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white font-medium text-sm">Sponsor Us</span>
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-zinc-900 group-hover:bg-white transition-colors">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </button>
            
            {/* Short Dark Card → links to about */}
            <Link href="/about">
              <div className="bg-zinc-800 rounded-3xl p-6 h-32 flex items-center gap-4 hover:bg-zinc-900 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-zinc-600 flex items-center justify-center shrink-0">
                  <Smile size={24} className="text-zinc-400" />
                </div>
                <p className="text-white font-medium text-base leading-tight">Let our culture be heard</p>
              </div>
            </Link>
          </motion.div>

          {/* Column 2 — image card → scrolls to why section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-112 relative rounded-4xl rounded-tl-none overflow-hidden group cursor-pointer"
            onClick={() => scrollToSection("sponsor-why")}
          >
            <Image src={DSC_38} alt="Anioma Culture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 pr-6">
              <span className="text-white/80 text-xs uppercase tracking-widest font-bold mb-2 block">Heritage</span>
              <p className="text-white font-serif text-2xl leading-tight">Empowering youth & celebrating traditions</p>
            </div>
          </motion.div>

          {/* Column 3 — View Tiers → scrolls to tiers */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-80 bg-zinc-100 rounded-4xl p-6 flex flex-col items-center justify-center text-center relative group hover:bg-zinc-200 transition-colors"
          >
            <h3 className="text-zinc-900 font-serif text-3xl font-bold mb-6">Join 50+<br/>Corporate Partners</h3>
            <button
              onClick={() => scrollToSection("sponsor-tiers")}
              className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gold-dark transition-colors mt-auto"
            >
              View Tiers
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </motion.div>

          {/* Column 4 — image card → scrolls to why section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-112 relative rounded-4xl rounded-tl-none overflow-hidden group cursor-pointer"
            onClick={() => scrollToSection("sponsor-why")}
          >
            <Image src={DSC_63} alt="OFAAC Education" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 pr-6">
              <span className="text-white/80 text-xs uppercase tracking-widest font-bold mb-2 block">Impact</span>
              <p className="text-white font-serif text-2xl leading-tight">Funding education & community projects</p>
            </div>
          </motion.div>

          {/* Column 5 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Tall Gold Card → scrolls to partners */}
            <button
              onClick={() => scrollToSection("sponsor-partners")}
              className="bg-gold/20 rounded-4xl rounded-tr-none p-6 h-88 flex flex-col justify-between relative overflow-hidden group hover:bg-gold/30 transition-all duration-500 text-left w-full"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-gold/40 via-transparent to-transparent opacity-50" />
              <div className="z-10 mt-12">
                 <h3 className="text-zinc-900 font-serif text-4xl font-bold leading-tight">Expand Your <br/>Impact</h3>
              </div>
              <div className="flex items-center justify-between mt-auto z-10">
                <span className="text-zinc-900 font-medium text-sm">Explore More</span>
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white group-hover:bg-gold-dark transition-colors">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </button>
            
            {/* Short Dark Card → links to contact */}
            <Link href="/contact">
              <div className="bg-zinc-900 rounded-3xl p-6 h-32 flex items-center gap-4 hover:bg-zinc-800 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Heart size={24} className="text-gold" fill="currentColor" />
                </div>
                <p className="text-white font-serif text-lg leading-tight">Your home for culture</p>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
