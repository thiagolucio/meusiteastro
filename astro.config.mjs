import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";


// https://astro.build/config
export default defineConfig({
  site: 'https://thiagolucio.com.br',
  compressHTML: false,
  output: 'static',
  integrations: [react(), tailwind(), sitemap(), astroI18next()]
});