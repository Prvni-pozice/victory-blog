import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['novinky', 'servis', 'elektricke-dodavky']),
    subcategory: z.enum(['pro-vinare', 'pro-mesta', 'sklapecka']).optional(),
    author: z.string(), // ID do authors collection
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readMin: z.number(),
    tag: z.string(), // např. "Případová studie"
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    placeholder: z.string().optional(), // popis placeholderu pro mock obrázek
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    relatedSlugs: z.array(z.string()).default([]),
    externalLinks: z.array(z.object({
      label: z.string(),
      href: z.string().url(),
    })).default([]),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: z.string().optional(),
    }).optional(),
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    initials: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
  }),
});

export const collections = { blog, authors };
