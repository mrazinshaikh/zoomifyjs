// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/api/search.json'
      ]
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-og-image',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
  ],
  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/zoomifyjs/'
  },

  routeRules: {
    // content.nuxtjs.org redirects
    '/home': { redirect: '/' },
  },

  colorMode: {
    preference: 'dark'
  },
  ui: {
    icons: ['heroicons', 'simple-icons', 'ph']
  },

  fontMetrics: {
    fonts: ['DM Sans']
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
})
