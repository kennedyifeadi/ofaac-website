"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import DSC_38 from "@/public/DSC_38.jpg";

export default function SponsorCTA() {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-12 bg-background">
      <div className="mx-auto w-full relative overflow-hidden rounded-2xl md:rounded-[3rem] min-h-[500px] flex items-center">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={DSC_38} 
            alt="Anioma Culture Background" 
            fill 
            sizes="100vw"
            className="object-cover"
          />
          {/* Heavy gradient fade from Left (black) to Right (transparent) */}
          <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/80 to-black/30" />
        </div>

        {/* Content Area - STRICTLY LEFT ALIGNED matching inspiration */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-16 py-16 flex flex-col items-start justify-center">
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            Become a Partner <br />
            <span className="font-script text-gold-dark">Today!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-10"
          >
            Join us in our endeavor to preserve and promote the rich cultural heritage of the Anioma people. For more information on how to become a sponsor or to discuss a customized partnership package, please contact us today.
          </motion.p>

          {/* Buttons Row matching the inspiration image specifically */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Filled Button */}
            <a href="mailto:sponsorship@ofaac.org" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gold-dark text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs lg:text-sm hover:bg-gold transition-all duration-300 transform">
                <Mail size={16} strokeWidth={2.5} />
                Email Us
              </button>
            </a>

            {/* Secondary Outline/Ghost Button */}
            <a href="tel:+2348033070480" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs lg:text-sm hover:bg-white/10 hover:border-white transition-all duration-300 transform">
                <Phone size={16} strokeWidth={2.5} />
                Call +234 803 307 0480
              </button>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
