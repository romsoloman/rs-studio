import { sanityFetch } from "@/sanity/lib/fetch";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Link } from "@/i18n/routing";
import type { SanityDocument } from "next-sanity";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<SanityDocument>({ query: postBySlugQuery, params: { slug } });
  
  if (!post) return { title: "Not Found" };
  
  return {
    title: `${post.title} | Blog`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<SanityDocument>({ query: postBySlugQuery, params: { slug } });

  if (!post) {
    notFound();
  }

  return (
    <article className="container px-4 md:px-8 mx-auto py-24 max-w-3xl">
      <Link href="/blog" className="text-sm text-zinc-600 hover:text-foreground mb-8 inline-block">
        &larr; Back to Blog
      </Link>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4" suppressHydrationWarning>
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">{post.title}</h1>
      
      <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden mb-16">
        {/* Cover image placeholder */}
      </div>
      
      <div className="prose prose-zinc dark:prose-invert max-w-none prose-lg">
        {post.content ? (
          <PortableText value={post.content} />
        ) : (
          <p>Content coming soon.</p>
        )}
      </div>
    </article>
  );
}
