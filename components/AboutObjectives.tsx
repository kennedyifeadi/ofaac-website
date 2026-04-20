"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import DSC_38 from "@/public/DSC_38.jpg";
import DSC_41 from "@/public/DSC_41.jpg";
import DSC_47 from "@/public/DSC_47.jpg";
import DSC_56 from "@/public/DSC_56.jpg";
import DSC_64 from "@/public/DSC_64.jpg";
import DSC_66 from "@/public/DSC_66.jpg";

const objectives = [
  {
    title: "Preservation & Promotion",
    description: "To diligently preserve, promote, and advance the appreciation and development of the rich cultural heritage of the Anioma people and Nigeria.",
    image: DSC_38
  },
  {
    title: "Youth Empowerment",
    description: "To instill positive self-esteem and a natural identity among the youth, connecting them with their roots.",
    image: DSC_41
  },
  {
    title: "Traditional Attire Advocacy",
    description: "To promote the widespread use and appreciation of traditional Anioma attires, such as the iconic Akwa-Ocha.",
    image: DSC_47
  },
  {
    title: "Crafts & Economic Development",
    description: "To encourage traditional crafts for technological advancement, tourism, and economic stabilization in rural areas.",
    image: DSC_56
  },
  {
    title: "Research & Documentation",
    description: "To conduct thorough research and meticulous documentation of our cultural heritage, ensuring its legacy for future generations.",
    image: DSC_64
  },
  {
    title: "Global Outreach",
    description: "To package and promote the unique culture of Anioma for national and international tourism.",
    image: DSC_66
  }
];

export default function AboutObjectives() {
  return (
    <section className="w-full bg-background text-zinc-900 py-10 md:py-32 px-6 sm:px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-gold-dark block mb-4">
            Core Objectives
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900">
            Pillars of Our <span className="font-script text-gold-dark text-5xl sm:text-6xl lg:text-7xl">Endeavor</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <motion.div 
              key={obj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative w-full aspect-[4/5] sm:min-h-[450px] lg:h-[500px] rounded-[1.5rem] overflow-hidden group shadow-lg"
            >
              <Image 
                src={obj.image} 
                alt={obj.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              
              {/* Grandient Overlay to make text legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 flex flex-col justify-end text-white">
                <h3 className="font-sans text-2xl font-bold mb-3 tracking-tight">
                  {obj.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  {obj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
