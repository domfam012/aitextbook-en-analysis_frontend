// TODO: 재정의 필요
interface Today {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string;
    };
}

interface TodayProps {
    data: {
        test: string;
    };
}

const defaultUrl = `/student/dashboard/learningAnalytics`;

/**
 * 독려메시지
 */
export const useApiTodayStore = defineStore(
    'apiToday',
    () => {
        const todayState = ref<Today>();
        const questionState = ref();
        /**
         *    단원 > 차시 학습 현황
         *    GET
         **/
        const getTodayChapterLearningStatus = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/chapterLearningStatus`, {
                method: 'get'
            });
            if (data.value) {
                todayState.value = data.value.data as Today;
            }
        };

        /**
         * 오늘의 진도학습을 스스로 점검해 볼까요? > 차시 성취기준 질문형 조회
         * GET
         **/
        const getTodayChapterAchievementCriteriaQuestion = async (sessionId: Number) => {
            const { data } = await useCustomFetch(
                `${defaultUrl}/chapterAchievementCriteriaQuestion
            
            `,
                {
                    method: 'get'
                }
            );
            if (data.value) {
                questionState.value = data.value.data as Today;
            }
        };

        /**
         *    오늘의 진도학습을 스스로 점검해 볼까요? > 5점 척도 스마일 체크 저장
         *    POST
         **/
        const postTodayFivePointScale = async (TodayData: TodayProps) => {
            // TODO:URL 미정 - 변경 필요
            const { data } = await useCustomFetch(`${defaultUrl}/fivePointScale`, {
                method: 'post',
                body: JSON.stringify(TodayData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.value) {
                todayState.value = data.value.data as Today;
            }
        };

        /**
         * 오늘의 Touch VOCA    그래프 통계
         * GET
         **/
        const getTodayTouchVoca = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/todayTouchVoca`, {
                method: 'get'
            });
            if (data.value) {
                todayState.value = data.value.data as Today;
            }
        };

        /**
         *    Touch VOCA 학습 팝업
         *    GET
         */
        const getTodayTouchVocaLearning = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/touchVocaLearning`, {
                method: 'get'
            });
            if (data.value) {
                todayState.value = data.value.data as Today;
            }
        };

        return {
            todayState,
            questionState,
            getTodayChapterLearningStatus,
            getTodayChapterAchievementCriteriaQuestion,
            postTodayFivePointScale,
            getTodayTouchVoca,
            getTodayTouchVocaLearning
        };
    },
    {
        persist: false
    }
);
