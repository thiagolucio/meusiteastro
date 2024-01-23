import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://thiagolucio.com.br',
  compressHTML: false,
  output: 'static',
  integrations: [react(), tailwind(), sitemap()],
  i18n: {
    defaultLocale: '',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: true
    },
  },
});