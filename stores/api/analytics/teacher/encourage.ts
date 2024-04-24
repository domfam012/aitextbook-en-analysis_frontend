// TODO: 재정의 필요
interface Encourage {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string;
    };
}

interface EncourageProps {
    data: {
        test: string;
    };
}

const defaultUrl = '/teacher/dashboard/learningAnalytics';

/**
 * 독려메시지
 */
export const useApiEncourageStore = defineStore(
    'apiEncourage',
    () => {
        const encourageState = ref<Encourage>();

        /**
         * AI 진단평가 > 독려메세지 대상 조회
         */
        const getEncourage = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/encouragementMessageTarget`, {
                method: 'get'
            });
            if (data.value) {
                encourageState.value = data.value.data as Encourage;
            }
        };

        /**
         * AI 진단평가 > 독려메세지 보내기
         */
        const postEncourage = async (encourageData: EncourageProps) => {
            // TODO:URL 미정 - 변경 필요
            const { data } = await useCustomFetch(`${defaultUrl}/`, {
                method: 'post',
                body: JSON.stringify(encourageData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.value) {
                encourageState.value = data.value.data as Encourage;
            }
        };

        return {
            encourageState,
            getEncourage,
            postEncourage
        };
    },
    {
        persist: false
    }
);
