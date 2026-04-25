"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Mail, MapPin } from "lucide-react";

const contactBlocks = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      "+234 803 307 0480",
      "+234 812 382 5314",
      "+234 803 403 1985",
      "+234 803 308 6618",
      "+234 803 305 3183",
      "+234 703 460 1607",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: [
      "Monday – Friday: 9am – 5pm",
      "Saturday: By appointment",
      "Sunday: Closed",
    ],
  },
  {
    icon: Mail,
    title: "Write to Us",
    lines: [
      "info@ofaac.org",
      "partnerships@ofaac.org",
    ],
  },
  {
    icon: MapPin,
    title: "Our Offices",
    lines: [
      "287 Nnebisi Road, Asaba, Delta State",
      "1 Engineering Close, V/Island, Lagos",
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="w-full bg-zinc-50 py-20 px-6 md:px-12 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {contactBlocks.map((block, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.08, duration: 0.6 }}
            className="flex flex-col items-center text-center gap-4"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm">
              <block.icon size={20} strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="font-sans font-bold text-zinc-900 text-base">{block.title}</h3>

            {/* Lines */}
            <div className="flex flex-col gap-1">
              {block.lines.map((line, i) => (
                <p key={i} className="font-sans text-zinc-500 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
