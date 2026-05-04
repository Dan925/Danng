import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    base: './',
    site: "https://danng.netlify.app",
    output: "static",
    adapter: netlify(),
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});
