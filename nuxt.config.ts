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

  shadcn: {
    prefix: '',
    // Put generated UI components under app/components/ui
    componentDir: 'app/components/ui',
  },
})