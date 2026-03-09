import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
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

  // TODO: Add dynamic portfolio/blog entries from Sanity CMS
  // const portfolioItems = await sanityFetch<{slug: string}[]>({ query: portfolioSlugsQuery })
  // const blogPosts = await sanityFetch<{slug: string}[]>({ query: postSlugsQuery })

  return sitemapEntries
}
