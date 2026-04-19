"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight, Crosshair, Eye } from "lucide-react";
import { motion } from "framer-motion";
import LeftImage from "@/public/DSC_64.jpg";
import RightImage from "@/public/DSC_66.jpg";

export default function AboutSection() {
  return (
    <section className="w-full py-10 overflow-hidden text-zinc-900">
      <div className="w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-y-12 lg:gap-x-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="relative w-full aspect-square sm:aspect-4/3 lg:aspect-square overflow-hidden rounded-3xl md:rounded-2xl">
              <Image 
                src={LeftImage} 
                alt="Culture Short Image Placeholder" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 flex flex-col pt-4 lg:pt-8"
          >
            <div className="flex items-center gap-2 mb-6 text-gold font-sans tracking-widest text-xs font-semibold uppercase">
              <Star size={14} className="fill-current" />
              <span>About Us</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-zinc-900">
              The Preeminent Cultural Umbrella Body
            </h2>
            
            <p className="font-sans text-sm md:text-base leading-relaxed text-zinc-600 mb-8">
              The Organization for the Advancement of Anioma Culture (OFAAC) stands nestled within Delta State, Nigeria. Established in November 2003, OFAAC emerged from a profound commitment to safeguard, celebrate, and propel forward the unique cultural tapestry of the Anioma nation as a non-governmental and non-political entity.
            </p>

            <Link href="/about" className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest uppercase border-b-2 border-zinc-900 pb-1 w-max hover:text-gold-dark hover:border-gold-dark transition-colors group">
              More About Us
              <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-3 lg:row-span-2 flex flex-col justify-end"
          >
            <div className="relative w-full h-[500px] lg:h-full lg:min-h-[850px] overflow-hidden rounded-3xl md:rounded-2xl origin-bottom">
              <Image 
                src={RightImage} 
                alt="Culture Tall Image Placeholder" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000 object-[90%_10%]" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="lg:col-span-7 flex flex-col lg:pt-8 mt-4 lg:mt-0"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-zinc-900 mb-10 pb-6 border-b border-zinc-300">
              About <span className="text-gold-dark font-script">Ndi</span> Anioma
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              
              {/* Mission Block */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-sans font-bold text-lg text-zinc-900">Mission</h4>
                  <Crosshair strokeWidth={1} size={28} className="text-zinc-400" />
                </div>
                <p className="font-sans text-sm md:text-base leading-relaxed text-zinc-600">
                  To preserve, promote, and advance the appreciation and development of the rich cultural heritage of the Anioma people and Nigeria, fostering unity, pride, and a strong sense of identity.
                </p>
              </div>

              {/* Vision Block */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-sans font-bold text-lg text-zinc-900">Vision</h4>
                  <Eye strokeWidth={1} size={28} className="text-zinc-400" />
                </div>
                <p className="font-sans text-sm md:text-base leading-relaxed text-zinc-600">
                  To cultivate a vibrant cultural landscape where Anioma traditions thrive, empowering future generations and showcasing the profound beauty of our heritage to the world.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
