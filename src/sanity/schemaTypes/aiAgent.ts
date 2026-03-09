import { defineField, defineType } from 'sanity'

export const aiAgentType = defineType({
  name: 'aiAgent',
  title: 'AI Agent',
  type: 'document',
  fields: [
    defineField({ name: 'name_he', title: 'Name (Hebrew)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'name_en', title: 'Name (English)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description_he', title: 'Description (Hebrew)', type: 'text', rows: 3 }),
    defineField({ name: 'description_en', title: 'Description (English)', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g. "headphones", "mail")' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
})
