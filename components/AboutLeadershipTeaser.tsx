"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutLeadershipTeaser() {
  return (
    <section className="w-full bg-white text-zinc-900 py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-dark" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-gold-dark">
              Our Leadership
            </span>
            <div className="w-12 h-px bg-gold-dark" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-8">
            Guiding the <span className="text-gold-dark italic">Cultural Renaissance</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mb-12">
            OFAAC is steered by a dedicated team of individuals committed to our mission. Our leadership structure includes esteemed Founding Patrons, a Board of Trustees, and a Board of Directors, all working collaboratively to advance Anioma culture. Their vision and tireless efforts are instrumental in our continued success.
          </p>

          <Link href="/leadership">
            <button className="group flex items-center justify-center gap-3 bg-transparent border border-zinc-300 text-zinc-900 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-wider text-sm hover:border-gold-dark hover:bg-gold-dark hover:text-white transition-all duration-300">
              Meet Our Leaders
              <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
