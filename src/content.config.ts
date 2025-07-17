import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).optional(),
    heroImage: z.string().optional(),
    about: z.object({
      title: z.string(),
      image: z.string().optional(),
      text: z.string().optional(),
    }).optional(),
    teams: z.array(z.object({
      name: z.string(),
      handle: z.string(),
      image: z.string(),
    })).optional(),
  }),
});

const data = defineCollection({
  schema: z.object({
    instagram: z.array(z.object({
      url: z.string().url(),
      image: z.string(),
    })).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

export const collections = { pages, data };