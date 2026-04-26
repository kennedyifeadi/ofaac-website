"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { blogPosts, BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-data";

export default function BlogMain() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(null);

  const featured = blogPosts.find(p => p.featured) ?? blogPosts[0];
  const filtered = activeCategory
    ? blogPosts.filter(p => p.category === activeCategory)
    : blogPosts;

  // exclude featured from the grid unless a category is active
  const gridPosts = activeCategory
    ? filtered
    : filtered.filter(p => p.slug !== featured.slug);

  return (
    <section className="w-full bg-background pt-6 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Stories & Insights</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-zinc-900 leading-tight">
            Blog &amp; Articles
          </h1>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              !activeCategory
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400"
            }`}
          >
            All
          </button>
          {BLOG_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Article — only shown when no category filter is active */}
        {!activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-16"
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="flex flex-col md:flex-row gap-0 rounded-4xl overflow-hidden bg-white">
                {/* Image */}
                <div className="relative w-full md:w-[55%] aspect-video md:aspect-auto md:h-auto min-h-[260px] md:min-h-[380px] shrink-0">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-widest mb-4">
                      {featured.category}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-snug mb-4 group-hover:text-gold-dark transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="font-sans text-zinc-500 text-base leading-relaxed line-clamp-3 mb-6">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-zinc-400 font-medium">
                      <span className="flex items-center gap-1.5"><User size={13} /> {featured.author}</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} /> {featured.readTime}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-zinc-900 group-hover:bg-gold-dark flex items-center justify-center text-white transition-colors duration-200">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <p className="font-sans text-sm font-semibold text-zinc-500 uppercase tracking-widest">
              {activeCategory ?? "Latest Insights"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative w-full aspect-16/10 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block mb-3 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[11px] font-bold uppercase tracking-widest w-fit">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-zinc-900 leading-snug mb-2 group-hover:text-gold-dark transition-colors duration-200 flex-1">
                        {post.title}
                      </h3>
                      <p className="font-sans text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium mt-auto">
                        <span>{post.author}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
