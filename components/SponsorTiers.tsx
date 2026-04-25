"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SponsorshipForm from "./SponsorshipForm";

const tiers = [
  {
    name: "Bronze Tier",
    subtitle: "Cultural Contributor",
    description: "Vital contributors to our mission, helping to sustain cultural programs and community outreach.",
    color: "zinc",
    popular: false,
    benefits: [
      "Brand Visibility on website & event signage",
      "Public Acknowledgment in event programs",
      "Complimentary general admission tickets",
      "Social Media Acknowledgment"
    ]
  },
  {
    name: "Gold Tier",
    subtitle: "Premier Cultural Patron",
    description: "Recognized as a premier partner, receiving the highest level of visibility and engagement opportunities.",
    color: "gold",
    popular: true,
    benefits: [
      "Exclusive Branding across all major channels",
      "Event Naming Rights for specific stages/sessions",
      "VIP Access & royal banquet invitations",
      "Keynote Speaking Opportunities",
      "Premium Exhibition Space at festivals",
      "Extensive Social Media Spotlight features",
      "Personalized Annual Impact Report"
    ]
  },
  {
    name: "Silver Tier",
    subtitle: "Valued Cultural Supporter",
    description: "Crucial supporters of OFAAC initiatives, gaining significant brand exposure and community recognition.",
    color: "zinc-dark",
    popular: false,
    benefits: [
      "Prominent Branding on banners & website",
      "Acknowledgment during ceremonies",
      "Complimentary VIP passes to select events",
      "Standard Exhibition Space at festivals",
      "Regular Social Media Mentions & tags",
      "Feature inclusion in OFAAC Newsletter"
    ]
  }
];

export default function SponsorTiers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  const handleSelectPackage = (tierName: string) => {
    setSelectedTier(tierName);
    setIsModalOpen(true);
  };

  return (
    <section id="sponsor-tiers" className="w-full bg-white py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-xs font-bold uppercase tracking-widest text-gold-dark"
          >
            <span>Sponsorship Packages</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif text-zinc-900 leading-tight mb-6"
          >
            Find Your Perfect <br className="hidden sm:block"/> Partnership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-zinc-500 leading-relaxed text-base md:text-lg"
          >
            We offer a range of sponsorship tiers designed to provide mutual benefits and cater to various levels of engagement. Each tier offers distinct opportunities for visibility and impact.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 xl:gap-8">
          {tiers.map((tier, idx) => {
            const isGold = tier.color === "gold";
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`w-full max-w-md lg:w-1/3 flex flex-col rounded-3xl relative overflow-hidden transition-all duration-300 ${
                  isGold 
                    ? "bg-zinc-900 text-white shadow-2xl scale-100 lg:scale-105 z-10 border-none py-12 px-8" 
                    : "bg-white text-zinc-900 shadow-xl shadow-zinc-100 border border-zinc-100 py-10 px-8"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-0 inset-x-0 w-full bg-linear-to-r from-gold to-gold-dark text-center py-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Most Impactful</span>
                  </div>
                )}
                
                {/* Card Header */}
                <div className={`mb-8 ${tier.popular ? 'mt-4' : ''}`}>
                  <h3 className={`font-serif text-3xl font-bold mb-2 ${isGold ? 'text-white' : 'text-zinc-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`font-sans text-sm font-semibold uppercase tracking-widest mb-4 ${isGold ? 'text-gold' : 'text-gold-dark'}`}>
                    {tier.subtitle}
                  </p>
                  <p className={`font-sans text-sm leading-relaxed ${isGold ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {tier.description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="flex-1">
                  <ul className="flex flex-col gap-4">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isGold ? 'bg-gold/20 text-gold' : 'bg-zinc-100 text-zinc-700'}`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`font-sans text-sm leading-relaxed ${isGold ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button 
                  onClick={() => handleSelectPackage(tier.name)}
                  className={`mt-10 w-full py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                  isGold 
                    ? "bg-gold hover:bg-white text-zinc-900" 
                    : "bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-900"
                }`}>
                  Select Package
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal Overlay */}
      <SponsorshipForm 
        tier={selectedTier} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
