import { defineCollection, z } from "astro:content"

export const collections = {
  decks: defineCollection({
    schema: z.object({
      category: z.string().optional(),
      hidden: z.boolean().optional(),
      title: z.string().optional(),
    }),
  }),
}
