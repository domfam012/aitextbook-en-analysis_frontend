// TODO: 재정의 필요
interface Curi {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string;
    };
}

interface CuriProps {
    data: {
        test: string;
    };
}

const defaultUrl = `/student/${process.env.ANALITICS_URL}`;

/**
 * 학습분석 > AI Curi Talk
 */
export const useApiCuriStore = defineStore(
    'apiCuri',
    () => {
        const curiState = ref<Curi>();

        /**
         * 숫자 색칠판    학습분석
         * AI CURI Talk
         * 숫자 색칠판 완성하기
         * GET
         **/
        const getCuriNumColorFragmentDesign = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/numColorFragmentDesign`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         * 큐리
         * AI CURI Talk
         * 큐리가 칭찬한 표현
         * GET
         **/
        const getCuriComplimentExpression = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/curiComplimentExpression`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         *  큐리
         *  AI CURI Talk
         *  큐리가 아쉬워한 표현
         *  GET
         *  /student/dashboard/learningAnalytics/curiRegretfulExpression
         **/
        const getCuriRegretfulExpression = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/curiRegretfulExpression`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         * 숫자 색칠판 팝업
         * AI CURI Talk
         * 숫자 색칠판 완성하기 팝업 > 수집한 색깔조각 > 색깔조각 개수
         * GET
         **/
        const getCuriNumberOfColorPiecesCollected = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/numberOfColorPiecesCollected`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         * 숫자 색칠판 팝업
         *  AI CURI Talk
         *  숫자 색칠판 완성하기 팝업 > 수집한 색깔조각 > 도안
         *  GET
         **/
        const getCuriCollectedColorDesign = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/collectedColorFragmentDesign`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         * 숫자 색칠판 팝업
         *    AI CURI Talk
         *    숫자 색칠판 완성하기 팝업 > 남은색깔 조각 > 저장
         *    PUT
         **/
        const putCuriColorDesign = async (CuriData: CuriProps) => {
            const { data } = await useCustomFetch(`${defaultUrl}/colorFragmentDesign`, {
                method: 'post',
                body: JSON.stringify(CuriData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         * 숫자 색칠판 팝업
         *  AI CURI Talk
         *  숫자 색칠판 완성하기 팝업 > 남은색깔 조각 > 도안
         *  GET
         *  /student/dashboard/learningAnalytics/remainingColorFragmentDesign
         **/
        const getCuriRemainingColorDesign = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/remainingColorFragmentDesign`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         * 숫자 색칠판 팝업
         *  AI CURI Talk
         *  숫자 색칠판 완성하기 팝업 > 남은색깔 조각 > 색깔조각 개수
         *  GET
         **/
        const getCuriNumberOfColorPiecesRemaining = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/numberOfColorPiecesRemaining`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        /**
         * 숫자 색칠판 팝업
         *  AI CURI talk 한눈에 보기 팝업
         *  GET
         *  /student/dashboard/learningAnalytics/aiCuriTalkAtAGlance
         */
        const getCuriAiCuriTalkAtAGlance = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/aiCuriTalkAtAGlance`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        return {
            curiState,
            getCuriNumColorFragmentDesign,
            getCuriComplimentExpression,
            getCuriRegretfulExpression,
            getCuriNumberOfColorPiecesCollected,
            getCuriCollectedColorDesign,
            putCuriColorDesign,
            getCuriRemainingColorDesign,
            getCuriNumberOfColorPiecesRemaining,
            getCuriAiCuriTalkAtAGlance
        };
    },
    {
        persist: false
    }
);
