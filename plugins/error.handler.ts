export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        console.error(error);
    };

    // Also possible
    nuxtApp.hook('vue:error', (error, instance, info) => {
        console.error(error);
    });
});
