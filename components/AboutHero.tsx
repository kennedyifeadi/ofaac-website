"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// The path to your local video inside the /public folder
const AboutUsVid = "/AboutUsVid.mp4";

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wrap in a micro-task to satisfy the strict linter regarding synchronous cascading renders
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[150vh] bg-white">
      {/* 
        Container forces height to 150vh to allow for scrolling after the animation, 
        but the hero illusion takes exactly 100vh fixed relative to the screen. 
      */}
      
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* ============================================================== */}
        {/* LAYER 1 (Z-0): THE PERSISTENT BACKGROUND VIDEO                 */}
        {/* This video plays eternally in the background and is ONLY       */}
        {/* visible through the transparent 'cutout' of the black text   */}
        {/* ============================================================== */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video 
            src={AboutUsVid} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          />
        </div>

        {/* ============================================================== */}
        {/* LAYER 2 (Z-10): THE CUTOUT TEXT MASK                           */}
        {/* Uses mix-blend-screen. The white background remains opaque     */}
        {/* white, hiding the background video. The black text becomes     */}
        {/* 100% transparent, serving as a cutout to reveal Layer 1.     */}
        {/* ============================================================== */}
        <div className="absolute inset-0 z-10 w-full h-full bg-white flex flex-col pointer-events-none mix-blend-screen">
          {/* We add a spacer to push the text below the navbar area */}
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 pt-6 md:pt-8 shrink-0">
            <h1 className="text-black font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] w-full max-w-[90vw] lg:max-w-[75vw] leading-[1.05] tracking-tight antialiased">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-sans tracking-widest uppercase mb-4 text-zinc-900 border-b border-zinc-900 pb-2 w-max">Our Story</span>
              Preserving and Advancing <span className="text-zinc-600">Anioma Culture</span>
            </h1>
          </div>
          {/* Fills the rest of the height with opaque white */}
          <div className="w-full grow bg-white" />
        </div>

        {/* ============================================================== */}
        {/* LAYER 3 (Z-20): THE FOREGROUND SLIDING VIDEO                   */}
        {/* Exact same video instance. Initially covers 100vh / 100vw.     */}
        {/* After 1.5 seconds, it smoothly animates down to 60vh,          */}
        {/* rounding its corners, and reveals the text/masking behind it.  */}
        {/* ============================================================== */}
        {mounted && (
          <motion.div
            initial={{ 
              width: "100vw", 
              height: "100vh", 
              top: "0px", 
              borderRadius: "0px",
              scale: 1
            }}
            animate={{ 
              width: "92vw", 
              height: "60vh", 
              top: "40vh", // Pushes it down below the text cleanly
              borderRadius: "2rem",
              scale: 1 
            }}
            transition={{ 
              duration: 1.8, 
              delay: 1, 
              ease: [0.76, 0, 0.24, 1] // Custom snappy spring-like bezier
            }}
            className="absolute left-0 right-0 mx-auto overflow-hidden z-20 pointer-events-none"
          >
            <video 
              src={AboutUsVid} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover scale-[1.05] object-[0%_30%]" 
              // Scale slightly offsets the edge to make it look cinematic
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
