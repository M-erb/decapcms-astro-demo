import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import decapCmsOauth from "astro-decap-cms-oauth";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://decapcms-astro-demo.pages.dev',
  integrations: [mdx(), sitemap(), decapCmsOauth()],
  output: "hybrid",
  adapter: cloudflare()
});
