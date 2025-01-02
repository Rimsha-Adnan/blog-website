import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'img',
      type: 'string',
      
    }),
    defineField({
      name: 'title',
      type: 'string',
      
    }),
    defineField({
      name: 'date',
      type: 'string',
      
    }),
    defineField({
      name: 'para',
      type: 'string',
      
    }),
    
  ]
});