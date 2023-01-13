/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-default-export */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    manifest: true,
    ssrManifest: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
      format: {
        comments: false,
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      srcDir: "src",
      base: "/",
      mode: "production",
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: ["vite.svg", "apple-touch-icon.png", "masked-icon.png"],
      manifest: {
        name: "Second brain",
        short_name: "SecBrain",
        description: "Simple note app powered by local storage",
        theme_color: "red",
        icons: [
          {
            src: "apple-touch-icon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "mask-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    vanillaExtractPlugin({
      identifiers: "debug",
    }),
  ],
  // resolve: {
  //   alias: {
  //     "@": resolve(__dirname, "./src"),
  //     "@components": resolve(__dirname, "./src/components"),
  //     "@views": resolve(__dirname, "./src/views"),
  //     "@utils": resolve(__dirname, "./src/utils"),
  //     "@hooks": resolve(__dirname, "./src/hooks"),
  //     "@assets": resolve(__dirname, "./src/assets"),
  //     "@types": resolve(__dirname, "./src/types"),
  //     "@public": resolve(__dirname, "./public"),
  //   },
  // },
});
