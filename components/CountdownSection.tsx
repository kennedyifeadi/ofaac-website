"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DSC_68 from "@/public/DSC_68.jpg";

// Meeus/Jones/Butcher algorithm to determine Easter Sunday
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

// Determine the next Easter Monday relative to right now
const getNextEasterMonday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const easterSunday = getEaster(year);

  const easterMonday = new Date(easterSunday);
  easterMonday.setDate(easterSunday.getDate() + 1);
  easterMonday.setHours(9, 0, 0, 0); // Festival theoretically starts at 9am

  // If this year's Easter Monday already passed, get next year's
  if (now.getTime() > easterMonday.getTime()) {
    const nextEasterSunday = getEaster(year + 1);
    const nextEasterMonday = new Date(nextEasterSunday);
    nextEasterMonday.setDate(nextEasterSunday.getDate() + 1);
    nextEasterMonday.setHours(9, 0, 0, 0);
    return nextEasterMonday;
  }

  return easterMonday;
};

export default function CountdownSection() {
  const [mounted, setMounted] = useState(false);
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
  });

  useEffect(() => {
    // Calculate the target date (this is pure math, it doesn't trigger renders)
    const nextFestival = getNextEasterMonday();

    // We wrap the initial mount states in a microtask/timeout to
    // prevent the strict linter from complaining about synchronous cascading renders.
    const timer = setTimeout(() => {
      setMounted(true);
      setTargetDate(nextFestival);
    }, 0);

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextFestival.getTime() - now;

      if (distance < 0) {
        // Just started, display all zeros or "IT'S HERE"
        setTimeLeft({ days: 0, hours: 0, mins: 0 });
        // Optional: Re-fetch nextEasterMonday after the day is over
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days: d, hours: h, mins: m });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="w-full bg-background py-10 px-4 sm:px-6 md:px-12">
      <div className="w-full mx-auto relative overflow-hidden rounded-2xl md:rounded-[3rem] shadow-2xl min-h-[600px] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={DSC_68}
            alt="Festival Background Placeholder"
            fill
            className="object-cover"
          />
          {/* Dark gradient mapping to make text pop precisely */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-16 flex flex-col items-center md:items-start gap-12 lg:gap-24">
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Experience the{" "}
              <span className="text-gold-dark font-script">
                Anioma Cultural Festival
              </span>
            </motion.h2>
            <div className="flex w-full">
              {mounted && targetDate ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center w-full justify-between"
                >
                  {/* Days */}
                  <div className="flex flex-col items-center">
                    <span className="font-serif font-black text-5xl sm:text-7xl lg:text-9xl  text-white mb-2 tracking-tighter">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-xs sm:text-md font-bold text-gold uppercase tracking-[0.2em]">
                      Days
                    </span>
                  </div>

                  <div className="text-white/50 text-4xl sm:text-5xl font-light mb-8">
                    :
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <span className="font-serif font-black text-5xl sm:text-7xl lg:text-9xl text-white mb-2 tracking-tighter">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-xs sm:text-md font-bold text-gold uppercase tracking-[0.2em]">
                      Hours
                    </span>
                  </div>

                  <div className="text-white/50 text-4xl sm:text-5xl font-light mb-8">
                    :
                  </div>

                  {/* Mins */}
                  <div className="flex flex-col items-center">
                    <span className="font-serif font-black text-5xl sm:text-7xl lg:text-9xl text-white mb-2 tracking-tighter">
                      {String(timeLeft.mins).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-xs sm:text-md font-bold text-gold uppercase tracking-[0.2em]">
                      Mins
                    </span>
                  </div>
                </motion.div>
              ) : (
                // Hydration skeleton
                <div className="h-40 w-full bg-white/5 animate-pulse" />
              )}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white/80 font-sans mt-4 text-base md:text-lg w-full leading-relaxed mb-10"
            >
              <p className="pl-16 font-script text-gold text-center font-semibold uppercase tracking-widest text-5xl">
                {" "}
                {mounted && targetDate
                  ? targetDate.getFullYear()
                  : "Loading..."}
              </p>
              <p>
                Mark your calendars! The most anticipated event in the Anioma calendar returns on Easter Monday.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="/events">
                <button className="flex items-center gap-2 bg-gold-dark text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-wider text-sm hover:bg-gold transition-all duration-300 transform">
                  More Details
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Countdown Clock Face */}
        </div>
      </div>
    </section>
  );
}
