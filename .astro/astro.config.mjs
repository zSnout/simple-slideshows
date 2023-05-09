import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import nesting from "tailwindcss/nesting"

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [nesting()],
      },
    },
  },
  integrations: [tailwind()],
})
