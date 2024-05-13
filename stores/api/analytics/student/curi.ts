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
import { v4 as uuidv4 } from 'uuid';
const defaultUrl = `/student/dashboard/learningAnalytics`;
/**
 * 학습분석 > AI Curi Talk
 */
export const useApiCuriStore = defineStore(
    'apiCuri',
    () => {
        const curiState = ref<Curi>();
        const colorBoardState = ref();
        const studentColorBoardState = ref();
        const studentCollectedColorBoardState = ref();
        const calendarStore = useApiCalendarStore();
        const { formatDate } = storeToRefs(calendarStore);
        const studnetCollectedColorState = ref();
        const studentRemainingColorState = ref();
        const { user } = storeToRefs(useApiUserStore());

        /**
         * 숫자 색칠판    학습분석
         * AI CURI Talk
         * 숫자 색칠판 완성하기
         * GET
         **/
        const getCuriNumColorFragmentDesign = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/numColorFragmentDesign`, {
                method: 'get',
                query: {
                    studUuid: user.value.studentId
                }
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
            const { data } = await useCustomFetch(`${defaultUrl}/curiComplimentExpression?date=${formatDate.value}`, {
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
            const { data } = await useCustomFetch(`${defaultUrl}/curiRegretfulExpression?date=${formatDate.value}`, {
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
                method: 'get',
                query: {
                    studUuid: user.value.studentId
                }
            });
            if (data.value) {
                studnetCollectedColorState.value = data.value.data as Curi;
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
                method: 'get',
                query: {
                    studUuid: user.value.studentId
                }
            });
            if (data.value) {
                studentRemainingColorState.value = data.value.data as Curi;
            }
        };
        /**
         * 숫자 색칠판 팝업
         *  AI CURI Talk
         *  숫자 색칠판 완성하기 팝업 > 수집한 색깔조각 > 도안
         *  GET
         **/
        const getCuriCollectedColorDesign = async (date: string) => {
            const { data } = await useCustomFetch(`${defaultUrl}/collectedColorFragmentDesign`, {
                method: 'get',
                query: {
                    studUuid: user.value.studentId,
                    dsgnId: 1
                }
            });
            if (data.value) {
                studentCollectedColorBoardState.value = data.value.data as Curi;
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
                studentColorBoardState.value = data.value.data as Curi;
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
                method: 'get',
                query: {
                    studUuid: user.value.studentId,
                    dsgnId: 1
                }
            });
            if (data.value) {
                studentColorBoardState.value = data.value.data as Curi;
                studentColorBoardState.value[0].dsgnUseInfo = JSON.parse(studentColorBoardState.value[0].dsgnUseInfo);
                studentColorBoardState.value[0].dsgnUseInfo.forEach(element => {
                    element.id = uuidv4();
                });
            }
        };

        /**
         * 숫자 색칠판 팝업
         *  AI CURI talk 한눈에 보기 팝업
         *  GET
         *  /student/dashboard/learningAnalytics/aiCuriTalkAtAGlance
         */
        const getCuriAiCuriTalkAtAGlance = async (period: string) => {
            let periodUrl = '';
            if (period) {
                periodUrl = `?period=${period}`;
            }
            const { data } = await useCustomFetch(`${defaultUrl}/aiCuriTalkAtAGlance${periodUrl}`, {
                method: 'get'
            });
            if (data.value) {
                curiState.value = data.value.data as Curi;
            }
        };

        return {
            colorBoardState,
            studentColorBoardState,
            studentCollectedColorBoardState,
            studnetCollectedColorState,
            studentRemainingColorState,
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
