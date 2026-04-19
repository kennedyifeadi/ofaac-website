"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, BookOpen, ArrowUpRight } from "lucide-react";
import DSC_38 from "@/public/DSC_38.jpg";
import DSC_41 from "@/public/DSC_41.jpg";
import DSC_47 from "@/public/DSC_47.jpg";
import DSC_56 from "@/public/DSC_56.jpg";

const eventsData = [
  {
    id: 0,
    shortTitle: "Anioma Cultural Festival",
    title: "Anioma Cultural Festival",
    text: "Each year, the Anioma Cultural Festival brings together our community in a vibrant celebration. The journey started in 2004 with the inaugural edition and has since been held every year on Easter Monday, gracefully honoring our traditions.",
    image: DSC_38, 
    linkText: "Explore Festival"
  },
  {
    id: 1,
    shortTitle: "Anioma Lecture Series",
    title: "Annual Lecture Series",
    text: "Since its inception in 2005, the Anioma Annual Lecture Series has provided a critical platform for intellectual engagement on topics vital to Anioma culture and development. Featuring renowned scholars, these lectures foster dialogue for good governance.",
    image: DSC_41, 
    linkText: "Read Archives"
  },
  {
    id: 2,
    shortTitle: "Research & Publication",
    title: "Research & Publication",
    text: "In fulfillment of the yearning desire to create a sense of natural identity among the people, OFAAC engages in deep research and documentation. This structural foundation powers the Anioma Essence Magazine and extensive compilation DVDs.",
    image: DSC_47, 
    linkText: "View Publications"
  },
  {
    id: 3,
    shortTitle: "Micro Credit Scheme",
    title: "Micro Credit Scheme",
    text: "OFAAC is saddled with the onerous task of helping boost small scale businesses within the Anioma communities. By engaging interested participants in entrepreneurial development, our scheme has successfully empowered over 1000 individuals to date.",
    image: DSC_56, 
    linkText: "Learn More"
  }
];

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-10 overflow-hidden text-zinc-900">
      <div className="w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Region */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4 text-gold font-sans tracking-widest text-xs font-semibold uppercase">
            <Heart size={14} className="fill-current " />
            <span>Our Events</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-zinc-900">
            What we offer?
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-zinc-500 max-w-2xl">
            From vibrant cultural celebrations to intellectual academic sessions and structural financial empowerment—we have dedicated programs uplifting the Anioma spirit safely toward the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-3 flex flex-col gap-3">
            {eventsData.map((event, index) => (
              <button
                key={event.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-6 py-5 rounded-2xl font-sans font-medium text-sm md:text-base transition-all duration-500 ${
                  activeTab === index 
                    ? "bg-gold text-background scale-[1.02]" 
                    : "bg-[#EAE6DF] text-zinc-600 hover:bg-[#E2DED5]" 
                }`}
              >
                {event.shortTitle}
              </button>
            ))}
          </div>

          <div className="lg:col-span-4 w-full aspect-3/4 lg:aspect-4/5 relative rounded-3xl md:rounded-[2.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 1, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={eventsData[activeTab].image}
                  alt={eventsData[activeTab].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2 mb-6 text-zinc-400 font-sans tracking-widest text-[10px] font-semibold uppercase">
                  <BookOpen size={12} className="text-zinc-500" />
                  <span>OFAAC Archive</span>
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-zinc-900 mb-8">
                  {eventsData[activeTab].title.split(' ')[0]}{" "}
                  <span className="font-serif italic font-bold">
                    {eventsData[activeTab].title.substring(eventsData[activeTab].title.indexOf(' ') + 1)}
                  </span>
                </h3>

                <p className="font-sans text-sm md:text-base leading-relaxed text-zinc-500 mb-8 max-w-lg">
                  {eventsData[activeTab].text}
                </p>
                
                <div className="flex items-center gap-4 bg-[#EAE6DF] w-max px-5 py-4 rounded-2xl mb-10">
                   <div className="text-gold-dark">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                   </div>
                   <span className="font-sans text-xs font-semibold text-zinc-700 tracking-wide">
                     Advancing Anioma Culture
                   </span>
                </div>

                <Link href="/events" className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest uppercase border-b-2 border-zinc-900 pb-1 w-max hover:text-gold-dark hover:border-gold-dark transition-colors group">
                  {eventsData[activeTab].linkText}
                  <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
