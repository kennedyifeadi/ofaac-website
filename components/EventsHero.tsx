"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import DSC_41 from "@/public/DSC_41.jpg";
import DSC_47 from "@/public/DSC_47.jpg";
import DSC_63 from "@/public/DSC_63.jpg"; // Let's use some existing ones

export default function EventsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-12 pb-16 md:pt-24 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6 text-gold font-sans tracking-widest text-xs font-semibold uppercase"
          >
            <CalendarDays size={16} />
            <span>Discover Events</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-zinc-900 mb-8 tracking-tight"
          >
            A Calendar of <br className="hidden lg:block"/>
            <span className="text-gold-dark font-script font-normal">Culture &</span> <br className="hidden lg:block"/>
            Community
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl"
          >
            At the Organization for the Advancement of Anioma Culture (OFAAC), our commitment to preserving and promoting the rich heritage of the Anioma people comes alive through a dynamic calendar of events. These gatherings serve as vibrant platforms for cultural expression, community engagement, and intellectual discourse. From the exhilarating Anioma Cultural Festival to the thought-provoking Anioma Annual Lecture Series, each event is a testament to the enduring spirit and traditions of our nation. 
            <br/><br/>
            Join us as we celebrate our past, enrich our present, and build a culturally vibrant future.
          </motion.p>
        </div>

        {/* Right Staggered Floating Image Area (Inspired by reference wireframe) */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="absolute top-0 md:top-10 right-10 md:right-45 w-[45%] aspect-square rounded-3xl overflow-hidden z-20"
          >
            <Image 
              src={DSC_41}
              alt="Cultural Performance"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="absolute bottom-10 left-0 md:left-10 w-[55%] aspect-square md:aspect-4/3 rounded-3xl overflow-hidden z-30 border-4 border-white"
          >
            <Image 
              src={DSC_47}
              alt="Audience at an OFAAC Event"
              fill
              sizes="(max-width: 768px) 60vw, 40vw"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 50 }}
            className="absolute -right-10 bottom-0 w-[40%] aspect-3/5 rounded-3xl overflow-hidden z-10 hidden md:block"
          >
            <Image 
               src={DSC_63}
               alt="Traditional Dance"
               fill
               sizes="25vw"
               className="object-cover opacity-80"
            />
            {/* Subtle overlay to push it back visually */}
            <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
