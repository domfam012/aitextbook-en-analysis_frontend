import { type PiniaPluginContext } from 'pinia';

//persist option add
declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
        persist?: boolean;
    }
}

async function persistPiniaPlugin({ store, options }: PiniaPluginContext) {
    if (options.persist) {
        const stored = await useCustomLocalForage('store')
            .getItem(store.$id)
            .then(value => {
                return JSON.parse(value as string) || {};
            });
        if (stored) {
            store.$patch(stored);
        }
        store.$subscribe(() => {
            useCustomLocalForage('store').setItem(store.$id, JSON.stringify({ ...store.$state }));
        });
    }
}

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.$nuxt.$pinia.use(persistPiniaPlugin);
});
