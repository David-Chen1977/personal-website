import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://chendaolei.us.kg',
  output: 'static',
  adapter: cloudflare()
});