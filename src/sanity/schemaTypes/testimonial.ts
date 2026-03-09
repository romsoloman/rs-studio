import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'text_he', title: 'Testimonial (Hebrew)', type: 'text', rows: 4 }),
    defineField({ name: 'text_en', title: 'Testimonial (English)', type: 'text', rows: 4 }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
  ],
})
