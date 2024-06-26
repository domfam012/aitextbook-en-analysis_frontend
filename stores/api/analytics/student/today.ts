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

export interface SessionList {
    chId: number;
    sessId: number;
    sessName: string;
}
export interface SelDayLearningLessons {
    chId: number;
    chName: string;
    sessionList: SessionList[];
}

export interface TodayChapterLearningStatus {
    sctnId: number;
    absncReviewYn: number;
    sctnNameEng: string;
    sctnNameKor: string;
}

export interface ChapterLearningStatus {
    date: string;
    chId: number;
    sessId: number;
}

interface FivePoint {
    chId: number;
    sessId: number;
    selfCheckScale: number;
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
        const learningLessonsState: Ref<SelDayLearningLessons> = ref([]);
        const chapterLearningStatusState: Ref<TodayChapterLearningStatus[]> = ref([]);
        const selectLessonState: Ref<SessionList> = ref({});
        const selectState: Ref<SelDayLearningLessons> = ref({});

        /**
         * 달력 선택일 학습 단원, 차시 목록 조회
         */
        const getSelDayLearningLessons = async (date: string) => {
            let selectDate = '';
            if (date) {
                selectDate = `date=${date}`;
            }
            const { data } = await useCustomFetch(`${defaultUrl}/selDayLearningLessons?${selectDate}`, {
                method: 'get'
            });
            if (data.value) {
                // 단원, 차시 목록 저장
                learningLessonsState.value = data.value.data;
                selectState.value = data.value.data?.[0];
                // 선택한 날짜의 첫번째 단원의 첫번째 차시
                const defaultLesson = data.value.data?.[0].sessionList[0];
                selectLessonState.value = defaultLesson;
            }

            return data.value.data;
        };

        /**
         * 선택된 단원/차시 정보
         * @param item
         * SessionList;
         */
        const updateSelectLessons = (item: SessionList) => {
            const rawData = toRaw(item);
            selectLessonState.value = rawData;
        };

        /**
         *    단원 > 차시 학습 현황
         *    GET
         **/
        const getTodayChapterLearningStatus = async ({ date, chId, sessId }: ChapterLearningStatus) => {
            const { data } = await useCustomFetch(`${defaultUrl}/chapterLearningStatus`, {
                method: 'get',
                params: { date, chId, sessId }
            });
            if (data.value) {
                chapterLearningStatusState.value = data.value.data;
            }
        };

        /**
         * 오늘의 진도학습을 스스로 점검해 볼까요? > 차시 성취기준 질문형 조회
         * GET
         **/
        const getTodayChapterAchievementCriteriaQuestion = async (sessionId: Number) => {
            const { data } = await useCustomFetch(`${defaultUrl}/chapterAchievementCriteriaQuestion?sessId=${sessionId}`, {
                method: 'get'
            });
            if (data.value) {
                questionState.value = data.value.data as Today;
            }
        };

        /**
         *    오늘의 진도학습을 스스로 점검해 볼까요? > 5점 척도 스마일 체크 저장
         *    POST
         **/
        const postTodayFivePointScale = async (params: FivePoint) => {
            const { chId, sessId, selfCheckScale } = params;
            const { data } = await useCustomFetch(
                `${defaultUrl}/fivePointScale?chId=${chId}&sessId=${sessId}8&selfCheckScale=${selfCheckScale}`,
                {
                    method: 'post'
                }
            );
            if (data.value) {
                todayState.value = data.value.data as Today;
            }
        };

        /**
         * 오늘의 Touch VOCA 그래프 통계
         * GET
         **/
        const touchVocaGraph = ref();
        const getTodayTouchVoca = async (date: string) => {
            const { data } = await useCustomFetch(`${defaultUrl}/todayTouchVoca?date=${date}`, {
                method: 'get'
            });
            if (data.value) {
                touchVocaGraph.value = data.value.data as Today;
            }
        };

        /**
         *    Touch VOCA 학습 팝업
         *    GET
         */
        const getTodayTouchVocaLearning = async (recent: number) => {
            const { data } = await useCustomFetch(`${defaultUrl}/touchVocaLearning?recentDay=${recent}`, {
                method: 'get'
            });
            if (data.value) {
                todayState.value = data.value.data as Today;
            }
        };

        return {
            todayState,
            questionState,
            touchVocaGraph,
            learningLessonsState,
            chapterLearningStatusState,
            selectLessonState,
            selectState,
            getSelDayLearningLessons,
            getTodayChapterLearningStatus,
            getTodayChapterAchievementCriteriaQuestion,
            postTodayFivePointScale,
            getTodayTouchVoca,
            getTodayTouchVocaLearning,
            updateSelectLessons
        };
    },
    {
        persist: false
    }
);
