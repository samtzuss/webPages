// ref: https://vitejs.bootcss.com/config/#config-file-resolving

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/webPages/pwa-vue/',
  build: {
    outDir: '../docs/pwa-vue'
  },
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      // base: "/webPages/pwa-vue/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["favicon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Test Project",
        short_name: "Test",
        theme_color: "#ffffff",
        start_url: "/webPages/pwa-vue/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "assets/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "assets/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "assets/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
})
