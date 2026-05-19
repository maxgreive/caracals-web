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

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    featuredImage: z.string().optional(),
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
    introVideoUrl: z.string().url().optional(),
    currentSeason: z.enum(["summer", "winter"]).optional(),
    statusTitle: z.string().optional(),
    importantTitle: z.string().optional(),
    importantNotice: z.array(z.string()).optional(),
    seasons: z.object({
      summer: trainingSeasonSchema,
      winter: trainingSeasonSchema,
    }).optional(),
  }),
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
