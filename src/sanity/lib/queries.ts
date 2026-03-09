import { groq } from 'next-sanity'

// Portfolio Queries
export const portfolioQuery = groq`*[_type == "portfolio"] | order(_createdAt desc)`
export const portfolioBySlugQuery = groq`*[_type == "portfolio" && slug.current == $slug][0]`
export const portfolioPreviewQuery = groq`*[_type == "portfolio"] | order(_createdAt desc)[0...3]`

// Blog Queries
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc)`
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

// Services & Pricing Queries
export const servicesQuery = groq`*[_type == "service"] | order(_createdAt asc)`
export const pricingQuery = groq`*[_type == "pricing"] | order(order asc)`

// AI Agents
export const aiAgentsQuery = groq`*[_type == "aiAgent"] | order(order asc)`

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"]`

// Site Settings (singleton)
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
