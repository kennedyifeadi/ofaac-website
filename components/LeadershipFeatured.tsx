"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface LeadershipFeaturedProps {
  name: string;
  role: string;
  bio: string;
  bullets?: string[];
  reverse?: boolean;
}

export default function LeadershipFeatured({
  name,
  role,
  bio,
  bullets,
  reverse = false,
}: LeadershipFeaturedProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20 w-full max-w-6xl mx-auto py-10`}>
      
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-full max-w-md aspect-4/5 rounded-2xl bg-zinc-100 flex flex-col items-center justify-center text-zinc-400 overflow-hidden shadow-xl border border-zinc-200">
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-bold text-zinc-800 shadow-sm z-10 border border-zinc-100">
            {role}
          </div>
          
          {/* Professional Text Placeholder */}
          <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
             <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center mb-2">
               <span className="text-2xl font-serif text-zinc-500">{name.charAt(0)}</span>
             </div>
             <p className="font-sans text-sm font-medium tracking-widest uppercase text-zinc-400">Portrait Placeholder</p>
             <p className="text-xs text-zinc-400/80">Image will be updated shortly</p>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col items-start"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-6">{name}</h2>
        <p className="text-zinc-600 font-sans leading-relaxed mb-8">
          {bio}
        </p>

        {/* Social Icons (matching reference design) */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-gold-dark hover:border-gold transition-colors cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </div>
          <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-gold-dark hover:border-gold transition-colors cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </div>
          <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-gold-dark hover:border-gold transition-colors cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
        </div>

        {/* Bullets Section */}
        {bullets && bullets.length > 0 && (
          <div className="w-full">
            <h3 className="text-xl font-bold font-serif text-zinc-900 mb-6">Key Contributions & Legacy</h3>
            <ul className="flex flex-col gap-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                  <span className="text-zinc-600 font-sans text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}
