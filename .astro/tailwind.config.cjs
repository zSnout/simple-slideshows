/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: { extend: {} },
  plugins: [
    require("@tailwindcss/typography"),
    (/** @type {import("tailwindcss/types/config").PluginAPI} */ api) => {
      for (const name of ["slate", "gray", "zinc", "neutral", "stone"]) {
        api.addComponents({
          [".z-" + name + "-light"]: {
            "--z-bg": api.theme("colors.white"),
            "--z-pre-bg": api.theme(`colors.${name}.800`),
            "--z-preview-bg": api.theme(`colors.${name}.800`),

            "--z-body": api.theme(`colors.${name}.600`),
            "--z-pre": api.theme(`colors.${name}.200`),
            "--z-heading": api.theme(`colors.${name}.900`),
            "--z-ul-bullet": api.theme(`colors.${name}.300`),
            "--z-ol-bullet": api.theme(`colors.${name}.400`),

            "--z-thead-border": api.theme(`colors.${name}.300`),
            "--z-tbody-border": api.theme(`colors.${name}.200`),
          },
          [".z-" + name + "-dark"]: {
            "--z-bg": api.theme(`colors.${name}.900`),
            "--z-preview-bg": api.theme(`colors.${name}.800`),

            "--z-heading": api.theme(`colors.${name}.100`),
            "--z-body": api.theme(`colors.${name}.300`),
            "--z-ul-bullet": api.theme(`colors.${name}.600`),
            "--z-ol-bullet": api.theme(`colors.${name}.600`),

            "--z-thead-border": api.theme(`colors.${name}.600`),
            "--z-tbody-border": api.theme(`colors.${name}.700`),
          },
        })
      }
    },
  ],
}
