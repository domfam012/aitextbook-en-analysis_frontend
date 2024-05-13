import { RuntimeConfig } from 'nuxt/schema';

const changeBaseURL = (url: string, baseURL: RuntimeConfig) => {
    if (url === '/calendar') {
        baseURL = '/api';
    }
    return baseURL;
};

export const useCustomFetch = (url: string, options: object) => {
    const config = useRuntimeConfig();
    const token = useCookie('token');
    const headers = {
        accept: 'application/json'
    };
    let baseURL = config.public.apiBase;

    return useFetch(() => url, {
        baseURL: changeBaseURL(url, baseURL),
        timeout: 1000,
        headers: headers,
        ...options,
        onRequest: ({ options }) => {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${token.value}`
            };
            // console.log(`request=>${url}`, options);
        },
        onRequestError({ error }) {
            // useRouter().push(`/error`);
            console.error(error);
        },
        onResponse: ({ response, options }) => {
            if (response._data.errorCode == '401') {
                useAuthStore().logoutUser();
            }
        },
        onResponseError: ({ error }) => {
            console.error(error);
        }
    });
};
