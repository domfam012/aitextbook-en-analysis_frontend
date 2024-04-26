// TODO: 재정의 필요
interface Auth {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string;
    };
}

/**
 * Auth
 */
export const useAuthStore = defineStore(
    'auth',
    () => {
        const { mode } = storeToRefs(useApiUserStore());
        const config = useRuntimeConfig();
        const authenticated = ref(false);
        const userAuthenticate = async () => {
            authenticated.value = true;
        };
        const loginUser = async () => {
            window.location.href = config.public.loginUrl + window.location.href;
        };

        const logoutUser = async () => {
            const homeUrl = 'http://localhost:3000/';
            const token = useCookie('token');

            token.value = null;
            mode.value = undefined;

            window.location.href = config.public.logoutUrl + homeUrl;
        };

        /**
         * 로그인정보(이전 로그아웃 시간, 오늘 로그인시간, 오늘 로그인 횟수)
         * 월드버텍에서 관리하지 않는 API
         */
        const authState = ref<Auth>();
        const calendarState = useApiCalendarStore();
        const { formatDate } = storeToRefs(calendarState);

        const getAuthInfo = async () => {
            const stageUrl = 'https://aitextbookapi-stage.i-screammedia.com';
            const { data } = await useCustomFetch(`${stageUrl}/etc/member_login_count?date=${formatDate.value}`, {
                method: 'get'
            });
            if (data.value) {
                authState.value = data.value.data as Auth;
            }
        };

        return {
            authState,
            loginUser,
            logoutUser,
            getAuthInfo,
            authenticated,
            userAuthenticate
        };
    },
    {
        persist: false
    }
);
