export const useCustomFetch = (url: string, options: object) => {
    const config = useRuntimeConfig();
    const token = useCookie('token');
    const headers = {
        accept: 'application/json'
    };

    return useFetch(() => url, {
        baseURL: config.public.apiBase,
        timeout: 1000,
        headers: headers,
        ...options,
        onRequest: ({ options }) => {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${token.value}`
            };
            console.log(`request=>${url}`, options);
        },
        onRequestError({ error }) {
            console.error(error);
        },
        onResponse: ({ response, options }) => {
            console.log(`response=>${url}`, response._data);

            // if (response._data.errorCode == '401') {
            //     useAuthStore().logoutUser();
            // }
        },
        onResponseError: ({ error }) => {
            console.log(error);
        }
    });
};
