"use client";

import { motion, Variants } from "framer-motion";

interface Member {
  name: string;
  role: string;
  bio: string;
}

interface LeadershipGridProps {
  title: string;
  description?: string;
  members: Member[];
}

export default function LeadershipGrid({ title, description, members }: LeadershipGridProps) {
  // Stagger animation for the grid items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50 } },
  };

  return (
    <section className="w-full bg-zinc-50 py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 inline-block relative">
              {title}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold"></span>
            </h2>
          </div>
          {description && (
            <div className="md:w-1/2">
              <p className="text-zinc-500 font-sans text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* Grid Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {members.map((member, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-zinc-100">
              
              {/* Image Area */}
              <div className="relative w-full aspect-square bg-zinc-100 flex items-center justify-center border-b border-zinc-100">
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-zinc-800 shadow-sm z-10">
                  {member.role}
                </div>
                
                {/* Professional Text Placeholder */}
                <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
                   <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center mb-1">
                     <span className="text-xl font-serif text-zinc-500">{member.name.charAt(0)}</span>
                   </div>
                   <p className="font-sans text-xs font-medium tracking-widest uppercase text-zinc-400">Placeholder</p>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-bold text-zinc-900 text-lg mb-2">{member.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
