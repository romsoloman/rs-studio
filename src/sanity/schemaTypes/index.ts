import { type SchemaTypeDefinition } from 'sanity'

import { portfolioType } from './portfolio'
import { postType } from './post'
import { serviceType } from './service'
import { pricingType } from './pricing'
import { aiAgentType } from './aiAgent'
import { testimonialType } from './testimonial'
import { siteSettingsType } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, postType, serviceType, pricingType, aiAgentType, testimonialType, siteSettingsType],
}
