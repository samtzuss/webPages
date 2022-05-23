import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/pwa-vue/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/pwa-vue/favicon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Test Project",
        short_name: "Test",
        theme_color: "#ffffff",
        start_url: "/pwa-vue/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "/pwa-vue/assets/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-vue/assets/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-vue/assets/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
})
