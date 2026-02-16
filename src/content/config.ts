import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  published: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ schema: blogSchema });

const projectsSchema = z.object({
  year: z.number(),
  title: z.string(),
  technologies: z.array(z.string()),
  github: z.string().url().optional(),
  live: z.string().url().optional(),
});

export type ProjectSchema = z.infer<typeof projectsSchema>;

const projectsCollection = defineCollection({ 
  type: 'data',
  schema: projectsSchema 
});

// Add education collection
const educationSchema = z.object({
  institution: z.string(),
  institutionUrl: z.string().url().optional(), // Add institution URL
  degree: z.string(),
  field: z.string().optional(),
  startYear: z.number(),
  endYear: z.number().optional(),
  cgpa: z.string().optional(),
  accreditation: z.string().optional(),
  accreditationUrl: z.string().url().optional(), // Add accreditation URL
  verifyUrl: z.string().url().optional(), // Add verification URL
  location: z.string().optional(),
  description: z.string().optional(),
});

export type EducationSchema = z.infer<typeof educationSchema>;

const educationCollection = defineCollection({
  type: 'data',
  schema: educationSchema
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  education: educationCollection,
};