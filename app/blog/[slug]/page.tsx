import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { getBlogPost, blogPosts } from "@/lib/blog-data";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

// Generate all static slugs at build time
export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | OFAAC Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Suggested posts (same category, excluding current)
  const related = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-4xl mx-auto w-full left-0 right-0">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/80 text-zinc-900 text-xs font-bold uppercase tracking-widest mb-4 w-fit">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 font-medium">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="w-full px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Rendered HTML Content */}
          <div
            className="prose prose-zinc prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-zinc-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-zinc-600 prose-ul:leading-relaxed
              prose-li:mb-2
              prose-strong:text-zinc-900
              prose-em:text-zinc-700
              prose-blockquote:border-l-gold prose-blockquote:text-zinc-500 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Divider */}
          <div className="border-t border-zinc-100 mt-16 pt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="font-sans text-sm text-zinc-400">Written by <strong className="text-zinc-700">{post.author}</strong> · {post.date}</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-gold-dark transition-colors"
            >
              <ArrowLeft size={14} /> More Articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="w-full px-6 md:px-12 pb-20 bg-zinc-50 border-t border-zinc-100 pt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <p className="font-sans text-sm font-semibold text-zinc-500 uppercase tracking-widest">
                More in {post.category}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(rel => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block">
                  <div className="bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="relative w-full aspect-16/10 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block mb-3 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[11px] font-bold uppercase tracking-widest w-fit">
                        {rel.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-zinc-900 leading-snug mb-2 group-hover:text-gold-dark transition-colors flex-1">
                        {rel.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-medium mt-auto">{rel.author} · {rel.readTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
