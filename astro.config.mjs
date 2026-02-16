import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    sitemap(),
    tailwind(),
  ],
  site: "http://sudoali.dev/",
  compressHTML: true,
});
