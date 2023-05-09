import { defineCollection, z } from "astro:content"

export const collections = {
  decks: defineCollection({
    schema: z.object({
      hidden: z.boolean().optional(),
    }),
  }),
}
