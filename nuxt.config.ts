import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  vite: { plugins: [tailwindcss()] },

  modules: [
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon'
  ],

  app: {
    head: {
      title: 'Codevon — AI Software Studio',
      meta: [
        { name: 'description', content: 'We build world-class AI products and software by the hour. Flexible, transparent, and fast.' },
        { property: 'og:title', content: 'Codevon — AI Software Studio' },
        { property: 'og:description', content: 'We build world-class AI products and software by the hour. Flexible, transparent, and fast.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#7c3aed' } // violet
      ],
    }
  },

  // Auto-import components from app/components (in addition to default /components)
  components: [
    { path: '~/components', pathPrefix: false }
  ],

  shadcn: {
    prefix: '',
    // Put generated UI components under app/components/ui
    componentDir: 'app/components/ui',
  },
})