import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  // Standard localized routes
  const routes = ['/', '/services', '/portfolio', '/blog', '/pricing', '/contact']
  const locales = ['en', 'he']

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add all static routes for each locale
  for (const route of routes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route === '/' ? '' : route}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route === '/' ? '' : route}`,
            he: `${baseUrl}/he${route === '/' ? '' : route}`,
          },
        },
      })
    }
  }

  // TODO: Add dynamic routes for portfolio and blog posts from Sanity

  return sitemapEntries
}
