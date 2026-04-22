"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, History, BookOpen } from "lucide-react";

export default function EventsArchive() {
  const festivals = [
    { year: "2025", title: "Anioma Cultural Festival 2025", link: "/gallery" },
    { year: "2024", title: "Anioma Cultural Festival 2024", link: "/gallery" },
    { year: "2023", title: "Anioma Cultural Festival 2023", link: "/gallery" },
  ];

  const lectures = [
    {
      year: "2006",
      theme: "Integration of Indigenous Architecture in Contemporary Housing Development in Nigeria.",
      speaker: "Sir S.P.O. Fortune Ebie",
      chair: "Chief Ernest A.O. Shonekan GCFR, CBE",
    },
    {
      year: "2005",
      theme: "ANIOMA CULTURE: The past, the present and the future.",
      speaker: "Chief Newton Jibunoh",
      chair: "Late Ambassador Segun Olusola",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 md:px-12 border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4 text-zinc-500 font-sans tracking-widest text-xs font-semibold uppercase"
          >
            <History size={16} />
            <span>Past Events</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            A Rich Tapestry of <span className="font-script font-normal text-gold-dark text-4xl sm:text-5xl md:text-6xl">History</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base text-zinc-600 leading-relaxed"
          >
            OFAAC has a proud history of impactful events that have shaped the cultural landscape of the Anioma nation. Our archives document years of dedication to cultural preservation and promotion.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Column 1: Festival Archive */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-zinc-200">
              <div className="w-12 h-12 rounded-full bg-gold-dark/10 flex items-center justify-center text-gold-dark">
                <History size={20} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-zinc-900">Cultural Festival Archive</h3>
            </div>
            <p className="font-sans text-sm text-zinc-500 mb-8 leading-relaxed">
              Explore highlights from previous festivals, witnessing the evolution of our traditions and the unwavering spirit of our people since 2004.
            </p>

            <ul className="flex flex-col gap-4">
              {festivals.map((fest) => (
                <li key={fest.year}>
                  <Link 
                    href={fest.link}
                    className="group bg-[#FAF9F6] border border-zinc-100 hover:border-gold/40 p-6 rounded-2xl flex items-center justify-between transition-all duration-300 hover:shadow-md"
                  >
                    <div>
                      <span className="font-sans text-xs font-bold text-gold uppercase tracking-widest block mb-1">
                        {fest.year}
                      </span>
                      <span className="font-serif text-lg font-medium text-zinc-900 group-hover:text-gold-dark transition-colors">
                        {fest.title}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-gold-dark group-hover:text-white group-hover:border-gold-dark transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-4 text-center">
                <span className="font-sans text-sm italic text-zinc-400">...and many more dating back to 2004!</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Lecture Series */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-zinc-200">
              <div className="w-12 h-12 rounded-full bg-gold-dark/10 flex items-center justify-center text-gold-dark">
                <BookOpen size={20} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-zinc-900">Annual Lecture Series</h3>
            </div>
            <p className="font-sans text-sm text-zinc-500 mb-8 leading-relaxed">
              Since 2005, providing a critical platform for intellectual engagement, fostering dialogue, and generating ideas for good governance and national rebirth.
            </p>

            <ul className="flex flex-col gap-6">
              {lectures.map((lec) => (
                <li 
                  key={lec.year}
                  className="bg-white border border-zinc-200 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm"
                >
                  <span className="font-sans text-xs font-bold text-gold bg-gold/10 w-max px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                    {lec.year} Lecture
                  </span>
                  <h4 className="font-serif text-xl font-bold text-zinc-900 mb-4 leading-snug">
                    &quot;{lec.theme}&quot;
                  </h4>
                  <div className="flex flex-col gap-1 font-sans text-sm text-zinc-600">
                    <p><strong className="text-zinc-900">Speaker:</strong> {lec.speaker}</p>
                    <p><strong className="text-zinc-900">Chaired by:</strong> {lec.chair}</p>
                  </div>
                </li>
              ))}
              <li className="pt-2 text-center">
                <span className="font-sans text-sm italic text-zinc-400">Further historical lectures will be chronicled here.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
