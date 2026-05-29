import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chendaolei.us.kg',
  output: 'static',
  integrations: [sitemap()],
});
