// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    ssr: false,

    css: ['@/assets/scss/index.scss'],

    modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module', '@pinia/nuxt', 'nuxt3-localforage', 'dayjs-nuxt'],
    i18n: {
        vueI18n: './i18n.config.js'
    },
    dayjs: {
        locales: ['en', 'ko'],
        plugins: ['relativeTime', 'utc', 'timezone'],
        defaultLocale: 'ko',
        defaultTimezone: 'Asia/Seoul'
    },
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions: {
            /* vuetify options */
            icons: {
                defaultSet: 'mdi',
                sets: ['mdi', 'fa']
            }
        }
    },

    pinia: {
        storesDirs: ['./stores/**']
    },

    plugins: [
        {
            src: '@/plugins/v-calendar',
            mode: 'client'
        }
    ],

    runtimeConfig: {
        public: {
            envMode: process.env.PUBLIC_ENV_MODE,
            apiBase: process.env.PUBLIC_API_BASE,
            loginUrl: process.env.PUBLIC_LOGIN_URL,
            logoutUrl: process.env.PUBLIC_LOGOUT_URL
        }
    },

    vite: {
        optimizeDeps: {
            include: ['localforage', '@unhead/vue', 'v-calendar']
        }
    }
});
