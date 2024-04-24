// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    ssr: false,

    css: ['@/assets/scss/index.scss'],

    modules: ['vuetify-nuxt-module', '@pinia/nuxt', 'nuxt3-localforage', 'dayjs-nuxt'],
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

    runtimeConfig: {
        public: {
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
