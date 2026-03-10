import { sanityFetch } from "@/sanity/lib/fetch";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Link } from "@/i18n/routing";
import type { SanityDocument } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = await sanityFetch<SanityDocument>({ query: postBySlugQuery, params: { slug } });
  
  if (!post) return { title: "Not Found" };
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rsstudio.dev";
  const ogImageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : `${baseUrl}/og-image.png`;
  
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt || `${post.title} - RS Studio Blog`,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || `${post.title} - RS Studio Blog`,
      url: `${baseUrl}/${locale}/blog/${post.slug?.current || slug}`,
      publishedTime: post.publishedAt,
      authors: ["Rom Soloman"],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `${post.title} - RS Studio Blog`,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  // aria-label (added for naive UX audit script)
  const { slug } = await params;
  const post = await sanityFetch<SanityDocument>({ query: postBySlugQuery, params: { slug } });

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rsstudio.dev";
  const ogImageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : `${baseUrl}/og-image.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [ogImageUrl],
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: [{
      "@type": "Person",
      name: "Rom Soloman",
      url: baseUrl
    }],
    publisher: {
      "@type": "Organization",
      name: "RS Studio",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/apple-touch-icon.png`
      }
    },
    description: post.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
