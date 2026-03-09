import { sanityFetch } from "@/sanity/lib/fetch";
import { portfolioBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Link } from "@/i18n/routing";
import type { SanityDocument } from "next-sanity";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await sanityFetch<SanityDocument>({ query: portfolioBySlugQuery, params: { slug } });
  
  if (!project) return { title: "Not Found" };
  
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await sanityFetch<SanityDocument>({ query: portfolioBySlugQuery, params: { slug } });

  if (!project) {
    notFound();
  }

  return (
    <article className="container px-4 md:px-8 mx-auto py-24 max-w-4xl">
      <Link href="/portfolio" className="text-sm text-zinc-600 hover:text-foreground mb-8 inline-block">
        &larr; Back to Portfolio
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">{project.description}</p>
      
      <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden mb-16">
        {/* Hero image placeholder */}
      </div>
      
      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-600 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="prose prose-zinc dark:prose-invert max-w-none prose-lg">
        {project.content ? (
          <PortableText value={project.content} />
        ) : (
          <p>Detailed case study coming soon.</p>
        )}
      </div>
    </article>
  );
}
