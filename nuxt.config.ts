import { aliases } from 'vuetify/iconsets/mdi'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/vitify-nuxt.svg' }],
    },
  },
  cron: {
    runOnInit: true,
    timeZone: 'Asia/Jakarta',
    jobsDir: 'cron'
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    'nuxt-auth-utils',
    'nuxt-echarts',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'nuxt-cron',
  ],
  css: ['~/assets/styles/index.css'],
  experimental: {
    typedPages: true,
    payloadExtraction: true, // Faster server response by caching payloads
    // inlineSSRStyles: true,   // Inline critical CSS for better dev and production performance
  },
  typescript: { shim: false, strict: true },
  vue: { propsDestructure: true },
  vueuse: { ssrHandlers: true },
  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        viewportSize: true,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {},
        reloadOnFirstRequest: true,
      },
    },
  },
  icon: {
    clientBundle: {
      icons: Object.values(aliases).map((v) =>
        (v as string).replace(/^mdi-/, 'mdi:'),
      ),
      scan: true,
      // scan all components in the project and include icons
      // scan: true,
    },
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons',
      },
    ],
  },
  echarts: {
    charts: ['LineChart', 'BarChart', 'PieChart', 'RadarChart'],
    renderer: 'svg',
    components: [
      'DataZoomComponent',
      'LegendComponent',
      'TooltipComponent',
      'ToolboxComponent',
      'GridComponent',
      'TitleComponent',
      'DatasetComponent',
      'VisualMapComponent',
    ],
  },
  vite: {
    build: { sourcemap: false },
  },
  runtimeConfig: {
    public: {
      authorizedOrigins: [
        'http://localhost:3000',
      ],
      nonAuthURL: [
        '/api/auth/login',
        '/api/test',
        '/api/_auth/session'
      ],
    },
    session: {
      maxAge: 60 * 60 * 2 // 2 hour
    }
  },
  compatibilityDate: '2024-08-05',
  // devServer: {
  //   port: 3300
  // }
})
