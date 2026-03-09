import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'availability', title: 'Available for Projects', type: 'boolean', initialValue: true }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string', initialValue: '+972526841616' }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string', initialValue: 'romsoloman19@gmail.com' }),
  ],
  preview: { select: { title: 'email' } },
})
