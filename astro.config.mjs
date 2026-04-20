import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://www.marcusoandre.se",
  base: '/',
  trailingSlash: 'always'
});
