"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Music, Map, Users, Sparkles, Utensils, Award } from "lucide-react";

// Placeholder images; we'll reuse some we already imported across the app!
import imgDance from "@/public/DSC_63.jpg";
import imgComp from "@/public/DSC_41.jpg";
import imgCrafts from "@/public/DSC_47.jpg";
import imgCuisine from "@/public/DSC_56.jpg";
import imgLive from "@/public/DSC_64.jpg";
import imgComm from "@/public/DSC_66.jpg";

// Reuse Meeus/Jones/Butcher algorithm to automatically track Easter Monday
const getEaster = (year: number) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
};

const getNextEasterMonday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const easterSunday = getEaster(year);

  const easterMonday = new Date(easterSunday);
  easterMonday.setDate(easterSunday.getDate() + 1);
  easterMonday.setHours(9, 0, 0, 0); 

  if (now.getTime() > easterMonday.getTime()) {
    const nextEasterSunday = getEaster(year + 1);
    const nextEasterMonday = new Date(nextEasterSunday);
    nextEasterMonday.setDate(nextEasterSunday.getDate() + 1);
    nextEasterMonday.setHours(9, 0, 0, 0);
    return nextEasterMonday;
  }
  return easterMonday;
};

// Features data mapped from user request, now with images added!
const features = [
  {
    title: "Mesmerizing Dance Arts",
    description: "Witness scintillating displays of legendary Anioma dance arts, including the Royal Dance, Amala, Uloko, Maiden Dance, and contemporary cultural dances from talented youth.",
    icon: <Sparkles className="w-5 h-5 text-gold-dark" strokeWidth={2} />,
    image: imgDance
  },
  {
    title: "Traditional Competitions",
    description: "Experience the thrill of traditional wrestling challenges and the melodious sounds of flute competitions, showcasing the skills and artistry embedded in Anioma culture.",
    icon: <Award className="w-5 h-5 text-gold-dark" strokeWidth={2} />,
    image: imgComp
  },
  {
    title: "Arts & Crafts Exhibition",
    description: "Explore a vibrant marketplace featuring historical artifacts, traditional crafts, and indigenous clothing materials like the Akwa-Ocha presented by local exhibitors.",
    icon: <Map className="w-5 h-5 text-gold-dark" strokeWidth={2} />,
    image: imgCrafts
  },
  {
    title: "Anioma Cuisine",
    description: "Indulge in the most delicious and nutritious Anioma cuisine, a culinary journey that tantalizes the taste buds and reflects the agricultural richness of our land.",
    icon: <Utensils className="w-5 h-5 text-gold-dark" strokeWidth={2} />,
    image: imgCuisine
  },
  {
    title: "Live Entertainment",
    description: "Enjoy popular live bands that thrill the audience, adding an unforgettable rhythm to the festive atmosphere and bringing the community together.",
    icon: <Music className="w-5 h-5 text-gold-dark" strokeWidth={2} />,
    image: imgLive
  },
  {
    title: "Community Unity",
    description: "The festival serves as a powerful rallying point for the unification of Delta’s diverse population in Anioma, promoting communal living, commerce, and tourism.",
    icon: <Users className="w-5 h-5 text-gold-dark" strokeWidth={2} />,
    image: imgComm
  }
];

export default function FestivalHighlight() {
  const [mounted, setMounted] = useState(false);
  const [targetYear, setTargetYear] = useState<number>(2027); // Default to requested year
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });

  useEffect(() => {
    const nextFestival = getNextEasterMonday();
    
    // Defer state update to avoid hydration mismatches
    const timer = setTimeout(() => {
      setMounted(true);
      setTargetYear(nextFestival.getFullYear());
    }, 0);

    const intervalId = setInterval(() => {
      const distance = nextFestival.getTime() - new Date().getTime();

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12 relative -mt-6">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-[90%] md:w-3/4 max-w-4xl bg-white rounded-3xl md:rounded-4xl shadow-xl py-8 px-6 border border-zinc-100 flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-4 relative z-20 -mt-24 md:-mt-32 mb-16"
        >
          {mounted ? (
            <>
              <div className="flex flex-col items-center">
                <span className="font-serif font-bold text-4xl lg:text-5xl text-gold-dark">{String(timeLeft.days).padStart(2, "0")}</span>
                <span className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">Days</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-zinc-200"></div>
              <div className="flex flex-col items-center">
                <span className="font-serif font-bold text-4xl lg:text-5xl text-gold-dark">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">Hours</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-zinc-200"></div>
              <div className="flex flex-col items-center">
                <span className="font-serif font-bold text-4xl lg:text-5xl text-gold-dark">{String(timeLeft.mins).padStart(2, "0")}</span>
                <span className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">Minutes</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-zinc-200"></div>
              <div className="flex flex-col items-center">
                <span className="font-serif font-bold text-4xl lg:text-5xl text-zinc-900">{String(timeLeft.secs).padStart(2, "0")}</span>
                <span className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">Seconds</span>
              </div>
            </>
          ) : (
            <div className="w-full h-16 animate-pulse bg-zinc-100 rounded-xl" />
          )}
        </motion.div>

        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4 text-gold font-sans tracking-widest text-xs font-semibold uppercase"
          >
            <span className="bg-gold-dark/10 text-gold-dark px-4 py-1.5 rounded-full">Upcoming Events</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            The Anioma Cultural Festival {mounted ? targetYear : 2027}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base text-zinc-600 leading-relaxed"
          >
            Prepare for the grandest celebration of Anioma heritage! This flagship event is a spectacular convergence of tradition, art, and community, drawing thousands from across the nine local government areas of Anioma land to Asaba, Delta State.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-4xl overflow-hidden border border-zinc-100 transition-all duration-500 group flex flex-col min-h-[420px]"
            >
              <div className="absolute top-0 left-0 w-full h-56 md:h-64 group-hover:h-full transition-all duration-500 ease-in-out z-0 overflow-hidden">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <div className="absolute top-4 left-4 p-3 z-20">
                  {feature.icon}
                </div>
              </div>

              <div className="h-56 md:h-64 w-full shrink-0" />

              <div className="relative z-10 p-8 flex-1 flex flex-col bg-white group-hover:bg-transparent transition-colors duration-500">
                <h3 className="font-sans font-bold text-xl text-zinc-900 group-hover:text-white transition-colors duration-500 mb-3">{feature.title}</h3>
                <p className="font-sans text-sm md:text-base text-zinc-500 group-hover:text-zinc-200 transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
