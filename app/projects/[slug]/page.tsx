import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getProjectBySlug, projectsData } from "@/lib/projectsData";
import { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | OFAAC Projects`,
    description: project.summary,
  };
}

// Generate static params for all known projects so they are statically built
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white pt-24 md:pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto w-full px-6 sm:px-8">
        
        {/* Back Navigation */}
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 text-sm font-sans font-bold text-zinc-500 hover:text-gold-dark transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Events & Projects
        </Link>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="bg-gold-dark/10 text-gold-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            {project.status}
          </span>
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-sans">
            <Calendar size={16} />
            <span>{project.date}</span>
          </div>
        </div>

        {/* Title & Summary */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="font-sans text-xl md:text-2xl text-zinc-600 leading-relaxed font-light mb-12">
          {project.summary}
        </p>

        {/* Hero Image */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-4xl overflow-hidden mb-16 shadow-lg bg-zinc-100">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Project Content */}
        <article className="prose prose-lg prose-zinc max-w-[800px] mx-auto font-sans leading-relaxed">
          {project.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-zinc-700">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="max-w-[800px] mx-auto mt-16 pt-8 border-t border-zinc-200">
          <h4 className="font-sans text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Tag size={16} /> Related Tags
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-zinc-100 text-zinc-600 px-4 py-2 rounded-full text-sm font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
