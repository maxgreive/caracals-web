import { defineCollection, z } from 'astro:content';

const trainingSessionSchema = z.object({
  weekday: z.string(),
  time: z.string(),
  locationName: z.string(),
  locationUrl: z.string().url(),
  addressLines: z.array(z.string()).optional(),
});

const trainingScheduleBlockSchema = z.object({
  title: z.string(),
  sessions: z.array(trainingSessionSchema),
});

const trainingSeasonSchema = z.object({
  label: z.string(),
  title: z.string(),
  intro: z.array(z.string()),
  scheduleBlocks: z.array(trainingScheduleBlockSchema),
});

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

const teamSchema = z.object({
  name: z.string(),
  handle: z.string(),
  image: z.string(),
});

const homePageSchema = z.object({
  title: z.string(),
  heroImage: z.string(),
  intro: z.string(),
  links: z.array(linkSchema),
  about: z.object({
    title: z.string(),
    image: z.string(),
    text: z.string(),
  }),
  teams: z.array(teamSchema).min(1),
});

const trainingPageSchema = z.object({
  title: z.string(),
  featuredImage: z.string(),
  introVideoUrl: z.string().url(),
  currentSeason: z.enum(["summer", "winter"]),
  statusTitle: z.string(),
  importantTitle: z.string(),
  importantNotice: z.array(z.string()).min(1),
  seasons: z.object({
    summer: trainingSeasonSchema,
    winter: trainingSeasonSchema,
  }),
});

const pages = defineCollection({
  schema: z.union([homePageSchema, trainingPageSchema]),
});

const data = defineCollection({
  schema: z.object({
    instagram: z.array(z.object({
      title: z.string().optional(),
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
