import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/'], // Disallow indexing of Sanity studio and API routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
