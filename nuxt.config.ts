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
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],

  // Enable static site generation for GitHub Pages
  ssr: true,
  
  app: {
    // Use custom domain as base URL
    baseURL: '/',
    head: {
      title: 'Codevon — AI Software Studio',
      meta: [
        { name: 'description', content: 'We build software and AI products for you. Flexible, transparent, and fast.' },
        { property: 'og:title', content: 'Codevon — AI Software Studio' },
        { property: 'og:description', content: 'We build software and AI products for you. Flexible, transparent, and fast.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#7c3aed' } // violet
      ],
    }
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    restructureDir: '.',
    langDir: 'locales',
    // Defina NUXT_PUBLIC_SITE_URL em produção; fallback para domínio real
    baseUrl: 'https://codevon.com',
    locales: [
      { code: 'en', iso: 'en-US', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'pt-BR', iso: 'pt-BR', language: 'pt-BR', name: 'Português (Brasil)', file: 'pt-BR.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en'
    },
    experimental: {
      strictSeo: true
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