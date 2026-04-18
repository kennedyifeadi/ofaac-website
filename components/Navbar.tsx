"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Leadership", href: "/leadership" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300"
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`flex items-center overflow-hidden transition-colors duration-300 ${
          isScrolled
            ? "w-[90%] md:w-[80%] max-w-6xl mx-auto rounded-full bg-white/70 backdrop-blur-md shadow-lg border border-white/20 border-b-white/20 px-6 py-3 mt-4"
            : "w-full max-w-full mx-auto rounded-none bg-white border-b-black px-6 md:px-12 py-4 mt-0"
        }`}
      >
        {/* Extreme Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-2xl text-gold-dark">
              OFAAC
            </span>
          </Link>
        </div>

        {/* Center/Right alignment: Nav Options grouped towards the CTA */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-medium text-sm text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link
            href="/sponsor"
            className="flex items-center gap-2 bg-linear-to-r from-gold to-gold-dark text-white px-5 py-2.5 rounded-full font-medium text-sm hover:shadow-md hover:opacity-90 transition-all duration-200"
          >
            Sponsor Us
          </Link>
        </div>

        {/* Mobile Menu Button - simple placeholder for now */}
        <div className="md:hidden flex items-center">
          <button className="text-foreground p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
