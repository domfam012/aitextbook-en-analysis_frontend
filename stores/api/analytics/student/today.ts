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

        /**
         * 달력 선택일 학습 단원, 차시 목록 조회
         */
        const getSelDayLearningLessons = async (date: string) => {
            let selectDate = '';
            if (date) {
                selectDate = `date=${date}`;
            }
            const { data } = await useCustomFetch(`${defaultUrl}/selDayLearningLessons?date=${selectDate}`, {
                method: 'get'
            });
            if (data.value) {
                // 단원, 차시 목록 저장
                learningLessonsState.value = data.value.data;
                // 선택한 날짜의 첫번째 단원의 첫번째 차시
                const defaultLesson = data.value.data[0].sessionList[0];
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
            console.log('item 11111 : ', item);
            const rawData = toRaw(item);
            console.log('rawData : ', rawData);

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
            const { data } = await useCustomFetch(`${defaultUrl}/chapterAchievementCriteriaQuestion`, {
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
            learningLessonsState,
            chapterLearningStatusState,
            selectLessonState,
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
