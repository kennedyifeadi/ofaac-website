"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logo from "@/public/OFFAC_Logo.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 text-white font-sans border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-20 pb-10">
        
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src={logo} 
                alt="OFAAC Logo" 
                width={60} 
                height={60} 
                className="rounded-full select-none" 
              />
              <span className="font-serif font-bold text-2xl tracking-wide text-white">
                OFAAC
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              The Organization for the Advancement of Anioma Culture (OFAAC) is dedicated to preserving the dignity, pride, and vibrant heritage of the Anioma people through proactive cultural promotion and foundational empowerment.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:pl-10">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link href="/" className="hover:text-gold transition-colors w-max">Home</Link>
              <Link href="/about" className="hover:text-gold transition-colors w-max">About OFAAC</Link>
              <Link href="/events" className="hover:text-gold transition-colors w-max">Events</Link>
              <Link href="/gallery" className="hover:text-gold transition-colors w-max">Gallery</Link>
              <Link href="/leadership" className="hover:text-gold transition-colors w-max">Leadership</Link>
              <Link href="/blog" className="hover:text-gold transition-colors w-max">Blog</Link>
              <Link href="/contact" className="hover:text-gold transition-colors w-max">Contact Us</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-dark shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Placeholder Address Line 1<br />
                  Asaba, Delta State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone size={18} className="text-gold-dark shrink-0" />
                <a href="tel:+2340000000000">+234 (0) 000 000 0000</a>
              </li>
              <li className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail size={18} className="text-gold-dark shrink-0" />
                <a href="mailto:info@ofaac.org">info@ofaac.org</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Stay Connected</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates on the Anioma Cultural Festival and lectures.
            </p>
            
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm rounded-l-lg px-4 py-3 w-full focus:outline-none focus:border-gold transition-colors"
              />
              <button 
                type="submit" 
                className="bg-gold-dark hover:bg-gold text-white px-4 py-3 rounded-r-lg transition-colors flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Social Icons using raw SVGs since Lucide dropped brand icons */}
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-gold hover:bg-gold-dark/20 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-gold hover:bg-gold-dark/20 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-gold hover:bg-gold-dark/20 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs text-center md:text-left font-medium tracking-wide">
            &copy; {currentYear} Organization for the Advancement of Anioma Culture. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-500 font-medium">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
