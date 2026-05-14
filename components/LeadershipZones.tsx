"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

// ── Data ───────────────────────────────────────────────────────────

const steeringCommittee = [
  { name: "Arc. Kester Ifeadi",         role: "President" },
  { name: "Mr. Paddy Ugboh",             role: "Vice President" },
  { name: "Prof. Mokwunyei Josephine",  role: "Chairperson" },
  { name: "Prof. Eric Eboh",            role: "Member" },
  { name: "Prof. Oboko Uche",           role: "Member" },
  { name: "Mr. Ogwu Emmanuel",          role: "Member" },
  { name: "Chief Ndili",                role: "Member" },
  { name: "Chief Alfred",               role: "Member" },
  { name: "Dr. Emeka Esogbue",          role: "Secretary" },
  { name: "Barr. Monn Olodu",          role: "Member" },
  {name: "Prince Walter Eziashi", role:"Member"},
  { name: "Prince Andrew Obi",          role: "National Coordinator" },
];

const zones = [
  {
    number: 1,
    name: "Ndokwa",
    members: [
      { name: "Onochieze Alfred Onyenwosa", role: "Team Leader" },
      { name: "Dr. Agha Charles",            role: "Resource Officer" },
      { name: "Elder Ossai O. Ossai",         role: "Protocol & Logistics Officer" },
      { name: "Mr. Okolo Olise Frank",        role: "Technical Officer" },
    ],
  },
  {
    number: 2,
    name: "Aniocha South",
    members: [
      { name: "Associate Professor Uche Oboko",           role: "Team Leader" },
      { name: "Dominic Marior Uduh",  role: "Resource Person 1" },
      { name: "Obi Christabel Adaeze",role: "Resource Person 2" },
      { name: "Kevin Oki",            role: "Resource Person 3" },
      { name: "Obiokolie Benedict",   role: "Technical & Logistics Officer" },
    ],
  },
  {
    number: 3,
    name: "Aniocha North",
    members: [
      { name: "Emmanuel Ogwu",        role: "Team Leader" },
      { name: "Austen Anizor",        role: "Resource Officer" },
      { name: "Kelvin Akazue",        role: "Protocol & Logistics Officer" },
      { name: "Igbenebor Oge Festus", role: "Technical Officer" },
    ],
  },
  {
    number: 4,
    name: "Ika",
    members: [
      { name: "Prof. Eric Eboh",                  role: "Team Leader" },
      { name: "Chief Jonathan Agbejiagwe Ohioya",  role: "Resource Person" },
      { name: "Prince Kester Nkemachor",           role: "Logistics Person" },
      // { name: "Mr. Amos Chukwuekwu",              role: "Technical Officer" },
    ],
  },
  {
    number: 5,
    name: "Ukwuani",
    members: [
      { name: "Dr. Emeka Esogbue",              role: "Team Leader" },
      { name: "Rev. Felix Ifeanyi Nwabuokei",   role: "Resource Person" },
      { name: "Engr. Wisdom Ikpeteshi Ndubishi",role: "Liaison Person" },
      { name: "Mr. Emeka Onah",                 role: "Logistics Person" },
    ],
  },
  {
    number: 6,
    name: "Oshimili North & South",
    members: [
      { name: "Chief Augustine Ndili",         role: "Team Leader" },
      { name: "Prince Walters Onyeisi Eziashi",role: "Assistant Team Leader" },
      { name: "Dr. Victor Igweonwu",           role: "Resource Officer" },
      { name: "Pst. Japheth Ebigwai",          role: "Protocol & Logistics Officer" },
      { name: "Thomas Okolo",                  role: "Technical Officer" },
    ],
  },
];

// ── Role badge colour helper ────────────────────────────────────────
function roleBadge(role: string) {
  if (role.toLowerCase().includes("leader") || role.toLowerCase().includes("president") || role.toLowerCase().includes("chair"))
    return "bg-gold/15 text-gold-dark";
  if (role.toLowerCase().includes("secretary") || role.toLowerCase().includes("coordinator"))
    return "bg-blue-50 text-blue-700";
  return "bg-zinc-100 text-zinc-600";
}

// ── Component ──────────────────────────────────────────────────────
export default function LeadershipZones() {
  return (
    <div className="bg-white">

      {/* ── Steering Committee ──────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-4">
              <Users size={14} /> Heritage Project
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Steering Committee
            </h2>
            <p className="font-sans text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
              The distinguished committee driving the Anioma Heritage Project — a blend of academic scholarship, cultural leadership, and community experience.
            </p>
          </motion.div>

          {/* Members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steeringCommittee.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
              >
                {/* Number badge */}
                <span className="shrink-0 w-9 h-9 rounded-full bg-gold/20 text-gold font-bold font-serif text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-sans font-semibold text-white text-sm leading-snug truncate">{member.name}</p>
                  <p className="font-sans text-xs text-gold mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zone Teams ──────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-zinc-50">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Zonal Research Teams
            </h2>
            <p className="font-sans text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
              Six dedicated teams conducting fieldwork across all Anioma zones — collecting oral histories, cultural artefacts, and community records.
            </p>
          </motion.div>

          {/* Zones grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {zones.map((zone, zi) => (
              <motion.div
                key={zone.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: zi * 0.08 }}
                className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Zone header strip */}
                <div className="px-6 py-4 bg-zinc-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-zinc-900 font-bold font-serif text-sm shrink-0">
                    {zone.number}
                  </span>
                  <div>
                    <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-400">Team {zone.number}</p>
                    <h3 className="font-serif font-bold text-white text-lg leading-tight">{zone.name}</h3>
                  </div>
                </div>

                {/* Members list */}
                <ul className="divide-y divide-zinc-100">
                  {zone.members.map((member) => (
                    <li key={member.name} className="flex items-center justify-between gap-3 px-6 py-3.5">
                      <span className="font-sans text-sm font-semibold text-zinc-800 leading-snug">{member.name}</span>
                      <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full whitespace-nowrap ${roleBadge(member.role)}`}>
                        {member.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
