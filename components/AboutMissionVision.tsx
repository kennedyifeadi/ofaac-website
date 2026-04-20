"use client";

import { motion } from "framer-motion";
import { Crosshair, Eye } from "lucide-react";

export default function AboutMissionVision() {
  return (
    <section className="w-full bg-white text-black py-10 px-6 sm:px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
        

        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col relative z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-gold/30 bg-gold-dark/10 text-gold">
              <Crosshair size={20} strokeWidth={1.5} />
            </span>
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold">Our Mission</h3>
          </div>
          
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight font-medium text-black">
            To preserve, promote, and advance the appreciation and development of the rich cultural heritage of the <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gold mx-2">Anioma</span> people and Nigeria, fostering unity, pride, and a strong sense of identity.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col relative z-10 md:pt-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-gold/30 bg-gold-dark/10 text-gold">
              <Eye size={20} strokeWidth={1.5} />
            </span>
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold">Our Vision</h3>
          </div>
          
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight font-medium text-black">
            To cultivate a vibrant cultural landscape where Anioma traditions thrive, empowering future generations and showcasing the profound beauty of our heritage to the world.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
