"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { projectsData } from "@/lib/projectsData";

export default function HomeProjects() {
  // We grab the specific heritage project
  const heritageProject = projectsData.find(p => p.slug === "heritage-project");

  if (!heritageProject) return null;

  return (
    <section className="w-full bg-background text-zinc-950 py-24 px-6 sm:px-8 md:px-16 overflow-hidden relative">

      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-gold font-sans tracking-widest text-xs font-bold uppercase">
              <Building2 size={16} />
              <span>Ongoing Projects</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-950 mb-6">
              Building the Future of <span className="font-script text-gold-dark text-5xl sm:text-6xl md:text-7xl font-normal">Anioma</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-zinc-500 leading-relaxed">
              Beyond our annual events, OFAAC is committed to lasting infrastructure and development that secures our cultural legacy.
            </p>
          </div>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative rounded-4xl md:rounded-[3rem] overflow-hidden group bg-zinc-900"
        >
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            
            {/* Image Section */}
            <div className="relative w-full lg:w-3/5 h-[300px] lg:h-auto overflow-hidden">
              <Image 
                src={heritageProject.image} 
                alt={heritageProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Gradient overlay for blending */}
              <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-zinc-900 via-transparent to-transparent opacity-80" />
              
              {/* Status Badge */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-gold-dark text-white text-xs font-bold font-sans tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                {heritageProject.status}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-zinc-900">
              <span className="font-sans text-sm font-semibold text-zinc-500 mb-3 block">
                {heritageProject.date}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {heritageProject.title}
              </h3>
              <p className="font-sans text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
                {heritageProject.summary}
              </p>
              
              <Link href={`/projects/${heritageProject.slug}`} className="mt-auto w-max">
                <button className="flex items-center gap-3 bg-white text-zinc-950 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-wider text-sm hover:bg-gold-dark hover:text-white transition-all duration-300 transform group-hover:translate-x-2">
                  Read Full Details <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
