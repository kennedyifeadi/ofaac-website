"use client";

import { motion } from "framer-motion";

const partners = [
  "Grand Oak Ltd",
  "MTN Nigeria",
  "West African Food Seasoning",
  "911 Energy Drink",
  "Brian Munro Ltd",
  "Orchid Hotels, Asaba",
  "Union Bank of Nigeria",
  "Zenith Bank Plc"
];

export default function SponsorPartners() {
  return (
    <section id="sponsor-partners" className="w-full bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-4">
            Our Valued Partners
          </h2>
          <p className="font-sans text-zinc-500 max-w-2xl mx-auto">
            We are incredibly grateful for the support of our past and present partners who have helped us achieve our mission. Their commitment to Anioma culture is invaluable.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="bg-white rounded-2xl h-24 md:h-32 flex items-center justify-center p-4 border border-zinc-100 hover:border-gold/30 transition-all group grayscale hover:grayscale-0"
            >
              <p className="font-sans font-bold text-zinc-400 group-hover:text-zinc-900 text-sm md:text-base text-center transition-colors">
                {partner}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-sans text-sm text-zinc-400 italic"
        >
          ...and many more dedicated individuals and organizations.
        </motion.p>
      </div>
    </section>
  );
}
