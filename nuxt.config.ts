import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  router: {
    options: {
      hashMode: true,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: [
    '~/plugins/vuedraggable.js'
  ],
  css: ["~/assets/main.scss"],
  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@vite-pwa/nuxt",
  ],
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'images/apple-touch-icon.png'],
    manifest: {
      name: 'Звёздочка',
      short_name: 'Звёздочка',
      description: 'Звёздочка - детский загородный лагерь',
      theme_color: '#ffffff',
      background_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },

        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
