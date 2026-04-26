"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import DSC_64 from "@/public/DSC_64.jpg";

export default function ContactHero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message.");
      setSuccess(true);
      setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-background pt-32 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Row: Big Title + Descriptor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-zinc-900 leading-[0.95] tracking-tight"
            >
              Contact Us
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-sans text-zinc-500 text-base md:text-lg max-w-xs md:max-w-sm leading-relaxed md:text-right"
          >
            Send us a message and we&apos;ll get back to you within 24 hours. We&apos;d love to hear from you.
          </motion.p>
        </div>

        {/* Main Content: Form (left) + Image (right) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full lg:flex-1"
          >
            {success ? (
              <div className="flex flex-col items-center justify-center py-24 text-center bg-zinc-50 rounded-4xl border border-zinc-100">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                <p className="text-zinc-500 max-w-sm">Thank you for reaching out. A member of our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-zinc-900 placeholder:text-zinc-400 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-zinc-900 placeholder:text-zinc-400 text-sm"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-zinc-900 placeholder:text-zinc-400 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Subject</label>
                    <select
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-zinc-900 text-sm appearance-none"
                    >
                      <option value="">Choose a subject...</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Events & Participation">Events &amp; Participation</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Membership">Membership</option>
                      <option value="Media & Press">Media &amp; Press</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Message / Special Requests</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-zinc-900 placeholder:text-zinc-400 text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                {/* Submit Button — styled like the inspiration's "Reserve Your Spot" */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-3 bg-zinc-900 hover:bg-gold-dark text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <ArrowUpRight size={16} strokeWidth={2.5} /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full lg:w-[340px] xl:w-[400px] shrink-0"
          >
            <div className="relative w-full aspect-4/5 rounded-4xl overflow-hidden group">
              <Image
                src={DSC_64}
                alt="OFAAC Culture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-zinc-900 shadow-sm border border-white/50">
                Anioma Heritage
              </div>
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
