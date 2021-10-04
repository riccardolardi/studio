const frontendUrl = 'https://www.riccardolardi.com'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Studio Riccardo Lardi',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Das Studio Riccardo Lardi spezialisiert sich auf die Planung, Konzeption, Gestaltung und Entwicklung von Projekten zwischen digitalem und physischem Raum.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:url', content: 'https://www.riccardolardi.com' },
      { property: 'og:image', content: 'https://www.riccardolardi.com/og.png' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/favicon.svg', color: '#0035cc' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/type.scss',
    '~/assets/scss/elements.scss',
    '~/assets/scss/animations.scss',
  ],

  // Style Resources: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ['~/assets/scss/_vars.scss', '~/assets/scss/_mixins.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/carousel.js', mode: 'client', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['three'],
  },

  // https://sitemap.nuxtjs.org
  sitemap: {
    hostname: frontendUrl,
  },

  // https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: '*',
    Disallow: '',
  },
}
