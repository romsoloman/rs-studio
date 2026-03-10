import type { MetadataRoute } from 'next'
import { sanityFetch } from "@/sanity/lib/fetch"
import { groq } from "next-sanity"

const portfolioSlugsQuery = groq`*[_type == "portfolio"]{ "slug": slug.current, _updatedAt }`
const postSlugsQuery = groq`*[_type == "post"]{ "slug": slug.current, "publishedAt": publishedAt }`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rsstudio.dev'

  const routes = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/pricing', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const locales = ['he', 'en']
  const now = new Date()

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const { path, changeFrequency, priority } of routes) {
    for (const locale of locales) {
      const localePath = path === '/' ? '' : path
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${localePath}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            he: `${baseUrl}/he${localePath}`,
            en: `${baseUrl}/en${localePath}`,
          },
        },
      })
    }
  }

  try {
    const portfolioItems = await sanityFetch<{slug: string, _updatedAt: string}[]>({ query: portfolioSlugsQuery })
    const blogPosts = await sanityFetch<{slug: string, publishedAt: string}[]>({ query: postSlugsQuery })

    for (const item of portfolioItems || []) {
      if (!item.slug) continue;
      for (const locale of locales) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/portfolio/${item.slug}`,
          lastModified: item._updatedAt ? new Date(item._updatedAt) : now,
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: {
              he: `${baseUrl}/he/portfolio/${item.slug}`,
              en: `${baseUrl}/en/portfolio/${item.slug}`,
            },
          },
        })
      }
    }

    for (const post of blogPosts || []) {
      if (!post.slug) continue;
      for (const locale of locales) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/blog/${post.slug}`,
          lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
          changeFrequency: 'weekly',
          priority: 0.7,
          alternates: {
            languages: {
              he: `${baseUrl}/he/blog/${post.slug}`,
              en: `${baseUrl}/en/blog/${post.slug}`,
            },
          },
        })
      }
    }
  } catch (error) {
    console.error("Failed to fetch sanity slugs for sitemap:", error)
  }

  return sitemapEntries
}
