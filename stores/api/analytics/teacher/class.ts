// TODO: 재정의 필요
interface Class {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: number;
        dt: string;
        wrdKnowCnt: number;
        wrdLittleknowCnt: number;
        wrdUnknownCnt: number;
        wrdTot: number;
        avgAnswrRt: number;
    };
}

interface ClassProps {
    data: {
        test: string;
    };
}
const ANALITICS_URL = 'dashboard/learningAnalytics';
const defaultUrl = `/teacher/${ANALITICS_URL}`;

/**
 * 독려메시지
 */
export const useApiTeacherClassStore = defineStore(
    'apiTeacherClass',
    () => {
        // 색칠판 학습 이력
        const colorBoardState = ref<Class>();

        // Touch VOCA
        const vocaState = ref<Class>();

        // 누적 학습 기록 howlong
        const cumulativeRecordHowLongState = ref<Class>();

        // 누적 학습 기록 howOften
        const cumulativeRecordHowOftenState = ref<Class>();

        // 누적 학습 기록 howMuch
        const cumulativeRecordHowMuchState = ref<Class>();

        /**
         * 색칠판 학습 이력
         * GET
         **/
        const getClassColorBoard = async (type: string) => {
            const { data } = await useCustomFetch(`${defaultUrl}/${type}`, {
                method: 'get'
            });
            if (data.value) {
                colorBoardState.value = data.value.data as Class;
            }
        };

        /**
         * Touch VOCA
         * GET
         **/
        const getClassVocaRanking = async (type: string, date: string) => {
            const { data } = await useCustomFetch(`${defaultUrl}/${type}`, {
                method: 'get',
                query: {
                    date: date
                }
            });
            if (data.value) {
                vocaState.value = data.value.data as Class;
            }
        };

        /**
         * Touch VOCA > 개인별단어 학습현황팝업
         * GET
         **/
        const getClassVocaIndividualStatus = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/individualWordLearningStatus`, {
                method: 'get'
            });
            if (data.value) {
                vocaState.value = data.value.data as Class;
            }
        };

        /**
         * 누적학습기록 > 얼마나 자주
         **/
        const getClassCumulativeRecordOften = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/howOften`, {
                method: 'get'
            });
            if (data.value) {
                cumulativeRecordHowOftenState.value = data.value.data as Class;
            }
        };

        /**
         * 누적학습기록 > 얼마나 많이
         **/
        const getClassCumulativeRecordOMany = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/howMuch`, {
                method: 'get'
            });
            if (data.value) {
                cumulativeRecordHowMuchState.value = data.value.data as Class;
            }
        };

        /**
         * 누적학습기록 > 얼마나 오래
         */
        const getClassCumulativeRecordOLong = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/howLong`, {
                method: 'get'
            });

            if (data.value) {
                cumulativeRecordHowLongState.value = data.value.data as Class;
            }
        };

        return {
            colorBoardState,
            vocaState,
            cumulativeRecordHowLongState,
            cumulativeRecordHowOftenState,
            cumulativeRecordHowMuchState,
            // 색칠판 학습 이력
            getClassColorBoard,
            // Touch VOCA
            getClassVocaRanking,
            getClassVocaIndividualStatus,
            // 누적 학습 기록
            getClassCumulativeRecordOften,
            getClassCumulativeRecordOMany,
            getClassCumulativeRecordOLong
        };
    },
    {
        persist: false
    }
);
