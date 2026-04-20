"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Anioma Cultural Festival",
    description: "The annual Anioma Cultural Festival, held every Easter Monday, has grown into a flagship event, bringing together thousands from across the nine local government areas of Anioma land. It serves as a powerful platform for showcasing traditional dances, arts, crafts, and cuisine, fostering unity and cultural pride.",
    year: "Annual"
  },
  {
    title: "Annual Lecture Series",
    description: "Initiated in 2005, this series provides an intellectual forum for discussing critical issues related to Anioma culture, history, and development, featuring prominent scholars and leaders.",
    year: "Est. 2005"
  },
  {
    title: "Anioma Essence Magazine",
    description: "Our flagship publication, the Anioma Essence Magazine, serves as a vital source of information, featuring well-researched articles on Anioma/Nigeria culture and refreshing interviews.",
    year: "Publication"
  },
  {
    title: "Micro-Credit Scheme",
    description: "OFAAC has made soft loans available to members, supporting small-scale businesses, farming, and trade, thereby contributing to poverty reduction and economic empowerment within Anioma communities.",
    year: "Empowerment"
  },
  {
    title: "Health Insurance Program",
    description: "A comprehensive health insurance scheme has been rolled out for members and interested traditional rulers, underscoring our commitment to the well-being of the Anioma people.",
    year: "Healthcare"
  },
  {
    title: "Unity and Friendship",
    description: "Through its diverse activities, OFAAC has successfully built unity and friendship amongst its members across the four zones of Aniocha, Ika, Ndokwa, and Oshimili.",
    year: "Community"
  }
];

export default function AboutAchievements() {
  return (
    <section className="w-full bg-white py-10 px-6 sm:px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28 max-w-2xl"
        >
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-gold-dark block mb-4">
            A Journey of Impact
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-6">
            Our Achievements
          </h2>
          <p className="font-sans text-base md:text-lg text-zinc-600 leading-relaxed">
            Since its inception, OFAAC has been a catalyst for positive change and cultural revitalization within the Anioma community. Our achievements are a testament to the collective spirit and dedication of our members and leadership.
          </p>
        </motion.div>

        {/* Alternating Flow */}
        <div className="flex flex-col gap-12 md:gap-24 relative">
          
          {/* Vertical continuous timeline line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />

          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                
                {/* Visual Marker */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold-dark border-4 border-zinc-50 z-10" />

                {/* Content Block */}
                <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-16 lg:pr-24 items-start md:items-end text-left md:text-right' : 'md:pl-16 lg:pl-24 items-start text-left'}`}>
                  <span className="font-script text-3xl font-bold text-gold-dark mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base text-zinc-600 leading-relaxed bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-zinc-100 md:border-none">
                    {item.description}
                  </p>
                </div>

                {/* Empty Spacer for the other half */}
                <div className="hidden md:block w-1/2" />

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
