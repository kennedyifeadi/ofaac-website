"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import image from "@/public/ImageOfMap.png"

export default function IntroductionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">

      <div className="w-full mx-auto px-6 sm:px-8 md:px-24 py-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Typography & Actions */}
        <div className="w-full lg:w-[45%] flex flex-col items-start z-10">
          <p className="font-script text-2xl md:text-4xl text-gold-dark mb-4">
            Introduction
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-8">
            Uniting for <span className="text-gold-dark/90">Anioma&apos;s</span> Future.
          </h2>
          
          <div className="space-y-6 text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
            <p>
              Welcome to the official online home of the <strong className="text-foreground font-semibold">Organization for the Advancement of Anioma Culture (OFAAC)</strong>, the premier cultural umbrella body dedicated to the preservation, promotion, and advancement of the unique heritage of the Anioma people.
            </p>
            <p className="font-medium text-foreground italic">
              Join us on a journey to explore the captivating world of Anioma culture.
            </p>
          </div>

          {/* ── Key Festival Stats Strip ── */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-8">
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">20,000<span className="text-gold-dark">+</span></span>
              <span className="font-sans text-xs text-zinc-500 mt-1 leading-snug">Total festival reach annually — online &amp; on-ground</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">9,000<span className="text-gold-dark">+</span></span>
              <span className="font-sans text-xs text-zinc-500 mt-1 leading-snug">Physical attendees at the Anioma Cultural Festival</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">15<span className="text-gold-dark">+</span></span>
              <span className="font-sans text-xs text-zinc-500 mt-1 leading-snug">Traditional rulers &amp; royal leaders attending each edition</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base font-bold text-gold-dark leading-tight mt-1">Easter Monday</span>
              <span className="font-sans text-xs text-zinc-500 mt-1 leading-snug">Unofficially declared <strong className="text-zinc-700">Anioma Day</strong> — celebrated every year</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/about"> 
            <button className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-sans font-bold uppercase tracking-wider text-sm hover:bg-gold-dark transition-all duration-300 transform">
              About Ndi Anioma
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            </Link>
            <Link href="/sponsor"> 
            <button className="flex cursor-pointer items-center gap-2 bg-transparent border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full font-sans font-bold uppercase tracking-wider text-sm hover:border-gold-dark hover:text-gold-dark transition-all duration-300">
              Sponsor Us
            </button>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Layered Map Visual */}
        <div className="w-full lg:w-[55%] hidden md:flex relative min-h-[400px] md:min-h-[500px] items-center justify-center">
          <Image 
            src={image}
            alt="Delta State Map"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
