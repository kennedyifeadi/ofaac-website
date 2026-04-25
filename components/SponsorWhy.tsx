"use client";

import { motion } from "framer-motion";
import { Tent, BookOpen, Users, Globe2 } from "lucide-react";
import Image from "next/image";
import DSC_47 from "@/public/DSC_47.jpg"; // Using a beautiful image for the center

const reasons = [
  {
    icon: Tent,
    title: "Annual Cultural Festival",
    description: "Organize the flagship Anioma Cultural Festival that draws thousands and showcases the absolute best of our arts, dances, and traditions."
  },
  {
    icon: BookOpen,
    title: "Educational Programs",
    description: "Fund research initiatives and educational programs that meticulously document and disseminate Anioma history and values to the next generation."
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "Support direct community projects, such as our micro-credit schemes and health insurance programs, which directly uplift the Anioma people."
  },
  {
    icon: Globe2,
    title: "Tourism & Exchange",
    description: "Promote cultural exchange and tourism, bringing the beauty, warmth, and vibrancy of Anioma to a wider national and international audience."
  }
];

export default function SponsorWhy() {
  return (
    <section id="sponsor-why" className="w-full bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-serif text-zinc-900 leading-tight"
            >
              Why Partner with <br/> <span className="text-gold-dark">OFAAC?</span>
            </motion.h2>
          </div>
          <div className="md:w-1/2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-zinc-500 leading-relaxed text-base md:text-lg"
            >
              Partnering with OFAAC offers a unique opportunity to align your brand with a highly respected cultural institution and demonstrate a profound commitment to social responsibility and community development.
            </motion.p>
          </div>
        </div>

        {/* New Desktop Layout (3 columns: Cards Left, Image Center, Cards Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left Column (Reasons 0 and 1) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {[reasons[0], reasons[1]].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-zinc-100/80 p-8 rounded-4xl flex flex-col h-full justify-between group hover:bg-zinc-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center mb-10 text-white shadow-sm">
                  <reason.icon size={20} strokeWidth={2} />
                </div>
                <p className="font-sans text-zinc-500 leading-relaxed text-[15px]">
                  <span className="font-semibold text-zinc-900 mr-1.5">{reason.title}</span> 
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column (Large Vertical Image) */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8 }}
             className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-4xl overflow-hidden"
          >
            <Image 
              src={DSC_47} 
              alt="Partner with OFAAC" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>

          {/* Right Column (Reasons 2 and 3) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {[reasons[2], reasons[3]].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-zinc-100/80 p-8 rounded-4xl flex flex-col h-full justify-between group hover:bg-zinc-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center mb-10 text-white shadow-sm">
                  <reason.icon size={20} strokeWidth={2} />
                </div>
                <p className="font-sans text-zinc-500 leading-relaxed text-[15px]">
                  <span className="font-semibold text-zinc-900 mr-1.5">{reason.title}</span> 
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
