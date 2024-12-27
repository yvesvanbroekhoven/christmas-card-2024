// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      title: 'Merry Christmas SoundBoard2000™'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'nl',
        name: 'Nederlands'
      }
    ],
    strategy: 'prefix',
    defaultLocale: 'nl',
    vueI18n: './i18n.config.ts',
  },
  modules: ['@unocss/nuxt', '@nuxtjs/i18n'],
})