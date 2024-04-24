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
  "auth",
  () => {
    const config = useRuntimeConfig();
    const loginUser = async () => {
      window.location.href = config.public.loginUrl + window.location.href;
    };

    const logoutUser = async () => {
      const homeUrl = "http://localhost:3000/";
      const token = useCookie("token");

      token.value = null;

      window.location.href = config.public.logoutUrl + homeUrl;
    };

    /**
     * 로그인정보(이전 로그아웃 시간, 오늘 로그인시간, 오늘 로그인 횟수)
     * 월드버텍에서 관리하지 않는 API
     */
    const authState = ref<Auth>();
    const getAuthInfo = async () => {
      // TODO:URL 미정 - 변경 필요
      const { data } = await useCustomFetch("/auth", {
        method: "get",
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
    };
  },
  {
    persist: false,
  }
);
