export default {
  generate: {
    fallback: true,
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ticket Master',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-notification.js',
    '~/plugins/axios.js',
    '~/plugins/filters.js',
    '~/plugins/flutterwave.js',
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
  ],
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {},
  },
  transition: 'fade',
  pwa: {
    manifest: {
      name: 'Ticket Master',
      short_name: 'TM',
      theme_color: '#F5A623',
      lang: 'en',
      useWebmanifestExtension: false,
    },
  },
}
